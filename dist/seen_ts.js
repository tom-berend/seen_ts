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
/* harmony import */ var _src_render_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/render/canvas */ "./src/render/canvas.ts");
/* harmony import */ var _src_shapes_primitives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/shapes/primitives */ "./src/shapes/primitives.ts");

// this will be somewhere else....

//import {P} from "./src/point"

console.log('I am ALIVE');
var width = 900;
var height = 500;
var ctx = new _src_render_canvas__WEBPACK_IMPORTED_MODULE_1__["CanvasRenderContext"]('seen-canvas');
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
// }
// animate();
// ////////////////// SEEN_TS  syntax  /////////////////
var scene = new _src_Seen2__WEBPACK_IMPORTED_MODULE_0__["Scene"]('seen-canvas'); // includes the camera, renderer is always CANVAS
var cube = new _src_shapes_primitives__WEBPACK_IMPORTED_MODULE_2__["Cube"](1, 1, 1, { color: 0x00ff00 }); // defaults to basic material
scene.add(cube);
scene.camera.position.z = 5; // actually a default, but doesn't hurt
scene.render();
// function animate() {
// 	requestAnimationFrame( animate );
// 	renderer.render( scene, camera );
// }
// animate();
// // create a cube
// let shape = Cube()
// console.log('shape',shape)
// shape.render()
// Create scene and add cube to model
// let scene = new Scene();
// console.log('SCENE',scene)
// let shape = pyramid()
// console.log('SHAPE',shape)
// let model = new Model(shape)
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
/*! exports provided: Scene, Model, Primitive, Viewport, Shape, P */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scene */ "./src/scene.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return _scene__WEBPACK_IMPORTED_MODULE_0__["Scene"]; });

/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["Model"]; });

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
/*! exports provided: Projection, Viewport, Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Projection", function() { return Projection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Viewport", function() { return Viewport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
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
// Second, we apply the projection trasform to create perspective parallax and what not.
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
            return this;
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
/*! exports provided: Model */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return Model; });
/* harmony import */ var _transformable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transformable */ "./src/transformable.ts");
/* harmony import */ var _light__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./light */ "./src/light.ts");
// //// Models
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


// The object model class. It stores `Shapes` and `Lights`
// TODO: move lights to somewhere else
// Notably, models are hierarchical, like a tree. This means you can isolate
// the transformation of groups of shapes in the scene, as well as create
// chains of transformations for creating, for example, articulated skeletons.
var Model = /** @class */ (function (_super) {
    __extends(Model, _super);
    function Model(shape) {
        var _this = _super.call(this) || this;
        _this.models = [];
        _this.lights = [];
        _this.surfaces = [];
        _this.shape = shape;
        return _this;
    }
    /** Add a `Shape`, `Light`, and other `Model` as a child of this `Model`
     *Any number of children can by supplied as arguments.   */
    Model.prototype.addChild = function (child) {
        if (child instanceof _light__WEBPACK_IMPORTED_MODULE_1__["Light"]) {
            this.lights.push(child);
        }
        else if (child instanceof Model) {
            this.models.push(child);
        }
        else { // must be a surface
            this.surfaces.push(child);
        }
        return this;
    };
    return Model;
}(_transformable__WEBPACK_IMPORTED_MODULE_0__["Transformable"]));



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

/***/ "./src/render/canvas.ts":
/*!******************************!*\
  !*** ./src/render/canvas.ts ***!
  \******************************/
/*! exports provided: CanvasRenderContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasRenderContext", function() { return CanvasRenderContext; });
// //// HTML5 Canvas Context
// ------------------
/** The very lowest-level commands for drawing on Canvas.
  CanvasRenderContext and SVGRenderContext extend `RenderContext` for Canvas or SVG. */
