import { Matrix,Transformable } from "../transformable";
import { Viewport, Projection } from "../camera";
import {Surface} from '../surface'
import {Point,P,POINT_ZERO } from '../point'
import { Color } from "../color"
import {Light} from "../light"

// //// RenderModels
// ------------------

const DEFAULT_NORMAL = P(0, 0, 1)  // Z

// The `RenderModel` object contains the transformed and projected points as
// well as various data needed to shade and paint a `Surface`.
//
// Once initialized, the object will have a constant memory footprint down to
// `Number` primitives. Also, we compare each transform and projection to
// prevent unnecessary re-computation.
//
// If you need to force a re-computation, mark the surface as 'dirty'.
export class RenderModel{

  surface: Surface;
  points: Point[];

  transform:Transformable;
  transformed : Transformable;

  projected: Transformable;
  projection: Transformable;

  viewport: Viewport;
  inFrustrum: boolean

   barycenter : Point
   normal     : Point

  constructor (surface:Surface, transform:Matrix, projection:Matrix, viewport:Viewport) {
    this.surface = surface;
    this.points      = this.surface.points
    // this.transformed = this._initRenderData()
    // this.projected   = this._initRenderData()
    this._update()
  }

  update (transform:Transformable, projection:Transformable, viewport:Viewport) {
    if (!this.surface.dirty
      && transform.isEqual(this.transformed)
      && projection.isEqual(this.projected)
      && viewport.prescale.isEqual(this.viewport.prescale)){
        // do nothing
    }else{
      this.transform  = transform
      this.projection = projection
      this.viewport.prescale   = viewport.prescale;
      this.viewport.postscale = viewport.postscale;
      this._update()
    }
  }


  _update () {
  //   // Apply model transforms to surface points
  //   this._math(this.transformed, this.points, this.transform, false)
  //   // Project into camera space
  //   let cameraSpace:Point[] = this.points.map(p => { p.copy().transform(this.projection.m)})
  //   this.inFrustrum = this._checkFrustrum(cameraSpace)
  //   // Project into screen space
  //   this._math(this.projected, cameraSpace, this.viewport, true)
  //   this.surface.dirty = false
  console.log('renderModel._update()')
   }

  // _checkFrustrum  (points:Point[]) {
  //   points.forEach(p => {
  //     if(p.z <= 2)
  //     return false;
  //   });
  //   return true
  // }

  // // TODO: what the heck does this do?   Should return a Transformable
  // _initRenderData() {
  //     this.points  = this.points.slice()  // shallow copy of itself ??
  //     bounds     : new Bounds()
  //     barycenter : P()
  //     normal     : P()
  //     v0         : P()
  //     v1         : P()
  //   }


//   _math (set:Transformable, points:Point[], transform:Transformable, applyClip = false) {
//     // Apply transform to points
//     set.projection = points.map((p,i)=>{
//       let sp = p
//       sp.set(p).transform(transform)
//       // Applying the clip is what ultimately scales the x and y coordinates in
//       // a perpsective projection
//       if applyClip then sp.divide(sp.w)
//     }
//     // Compute barycenter, which is used in aligning shapes in the painters algorithm
//     set.barycenter.multiply(0)
//     for p in set.points
//       set.barycenter.add(p)
//     set.barycenter.divide(set.points.length)

//     // Compute the bounding box of the points
//     set.bounds.reset()
//     for p in set.points
//       set.bounds.add(p)

//     // Compute normal, which is used for backface culling (when enabled)
//     if set.points.length < 2
//       set.v0.set(DEFAULT_NORMAL)
//       set.v1.set(DEFAULT_NORMAL)
//       set.normal.set(DEFAULT_NORMAL)
//     else
//       set.v0.set(set.points[1]).subtract(set.points[0])
//       set.v1.set(set.points[points.length - 1]).subtract(set.points[0])
//       set.normal.set(set.v0).cross(set.v1).normalize()

//   }
 }

// The `LightRenderModel` stores pre-computed values necessary for shading
// surfaces with the supplied `Light`.
class LightRenderModel{
  colorIntensity:Color
  type :string
  intensity: number
  point: Point
  origin: Point
  normal: Point
   

  constructor (light: Light, transform:Matrix) {
    this.colorIntensity = light.color.copy().scale(light.intensity)
    this.type           = light.type
    this.intensity      = light.intensity
    this.point          = light.point.copy().transform(transform)
    this.origin          = POINT_ZERO.transform(transform)
    this.normal         = light.normal.copy().transform(transform).subtract(this.origin).normalize()
  }
  }