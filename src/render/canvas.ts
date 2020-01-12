// //// HTML5 Canvas Context
// ------------------

import {P,Point} from '../point'


interface StrokeProperties {
    strokeStyle? :any, //color|gradient|pattern;
    lineWidth?:number
}

interface FillProperties {
    fillStyle? :any,  //color|gradient|pattern;
    globalAlpha?: number, // 0 = fully transparent, 1 = fully opaque
    globalCompositeOperation?:string,  // eg: source-in
    shadowOffsetX?: number,
    shadowOffsetY?: number,
    shadowBlur?: number,
    shadowColor?: number
}

/** The very lowest-level commands for drawing on Canvas.
  CanvasRenderContext and SVGRenderContext extend `RenderContext` for Canvas or SVG. */
export class CanvasRenderContext /*extends RenderContext*/ {

    public el: HTMLCanvasElement;
    public ctx: CanvasRenderingContext2D;

    public layers: any[];

    constructor(el: string) {
        //super()
        // console.log(el)
        this.el = document.getElementById(el) as HTMLCanvasElement;
        // console.log(this.el)
        this.ctx = this.el.getContext('2d')
        // console.log(this.ctx)
    }

    // layer (layer) {
    //   this.layers.push {
    //     layer   : layer
    //     context : new seen.CanvasLayerRenderContext(this.ctx)
    //   }
    //   return this
    // }

    reset() {
        this.ctx.setTransform(1, 0, 0, 1, 0, 0)
        this.ctx.clearRect(0, 0, this.el.width, this.el.height)
    }

    draw(style: StrokeProperties) {
        // Copy over SVG CSS attributes
        if (style.strokeStyle)
            this.ctx.strokeStyle = style.strokeStyle

        // TODO: which do we need of the rest?  Can we deal with them as a class?
        if (style.lineWidth)
            this.ctx.lineWidth = style.lineWidth
        // if (style.textAnchor)
        //     this.ctx.textAlign = style.textAnchor

        this.ctx.stroke()
        return this
    }

    fill(style: FillProperties) {
        // Copy over SVG CSS attributes
        if (style.fillStyle)
            this.ctx.fillStyle = style.fillStyle
            console.log('fillStyle',style.fillStyle)

        // if (style['text-anchor'])
        //     this.ctx.textAlign = style['text-anchor']
        // if (style['fill-opacity'])
        //     this.ctx.globalAlpha = style['fill-opacity']

        this.ctx.fill()
        return this
    }

    /** Create a polygon path for a CANVAS rendering */
    path(points: Point[]) {
        this.ctx.beginPath()

        


        for (let i = 0, j = 0, len = points.length; j < len; i = ++j) {
            let p = points[i];

        // tom's kluge for now /////////////////////
        // scale points by 10, and move them to 50,50
        p.x = p.x * 10 + 50
        p.y = p.y * 10 + 50
        /////////////////////////////

            if (i === 0) {
                this.ctx.moveTo(p.x, p.y);
                console.log('moveTo',p.x,p.y)
            } else {
                this.ctx.lineTo(p.x, p.y);
                console.log('lineTo',p.x,p.y)
            }
        }
        this.ctx.closePath()
        return this
    }

    rect(width: number, height: number) {
        this.ctx.rect(0, 0, width, height)
        return this
    }

    circle(center: Point, radius: number) {
        this.ctx.beginPath()
        this.ctx.arc(center.x, center.y, radius, 0, 2 * Math.PI, true)
        return this
    }

    fillText(m: any, text: string, style: any) {
        this.ctx.save()
        this.ctx.setTransform(m[0], m[3], -m[1], -m[4], m[2], m[5])

        if (style.font)
            this.ctx.font = style.font
        if (style.fill) this.ctx.fillStyle = style.fill

        // TODO: string is not assignable...
        // if (style['text-anchor'])
        //     this.ctx.textAlign = this._cssToCanvasAnchor(style['text-anchor'])

        this.ctx.fillText(text, 0, 0)
        this.ctx.restore()
        return this
    }

    _cssToCanvasAnchor(anchor: string) {
        if (anchor == 'middle')
            return 'center'
        return anchor
    }
}





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
