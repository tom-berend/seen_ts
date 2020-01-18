/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./demo.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./demo.ts":
/*!*****************!*\
  !*** ./demo.ts ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_Seen2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/Seen2 */ "./src/Seen2.ts");
/* harmony import */ var _src_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/canvas */ "./src/canvas.ts");
/* harmony import */ var _src_shapes_primitives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/shapes/primitives */ "./src/shapes/primitives.ts");


//import {P} from "./src/point"

console.log('I am ALIVE');
var width = 900;
var height = 500;
var ctx = new _src_canvas__WEBPACK_IMPORTED_MODULE_1__["Canvas"]('seen-canvas');
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
var scene = new _src_Seen2__WEBPACK_IMPORTED_MODULE_0__["Scene"]('seen-canvas'); // includes the camera, renderer is always CANVAS
var pyramid = new _src_shapes_primitives__WEBPACK_IMPORTED_MODULE_2__["Pyramid"]({ color: 0x00ff00 }); // defaults to basic material
var cube = new _src_shapes_primitives__WEBPACK_IMPORTED_MODULE_2__["Cube"]({ color: 0x0000ff });
var ico = new _src_shapes_primitives__WEBPACK_IMPORTED_MODULE_2__["Icosahedron"]({ color: 0x0000ff });
scene.add(ico);
var animate = function () {
    ico.m.rotx(.1);
    scene.render();
};
scene.canvas.animationObservable.addObserver('tick', animate);
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


/***/ }),

/***/ "./src/Seen2.ts":
/*!**********************!*\
  !*** ./src/Seen2.ts ***!
  \**********************/
/*! exports provided: Scene, Group, Primitive, Viewport, Shape, P */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scene */ "./src/scene.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return _scene__WEBPACK_IMPORTED_MODULE_0__["Scene"]; });

/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["Group"]; });

/* harmony import */ var _shapes_primitives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shapes/primitives */ "./src/shapes/primitives.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Primitive", function() { return _shapes_primitives__WEBPACK_IMPORTED_MODULE_2__["Primitive"]; });

/* harmony import */ var _camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./camera */ "./src/camera.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Viewport", function() { return _camera__WEBPACK_IMPORTED_MODULE_3__["Viewport"]; });

/* harmony import */ var _surface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./surface */ "./src/surface.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Shape", function() { return _surface__WEBPACK_IMPORTED_MODULE_4__["Shape"]; });

/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./point */ "./src/point.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "P", function() { return _point__WEBPACK_IMPORTED_MODULE_5__["P"]; });

// Aggregate submodules together in a parent module.
//
// supports
//    import {Scene, Matrix} from 'seen'



 // TODO: should this be exported, or is it just part of camera?




/***/ }),

/***/ "./src/camera.ts":
/*!***********************!*\
  !*** ./src/camera.ts ***!
  \***********************/
/*! exports provided: Projection, Viewport, Camera, PixelCamera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Projection", function() { return Projection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Viewport", function() { return Viewport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PixelCamera", function() { return PixelCamera; });
/* harmony import */ var _transformable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transformable */ "./src/transformable.ts");
// //// Camera
// //////// Projections, Viewports, and Cameras
// ------------------
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

// These projection methods return a 3D to 2D `Matrix` transformation.
// Each projection assumes the camera is located at (0,0,0).
var Projection = /** @class */ (function () {
    function Projection() {
    }
    // Creates a perspective projection matrix
    Projection.perspectiveFov = function (fovyInDegrees, front) {
        if (fovyInDegrees === void 0) { fovyInDegrees = 50; }
        if (front === void 0) { front = 1; }
        var tan = front * Math.tan(fovyInDegrees * Math.PI / 360.0);
        return this.perspective(-tan, tan, -tan, tan, front, 2 * front);
    };
    /** Creates a perspective projection matrix with the supplied frustrum */
    Projection.perspective = function (left, right, bottom, top, near, far) {
        if (left === void 0) { left = -1; }
        if (right === void 0) { right = 1; }
        if (bottom === void 0) { bottom = -1; }
        if (top === void 0) { top = 1; }
        if (near === void 0) { near = 1; }
        if (far === void 0) { far = 100; }
        var near2 = 2 * near;
        var dx = right - left;
        var dy = top - bottom;
        var dz = far - near;
        var m = new Array(16);
        m[0] = near2 / dx;
        m[1] = 0.0;
        m[2] = (right + left) / dx;
        m[3] = 0.0;
        m[4] = 0.0;
        m[5] = near2 / dy;
        m[6] = (top + bottom) / dy;
        m[7] = 0.0;
        m[8] = 0.0;
        m[9] = 0.0;
        m[10] = -(far + near) / dz;
        m[11] = -(far * near2) / dz;
        m[12] = 0.0;
        m[13] = 0.0;
        m[14] = -1.0;
        m[15] = 0.0;
        return Object(_transformable__WEBPACK_IMPORTED_MODULE_0__["M"])(m); // Matrix class
    };
    /** Creates a orthographic projection matrix with the supplied frustrum */
    Projection.ortho = function (left, right, bottom, top, near, far) {
        if (left === void 0) { left = -1; }
        if (right === void 0) { right = 1; }
        if (bottom === void 0) { bottom = -1; }
        if (top === void 0) { top = 1; }
        if (near === void 0) { near = 1; }
        if (far === void 0) { far = 100; }
        var near2 = 2 * near;
        var dx = right - left;
        var dy = top - bottom;
        var dz = far - near;
        var t = new _transformable__WEBPACK_IMPORTED_MODULE_0__["Transformable"];
        var m = new Array(16);
        m[0] = 2 / dx;
        m[1] = 0.0;
        m[2] = 0.0;
        m[3] = (right + left) / dx;
        m[4] = 0.0;
        m[5] = 2 / dy;
        m[6] = 0.0;
        m[7] = -(top + bottom) / dy;
        m[8] = 0.0;
        m[9] = 0.0;
        m[10] = -2 / dz;
        m[11] = -(far + near) / dz;
        m[12] = 0.0;
        m[13] = 0.0;
        m[14] = 0.0;
        m[15] = 1.0;
        return Object(_transformable__WEBPACK_IMPORTED_MODULE_0__["M"])(m); // matrix class
    };
    return Projection;
}());

var Viewport = /** @class */ (function () {
    function Viewport() {
        this.center(500, 500, 0, 0);
    }
    /** Create a viewport where the scene's origin is centered in the view */
    Viewport.prototype.center = function (width, height, x, y) {
        if (width === void 0) { width = 500; }
        if (height === void 0) { height = 500; }
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.prescale = new _transformable__WEBPACK_IMPORTED_MODULE_0__["Matrix"]()
            .translate(-x, -y, -height)
            .scale(1 / width, 1 / height, 1 / height);
        this.postscale = new _transformable__WEBPACK_IMPORTED_MODULE_0__["Matrix"]()
            .scale(width, -height, height)
            .translate(x + width / 2, y + height / 2, height);
    };
    /** Create a view port where the scene's origin is aligned with the origin ([0, 0]) of the view */
    Viewport.prototype.origin = function (width, height, x, y) {
        if (width === void 0) { width = 500; }
        if (height === void 0) { height = 500; }
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.prescale = new _transformable__WEBPACK_IMPORTED_MODULE_0__["Transformable"]()
            .m
            .translate(-x, -y, -1)
            .scale(1 / width, 1 / height, 1 / height);
        this.postscale = new _transformable__WEBPACK_IMPORTED_MODULE_0__["Transformable"]()
            .m
            .scale(width, -height, height)
            .translate(x, y);
        return this;
    };
    return Viewport;
}());

// The `Camera` model contains all three major components of the 3D to 2D tranformation.
//
// First, we transform object from world-space (the same space that the coordinates of
// surface points are in after all their transforms are applied) to camera space. Typically,
// this will place all viewable objects into a cube with coordinates:
// x = -1 to 1, y = -1 to 1, z = 1 to 2
//
// Second, we apply the projection transform to create perspective parallax and what not.
//
// Finally, we rescale to the viewport size.
//
// These three steps allow us to easily create shapes whose coordinates match up to
// screen coordinates in the z = 0 plane.
var Camera = /** @class */ (function (_super) {
    __extends(Camera, _super);
    function Camera(options) {
        var _this = _super.call(this) || this;
        //seen.Util.defaults(this., options, this.defaults)
        _this.m = Projection.perspective();
        return _this;
    }
    return Camera;
}(_transformable__WEBPACK_IMPORTED_MODULE_0__["Transformable"]));

var PixelCamera = /** @class */ (function (_super) {
    __extends(PixelCamera, _super);
    function PixelCamera() {
        return _super.call(this) || this;
    }
    return PixelCamera;
}(_transformable__WEBPACK_IMPORTED_MODULE_0__["Transformable"]));



/***/ }),

/***/ "./src/canvas.ts":
/*!***********************!*\
  !*** ./src/canvas.ts ***!
  \***********************/
/*! exports provided: Canvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return Canvas; });
/* harmony import */ var _vectorMath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vectorMath */ "./src/vectorMath.ts");
/* harmony import */ var _paon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paon */ "./src/paon.ts");


///////////////////////////////////////////////////////////////////////
// palette
// https://digitalsynopsis.com/design/beautiful-color-palettes-combinations-schemes/
// beach towel
var COLOR1 = '#fe4a49'; // red
var COLOR2 = '#2ab7ca'; // blue
var COLOR3 = '#fed766'; // yellow
var BKGND = '#e6e6ea';
var CLEAR = '#f4f4f8';
///////////////////////////////////////////////////////////////////////
var Canvas = /** @class */ (function () {
    function Canvas(canvasTag) {
        // console.log(`in Canvas construtor for tag '${canvasTag}'`)
        this.x = 0;
        this.canvas = document.getElementById(canvasTag);
        this.ctx = this.canvas.getContext('2d');
        //    // find out more about the canvas...
        // let containerX = document.getElementById('container').offsetLeft
        // let containerY = document.getElementById('container').offsetTop
        // console.log(`container offset x=${containerX},y=${containerY}`)
        // some devices might scale, so scaleX/Y will not be close to 1
        var rect = this.canvas.getBoundingClientRect(); // position of canvas
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        var scaleX = this.width / rect.width; // relationship bitmap vs. element for X
        var scaleY = this.height / rect.height;
        // console.log(`scale x=${scaleX},y=${scaleY}`)
        /// this section sets up keyboard and mouse events for this canvas
        this.mouseObservable = new _paon__WEBPACK_IMPORTED_MODULE_1__["Observable"](); // watch for input field to fill
        this.kybdObservable = new _paon__WEBPACK_IMPORTED_MODULE_1__["Observable"]();
        this.animationObservable = new _paon__WEBPACK_IMPORTED_MODULE_1__["Observable"]();
        // add event listeners
        this.canvas.addEventListener('mousedown', this.canvasMousedown.bind(this));
        document.addEventListener('keypress', this.canvasKeypress.bind(this));
        window.requestAnimationFrame(this.canvasAnimation.bind(this));
    }
    //  not used yet, not tested yet
    Canvas.prototype.removeListeners = function () {
        this.canvas.removeEventListener('mousedown', this.canvasMousedown);
        document.removeEventListener('keypress', this.canvasKeypress);
    };
    Canvas.prototype.canvasAnimation = function (timestamp) {
        // if (!start) start = timestamp;
        // var progress = timestamp - start;
        // element.style.transform = 'translateX(' + Math.min(progress / 10, 200) + 'px)';
        // if (progress < 2000) {
        this.animationObservable.notifyObservers('tick', event);
        window.requestAnimationFrame(this.canvasAnimation.bind(this));
    };
    Canvas.prototype.canvasKeypress = function (event) {
        // console.log('in canvasKeypress event', event)
        this.kybdObservable.notifyObservers('keypress', event);
    };
    Canvas.prototype.canvasMousedown = function (event) {
        // console.log('in canvasMousedown event', event)
        this.mouseObservable.notifyObservers('mousedown', event);
    };
    /* if a mouse has landed, this retrieves the point relative to this canvas */
    Canvas.prototype.getMouseXY = function (event) {
        // console.log(`canvas x=${this.canvas.width},y=${this.canvas.height}`)
        var rect = this.canvas.getBoundingClientRect(); // position of canvas
        var canvasX = event.pageX - rect.left; // now relative within canvas
        var canvasY = event.pageY - rect.top;
        // console.log(`mouse x=${canvasX},y=${canvasY}`)
        // event.offset is more accurate, but not always available
        if (event.offsetX) { // for webkit browser like safari and chrome
            canvasX = event.offsetX;
            canvasY = event.offsetY;
            // console.log(`event offset x=${canvasX},y=${canvasY}`)
        }
        return new _vectorMath__WEBPACK_IMPORTED_MODULE_0__["V2"]([canvasX, canvasY]);
    };
    Canvas.prototype.clearCanvas = function () {
        this.ctx.fillStyle = BKGND;
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        // clearRect is like fillRect, but sets transparent black pxls.  also faster.
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        // fillRect obays the BKGND color
        //this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
    };
    // layer (layer) {
    //   this.layers.push {
    //     layer   : layer
    //     context : new seen.CanvasLayerRenderContext(this.ctx)
    //   }
    //   return this
    // }
    // reset() {
    //     this.ctx.setTransform(1, 0, 0, 1, 0, 0)
    //     this.ctx.clearRect(0, 0, this.el.width, this.el.height)
    // }
    Canvas.prototype.draw = function (style) {
        // Copy over SVG CSS attributes
        if (style.strokeStyle)
            this.ctx.strokeStyle = style.strokeStyle;
        // TODO: which do we need of the rest?  Can we deal with them as a class?
        if (style.lineWidth)
            this.ctx.lineWidth = style.lineWidth;
        // if (style.textAnchor)
        //     this.ctx.textAlign = style.textAnchor
        this.ctx.stroke();
        return this;
    };
    Canvas.prototype.fill = function (style) {
        // Copy over SVG CSS attributes
        if (style.fillStyle)
            this.ctx.fillStyle = style.fillStyle;
        console.log('fillStyle', style.fillStyle);
        // if (style['text-anchor'])
        //     this.ctx.textAlign = style['text-anchor']
        // if (style['fill-opacity'])
        //     this.ctx.globalAlpha = style['fill-opacity']
        this.ctx.fill();
        return this;
    };
    /** Create a polygon path for a CANVAS rendering */
    Canvas.prototype.path = function (points) {
        this.ctx.beginPath();
        for (var i = 0, j = 0, len = points.length; j < len; i = ++j) {
            var p = points[i];
            // tom's kluge for now /////////////////////
            // scale points by 10, and move them to 50,50
            if (i === 0) {
                this.ctx.moveTo(p.x * 50 + 50, p.y * 50 + 50);
                console.log('moveTo', p.x, p.y);
            }
            else {
                this.ctx.lineTo(p.x * 50 + 50, p.y * 50 + 50);
                console.log('lineTo', p.x, p.y);
            }
        }
        this.ctx.closePath();
        return this;
    };
    Canvas.prototype.rect = function (width, height) {
        this.ctx.rect(0, 0, width, height);
        return this;
    };
    Canvas.prototype.circle = function (center, radius) {
        this.ctx.beginPath();
        this.ctx.arc(center.x, center.y, radius, 0, 2 * Math.PI, true);
        return this;
    };
    Canvas.prototype.fillText = function (m, text, style) {
        this.ctx.save();
        this.ctx.setTransform(m[0], m[3], -m[1], -m[4], m[2], m[5]);
        if (style.font)
            this.ctx.font = style.font;
        if (style.fill)
            this.ctx.fillStyle = style.fill;
        // TODO: string is not assignable...
        // if (style['text-anchor'])
        //     this.ctx.textAlign = this._cssToCanvasAnchor(style['text-anchor'])
        this.ctx.fillText(text, 0, 0);
        this.ctx.restore();
        return this;
    };
    Canvas.prototype._cssToCanvasAnchor = function (anchor) {
        if (anchor == 'middle')
            return 'center';
        return anchor;
    };
    return Canvas;
}());



/***/ }),

/***/ "./src/color.ts":
/*!**********************!*\
  !*** ./src/color.ts ***!
  \**********************/
