
// //// Surfaces and Shapes
// ------------------

// TODO:  replace 'surfaces' with 'triangles' 
// 

import { Color } from './color'
// import { Point, P } from './point'
import { Util } from './util'
import { Material } from './materials'
import { Transformable, } from './transformable'
import { M4, V4, V3, epsilon } from './vectorMath'
import { StrokeProperties, FillProperties } from './canvas'
import { Canvas } from './canvas'

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
        this.centroid.x = (this.points[0].x + this.points[1].x + this.points[2].x) / 3
        this.centroid.y = (this.points[0].y + this.points[1].y + this.points[2].y) / 3
        this.centroid.z = (this.points[0].z + this.points[1].z + this.points[2].z) / 3

        this.fillMaterial = new Material('gray')
        this.strokeMaterial = new Material('blue')
    }

    /** shift this surface using m, recalculate normals, etc */
    transform(m: M4) {
        this.transformedPoints = this.points.map((point): V4 => {
            return (point.copy().multiplyMat4(m))
        })

        // calculate the centroid, but do NOT normalize it
        this.transformedCentroid.x = (this.transformedPoints[0].x + this.transformedPoints[1].x + this.transformedPoints[2].x) / 3
        this.transformedCentroid.y = (this.transformedPoints[0].y + this.transformedPoints[1].y + this.transformedPoints[2].y) / 3
        this.transformedCentroid.z = (this.transformedPoints[0].z + this.transformedPoints[1].z + this.transformedPoints[2].z) / 3

        // this.transformedCentroid = this.centroid.copy().multiplyMat4(m)
        // console.log('centroid', this.centroid, this.transformedCentroid)


    }

    render(canvas: Canvas) {

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
        canvas.ctx.fillRect(this.transformedCentroid.x, this.transformedCentroid.y, 5, 5); // fill in the pixel at (10,10)


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

    // adapted from https://www.scratchapixel.com/lessons/3d-basic-rendering/ray-tracing-rendering-a-triangle/barycentric-coordinates
    rayTriangleIntersect(orig: V3, rayDirection: V3) {

        let v0 = new V3()  // replace with THIS triangle
        let v1 = new V3()
        let v2 = new V3()

        // compute plane's normal (using vertex 0, but all three give the same answer)
        let v0v1 = v1.subtract(v0)
        let v0v2 = v2.subtract(v0)

        // no need to normalize, the magnitude of N is useful
        let N = v0v1.cross(v0v2) // N is normal to triangle 

        // Step 1: finding P, the intersection point on the triangle plane

        // first special case - check if ray and plane are parallel ?
        let NdotRayDirection = N.dot(rayDirection)
        if (Math.abs(NdotRayDirection) < epsilon) // almost 0 
            return false; // they are parallel so they don't intersect ! 

        // any plane, most importantly the plane defined by the triangle, has equation
        //       Ax + By + Cz + D =0
        // we know that all three vertices lie in this plane, we can compute D with ANY point
        // by convention, we use v0

        let D = N.dot(v0)   // dot of normal and any point gives D

        // equation 3 tells us that v (the area ABP barycenter triangle) is
        //
        // v  =  triangle ABP area / triangle ABC area (area is 1/2 the parallelogram)
        //
        //    = (AB x AP) /2   =   (AB x AP)
        //      ----------         ----------
        //      (AB x AC) /2       (AB x AC)
        //       
        //    we already have N with is AB x AC.  Substitute in, multiply top and bottom, and 
        // 
        //    = (AB × AP) * N
        //      ----------
        //        N * N

        // we know that point P is   Origin + t*rayDirection    (P=O+tR)
        // and that the triangle plane is  Ax + By + Cz + D = 0
        //    how do we figure out the value of t (distanceOriginToP)?? 

        // A*Px + B*Py + CPz + D = 0   (assuming P actually intersects the plane)
        //   let's get fancy and substitute P=O+tR
        // A(Ox+tRx) + B(Oy+tRy) + C(Oz+TRz) + D = 0
        //    expand the terms
        // A*Ox + B*Oy + C* Oz + A*tRx + B*tRy + C*tRz + D = 0
        //    rewrite with t extracted
        // A*Ox + B*Oy + C* Oz + t(A*Rx + B*Ry + C*Rz) + D = 0
        //    solve for t...
        //
        //  t = A*Ox + B*Oy + C*Oz + D             
        //      -----------------------
        //      A*Rx + B*Ry + C*Rz
        //
        // substitute in the normals and we get
        //  t = N(A,B,C).dot O   + D 
        //      ---------------------
        //      N(A,B,C).dot R
        //
        // where R is the ray direction that we computed earlier

        let distanceOriginToP = (N.dot(orig) + D) / NdotRayDirection;

        // second special case - check if the triangle is in behind the ray?
        if (distanceOriginToP < 0)  // the triangle is behind 
            return false


        // compute the intersection point using equation 1
        let P = orig.add(rayDirection.scale(distanceOriginToP))

        // Step 2: inside-outside test

        // edge 0
        let edge0 = v1.subtract(v0)
        let vp0 = P.subtract(v0)

        // edge0.cross(vp0) is a vector perpendicular to triangle's plane 
        // and N.dot() will either be positive or negative depending on inside or outside
        if (N.dot(edge0.cross(vp0)) < 0)  // P is on the right side 
            return false

        // edge 1
        let edge1 = v2.subtract(v1)
        let vp1 = P.subtract(v1)
        if (N.dot(edge1.cross(vp1)) < 0)  // P is on the right side 
            return false

        // edge 2
        let edge2 = v0.subtract(v2)
        let vp2 = P.subtract(v2)
        if (N.dot(edge2.cross(vp2)) < 0)  // P is on the right side 
            return false



        let triangleArea: number

        let denom: number = N.dot(N) // N dot N is square of N's length

        // now can express barycenter as two numbers, u and v (because u+v+w=1)    
        // u = u/denom
        // v = v/ denom

        return true; // this ray hits the triangle 


    }

}