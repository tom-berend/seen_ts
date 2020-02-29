import { Transformable } from "../transformable";
import { V3 } from '../vectorMath'
import { Color } from '../color'

export class Sphere extends Transformable {
    radius: number
    specular: number
    lambert: number
    ambient: number
    color: Color
    point: V3


constructor(type: string, point: V3, color: Color) {
    super()
    // this.type = type
    this.point = point
    this.color = color
}
}