/*! exports provided: Color */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
// //// Colors
// ------------------
/** `Color` objects store RGB and Alpha values from 0 to 255. Default is gray. */
var Color = /** @class */ (function () {
    function Color(hexString) {
        if (hexString) {
            return this.hex(hexString);
        }
        else {
            // consider supporting 140 names from https://htmlcolorcodes.com/
            // default is gray    
            return (this.hex('//888888'));
        }
    }
    /** Returns a new `Color` object with the same rgb and alpha values as the current object */
    Color.prototype.copy = function () {
        return new Color(this.hexString());
    };
    /** Scales the rgb channels by the supplied scalar value. */
    Color.prototype.scale = function (n) {
        this.r *= n;
        this.g *= n;
        this.b *= n;
        return this;
    };
    /** Offsets each rgb channel by the supplied scalar value. */
    Color.prototype.offset = function (n) {
        this.r += n;
        this.g += n;
        this.b += n;
        return this;
    };
    /** Clamps each rgb channel to the supplied minimum and maximum scalar values. */
    Color.prototype.clamp = function (min, max) {
        if (min === void 0) { min = 0; }
        if (max === void 0) { max = 0xFF; }
        this.r = Math.min(max, Math.max(min, this.r));
        this.g = Math.min(max, Math.max(min, this.g));
        this.b = Math.min(max, Math.max(min, this.b));
        return this;
    };
    /** Takes the minimum between each channel of this `Color` and the supplied `Color` object. */
    Color.prototype.minChannels = function (c) {
        this.r = Math.min(c.r, this.r);
        this.g = Math.min(c.g, this.g);
        this.b = Math.min(c.b, this.b);
        return this;
    };
    /** Adds the channels of the current `Color` with each respective channel from the supplied `Color` object. */
    Color.prototype.addChannels = function (c) {
        this.r += c.r;
        this.g += c.g;
        this.b += c.b;
        return this;
    };
    /** Multiplies the channels of the current `Color` with each respective channel from the supplied `Color` object. */
    Color.prototype.multiplyChannels = function (c) {
        this.r *= c.r;
        this.g *= c.g;
        this.b *= c.b;
        return this;
    };
    /** Converts the `Color` into a hex string of the form "//RRGGBB". */
    Color.prototype.hexString = function () {
        var c = (this.r << 16 | this.g << 8 | this.b).toString(16);
        while (c.length < 6) {
            c = '0' + c;
        }
        return '//' + c;
    };
    // Converts the `Color` into a CSS-style string of the form "rgba(RR, GG, BB, AA)"
    Color.prototype.style = function () {
        return "rgba(//{this.r},//{this.g},//{this.b},//{this.a})";
    };
    // Parses a hex string starting with an octothorpe (//) or an rgb/rgba CSS
    // string. Note that the CSS rgba format uses a float value of 0-1.0 for
    /** alpha, but seen uses an in from 0-255. */
    Color.prototype.parse = function (str) {
        if (str.charAt(0) === '#' && str.length === 7) {
            return this.hex(str);
        }
        else if (str.indexOf('rgb') === 0) {
            var m = this.CSS_RGBA_STRING_REGEX.exec(str);
            if (m == null) {
                return this.black();
            }
            var a = m[6] != null ? Math.round(parseFloat(m[6]) * 0xFF) : void 0;
            return this.rgb(parseFloat(m[2]), parseFloat(m[3]), parseFloat(m[4]), a);
        }
        else {
            return this.black();
        }
    };
    /** Loads the  `Color` using the supplied rgb and alpha values.
    Each value must be in the range [0, 255] or, equivalently, [0x00, 0xFF]. */
    Color.prototype.rgb = function (r, g, b, a) {
        if (a === void 0) { a = 0xFF; }
        this.r = r;
        this.b = b;
        this.g = g;
        this.a = a;
        return this;
    };
    // Creates a new `Color` using the supplied hex string of the form "//RRGGBB".
    Color.prototype.hex = function (hex) {
        if (hex.charAt(0) == '//')
            hex = hex.substring(1);
        this.r = parseInt(hex.substring(0, 2), 16);
        this.b = parseInt(hex.substring(2, 4), 16);
        this.g = parseInt(hex.substring(4, 6), 16);
        return this;
    };
    /** Creates a new `Color` using the supplied hue, saturation, and lightness (HSL) values.
     Each value must be in the range [0.0, 1.0]. */
    Color.prototype.hsl = function (h, s, l, a) {
        if (a === void 0) { a = 1; }
        var r, g, b;
        r = g = b = 0;
        if (s == 0) // When saturation is 0, the color is "achromatic" or "grayscale".
            r = g = b = l;
        else {
            var q = (l < 0.5 ? l * (1 + s) : l + s - l * s);
            var p = 2 * l - q;
            r = this.hue2rgb(p, q, h + 1 / 3);
            g = this.hue2rgb(p, q, h);
            b = this.hue2rgb(p, q, h - 1 / 3);
        }
        return this.rgb(r * 255, g * 255, b * 255, a * 255);
    };
    Color.prototype.hue2rgb = function (p, q, t) {
        if (t < 0) {
            t += 1;
        }
        else if (t > 1) {
            t -= 1;
        }
        if (t < 1 / 6) {
            return p + (q - p) * 6 * t;
        }
        else if (t < 1 / 2) {
            return q;
        }
        else if (t < 2 / 3) {
            return p + (q - p) * (2 / 3 - t) * 6;
        }
        else {
            return p;
        }
    };
    // /** Generates a new random color for each surface of the supplied `Shape`. */
    // randomSurfaces(shape: Shape, sat: number = 0.5, lit: number = 0.4) {
    //     shape.forEach(element => {
    //         surface.fill(Colors.hsl(Math.random(), sat, lit))
    //     })
    // }
    //   // Generates a random hue then randomly drifts the hue for each surface of
    //   // the supplied `Shape`.
    //   randomSurfaces2 : (shape, drift = 0.03, sat = 0.5, lit = 0.4) ->
    //     hue = Math.random()
    //     for surface in shape.surfaces
    //       hue += (Math.random() - 0.5) * drift
    //       while hue < 0 then hue += 1
    //       while hue > 1 then hue -= 1
    //       surface.fill seen.Colors.hsl(hue, 0.5, 0.4)
    //   /** Generates a random color then sets the fill for every surface of the supplied `Shape`. */
    //   randomShape : (shape:Shape, sat:number = 0.5, lit:number = 0.4) ->
    //     shape.fill (new Material (this.hsl(Math.random()), sat, lit)
    // A few `Color`s are supplied for convenience.
    Color.prototype.black = function () { return this.hex('//000000'); };
    Color.prototype.white = function () { return this.hex('//FFFFFF'); };
    Color.prototype.gray = function () { return this.hex('//888888'); };
    return Color;
}());



/***/ }),

/***/ "./src/light.ts":
/*!**********************!*\
  !*** ./src/light.ts ***!
  \**********************/
/*! exports provided: Light, Lights */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Light", function() { return Light; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lights", function() { return Lights; });
/* harmony import */ var _transformable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transformable */ "./src/transformable.ts");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point */ "./src/point.ts");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color */ "./src/color.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./src/util.ts");
// //// Lights
// ------------------
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




// This model object holds the attributes and transformation of a light source.
var Light = /** @class */ (function (_super) {
    __extends(Light, _super);
    function Light(type, options) {
        var _this = _super.call(this) || this;
        _this.point = new _point__WEBPACK_IMPORTED_MODULE_1__["Point"]();
        _this.color = new _color__WEBPACK_IMPORTED_MODULE_2__["Color"]().white();
        _this.type = 'point'; // directional, ambient
        _this.intensity = 0.01;
        _this.normal = Object(_point__WEBPACK_IMPORTED_MODULE_1__["P"])(1, -1, -1).normalize();
        _this.enabled = true;
        _this.id = _util__WEBPACK_IMPORTED_MODULE_3__["Util"].uniqueId('L');
        _util__WEBPACK_IMPORTED_MODULE_3__["Util"].defaults(_this, options, _this.defaults);
        return _this;
    }
    Light.prototype.render = function () {
        this.colorIntensity = this.color.copy().scale(this.intensity);
    };
    return Light;
}(_transformable__WEBPACK_IMPORTED_MODULE_0__["Transformable"]));

var Lights = /** @class */ (function () {
    function Lights() {
    }
    // A point light emits light eminating in all directions from a single point.
    // The `point` property determines the location of the point light. Note,
    // though, that it may also be moved through the transformation of the light.
    Lights.prototype.point = function (opts) { return new Light('point', opts); };
    // A directional lights emit light in parallel lines, not eminating from any
    // single point. For these lights, only the `normal` property is used to
    // determine the direction of the light. This may also be transformed.
    Lights.prototype.directional = function (opts) { return new Light('directional', opts); };
    // Ambient lights emit a constant amount of light everywhere at once.
    // Transformation of the light has no effect.
    Lights.prototype.ambient = function (opts) { return new Light('ambient', opts); };
    return Lights;
}());



/***/ }),

/***/ "./src/materials.ts":
/*!**************************!*\
  !*** ./src/materials.ts ***!
  \**************************/
/*! exports provided: Material */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Material", function() { return Material; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.ts");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "./src/color.ts");
// //// Materials
// //////// Surface material properties
// ------------------


// `Material` objects hold the attributes that describe the color and finish of a surface.
var Material = /** @class */ (function () {
    function Material(color, options) {
        if (options === void 0) { options = {}; }
        // The `metallic` attribute determines how the specular highlights are
        // calculated. Normally, specular highlights are the color of the light
        // source. If metallic is true, specular highlight colors are determined
        // from the `specularColor` attribute.
        this.metallic = false;
        // The color used for specular highlights when `metallic` is true.
        this.specularColor = new _color__WEBPACK_IMPORTED_MODULE_1__["Color"]().white();
        // The `specularExponent` determines how "shiny" the material is. A low
        // exponent will create a low-intesity, diffuse specular shine. A high
        // exponent will create an intense, point-like specular shine.
        this.specularExponent = 15;
        // A `Shader` object may be supplied to override the shader used for this
        // material. For example, if you want to apply a flat color to text or
        // other shapes, set this value to `seen.Shaders.Flat`.
        this.shader = null; // TODO:
        this.color = 'gray'; //Colors.gray()
        _util__WEBPACK_IMPORTED_MODULE_0__["Util"].defaults(this, options, this.defaults);
    }
    Material.prototype.create = function (value) {
        if (value instanceof Material)
            return value;
        else if (value instanceof _color__WEBPACK_IMPORTED_MODULE_1__["Color"])
            return new Material(value);
        else if (typeof (value) == 'string') {
            this.color = new _color__WEBPACK_IMPORTED_MODULE_1__["Color"](value); //.parse(value))   
            return this;
        }
        else
            return this; // create() returns a Material object 
    };
    // Apply the shader's shading to this material, with the option to override
    // the shader with the material's shader (if defined).
    Material.prototype.render = function (lights, shader, renderData) {
        var color = shader.shade(lights, renderData, this);
        color.a = this.color.a;
        return color;
    };
    return Material;
}());



/***/ }),

/***/ "./src/model.ts":
/*!**********************!*\
  !*** ./src/model.ts ***!
  \**********************/
/*! exports provided: Group */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
/* harmony import */ var _transformable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transformable */ "./src/transformable.ts");
/* harmony import */ var _light__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./light */ "./src/light.ts");
/* harmony import */ var _surface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./surface */ "./src/surface.ts");
// //// Groups
// ------------------
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



// The object group class. It stores `Shapes`, `Lights`, and sub-Groups
// Notably, models are hierarchical, like a tree. This means you can isolate
// the transformation of groups of shapes in the scene, as well as create
// chains of transformations for creating, for example, articulated skeletons.
var Group = /** @class */ (function (_super) {
    __extends(Group, _super);
    function Group() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.groups = []; // sub-groups
        _this.lights = [];
        _this.surfaces = [];
        _this.shapes = [];
        return _this;
        // /* Remove a shape, model, or light from the model. NOTE: the scene may still
        // * contain a renderGroup in its cache. If you are adding and removing many items,
        // * consider calling `.flush()` on the scene to flush its renderGroup cache. */
        // remove : (childs...) ->
        //   for child in childs
        //     while (i = this.children.indexOf(child)) >= 0
        //       this.children.splice(i,1)
        //     while (i = this.lights.indexOf(child)) >= 0
        //       this.lights.splice(i,1)
        // // Create a new child model and return it.
        // append: () ->
        //   model = new seen.Group
        //   this.add model
        //   return model
        // // Visit each `Shape` in this `Group` and all recursive child `Group`s.
        // eachShape (f){
        //   for child in this.children
        //     if child instanceof seen.Shape
        //       f.call(this., child)
        //     if child instanceof seen.Group
        //       child.eachShape(f)
        //}
    }
    /** Add a `Shape`, `Surface`, Light`, and other `Group` */
    Group.prototype.add = function (child) {
        if (child instanceof _light__WEBPACK_IMPORTED_MODULE_1__["Light"])
            this.lights.push(child);
        else if (child instanceof Group)
            this.groups.push(child);
        else if (child instanceof _surface__WEBPACK_IMPORTED_MODULE_2__["Surface"])
            this.surfaces.push(child);
        else if (child instanceof _surface__WEBPACK_IMPORTED_MODULE_2__["Shape"])
            this.shapes.push(child);
        else // shouldn't get here
            throw new Error('Tried to add something strange');
    };
    return Group;
}(_transformable__WEBPACK_IMPORTED_MODULE_0__["Transformable"]));



/***/ }),

/***/ "./src/paon.ts":
/*!*********************!*\
  !*** ./src/paon.ts ***!
  \*********************/
/*! exports provided: Observable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return Observable; });
// paon.ts
/**
 * Observable (subject/publisher) component
 *
 * @export
 * @class Observable
 */
var Observable = /** @class */ (function () {
    function Observable() {
        this.observers = {};
    } // constructor
    /**
     * Add an observer to a type of message
     *
     * @param   {string}   type       Type of messages the observer subscribes to
     * @param   {Observer} observer   Observer
     * @returns {Observer}            Observer
     */
    Observable.prototype.addObserver = function (type, observer, t) {
        if (t === void 0) { t = this; }
        if (!(type in this.observers)) {
            this.observers[type] = [];
        }
        this.observers[type].push(observer.bind(t));
        return observer;
    }; // addObserver
    /**
     * Remove an observer from a type of message
     *
     * @param   {string}   type       Type of messages the observer subscribes to
     * @param   {Observer} observer   Observer
     * @returns {void}
     */
    Observable.prototype.removeObserver = function (type, observer) {
        if (this.observers[type]) {
            for (var i = 0; i < this.observers[type].length; i++) {
                if (observer === this.observers[type][i]) {
                    this.observers[type].splice(i, 1);
                    return;
                }
            } // for i
        }
    }; // removeObserver
    /**
     * Remove all observers from a type of message
     *
     * @param   {string}   type       Type of messages the observers subscribe to
     * @returns {void}
     */
    Observable.prototype.removeObserversType = function (type) {
        delete this.observers[type];
    }; // removeObserversType
    /**
     * Send a message to observers
     *
     * @param   {string} type    Type of message to be sent to observers
     * @param   {*}      [msg]   Content of the message
     * @returns {void}
     */
    Observable.prototype.notifyObservers = function (type, msg) {
        if (type in this.observers) {
            for (var _i = 0, _a = this.observers[type]; _i < _a.length; _i++) {
                var obs = _a[_i];
                obs(msg);
            } // for obs
        }
    }; // notifyObservers
    return Observable;
}()); // Observable



/***/ }),

/***/ "./src/point.ts":
/*!**********************!*\
  !*** ./src/point.ts ***!
  \**********************/
/*! exports provided: P, Point, POINT_ZERO, POINT_X, POINT_Y, POINT_Z */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POINT_ZERO", function() { return POINT_ZERO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POINT_X", function() { return POINT_X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POINT_Y", function() { return POINT_Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POINT_Z", function() { return POINT_Z; });
// The `Point` object contains x,y,z, and w coordinates. `Point`s support
// various arithmetic operations with other `Points`, scalars, or `Matrices`.
//
// Most of the methods on `Point` are destructive, so be sure to use `.copy()`
// when you want to preserve an object's value.
/**  Convenience method for creating a new `Point` object*/
function P(x, y, z, w) {
    if (w === void 0) { w = 1; }
    return (new Point(x, y, z, w));
}
var Point = /** @class */ (function () {
    function Point(x, y, z, w) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        if (w === void 0) { w = 1; }
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }
    /** useful for looking at a point with console.log()  */
    Point.prototype.show = function () {
        return ("P(" + this.x + ", " + this.y + ", " + this.z + ") ");
    };
    /** Creates and returns a new `Point` with the same values as this object. */
    Point.prototype.copy = function () {
        return P(this.x, this.y, this.z, this.w);
    };
    /** Copies the values of the supplied `Point` into this object. */
    Point.prototype.set = function (p) {
        this.x = p.x;
        this.y = p.y;
        this.z = p.z;
        this.w = p.w;
        return this;
    };
    // Performs parameter-wise addition with the supplied `Point`. Excludes `this.w`.
    Point.prototype.add = function (q) {
        this.x += q.x;
        this.y += q.y;
        this.z += q.z;
        return this;
    };
    // Performs parameter-wise subtraction with the supplied `Point`. Excludes `this.w`.
    Point.prototype.subtract = function (q) {
        this.x -= q.x;
        this.y -= q.y;
        this.z -= q.z;
        return this;
    };
    // Apply a translation.  Excludes `this.w`.
    Point.prototype.translate = function (x, y, z) {
        this.x += x;
        this.y += y;
        this.z += z;
        return this;
    };
    // Multiplies each parameters by the supplied scalar value. Excludes `this.w`.
    Point.prototype.multiply = function (n) {
        this.x *= n;
        this.y *= n;
        this.z *= n;
        return this;
    };
    // Divides each parameters by the supplied scalar value. Excludes `this.w`.
    Point.prototype.divide = function (n) {
        this.x /= n;
        this.y /= n;
        this.z /= n;
        return this;
    };
    // Rounds each coordinate to the nearest integer. Excludes `this.w`.
    Point.prototype.round = function () {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        this.z = Math.round(this.z);
        return this;
    };
    // Divides this `Point` by its magnitude. If the point is (0,0,0) we return (0,0,1).
    Point.prototype.normalize = function () {
        var n = this.magnitude();
        if (n == 0) // Strict zero comparison -- may be worth using an epsilon
            this.set(POINT_Z);
        else
            this.divide(n);
        return this;
    };
    /** Returns a new point that is perpendicular to this point */
    Point.prototype.perpendicular = function () {
        var n = this.copy().cross(POINT_Z);
        var mag = n.magnitude();
        if (mag !== 0)
            return n.divide(mag);
        // can't find perpendicular of z axis, so use x axis
        return this.copy().cross(POINT_X).normalize();
    };
    // Apply a transformation from the supplied `Matrix`.
    Point.prototype.transform = function (matrix) {
        var r = POINT_POOL;
        r.x = this.x * matrix.m[0] + this.y * matrix.m[1] + this.z * matrix.m[2] + this.w * matrix.m[3];
        r.y = this.x * matrix.m[4] + this.y * matrix.m[5] + this.z * matrix.m[6] + this.w * matrix.m[7];
        r.z = this.x * matrix.m[8] + this.y * matrix.m[9] + this.z * matrix.m[10] + this.w * matrix.m[11];
        r.w = this.x * matrix.m[12] + this.y * matrix.m[13] + this.z * matrix.m[14] + this.w * matrix.m[15];
        this.set(r);
        return (this);
    };
    // Returns this `Point`s magnitude squared. Excludes `this.w`.
    Point.prototype.magnitudeSquared = function () {
        return this.dot(this);
    };
    // Returns this `Point`s magnitude. Excludes `this.w`.
    Point.prototype.magnitude = function () {
        return Math.sqrt(this.magnitudeSquared());
    };
    // Computes the dot product with the supplied `Point`.
    Point.prototype.dot = function (q) {
        return this.x * q.x + this.y * q.y + this.z * q.z;
    };
    /** Computes the cross product with the supplied `Point`. */
    Point.prototype.cross = function (q) {
        var r = POINT_POOL;
        r.x = this.y * q.z - this.z * q.y;
        r.y = this.z * q.x - this.x * q.z;
        r.z = this.x * q.y - this.y * q.x;
        this.set(r);
        return this;
    };
    return Point;
}());

// seen.Points = {
//   X    : -> seen.P(1, 0, 0)
//   Y    : -> seen.P(0, 1, 0)
//   Z    : -> seen.P(0, 0, 1)
//   ZERO : -> seen.P(0, 0, 0)
// }
// A pool object which prevents us from having to create new `Point` objects
// for various calculations, which vastly improves performance.
var POINT_POOL = P(0, 0, 0, 0);
// A few useful `Point` objects. Be sure that you don't invoke destructive
// methods on these objects.
var POINT_ZERO = P(0, 0, 0);
var POINT_X = P(1, 0, 0);
var POINT_Y = P(0, 1, 0);
var POINT_Z = P(0, 0, 1);


/***/ }),

/***/ "./src/scene.ts":
/*!**********************!*\
  !*** ./src/scene.ts ***!
  \**********************/
/*! exports provided: Scene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return Scene; });
/* harmony import */ var _camera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./camera */ "./src/camera.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/model.ts");
/* harmony import */ var _shaders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shaders */ "./src/shaders.ts");
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./canvas */ "./src/canvas.ts");
// //// Scene

// TODO resolve between RenderGroup and Group
// import { RenderGroup } from './render/rendermodel'



