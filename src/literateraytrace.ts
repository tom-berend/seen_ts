import { Color, WHITE } from "./color";
import { V3 } from './vectorMath'

// # Raytracing
//
// **Raytracing** is a relatively simple way to render images of 3D objects.
// The core is an elegant idea, that one can simulate the real-world behavior
// of photons of light bouncing off of surfaces and colors accumulating from
// their paths. It's not inherently fast, but the simplicity of the core lets
// it model interesting things like reflections and depth of field in ways
// that mirror natural processes.
//
// ## CS 301: Raytracing
//
// This happens to be a popular subject for education: implementing a raytracer
// requires a student to understand vector math, fast code, and even recursion.
// The reward is a pretty image - more compelling than the blasé debug output
// that students get from most assignments.
//
// But it's still hard to learn: explanations are written either in the
// language of mathematics or programming, and rarely connect all the dots.
// Raytracer implementations tend to extremes: one
// [fits on a business card](http://fabiensanglard.net/rayTracing_back_of_business_card/),
// another [supports nearly every potential feature](http://www.povray.org/),
// and most of the rest are [homework assignments](https://github.com/search?q=raytracer+cs&ref=cmdform),
// implemented just enough to run, never enough to have comments and documentation.
//
// ## Literate Raytracer
//
// [Literate raytracer](https://github.com/tmcw/literate-raytracer) is a
// simple implementation of raytracing in Javascript. It's [made to be
// read as a narrative](http://macwright.org/literate-raytracer/), and intends
// to [explain vector operations](http://macwright.org/literate-raytracer/vector.html) as well.
//
// # Setup

// # Constants
const UP = new V3([0, 1, 0])

let c = document.getElementById('seen-canvas') as HTMLCanvasElement,
    width = 640 * 0.5,
    height = 480 * 0.5;

// Get a context in order to generate a proper data array. We aren't going to
// use traditional Canvas drawing functions like `fillRect` - instead this
// raytracer will directly compute pixel data and then put it into an image.
c.width = width;
c.height = height;
c.style.cssText = 'width:' + (width * 2) + 'px;height:' + (height * 2) + 'px';

let ctx = c.getContext('2d')
let data = ctx.getImageData(0, 0, width, height);


export class LR_Camera {     // can be written as an Interface
    point: V3
    fieldOfView: number
    vector: V3

    constructor() { }
}



export class XXX_LR_Object {   // can be written as an Interface
    type: string
    point: Vector
    color: Vector
    specular: number
    lambert: number
    ambient: number
    radius: number

    constructor(type: string, point: Vector, color: Vector) {
        this.type = type
        this.point = point
        this.color = color
    }
}

export class LR_Object {   // can be written as an Interface
    type: string
    point: V3
    color: Color
    specular: number
    lambert: number
    ambient: number
    radius: number

    constructor(type: string, point: V3, color: Color) {
        this.type = type
        this.point = point
        this.color = color
    }
}

export class LR_Ray {
    point: V3
    vector: V3

    constructor(point:V3, vector:V3) {
        this.point = point
        this.vector = vector 
    }
}

export class xxx_LR_Ray {
    point: Vector
    vector: Vector

    constructor(point:V3, vector:V3) {
        this.point = v3toVector(point)
        this.vector = v3toVector(vector)
    }
}


// # The Scene
export class LR_Scene {
    // ![](http://farm4.staticflickr.com/3781/10524236814_5a9c43487a_b.jpg)
    //
    // We need to define three different kinds of things in 3D space:
    // a **camera** from which we cast rays into the scene, **objects**
    // that can be hit by those rays and are drawn into the scene, and
    // **lights** that change the color of rays, by extension coloring objects.
    //
    // In this case, we define these objects as simple objects with vectors
    // defined as `{x, y, z}` objects.

    public camera: LR_Camera
    public objects: any[] = []
    public xxx_objects: any[] = []
    public lights: V3[] = []

