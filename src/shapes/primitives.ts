//// Shapes
// //////// Shape primitives and shape-making methods
// ------------------

import { Point, P } from '../point'
import { Shape, Surface } from '../surface'  // TODO: rename Shape to Surface, Surface to Triangle



// Map to points in the surfaces of a tetrahedron
const TETRAHEDRON_COORDINATE_MAP = [
    [0, 2, 1],  // 0
    [0, 1, 3],  // 1
    [3, 2, 0],  // 2
    [1, 2, 3],  // 3
]

// triangles formed from points in TETRAHEDRON_COORDINATE_MAP
const TETRA_MAP = [
    [0, 1, 2],
    [0, 2, 3],
    [0, 1, 3],
    [1, 2, 3],
]


// Map to points in the surfaces of a cube
const CUBE_COORDINATE_MAP = [
    [0, 1, 3, 2], // left
    [5, 4, 6, 7], // right
    [1, 0, 4, 5], // bottom
    [2, 3, 7, 6], // top
    [3, 1, 5, 7], // front
    [0, 2, 6, 4], // back
]

// Map to points in the surfaces of a rectangular pyramid
const PYRAMID_COORDINATE_MAP = [
    [1, 0, 2, 3], // bottom
    [0, 1, 4], // left
    [2, 0, 4], // rear
    [3, 2, 4], // right
    [1, 3, 4], // front
]

// Altitude of eqiulateral triangle for computing triangular patch size
const EQUILATERAL_TRIANGLE_ALTITUDE = Math.sqrt(3.0) / 2.0

// Points array of an icosahedron
const ICOS_X = 0.525731112119133606
const ICOS_Z = 0.850650808352039932
const ICOSAHEDRON_POINTS = [
    P(-ICOS_X, 0.0, -ICOS_Z),
    P(ICOS_X, 0.0, -ICOS_Z),
    P(-ICOS_X, 0.0, ICOS_Z),
    P(ICOS_X, 0.0, ICOS_Z),
    P(0.0, ICOS_Z, -ICOS_X),
    P(0.0, ICOS_Z, ICOS_X),
    P(0.0, -ICOS_Z, -ICOS_X),
    P(0.0, -ICOS_Z, ICOS_X),
    P(ICOS_Z, ICOS_X, 0.0),
    P(-ICOS_Z, ICOS_X, 0.0),
    P(ICOS_Z, -ICOS_X, 0.0),
    P(-ICOS_Z, -ICOS_X, 0.0),
]

// Map to points in the surfaces of an icosahedron
const ICOSAHEDRON_COORDINATE_MAP = [
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
]

// TODO: Shapes should be part of the Shape() class  - box:Shape = new Shape().box()
/** static methods to create `Shape` */

export class Triangle {
    public points: Point[]
//    public normal: Quaternion;
}


export class Primitive {
    public triangles: Triangle[] = []
}

/** Sometimes we just want an empty `Model` that we can add children to */
export function NullShape() {
    let points = [P(0, 0, 0), P(0, 0, 0), P(0, 0, 0)]
    return new Shape('nullshape', mapPointsToSurfaces(points, []))
}


export function Cube() {
    let points = [P(-1, -1, -1), P(-1, -1, 1), P(-1, 1, -1), P(-1, 1, 1), P(1, -1, -1), P(1, -1, 1), P(1, 1, -1), P(1, 1, 1)];
    return new Shape('cube', mapPointsToSurfaces(points, CUBE_COORDINATE_MAP));
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

export function pyramid() {
    let points = [P(0, 0, 0), P(0, 0, 1), P(1, 0, 0), P(1, 0, 1), P(0.5, 1, 0.5)];
    return new Shape('pyramid', mapPointsToSurfaces(points, PYRAMID_COORDINATE_MAP));
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
function mapPointsToSurfaces(points: Point[], coordinateMap: any[]): Surface[] {
    // TODO: convert all exterior quads to triangles  (eg: two triangles per side for a cube)
    let s: Surface[] = [];
    coordinateMap.forEach(element => {
        // 
        s.push(new Surface(points[element[0]], points[element[1]], points[element[2]]))
    });
    return s
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


