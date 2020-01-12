// //// Scene

import { Model } from './model'
import { Camera, Viewport } from './camera'
import { Matrix, Transformable } from './transformable'
import { RenderModel } from './render/rendermodel'
import { NullShape } from './shapes/primitives'
import { Shaders } from './shaders'
import {Surface} from './surface'

/** A `Scene` is the main object for a view of a scene. */
export class Scene {

    // The root model for the scene, which contains `Shape`s and
    // other `Model`s (Models are hierarchical).  
    public model = new Model(NullShape())

    // The `Camera`, which defines the projection transformation. The default
    // projection is perspective.
    public camera = new Camera()

    // The `Viewport`, which defines the projection from shape-space to
    // projection-space then to screen-space. The default viewport is on a
    // space from (0,0,0) to (1,1,1). To map more naturally to pixels, create a
    // viewport with the same width/height as the DOM element.
    public viewport = new Viewport().origin(1, 1)

    // The scene's shader determines which lighting model is used.
    // TODO: add this back
    // public shader = new Shaders()

    // The `cullBackfaces` boolean can be used to turn off backface-culling
    // for the whole scene. Beware, turning this off can slow down a scene's
    // rendering by a factor of 2. You can also turn off backface-culling for
    // individual surfaces with a boolean on those objects.
    public cullBackfaces = true

    // The `fractionalPoints` boolean determines if we round the surface
    // coordinates to the nearest integer. Rounding the coordinates before
    // display speeds up path drawing  especially when using an SVG context
    // since it cuts down on the length of path data. Anecdotally, my speedup
    // on a complex demo scene was 10 FPS. However, it does introduce a slight
    // jittering effect when animating.
    public fractionalPoints = false

    // The `cache` boolean (default : true) enables a simple cache for
    // renderModels, which are generated for each surface in the scene. The
    // cache is a simple Object keyed by the surface's unique id. The cache has
    // no eviction policy. To flush the cache, call `.flushCache()`
    public cache = true

    private _renderModelCache: any;

    constructor(options?: string[]) {
        //Util.defaults(this, options, this.defaults())
        this._renderModelCache = {}
    }

    // The primary method that produces the render models, which are then used
    // by the `RenderContext` to paint the scene.
    render() {
        // Compute the projection matrix including the viewport and camera
        // transformation matrices.
        // 

        let projection = this.camera
            .m
            .multiply(this.viewport.prescale)
            // TODO  .multiply(this.camera.projection)
    
        let transform = this.model.m

        // TODO: ??? what is this?
        // this.viewport   = this.viewport.postscale

        let renderModels = []

        // Compute transformed and projected geometry.
        let results = [];

        for (let i = 0, len = this.model.surfaces.length; i < len; i++) {
            let surface = this.model.surfaces[i];
            let renderModel = this._renderSurface(surface, transform, projection, this.viewport);

            // Test projected normal's z-coordinate for culling (if enabled).
            // if ((!_this.cullBackfaces || !surface.cullBackfaces || renderModel.projected.normal.z < 0) && renderModel.inFrustrum) {
            //   renderModel.fill = (ref1 = surface.fillMaterial) != null ? ref1.render(lights, _this.shader, renderModel.transformed) : void 0;
            //   renderModel.stroke = (ref2 = surface.strokeMaterial) != null ? ref2.render(lights, _this.shader, renderModel.transformed) : void 0;
            //   // Round coordinates (if enabled)
            //   if (_this.fractionalPoints !== true) {
            //     ref3 = renderModel.projected.points;
            //     for (j = 0, len1 = ref3.length; j < len1; j++) {
            //       p = ref3[j];
            //       p.round();
            //     }
            //   }
            //   results.push(renderModels.push(renderModel));
            // } else {
            results.push(void 0);
            //}
        }

    }
    // this.model.eachRenderable(function(light, transform) {
    //     // Compute light model data.
    //     return new seen.LightRenderModel(light, transform);
    // }, (function(_this) {
    //   return function(shape, lights, transform) {
    //     var i, j, len, len1, p, ref, ref1, ref2, ref3, renderModel, results, surface;
    //       // Compute transformed and projected geometry.
    //       ref = shape.surfaces;
    //     results = [];
    //     for (i = 0, len = ref.length; i < len; i++) {
    //       surface = ref[i];
    //       renderModel = _this._renderSurface(surface, transform, projection, viewport);
    //       // Test projected normal's z-coordinate for culling (if enabled).
    //       if ((!_this.cullBackfaces || !surface.cullBackfaces || renderModel.projected.normal.z < 0) && renderModel.inFrustrum) {
    //         renderModel.fill = (ref1 = surface.fillMaterial) != null ? ref1.render(lights, _this.shader, renderModel.transformed) : void 0;
    //         renderModel.stroke = (ref2 = surface.strokeMaterial) != null ? ref2.render(lights, _this.shader, renderModel.transformed) : void 0;
    //         // Round coordinates (if enabled)
    //         if (_this.fractionalPoints !== true) {
    //           ref3 = renderModel.projected.points;
    //           for (j = 0, len1 = ref3.length; j < len1; j++) {
    //             p = ref3[j];
    //             p.round();
    //           }
    //         }
    //         results.push(renderModels.push(renderModel));
    //       } else {
    //         results.push(void 0);
    //       }
    //     }
    //     return results;
    //   };
    // })(this));

    /** Sort render models by projected z coordinate. This ensures that the surfaces
     farthest from the eye are painted first. (Painter's Algorithm) */
    renderModels(a: any, b: any) {
        return b.projected.barycenter.z - a.projected.barycenter.z
    }




    /** Get or create the rendermodel for the given surface.
        If `this.cache` is true, we cache these models to reduce object creation and recomputation. */
    _renderSurface(surface: Surface, transform: Matrix, projection: Matrix, viewport: Viewport) {
        if (!this.cache)
            return new RenderModel(surface, transform, projection, viewport);

        let renderModel = this._renderModelCache[surface.id]
        if (!renderModel)  //was existential operator
            renderModel = this._renderModelCache[surface.id] = new RenderModel(surface, transform, projection, viewport)
        else
            renderModel.update(transform, projection, viewport)
        return renderModel
    }


    /** Removes all elements from the cache. This may be necessary if you add and
     remove many shapes from the scene's models since this cache has no eviction policy. */
    flushCache() {
        this._renderModelCache = {}
    }
}
