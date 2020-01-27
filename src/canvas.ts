import { V2, V4 } from './vectorMath'
import { Observable } from './paon'
import { Color } from './color'

///////////////////////////////////////////////////////////////////////
// palette
// https://digitalsynopsis.com/design/beautiful-color-palettes-combinations-schemes/

// beach towel
const COLOR1 = '#fe4a49'   // red
const COLOR2 = '#2ab7ca'   // blue
const COLOR3 = '#fed766'   // yellow
const BKGND = '#e6e6ea'
const CLEAR = '#f4f4f8'

///////////////////////////////////////////////////////////////////////

export interface StrokeProperties {
    strokeStyle?: any, //color|gradient|pattern;
    lineWidth?: number
}

export interface FillProperties {
    fillStyle?: any,  //color|gradient|pattern;
    globalAlpha?: number, // 0 = fully transparent, 1 = fully opaque
    globalCompositeOperation?: string,  // eg: source-in
    shadowOffsetX?: number,
    shadowOffsetY?: number,
    shadowBlur?: number,
    shadowColor?: number
}

///////////////////////////////////////////////////////////////////////

export class Canvas {
    public canvas: HTMLCanvasElement
    public ctx: CanvasRenderingContext2D

    public height: number
    public width: number

    public imageData: ImageData  // a bitmap render of the canvas
    public data8: Uint8ClampedArray  // 8-bit imagedata (y*width + x)*4

    public x: number = 0

    public layers: any[]  // unused for now   


    // use mouseObservable to share BOTH kybd and mouse events with subclasses
    public mouseObservable: Observable // Observer Pattern component
    public kybdObservable: Observable
    public animationObservable: Observable

    constructor(canvasTag: string) {
        // console.log(`in Canvas construtor for tag '${canvasTag}'`)

        this.canvas = document.getElementById(canvasTag) as HTMLCanvasElement
        this.ctx = this.canvas.getContext('2d')

        this.width = this.canvas.width
        this.height = this.canvas.height

        this.clearDisplay()  // clear the canvas to transparent black


        //    // find out more about the canvas...

        // let containerX = document.getElementById('container').offsetLeft
        // let containerY = document.getElementById('container').offsetTop
        // console.log(`container offset x=${containerX},y=${containerY}`)

        // some devices might scale, so scaleX/Y will not be close to 1
        let rect = this.canvas.getBoundingClientRect() // position of canvas

        let scaleX = this.width / rect.width    // relationship bitmap vs. element for X
        let scaleY = this.height / rect.height
        // console.log(`scale x=${scaleX},y=${scaleY}`)


        /// this section sets up keyboard and mouse events for this canvas
        this.mouseObservable = new Observable() // watch for input field to fill
        this.kybdObservable = new Observable()
        this.animationObservable = new Observable()

        // add event listeners
        this.canvas.addEventListener('mousedown', this.canvasMousedown.bind(this))
        document.addEventListener('keypress', this.canvasKeypress.bind(this))
        window.requestAnimationFrame(this.canvasAnimation.bind(this))

    }

    //  not used yet, not tested yet
    removeListeners() {
        this.canvas.removeEventListener('mousedown', this.canvasMousedown)
        document.removeEventListener('keypress', this.canvasKeypress)
    }


    canvasAnimation(timestamp: number) {
        // if (!start) start = timestamp;
        // var progress = timestamp - start;
        // element.style.transform = 'translateX(' + Math.min(progress / 10, 200) + 'px)';
        // if (progress < 2000) {
        this.animationObservable.notifyObservers('tick', event)
        window.requestAnimationFrame(this.canvasAnimation.bind(this))
    }


    canvasKeypress(event: KeyboardEvent) {
        // console.log('in canvasKeypress event', event)
        this.kybdObservable.notifyObservers('keypress', event)
    }

    canvasMousedown(event: MouseEvent) {
        // console.log('in canvasMousedown event', event)
        this.mouseObservable.notifyObservers('mousedown', event)
    }


    /* if a mouse has landed, this retrieves the point relative to this canvas */
    getMouseXY(event: MouseEvent): V2 {

        // console.log(`canvas x=${this.canvas.width},y=${this.canvas.height}`)
        let rect = this.canvas.getBoundingClientRect() // position of canvas
        let canvasX = event.pageX - rect.left  // now relative within canvas
        let canvasY = event.pageY - rect.top
        // console.log(`mouse x=${canvasX},y=${canvasY}`)

        // event.offset is more accurate, but not always available
        if (event.offsetX) {    // for webkit browser like safari and chrome
            canvasX = event.offsetX
            canvasY = event.offsetY
            // console.log(`event offset x=${canvasX},y=${canvasY}`)
        }

        return new V2([canvasX, canvasY])

    }


