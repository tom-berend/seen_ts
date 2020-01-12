import { V2 } from './vectorMath'
import { Observable } from './paon'

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

export class Canvas {
    public canvas: HTMLCanvasElement
    public ctx: CanvasRenderingContext2D

    public height: number
    public width: number

    public x: number = 0

    // use mouseObservable to share BOTH kybd and mouse events with subclasses
    public mouseObservable: Observable // Observer Pattern component
    public kybdObservable: Observable
    public animationObservable: Observable

    constructor(canvasTag: string) {
        console.log(`in Canvas construtor for tag '${canvasTag}'`)

        this.canvas = document.getElementById(canvasTag) as HTMLCanvasElement
        this.ctx = this.canvas.getContext('2d')

        //    // find out more about the canvas...

        let containerX = document.getElementById('container').offsetLeft
        let containerY = document.getElementById('container').offsetTop
        // console.log(`container offset x=${containerX},y=${containerY}`)

        // some devices might scale, so scaleX/Y will not be close to 1
        let rect = this.canvas.getBoundingClientRect() // position of canvas

        this.width = this.canvas.width
        this.height = this.canvas.height

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


    canvasAnimation(timestamp:number) {
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
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height) // clear canvas
    }
}




