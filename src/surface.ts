
// //// Surfaces and Shapes
// ------------------

// TODO:  replace 'surfaces' with 'triangles' 
// 

import { Color } from './color'
// import { Point, P } from './point'
import { Util } from './util'
import { Material } from './materials'
import { Transformable, } from './transformable'
import {M4, V4, V3 } from './vectorMath'
import { StrokeProperties, FillProperties } from './canvas'
import {Canvas} from './canvas'

// A `Surface` is a defined as a planar object in 3D space. These paths don't
// necessarily need to be convex, but they should be non-degenerate. This
// library does not support shapes with holes.


// TODO: rename 'Surface' to 'Triangle' and fix up the code
export class Surface extends Transformable {

    surfaceType: string // TODO change to ENUM 'triangle', 'rectangle', etc

    points: V4[]   // means different things for different surfaces
    transformedPoints: V4[]  // scaled, translated, rotated, etc

    // the centroid (sometimes called 'barycenter') is the 
    // geometric center of all points in the triangle.  
    centroid: V4 = new V4()
    transformedCentroid: V4 = new V4()

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


    constructor(stype: string, p1: V4, p2: V4, p3: V4, p4?: V4) {
        super()
        this.points = [p1, p2, p3]

        // We store a unique id for every surface so we can look them up quickly
        // with the `renderGroup` cache.
        this.id = 's' + Util.uniqueId()
        //this.painter = painter

           // calculate the centroid, but do NOT normalize it
           this.centroid.x = (this.points[0].x + this.points[1].x + this.points[2].x) /3  
           this.centroid.y = (this.points[0].y + this.points[1].y + this.points[2].y) /3  
           this.centroid.z = (this.points[0].z + this.points[1].z + this.points[2].z) /3  
   
        this.fillMaterial = new Material('gray')
        this.strokeMaterial = new Material('blue')
    }

    /** shift this surface using m, recalculate normals, etc */
    transform(m: M4) {
        this.transformedPoints = this.points.map((point): V4 => {
            return (point.copy().multiplyMat4(m))
        })

           // calculate the centroid, but do NOT normalize it
           this.transformedCentroid.x = (this.transformedPoints[0].x + this.transformedPoints[1].x + this.transformedPoints[2].x) /3  
           this.transformedCentroid.y = (this.transformedPoints[0].y + this.transformedPoints[1].y + this.transformedPoints[2].y) /3  
           this.transformedCentroid.z = (this.transformedPoints[0].z + this.transformedPoints[1].z + this.transformedPoints[2].z) /3  

        // this.transformedCentroid = this.centroid.copy().multiplyMat4(m)
        console.log('centroid', this.centroid, this.transformedCentroid)

     
    }

    render(canvas: Canvas){

        // draw the triangle outline in blue
        canvas.ctx.beginPath();     // Start a new path.
        canvas.ctx.lineWidth = 1
        canvas.ctx.strokeStyle = "blue";  // This path is green.
        canvas.ctx.moveTo(this.transformedPoints[0].x, this.transformedPoints[0].y);
        canvas.ctx.lineTo(this.transformedPoints[1].x, this.transformedPoints[1].y);
        canvas.ctx.lineTo(this.transformedPoints[2].x, this.transformedPoints[2].y);
        canvas.ctx.closePath()
        canvas.ctx.stroke();

        canvas.ctx.fillStyle = 'green'
        canvas.ctx.fillRect(this.transformedCentroid.x,this.transformedCentroid.y,5,5); // fill in the pixel at (10,10)


        // canvas.draw(this.strokeMaterial)
        // canvas.ctx.lineWidth = 3
        // canvas.ctx.strokeStyle = "gray"
        // canvas.path(this.transformedPoints)
        // canvas.ctx.closePath()

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