/** A `Scene` is the main object for a view of a scene. */
var Scene = /** @class */ (function () {
    function Scene(domElementID, options) {
        this.world = new _model__WEBPACK_IMPORTED_MODULE_1__["Group"]();
        // The `Camera`, which defines the projection transformation. The default
        // projection is perspective.
        this.camera = new _camera__WEBPACK_IMPORTED_MODULE_0__["Camera"]();
        // The `Viewport`, which defines the projection from shape-space to
        // projection-space then to screen-space. The default viewport is on a
        // space from (0,0,0) to (1,1,1). To map more naturally to pixels, create a
        // viewport with the same width/height as the DOM element.
        this.viewport = new _camera__WEBPACK_IMPORTED_MODULE_0__["Viewport"]().origin(1, 1);
        // The scene's shader determines which lighting model is used.
        this.shader = new _shaders__WEBPACK_IMPORTED_MODULE_2__["Shaders"]();
        // The `cullBackfaces` boolean can be used to turn off backface-culling
        // for the whole scene. Beware, turning this off can slow down a scene's
        // rendering by a factor of 2. You can also turn off backface-culling for
        // individual surfaces with a boolean on those objects.
        this.cullBackfaces = true;
        // The `fractionalPoints` boolean determines if we round the surface
        // coordinates to the nearest integer. Rounding the coordinates before
        // since it cuts down on the length of path data. Anecdotally, my speedup
        // on a complex demo scene was 10 FPS. However, it does introduce a slight
        // jittering effect when animating.
        this.fractionalPoints = false;
        // The `cache` boolean (default : true) enables a simple cache for
        // renderGroups, which are generated for each surface in the scene. The
        // cache is a simple Object keyed by the surface's unique id. The cache has
        // no eviction policy. To flush the cache, call `.flushCache()`
        this.cache = true;
        this._renderGroupCache = {};
        this.canvas = new _canvas__WEBPACK_IMPORTED_MODULE_3__["Canvas"](domElementID);
        this.options = {
            cache: true,
            answer: 42
        };
        Object.assign(this.options, options);
    }
    /** Add a `Shape`, `Surface`, Light`, and other `Group` */
    Scene.prototype.add = function (child) {
        this.world.add(child);
    };
    Scene.prototype.findAllSurfaces = function (group) {
        var surfaceList = [];
        group.shapes.forEach(function (shape) {
            shape.surfaces.forEach(function (surface) {
                surfaceList.push(surface);
            });
        });
        return (surfaceList);
    };
    // TODO actually cull
    Scene.prototype.cullSurfaces = function (surfaceList, camera) {
        return (surfaceList);
    };
    // The primary method that produces the render models, which are then used
    // by the `RenderContext` to paint the scene.
    Scene.prototype.render = function () {
        var _this = this;
        // get all surfaces
        var allSurfaces = this.findAllSurfaces(this.world);
        // cull the ones pointing the wrong way
        var culledSurfaces;
        if (this.cullBackfaces) {
            culledSurfaces = this.cullSurfaces(allSurfaces, this.camera);
        }
        else {
            culledSurfaces = allSurfaces;
        }
        console.log('SurfaceList', culledSurfaces);
        culledSurfaces.forEach(function (surface) {
            surface.points.map(function (p) { return console.log(p.show()); });
            _this.canvas.draw(surface.strokeMaterial);
            _this.canvas.path(surface.points);
        });
        return;
        //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////
        32;
        //   renderGroup.fill = (ref1 = surface.fillMaterial) != null ? ref1.render(lights, _this.shader, renderGroup.transformed) : void 0;
        //   renderGroup.stroke = (ref2 = surface.strokeMaterial) != null ? ref2.render(lights, _this.shader, renderGroup.transformed) : void 0;
        // Compute the projection matrix including the viewport and camera
        // transformation matrices.
        // 
        var projection = this.camera
            .m
            .multiply(this.viewport.prescale);
        // TODO  .multiply(this.camera.projection)
        var transform = this.world.m;
        // TODO: ??? what is this?
        // this.viewport   = this.viewport.postscale
        var renderGroups = [];
        // Compute transformed and projected geometry.
        var results = [];
        for (var i = 0, len = this.world.surfaces.length; i < len; i++) {
            var surface = this.world.surfaces[i];
            var renderGroup = this._renderSurface(surface, transform, projection, this.viewport);
            // Test projected normal's z-coordinate for culling (if enabled).
            // if ((!_this.cullBackfaces || !surface.cullBackfaces || renderGroup.projected.normal.z < 0) && renderGroup.inFrustrum) {
            //   renderGroup.fill = (ref1 = surface.fillMaterial) != null ? ref1.render(lights, _this.shader, renderGroup.transformed) : void 0;
            //   renderGroup.stroke = (ref2 = surface.strokeMaterial) != null ? ref2.render(lights, _this.shader, renderGroup.transformed) : void 0;
            //   // Round coordinates (if enabled)
            //   if (_this.fractionalPoints !== true) {
            //     ref3 = renderGroup.projected.points;
            //     for (j = 0, len1 = ref3.length; j < len1; j++) {
            //       p = ref3[j];
            //       p.round();
            //     }
            //   }
            //   results.push(renderGroups.push(renderGroup));
            // } else {
            results.push(void 0);
            //}
        }
    };
    // this.model.eachRenderable(function(light, transform) {
    //     // Compute light model data.
    //     return new seen.LightRenderGroup(light, transform);
    // }, (function(_this) {
    //   return function(shape, lights, transform) {
    //     var i, j, len, len1, p, ref, ref1, ref2, ref3, renderGroup, results, surface;
    //       // Compute transformed and projected geometry.
    //       ref = shape.surfaces;
    //     results = [];
    //     for (i = 0, len = ref.length; i < len; i++) {
    //       surface = ref[i];
    //       renderGroup = _this._renderSurface(surface, transform, projection, viewport);
    //       // Test projected normal's z-coordinate for culling (if enabled).
    //       if ((!_this.cullBackfaces || !surface.cullBackfaces || renderGroup.projected.normal.z < 0) && renderGroup.inFrustrum) {
    //         renderGroup.fill = (ref1 = surface.fillMaterial) != null ? ref1.render(lights, _this.shader, renderGroup.transformed) : void 0;
    //         renderGroup.stroke = (ref2 = surface.strokeMaterial) != null ? ref2.render(lights, _this.shader, renderGroup.transformed) : void 0;
    //         // Round coordinates (if enabled)
    //         if (_this.fractionalPoints !== true) {
    //           ref3 = renderGroup.projected.points;
    //           for (j = 0, len1 = ref3.length; j < len1; j++) {
    //             p = ref3[j];
    //             p.round();
    //           }
    //         }
    //         results.push(renderGroups.push(renderGroup));
    //       } else {
    //         results.push(void 0);
    //       }
    //     }
    //     return results;
    //   };
    // })(this));
    /** Sort render models by projected z coordinate. This ensures that the surfaces
     farthest from the eye are painted first. (Painter's Algorithm) */
    Scene.prototype.renderGroups = function (a, b) {
        return b.projected.barycenter.z - a.projected.barycenter.z;
    };
    /** Get or create the rendermodel for the given surface.
        If `this.cache` is true, we cache these models to reduce object creation and recomputation. */
    Scene.prototype._renderSurface = function (surface, transform, projection, viewport) {
        // if (!this.options.cache)
        //     return new RenderGroup(surface, transform, projection, viewport);
        // let renderGroup = this._renderGroupCache[surface.id]
        // if (!renderGroup)  //was existential operator
        //     renderGroup = this._renderGroupCache[surface.id] = new Group(surface, transform, projection, viewport)
        // else
        //     renderGroup.update(transform, projection, viewport)
        // return renderGroup
    };
    /** Removes all elements from the cache. This may be necessary if you add and
     remove many shapes from the scene's models since this cache has no eviction policy. */
    Scene.prototype.flushCache = function () {
        this._renderGroupCache = {};
    };
    return Scene;
}());



/***/ }),

/***/ "./src/shaders.ts":
/*!************************!*\
  !*** ./src/shaders.ts ***!
  \************************/
/*! exports provided: Shader, Phong, Shaders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shader", function() { return Shader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Phong", function() { return Phong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shaders", function() { return Shaders; });
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point */ "./src/point.ts");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "./src/color.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


// //// Shaders
// ------------------
var EYE_NORMAL = _point__WEBPACK_IMPORTED_MODULE_0__["POINT_Z"];
// These shading functions compute the shading for a surface. To reduce code
// duplication, we aggregate them in a utils object.
var ShaderUtils = /** @class */ (function () {
    function ShaderUtils() {
    }
    ShaderUtils.applyDiffuse = function (c, light, lightNormal, surfaceNormal, material) {
        var dot = lightNormal.dot(surfaceNormal);
        if (dot > 0) {
            // Apply diffuse phong shading
            c.addChannels(light.colorIntensity.copy().scale(dot));
        }
    };
    ShaderUtils.applyDiffuseAndSpecular = function (c, light, lightNormal, surfaceNormal, material) {
        var dot = lightNormal.dot(surfaceNormal);
        if (dot > 0) {
            // Apply diffuse phong shading
            c.addChannels(light.colorIntensity.copy().scale(dot));
            // Compute and apply specular phong shading
            var reflectionNormal = surfaceNormal.copy().multiply(dot * 2).subtract(lightNormal);
            var specularIntensity = Math.pow(0.5 + reflectionNormal.dot(EYE_NORMAL), material.specularExponent);
            var specularColor = material.specularColor.copy().scale(specularIntensity * light.intensity / 255.0);
            c.addChannels(specularColor);
        }
    };
    ShaderUtils.applyAmbient = function (c, light) {
        // Apply ambient shading
        c.addChannels(light.colorIntensity);
    };
    return ShaderUtils;
}());
// The `Shader` class is the base class for all shader objects.
var Shader = /** @class */ (function () {
    function Shader() {
    }
    /** Every `Shader` implementation must override the `shade` method.
    
    `lights` is an object containing the ambient, point, and directional light sources.
    `renderGroup` is an instance of `RenderGroup` and contains the transformed and projected surface data.
    `material` is an instance of `Material` and contains the color and other attributes for determining how light reflects off the surface.*/
    Shader.prototype.shade = function (lights, renderGroup, material) {
        return new _color__WEBPACK_IMPORTED_MODULE_1__["Color"]();
    };
    return Shader;
}());

// The `Phong` shader implements the Phong shading model with a diffuse,
// specular, and ambient term.
//
// See https://en.wikipedia.org/wiki/Phong_reflection_model for more information
var Phong = /** @class */ (function (_super) {
    __extends(Phong, _super);
    function Phong() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Phong.prototype.shade = function (lights, renderGroup, material) {
        var c = new _color__WEBPACK_IMPORTED_MODULE_1__["Color"]();
        lights.forEach(function (light) {
            switch (light.type) {
                case 'point':
                    var lightNormal = light.point.copy().subtract(renderGroup.barycenter).normalize();
                    ShaderUtils.applyDiffuseAndSpecular(c, light, lightNormal, renderGroup.normal, material);
                    break;
                case 'directional':
                    ShaderUtils.applyDiffuseAndSpecular(c, light, light.normal, renderGroup.normal, material);
                    break;
                case 'ambient':
                    ShaderUtils.applyAmbient(c, light);
                    break;
                default:
                    console.assert(false, "should never get here, light.type was " + light.type);
            }
        });
        c.multiplyChannels(material.color);
        if (material.metallic) {
            c.minChannels(material.specularColor);
        }
        c.clamp(0, 0xFF);
        return c;
    };
    return Phong;
}(Shader));

// The `DiffusePhong` shader implements the Phong shading model with a diffuse
// and ambient term (no specular).
var DiffusePhong = /** @class */ (function (_super) {
    __extends(DiffusePhong, _super);
    function DiffusePhong() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DiffusePhong.prototype.shade = function (lights, renderGroup, material) {
        var c = new _color__WEBPACK_IMPORTED_MODULE_1__["Color"]();
        lights.forEach(function (light) {
            switch (light.type) {
                case 'point':
                    var lightNormal = light.point.copy().subtract(renderGroup.barycenter).normalize();
                    ShaderUtils.applyDiffuse(c, light, lightNormal, renderGroup.normal, material);
                case 'directional':
                    ShaderUtils.applyDiffuse(c, light, light.normal, renderGroup.normal, material);
                case 'ambient':
                    ShaderUtils.applyAmbient(c, light);
            }
            c.multiplyChannels(material.color).clamp(0, 0xFF);
        });
        return c;
    };
    return DiffusePhong;
}(Shader));
// The `Ambient` shader colors surfaces from ambient light only.
var Ambient = /** @class */ (function (_super) {
    __extends(Ambient, _super);
    function Ambient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ambient.prototype.shade = function (lights, renderGroup, material) {
        var c = new _color__WEBPACK_IMPORTED_MODULE_1__["Color"]();
        lights.forEach(function (light) {
            switch (light.type) {
                case 'ambient':
                    ShaderUtils.applyAmbient(c, light);
                    break;
            }
            c.multiplyChannels(material.color).clamp(0, 0xFF);
        });
        return c;
    };
    return Ambient;
}(Shader));
// The `Flat` shader colors surfaces with the material color, disregarding all
// light sources.
var Flat = /** @class */ (function (_super) {
    __extends(Flat, _super);
    function Flat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Flat.prototype.shade = function (lights, renderGroup, material) {
        return material.color;
    };
    return Flat;
}(Shader));
// tom: this should be a type declaration to give the shaker a chance
var Shaders = /** @class */ (function () {
    function Shaders() {
    }
    Shaders.phong = new Phong();
    Shaders.diffuse = new DiffusePhong();
    Shaders.ambient = new Ambient();
    Shaders.flat = new Flat();
    return Shaders;
}());



/***/ }),

/***/ "./src/shapes/primitives.ts":
/*!**********************************!*\
  !*** ./src/shapes/primitives.ts ***!
  \**********************************/
/*! exports provided: Triangle, Primitive, NullShape, Cube, Pyramid, Icosahedron */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Triangle", function() { return Triangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Primitive", function() { return Primitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NullShape", function() { return NullShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cube", function() { return Cube; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pyramid", function() { return Pyramid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icosahedron", function() { return Icosahedron; });
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../point */ "./src/point.ts");
/* harmony import */ var _surface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../surface */ "./src/surface.ts");
//// Shapes
// //////// Shape primitives and shape-making methods
// ------------------
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

 // TODO: rename Shape to Surface, Surface to Triangle
// Map to points in the surfaces of a tetrahedron
var TETRAHEDRON_COORDINATE_MAP = [
    [0, 2, 1],
    [0, 1, 3],
    [3, 2, 0],
    [1, 2, 3],
];
// triangles formed from points in TETRAHEDRON_COORDINATE_MAP
var TETRA_MAP = [
    [0, 1, 2],
    [0, 2, 3],
    [0, 1, 3],
    [1, 2, 3],
];
// // Map to points in the surfaces of a cube
// const CUBE_COORDINATE_MAP = [
//     [0, 1, 3, 2], // left
//     [5, 4, 6, 7], // right
//     [1, 0, 4, 5], // bottom
//     [2, 3, 7, 6], // top
//     [3, 1, 5, 7], // front
//     [0, 2, 6, 4], // back
// ]
// TODO: Shapes should be part of the Shape() class  - box:Shape = new Shape().box()
/** static methods to create `Shape` */
var Triangle = /** @class */ (function () {
    function Triangle() {
    }
    return Triangle;
}());

var Primitive = /** @class */ (function () {
    function Primitive() {
        this.triangles = [];
    }
    return Primitive;
}());

/** Sometimes we just want an empty `Group` that we can add children to */
function NullShape() {
    var points = [Object(_point__WEBPACK_IMPORTED_MODULE_0__["P"])(0, 0, 0), Object(_point__WEBPACK_IMPORTED_MODULE_0__["P"])(0, 0, 0), Object(_point__WEBPACK_IMPORTED_MODULE_0__["P"])(0, 0, 0)];
    return new _surface__WEBPACK_IMPORTED_MODULE_1__["Shape"]('nullshape', mapPointsToSurfaces(points, []));
}
var cubePoints = [Object(_point__WEBPACK_IMPORTED_MODULE_0__["P"])(-1, -1, -1), Object(_point__WEBPACK_IMPORTED_MODULE_0__["P"])(-1, -1, 1), Object(_point__WEBPACK_IMPORTED_MODULE_0__["P"])(-1, 1, -1), Object(_point__WEBPACK_IMPORTED_MODULE_0__["P"])(-1, 1, 1), Object(_point__WEBPACK_IMPORTED_MODULE_0__["P"])(1, -1, -1), Object(_point__WEBPACK_IMPORTED_MODULE_0__["P"])(1, -1, 1), Object(_point__WEBPACK_IMPORTED_MODULE_0__["P"])(1, 1, -1), Object(_point__WEBPACK_IMPORTED_MODULE_0__["P"])(1, 1, 1)];
// Map to points in the surfaces of a cube, two triangles to a side
var CUBE_COORDINATE_MAP = [
    [0, 1, 3],
    [0, 3, 2],
    [5, 4, 6],
    [5, 6, 7],
    [1, 0, 4],
    [1, 4, 5],
    [2, 3, 7],
    [2, 7, 6],
    [3, 1, 5],
    [3, 5, 7],
    [0, 2, 6],
    [0, 6, 4],
];
var Cube = /** @class */ (function (_super) {
    __extends(Cube, _super);
    function Cube(options) {
        return _super.call(this, 'cube', mapPointsToSurfaces(cubePoints, CUBE_COORDINATE_MAP)) || this;
    }
    return Cube;
}(_surface__WEBPACK_IMPORTED_MODULE_1__["Shape"]));

var pyramidPoints = [Object(_point__WEBPACK_IMPORTED_MODULE_0__["P"])(0, 0, 0), Object(_point__WEBPACK_IMPORTED_MODULE_0__["P"])(0, 0, 1), Object(_point__WEBPACK_IMPORTED_MODULE_0__["P"])(1, 0, 0), Object(_point__WEBPACK_IMPORTED_MODULE_0__["P"])(1, 0, 1), Object(_point__WEBPACK_IMPORTED_MODULE_0__["P"])(0.5, 1, 0.5)];
// Map to points in the surfaces of a rectangular pyramid
var PYRAMID_COORDINATE_MAP = [
    [1, 0, 2, 3],
    [0, 1, 4],
    [2, 0, 4],
    [3, 2, 4],
    [1, 3, 4],
];
var Pyramid = /** @class */ (function (_super) {
    __extends(Pyramid, _super);
    function Pyramid(options) {
        return _super.call(this, 'pyramid', mapPointsToSurfaces(pyramidPoints, PYRAMID_COORDINATE_MAP)) || this;
    }
    return Pyramid;
}(_surface__WEBPACK_IMPORTED_MODULE_1__["Shape"]));