    constructor() {
        // ## The Camera
        //
        // Our camera is pretty simple: it's a point in space, where you can imagine
        // that the camera 'sits', a `fieldOfView`, which is the angle from the right
        // to the left side of its frame, and a `vector` which determines what
        // angle it points in.
        this.camera = new LR_Camera()
        this.camera.point = new V3([0, 1.8, 10])
        this.camera.fieldOfView = 45
        this.camera.vector = new V3([0, 3, 0])



        // ## Lights
        //
        // Lights are defined only as points in space - surfaces that have lambert
        // shading will be affected by any visible lights.
        this.lights = [new V3([-30, -10, 20])]


        // ## Objects
        //
        // This raytracer handles sphere objects, with any color, position, radius,
        // and surface properties.

        let s1 = new LR_Object('sphere', new V3([0, 3.5, -3]), new Color(155, 200, 155))
        s1.specular = 0.2
        s1.lambert = 0.7
        s1.ambient = 0.1
        s1.radius = 3

        let xxx_s1 = new XXX_LR_Object('sphere', new Vector(0, 3.5, -3), new Vector(155, 200, 155))
        s1.specular = 0.2
        s1.lambert = 0.7
        s1.ambient = 0.1
        s1.radius = 3

        let s2 = new LR_Object('sphere', new V3([-4, 2, -1]), new Color(155, 155, 155))
        s2.specular = 0.1
        s2.lambert = 0.0
        s2.ambient = 0.0
        s2.radius = 0.2

        let xxx_s2 = new XXX_LR_Object('sphere', new Vector(-4, 2, -1), new Vector(155, 155, 155))
        s2.specular = 0.1
        s2.lambert = 0.0
        s2.ambient = 0.0
        s2.radius = 0.2


        let s3 = new LR_Object('sphere', new V3([-4, 3, -1]), new Color(255, 255, 255))
        s3.specular = 0.2
        s3.lambert = 0.7
        s3.ambient = 0.1
        s3.radius = 0.1

        let xxx_s3 = new XXX_LR_Object('sphere', new Vector(-4, 3, -1), new Vector(255, 255, 255))
        s3.specular = 0.2
        s3.lambert = 0.7
        s3.ambient = 0.1
        s3.radius = 0.1


        this.objects.push(s1)
        this.objects.push(s2)
        this.objects.push(s3)

        this.xxx_objects.push(xxx_s1)
        this.xxx_objects.push(xxx_s2)
        this.xxx_objects.push(xxx_s3)

    }
}



// # Throwing Rays
//
// This is one part where we can't follow nature exactly: technically photons
// come out of lights, bounce off of objects, and then some hit the 'eye'
// and many don't. Simulating this - sending rays in all directions out of
// each light and most not having any real effect - would be too inefficient.
//
// Luckily, the reverse is more efficient and has practically the same result -
// instead of rays going 'from' lights to the eye, we follow rays from the eye
// and see if they end up hitting any features and lights on their travels.
//
// For each pixel in the canvas, there needs to be at least one ray of light
// that determines its color by bouncing through the scene.
function render(scene: LR_Scene) {
    // first 'unpack' the scene to make it easier to reference
    let camera = scene.camera,
        objects = scene.objects,
        lights = scene.lights;

    // This process
    // is a bit odd, because there's a disconnect between pixels and vectors:
    // given the left and right, top and bottom rays, the rays we shoot are just
    // interpolated between them in little increments.
    //
    // Starting with the height and width of the scene, the camera's place,
    // direction, and field of view, we calculate factors that create
    // `width*height` vectors for each ray

    // Start by creating a simple vector pointing in the direction the camera is
    // pointing - a unit vector
    // let eyeVector = Vector.unitVector(Vector.subtract(camera.vector, camera.point)),
    let eyeVector = camera.vector.copy().subtract(camera.point).normalize()
    let xxx_eyeVector = Vector.unitVector(Vector.subtract(v3toVector(camera.vector), v3toVector(camera.point)))

    // and then we'll rotate this by combining it with a version that's turned
    // 90° right and one that's turned 90° up. Since the [cross product](http://en.wikipedia.org/wiki/Cross_product)
    // takes two vectors and creates a third that's perpendicular to both,
    // we use a pure 'UP' vector to turn the camera right, and that 'right'
    // vector to turn the camera up.

    let vpRight = eyeVector.copy().cross(UP).normalize()
    let vpUp = vpRight.copy().cross(eyeVector).normalize()

    let xxx_vpRight = Vector.unitVector(Vector.crossProduct(xxx_eyeVector, v3toVector(UP)))
    let xxx_vpUp = Vector.unitVector(Vector.crossProduct(xxx_vpRight, xxx_eyeVector))



    // The actual ending pixel dimensions of the image aren't important here -
    // note that `width` and `height` are in pixels, but the numbers we compute
    // here are just based on the ratio between them, `height/width`, and the
    // `fieldOfView` of the camera.
    let fovRadians = Math.PI * (camera.fieldOfView / 2) / 180,
        heightWidthRatio = height / width,
        halfWidth = Math.tan(fovRadians),
        halfHeight = heightWidthRatio * halfWidth,
        camerawidth = halfWidth * 2,
        cameraheight = halfHeight * 2,
        pixelWidth = camerawidth / (width - 1),
        pixelHeight = cameraheight / (height - 1);

        let index: number
        let color: Color
        let xxx_color: Vector
        let ray = new LR_Ray(camera.point,new V3([0,0,0]))
        let xxx_ray = new xxx_LR_Ray(camera.point, new V3([0,0,0]))
    
    
    for (let x = 69; x < width; x++) {
        for (let y = 122; y < height; y++) {

            // turn the raw pixel `x` and `y` values into values from -1 to 1
            // and use these values to scale the facing-right and facing-up
            // vectors so that we generate versions of the `eyeVector` that are
            // skewed in each necessary direction.

            let xcomp = vpRight.copy().scale((x * pixelWidth) - halfWidth)
            let ycomp = vpUp.copy().scale((y * pixelHeight) - halfHeight)

            let xxx_xcomp = Vector.scale(xxx_vpRight, (x * pixelWidth) - halfWidth),
            xxx_ycomp = Vector.scale(xxx_vpUp, (y * pixelHeight) - halfHeight);

            ray.vector = eyeVector.copy().add(xcomp).add(ycomp).normalize()
            xxx_ray.vector = Vector.unitVector(Vector.add3(xxx_eyeVector, xxx_xcomp, xxx_ycomp));

            // use the vector generated to raytrace the scene, returning a color
            // as a `{x, y, z}` vector of RGB values
            color = trace(ray, scene, 0);
            xxx_color = xxx_trace(xxx_ray, scene, 0);


            // index = (x * 4) + (y * width * 4),
            //     data.data[index + 0] = color.r;
            // data.data[index + 1] = color.g;
            // data.data[index + 2] = color.b;
            // data.data[index + 3] = 255;

            index = (x * 4) + (y * width * 4),
                data.data[index + 0] = xxx_color.xV;
            data.data[index + 1] = xxx_color.yV;
            data.data[index + 2] = xxx_color.zV;
            data.data[index + 3] = 255;


            // index = (x * 4) + (y * width * 4),
            //     data.data[index + 0] = color.r;
            // data.data[index + 1] = color.g;
            // data.data[index + 2] = color.b;
            // data.data[index + 3] = color.a;

            if ( ! (color.r === xxx_color.xV  && color.g === xxx_color.yV && color.g === xxx_color.zV ) ){
                console.log(`mismatch `,x,y,color, xxx_color)
                ctx.putImageData(data, 0, 0);
                throw ''
            }

        }
    }

    // Now that each ray has returned and populated the `data` array with
    // correctly lit colors, fill the canvas with the generated data.
    ctx.putImageData(data, 0, 0);
}



