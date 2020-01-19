import { Transformable,  M, IDENTITY } from './transformable'
import {Material} from './materials'
import {Surface} from './surface'
import { V3 } from './vectorMath';



// A `Shape` contains a collection of surface. They may create a closed 3D
// shape, but not necessarily. For example, a cube is a closed shape, but a
// patch is not.
export class Shape extends Transformable {

    public type: string;
    public surfaces: Surface[];


    constructor(type: string, surfaces: Surface[]) {
        super()
        this.type = type;
        this.surfaces = surfaces
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