// Map to points in the surfaces of an icosahedron
var ICOSAHEDRON_COORDINATE_MAP = [
    [0, 4, 1],
    [0, 9, 4],
    [9, 5, 4],
    [4, 5, 8],
    [4, 8, 1],
    [8, 10, 1],
    [8, 3, 10],
    [5, 3, 8],
    [5, 2, 3],
    [2, 7, 3],
    [7, 10, 3],
    [7, 6, 10],
    [7, 11, 6],
    [11, 0, 6],
    [0, 1, 6],
    [6, 1, 10],
    [9, 0, 11],
    [9, 11, 2],
    [9, 2, 5],
    [7, 2, 11],
];
// Altitude of eqiulateral triangle for computing triangular patch size
var EQUILATERAL_TRIANGLE_ALTITUDE = Math.sqrt(3.0) / 2.0;
// Points array of an icosahedron
var ICOS_X = 0.525731112119133606;
var ICOS_Z = 0.850650808352039932;
var ICOSAHEDRON_POINTS = [
    Object(_point__WEBPACK_IMPORTED_MODULE_0__["P"])(-ICOS_X, 0.0, -ICOS_Z),
    Object(_point__WEBPACK_IMPORTED_MODULE_0__["P"])(ICOS_X, 0.0, -ICOS_Z),
    Object(_point__WEBPACK_IMPORTED_MODULE_0__["P"])(-ICOS_X, 0.0, ICOS_Z),
    Object(_point__WEBPACK_IMPORTED_MODULE_0__["P"])(ICOS_X, 0.0, ICOS_Z),
    Object(_point__WEBPACK_IMPORTED_MODULE_0__["P"])(0.0, ICOS_Z, -ICOS_X),
    Object(_point__WEBPACK_IMPORTED_MODULE_0__["P"])(0.0, ICOS_Z, ICOS_X),
    Object(_point__WEBPACK_IMPORTED_MODULE_0__["P"])(0.0, -ICOS_Z, -ICOS_X),
    Object(_point__WEBPACK_IMPORTED_MODULE_0__["P"])(0.0, -ICOS_Z, ICOS_X),
    Object(_point__WEBPACK_IMPORTED_MODULE_0__["P"])(ICOS_Z, ICOS_X, 0.0),
    Object(_point__WEBPACK_IMPORTED_MODULE_0__["P"])(-ICOS_Z, ICOS_X, 0.0),
    Object(_point__WEBPACK_IMPORTED_MODULE_0__["P"])(ICOS_Z, -ICOS_X, 0.0),
    Object(_point__WEBPACK_IMPORTED_MODULE_0__["P"])(-ICOS_Z, -ICOS_X, 0.0),
];
var Icosahedron = /** @class */ (function (_super) {
    __extends(Icosahedron, _super);
    function Icosahedron(options) {
        return _super.call(this, 'icosahedron', mapPointsToSurfaces(ICOSAHEDRON_POINTS, ICOSAHEDRON_COORDINATE_MAP)) || this;
    }
    return Icosahedron;
}(_surface__WEBPACK_IMPORTED_MODULE_1__["Shape"]));

//   unitcube() {
//   let points = [P(0, 0, 0), P(0, 0, 1), P(0, 1, 0), P(0, 1, 1), P(1, 0, 0), P(1, 0, 1), P(1, 1, 0), P(1, 1, 1)];
//   return new Shape('unitcube', this.mapPointsToSurfaces( points, CUBE_COORDINATE_MAP ));
// }
//   rectangle: (function (_this) {
//     return function (point1, point2) {
//       var compose, points;
//       compose = function (x, y, z) {
//         return P(x(point1.x, point2.x), y(point1.y, point2.y), z(point1.z, point2.z));
//       };
//       points = [compose(Math.min, Math.min, Math.min), compose(Math.min, Math.min, Math.max), compose(Math.min, Math.max, Math.min), compose(Math.min, Math.max, Math.max), compose(Math.max, Math.min, Math.min), compose(Math.max, Math.min, Math.max), compose(Math.max, Math.max, Math.min), compose(Math.max, Math.max, Math.max)];
//       return new Shape('rect', Shapes.mapPointsToSurfaces(points, CUBE_COORDINATE_MAP));
//     };
//   })(this),
//   tetrahedron: (function (_this) {
//     return function () {
//       var points;
//       points = [P(1, 1, 1), P(-1, -1, 1), P(-1, 1, -1), P(1, -1, -1)];
//       return new Shape('tetrahedron', Shapes.mapPointsToSurfaces(points, TETRAHEDRON_COORDINATE_MAP));
//     };
//   })(this),
//   sphere: function (subdivisions) {
//     var i, j, ref, triangles;
//     if (subdivisions == null) {
//       subdivisions = 2;
//     }
//     triangles = ICOSAHEDRON_COORDINATE_MAP.map(function (coords) {
//       return coords.map(function (c) {
//         return ICOSAHEDRON_POINTS[c];
//       });
//     });
//     for (i = j = 0, ref = subdivisions; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
//       triangles = Shapes._subdivideTriangles(triangles);
//     }
//     return new Shape('sphere', triangles.map(function (triangle) {
//       return new Surface(triangle.map(function (v) {
//         return v.copy();
//       }));
//     }));
//   },
//   pipe: function (point1, point2, radius, segments) {
//     var axis, j, perp, points, quat, results, theta;
//     if (radius == null) {
//       radius = 1;
//     }
//     if (segments == null) {
//       segments = 8;
//     }
//     axis = point2.copy().subtract(point1);
//     perp = axis.perpendicular().multiply(radius);
//     theta = -Math.PI * 2.0 / segments;
//     quat = Quaternion.pointAngle(axis.copy().normalize(), theta).toMatrix();
//     points = (function () {
//       results = [];
//       for (var j = 0; 0 <= segments ? j < segments : j > segments; 0 <= segments ? j++ : j--) { results.push(j); }
//       return results;
//     }).apply(this).map(function (i) {
//       var p;
//       p = point1.copy().add(perp);
//       perp.transform(quat);
//       return p;
//     });
//     return Shapes.extrude(points, axis);
//   },
//   patch: function (nx, ny) {
//     var column, j, k, l, len1, len2, len3, m, n, p, pts, pts0, pts1, ref, ref1, ref2, ref3, surfaces, x, y;
//     if (nx == null) {
//       nx = 20;
//     }
//     if (ny == null) {
//       ny = 20;
//     }
//     nx = Math.round(nx);
//     ny = Math.round(ny);
//     surfaces = [];
//     for (x = j = 0, ref = nx; 0 <= ref ? j < ref : j > ref; x = 0 <= ref ? ++j : --j) {
//       column = [];
//       for (y = k = 0, ref1 = ny; 0 <= ref1 ? k < ref1 : k > ref1; y = 0 <= ref1 ? ++k : --k) {
//         pts0 = [P(x, y), P(x + 1, y - 0.5), P(x + 1, y + 0.5)];
//         pts1 = [P(x, y), P(x + 1, y + 0.5), P(x, y + 1)];
//         ref2 = [pts0, pts1];
//         for (l = 0, len1 = ref2.length; l < len1; l++) {
//           pts = ref2[l];
//           for (m = 0, len2 = pts.length; m < len2; m++) {
//             p = pts[m];
//             p.x *= EQUILATERAL_TRIANGLE_ALTITUDE;
//             p.y += x % 2 === 0 ? 0.5 : 0;
//           }
//           column.push(pts);
//         }
//       }
//       if (x % 2 !== 0) {
//         ref3 = column[0];
//         for (n = 0, len3 = ref3.length; n < len3; n++) {
//           p = ref3[n];
//           p.y += ny;
//         }
//         column.push(column.shift());
//       }
//       surfaces = surfaces.concat(column);
//     }
//     return new Shape('patch', surfaces.map(function (s) {
//       return new Surface(s);
//     }));
//   },
//   text: function (text, surfaceOptions) {
//     var key, surface, val;
//     if (surfaceOptions == null) {
//       surfaceOptions = {};
//     }
//     surface = new Surface(Affine.ORTHONORMAL_BASIS(), Painters.text);
//     surface.text = text;
//     for (key in surfaceOptions) {
//       val = surfaceOptions[key];
//       surface[key] = val;
//     }
//     return new Shape('text', [surface]);
//   },
//   extrude: function (points, offset) {
//     var back, front, i, j, len, p, ref, surfaces;
//     surfaces = [];
//     front = new Surface((function () {
//       var j, len1, results;
//       results = [];
//       for (j = 0, len1 = points.length; j < len1; j++) {
//         p = points[j];
//         results.push(p.copy());
//       }
//       return results;
//     })());
//     back = new Surface((function () {
//       var j, len1, results;
//       results = [];
//       for (j = 0, len1 = points.length; j < len1; j++) {
//         p = points[j];
//         results.push(p.add(offset));
//       }
//       return results;
//     })());
//     for (i = j = 1, ref = points.length; 1 <= ref ? j < ref : j > ref; i = 1 <= ref ? ++j : --j) {
//       surfaces.push(new Surface([front.points[i - 1].copy(), back.points[i - 1].copy(), back.points[i].copy(), front.points[i].copy()]));
//     }
//     len = points.length;
//     surfaces.push(new Surface([front.points[len - 1].copy(), back.points[len - 1].copy(), back.points[0].copy(), front.points[0].copy()]));
//     back.points.reverse();
//     surfaces.push(front);
//     surfaces.push(back);
//     return new Shape('extrusion', surfaces);
//   },
//   arrow: function (thickness, tailLength, tailWidth, headLength, headPointiness) {
//     var htw, points;
//     if (thickness == null) {
//       thickness = 1;
//     }
//     if (tailLength == null) {
//       tailLength = 1;
//     }
//     if (tailWidth == null) {
//       tailWidth = 1;
//     }
//     if (headLength == null) {
//       headLength = 1;
//     }
//     if (headPointiness == null) {
//       headPointiness = 0;
//     }
//     htw = tailWidth / 2;
//     points = [P(0, 0, 0), P(headLength + headPointiness, 1, 0), P(headLength, htw, 0), P(headLength + tailLength, htw, 0), P(headLength + tailLength, -htw, 0), P(headLength, -htw, 0), P(headLength + headPointiness, -1, 0)];
//     return Shapes.extrude(points, P(0, 0, thickness));
//   },
//   path: function (points) {
//     return new Shape('path', [new Surface(points)]);
//   },
//   custom: function (s) {
//     var f, j, len1, p, ref, surfaces;
//     surfaces = [];
//     ref = s.surfaces;
//     for (j = 0, len1 = ref.length; j < len1; j++) {
//       f = ref[j];
//       surfaces.push(new Surface((function () {
//         var k, len2, results;
//         results = [];
//         for (k = 0, len2 = f.length; k < len2; k++) {
//           p = f[k];
//           results.push(P.apply(seen, p));
//         }
//         return results;
//       })()));
//     }
//     return new Shape('custom', surfaces);
//   },
/** points[] are the vertexes of the shape (indexed from zero),
 * coordinateMap[] are sets of vertex indexes that form exterior triangles or quads
 * we return an array of `Surface` objects (triangles) ready to transform  */
function mapPointsToSurfaces(points, coordinateMap) {
    // TODO: convert all exterior quads to triangles  (eg: two triangles per side for a cube)
    var s = [];
    points.forEach(function (point) {
        console.log('POINTS', point);
    });
    coordinateMap.forEach(function (element) {
        console.log('ELEMENT', element);
        s.push(new _surface__WEBPACK_IMPORTED_MODULE_1__["Surface"]('triangle', points[element[0]], points[element[1]], points[element[2]]));
    });
    return s;
}
//   _subdivideTriangles: function (triangles) {
//     var j, len1, newTriangles, tri, v01, v12, v20;
//     newTriangles = [];
//     for (j = 0, len1 = triangles.length; j < len1; j++) {
//       tri = triangles[j];
//       v01 = tri[0].copy().add(tri[1]).normalize();
//       v12 = tri[1].copy().add(tri[2]).normalize();
//       v20 = tri[2].copy().add(tri[0]).normalize();
//       newTriangles.push([tri[0], v01, v20]);
//       newTriangles.push([tri[1], v12, v01]);
//       newTriangles.push([tri[2], v20, v12]);
//       newTriangles.push([v01, v12, v20]);
//     }
//     return newTriangles;
//   }
// };


/***/ }),

/***/ "./src/surface.ts":
/*!************************!*\
  !*** ./src/surface.ts ***!
  \************************/
/*! exports provided: Surface, Shape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Surface", function() { return Surface; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shape", function() { return Shape; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.ts");
/* harmony import */ var _materials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./materials */ "./src/materials.ts");
/* harmony import */ var _transformable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transformable */ "./src/transformable.ts");
// //// Surfaces and Shapes
// ------------------
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



// A `Surface` is a defined as a planar object in 3D space. These paths don't
// necessarily need to be convex, but they should be non-degenerate. This
// library does not support shapes with holes.
// TODO: rename 'Surface' to 'Triangle' and fix up the code
var Surface = /** @class */ (function (_super) {
    __extends(Surface, _super);
    function Surface(stype, p1, p2, p3, p4) {
        var _this = _super.call(this) || this;
        // When 'false' this will override backface culling, which is useful if your
        // material is transparent. See comment in `Scene`.
        _this.cullBackfaces = true;
        // Fill and stroke may be `Material` objects, which define the color and
        // finish of the object and are rendered using the scene's shader.
        _this.fillMaterial = new _materials__WEBPACK_IMPORTED_MODULE_1__["Material"]('gray');
        _this.strokeMaterial = null;
        _this.dirty = false;
        _this.points = [p1, p2, p3];
        // We store a unique id for every surface so we can look them up quickly
        // with the `renderGroup` cache.
        _this.id = 's' + _util__WEBPACK_IMPORTED_MODULE_0__["Util"].uniqueId();
        //this.painter = painter
        _this.fillMaterial = new _materials__WEBPACK_IMPORTED_MODULE_1__["Material"]('gray');
        _this.strokeMaterial = new _materials__WEBPACK_IMPORTED_MODULE_1__["Material"]('blue');
        return _this;
    }
    Surface.prototype.fill = function (fill) {
        this.fillMaterial = new _materials__WEBPACK_IMPORTED_MODULE_1__["Material"]('gray').create(fill);
        return this;
    };
    Surface.prototype.stroke = function (stroke) {
        this.strokeMaterial = new _materials__WEBPACK_IMPORTED_MODULE_1__["Material"]('gray').create(stroke);
        return this;
    };
    return Surface;
}(_transformable__WEBPACK_IMPORTED_MODULE_2__["Transformable"]));

// A `Shape` contains a collection of surface. They may create a closed 3D
// shape, but not necessarily. For example, a cube is a closed shape, but a
// patch is not.
var Shape = /** @class */ (function (_super) {
    __extends(Shape, _super);
    function Shape(type, surfaces) {
        var _this = _super.call(this) || this;
        _this.type = type;
        _this.surfaces = surfaces;
        _this.m = Object(_transformable__WEBPACK_IMPORTED_MODULE_2__["M"])(_transformable__WEBPACK_IMPORTED_MODULE_2__["IDENTITY"]);
        return _this;
    }
    /** Apply the supplied fill `Material` to each surface */
    Shape.prototype.fill = function (fill) {
        //    this.eachSurface (s) => { s.fill(fill)}
        return this;
    };
    /** Apply the supplied stroke `Material` to each surface */
    Shape.prototype.stroke = function (stroke) {
        //    this.eachSurface (s) -> s.stroke(stroke)
        return this;
    };
    return Shape;
}(_transformable__WEBPACK_IMPORTED_MODULE_2__["Transformable"]));



/***/ }),

/***/ "./src/transformable.ts":
/*!******************************!*\
  !*** ./src/transformable.ts ***!
  \******************************/
/*! exports provided: M, IDENTITY, Transformable, Matrix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDENTITY", function() { return IDENTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transformable", function() { return Transformable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Matrix", function() { return Matrix; });
// `Transformable` base class extended by `Shape` and `Group`.
//
// It stores transformations in the scene. These include:
// (1) Camera Projection and Viewport transformations.
// (2) Transformations of any `Transformable` type object
//
// Underneath, it's just matrix arithmetic.  When you use
// a matrix object in this library, they are really
// instances of 'Transformable'
// A convenience method for constructing Matrix objects.
function M(m) {
    console.assert(m.length === 16, 'array for M() was not length 16');
    return (new Matrix(m));
}
// Most of the matrix methods are destructive, so be sure to use `.copy()`
// when you want to preserve an object's value.
// All `Transformable` objects get matrix-transformation methods like
//  'scale', 'translate', 'rotx', 'roty', 'rotz', 'matrix', 'reset', 'bake'
//
// The advantages of keeping transforms in `Matrix` form are
// (1) lazy computation of point position
// (2) ability combine hierarchical transformations easily
// (3) ability to reset transformations to an original state.
//
// Resetting transformations is especially useful when you want to animate
// interpolated values. Instead of computing the difference at each animation
// step, you can compute the global interpolated value for that time step and
// apply that value directly to a matrix (once it is reset).
var IDENTITY = [1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1];
// Groups and Shapes are decendents of 'transformable', a single matrix
// determines their scale, rotation, and translation     
// Cameras and Lights are also transformables, but this doesn't totally make 
// sense since they can't be scaled.
var Transformable = /** @class */ (function () {
    function Transformable() {
        this.m = new Matrix(IDENTITY); // shallow copy
    }
    Transformable.prototype.isEqual = function (other) {
        return this.m.isEqual(other.m);
    };
    return Transformable;
}());