// # Trace
//
// Given a ray, shoot it until it hits an object and return that object's color,
// or `WHITE` if no object is found. This is the main function that's
// called in order to draw the image, and it recurses into itself if rays
// reflect off of objects and acquire more color.
function trace(ray: LR_Ray, scene: LR_Scene, depth: number): Color {
    var distObject = intersectScene(ray, scene);

    // If we don't hit anything, fill this pixel with the background color -
    // in this case, white.
    if (distObject.distance === Infinity) {
        return WHITE
    }

    // The `pointAtTime` is another way of saying the 'intersection point'
    // of this ray into this object. We compute this by simply taking
    // the direction of the ray and making it as long as the distance
    // returned by the intersection check.

    let pointAtTime = ray.point.copy().add(ray.vector.scale(distObject.distance))
// console.log ('pointAt', ray.point.xyz)


    // return surface(ray, scene, distObject.object, pointAtTime, sphereNormal(distObject.object, pointAtTime), depth);
    let normal = sphereNormal(distObject.object, pointAtTime)

    // # Surface
    //
    // ![](http://farm3.staticflickr.com/2851/10524788334_f2e3903b36_b.jpg)
    //
    // If `trace()` determines that a ray intersected with an object, `surface`
    // decides what color it acquires from the interaction.

    // function surface(ray: LR_Ray, scene: LR_Scene, object: LR_Object, pointAtTime: Vector, normal: Vector, depth: number): Color {
    let b = distObject.object.color.copy(),
        c = new Color(),
        lambertAmount = 0;

    // **[Lambert shading](http://en.wikipedia.org/wiki/Lambertian_reflectance)**
    // is our pretty shading, which shows gradations from the most lit point on
    // the object to the least.
    if (distObject.object.lambert) {
        for (var i = 0; i < scene.lights.length; i++) {
            var lightPoint = scene.lights[i];
            // First: can we see the light? If not, this is a shadowy area
            // and it gets no light from the lambert shading process.
            if (!isLightVisible(pointAtTime, scene, lightPoint)) continue;
            // Otherwise, calculate the lambertian reflectance, which
            // essentially is a 'diffuse' lighting system - direct light
            // is bright, and from there, less direct light is gradually,
            // beautifully, less light.

            let contribution = lightPoint.copy().subtract(pointAtTime).normalize().dot(normal)

            // sometimes this formula can return negatives, so we check:
            // we only want positive values for lighting.
            // TODO: this can also return NAN.  why??
            if (contribution > 0) lambertAmount += contribution;
        }

        // lambert should never 'blow out' the lighting of an object,
        // even if the ray bounces between a lot of things and hits lights
        lambertAmount = Math.min(1, lambertAmount);
        
    }

    // **[Specular](https://en.wikipedia.org/wiki/Specular_reflection)** is a fancy word for 'reflective': rays that hit objects
    // with specular surfaces bounce off and acquire the colors of other objects
    // they bounce into.
    if (distObject.object.specular) {
        // This is basically the same thing as what we did in `render()`, just
        // instead of looking from the viewpoint of the camera, we're looking
        // from a point on the surface of a shiny object, seeing what it sees
        // and making that part of a reflection.
        var reflectedRay = {
            point: pointAtTime,
            vector: ray.vector.copy().reflection(normal)
        };

        // Big number, but tests ok
        // vtest('reflectedRay', reflectedRay.vector, Vector.reflectThrough(v3toVector(ray.vector), v3toVector(normal)))

        // This is a recursive method: if we hit something that's reflective,
        // then the call to `surface()` at the bottom will return here and try
        // to find what the ray reflected into. Since this could easily go
        // on forever, first check that we haven't gone more than three bounces
        // into a reflection.
        if (depth < 3) {
            // console.log('reflected', reflectedRay)
            let reflectedColor = trace(reflectedRay, scene, ++depth);
            //  console.log('reflected', reflectedColor)
            
            c.addChannels(reflectedColor.scale(distObject.object.specular));
        }
        //console.log('specular c', c)
    }

    // **Ambient** colors shine bright regardless of whether there's a light visible -
    // a circle with a totally ambient blue color will always just be a flat blue
    // circle.
    c.addChannels(b.scale(lambertAmount * distObject.object.lambert))
    c.addChannels(b.scale(distObject.object.ambient))

    return c

}

