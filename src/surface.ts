
// //// Surfaces and Shapes
// ------------------

// TODO:  replace 'surfaces' with 'triangles' 
// 

import { Color } from './color'
import { Point, P } from './point'
import { Util } from './util'
import { Material } from './materials'
import { Transformable, } from './transformable'
import {M4 } from './vectorMath'
import { StrokeProperties, FillProperties } from './canvas'

// A `Surface` is a defined as a planar object in 3D space. These paths don't
// necessarily need to be convex, but they should be non-degenerate. This
// library does not support shapes with holes.


// TODO: rename 'Surface' to 'Triangle' and fix up the code
export class Surface extends Transformable {

    surfaceType: string // TODO change to ENUM 'triangle', 'rectangle', etc

    points: Point[]  // means different things for different surfaces
    transformedPoints: Point[]  // scaled, translated, rotated, etc

    // When 'false' this will override backface culling, which is useful if your
    // material is transparent. See comment in `Scene`.
    cullBackfaces = true

    // Fill and stroke may be `Material` objects, which define the color and
    // finish of the object and are rendered using the scene's shader.
    fillMaterial = new Material('gray')
    strokeMaterial: any = null

    dirty: boolean = false;
    painter: any; // TODO: fixup to this.painter? = Painters.path
    id: string;


    constructor(stype: string, p1: Point, p2: Point, p3?: Point, p4?: Point) {
        super()
        this.points = [p1, p2, p3]

        // We store a unique id for every surface so we can look them up quickly
        // with the `renderGroup` cache.
        this.id = 's' + Util.uniqueId()
        //this.painter = painter

        this.fillMaterial = new Material('gray')
        this.strokeMaterial = new Material('blue')
    }

    /** shift this surface, recalculate normals, etc */
    transform(m: M4) {
        this.transformedPoints = this.points.map((point): Point => {
            return (point.transform(m))
        })
    }


    fill(fill: any) {   // TODO: type?
        this.fillMaterial = new Material('gray').create(fill)
        return this
    }
    stroke(stroke: any) {  // TODO: type?
        this.strokeMaterial = new Material('gray').create(stroke)
        return this
    }
}




