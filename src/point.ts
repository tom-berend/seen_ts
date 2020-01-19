import { M4 } from "./vectorMath";

// The `Point` object contains x,y,z, and w coordinates. `Point`s support
// various arithmetic operations with other `Points`, scalars, or `Matrices`.
//
// Most of the methods on `Point` are destructive, so be sure to use `.copy()`
// when you want to preserve an object's value.




/**  Convenience method for creating a new `Point` object*/
export function P(x: number, y: number, z: number, w: number = 1): Point {
    return (new Point(x, y, z, w))
}


export class Point {
    x: number
    y: number
    z: number
    w: number

    constructor(x: number = 0, y: number = 0, z: number = 0, w: number = 1) {
        this.x = x
        this.y = y
        this.z = z
        this.w = w
    }

    /** useful for looking at a point with console.log()  */
    show(): string {
        return (`P(${this.x}, ${this.y}, ${this.z}) `)
    }

    /** Creates and returns a new `Point` with the same values as this object. */
    copy() {
        return P(this.x, this.y, this.z, this.w)
    }

    /** Copies the values of the supplied `Point` into this object. */
    set(p: Point) {
        this.x = p.x
        this.y = p.y
        this.z = p.z
        this.w = p.w
        return this
    }


    // Performs parameter-wise addition with the supplied `Point`. Excludes `this.w`.
    add(q: Point) {
        this.x += q.x
        this.y += q.y
        this.z += q.z
        return this
    }

    // Performs parameter-wise subtraction with the supplied `Point`. Excludes `this.w`.
    subtract(q: Point) {
        this.x -= q.x
        this.y -= q.y
        this.z -= q.z
        return this
    }

    // Apply a translation.  Excludes `this.w`.
    translate(x: number, y: number, z: number) {
        this.x += x
        this.y += y
        this.z += z
        return this
    }

    // Multiplies each parameters by the supplied scalar value. Excludes `this.w`.
    multiply(n: number) {
        this.x *= n
        this.y *= n
        this.z *= n
        return this
    }

    // Divides each parameters by the supplied scalar value. Excludes `this.w`.
    divide(n: number) {
        this.x /= n
        this.y /= n
        this.z /= n
        return this
    }

    // Rounds each coordinate to the nearest integer. Excludes `this.w`.
    round() {
        this.x = Math.round(this.x)
        this.y = Math.round(this.y)
        this.z = Math.round(this.z)
        return this
    }

    // Divides this `Point` by its magnitude. If the point is (0,0,0) we return (0,0,1).
    normalize() {
        let n = this.magnitude()
        if (n == 0) // Strict zero comparison -- may be worth using an epsilon
            this.set(POINT_Z)
        else
            this.divide(n)
        return this
    }

    /** Returns a new point that is perpendicular to this point */
    perpendicular() {
        let n = this.copy().cross(POINT_Z)
        let mag = n.magnitude()
        if (mag !== 0)
            return n.divide(mag)
        // can't find perpendicular of z axis, so use x axis
        return this.copy().cross(POINT_X).normalize()
    }

    // Apply a transformation from the supplied `Matrix`.
    transform(matrix: M4): Point {  // TODO: fix up when Matrix is defined
        
        let r = POINT_POOL
        r.x = this.x * matrix.at(0) + this.y * matrix.at(1) + this.z * matrix.at(2) + this.w * matrix.at(3)
        r.y = this.x * matrix.at(4) + this.y * matrix.at(5) + this.z * matrix.at(6) + this.w * matrix.at(7)
        r.z = this.x * matrix.at(8) + this.y * matrix.at(9) + this.z * matrix.at(10) + this.w * matrix.at(11)
        r.w = this.x * matrix.at(12) + this.y * matrix.at(13) + this.z * matrix.at(14) + this.w * matrix.at(15)

        this.set(r)
        return (this)
    }

    // Returns this `Point`s magnitude squared. Excludes `this.w`.
    magnitudeSquared() {
        return this.dot(this)
    }

    // Returns this `Point`s magnitude. Excludes `this.w`.
    magnitude() {
        return Math.sqrt(this.magnitudeSquared())
    }

    // Computes the dot product with the supplied `Point`.
    dot(q: Point) {
        return this.x * q.x + this.y * q.y + this.z * q.z
    }

    /** Computes the cross product with the supplied `Point`. */
    cross(q: Point) {
        let r = POINT_POOL
        r.x = this.y * q.z - this.z * q.y
        r.y = this.z * q.x - this.x * q.z
        r.z = this.x * q.y - this.y * q.x

        this.set(r)
        return this
    }
}


// seen.Points = {
//   X    : -> seen.P(1, 0, 0)
//   Y    : -> seen.P(0, 1, 0)
//   Z    : -> seen.P(0, 0, 1)
//   ZERO : -> seen.P(0, 0, 0)
// }



// A pool object which prevents us from having to create new `Point` objects
// for various calculations, which vastly improves performance.
var POINT_POOL = P(0, 0, 0, 0)

// A few useful `Point` objects. Be sure that you don't invoke destructive
// methods on these objects.
export const POINT_ZERO = P(0, 0, 0)
export const POINT_X = P(1, 0, 0)
export const POINT_Y = P(0, 1, 0)
export const POINT_Z = P(0, 0, 1)

