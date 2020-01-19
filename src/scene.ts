// //// Scene

import { Camera, Viewport } from './camera'
import { Transformable } from './transformable'
import { M4 } from './vectorMath'

// TODO resolve between RenderGroup and Group
// import { RenderGroup } from './render/rendermodel'
import { Group } from './model'

import { Shaders } from './shaders'
import { Canvas } from './canvas'
import { Surface } from './surface'
import { Shape } from './shape'
import { Light } from './light'

interface SceneOptions {
    cache?: boolean;
    answer?: number,
    aMethod?: (a: string) => string;
}


/** A `Scene` is the main object for a view of a scene. */
export class Scene {

    public world: Group = new Group()

    // The `Camera`, which defines the projection transformation. The default
    // projection is perspective.
    public camera = new Camera()

    // The `Viewport`, which defines the projection from shape-space to
    // projection-space then to screen-space. The default viewport is on a
    // space from (0,0,0) to (1,1,1). To map more naturally to pixels, create a
    // viewport with the same width/height as the DOM element.
    public viewport = new Viewport().origin(1, 1)

    // The scene's shader determines which lighting model is used.
    public shader = new Shaders()

    // The `cullBackfaces` boolean can be used to turn off backface-culling
    // for the whole scene. Beware, turning this off can slow down a scene's
    // rendering by a factor of 2. You can also turn off backface-culling for
    // individual surfaces with a boolean on those objects.
    public cullBackfaces = true

    // The `fractionalPoints` boolean determines if we round the surface
    // coordinates to the nearest integer. Rounding the coordinates before
    // since it cuts down on the length of path data. Anecdotally, my speedup
    // on a complex demo scene was 10 FPS. However, it does introduce a slight
    // jittering effect when animating.
    public fractionalPoints = false

    // The `cache` boolean (default : true) enables a simple cache for
    // renderGroups, which are generated for each surface in the scene. The
    // cache is a simple Object keyed by the surface's unique id. The cache has
    // no eviction policy. To flush the cache, call `.flushCache()`
    public cache = true

    // we may have multiple canvas elements, each has its own scene and events
    public canvas: Canvas

    // options live here
    public options: SceneOptions

    private _renderGroupCache: any = {}

    constructor(domElementID: string, options?: SceneOptions) {

        this.canvas = new Canvas(domElementID)

        this.options = {
            cache: true,
            answer: 42
        }
        Object.assign(this.options, options);
    }


    /** Add a `Shape`, `Surface`, Light`, and other `Group` */
    add(child: Shape | Surface | Group | Light) {
        this.world.add(child)
    }

    /** creates a surfacelist with updated transformed points*/
    processAllSurfaces(group: Group): Surface[] {
        let surfaceList: Surface[] = []
        group.shapes.forEach((shape) => {
            shape.recalculateMatrix()
            shape.surfaces.forEach((surface) => {
                // apply the shape's m to that surface
                surface.transform(shape.m)
                // surface.transformedPoints.map((p) => console.log('transformed',p.show()))
                

                surfaceList.push(surface)
            })
        })

        return (surfaceList)
    }

    // TODO actually cull
    cullSurfaces(surfaceList: Surface[], camera: Camera): Surface[] {
        return (surfaceList)
    }


    // The primary method that produces the render models, which are then used
    // by the `RenderContext` to paint the scene.
    render() {
        // recalculate the matrix for the entire shape

        // get all surfaces
        let allSurfaces = this.processAllSurfaces(this.world)
        // console.log('Allsurfaces', allSurfaces)

        // cull the ones pointing the wrong way
        let culledSurfaces: Surface[]
        if (this.cullBackfaces) {
            culledSurfaces = this.cullSurfaces(allSurfaces, this.camera)
        } else {
            culledSurfaces = allSurfaces;
        }

        // console.log('culledSurfaces', culledSurfaces)


        this.canvas.clearCanvas()
        culledSurfaces.forEach((surface) => {
            //surface.points.map((p) => console.log(p.show()))
            this.canvas.draw(surface.strokeMaterial)
            this.canvas.path(surface.transformedPoints)

        })

        return
        //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////
        32

        //   renderGroup.fill = (ref1 = surface.fillMaterial) != null ? ref1.render(lights, _this.shader, renderGroup.transformed) : void 0;
        //   renderGroup.stroke = (ref2 = surface.strokeMaterial) != null ? ref2.render(lights, _this.shader, renderGroup.transformed) : void 0;

        // Compute the projection matrix including the viewport and camera
        // transformation matrices.
        // 

        let projection = this.camera
            .m
            .multiply(this.viewport.prescale)
        // TODO  .multiply(this.camera.projection)

        let transform = this.world.m

        // TODO: ??? what is this?
        // this.viewport   = this.viewport.postscale

        let renderGroups = []

        // Compute transformed and projected geometry.
        let results = [];

        for (let i = 0, len = this.world.surfaces.length; i < len; i++) {
            let surface = this.world.surfaces[i];
            let renderGroup = this._renderSurface(surface, transform, projection, this.viewport);

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

    }
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
    renderGroups(a: any, b: any) {
        return b.projected.barycenter.z - a.projected.barycenter.z
    }




    /** Get or create the rendermodel for the given surface.
        If `this.cache` is true, we cache these models to reduce object creation and recomputation. */
    _renderSurface(surface: Surface, transform: M4, projection: M4, viewport: Viewport) {
        // if (!this.options.cache)
        //     return new RenderGroup(surface, transform, projection, viewport);

        // let renderGroup = this._renderGroupCache[surface.id]
        // if (!renderGroup)  //was existential operator
        //     renderGroup = this._renderGroupCache[surface.id] = new Group(surface, transform, projection, viewport)
        // else
        //     renderGroup.update(transform, projection, viewport)
        // return renderGroup
    }


    /** Removes all elements from the cache. This may be necessary if you add and
     remove many shapes from the scene's models since this cache has no eviction policy. */
    flushCache() {
        this._renderGroupCache = {}
    }
}
