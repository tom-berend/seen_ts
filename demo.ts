
import { Scene, Group, Shape, Viewport, P } from "./src/Seen2";
// this will be somewhere else....
import { CanvasRenderContext } from "./src/render/canvas";
import { Canvas } from "./src/canvas";
//import {P} from "./src/point"
import { Cube, Primitive, Pyramid, Icosahedron, TestTriangle } from './src/shapes/primitives'
import { V3 } from "./src/vectorMath";


let width = 900
let height = 500

let ctx = new Canvas('seen-canvas');

// ////////////////// threeJS syntax  /////////////////
// var scene = new Scene();
// var camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// var renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

// var geometry = new THREE.BoxGeometry( 1, 1, 1 );
// var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// var cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// camera.position.z = 5;

// function animate() {
// 	requestAnimationFrame( animate );
// 	renderer.render( scene, camera );
// 
// animate();



// ////////////////// SEEN_TS  syntax  /////////////////
let scene = new Scene('seen-canvas');   // includes the camera, renderer is always CANVAS
let pyramid = new Pyramid({ color: 0x00ff00 })   // defaults to basic material
let cube = new Cube({ color: 0x0000ff })
let ico = new Icosahedron({ color: 0x0000ff })
let ico2 = new Icosahedron({ color: 0x0000ff })
let tt = new TestTriangle()

scene.add (ico)

// scene.add(ico)
// scene.add(ico2)

// ico.rotation = new V3([.1, .1, .1])
// console.log(ico.rotation)
// ico.rotation.x += .2

// console.log('ico matrix',ico.m)
// console.log('ico matrix after',ico.m)

// ico.scale = new V3 ([10,10,10])
// ico.scale.x += .2

// ico2.position = new V3([10,10,10])
// console.log('ico2 position', ico2.position)


// scene.render()

let animate = () => {
    ico.position.x += .0001
    scene.render()
 }

scene.canvas.animationObservable.addObserver('tick', animate)





// // create a cube
// let shape = Cube()
// console.log('shape',shape)
// shape.render()

// Create scene and add cube to model
// let scene = new Scene();
// console.log('SCENE',scene)
// let shape = pyramid()
// console.log('SHAPE',shape)
// let model = new Group(shape)
// console.log('MODEL',model)
// scene.model = model
// scene.render()



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
