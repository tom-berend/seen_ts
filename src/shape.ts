import { Transformable, M, IDENTITY } from './transformable'
import { Material } from './materials'
import { Surface } from './surface'
import { V4, V3 } from './vectorMath';
import { Camera, PixelElement } from './camera'
import {Color} from './color'

// the raytrace function returns a point
export interface PixelIntercept {
    shape: Mesh,
    surface: Surface,
    point: V3
}

export class Shape extends Transformable{
    type: string
    point: V3
    color: Color
    specular: number
    lambert: number
    ambient: number

}


// A `Mesh` contains a collection of surfaces. They may create a closed 3D
// shape, but not necessarily. For example, a cube is a closed shape, but a
// patch is not.
export class Mesh extends Shape {

    public type: string;
    public surfaces: Surface[];


    constructor(type: string, surfaces: Surface[]) {
        super()
        this.type = type;
        this.surfaces = surfaces
    }

    recalculateSurfaces() {
        let surfaceList: Surface[] = []
        this.recalculateMatrix()  // this shape is a 'transformable' with one matrix
        this.surfaces.forEach((surface) => {
            // apply the shape's m to that surface
            // surface.points.map((p) => showPoint('points', p))
            surface.transform(this.m)
            // surface.transformedPoints.map((p) => showPoint('transformedpoints', p))
        })
    }

    /** returns the interception point or false */
    rayTrace(eye: V3, direction: V3): V3 | false {
        this.surfaces.forEach(surface => {

        })
        return false

    }


    visibleSurfaces(camera: Camera): Surface[] {
        let surfaceList: Surface[] = []
        this.surfaces.forEach((surface) => {
            // some filter here...
            surfaceList.push(surface)
        })
        return (surfaceList)
    }


    /** Apply the supplied fill `Material` to each surface */
    fill(fill: Material) {
        //    this.eachSurface (s) => { s.fill(fill)}
        return this
    }

    /** Apply the supplied stroke `Material` to each surface */
    stroke(stroke: Material) {
        //    this.eachSurface (s) -> s.stroke(stroke)
        return this
    }
}

function showPoint(msg: String, p: V4) {
    console.log(`${msg} (${p.x},${p.y},${p.z},${p.w})`)
}