// //// Lights
// ------------------

import {Transformable} from './transformable'
import { P, Point } from './point'
import { Color } from './color'
import { Util } from './util'


// This model object holds the attributes and transformation of a light source.
export class Light extends Transformable{
  public point  : Point = new Point() 
  public color  :Color = new Color().white() 
  public type: string = 'point'  // directional, ambient
  public intensity : number = 0.01
  public colorIntensity:Color
  public normal:Point = P(1, -1, -1).normalize()
  public enabled   : boolean = true
  public id = Util.uniqueId('L')
  public defaults:any

  constructor (type:any, options:any){
    super()
    Util.defaults(this, options, this.defaults)
    }

  render(){
    this.colorIntensity = this.color.copy().scale(this.intensity)
  }
}

export class Lights  {
  // A point light emits light eminating in all directions from a single point.
  // The `point` property determines the location of the point light. Note,
  // though, that it may also be moved through the transformation of the light.
  point (opts:any) { return new Light( 'point', opts)}

  // A directional lights emit light in parallel lines, not eminating from any
  // single point. For these lights, only the `normal` property is used to
  // determine the direction of the light. This may also be transformed.
  directional  (opts:any) { return new Light( 'directional', opts)}

  // Ambient lights emit a constant amount of light everywhere at once.
  // Transformation of the light has no effect.
  ambient  (opts:any) { return new Light( 'ambient', opts)}
}
