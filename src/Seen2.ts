// Aggregate submodules together in a parent module.
//
// supports
//    import {Scene, Matrix} from 'seen'



 export { Scene } from './scene';
 export { Group } from './model';
export { Primitive } from './shapes/primitives';
export { Viewport } from "./camera";   // TODO: should this be exported, or is it just part of camera?
export {Shape} from './surface';
export {P} from './point'
//export {C} from './color'

interface V3 {   // vector
    x: number,
    y: number,
    z: number
}

// // we make Point different from V3 so compiler might help catch errors
// interface Point {
//     x: number,
//     y: number,
//     z: number
// }

interface Angle {
    x: number,
    y: number,
    z: number
}

import { Transformable } from './transformable';