interface RayIntersect {
    distance: number,
    object: LR_Object | null
}

// # Detecting collisions against all objects
//
// Given a ray, let's figure out whether it hits anything, and if so,
// what's the closest thing it hits.
function intersectScene(ray: LR_Ray, scene: LR_Scene) {
    // The base case is that it hits nothing, and travels for `Infinity`
    var closest: RayIntersect = { distance: Infinity, object: null }
    // But for each object, we check whether it has any intersection,
    // and compare that intersection - is it closer than `Infinity` at first,
    // and then is it closer than other objects that have been hit?
    for (var i = 0; i < scene.objects.length; i++) {
        var object = scene.objects[i],
            dist = sphereIntersection(object, ray);
        if (dist !== undefined && dist < closest.distance) {
            closest = { distance: dist, object: object }
        }
    }
    return closest;
}

// ## Detecting collisions against a sphere
//
// ![](graphics/sphereintersection.png)
//
// Spheres are one of the simplest objects for rays to interact with, since
// the geometrical math for finding intersections and reflections with them
// is pretty straightforward.
function sphereIntersection(sphere: LR_Object, ray: LR_Ray): number {
    let eye_to_center = sphere.point.copy().subtract(ray.point)
    // picture a triangle with one side going straight from the camera point
    // to the center of the sphere, another side being the vector.
    // the final side is a right angle.
    //
    // This equation first figures out the length of the vector side
    let v = eye_to_center.dot(ray.vector)

    // then the length of the straight from the camera to the center
    // of the sphere
    let eoDot = eye_to_center.dot(eye_to_center)
    // and compute a segment from the right angle of the triangle to a point
    // on the `v` line that also intersects the circle
    let discriminant = (sphere.radius * sphere.radius) - eoDot + (v * v);
    // If the discriminant is negative, that means that the sphere hasn't
    // been hit by the ray
    if (discriminant < 0) {
        return Infinity;
    } else {
        // otherwise, we return the distance from the camera point to the sphere
        // `Math.sqrt(dotProduct(a, a))` is the length of a vector, so
        // `v - Math.sqrt(discriminant)` means the length of the the vector
        // just from the camera to the intersection point.
        return v - Math.sqrt(discriminant);
    }
}

// A normal is, at each point on the surface of a sphere or some other object,
// a vector that's perpendicular to the surface and radiates outward. We need
// to know this so that we can calculate the way that a ray reflects off of
// a sphere.
function sphereNormal(sphere: LR_Object, pos: V3) {
    return pos.copy().subtract(sphere.point).normalize()
}

// // # Surface
// //
// // ![](http://farm3.staticflickr.com/2851/10524788334_f2e3903b36_b.jpg)
// //
// // If `trace()` determines that a ray intersected with an object, `surface`
// // decides what color it acquires from the interaction.
// function surface(ray: LR_Ray, scene: LR_Scene, object: LR_Object, pointAtTime: V3, normal: V3, depth: number): Color {
//     let b = object.color.copy(),
//         c = new Color(),
//         lambertAmount = 0;

//     // **[Lambert shading](http://en.wikipedia.org/wiki/Lambertian_reflectance)**
//     // is our pretty shading, which shows gradations from the most lit point on
//     // the object to the least.
//     if (object.lambert) {
//         for (var i = 0; i < scene.lights.length; i++) {
//             var lightPoint = scene.lights[i];
//             // First: can we see the light? If not, this is a shadowy area
//             // and it gets no light from the lambert shading process.
//             if (!isLightVisible(pointAtTime, scene, lightPoint)) continue;
//             // Otherwise, calculate the lambertian reflectance, which
//             // essentially is a 'diffuse' lighting system - direct light
//             // is bright, and from there, less direct light is gradually,
//             // beautifully, less light.

