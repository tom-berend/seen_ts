import { RenderContext } from './context'
import { Scene } from 'src/scene'

// //// Layers
// ------------------

export abstract class RenderLayer {
    render(context: RenderContext) { }
}

export class SceneLayer extends RenderLayer {
    public scene: Scene
    constructor(scene: Scene) {
        super()
        this.scene = scene
    }

    render(context: RenderContext) {
        console.log("Missing RENDER()")
        // this.scene.render().forEach((renderGroup) => {
        //     renderGroup.surface.painter.paint(renderGroup, context)
        // })
    }
}

class FillLayer extends RenderLayer {
    constructor(width = 500, height = 500, fill = '//EEE') {
        super()
    }

    render(context: RenderContext) {
        console.log("Missing RENDER()")
        // context.rect()
        //   .rect(this.width, this.height)
        //   .fill(fill : this.fill)
    }
}