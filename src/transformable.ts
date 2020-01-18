import { Projection } from "./camera";

// `Transformable` base class extended by `Shape` and `Group`.
//
// It stores transformations in the scene. These include:
// (1) Camera Projection and Viewport transformations.
// (2) Transformations of any `Transformable` type object
//
// Underneath, it's just matrix arithmetic.  When you use
// a matrix object in this library, they are really
// instances of 'Transformable'

// A convenience method for constructing Matrix objects.
export function M(m: number[]) {
    console.assert(m.length === 16, 'array for M() was not length 16')
    return (new Matrix(m))
}

// Most of the matrix methods are destructive, so be sure to use `.copy()`
// when you want to preserve an object's value.

// All `Transformable` objects get matrix-transformation methods like
//  'scale', 'translate', 'rotx', 'roty', 'rotz', 'matrix', 'reset', 'bake'
//
// The advantages of keeping transforms in `Matrix` form are
// (1) lazy computation of point position
// (2) ability combine hierarchical transformations easily
// (3) ability to reset transformations to an original state.
//
// Resetting transformations is especially useful when you want to animate
// interpolated values. Instead of computing the difference at each animation
// step, you can compute the global interpolated value for that time step and
// apply that value directly to a matrix (once it is reset).

export const IDENTITY =
    [1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1];


// Groups and Shapes are decendents of 'transformable', a single matrix
// determines their scale, rotation, and translation     

// Cameras and Lights are also transformables, but this doesn't totally make 
// sense since they can't be scaled.
export class Transformable {
    public m: Matrix = new Matrix(IDENTITY) // shallow copy
    public projection: Matrix

    isEqual(other: Transformable) {     // of course the caller could simply use   me.m.isEqual(other.m)
        return this.m.isEqual(other.m)
    }
}

export class Matrix {

    public m = Array.from(IDENTITY)
    private ARRAY_POOL = Array.from(IDENTITY)
    private baked = Array.from(IDENTITY);

    /** Accepts a 16-value `Array`, defaults to the identity matrix.*/
    constructor(m?: number[]) {
        if (m)
            this.m = m;
    }


    ///////////////////////////////////////////////
    // here is the method that does all the work !!
    ///////////////////////////////////////////////

    // Apply a transformation`
    transform(m: Matrix) {
        this.multiply(m)
        return this
    }

    ///////////////////////////////////////////////
    // rest of the class is just matrix arithmetic
    ///////////////////////////////////////////////


    // Returns a new matrix instances with a copy of the value array
    copy() {
        return new Matrix(Array.from(this.m))
    }

    // Multiply by the 16-value `Array` argument. This method uses the
    // `ARRAY_POOL`, which prevents us from having to re-initialize a new
    // temporary matrix every time. This drastically improves performance.

    multiply(m: Matrix): Matrix {
        if (!Array.isArray(m))  // will fail anyhow, but want a stack trace
            console.trace('transformable multiply', m)

        let c = this.ARRAY_POOL  // just a reference pointer
        for (let j = 0; j < 4; j++) {
            for (let i = 0; i < 16; i += 4) {
                c[i + j] =
                    m.m[i] * this.m[j] +
                    m.m[i + 1] * this.m[4 + j] +
                    m.m[i + 2] * this.m[8 + j] +
                    m.m[i + 3] * this.m[12 + j]
            }
        }
        this.ARRAY_POOL = this.m  // just a reference pointer
        this.m = c
        return this
    }

    // Resets the matrix to the baked-in (default: identity).
    reset(): Matrix {
        this.m = Array.from(this.baked) // shallow copy
        return this
    }

    // Sets the array that this matrix will return to when calling `.reset()`.
    // With no arguments, it uses the current matrix state.
    bake(m: number[]) {
        if (m)
            this.baked = m
        else
            this.baked = Array.from(this.m)
        return this
    }

    //   // Multiply by the `Matrix` argument.
    //   multiply(b: matrix) {
    //       return this.matrix(b.m)
    //   }


    //   // Tranposes this matrix
    //   transpose() {
    //       let c = this.ARRAY_POOL;
    //       let i, k, len, ti;
    //       for (i = k = 0, len = TRANSPOSE_INDICES.length; k < len; i = k++) {
    //           ti = TRANSPOSE_INDICES[i];
    //           c[i] = this.m[ti];
    //       }
    //       ARRAY_POOL = this.m;
    //       this.m = c;
    //       return this;
    //   }


    // Apply a rotation about the X axis. `Theta` is measured in Radians
    rotx(theta: number): Matrix {
        let ct = Math.cos(theta)
        let st = Math.sin(theta)
        let rm = [1, 0, 0, 0, 0, ct, -st, 0, 0, st, ct, 0, 0, 0, 0, 1]
        return M(rm)
    }

    // Apply a rotation about the Y axis. `Theta` is measured in Radians
    roty(theta: number): Matrix {
        let ct = Math.cos(theta)
        let st = Math.sin(theta)
        let rm = [ct, 0, st, 0, 0, 1, 0, 0, -st, 0, ct, 0, 0, 0, 0, 1]
        return M(rm)
    }

    // Apply a rotation about the Z axis. `Theta` is measured in Radians
    rotz(theta: number): Matrix {
        let ct = Math.cos(theta)
        let st = Math.sin(theta)
        let rm = [ct, -st, 0, 0, st, ct, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
        return M(rm)
    }

    // Apply a translation. All arguments default to `0`
    translate(x: number = 0, y: number = 0, z: number = 0): Matrix {
        let rm = [1, 0, 0, x, 0, 1, 0, y, 0, 0, 1, z, 0, 0, 0, 1]
        return M(rm)
    }

    // Apply a scale. If not all arguments are supplied, each dimension (x,y,z)
    // is copied from the previous arugment. Therefore, `_scale()` is equivalent
    // to `_scale(1,1,1)`, and `_scale(1,-1)` is equivalent to `_scale(1,-1,-1)`
    scale(sx: number = 1, sy?: number, sz?: number): Matrix {
        if (!sy)
            sy = sx
        if (!sz)
            sz = sy
        let rm = [sx, 0, 0, 0, 0, sy, 0, 0, 0, 0, sz, 0, 0, 0, 0, 1]
        return M(rm)
    }

    // Returns `true` iff the supplied `Arrays` are the same size and contain the same values.
    isEqual(other: Matrix) {
        var i, j, len, val;
        // if (this.matrix.length !== other.length) {
        //    return false;
        // }
        for (i = 0, len = 16; i < len; i++) {
            if (this.m[i] !== other.m[i]) {
                return false;
            }
        }
        return true;
    }
}




//   identity() {
//       return (new Transformable())
//   }

//   flipx() {
//       return (this.identity().scale(-1, 1, 1))
//   }
//   flipy() {
//       return (this.identity().scale(1, -1, 1))
//   }
//   flipz() {
//       return (this.identity().scale(1, 1, -1))
//   }