//             // var contribution = Vector.dotProduct(Vector.unitVector(
//             //     Vector.subtract(lightPoint, pointAtTime)), normal);

//             let contribution = lightPoint.copy().subtract(pointAtTime).normalize().dot(normal)

//             // sometimes this formula can return negatives, so we check:
//             // we only want positive values for lighting.
//             if (contribution > 0) lambertAmount += contribution;
//         }

//         // lambert should never 'blow out' the lighting of an object,
//         // even if the ray bounces between a lot of things and hits lights
//         lambertAmount = Math.min(1, lambertAmount);
//         c.addChannels(b.scale(lambertAmount * object.lambert))
//     }

//     // **[Specular](https://en.wikipedia.org/wiki/Specular_reflection)** is a fancy word for 'reflective': rays that hit objects
//     // with specular surfaces bounce off and acquire the colors of other objects
//     // they bounce into.
//     if (object.specular) {
//         // This is basically the same thing as what we did in `render()`, just
//         // instead of looking from the viewpoint of the camera, we're looking
//         // from a point on the surface of a shiny object, seeing what it sees
//         // and making that part of a reflection.
//         var reflectedRay = {
//             point: pointAtTime,
//             vector: ray.vector.reflection(normal)
//         };

//         // This is a recursive method: if we hit something that's reflective,
//         // then the call to `surface()` at the bottom will return here and try
//         // to find what the ray reflected into. Since this could easily go
//         // on forever, first check that we haven't gone more than three bounces
//         // into a reflection.
//         if (depth < 3) {
//             let reflectedColor = trace(reflectedRay, scene, ++depth);
//             c.addChannels(reflectedColor.scale(object.specular));
//         }
//     }

//     // **Ambient** colors shine bright regardless of whether there's a light visible -
//     // a circle with a totally ambient blue color will always just be a flat blue
//     // circle.
//     return c.addChannels(b.scale(object.ambient))
// }

// Check whether a light is visible from some point on the surface of something.
// Note that there might be an intersection here, which is tricky - but if it's
// tiny, it's actually an intersection with the object we're trying to decide
// the surface of. That's why we check for `> -0.005` at the end.
//
// This is the part that makes objects cast shadows on each other: from here
// we'd check to see if the area in a shadowy spot can 'see' a light, and when
// this returns `false`, we make the area shadowy.
function isLightVisible(pt: V3, scene: LR_Scene, light: V3) {
    var distObject = intersectScene({
        point: pt,
        vector: pt.copy().subtract(light).normalize()
    }, scene);
    return distObject.distance > -0.005;
}

// Here we do a little fun magic, just for the heck of it. We have three spheres
// in the scene - `scene.objects[0]` is the big one, kind of like 'Earth'.
//
// The other two are little, so let's make them orbit around the big one
// and look cool!

// The orbits of the two planets. We use some basic trigonetry to do the orbits:
// using `Math.sin()` and `Math.cos()`, it's simple to get a
// [unit circle](http://en.wikipedia.org/wiki/Unit_circle)
// for each planet. Here's [an article I wrote](http://macwright.org/2013/03/05/math-for-pictures.html)
// for getting to know `sin` and `cos`.


export function Literary() {
    let planet1 = 0, planet2 = 0;
    let scene = new LR_Scene()
    let playing = true;


    let tick = () => {
        // make one planet spin a little bit faster than the other, just for
        // effect.
        planet1 += 0.1;
        planet2 += 0.2;

        // set the position of each moon with some trig.
        scene.objects[1].point.x = Math.sin(planet1) * 3.5;
        scene.objects[1].point.z = -3 + (Math.cos(planet1) * 3.5);

        scene.objects[2].point.x = Math.sin(planet2) * 4;
        scene.objects[2].point.z = -3 + (Math.cos(planet2) * 4);

        // finally, render the scene!
        render(scene);

        // and as soon as we're finished, render it again and move the planets
        // again
        if (playing) setTimeout(tick, 10);
    }

    tick()
}




// Then let the user control a cute playing animation!
// document.getElementById('play').onclick = play;
// document.getElementById('stop').onclick = stop;




// # Vector Operations
//
// These are general-purpose functions that deal with vectors - in this case,
// three-dimensional vectors represented as objects in the form
//
//     { x, y, z }
//
// Since we're not using traditional object oriented techniques, these
// functions take and return that sort of logic-less object, so you'll see
// `add(a, b)` rather than `a.add(b)`.





class Vector {

    public xV: number = 0
    public yV: number = 0
    public zV: number = 0

    constructor(x: number, y: number, z: number) {
        this.xV = x
        this.yV = y
        this.zV = z
    }


    // # Operations
    //
    // ## [Dot Product](https://en.wikipedia.org/wiki/Dot_product)
    // is different than the rest of these since it takes two vectors but
    // returns a single number value.
    static dotProduct = function(a: Vector, b: Vector): number {
        return (a.xV * b.xV) + (a.yV * b.yV) + (a.zV * b.zV);
    };

