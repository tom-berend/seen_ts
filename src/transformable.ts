import { Projection } from "./camera"
import { V3, M4 } from './vectorMath'


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
    return (new M4(m))
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
    public m: M4 = new M4(IDENTITY) // shallow copy
    public projection: M4

    // rotation is classic Euler angles.  It rotates the whole system around a "Line of Nodes" N.
    public _rotation: V3 = new V3([1, 1, 1])  // really three angles
    public _scale: V3 = new V3([1, 1, 1])
    public _position: V3 = new V3([1, 1, 1])

    ///////////////////////
    // define get and set for rotation, scale, position

    get rotation(): V3 {
        return this._rotation
    }
    set rotation(r: V3) {
        this._rotation = r
    }

    get scale(): V3 {
        return this._scale
    }
    set scale(r: V3) {
        this._scale = r
    }

    get position(): V3 {
        return this._position
    }
    set position(r: V3) {
        this._position = r
    }


    recalculateMatrix() {
        this.m = new M4()
            .scale(this._scale)
            .translate(this._position)
            .rotate(this._rotation.x, new V3([1, 0, 0]))
            .rotate(this._rotation.y, new V3([0, 1, 0]))
            .rotate(this._rotation.z, new V3([0, 0, 1]))
        // console.log('recalculate', this.m)
    }

}