var Matrix = /** @class */ (function () {
    /** Accepts a 16-value `Array`, defaults to the identity matrix.*/
    function Matrix(m) {
        this.m = Array.from(IDENTITY);
        this.ARRAY_POOL = Array.from(IDENTITY);
        this.baked = Array.from(IDENTITY);
        if (m)
            this.m = m;
    }
    ///////////////////////////////////////////////
    // here is the method that does all the work !!
    ///////////////////////////////////////////////
    // Apply a transformation`
    Matrix.prototype.transform = function (m) {
        this.multiply(m);
        return this;
    };
    ///////////////////////////////////////////////
    // rest of the class is just matrix arithmetic
    ///////////////////////////////////////////////
    // Returns a new matrix instances with a copy of the value array
    Matrix.prototype.copy = function () {
        return new Matrix(Array.from(this.m));
    };
    // Multiply by the 16-value `Array` argument. This method uses the
    // `ARRAY_POOL`, which prevents us from having to re-initialize a new
    // temporary matrix every time. This drastically improves performance.
    Matrix.prototype.multiply = function (m) {
        if (!Array.isArray(m)) // will fail anyhow, but want a stack trace
            console.trace('transformable multiply', m);
        var c = this.ARRAY_POOL; // just a reference pointer
        for (var j = 0; j < 4; j++) {
            for (var i = 0; i < 16; i += 4) {
                c[i + j] =
                    m.m[i] * this.m[j] +
                        m.m[i + 1] * this.m[4 + j] +
                        m.m[i + 2] * this.m[8 + j] +
                        m.m[i + 3] * this.m[12 + j];
            }
        }
        this.ARRAY_POOL = this.m; // just a reference pointer
        this.m = c;
        return this;
    };
    // Resets the matrix to the baked-in (default: identity).
    Matrix.prototype.reset = function () {
        this.m = Array.from(this.baked); // shallow copy
        return this;
    };
    // Sets the array that this matrix will return to when calling `.reset()`.
    // With no arguments, it uses the current matrix state.
    Matrix.prototype.bake = function (m) {
        if (m)
            this.baked = m;
        else
            this.baked = Array.from(this.m);
        return this;
    };
    //   // Multiply by the `Matrix` argument.
    //   multiply(b: matrix) {
    //       return this.matrix(b.m)
    //   }
    //   // Tranposes this matrix
    //   transpose() {
    //       let c = this.ARRAY_POOL;
    //       let i, k, len, ti;
    //       for (i = k = 0, len = TRANSPOSE_INDICES.length; k < len; i = k++) {
    //           ti = TRANSPOSE_INDICES[i];
    //           c[i] = this.m[ti];
    //       }
    //       ARRAY_POOL = this.m;
    //       this.m = c;
    //       return this;
    //   }
    // Apply a rotation about the X axis. `Theta` is measured in Radians
    Matrix.prototype.rotx = function (theta) {
        var ct = Math.cos(theta);
        var st = Math.sin(theta);
        var rm = [1, 0, 0, 0, 0, ct, -st, 0, 0, st, ct, 0, 0, 0, 0, 1];
        return M(rm);
    };
    // Apply a rotation about the Y axis. `Theta` is measured in Radians
    Matrix.prototype.roty = function (theta) {
        var ct = Math.cos(theta);
        var st = Math.sin(theta);
        var rm = [ct, 0, st, 0, 0, 1, 0, 0, -st, 0, ct, 0, 0, 0, 0, 1];
        return M(rm);
    };
    // Apply a rotation about the Z axis. `Theta` is measured in Radians
    Matrix.prototype.rotz = function (theta) {
        var ct = Math.cos(theta);
        var st = Math.sin(theta);
        var rm = [ct, -st, 0, 0, st, ct, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
        return M(rm);
    };
    // Apply a translation. All arguments default to `0`
    Matrix.prototype.translate = function (x, y, z) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        var rm = [1, 0, 0, x, 0, 1, 0, y, 0, 0, 1, z, 0, 0, 0, 1];
        return M(rm);
    };
    // Apply a scale. If not all arguments are supplied, each dimension (x,y,z)
    // is copied from the previous arugment. Therefore, `_scale()` is equivalent
    // to `_scale(1,1,1)`, and `_scale(1,-1)` is equivalent to `_scale(1,-1,-1)`
    Matrix.prototype.scale = function (sx, sy, sz) {
        if (sx === void 0) { sx = 1; }
        if (!sy)
            sy = sx;
        if (!sz)
            sz = sy;
        var rm = [sx, 0, 0, 0, 0, sy, 0, 0, 0, 0, sz, 0, 0, 0, 0, 1];
        return M(rm);
    };
    // Returns `true` iff the supplied `Arrays` are the same size and contain the same values.
    Matrix.prototype.isEqual = function (other) {
        var i, j, len, val;
        // if (this.matrix.length !== other.length) {
        //    return false;
        // }
        for (i = 0, len = 16; i < len; i++) {
            if (this.m[i] !== other.m[i]) {
                return false;
            }
        }
        return true;
    };
    return Matrix;
}());

//   identity() {
//       return (new Transformable())
//   }
//   flipx() {
//       return (this.identity().scale(-1, 1, 1))
//   }
//   flipy() {
//       return (this.identity().scale(1, -1, 1))
//   }
//   flipz() {
//       return (this.identity().scale(1, 1, -1))
//   }


/***/ }),

/***/ "./src/util.ts":
/*!*********************!*\
  !*** ./src/util.ts ***!
  \*********************/
/*! exports provided: Util */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Util", function() { return Util; });
// //// Util
// //////// Utility methods
// ------------------
var NEXT_UNIQUE_ID = 1; // An auto-incremented value
var Util = /** @class */ (function () {
    function Util() {
    }
    // Copies default values. First, overwrite undefined attributes of `obj` from
    // `opts`. Second, overwrite undefined attributes of `obj` from `defaults`.
    Util.defaults = function (obj, opts, defaults) {
        var prop, results;
        for (prop in opts) {
            if (obj[prop] == null) {
                obj[prop] = opts[prop];
            }
        }
        results = [];
        for (prop in defaults) {
            if (obj[prop] == null) {
                results.push(obj[prop] = defaults[prop]);
            }
            else {
                results.push(void 0);
            }
        }
        return results;
    };
    /** Returns an ID which is unique to this instance of the library */ // TODO: change to type 'symbol'?
    Util.uniqueId = function (prefix) {
        if (prefix === void 0) { prefix = 'x'; }
        return (prefix + NEXT_UNIQUE_ID++);
    };
    // Accept a DOM element or a string. If a string is provided, we assume it is
    // the id of an element, which we return.
    Util.element = function (elementOrString) {
        if (typeof elementOrString === 'string') {
            return document.getElementById(elementOrString);
        }
        else {
            return elementOrString;
        }
    };
    return Util;
}());



/***/ }),

/***/ "./src/vectorMath.ts":
/*!***************************!*\
  !*** ./src/vectorMath.ts ***!
  \***************************/
/*! exports provided: V2, V3, V4, M2, M3, M4, Quat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V2", function() { return V2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V3", function() { return V3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V4", function() { return V4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M2", function() { return M2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M3", function() { return M3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M4", function() { return M4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quat", function() { return Quat; });
/*********************
 * see:  https://github.com/matthiasferch/tsm
 *
 * V2
 * v3
 * V4
 * M2
 * M3
 * M4
 * quat
 *
 */
/* This version of TSM was lightly modified by Tom Berend from the original of Matthias Ferch,
 * whose copyright notice follows below.
 *
 *  - The names of the functions were changed (eg: vec3 -> V3).
 *  - combined into a single file to eliminate circular dependencies
 *  - The code was converted to newer TypeScript
 *  - Several small type errors were fixed (TypeScript found them)
 *  - A few inconsequential additions like 'Quat.zero'
 *
 */
/*
 * Copyright (c) 2012, 2018 Matthias Ferch
 *
 * Project homepage: https://github.com/matthiasferch/tsm
 *
 * This software is provided 'as-is', without any express or implied
 * warranty. In no event will the authors be held liable for any damages
 * arising from the use of this software.
 *
 * Permission is granted to anyone to use this software for any purpose,
 * including commercial applications, and to alter it and redistribute it
 * freely, subject to the following restrictions:
 *
 *    1. The origin of this software must not be misrepresented; you must not
 *    claim that you wrote the original software. If you use this software
 *    in a product, an acknowledgment in the product documentation would be
 *    appreciated but is not required.
 *
 *    2. Altered source versions must be plainly marked as such, and must not
 *    be misrepresented as being the original software.
 *
 *    3. This notice may not be removed or altered from any source
 *    distribution.
 */