    // ## [Cross Product](https://en.wikipedia.org/wiki/Cross_product)
    //
    // generates a new vector that's perpendicular to both of the vectors
    // given.
    static crossProduct(a: Vector, b: Vector): Vector {
        return new Vector(
            (a.yV * b.zV) - (a.zV * b.yV),
            (a.zV * b.xV) - (a.xV * b.zV),
            (a.xV * b.yV) - (a.yV * b.xV)
        )
    };

    // Enlongate or shrink a vector by a factor of `t`
    static scale(a: Vector, t: number): Vector {
        return new Vector(
            a.xV * t,
            a.yV * t,
            a.zV * t
        )
    }

    // Length, or magnitude, measured by [Euclidean norm](https://en.wikipedia.org/wiki/Euclidean_vector#Length)
    length(a: Vector): number {
        return Math.sqrt(Vector.dotProduct(a, a));
    };


    // ## [Unit Vector](http://en.wikipedia.org/wiki/Unit_vector)
    //
    // Turn any vector into a vector that has a magnitude of 1.
    //
    // If you consider that a [unit sphere](http://en.wikipedia.org/wiki/Unit_sphere)
    // is a sphere with a radius of 1, a unit vector is like a vector from the
    // center point (0, 0, 0) to any point on its surface.
    static unitVector(a: Vector): Vector {
        return this.scale(a, 1 / a.length(a))   // scale returns a new vector, so we don't have to
    }

    // Add two vectors to each other, by simply combining each
    // of their components
    static add(a: Vector, b: Vector): Vector {
        return new Vector(
            a.xV + b.xV,
            a.yV + b.yV,
            a.zV + b.zV
        )
    };

    // A version of `add` that adds three vectors at the same time. While
    // it's possible to write a clever version of `Vector.add` that takes
    // any number of arguments, it's not fast, so we're keeping it simple and
    // just making two versions.
    static add3(a: Vector, b: Vector, c: Vector): Vector {
        return new Vector(
            a.xV + b.xV + c.xV,
            a.yV + b.yV + c.yV,
            a.zV + b.zV + c.zV
        )
    };


    // Subtract one vector from another, by subtracting each component
    static subtract = function(a: Vector, b: Vector) {
        return new Vector(
            a.xV - b.xV,
            a.yV - b.yV,
            a.zV - b.zV
        )
    }

    // Given a vector `a`, which is a point in space, and a `normal`, which is
    // the angle the point hits a surface, returna  new vector that is reflect
    // off of that surface
    static reflectThrough(a: Vector, normal: Vector) {
        var d = Vector.scale(normal, Vector.dotProduct(a, normal));
        let result = Vector.subtract(Vector.scale(d, 2), a);
        // console.log('xxx_n', a, normal)
        // console.log('xxx_reflect', result)
        return result
    }
}


// # Constants
const xxxUP = new Vector(0, 1, 0)
const ZERO = new Vector(0, 0, 0)
// const WHITE = new Vector(255, 255, 255)
const ZEROcp = () => { return new Vector(0, 0, 0); };

function vtest(label: string, a: V3, b: Vector) {
    if (!(almost(a.x, b.xV) && almost(a.y, b.yV) && almost(a.z, b.zV))) {
        console.assert(false, `${label}:  ${a.x}===${b.xV}, ${a.y}===${b.yV}, ${a.z}===${b.zV} `)
        throw ''
    }
}
function ntest(label: string, a: number, b: number) {
    if (!almost(a, b)) {
        console.assert(false, `${label}:  ${a} ${b}`)
        throw ''
    }
}
function almost(a: number, b: number): boolean {
    if (isNaN(a) && isNaN(b))  // ignore this case
        return true
    return (Math.abs(a - b) < .05)
}
function v3toVector(a: V3): Vector {
    return new Vector(a.x, a.y, a.z)
}
function colortoVector(a: Color): Vector {
    return new Vector(a.r, a.g, a.b)
}







