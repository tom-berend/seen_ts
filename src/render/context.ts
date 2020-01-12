import { RenderAnimator } from '../animator'
import { RenderLayer, SceneLayer } from './layers'
import { Scene } from '../scene'
import { Util } from '../util'
import {CanvasRenderContext} from './canvas'

// //// Render Contexts
// ------------------

interface LayerContext {
    layer: RenderLayer;
    context: RenderContext;
}

/** The `RenderContext` uses `RenderModel`s produced by the scene's render method to paint the shapes into an HTML element.
 We support both SVG and Canvas painters, the `RenderContext` and `RenderLayerContext` define a common interface.*/
export class RenderContext {

    public layers: LayerContext[];

    constructor() {
        this.layers = []
    }

    render() {
        this.reset()
        this.layers.forEach(layer => {

            layer.context.reset()
            layer.layer.render(layer.context)
            layer.context.cleanup()
        })
        this.cleanup();
        return (this);
    }


    /** Returns a new `Animator` with this context's render method pre-registered.*/
    animate() {
        return new RenderAnimator(this)
    }

    /** Add a new `RenderLayerContext` to this context. This allows us to easily stack paintable components such as
    a fill backdrop, or even multiple scenes in one context.*/
    layer(layer: RenderLayer) {
        this.layers.push({
            layer: layer,
            context: this
        })
        return (this)
    }

    sceneLayer(scene: Scene) {
        this.layer(new SceneLayer(scene))
        return this
    }
    reset() { };
    cleanup() { };
}

/** The `RenderLayerContext` defines the interface for producing painters that can paint various things into the current layer.*/
abstract class RenderLayerContext {
    path() { }; // Return a path painter
    rect() { }; // Return a rect painter
    circle() { }; // Return a circle painter
    text() { }; // Return a text painter

    reset() { };
    cleanup() { };
}

/** Create a render context for the element with the specified `elementId`. elementId should correspond to either an SVG or Canvas element.*/
// we only support CANVAS
function Context(elementId: string, scene: Scene = null) {
    let tag = Util.element(elementId).tagName.toUpperCase()
    let context: CanvasRenderContext;

    switch (tag) {
        // case 'SVG':
        // case 'G': context = new SvgRenderContext(elementId)

        case 'CANVAS': 
        context = new CanvasRenderContext(elementId)
    }
    // if (context && scene) {
    //     context.sceneLayer(scene)
    // }
    return context
}