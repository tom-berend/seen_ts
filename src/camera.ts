
// //// Camera
// //////// Projections, Viewports, and Cameras
// ------------------

import { M, Transformable } from './transformable'
import { V3, M4 } from './vectorMath'
import { Canvas } from './canvas'
import { Mesh } from './shape'
import { Surface } from './surface'


// These projection methods return a 3D to 2D `Matrix` transformation.
// Each projection assumes the camera is located at (0,0,0).
export class Projection {


    // Creates a perspective projection matrix
    static perspectiveFov(fovyInDegrees = 50, front = 1) {
        let tan = front * Math.tan(fovyInDegrees * Math.PI / 360.0)
        return this.perspective(-tan, tan, -tan, tan, front, 2 * front)
    }

    /** Creates a perspective projection matrix with the supplied frustrum */
    static perspective(left = -1, right = 1, bottom = -1, top = 1, near = 1, far = 100): M4 {
        let near2 = 2 * near
        let dx = right - left
        let dy = top - bottom
        let dz = far - near

        let m = new Array(16)

        m[0] = near2 / dx
        m[1] = 0.0
        m[2] = (right + left) / dx
        m[3] = 0.0

        m[4] = 0.0
        m[5] = near2 / dy
        m[6] = (top + bottom) / dy
        m[7] = 0.0

        m[8] = 0.0
        m[9] = 0.0
        m[10] = -(far + near) / dz
        m[11] = -(far * near2) / dz

        m[12] = 0.0
        m[13] = 0.0
        m[14] = -1.0
        m[15] = 0.0
        return M(m);   // Matrix class
    }

    /** Creates a orthographic projection matrix with the supplied frustrum */
    static ortho(left = -1, right = 1, bottom = -1, top = 1, near = 1, far = 100): M4 {
        let near2 = 2 * near
        let dx = right - left
        let dy = top - bottom
        let dz = far - near

        let t = new Transformable
        let m = new Array(16)
        m[0] = 2 / dx
        m[1] = 0.0
        m[2] = 0.0
        m[3] = (right + left) / dx

        m[4] = 0.0
        m[5] = 2 / dy
        m[6] = 0.0
        m[7] = -(top + bottom) / dy

        m[8] = 0.0
        m[9] = 0.0
        m[10] = -2 / dz
        m[11] = -(far + near) / dz

        m[12] = 0.0
        m[13] = 0.0
        m[14] = 0.0
        m[15] = 1.0
        return M(m);   // matrix class
    }
}
export class Viewport {
    public prescale: M4
    public postscale: M4

    constructor() {
        this.center(500, 500, 0, 0);
    }

    /** Create a viewport where the scene's origin is centered in the view */
    center(width = 500, height = 500, x = 0, y = 0) {
        this.prescale = new M4()
            .translate(new V3([-x, -y, -height]))
            .scale(new V3([1 / width, 1 / height, 1 / height]))

        this.postscale = new M4()
            .scale(new V3([width, -height, height]))
            .translate(new V3([x + width / 2, y + height / 2, height]))

    }

    /** Create a view port where the scene's origin is aligned with the origin ([0, 0]) of the view */
    origin(width = 500, height = 500, x = 0, y = 0): Viewport {
        this.prescale = new Transformable()
            .m
            .translate(new V3([-x, -y, -1]))
            .scale(new V3([1 / width, 1 / height, 1 / height]))

        this.postscale = new Transformable()
            .m
            .scale(new V3([width, -height, height]))
            .translate(new V3([x, y, 1]))

        return this
    }
}

// The `Camera` model contains all three major components of the 3D to 2D tranformation.
//
// First, we transform object from world-space (the same space that the coordinates of
// surface points are in after all their transforms are applied) to camera space. Typically,
// this will place all viewable objects into a cube with coordinates:
// x = -1 to 1, y = -1 to 1, z = 1 to 2
//
// Second, we apply the projection transform to create perspective parallax and what not.
//
// Finally, we rescale to the viewport size.
//
// These three steps allow us to easily create shapes whose coordinates match up to
// screen coordinates in the z = 0 plane.

export class Camera extends Transformable {

    constructor(options?: string) {
        super();
        //seen.Util.defaults(this., options, this.defaults)
        this.m = Projection.perspective()
    }
}

// the pixelCamera has a generator that drives the raytrace
export interface PixelElement {
    n: number  // 0 to width*height
    origin: V3
    direction: V3
}


export class PixelCamera {  // does NOT extend Transformable yet

    // the PixelCamera is a pyramid with a square bottom
    // the flat grid bottom faces the scene, with the same # pixels as the canvas
    // the pyramid height is the distance to the eye.

    // a flag (orthographic:Boolean) marks the height as 'infinite'
    // in which case all viewing rays are normal to the flat grid

    public eyePosition: V3  // center of pixel flat square
    public direction: V3  // normal to the flat square, pointing to scene
    // if orthographic, then all rays get this direction

    public eyeDistance: Number  // height of triangle, normal * -1 to the center of the flat grid

    public width: number // comes from Canvas
    public height: number  // TODO: implement resize method

    public orthographic = false  // default to perspective

    constructor(canvas: Canvas) {
        this.eyePosition = new V3([0, 0, 100])
        this.direction = new V3([0, 0, 1])

        this.width = 2 // canvas.width
        this.height = 2 //canvas.height

        this.eyeDistance = 100  // more intuitive if view angle?
        this.orthographic = false

    }

    rayDirection(iPixel:number,jPixel:number):V3{
        if(this.orthographic){
            // TODO use ip and jp to offset
            return (this.direction)
        }else{
            // TODO calculate pixel position and then direction vector
            return (this.direction)

        }
    }

}