// # Trace
//
// Given a ray, shoot it until it hits an object and return that object's color,
// or `WHITE` if no object is found. This is the main function that's
// called in order to draw the image, and it recurses into itself if rays
// reflect off of objects and acquire more color.
function xxx_trace(ray: xxx_LR_Ray, scene: LR_Scene, depth: number): Vector {
    var distObject = xxx_intersectScene(ray, scene);

    // If we don't hit anything, fill this pixel with the background color -
    // in this case, white.
    if (distObject.distance === Infinity) {
        return new Vector(255, 255, 255)  // WHITE
    }

    // The `pointAtTime` is another way of saying the 'intersection point'
    // of this ray into this object. We compute this by simply taking
    // the direction of the ray and making it as long as the distance
    // returned by the intersection check.
    var pointAtTime = Vector.add(ray.point, Vector.scale(ray.vector, distObject.distance));
    // console.log ('xxx_pointAt', ray.point)




    // return surface(ray, scene, distObject.object, pointAtTime, sphereNormal(distObject.object, pointAtTime), depth);
    let normal = xxx_sphereNormal(distObject.object, pointAtTime)
    // # Surface
    //
    // ![](http://farm3.staticflickr.com/2851/10524788334_f2e3903b36_b.jpg)
    //
    // If `trace()` determines that a ray intersected with an object, `surface`
    // decides what color it acquires from the interaction.

    // function surface(ray: LR_Ray, scene: LR_Scene, object: LR_Object, pointAtTime: Vector, normal: Vector, depth: number): Color {
    let b = colortoVector(distObject.object.color.copy()),
        c = new Vector(0, 0, 0),
        lambertAmount = 0;

    // **[Lambert shading](http://en.wikipedia.org/wiki/Lambertian_reflectance)**
    // is our pretty shading, which shows gradations from the most lit point on
    // the object to the least.
    if (distObject.object.lambert) {
        for (var i = 0; i < scene.lights.length; i++) {
            var lightPoint = scene.lights[i];
            // First: can we see the light? If not, this is a shadowy area
            // and it gets no light from the lambert shading process.
            if (!xxx_isLightVisible(pointAtTime, scene, v3toVector(lightPoint))) continue;
            // Otherwise, calculate the lambertian reflectance, which
            // essentially is a 'diffuse' lighting system - direct light
            // is bright, and from there, less direct light is gradually,
            // beautifully, less light.
            var contribution = Vector.dotProduct(Vector.unitVector(
                Vector.subtract(v3toVector(lightPoint), pointAtTime)), normal);
            // sometimes this formula can return negatives, so we check:
            // we only want positive values for lighting.
            if (contribution > 0) lambertAmount += contribution;
        }

        // lambert should never 'blow out' the lighting of an object,
        // even if the ray bounces between a lot of things and hits lights
        lambertAmount = Math.min(1, lambertAmount);
    }

    // **[Specular](https://en.wikipedia.org/wiki/Specular_reflection)** is a fancy word for 'reflective': rays that hit objects
    // with specular surfaces bounce off and acquire the colors of other objects
    // they bounce into.
    if (distObject.object.specular) {
        // This is basically the same thing as what we did in `render()`, just
        // instead of looking from the viewpoint of the camera, we're looking
        // from a point on the surface of a shiny object, seeing what it sees
        // and making that part of a reflection.
        var reflectedRay = {
            point: pointAtTime,
            vector: Vector.reflectThrough(ray.vector, normal)
        };

        // This is a recursive method: if we hit something that's reflective,
        // then the call to `surface()` at the bottom will return here and try
        // to find what the ray reflected into. Since this could easily go
        // on forever, first check that we haven't gone more than three bounces
        // into a reflection.
        if (depth < 3) {
            // console.log('xxx_reflected', reflectedRay)

            let reflectedColor = xxx_trace(reflectedRay, scene, ++depth);
            // console.log('xxx_reflected', reflectedColor)
            c = Vector.add(c, Vector.scale(reflectedColor, distObject.object.specular));
        }
//        console.log('xxx_specular c', c)

    }

    // **Ambient** colors shine bright regardless of whether there's a light visible -
    // a circle with a totally ambient blue color will always just be a flat blue
    // circle.

    return Vector.add3(c,
        Vector.scale(b, lambertAmount * distObject.object.lambert),
        Vector.scale(b, distObject.object.ambient))

}

interface RayIntersect {
    distance: number,
    object: LR_Object | null
}

// # Detecting collisions against all objects
//
// Given a ray, let's figure out whether it hits anything, and if so,
// what's the closest thing it hits.
function xxx_intersectScene(ray: xxx_LR_Ray, scene: LR_Scene) {
    // The base case is that it hits nothing, and travels for `Infinity`
    var closest: RayIntersect = { distance: Infinity, object: null }
    // But for each object, we check whether it has any intersection,
    // and compare that intersection - is it closer than `Infinity` at first,
    // and then is it closer than other objects that have been hit?
    for (var i = 0; i < scene.objects.length; i++) {
        var object = scene.objects[i],
            dist = xxx_sphereIntersection(object, ray);
        if (dist !== undefined && dist < closest.distance) {
            closest = { distance: dist, object: object }
        }
    }
    return closest;
}