var epsilon = 0.00001;
var V2 = /** @class */ (function () {
    function V2(values) {
        this.values = new Float32Array(2);
        if (values !== undefined) {
            this.xy = values;
        }
    }
    Object.defineProperty(V2.prototype, "x", {
        // a v2 is an array [x , y]
        get: function () {
            return this.values[0];
        },
        set: function (value) {
            this.values[0] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(V2.prototype, "y", {
        get: function () {
            return this.values[1];
        },
        set: function (value) {
            this.values[1] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(V2.prototype, "xy", {
        get: function () {
            return [
                this.values[0],
                this.values[1],
            ];
        },
        set: function (values) {
            this.values[0] = values[0];
            this.values[1] = values[1];
        },
        enumerable: true,
        configurable: true
    });
    V2.cross = function (vector, vector2, dest) {
        if (!dest) {
            dest = new V3();
        }
        var x = vector.x;
        var y = vector.y;
        var x2 = vector2.x;
        var y2 = vector2.y;
        var z = x * y2 - y * x2;
        dest.x = 0;
        dest.y = 0;
        dest.z = z;
        return dest;
    };
    V2.dot = function (vector, vector2) {
        return (vector.x * vector2.x + vector.y * vector2.y);
    };
    V2.distance = function (vector, vector2) {
        return Math.sqrt(this.squaredDistance(vector, vector2));
    };
    V2.squaredDistance = function (vector, vector2) {
        var x = vector2.x - vector.x;
        var y = vector2.y - vector.y;
        return (x * x + y * y);
    };
    V2.direction = function (vector, vector2, dest) {
        if (!dest) {
            dest = new V2();
        }
        var x = vector.x - vector2.x;
        var y = vector.y - vector2.y;
        var length = Math.sqrt(x * x + y * y);
        if (length === 0) {
            dest.x = 0;
            dest.y = 0;
            return dest;
        }
        length = 1 / length;
        dest.x = x * length;
        dest.y = y * length;
        return dest;
    };
    V2.mix = function (vector, vector2, time, dest) {
        if (!dest) {
            dest = new V2();
        }
        var x = vector.x;
        var y = vector.y;
        var x2 = vector2.x;
        var y2 = vector2.y;
        dest.x = x + time * (x2 - x);
        dest.y = y + time * (y2 - y);
        return dest;
    };
    V2.sum = function (vector, vector2, dest) {
        if (!dest) {
            dest = new V2();
        }
        dest.x = vector.x + vector2.x;
        dest.y = vector.y + vector2.y;
        return dest;
    };
    V2.difference = function (vector, vector2, dest) {
        if (!dest) {
            dest = new V2();
        }
        dest.x = vector.x - vector2.x;
        dest.y = vector.y - vector2.y;
        return dest;
    };
    V2.product = function (vector, vector2, dest) {
        if (!dest) {
            dest = new V2();
        }
        dest.x = vector.x * vector2.x;
        dest.y = vector.y * vector2.y;
        return dest;
    };
    V2.quotient = function (vector, vector2, dest) {
        if (!dest) {
            dest = new V2();
        }
        dest.x = vector.x / vector2.x;
        dest.y = vector.y / vector2.y;
        return dest;
    };
    V2.prototype.at = function (index) {
        return this.values[index];
    };
    V2.prototype.reset = function () {
        this.x = 0;
        this.y = 0;
    };
    V2.prototype.copy = function (dest) {
        if (!dest) {
            dest = new V2();
        }
        dest.x = this.x;
        dest.y = this.y;
        return dest;
    };
    V2.prototype.negate = function (dest) {
        if (!dest) {
            dest = this;
        }
        dest.x = -this.x;
        dest.y = -this.y;
        return dest;
    };
    V2.prototype.equals = function (vector, threshold) {
        if (threshold === void 0) { threshold = epsilon; }
        if (Math.abs(this.x - vector.x) > threshold) {
            return false;
        }
        if (Math.abs(this.y - vector.y) > threshold) {
            return false;
        }
        return true;
    };
    V2.prototype.length = function () {
        return Math.sqrt(this.squaredLength());
    };
    V2.prototype.squaredLength = function () {
        var x = this.x;
        var y = this.y;
        return (x * x + y * y);
    };
    V2.prototype.add = function (vector) {
        this.x += vector.x;
        this.y += vector.y;
        return this;
    };
    V2.prototype.subtract = function (vector) {
        this.x -= vector.x;
        this.y -= vector.y;
        return this;
    };
    V2.prototype.multiply = function (vector) {
        this.x *= vector.x;
        this.y *= vector.y;
        return this;
    };
    V2.prototype.divide = function (vector) {
        this.x /= vector.x;
        this.y /= vector.y;
        return this;
    };
    V2.prototype.scale = function (value, dest) {
        if (!dest) {
            dest = this;
        }
        dest.x *= value;
        dest.y *= value;
        return dest;
    };
    V2.prototype.normalize = function (dest) {
        if (!dest) {
            dest = this;
        }
        var length = this.length();
        if (length === 1) {
            return this;
        }
        if (length === 0) {
            dest.x = 0;
            dest.y = 0;
            return dest;
        }
        length = 1.0 / length;
        dest.x *= length;
        dest.y *= length;
        return dest;
    };
    V2.prototype.multiplyMat2 = function (matrix, dest) {
        if (!dest) {
            dest = this;
        }
        return matrix.multiplyVec2(this, dest);
    };
    V2.prototype.multiplyMat3 = function (matrix, dest) {
        if (!dest) {
            dest = this;
        }
        return matrix.multiplyVec2(this, dest);
    };
    V2.zero = new V2([0, 0]);
    V2.one = new V2([1, 1]);
    return V2;
}());

var V3 = /** @class */ (function () {
    function V3(values) {
        this.values = new Float32Array(3);
        if (values !== undefined) {
            this.xyz = values;
        }
    }
    Object.defineProperty(V3.prototype, "x", {
        get: function () {
            return this.values[0];
        },
        set: function (value) {
            this.values[0] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(V3.prototype, "y", {
        get: function () {
            return this.values[1];
        },
        set: function (value) {
            this.values[1] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(V3.prototype, "z", {
        get: function () {
            return this.values[2];
        },
        set: function (value) {
            this.values[2] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(V3.prototype, "xy", {
        get: function () {
            return [
                this.values[0],
                this.values[1],
            ];
        },
        set: function (values) {
            this.values[0] = values[0];
            this.values[1] = values[1];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(V3.prototype, "xyz", {
        get: function () {
            return [
                this.values[0],
                this.values[1],
                this.values[2],
            ];
        },
        set: function (values) {
            this.values[0] = values[0];
            this.values[1] = values[1];
            this.values[2] = values[2];
        },
        enumerable: true,
        configurable: true
    });
    V3.cross = function (vector, vector2, dest) {
        if (!dest) {
            dest = new V3();
        }
        var x = vector.x;
        var y = vector.y;
        var z = vector.z;
        var x2 = vector2.x;
        var y2 = vector2.y;
        var z2 = vector2.z;
        dest.x = y * z2 - z * y2;
        dest.y = z * x2 - x * z2;
        dest.z = x * y2 - y * x2;
        return dest;
    };
    V3.dot = function (vector, vector2) {
        var x = vector.x;
        var y = vector.y;
        var z = vector.z;
        var x2 = vector2.x;
        var y2 = vector2.y;
        var z2 = vector2.z;
        return (x * x2 + y * y2 + z * z2);
    };
    V3.distance = function (vector, vector2) {
        var x = vector2.x - vector.x;
        var y = vector2.y - vector.y;
        var z = vector2.z - vector.z;
        return Math.sqrt(this.squaredDistance(vector, vector2));
    };
    V3.squaredDistance = function (vector, vector2) {
        var x = vector2.x - vector.x;
        var y = vector2.y - vector.y;
        var z = vector2.z - vector.z;
        return (x * x + y * y + z * z);
    };
    V3.direction = function (vector, vector2, dest) {
        if (!dest) {
            dest = new V3();
        }
        var x = vector.x - vector2.x;
        var y = vector.y - vector2.y;
        var z = vector.z - vector2.z;
        var length = Math.sqrt(x * x + y * y + z * z);
        if (length === 0) {
            dest.x = 0;
            dest.y = 0;
            dest.z = 0;
            return dest;
        }
        length = 1 / length;
        dest.x = x * length;
        dest.y = y * length;
        dest.z = z * length;
        return dest;
    };
    V3.mix = function (vector, vector2, time, dest) {
        if (!dest) {
            dest = new V3();
        }
        dest.x = vector.x + time * (vector2.x - vector.x);
        dest.y = vector.y + time * (vector2.y - vector.y);
        dest.z = vector.z + time * (vector2.z - vector.z);
        return dest;
    };
    V3.sum = function (vector, vector2, dest) {
        if (!dest) {
            dest = new V3();
        }
        dest.x = vector.x + vector2.x;
        dest.y = vector.y + vector2.y;
        dest.z = vector.z + vector2.z;
        return dest;
    };
    V3.difference = function (vector, vector2, dest) {
        if (!dest) {
            dest = new V3();
        }
        dest.x = vector.x - vector2.x;
        dest.y = vector.y - vector2.y;
        dest.z = vector.z - vector2.z;
        return dest;
    };
    V3.product = function (vector, vector2, dest) {
        if (!dest) {
            dest = new V3();
        }
        dest.x = vector.x * vector2.x;
        dest.y = vector.y * vector2.y;
        dest.z = vector.z * vector2.z;
        return dest;
    };
    V3.quotient = function (vector, vector2, dest) {
        if (!dest) {
            dest = new V3();
        }
        dest.x = vector.x / vector2.x;
        dest.y = vector.y / vector2.y;
        dest.z = vector.z / vector2.z;
        return dest;
    };
    V3.prototype.at = function (index) {
        return this.values[index];
    };
    V3.prototype.reset = function () {
        this.x = 0;
        this.y = 0;
        this.z = 0;
    };
    V3.prototype.copy = function (dest) {
        if (!dest) {
            dest = new V3();
        }
        dest.x = this.x;
        dest.y = this.y;
        dest.z = this.z;
        return dest;
    };
    V3.prototype.negate = function (dest) {
        if (!dest) {
            dest = this;
        }
        dest.x = -this.x;
        dest.y = -this.y;
        dest.z = -this.z;
        return dest;
    };
    V3.prototype.equals = function (vector, threshold) {
        if (threshold === void 0) { threshold = epsilon; }
        if (Math.abs(this.x - vector.x) > threshold) {
            return false;
        }
        if (Math.abs(this.y - vector.y) > threshold) {
            return false;
        }
        if (Math.abs(this.z - vector.z) > threshold) {
            return false;
        }
        return true;
    };
    V3.prototype.length = function () {
        return Math.sqrt(this.squaredLength());
    };
    V3.prototype.squaredLength = function () {
        var x = this.x;
        var y = this.y;
        var z = this.z;
        return (x * x + y * y + z * z);
    };
    V3.prototype.add = function (vector) {
        this.x += vector.x;
        this.y += vector.y;
        this.z += vector.z;
        return this;
    };
    V3.prototype.subtract = function (vector) {
        this.x -= vector.x;
        this.y -= vector.y;
        this.z -= vector.z;
        return this;
    };
    V3.prototype.multiply = function (vector) {
        this.x *= vector.x;
        this.y *= vector.y;
        this.z *= vector.z;
        return this;
    };
    V3.prototype.divide = function (vector) {
        this.x /= vector.x;
        this.y /= vector.y;
        this.z /= vector.z;
        return this;
    };
    V3.prototype.scale = function (value, dest) {
        if (!dest) {
            dest = this;
        }
        dest.x *= value;
        dest.y *= value;
        dest.z *= value;
        return dest;
    };
    V3.prototype.normalize = function (dest) {
        if (!dest) {
            dest = this;
        }
        var length = this.length();
        if (length === 1) {
            return this;
        }
        if (length === 0) {
            dest.x = 0;
            dest.y = 0;
            dest.z = 0;
            return dest;
        }
        length = 1.0 / length;
        dest.x *= length;
        dest.y *= length;
        dest.z *= length;
        return dest;
    };
    V3.prototype.multiplyByMat3 = function (matrix, dest) {
        if (!dest) {
            dest = this;
        }
        return matrix.multiplyVec3(this, dest);
    };
    V3.prototype.multiplyByQuat = function (quaternion, dest) {
        if (!dest) {
            dest = this;
        }
        return quaternion.multiplyVec3(this, dest);
    };
    V3.prototype.toQuat = function (dest) {
        if (!dest) {
            dest = new Quat();
        }
        var c = new V3();
        var s = new V3();
        c.x = Math.cos(this.x * 0.5);
        s.x = Math.sin(this.x * 0.5);
        c.y = Math.cos(this.y * 0.5);
        s.y = Math.sin(this.y * 0.5);
        c.z = Math.cos(this.z * 0.5);
        s.z = Math.sin(this.z * 0.5);
        dest.x = s.x * c.y * c.z - c.x * s.y * s.z;
        dest.y = c.x * s.y * c.z + s.x * c.y * s.z;
        dest.z = c.x * c.y * s.z - s.x * s.y * c.z;
        dest.w = c.x * c.y * c.z + s.x * s.y * s.z;
        return dest;
    };
    V3.zero = new V3([0, 0, 0]);
    V3.one = new V3([1, 1, 1]);
    V3.up = new V3([0, 1, 0]);
    V3.right = new V3([1, 0, 0]);
    V3.forward = new V3([0, 0, 1]);
    return V3;
}());

var V4 = /** @class */ (function () {
    function V4(values) {
        this.values = new Float32Array(4);
        if (values !== undefined) {
            this.xyzw = values;
        }
    }
    Object.defineProperty(V4.prototype, "x", {
        get: function () {
            return this.values[0];
        },
        set: function (value) {
            this.values[0] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(V4.prototype, "y", {
        get: function () {
            return this.values[1];
        },
        set: function (value) {
            this.values[1] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(V4.prototype, "z", {
        get: function () {
            return this.values[2];
        },
        set: function (value) {
            this.values[2] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(V4.prototype, "w", {
        get: function () {
            return this.values[3];
        },
        set: function (value) {
            this.values[3] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(V4.prototype, "xy", {
        get: function () {
            return [
                this.values[0],
                this.values[1],
            ];
        },
        set: function (values) {
            this.values[0] = values[0];
            this.values[1] = values[1];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(V4.prototype, "xyz", {
        get: function () {
            return [
                this.values[0],
                this.values[1],
                this.values[2],
            ];
        },
        set: function (values) {
            this.values[0] = values[0];
            this.values[1] = values[1];
            this.values[2] = values[2];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(V4.prototype, "xyzw", {
        get: function () {
            return [
                this.values[0],
                this.values[1],
                this.values[2],
                this.values[3],
            ];
        },
        set: function (values) {
            this.values[0] = values[0];
            this.values[1] = values[1];
            this.values[2] = values[2];
            this.values[3] = values[3];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(V4.prototype, "r", {
        get: function () {
            return this.values[0];
        },
        set: function (value) {
            this.values[0] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(V4.prototype, "g", {
        get: function () {
            return this.values[1];
        },
        set: function (value) {
            this.values[1] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(V4.prototype, "b", {
        get: function () {
            return this.values[2];
        },
        set: function (value) {
            this.values[2] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(V4.prototype, "a", {
        get: function () {
            return this.values[3];
        },
        set: function (value) {
            this.values[3] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(V4.prototype, "rg", {
        get: function () {
            return [
                this.values[0],
                this.values[1],
            ];
        },
        set: function (values) {
            this.values[0] = values[0];
            this.values[1] = values[1];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(V4.prototype, "rgb", {
        get: function () {
            return [
                this.values[0],
                this.values[1],
                this.values[2],
            ];
        },
        set: function (values) {
            this.values[0] = values[0];
            this.values[1] = values[1];
            this.values[2] = values[2];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(V4.prototype, "rgba", {
        get: function () {
            return [
                this.values[0],
                this.values[1],
                this.values[2],
                this.values[3],
            ];
        },
        set: function (values) {
            this.values[0] = values[0];
            this.values[1] = values[1];
            this.values[2] = values[2];
            this.values[3] = values[3];
        },
        enumerable: true,
        configurable: true
    });
    V4.mix = function (vector, vector2, time, dest) {
        if (!dest) {
            dest = new V4();
        }
        dest.x = vector.x + time * (vector2.x - vector.x);
        dest.y = vector.y + time * (vector2.y - vector.y);
        dest.z = vector.z + time * (vector2.z - vector.z);
        dest.w = vector.w + time * (vector2.w - vector.w);
        return dest;
    };
    V4.sum = function (vector, vector2, dest) {
        if (!dest) {
            dest = new V4();
        }
        dest.x = vector.x + vector2.x;
        dest.y = vector.y + vector2.y;
        dest.z = vector.z + vector2.z;
        dest.w = vector.w + vector2.w;
        return dest;
    };
    V4.difference = function (vector, vector2, dest) {
        if (!dest) {
            dest = new V4();
        }
        dest.x = vector.x - vector2.x;
        dest.y = vector.y - vector2.y;
        dest.z = vector.z - vector2.z;
        dest.w = vector.w - vector2.w;
        return dest;
    };
    V4.product = function (vector, vector2, dest) {
        if (!dest) {
            dest = new V4();
        }
        dest.x = vector.x * vector2.x;
        dest.y = vector.y * vector2.y;
        dest.z = vector.z * vector2.z;
        dest.w = vector.w * vector2.w;
        return dest;
    };
    V4.quotient = function (vector, vector2, dest) {
        if (!dest) {
            dest = new V4();
        }
        dest.x = vector.x / vector2.x;
        dest.y = vector.y / vector2.y;
        dest.z = vector.z / vector2.z;
        dest.w = vector.w / vector2.w;
        return dest;
    };
    V4.prototype.at = function (index) {
        return this.values[index];
    };
    V4.prototype.reset = function () {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.w = 0;
    };
    V4.prototype.copy = function (dest) {
        if (!dest) {
            dest = new V4();
        }
        dest.x = this.x;
        dest.y = this.y;
        dest.z = this.z;
        dest.w = this.w;
        return dest;
    };
    V4.prototype.negate = function (dest) {
        if (!dest) {
            dest = this;
        }
        dest.x = -this.x;
        dest.y = -this.y;
        dest.z = -this.z;
        dest.w = -this.w;
        return dest;
    };
    V4.prototype.equals = function (vector, threshold) {
        if (threshold === void 0) { threshold = epsilon; }
        if (Math.abs(this.x - vector.x) > threshold) {
            return false;
        }
        if (Math.abs(this.y - vector.y) > threshold) {
            return false;
        }
        if (Math.abs(this.z - vector.z) > threshold) {
            return false;
        }
        if (Math.abs(this.w - vector.w) > threshold) {
            return false;
        }
        return true;
    };
    V4.prototype.length = function () {
        return Math.sqrt(this.squaredLength());
    };
    V4.prototype.squaredLength = function () {
        var x = this.x;
        var y = this.y;
        var z = this.z;
        var w = this.w;
        return (x * x + y * y + z * z + w * w);
    };
    V4.prototype.add = function (vector) {
        this.x += vector.x;
        this.y += vector.y;
        this.z += vector.z;
        this.w += vector.w;
        return this;
    };
    V4.prototype.subtract = function (vector) {
        this.x -= vector.x;
        this.y -= vector.y;
        this.z -= vector.z;
        this.w -= vector.w;
        return this;
    };
    V4.prototype.multiply = function (vector) {
        this.x *= vector.x;
        this.y *= vector.y;
        this.z *= vector.z;
        this.w *= vector.w;
        return this;
    };
    V4.prototype.divide = function (vector) {
        this.x /= vector.x;
        this.y /= vector.y;
        this.z /= vector.z;
        this.w /= vector.w;
        return this;
    };
    V4.prototype.scale = function (value, dest) {
        if (!dest) {
            dest = this;
        }
        dest.x *= value;
        dest.y *= value;
        dest.z *= value;
        dest.w *= value;
        return dest;
    };
    V4.prototype.normalize = function (dest) {
        if (!dest) {
            dest = this;
        }
        var length = this.length();
        if (length === 1) {
            return this;
        }
        if (length === 0) {
            dest.x *= 0;
            dest.y *= 0;
            dest.z *= 0;
            dest.w *= 0;
            return dest;
        }
        length = 1.0 / length;
        dest.x *= length;
        dest.y *= length;
        dest.z *= length;
        dest.w *= length;
        return dest;
    };
    V4.prototype.multiplyMat4 = function (matrix, dest) {
        if (!dest) {
            dest = this;
        }
        return matrix.multiplyVec4(this, dest);
    };
    V4.zero = new V4([0, 0, 0, 1]);
    V4.one = new V4([1, 1, 1, 1]);
    return V4;
}());

var M2 = /** @class */ (function () {
    function M2(values) {
        this.values = new Float32Array(4);
        if (values !== undefined) {
            this.init(values);
        }
    }
    M2.product = function (m1, m2, result) {
        var a11 = m1.at(0);
        var a12 = m1.at(1);
        var a21 = m1.at(2);
        var a22 = m1.at(3);
        if (result) {
            result.init([
                a11 * m2.at(0) + a12 * m2.at(2),
                a11 * m2.at(1) + a12 * m2.at(3),
                a21 * m2.at(0) + a22 * m2.at(2),
                a21 * m2.at(1) + a22 * m2.at(3),
            ]);
            return result;
        }
        else {
            return new M2([
                a11 * m2.at(0) + a12 * m2.at(2),
                a11 * m2.at(1) + a12 * m2.at(3),
                a21 * m2.at(0) + a22 * m2.at(2),
                a21 * m2.at(1) + a22 * m2.at(3),
            ]);
        }
    };
    M2.prototype.at = function (index) {
        return this.values[index];
    };
    M2.prototype.init = function (values) {
        for (var i = 0; i < 4; i++) {
            this.values[i] = values[i];
        }
        return this;
    };
    M2.prototype.reset = function () {
        for (var i = 0; i < 4; i++) {
            this.values[i] = 0;
        }
    };
    M2.prototype.copy = function (dest) {
        if (!dest) {
            dest = new M2();
        }
        for (var i = 0; i < 4; i++) {
            dest.values[i] = this.values[i];
        }
        return dest;
    };
    M2.prototype.all = function () {
        var data = [];
        for (var i = 0; i < 4; i++) {
            data[i] = this.values[i];
        }
        return data;
    };
    M2.prototype.row = function (index) {
        return [
            this.values[index * 2 + 0],
            this.values[index * 2 + 1],
        ];
    };
    M2.prototype.col = function (index) {
        return [
            this.values[index],
            this.values[index + 2],
        ];
    };
    M2.prototype.equals = function (matrix, threshold) {
        if (threshold === void 0) { threshold = epsilon; }
        for (var i = 0; i < 4; i++) {
            if (Math.abs(this.values[i] - matrix.at(i)) > threshold) {
                return false;
            }
        }
        return true;
    };
    M2.prototype.determinant = function () {
        return this.values[0] * this.values[3] - this.values[2] * this.values[1];
    };
    M2.prototype.setIdentity = function () {
        this.values[0] = 1;
        this.values[1] = 0;
        this.values[2] = 0;
        this.values[3] = 1;
        return this;
    };
    M2.prototype.transpose = function () {
        var temp = this.values[1];
        this.values[1] = this.values[2];
        this.values[2] = temp;
        return this;
    };
    M2.prototype.inverse = function () {
        var det = this.determinant();
        if (!det) {
            return null;
        }
        det = 1.0 / det;
        var a11 = this.values[0];
        this.values[0] = det * (this.values[3]);
        this.values[1] = det * (-this.values[1]);
        this.values[2] = det * (-this.values[2]);
        this.values[3] = det * a11;
        return this;
    };
    M2.prototype.multiply = function (matrix) {
        var a11 = this.values[0];
        var a12 = this.values[1];
        var a21 = this.values[2];
        var a22 = this.values[3];
        this.values[0] = a11 * matrix.at(0) + a12 * matrix.at(2);
        this.values[1] = a11 * matrix.at(1) + a12 * matrix.at(3);
        this.values[2] = a21 * matrix.at(0) + a22 * matrix.at(2);
        this.values[3] = a21 * matrix.at(1) + a22 * matrix.at(3);
        return this;
    };
    M2.prototype.rotate = function (angle) {
        var a11 = this.values[0];
        var a12 = this.values[1];
        var a21 = this.values[2];
        var a22 = this.values[3];
        var sin = Math.sin(angle);
        var cos = Math.cos(angle);
        this.values[0] = a11 * cos + a12 * sin;
        this.values[1] = a11 * -sin + a12 * cos;
        this.values[2] = a21 * cos + a22 * sin;
        this.values[3] = a21 * -sin + a22 * cos;
        return this;
    };
    M2.prototype.multiplyVec2 = function (vector, result) {
        var x = vector.x;
        var y = vector.y;
        if (result) {
            result.xy = [
                x * this.values[0] + y * this.values[1],
                x * this.values[2] + y * this.values[3],
            ];
            return result;
        }
        else {
            return new V2([
                x * this.values[0] + y * this.values[1],
                x * this.values[2] + y * this.values[3],
            ]);
        }
    };
    M2.prototype.scale = function (vector) {
        var a11 = this.values[0];
        var a12 = this.values[1];
        var a21 = this.values[2];
        var a22 = this.values[3];
        var x = vector.x;
        var y = vector.y;
        this.values[0] = a11 * x;
        this.values[1] = a12 * y;
        this.values[2] = a21 * x;
        this.values[3] = a22 * y;
        return this;
    };
    M2.identity = new M2().setIdentity();
    return M2;
}());

var M3 = /** @class */ (function () {
    function M3(values) {
        this.values = new Float32Array(9);
        if (values !== undefined) {
            this.init(values);
        }
    }
    M3.product = function (m1, m2, result) {
        var a00 = m1.at(0);
        var a01 = m1.at(1);
        var a02 = m1.at(2);
        var a10 = m1.at(3);
        var a11 = m1.at(4);
        var a12 = m1.at(5);
        var a20 = m1.at(6);
        var a21 = m1.at(7);
        var a22 = m1.at(8);
        var b00 = m2.at(0);
        var b01 = m2.at(1);
        var b02 = m2.at(2);
        var b10 = m2.at(3);
        var b11 = m2.at(4);
        var b12 = m2.at(5);
        var b20 = m2.at(6);
        var b21 = m2.at(7);
        var b22 = m2.at(8);
        if (result) {
            result.init([
                b00 * a00 + b01 * a10 + b02 * a20,
                b00 * a01 + b01 * a11 + b02 * a21,
                b00 * a02 + b01 * a12 + b02 * a22,
                b10 * a00 + b11 * a10 + b12 * a20,
                b10 * a01 + b11 * a11 + b12 * a21,
                b10 * a02 + b11 * a12 + b12 * a22,
                b20 * a00 + b21 * a10 + b22 * a20,
                b20 * a01 + b21 * a11 + b22 * a21,
                b20 * a02 + b21 * a12 + b22 * a22,
            ]);
            return result;
        }
        else {
            return new M3([
                b00 * a00 + b01 * a10 + b02 * a20,
                b00 * a01 + b01 * a11 + b02 * a21,
                b00 * a02 + b01 * a12 + b02 * a22,
                b10 * a00 + b11 * a10 + b12 * a20,
                b10 * a01 + b11 * a11 + b12 * a21,
                b10 * a02 + b11 * a12 + b12 * a22,
                b20 * a00 + b21 * a10 + b22 * a20,
                b20 * a01 + b21 * a11 + b22 * a21,
                b20 * a02 + b21 * a12 + b22 * a22,
            ]);
        }
    };
    M3.prototype.at = function (index) {
        return this.values[index];
    };
    M3.prototype.init = function (values) {
        for (var i = 0; i < 9; i++) {
            this.values[i] = values[i];
        }
        return this;
    };
    M3.prototype.reset = function () {
        for (var i = 0; i < 9; i++) {
            this.values[i] = 0;
        }
    };
    M3.prototype.copy = function (dest) {
        if (!dest) {
            dest = new M3();
        }
        for (var i = 0; i < 9; i++) {
            dest.values[i] = this.values[i];
        }
        return dest;
    };
    M3.prototype.all = function () {
        var data = [];
        for (var i = 0; i < 9; i++) {
            data[i] = this.values[i];
        }
        return data;
    };
    M3.prototype.row = function (index) {
        return [
            this.values[index * 3 + 0],
            this.values[index * 3 + 1],
            this.values[index * 3 + 2],
        ];
    };
    M3.prototype.col = function (index) {
        return [
            this.values[index],
            this.values[index + 3],
            this.values[index + 6],
        ];
    };
    M3.prototype.equals = function (matrix, threshold) {
        if (threshold === void 0) { threshold = epsilon; }
        for (var i = 0; i < 9; i++) {
            if (Math.abs(this.values[i] - matrix.at(i)) > threshold) {
                return false;
            }
        }
        return true;
    };
    M3.prototype.determinant = function () {
        var a00 = this.values[0];
        var a01 = this.values[1];
        var a02 = this.values[2];
        var a10 = this.values[3];
        var a11 = this.values[4];
        var a12 = this.values[5];
        var a20 = this.values[6];
        var a21 = this.values[7];
        var a22 = this.values[8];
        var det01 = a22 * a11 - a12 * a21;
        var det11 = -a22 * a10 + a12 * a20;
        var det21 = a21 * a10 - a11 * a20;
        return a00 * det01 + a01 * det11 + a02 * det21;
    };
    M3.prototype.setIdentity = function () {
        this.values[0] = 1;
        this.values[1] = 0;
        this.values[2] = 0;
        this.values[3] = 0;
        this.values[4] = 1;
        this.values[5] = 0;
        this.values[6] = 0;
        this.values[7] = 0;
        this.values[8] = 1;
        return this;
    };
    M3.prototype.transpose = function () {
        var temp01 = this.values[1];
        var temp02 = this.values[2];
        var temp12 = this.values[5];
        this.values[1] = this.values[3];
        this.values[2] = this.values[6];
        this.values[3] = temp01;
        this.values[5] = this.values[7];
        this.values[6] = temp02;
        this.values[7] = temp12;
        return this;
    };
    M3.prototype.inverse = function () {
        var a00 = this.values[0];
        var a01 = this.values[1];
        var a02 = this.values[2];
        var a10 = this.values[3];
        var a11 = this.values[4];
        var a12 = this.values[5];
        var a20 = this.values[6];
        var a21 = this.values[7];
        var a22 = this.values[8];
        var det01 = a22 * a11 - a12 * a21;
        var det11 = -a22 * a10 + a12 * a20;
        var det21 = a21 * a10 - a11 * a20;
        var det = a00 * det01 + a01 * det11 + a02 * det21;
        if (!det) {
            return null;
        }
        det = 1.0 / det;
        this.values[0] = det01 * det;
        this.values[1] = (-a22 * a01 + a02 * a21) * det;
        this.values[2] = (a12 * a01 - a02 * a11) * det;
        this.values[3] = det11 * det;
        this.values[4] = (a22 * a00 - a02 * a20) * det;
        this.values[5] = (-a12 * a00 + a02 * a10) * det;
        this.values[6] = det21 * det;
        this.values[7] = (-a21 * a00 + a01 * a20) * det;
        this.values[8] = (a11 * a00 - a01 * a10) * det;
        return this;
    };
    M3.prototype.multiply = function (matrix) {
        var a00 = this.values[0];
        var a01 = this.values[1];
        var a02 = this.values[2];
        var a10 = this.values[3];
        var a11 = this.values[4];
        var a12 = this.values[5];
        var a20 = this.values[6];
        var a21 = this.values[7];
        var a22 = this.values[8];
        var b00 = matrix.at(0);
        var b01 = matrix.at(1);
        var b02 = matrix.at(2);
        var b10 = matrix.at(3);
        var b11 = matrix.at(4);
        var b12 = matrix.at(5);
        var b20 = matrix.at(6);
        var b21 = matrix.at(7);
        var b22 = matrix.at(8);
        this.values[0] = b00 * a00 + b01 * a10 + b02 * a20;
        this.values[1] = b00 * a01 + b01 * a11 + b02 * a21;
        this.values[2] = b00 * a02 + b01 * a12 + b02 * a22;
        this.values[3] = b10 * a00 + b11 * a10 + b12 * a20;
        this.values[4] = b10 * a01 + b11 * a11 + b12 * a21;
        this.values[5] = b10 * a02 + b11 * a12 + b12 * a22;
        this.values[6] = b20 * a00 + b21 * a10 + b22 * a20;
        this.values[7] = b20 * a01 + b21 * a11 + b22 * a21;
        this.values[8] = b20 * a02 + b21 * a12 + b22 * a22;
        return this;
    };
    M3.prototype.multiplyVec2 = function (vector, result) {
        var x = vector.x;
        var y = vector.y;
        if (result) {
            result.xy = [
                x * this.values[0] + y * this.values[3] + this.values[6],
                x * this.values[1] + y * this.values[4] + this.values[7],
            ];
            return result;
        }
        else {
            return new V2([
                x * this.values[0] + y * this.values[3] + this.values[6],
                x * this.values[1] + y * this.values[4] + this.values[7],
            ]);
        }
    };
    M3.prototype.multiplyVec3 = function (vector, result) {
        var x = vector.x;
        var y = vector.y;
        var z = vector.z;
        if (result) {
            result.xyz = [
                x * this.values[0] + y * this.values[3] + z * this.values[6],
                x * this.values[1] + y * this.values[4] + z * this.values[7],
                x * this.values[2] + y * this.values[5] + z * this.values[8],
            ];
            return result;
        }
        else {
            return new V3([
                x * this.values[0] + y * this.values[3] + z * this.values[6],
                x * this.values[1] + y * this.values[4] + z * this.values[7],
                x * this.values[2] + y * this.values[5] + z * this.values[8],
            ]);
        }
    };
    M3.prototype.toMat4 = function (result) {
        if (result) {
            result.init([
                this.values[0],
                this.values[1],
                this.values[2],
                0,
                this.values[3],
                this.values[4],
                this.values[5],
                0,
                this.values[6],
                this.values[7],
                this.values[8],
                0,
                0,
                0,
                0,
                1,
            ]);
            return result;
        }
        else {
            return new M4([
                this.values[0],
                this.values[1],
                this.values[2],
                0,
                this.values[3],
                this.values[4],
                this.values[5],
                0,
                this.values[6],
                this.values[7],
                this.values[8],
                0,
                0,
                0,
                0,
                1,
            ]);
        }
    };
    M3.prototype.toQuat = function () {
        var m00 = this.values[0];
        var m01 = this.values[1];
        var m02 = this.values[2];
        var m10 = this.values[3];
        var m11 = this.values[4];
        var m12 = this.values[5];
        var m20 = this.values[6];
        var m21 = this.values[7];
        var m22 = this.values[8];
        var fourXSquaredMinus1 = m00 - m11 - m22;
        var fourYSquaredMinus1 = m11 - m00 - m22;
        var fourZSquaredMinus1 = m22 - m00 - m11;
        var fourWSquaredMinus1 = m00 + m11 + m22;
        var biggestIndex = 0;
        var fourBiggestSquaredMinus1 = fourWSquaredMinus1;
        if (fourXSquaredMinus1 > fourBiggestSquaredMinus1) {
            fourBiggestSquaredMinus1 = fourXSquaredMinus1;
            biggestIndex = 1;
        }
        if (fourYSquaredMinus1 > fourBiggestSquaredMinus1) {
            fourBiggestSquaredMinus1 = fourYSquaredMinus1;
            biggestIndex = 2;
        }
        if (fourZSquaredMinus1 > fourBiggestSquaredMinus1) {
            fourBiggestSquaredMinus1 = fourZSquaredMinus1;
            biggestIndex = 3;
        }
        var biggestVal = Math.sqrt(fourBiggestSquaredMinus1 + 1) * 0.5;
        var mult = 0.25 / biggestVal;
        var result = new Quat();
        switch (biggestIndex) {
            case 0:
                result.w = biggestVal;
                result.x = (m12 - m21) * mult;
                result.y = (m20 - m02) * mult;
                result.z = (m01 - m10) * mult;
                break;
            case 1:
                result.w = (m12 - m21) * mult;
                result.x = biggestVal;
                result.y = (m01 + m10) * mult;
                result.z = (m20 + m02) * mult;
                break;
            case 2:
                result.w = (m20 - m02) * mult;
                result.x = (m01 + m10) * mult;
                result.y = biggestVal;
                result.z = (m12 + m21) * mult;
                break;
            case 3:
                result.w = (m01 - m10) * mult;
                result.x = (m20 + m02) * mult;
                result.y = (m12 + m21) * mult;
                result.z = biggestVal;
                break;
        }
        return result;
    };
    M3.prototype.rotate = function (angle, axis) {
        var x = axis.x;
        var y = axis.y;
        var z = axis.z;
        var length = Math.sqrt(x * x + y * y + z * z);
        if (!length) {
            return null;
        }
        if (length !== 1) {
            length = 1 / length;
            x *= length;
            y *= length;
            z *= length;
        }
        var s = Math.sin(angle);
        var c = Math.cos(angle);
        var t = 1.0 - c;
        var a00 = this.values[0];
        var a01 = this.values[1];
        var a02 = this.values[2];
        var a10 = this.values[4];
        var a11 = this.values[5];
        var a12 = this.values[6];
        var a20 = this.values[8];
        var a21 = this.values[9];
        var a22 = this.values[10];
        var b00 = x * x * t + c;
        var b01 = y * x * t + z * s;
        var b02 = z * x * t - y * s;
        var b10 = x * y * t - z * s;
        var b11 = y * y * t + c;
        var b12 = z * y * t + x * s;
        var b20 = x * z * t + y * s;
        var b21 = y * z * t - x * s;
        var b22 = z * z * t + c;
        this.values[0] = a00 * b00 + a10 * b01 + a20 * b02;
        this.values[1] = a01 * b00 + a11 * b01 + a21 * b02;
        this.values[2] = a02 * b00 + a12 * b01 + a22 * b02;
        this.values[3] = a00 * b10 + a10 * b11 + a20 * b12;
        this.values[4] = a01 * b10 + a11 * b11 + a21 * b12;
        this.values[5] = a02 * b10 + a12 * b11 + a22 * b12;
        this.values[6] = a00 * b20 + a10 * b21 + a20 * b22;
        this.values[7] = a01 * b20 + a11 * b21 + a21 * b22;
        this.values[8] = a02 * b20 + a12 * b21 + a22 * b22;
        return this;
    };
    M3.identity = new M3().setIdentity();
    return M3;
}());

var M4 = /** @class */ (function () {
    function M4(values) {
        this.values = new Float32Array(16);
        if (values !== undefined) {
            this.init(values);
        }
    }
    M4.frustum = function (left, right, bottom, top, near, far) {
        var rl = (right - left);
        var tb = (top - bottom);
        var fn = (far - near);
        return new M4([
            (near * 2) / rl,
            0,
            0,
            0,
            0,
            (near * 2) / tb,
            0,
            0,
            (right + left) / rl,
            (top + bottom) / tb,
            -(far + near) / fn,
            -1,
            0,
            0,
            -(far * near * 2) / fn,
            0,
        ]);
    };
    M4.perspective = function (fov, aspect, near, far) {
        var top = near * Math.tan(fov * Math.PI / 360.0);
        var right = top * aspect;
        return M4.frustum(-right, right, -top, top, near, far);
    };
    M4.orthographic = function (left, right, bottom, top, near, far) {
        var rl = (right - left);
        var tb = (top - bottom);
        var fn = (far - near);
        return new M4([
            2 / rl,
            0,
            0,
            0,
            0,
            2 / tb,
            0,
            0,
            0,
            0,
            -2 / fn,
            0,
            -(left + right) / rl,
            -(top + bottom) / tb,
            -(far + near) / fn,
            1,
        ]);
    };
    M4.lookAt = function (position, target, up) {
        if (up === void 0) { up = V3.up; }
        if (position.equals(target)) {
            return this.identity;
        }
        var z = V3.difference(position, target).normalize();
        var x = V3.cross(up, z).normalize();
        var y = V3.cross(z, x).normalize();
        return new M4([
            x.x,
            y.x,
            z.x,
            0,
            x.y,
            y.y,
            z.y,
            0,
            x.z,
            y.z,
            z.z,
            0,
            -V3.dot(x, position),
            -V3.dot(y, position),
            -V3.dot(z, position),
            1,
        ]);
    };
    M4.product = function (m1, m2, result) {
        var a00 = m1.at(0);
        var a01 = m1.at(1);
        var a02 = m1.at(2);
        var a03 = m1.at(3);
        var a10 = m1.at(4);
        var a11 = m1.at(5);
        var a12 = m1.at(6);
        var a13 = m1.at(7);
        var a20 = m1.at(8);
        var a21 = m1.at(9);
        var a22 = m1.at(10);
        var a23 = m1.at(11);
        var a30 = m1.at(12);
        var a31 = m1.at(13);
        var a32 = m1.at(14);
        var a33 = m1.at(15);
        var b00 = m2.at(0);
        var b01 = m2.at(1);
        var b02 = m2.at(2);
        var b03 = m2.at(3);
        var b10 = m2.at(4);
        var b11 = m2.at(5);
        var b12 = m2.at(6);
        var b13 = m2.at(7);
        var b20 = m2.at(8);
        var b21 = m2.at(9);
        var b22 = m2.at(10);
        var b23 = m2.at(11);
        var b30 = m2.at(12);
        var b31 = m2.at(13);
        var b32 = m2.at(14);
        var b33 = m2.at(15);
        if (result) {
            result.init([
                b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30,
                b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31,
                b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32,
                b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33,
                b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30,
                b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31,
                b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32,
                b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33,
                b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30,
                b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31,
                b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32,
                b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33,
                b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30,
                b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31,
                b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32,
                b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33,
            ]);
            return result;
        }
        else {
            return new M4([
                b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30,
                b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31,
                b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32,
                b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33,
                b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30,
                b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31,
                b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32,
                b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33,
                b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30,
                b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31,
                b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32,
                b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33,
                b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30,
                b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31,
                b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32,
                b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33,
            ]);
        }
    };
    M4.prototype.at = function (index) {
        return this.values[index];
    };
    M4.prototype.init = function (values) {
        for (var i = 0; i < 16; i++) {
            this.values[i] = values[i];
        }
        return this;
    };
    M4.prototype.reset = function () {
        for (var i = 0; i < 16; i++) {
            this.values[i] = 0;
        }
    };
    M4.prototype.copy = function (dest) {
        if (!dest) {
            dest = new M4();
        }
        for (var i = 0; i < 16; i++) {
            dest.values[i] = this.values[i];
        }
        return dest;
    };
    M4.prototype.all = function () {
        var data = [];
        for (var i = 0; i < 16; i++) {
            data[i] = this.values[i];
        }
        return data;
    };
    M4.prototype.row = function (index) {
        return [
            this.values[index * 4 + 0],
            this.values[index * 4 + 1],
            this.values[index * 4 + 2],
            this.values[index * 4 + 3],
        ];
    };
    M4.prototype.col = function (index) {
        return [
            this.values[index],
            this.values[index + 4],
            this.values[index + 8],
            this.values[index + 12],
        ];
    };
    M4.prototype.equals = function (matrix, threshold) {
        if (threshold === void 0) { threshold = epsilon; }
        for (var i = 0; i < 16; i++) {
            if (Math.abs(this.values[i] - matrix.at(i)) > threshold) {
                return false;
            }
        }
        return true;
    };
    M4.prototype.determinant = function () {
        var a00 = this.values[0];
        var a01 = this.values[1];
        var a02 = this.values[2];
        var a03 = this.values[3];
        var a10 = this.values[4];
        var a11 = this.values[5];
        var a12 = this.values[6];
        var a13 = this.values[7];
        var a20 = this.values[8];
        var a21 = this.values[9];
        var a22 = this.values[10];
        var a23 = this.values[11];
        var a30 = this.values[12];
        var a31 = this.values[13];
        var a32 = this.values[14];
        var a33 = this.values[15];
        var det00 = a00 * a11 - a01 * a10;
        var det01 = a00 * a12 - a02 * a10;
        var det02 = a00 * a13 - a03 * a10;
        var det03 = a01 * a12 - a02 * a11;
        var det04 = a01 * a13 - a03 * a11;
        var det05 = a02 * a13 - a03 * a12;
        var det06 = a20 * a31 - a21 * a30;
        var det07 = a20 * a32 - a22 * a30;
        var det08 = a20 * a33 - a23 * a30;
        var det09 = a21 * a32 - a22 * a31;
        var det10 = a21 * a33 - a23 * a31;
        var det11 = a22 * a33 - a23 * a32;
        return (det00 * det11 - det01 * det10 + det02 * det09 + det03 * det08 - det04 * det07 + det05 * det06);
    };
    M4.prototype.setIdentity = function () {
        this.values[0] = 1;
        this.values[1] = 0;
        this.values[2] = 0;
        this.values[3] = 0;
        this.values[4] = 0;
        this.values[5] = 1;
        this.values[6] = 0;
        this.values[7] = 0;
        this.values[8] = 0;
        this.values[9] = 0;
        this.values[10] = 1;
        this.values[11] = 0;
        this.values[12] = 0;
        this.values[13] = 0;
        this.values[14] = 0;
        this.values[15] = 1;
        return this;
    };
    M4.prototype.transpose = function () {
        var temp01 = this.values[1];
        var temp02 = this.values[2];
        var temp03 = this.values[3];
        var temp12 = this.values[6];
        var temp13 = this.values[7];
        var temp23 = this.values[11];
        this.values[1] = this.values[4];
        this.values[2] = this.values[8];
        this.values[3] = this.values[12];
        this.values[4] = temp01;
        this.values[6] = this.values[9];
        this.values[7] = this.values[13];
        this.values[8] = temp02;
        this.values[9] = temp12;
        this.values[11] = this.values[14];
        this.values[12] = temp03;
        this.values[13] = temp13;
        this.values[14] = temp23;
        return this;
    };
    M4.prototype.inverse = function () {
        var a00 = this.values[0];
        var a01 = this.values[1];
        var a02 = this.values[2];
        var a03 = this.values[3];
        var a10 = this.values[4];
        var a11 = this.values[5];
        var a12 = this.values[6];
        var a13 = this.values[7];
        var a20 = this.values[8];
        var a21 = this.values[9];
        var a22 = this.values[10];
        var a23 = this.values[11];
        var a30 = this.values[12];
        var a31 = this.values[13];
        var a32 = this.values[14];
        var a33 = this.values[15];
        var det00 = a00 * a11 - a01 * a10;
        var det01 = a00 * a12 - a02 * a10;
        var det02 = a00 * a13 - a03 * a10;
        var det03 = a01 * a12 - a02 * a11;
        var det04 = a01 * a13 - a03 * a11;
        var det05 = a02 * a13 - a03 * a12;
        var det06 = a20 * a31 - a21 * a30;
        var det07 = a20 * a32 - a22 * a30;
        var det08 = a20 * a33 - a23 * a30;
        var det09 = a21 * a32 - a22 * a31;
        var det10 = a21 * a33 - a23 * a31;
        var det11 = a22 * a33 - a23 * a32;
        var det = (det00 * det11 - det01 * det10 + det02 * det09 + det03 * det08 - det04 * det07 + det05 * det06);
        if (!det) {
            return null;
        }
        det = 1.0 / det;
        this.values[0] = (a11 * det11 - a12 * det10 + a13 * det09) * det;
        this.values[1] = (-a01 * det11 + a02 * det10 - a03 * det09) * det;
        this.values[2] = (a31 * det05 - a32 * det04 + a33 * det03) * det;
        this.values[3] = (-a21 * det05 + a22 * det04 - a23 * det03) * det;
        this.values[4] = (-a10 * det11 + a12 * det08 - a13 * det07) * det;
        this.values[5] = (a00 * det11 - a02 * det08 + a03 * det07) * det;
        this.values[6] = (-a30 * det05 + a32 * det02 - a33 * det01) * det;
        this.values[7] = (a20 * det05 - a22 * det02 + a23 * det01) * det;
        this.values[8] = (a10 * det10 - a11 * det08 + a13 * det06) * det;
        this.values[9] = (-a00 * det10 + a01 * det08 - a03 * det06) * det;
        this.values[10] = (a30 * det04 - a31 * det02 + a33 * det00) * det;
        this.values[11] = (-a20 * det04 + a21 * det02 - a23 * det00) * det;
        this.values[12] = (-a10 * det09 + a11 * det07 - a12 * det06) * det;
        this.values[13] = (a00 * det09 - a01 * det07 + a02 * det06) * det;
        this.values[14] = (-a30 * det03 + a31 * det01 - a32 * det00) * det;
        this.values[15] = (a20 * det03 - a21 * det01 + a22 * det00) * det;
        return this;
    };
    M4.prototype.multiply = function (matrix) {
        var a00 = this.values[0];
        var a01 = this.values[1];
        var a02 = this.values[2];
        var a03 = this.values[3];
        var a10 = this.values[4];
        var a11 = this.values[5];
        var a12 = this.values[6];
        var a13 = this.values[7];
        var a20 = this.values[8];
        var a21 = this.values[9];
        var a22 = this.values[10];
        var a23 = this.values[11];
        var a30 = this.values[12];
        var a31 = this.values[13];
        var a32 = this.values[14];
        var a33 = this.values[15];
        var b0 = matrix.at(0);
        var b1 = matrix.at(1);
        var b2 = matrix.at(2);
        var b3 = matrix.at(3);
        this.values[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        this.values[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        this.values[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        this.values[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
        b0 = matrix.at(4);
        b1 = matrix.at(5);
        b2 = matrix.at(6);
        b3 = matrix.at(7);
        this.values[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        this.values[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        this.values[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        this.values[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
        b0 = matrix.at(8);
        b1 = matrix.at(9);
        b2 = matrix.at(10);
        b3 = matrix.at(11);
        this.values[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        this.values[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        this.values[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        this.values[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
        b0 = matrix.at(12);
        b1 = matrix.at(13);
        b2 = matrix.at(14);
        b3 = matrix.at(15);
        this.values[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        this.values[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        this.values[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        this.values[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
        return this;
    };
    M4.prototype.multiplyVec3 = function (vector) {
        var x = vector.x;
        var y = vector.y;
        var z = vector.z;
        return new V3([
            this.values[0] * x + this.values[4] * y + this.values[8] * z + this.values[12],
            this.values[1] * x + this.values[5] * y + this.values[9] * z + this.values[13],
            this.values[2] * x + this.values[6] * y + this.values[10] * z + this.values[14],
        ]);
    };
    M4.prototype.multiplyVec4 = function (vector, dest) {
        if (!dest) {
            dest = new V4();
        }
        var x = vector.x;
        var y = vector.y;
        var z = vector.z;
        var w = vector.w;
        dest.x = this.values[0] * x + this.values[4] * y + this.values[8] * z + this.values[12] * w;
        dest.y = this.values[1] * x + this.values[5] * y + this.values[9] * z + this.values[13] * w;
        dest.z = this.values[2] * x + this.values[6] * y + this.values[10] * z + this.values[14] * w;
        dest.w = this.values[3] * x + this.values[7] * y + this.values[11] * z + this.values[15] * w;
        return dest;
    };
    M4.prototype.toMat3 = function () {
        return new M3([
            this.values[0],
            this.values[1],
            this.values[2],
            this.values[4],
            this.values[5],
            this.values[6],
            this.values[8],
            this.values[9],
            this.values[10],
        ]);
    };
    M4.prototype.toInverseMat3 = function () {
        var a00 = this.values[0];
        var a01 = this.values[1];
        var a02 = this.values[2];
        var a10 = this.values[4];
        var a11 = this.values[5];
        var a12 = this.values[6];
        var a20 = this.values[8];
        var a21 = this.values[9];
        var a22 = this.values[10];
        var det01 = a22 * a11 - a12 * a21;
        var det11 = -a22 * a10 + a12 * a20;
        var det21 = a21 * a10 - a11 * a20;
        var det = a00 * det01 + a01 * det11 + a02 * det21;
        if (!det) {
            return null;
        }
        det = 1.0 / det;
        return new M3([
            det01 * det,
            (-a22 * a01 + a02 * a21) * det,
            (a12 * a01 - a02 * a11) * det,
            det11 * det,
            (a22 * a00 - a02 * a20) * det,
            (-a12 * a00 + a02 * a10) * det,
            det21 * det,
            (-a21 * a00 + a01 * a20) * det,
            (a11 * a00 - a01 * a10) * det,
        ]);
    };
    M4.prototype.translate = function (vector) {
        var x = vector.x;
        var y = vector.y;
        var z = vector.z;
        this.values[12] += this.values[0] * x + this.values[4] * y + this.values[8] * z;
        this.values[13] += this.values[1] * x + this.values[5] * y + this.values[9] * z;
        this.values[14] += this.values[2] * x + this.values[6] * y + this.values[10] * z;
        this.values[15] += this.values[3] * x + this.values[7] * y + this.values[11] * z;
        return this;
    };
    M4.prototype.scale = function (vector) {
        var x = vector.x;
        var y = vector.y;
        var z = vector.z;
        this.values[0] *= x;
        this.values[1] *= x;
        this.values[2] *= x;
        this.values[3] *= x;
        this.values[4] *= y;
        this.values[5] *= y;
        this.values[6] *= y;
        this.values[7] *= y;
        this.values[8] *= z;
        this.values[9] *= z;
        this.values[10] *= z;
        this.values[11] *= z;
        return this;
    };
    M4.prototype.rotate = function (angle, axis) {
        var x = axis.x;
        var y = axis.y;
        var z = axis.z;
        var length = Math.sqrt(x * x + y * y + z * z);
        if (!length) {
            return null;
        }
        if (length !== 1) {
            length = 1 / length;
            x *= length;
            y *= length;
            z *= length;
        }
        var s = Math.sin(angle);
        var c = Math.cos(angle);
        var t = 1.0 - c;
        var a00 = this.values[0];
        var a01 = this.values[1];
        var a02 = this.values[2];
        var a03 = this.values[3];
        var a10 = this.values[4];
        var a11 = this.values[5];
        var a12 = this.values[6];
        var a13 = this.values[7];
        var a20 = this.values[8];
        var a21 = this.values[9];
        var a22 = this.values[10];
        var a23 = this.values[11];
        var b00 = x * x * t + c;
        var b01 = y * x * t + z * s;
        var b02 = z * x * t - y * s;
        var b10 = x * y * t - z * s;
        var b11 = y * y * t + c;
        var b12 = z * y * t + x * s;
        var b20 = x * z * t + y * s;
        var b21 = y * z * t - x * s;
        var b22 = z * z * t + c;
        this.values[0] = a00 * b00 + a10 * b01 + a20 * b02;
        this.values[1] = a01 * b00 + a11 * b01 + a21 * b02;
        this.values[2] = a02 * b00 + a12 * b01 + a22 * b02;
        this.values[3] = a03 * b00 + a13 * b01 + a23 * b02;
        this.values[4] = a00 * b10 + a10 * b11 + a20 * b12;
        this.values[5] = a01 * b10 + a11 * b11 + a21 * b12;
        this.values[6] = a02 * b10 + a12 * b11 + a22 * b12;
        this.values[7] = a03 * b10 + a13 * b11 + a23 * b12;
        this.values[8] = a00 * b20 + a10 * b21 + a20 * b22;
        this.values[9] = a01 * b20 + a11 * b21 + a21 * b22;
        this.values[10] = a02 * b20 + a12 * b21 + a22 * b22;
        this.values[11] = a03 * b20 + a13 * b21 + a23 * b22;
        return this;
    };
    M4.identity = new M4().setIdentity();
    return M4;
}());

var Quat = /** @class */ (function () {
    function Quat(values) {
        this.values = new Float32Array(4);
        if (values !== undefined) {
            this.xyzw = values;
        }
    }
    Object.defineProperty(Quat.prototype, "x", {
        get: function () {
            return this.values[0];
        },
        set: function (value) {
            this.values[0] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Quat.prototype, "y", {
        get: function () {
            return this.values[1];
        },
        set: function (value) {
            this.values[1] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Quat.prototype, "z", {
        get: function () {
            return this.values[2];
        },
        set: function (value) {
            this.values[2] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Quat.prototype, "w", {
        get: function () {
            return this.values[3];
        },
        set: function (value) {
            this.values[3] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Quat.prototype, "xy", {
        get: function () {
            return [
                this.values[0],
                this.values[1],
            ];
        },
        set: function (values) {
            this.values[0] = values[0];
            this.values[1] = values[1];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Quat.prototype, "xyz", {
        get: function () {
            return [
                this.values[0],
                this.values[1],
                this.values[2],
            ];
        },
        set: function (values) {
            this.values[0] = values[0];
            this.values[1] = values[1];
            this.values[2] = values[2];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Quat.prototype, "xyzw", {
        get: function () {
            return [
                this.values[0],
                this.values[1],
                this.values[2],
                this.values[3],
            ];
        },
        set: function (values) {
            this.values[0] = values[0];
            this.values[1] = values[1];
            this.values[2] = values[2];
            this.values[3] = values[3];
        },
        enumerable: true,
        configurable: true
    });
    Quat.dot = function (q1, q2) {
        return q1.x * q2.x + q1.y * q2.y + q1.z * q2.z + q1.w * q2.w;
    };
    Quat.sum = function (q1, q2, dest) {
        if (!dest) {
            dest = new Quat();
        }
        dest.x = q1.x + q2.x;
        dest.y = q1.y + q2.y;
        dest.z = q1.z + q2.z;
        dest.w = q1.w + q2.w;
        return dest;
    };
    Quat.product = function (q1, q2, dest) {
        if (!dest) {
            dest = new Quat();
        }
        var q1x = q1.x;
        var q1y = q1.y;
        var q1z = q1.z;
        var q1w = q1.w;
        var q2x = q2.x;
        var q2y = q2.y;
        var q2z = q2.z;
        var q2w = q2.w;
        dest.x = q1x * q2w + q1w * q2x + q1y * q2z - q1z * q2y;
        dest.y = q1y * q2w + q1w * q2y + q1z * q2x - q1x * q2z;
        dest.z = q1z * q2w + q1w * q2z + q1x * q2y - q1y * q2x;
        dest.w = q1w * q2w - q1x * q2x - q1y * q2y - q1z * q2z;
        return dest;
    };
    Quat.cross = function (q1, q2, dest) {
        if (!dest) {
            dest = new Quat();
        }
        var q1x = q1.x;
        var q1y = q1.y;
        var q1z = q1.z;
        var q1w = q1.w;
        var q2x = q2.x;
        var q2y = q2.y;
        var q2z = q2.z;
        var q2w = q2.w;
        dest.x = q1w * q2z + q1z * q2w + q1x * q2y - q1y * q2x;
        dest.y = q1w * q2w - q1x * q2x - q1y * q2y - q1z * q2z;
        dest.z = q1w * q2x + q1x * q2w + q1y * q2z - q1z * q2y;
        dest.w = q1w * q2y + q1y * q2w + q1z * q2x - q1x * q2z;
        return dest;
    };
    Quat.shortMix = function (q1, q2, time, dest) {
        if (!dest) {
            dest = new Quat();
        }
        if (time <= 0.0) {
            dest.xyzw = q1.xyzw;
            return dest;
        }
        else if (time >= 1.0) {
            dest.xyzw = q2.xyzw;
            return dest;
        }
        var cos = Quat.dot(q1, q2);
        var q2a = q2.copy();
        if (cos < 0.0) {
            q2a.inverse();
            cos = -cos;
        }
        var k0;
        var k1;
        if (cos > 0.9999) {
            k0 = 1 - time;
            k1 = 0 + time;
        }
        else {
            var sin = Math.sqrt(1 - cos * cos);
            var angle = Math.atan2(sin, cos);
            var oneOverSin = 1 / sin;
            k0 = Math.sin((1 - time) * angle) * oneOverSin;
            k1 = Math.sin((0 + time) * angle) * oneOverSin;
        }
        dest.x = k0 * q1.x + k1 * q2a.x;
        dest.y = k0 * q1.y + k1 * q2a.y;
        dest.z = k0 * q1.z + k1 * q2a.z;
        dest.w = k0 * q1.w + k1 * q2a.w;
        return dest;
    };
    Quat.mix = function (q1, q2, time, dest) {
        if (!dest) {
            dest = new Quat();
        }
        var cosHalfTheta = q1.x * q2.x + q1.y * q2.y + q1.z * q2.z + q1.w * q2.w;
        if (Math.abs(cosHalfTheta) >= 1.0) {
            dest.xyzw = q1.xyzw;
            return dest;
        }
        var halfTheta = Math.acos(cosHalfTheta);
        var sinHalfTheta = Math.sqrt(1.0 - cosHalfTheta * cosHalfTheta);
        if (Math.abs(sinHalfTheta) < 0.001) {
            dest.x = q1.x * 0.5 + q2.x * 0.5;
            dest.y = q1.y * 0.5 + q2.y * 0.5;
            dest.z = q1.z * 0.5 + q2.z * 0.5;
            dest.w = q1.w * 0.5 + q2.w * 0.5;
            return dest;
        }
        var ratioA = Math.sin((1 - time) * halfTheta) / sinHalfTheta;
        var ratioB = Math.sin(time * halfTheta) / sinHalfTheta;
        dest.x = q1.x * ratioA + q2.x * ratioB;
        dest.y = q1.y * ratioA + q2.y * ratioB;
        dest.z = q1.z * ratioA + q2.z * ratioB;
        dest.w = q1.w * ratioA + q2.w * ratioB;
        return dest;
    };
    Quat.fromAxisAngle = function (axis, angle, dest) {
        if (!dest) {
            dest = new Quat();
        }
        angle *= 0.5;
        var sin = Math.sin(angle);
        dest.x = axis.x * sin;
        dest.y = axis.y * sin;
        dest.z = axis.z * sin;
        dest.w = Math.cos(angle);
        return dest;
    };
    Quat.prototype.at = function (index) {
        return this.values[index];
    };
    Quat.prototype.reset = function () {
        for (var i = 0; i < 4; i++) {
            this.values[i] = 0;
        }
    };
    Quat.prototype.copy = function (dest) {
        if (!dest) {
            dest = new Quat();
        }
        for (var i = 0; i < 4; i++) {
            dest.values[i] = this.values[i];
        }
        return dest;
    };
    Quat.prototype.roll = function () {
        var x = this.x;
        var y = this.y;
        var z = this.z;
        var w = this.w;
        return Math.atan2(2.0 * (x * y + w * z), w * w + x * x - y * y - z * z);
    };
    Quat.prototype.pitch = function () {
        var x = this.x;
        var y = this.y;
        var z = this.z;
        var w = this.w;
        return Math.atan2(2.0 * (y * z + w * x), w * w - x * x - y * y + z * z);
    };
    Quat.prototype.yaw = function () {
        return Math.asin(2.0 * (this.x * this.z - this.w * this.y));
    };
    Quat.prototype.equals = function (vector, threshold) {
        if (threshold === void 0) { threshold = epsilon; }
        for (var i = 0; i < 4; i++) {
            if (Math.abs(this.values[i] - vector.at(i)) > threshold) {
                return false;
            }
        }
        return true;
    };
    Quat.prototype.setIdentity = function () {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.w = 1;
        return this;
    };
    Quat.prototype.calculateW = function () {
        var x = this.x;
        var y = this.y;
        var z = this.z;
        this.w = -(Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z)));
        return this;
    };
    Quat.prototype.inverse = function () {
        var dot = Quat.dot(this, this);
        if (!dot) {
            this.xyzw = [0, 0, 0, 0];
            return this;
        }
        var invDot = dot ? 1.0 / dot : 0;
        this.x *= -invDot;
        this.y *= -invDot;
        this.z *= -invDot;
        this.w *= invDot;
        return this;
    };
    Quat.prototype.conjugate = function () {
        this.values[0] *= -1;
        this.values[1] *= -1;
        this.values[2] *= -1;
        return this;
    };
    Quat.prototype.length = function () {
        var x = this.x;
        var y = this.y;
        var z = this.z;
        var w = this.w;
        return Math.sqrt(x * x + y * y + z * z + w * w);
    };
    Quat.prototype.normalize = function (dest) {
        if (!dest) {
            dest = this;
        }
        var x = this.x;
        var y = this.y;
        var z = this.z;
        var w = this.w;
        var length = Math.sqrt(x * x + y * y + z * z + w * w);
        if (!length) {
            dest.x = 0;
            dest.y = 0;
            dest.z = 0;
            dest.w = 0;
            return dest;
        }
        length = 1 / length;
        dest.x = x * length;
        dest.y = y * length;
        dest.z = z * length;
        dest.w = w * length;
        return dest;
    };
    Quat.prototype.add = function (other) {
        for (var i = 0; i < 4; i++) {
            this.values[i] += other.at(i);
        }
        return this;
    };
    Quat.prototype.multiply = function (other) {
        var q1x = this.values[0];
        var q1y = this.values[1];
        var q1z = this.values[2];
        var q1w = this.values[3];
        var q2x = other.x;
        var q2y = other.y;
        var q2z = other.z;
        var q2w = other.w;
        this.x = q1x * q2w + q1w * q2x + q1y * q2z - q1z * q2y;
        this.y = q1y * q2w + q1w * q2y + q1z * q2x - q1x * q2z;
        this.z = q1z * q2w + q1w * q2z + q1x * q2y - q1y * q2x;
        this.w = q1w * q2w - q1x * q2x - q1y * q2y - q1z * q2z;
        return this;
    };
    Quat.prototype.multiplyVec3 = function (vector, dest) {
        if (!dest) {
            dest = new V3();
        }
        var x = vector.x;
        var y = vector.y;
        var z = vector.z;
        var qx = this.x;
        var qy = this.y;
        var qz = this.z;
        var qw = this.w;
        var ix = qw * x + qy * z - qz * y;
        var iy = qw * y + qz * x - qx * z;
        var iz = qw * z + qx * y - qy * x;
        var iw = -qx * x - qy * y - qz * z;
        dest.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
        dest.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
        dest.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;
        return dest;
    };
    Quat.prototype.toMat3 = function (dest) {
        if (!dest) {
            dest = new M3();
        }
        var x = this.x;
        var y = this.y;
        var z = this.z;
        var w = this.w;
        var x2 = x + x;
        var y2 = y + y;
        var z2 = z + z;
        var xx = x * x2;
        var xy = x * y2;
        var xz = x * z2;
        var yy = y * y2;
        var yz = y * z2;
        var zz = z * z2;
        var wx = w * x2;
        var wy = w * y2;
        var wz = w * z2;
        dest.init([
            1 - (yy + zz),
            xy + wz,
            xz - wy,
            xy - wz,
            1 - (xx + zz),
            yz + wx,
            xz + wy,
            yz - wx,
            1 - (xx + yy),
        ]);
        return dest;
    };
    Quat.prototype.toMat4 = function (dest) {
        if (!dest) {
            dest = new M4();
        }
        var x = this.x;
        var y = this.y;
        var z = this.z;
        var w = this.w;
        var x2 = x + x;
        var y2 = y + y;
        var z2 = z + z;
        var xx = x * x2;
        var xy = x * y2;
        var xz = x * z2;
        var yy = y * y2;
        var yz = y * z2;
        var zz = z * z2;
        var wx = w * x2;
        var wy = w * y2;
        var wz = w * z2;
        dest.init([
            1 - (yy + zz),
            xy + wz,
            xz - wy,
            0,
            xy - wz,
            1 - (xx + zz),
            yz + wx,
            0,
            xz + wy,
            yz - wx,
            1 - (xx + yy),
            0,
            0,
            0,
            0,
            1,
        ]);
        return dest;
    };
    Quat.identity = new Quat().setIdentity();
    Quat.zero = new Quat([0, 0, 0, 1]);
    return Quat;
}());



/***/ })

/******/ });
//# sourceMappingURL=seen_ts.js.map