    clearCanvas() {
        this.ctx.fillStyle = BKGND
        this.ctx.setTransform(1, 0, 0, 1, 0, 0)
        // clearRect is like fillRect, but sets transparent black pxls.  also faster.
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        // fillRect obays the BKGND color
        //this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
    }






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
        // console.log('fillStyle',style.fillStyle)

        // if (style['text-anchor'])
        //     this.ctx.textAlign = style['text-anchor']
        // if (style['fill-opacity'])
        //     this.ctx.globalAlpha = style['fill-opacity']

        this.ctx.fill()
        return this
    }

    /** Create a polygon path for a CANVAS rendering */
    path(points: V4[]) {
        this.ctx.beginPath()


        for (let i = 0, j = 0, len = points.length; j < len; i = ++j) {
            let p = points[i];

            // tom's kluge for now /////////////////////
            // scale points by 10, and move them to 50,50

            if (i === 0) {
                this.ctx.moveTo(p.x * 50 + 50, p.y * 50 + 50);
                console.log('moveTo', p.x * 50 + 50, p.y * 50 + 50)
            } else {
                this.ctx.lineTo(p.x * 50 + 50, p.y * 50 + 50);
                console.log('lineTo', p.x * 50 + 50, p.y * 50 + 50)
            }
        }
        this.ctx.closePath()
        return this
    }

    fillRect(x: number, y: number, width: number, height: number) {
        console.log('fillRect', x * 50 + 50, y * 50 + 50, width, height)
        this.ctx.fillRect(x * 50 + 50, y * 50 + 50, width, height)
        return this
    }
    fillStyle(colour: string) {
        this.ctx.fillStyle = colour
        return this
    }


    circle(center: V4, radius: number) {
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



    ///////////////////////////////////////////////////////
    //////// next functions write pixels to canvas 
    ///////////////////////////////////////////////////////

    setPixelColor(x: number, y: number, color: Color) {  // writes 32-bit value
        let index = (y * this.width + x) * 4  // note  * 4  because four bytes per

        // console.log('color',color.r, color.b, color.g)
        this.data8[index] = color.r      // red
        this.data8[++index] = color.g      // green
        this.data8[++index] = color.b      // blue
        this.data8[++index] = color.a      // alpha
    }
    setPixelRBG(x: number, y: number, R: number, B: number, G: number, A: number = 0xFF) {
        let index = (y * this.width + x) * 4  // note  *4  because four bytes per
        // console.log('rgb',R, B, G)

        this.data8[index] = R;      // red
        this.data8[++index] = G;    // green
        this.data8[++index] = B;    // blue
        this.data8[++index] = A;    // alpha
    }
    clearDisplay() {
        this.imageData = this.ctx.createImageData(this.width, this.height);  // reset to empty
        this.data8 = new Uint8ClampedArray(this.imageData.data.length);
    }
    updateDisplay() {
        // update the screen from the 8-bit buffer
        this.imageData.data.set(this.data8);
        this.ctx.putImageData(this.imageData, 0, 0);
        // note that the buffer has not been cleared

    }



    demoImageData(color: number) {

        this.imageData = this.ctx.getImageData(0, 0, this.width, this.height);

        // let data = imageData.data;

        // for (var y = 0; y < this.height; ++y) {
        //     for (var x = 0; x < this.width; ++x) {
        //         var index = (y * this.width + x) * 4  // NOTE - * 4

        //         var value = x * y & 0xff;

        //         data[index] = value;      // red
        //         data[++index] = value;    // green
        //         data[++index] = value;    // blue
        //         data[++index] = 255;      // alpha
        //     }
        // }

        // this.ctx.putImageData(imageData, 0, 0);


        // let buf = new ArrayBuffer(imageData.data.length);
        // let buf8 = new Uint8ClampedArray(buf);
        // let data = new Uint32Array(buf);

        // for (let y = 0; y < this.height; ++y) {
        //     for (let x = 0; x < this.width; ++x) {

        //         let value = x * y & color

        //         // write to the 32-bit buffer
        //         data[y * this.width + x] =
        //              (255 << 24) |    // alpha  - 255 is fully opaque
        //          //   (value << 16) |    // blue
        //          //   (value << 8) |    // green
        //             value             // red
        //     }
        // }

        // // update the screen from the 8-bit buffer
        // imageData.data.set(buf8);
        // this.ctx.putImageData(imageData, 0, 0);
    }
}