// ## Detecting collisions against a sphere
//
// ![](graphics/sphereintersection.png)
//
// Spheres are one of the simplest objects for rays to interact with, since
// the geometrical math for finding intersections and reflections with them
// is pretty straightforward.
function xxx_sphereIntersection(sphere: LR_Object, ray: xxx_LR_Ray): number {
    var eye_to_center = Vector.subtract(v3toVector(sphere.point), ray.point),
        // picture a triangle with one side going straight from the camera point
        // to the center of the sphere, another side being the vector.
        // the final side is a right angle.
        //
        // This equation first figures out the length of the vector side
        v = Vector.dotProduct(eye_to_center, ray.vector),
        // then the length of the straight from the camera to the center
        // of the sphere
        eoDot = Vector.dotProduct(eye_to_center, eye_to_center),
        // and compute a segment from the right angle of the triangle to a point
        // on the `v` line that also intersects the circle
        discriminant = (sphere.radius * sphere.radius) - eoDot + (v * v);
    // If the discriminant is negative, that means that the sphere hasn't
    // been hit by the ray
    if (discriminant < 0) {
        return Infinity;
    } else {
        // otherwise, we return the distance from the camera point to the sphere
        // `Math.sqrt(dotProduct(a, a))` is the length of a vector, so
        // `v - Math.sqrt(discriminant)` means the length of the the vector
        // just from the camera to the intersection point.
        return v - Math.sqrt(discriminant);
    }
}

// A normal is, at each point on the surface of a sphere or some other object,
// a vector that's perpendicular to the surface and radiates outward. We need
// to know this so that we can calculate the way that a ray reflects off of
// a sphere.
function xxx_sphereNormal(sphere: LR_Object, pos: Vector) {
    return Vector.unitVector(
        Vector.subtract(pos, v3toVector(sphere.point)));
}

// # Surface
//
// ![](http://farm3.staticflickr.com/2851/10524788334_f2e3903b36_b.jpg)
//
// If `trace()` determines that a ray intersected with an object, `surface`
// decides what color it acquires from the interaction.
function xxx_surface(ray: xxx_LR_Ray, scene: LR_Scene, object: LR_Object, pointAtTime: Vector, normal: Vector, depth: number): Vector {
    let b = colortoVector(object.color.copy()),
        c = new Vector(0, 0, 0),
        lambertAmount = 0;

    // **[Lambert shading](http://en.wikipedia.org/wiki/Lambertian_reflectance)**
    // is our pretty shading, which shows gradations from the most lit point on
    // the object to the least.
    if (object.lambert) {
        for (var i = 0; i < scene.lights.length; i++) {
            var lightPoint = scene.lights[i];
            // First: can we see the light? If not, this is a shadowy area
            // and it gets no light from the lambert shading process.
            if (!xxx_isLightVisible(pointAtTime, scene, v3toVector(lightPoint))) continue;
            // Otherwise, calculate the lambertian reflectance, which
            // essentially is a 'diffuse' lighting system - direct light
            // is bright, and from there, less direct light is gradually,
            // beautifully, less light.
            var contribution = Vector.dotProduct(Vector.unitVector(
                Vector.subtract(v3toVector(lightPoint), pointAtTime)), normal);
            // sometimes this formula can return negatives, so we check:
            // we only want positive values for lighting.
            if (contribution > 0) lambertAmount += contribution;
        }

        // lambert should never 'blow out' the lighting of an object,
        // even if the ray bounces between a lot of things and hits lights
        lambertAmount = Math.min(1, lambertAmount);
        Vector.add(c, Vector.scale(b, lambertAmount * object.lambert))
    }

    // **[Specular](https://en.wikipedia.org/wiki/Specular_reflection)** is a fancy word for 'reflective': rays that hit objects
    // with specular surfaces bounce off and acquire the colors of other objects
    // they bounce into.
    if (object.specular) {
        // This is basically the same thing as what we did in `render()`, just
        // instead of looking from the viewpoint of the camera, we're looking
        // from a point on the surface of a shiny object, seeing what it sees
        // and making that part of a reflection.
        var reflectedRay = {
            point: pointAtTime,
            vector: Vector.reflectThrough(ray.vector, normal)
        };

        // This is a recursive method: if we hit something that's reflective,
        // then the call to `surface()` at the bottom will return here and try
        // to find what the ray reflected into. Since this could easily go
        // on forever, first check that we haven't gone more than three bounces
        // into a reflection.
        if (depth < 3) {
            let reflectedColor = xxx_trace(reflectedRay, scene, ++depth);
            Vector.add(c, Vector.scale(reflectedColor, object.specular));
        }
    }

    // **Ambient** colors shine bright regardless of whether there's a light visible -
    // a circle with a totally ambient blue color will always just be a flat blue
    // circle.
    return Vector.add(c, Vector.scale(b, object.ambient))
}

// Check whether a light is visible from some point on the surface of something.
// Note that there might be an intersection here, which is tricky - but if it's
// tiny, it's actually an intersection with the object we're trying to decide
// the surface of. That's why we check for `> -0.005` at the end.
//
// This is the part that makes objects cast shadows on each other: from here
// we'd check to see if the area in a shadowy spot can 'see' a light, and when
// this returns `false`, we make the area shadowy.
function xxx_isLightVisible(pt: Vector, scene: LR_Scene, light: Vector) {
    var distObject = xxx_intersectScene({
        point: pt,
        vector: Vector.unitVector(Vector.subtract(pt, light))
    }, scene);
    return distObject.distance > -0.005;
}

