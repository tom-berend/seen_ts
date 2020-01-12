
import { Scene, Model, Shape, Viewport, P } from "./src/Seen2";
// this will be somewhere else....
import {CanvasRenderContext} from "./src/render/canvas";
//import {P} from "./src/point"
import {Cube,Primitive, pyramid} from './src/shapes/primitives'



console.log('I am ALIVE')
let width = 900
let height = 500

let ctx = new CanvasRenderContext('seen-canvas');

// // create a cube
// let shape = Cube()
// console.log('shape',shape)
// shape.render()

// Create scene and add cube to model
let scene = new Scene();
let shape = pyramid()
let model = new Model(shape)
scene.model = model
scene.render()

// let viewport = new Viewport.center(width, height)


// Create sphere shape with randomly colored surfaces
//let shape = seen.Shapes.sphere(2).scale(height * 0.4)
//let shape = Shapes.cube().scale(height * 0.2)

//let shape = new Shapes().pyramid()//.scale(height * 0.2)


////////////// this works
// let points = [P(-1, -1, -1), P(-1, -1, 1), P(-1, 1, -1), P(-1, 1, 1), P(1, -1, -1), P(1, -1, 1), P(1, 1, -1), P(1, 1, 1)];
// points = [P(10,10,10), P(20,20,20), P(10,20,30), P(-1, 1, 1), P(1, -1, -1), P(1, -1, 1), P(1, 1, -1), P(1, 1, 1)];
// //console.log(points);

// ctx.path(points);
// ctx.fill({fillStyle: 'yellow'})
// ctx.draw({strokeStyle:'rgb(0,128,0)',lineWidth: 3})

// console.log('done')
///////////////////


//seen.Colors.randomSurfaces2(shape)
//console.log(shape)



// // Create render context from canvas
// let context = seen.Context('seen-canvas', scene).render()

// // Slowly rotate
// context.animate().onBefore(function (t, dt) {
//   return shape.rotx(dt * 1e-3).roty(0.7 * dt * 1e-3);
// }).start();
