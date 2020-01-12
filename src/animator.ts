import { Util } from './util'

// //// Animator
// ------------------

// // Polyfill requestAnimationFrame
// if (window)
//    requestAnimationFrame =
//       window.requestAnimationFrame  ||
//       window.mozRequestAnimationFrame  ||
//       window.webkitRequestAnimationFrame  ||
//       window.msRequestAnimationFrame

const DEFAULT_FRAME_DELAY = 30 // msec



// The animator class is useful for creating an animation loop. We supply pre
// and post events for apply animation changes between frames.
class Animator {
    public _running: boolean = false
    public frameDelay: number = 0
    public _lastTime: number = 0
    public _timestamp = 0
    public _lastTimestamp = 0
    public dispatch: any
    public on: any
    public _delayCompensation: number
    public _msecDelay: number = 0

    constructor() {
        // TODO: bring PAON in /w events
        //    this.dispatch   = Events.dispatch('beforeFrame', 'afterFrame', 'frame')
        this.on = this.dispatch.on
        this._timestamp = 0
        this._running = false
        this.frameDelay = null
    }

    // Start the animation loop.
    start() {
        this._running = true

        if (this.frameDelay) {
            this._lastTime = new Date().valueOf()
            this._delayCompensation = 0
        }
        this.animateFrame()
        return this
    }

    // Stop the animation loop.
    stop() {
        this._running = false
        return this
    }

    // Use requestAnimationFrame if available and we have no explicit frameDelay.
    // Otherwise, use a delay-compensated timeout.
    animateFrame() {
        if (requestAnimationFrame && !this.frameDelay)
            requestAnimationFrame(this.frame)
        else {
            // Perform frame delay compensation to make sure each frame is rendered at
            // the right time. This makes some animations more consistent
            let delta = new Date().valueOf() - this._lastTime
            this._lastTime += delta
            this._delayCompensation += delta

            let frameDelay: number = this.frameDelay ? this.frameDelay : DEFAULT_FRAME_DELAY
            setTimeout(this.frame, frameDelay - this._delayCompensation)
        }
        return this
    }

    // The main animation frame method
    frame(t: number) {
        if (!this._running)
            return this

        // create timestamp param even if requestAnimationFrame isn't available
        this._timestamp = t > 0 ? t : this._timestamp + (this._msecDelay > 0 ? this._msecDelay : DEFAULT_FRAME_DELAY)
        let deltaTimestamp = this._lastTimestamp ? this._timestamp - this._lastTimestamp : this._timestamp

        this.dispatch.beforeFrame(this._timestamp, deltaTimestamp)
        this.dispatch.frame(this._timestamp, deltaTimestamp)
        this.dispatch.afterFrame(this._timestamp, deltaTimestamp)

        this._lastTimestamp = this._timestamp

        this.animateFrame()
        return this
    }


    // Add a callback that will be invoked before the frame
    onBefore(handler: any) {
        //this.on "beforeFrame.//{seen.Util.uniqueId('animator-')}", handler
        console.log("missing onBefore Handler")
        return this
    }
    // Add a callback that will be invoked after the frame
    onAfter(handler: any) {
        // this.on "afterFrame.//{seen.Util.uniqueId('animator-')}", handler
        console.log("missing onAfter Handler")

        return this
    }
    // Add a frame callback
    onFrame(handler: any) {
        // this.on "frame.//{seen.Util.uniqueId('animator-')}", handler
        console.log("missing onFrame Handler")

        return this
    }
}

// A seen.Animator for rendering the seen.Context
export class RenderAnimator extends Animator {
    constructor(context: any) {
        super()
        this.onFrame(context.render)
    }
}

// A transition object to manage to animation of shapes
class Transition {
    public duration = 100 // The duration of this transition in msec
    public defaults: any[] = []
    public t = 0
    public startT = 0
    public tFrac = 0

    constructor(options: object = {}) {
        Util.defaults(this, options, this.defaults)
    }
    update(t: number) {
        // Setup the first frame before the tick increment
        if (!this.t) {
            this.firstFrame()
            this.startT = t
        }

        // Execute a tick and draw a frame
        this.t = t
        this.tFrac = (this.t - this.startT) / this.duration
        this.frame()

        // Cleanup or update on last frame after tick
        if (this.tFrac >= 1.0) {
            this.lastFrame()
            return false
        }
        return true
    }

    firstFrame() { }
    frame() { }
    lastFrame() { }

}

// A seen.Animator for updating seen.Transtions. We include keyframing to make
// sure we wait for one transition to finish before starting the next one.
class TransitionAnimator extends Animator {
    public queue: any[]
    public transitions: any[]

    constructor() {
        super()
        this.queue = []
        this.transitions = []
        this.onFrame(this.update)
    }
    // Adds a transition object to the current set of transitions. Note that
    // transitions will not start until they have been enqueued by invoking
    // `keyframe()` on this object.
    add(txn: any) {
        this.transitions.push(txn)
    }

    // Enqueues the current set of transitions into the keyframe queue and sets
    // up a new set of transitions.
    keyframe() {
        this.queue.push(this.transitions)
        this.transitions = []
    }

    // When this animator updates, it invokes `update()` on all of the
    // currently animating transitions. If any of the current transitions are
    // not done, we re-enqueue them at the front. If all transitions are
    // complete, we will start animating the next set of transitions from the
    // keyframe queue on the next update.
    update(t: any) {
        console.log("update missing")
        //   return unless this.queue.length
        //   transitions = this.queue.shift()
        //   transitions = transitions.filter (transition) -> transition.update(t)
        //   if transitions.length then this.queue.unshift(transitions)
    }
}