var CanvasRenderContext /*extends RenderContext*/ = /** @class */ (function () {
    function CanvasRenderContext(el) {
        //super()
        // console.log(el)
        this.el = document.getElementById(el);
        // console.log(this.el)
        this.ctx = this.el.getContext('2d');
        // console.log(this.ctx)
    }
    // layer (layer) {
    //   this.layers.push {
    //     layer   : layer
    //     context : new seen.CanvasLayerRenderContext(this.ctx)
    //   }
    //   return this
    // }
    CanvasRenderContext.prototype.reset = function () {
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        this.ctx.clearRect(0, 0, this.el.width, this.el.height);
    };
    CanvasRenderContext.prototype.draw = function (style) {
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
    CanvasRenderContext.prototype.fill = function (style) {
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
    CanvasRenderContext.prototype.path = function (points) {
        this.ctx.beginPath();
        for (var i = 0, j = 0, len = points.length; j < len; i = ++j) {
            var p = points[i];
            // tom's kluge for now /////////////////////
            // scale points by 10, and move them to 50,50
            p.x = p.x * 10 + 50;
            p.y = p.y * 10 + 50;
            /////////////////////////////
            if (i === 0) {
                this.ctx.moveTo(p.x, p.y);
                console.log('moveTo', p.x, p.y);
            }
            else {
                this.ctx.lineTo(p.x, p.y);
                console.log('lineTo', p.x, p.y);
            }
        }
        this.ctx.closePath();
        return this;
    };
    CanvasRenderContext.prototype.rect = function (width, height) {
        this.ctx.rect(0, 0, width, height);
        return this;
    };
    CanvasRenderContext.prototype.circle = function (center, radius) {
        this.ctx.beginPath();
        this.ctx.arc(center.x, center.y, radius, 0, 2 * Math.PI, true);
        return this;
    };
    CanvasRenderContext.prototype.fillText = function (m, text, style) {
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
    CanvasRenderContext.prototype._cssToCanvasAnchor = function (anchor) {
        if (anchor == 'middle')
            return 'center';
        return anchor;
    };
    return CanvasRenderContext;
}());

// TODO: figure out whether we need these two...
// class CanvasLayerRenderContext extends RenderLayerContext
//   constructor  (this.ctx) {
//     this.pathPainter  = new CanvasPathPainter(this.ctx)
//     this.ciclePainter = new CanvasCirclePainter(this.ctx)
//     this.textPainter  = new CanvasTextPainter(this.ctx)
//     this.rectPainter  = new CanvasRectPainter(this.ctx)
//   }
//   path    () {this.pathPainter()}
//   rect    () {this.rectPainter()}
//   circle  () {this.ciclePainter()}
//   text    () {this.textPainter()}
// }
// function CanvasContext (elementId, scene){
//   let context = new CanvasRenderContext(elementId)
//   if (scene) {
//     context.sceneLayer(scene)
//   }
//   return context
// }


/***/ }),

/***/ "./src/scene.ts":
/*!**********************!*\
  !*** ./src/scene.ts ***!
  \**********************/
/*! exports provided: Scene */
/***/ (function(module, exports) {

throw new Error("Module parse failed: 'return' outside of function (130:4)\nFile was processed with these loaders:\n * ./node_modules/ts-loader/index.js\nYou may need an additional loader to handle the result of these loaders.\n| renderModels(a, any, b, any);\n| {\n>     return b.projected.barycenter.z - a.projected.barycenter.z;\n| }\n| /** Get or create the rendermodel for the given surface.");

/***/ }),

/***/ "./src/shapes/primitives.ts":
/*!**********************************!*\
  !*** ./src/shapes/primitives.ts ***!
  \**********************************/
/*! exports provided: Triangle, Primitive, NullShape, Cube, pyramid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Triangle", function() { return Triangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Primitive", function() { return Primitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NullShape", function() { return NullShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cube", function() { return Cube; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pyramid", function() { return pyramid; });
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../point */ "./src/point.ts");
/* harmony import */ var _surface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../surface */ "./src/surface.ts");
//// Shapes
// //////// Shape primitives and shape-making methods
// ------------------

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
// Map to points in the surfaces of a cube
var CUBE_COORDINATE_MAP = [
    [0, 1, 3, 2],
    [5, 4, 6, 7],
    [1, 0, 4, 5],
    [2, 3, 7, 6],
    [3, 1, 5, 7],
    [0, 2, 6, 4],
];
// Map to points in the surfaces of a rectangular pyramid
var PYRAMID_COORDINATE_MAP = [
    [1, 0, 2, 3],
    [0, 1, 4],
    [2, 0, 4],
    [3, 2, 4],
    [1, 3, 4],
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

/** Sometimes we just want an empty `Model` that we can add children to */
function NullShape() {
    var points = [Object(_point__WEBPACK_IMPORTED_MODULE_0__["P"])(0, 0, 0), Object(_point__WEBPACK_IMPORTED_MODULE_0__["P"])(0, 0, 0), Object(_point__WEBPACK_IMPORTED_MODULE_0__["P"])(0, 0, 0)];
    return new _surface__WEBPACK_IMPORTED_MODULE_1__["Shape"]('nullshape', mapPointsToSurfaces(points, []));
}
function Cube() {
    var points = [Object(_point__WEBPACK_IMPORTED_MODULE_0__["P"])(-1, -1, -1), Object(_point__WEBPACK_IMPORTED_MODULE_0__["P"])(-1, -1, 1), Object(_point__WEBPACK_IMPORTED_MODULE_0__["P"])(-1, 1, -1), Object(_point__WEBPACK_IMPORTED_MODULE_0__["P"])(-1, 1, 1), Object(_point__WEBPACK_IMPORTED_MODULE_0__["P"])(1, -1, -1), Object(_point__WEBPACK_IMPORTED_MODULE_0__["P"])(1, -1, 1), Object(_point__WEBPACK_IMPORTED_MODULE_0__["P"])(1, 1, -1), Object(_point__WEBPACK_IMPORTED_MODULE_0__["P"])(1, 1, 1)];
    return new _surface__WEBPACK_IMPORTED_MODULE_1__["Shape"]('cube', mapPointsToSurfaces(points, CUBE_COORDINATE_MAP));
}
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
function pyramid() {
    var points = [Object(_point__WEBPACK_IMPORTED_MODULE_0__["P"])(0, 0, 0), Object(_point__WEBPACK_IMPORTED_MODULE_0__["P"])(0, 0, 1), Object(_point__WEBPACK_IMPORTED_MODULE_0__["P"])(1, 0, 0), Object(_point__WEBPACK_IMPORTED_MODULE_0__["P"])(1, 0, 1), Object(_point__WEBPACK_IMPORTED_MODULE_0__["P"])(0.5, 1, 0.5)];
    return new _surface__WEBPACK_IMPORTED_MODULE_1__["Shape"]('pyramid', mapPointsToSurfaces(points, PYRAMID_COORDINATE_MAP));
}
//   tetrahedron: (function (_this) {
//     return function () {
//       var points;
//       points = [P(1, 1, 1), P(-1, -1, 1), P(-1, 1, -1), P(1, -1, -1)];
//       return new Shape('tetrahedron', Shapes.mapPointsToSurfaces(points, TETRAHEDRON_COORDINATE_MAP));
//     };
//   })(this),
//   icosahedron: function () {
//     return new Shape('icosahedron', Shapes.mapPointsToSurfaces(ICOSAHEDRON_POINTS, ICOSAHEDRON_COORDINATE_MAP));
//   },
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
    coordinateMap.forEach(function (element) {
        // 
        s.push(new _surface__WEBPACK_IMPORTED_MODULE_1__["Surface"](points[element[0]], points[element[1]], points[element[2]]));
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
    function Surface(p1, p2, p3) {
        var _this = _super.call(this) || this;
        // When 'false' this will override backface culling, which is useful if your
        // material is transparent. See comment in `Scene`.
        _this.cullBackfaces = true;
        // Fill and stroke may be `Material` objects, which define the color and
        // finish of the object and are rendered using the scene's shader.
        _this.fillMaterial = new _materials__WEBPACK_IMPORTED_MODULE_1__["Material"]('gray');
        _this.strokeMaterial = null;
        _this.dirty = false;
        _this.triangle = [p1, p2, p3];
        // We store a unique id for every surface so we can look them up quickly
        // with the `renderModel` cache.
        _this.id = 's' + _util__WEBPACK_IMPORTED_MODULE_0__["Util"].uniqueId();
        return _this;
        //this.painter = painter
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
/*! exports provided: M, Transformable, Matrix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transformable", function() { return Transformable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Matrix", function() { return Matrix; });
// `Transformable` base class extended by `Shape` and `Model`.
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
// Models and Shapes are decendents of 'transformable', a single matrix
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



/***/ })

/******/ });
//# sourceMappingURL=seen_ts.js.map