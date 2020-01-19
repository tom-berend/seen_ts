import { P } from './point'
import {V4} from './vectorMath'

// //// Affine
// //////// Fake projections with affine transforms
// ------------------
//
// It is not possible exactly render text in a scene with a perspective
// projection because Canvas and SVG support only affine transformations. So,
// in order to fake it, we create an affine transform that approximates the
// linear effects of a perspective projection on an unrendered planar surface
// that represents the text's shape. We can use this transform directly in the
// text painter to warp the text.
//
// This fake projection will produce unrealistic results with large strings of
// text that are not broken into their own shapes.

// This is the set of points that must be used by a surface that will use an
// affine transform for rendering.
const ORTHONORMAL_BASIS = [
    P(0, 0, 0),
    P(20, 0, 0),
    P(0, 20, 0),
]

// This matrix is built using the method from this StackOverflow answer:
// http://stackoverflow.com/questions/22954239/given-three-points-compute-affine-transformation
//
// We further re-arranged the rows to avoid having to do any matrix factorization.
const INITIAL_STATE_MATRIX = [
    [20, 0, 1, 0, 0, 0],
    [0, 20, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0],
    [0, 0, 0, 20, 0, 1],
    [0, 0, 0, 0, 20, 1],
    [0, 0, 0, 0, 0, 1],
]

// Computes the parameters of an affine transform from the 3 projected
// points.
// 
// Because we control the initial values of the points, we can re-use the
// state matrix. Furthermore, because we have use a special layout (upper
// triangular) for this matrix, we avoid any matrix factorization and can go
// directly to back-substitution to solve the matrix equation.
//
// To use the affine transform, use the indices like so (note that we flip y):
//     x[0], x[3], -x[1], -x[4], x[2], x[5]
function solveForAffineTransform(points: V4[]) {
    let A = INITIAL_STATE_MATRIX

    let b = [
        points[1].x,
        points[2].x,
        points[0].x,
        points[1].y,
        points[2].y,
        points[0].y,
    ]

    // Use back substitution to solve A*x=b for x
    let x = new Array(6)
    let n = A.length
    for (let i = (n - 1); i > 0; i--) {
        x[i] = b[i]
        for (let j = (i + 1); j < n; j++) {
            x[i] -= A[i][j] * x[j]
        }
        x[i] /= A[i][i]
    }
    return x
}
