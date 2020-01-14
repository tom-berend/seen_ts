// //// Surfaces and Shapes
// ------------------

// TODO:  replace 'surfaces' with 'triangles' 
// 

import {Color} from './color'
import {Point,P} from './point'
import {Util} from './util'
import {Material} from './materials'
import {Transformable} from './transformable'
import {StrokeProperties, FillProperties} from './canvas'

// A `Surface` is a defined as a planar object in 3D space. These paths don't
// necessarily need to be convex, but they should be non-degenerate. This
// library does not support shapes with holes.


// TODO: rename 'Surface' to 'Triangle' and fix up the code
export class Surface extends Transformable{
  
  surfaceType: string // TODO change to ENUM 'triangle', 'rectangle', etc
  
  points: Point[]  // means different things for different surfaces
  
  // When 'false' this will override backface culling, which is useful if your
  // material is transparent. See comment in `Scene`.
  cullBackfaces = true

  // Fill and stroke may be `Material` objects, which define the color and
  // finish of the object and are rendered using the scene's shader.
  fillMaterial   = new Material('gray')
  strokeMaterial :any = null

  dirty:boolean = false;
  painter:any; // TODO: fixup to this.painter? = Painters.path
  id:string;


  constructor (stype:string, p1:Point, p2:Point, p3?:Point, p4?:Point) {
    super()
    this.points = [p1,p2,p3]

    // We store a unique id for every surface so we can look them up quickly
    // with the `renderGroup` cache.
    this.id = 's' + Util.uniqueId()
    //this.painter = painter

    this.fillMaterial = new Material('gray')
    this.strokeMaterial = new Material('blue')

    
  }
  fill (fill:any) {   // TODO: type?
    this.fillMaterial = new Material('gray').create(fill)
    return this
  }
  stroke  (stroke:any) {  // TODO: type?
    this.strokeMaterial = new Material('gray').create(stroke)
    return this
  }
}

// A `Shape` contains a collection of surface. They may create a closed 3D
// shape, but not necessarily. For example, a cube is a closed shape, but a
// patch is not.
export class Shape extends Transformable {

  public type:string;
  public surfaces:Surface[];

  constructor (type:string, surfaces:Surface[]) {
    super()
    this.type = type;
    this.surfaces = surfaces;
  }

  /** Apply the supplied fill `Material` to each surface */
  fill (fill:Material) {
//    this.eachSurface (s) => { s.fill(fill)}
    return this
  }

  /** Apply the supplied stroke `Material` to each surface */
  stroke (stroke:Material) {
//    this.eachSurface (s) -> s.stroke(stroke)
    return this
  }
}