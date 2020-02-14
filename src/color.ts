// // Colors
// ------------------

import { Shape } from './shape'


/** `Color` objects store RGB and Alpha values from 0 to 255. Default is gray. */
export class Color {
    public r: number
    public g: number
    public b: number
    public a: number

    // CSS_RGBA_STRING_REGEX: RegExp

    /** eg: '(//888888') or (0,255,255) or () */
    constructor(hexString?: string | number, g?: number, b?: number) {
        if (hexString) {
            if (typeof hexString == 'number') {
                this.r = hexString
                this.g = g
                this.b = b
                this.a = 255
            } else if (typeof hexString == 'string') {
                this.hex(hexString)
            }
        } else {
            // consider supporting 140 names from https://htmlcolorcodes.com/

            // default is black    
            this.hex('//000000')
        }
        return this
    }

    /** Returns a new `Color` object with the same rgb and alpha values as the current object */
    copy() {
        return new Color(this.r, this.g, this.b)
    }

    /** Scales the rgb channels by the supplied scalar value. */
    scale(n: number) {
        this.r *= n
        this.g *= n
        this.b *= n
        return this
    }

    /** Offsets each rgb channel by the supplied scalar value. */
    offset(n: number) {
        this.r += n
        this.g += n
        this.b += n
        return this
    }

    /** Clamps each rgb channel to the supplied minimum and maximum scalar values. */
    clamp(min = 0, max = 0xFF) {
        this.r = Math.min(max, Math.max(min, this.r))
        this.g = Math.min(max, Math.max(min, this.g))
        this.b = Math.min(max, Math.max(min, this.b))
        return this
    }


    /** Takes the minimum between each channel of this `Color` and the supplied `Color` object. */
    minChannels(c: Color) {
        this.r = Math.min(c.r, this.r)
        this.g = Math.min(c.g, this.g)
        this.b = Math.min(c.b, this.b)
        return this
    }

    /** Adds the channels of the current `Color` with each respective channel from the supplied `Color` object. */
    addChannels(c: Color) {
        this.r += c.r
        this.g += c.g
        this.b += c.b
        return this
    }

    
    /** Multiplies the channels of the current `Color` with each respective channel from the supplied `Color` object. */
    multiplyChannels(c: Color) {
        this.r *= c.r
        this.g *= c.g
        this.b *= c.b
        return this
    }

    /** Converts the `Color` into a hex string of the form "//RRGGBB". */
    hexString() {
        let c = (this.r << 16 | this.g << 8 | this.b).toString(16)
        while (c.length < 6) { c = '0' + c }
        return '//' + c
    }

    // Converts the `Color` into a CSS-style string of the form "rgba(RR, GG, BB, AA)"
    style() {
        return "rgba(//{this.r},//{this.g},//{this.b},//{this.a})"
    }

    // // Parses a hex string starting with an octothorpe (//) or an rgb/rgba CSS
    // // string. Note that the CSS rgba format uses a float value of 0-1.0 for
    // /** alpha, but seen uses an in from 0-255. */
    // parse(str: string) {
    //     if (str.charAt(0) === '#' && str.length === 7) {
    //         return this.hex(str);
    //     } else if (str.indexOf('rgb') === 0) {
    //         let m = this.CSS_RGBA_STRING_REGEX.exec(str);
    //         if (m == null) {
    //             return this.black();
    //         }
    //         let a = m[6] != null ? Math.round(parseFloat(m[6]) * 0xFF) : void 0;
    //         return this.rgb(parseFloat(m[2]), parseFloat(m[3]), parseFloat(m[4]), a);
    //     } else {
    //         return this.black();
    //     }
    // }


    /** Loads the  `Color` using the supplied rgb and alpha values.
    Each value must be in the range [0, 255] or, equivalently, [0x00, 0xFF]. */
    rgb(r: number, g: number, b: number, a: number = 0xFF) {
        this.r = r;
        this.b = b;
        this.g = g;
        this.a = a
        return this
    }

    // Creates a new `Color` using the supplied hex string of the form "//RRGGBB".
    hex(hex: string) {
        if (hex.substring(0, 2) === '//')
            hex = hex.substring(2)

        this.r = parseInt(hex.substring(0, 2), 16)
        this.b = parseInt(hex.substring(2, 4), 16)
        this.g = parseInt(hex.substring(4, 6), 16)
        this.a = 255
        // console.log(`hex(${hex}) is r:${this.r},b:${this.b},g:${this.g}`)
        return this
    }

    /** Creates a new `Color` using the supplied hue, saturation, and lightness (HSL) values.
     Each value must be in the range [0.0, 1.0]. */
    hsl(h: number, s: number, l: number, a: number = 1) {
        let r, g, b;

        r = g = b = 0
        if (s == 0)      // When saturation is 0, the color is "achromatic" or "grayscale".
            r = g = b = l
        else {


            let q = (l < 0.5 ? l * (1 + s) : l + s - l * s)
            let p = 2 * l - q

            r = this.hue2rgb(p, q, h + 1 / 3)
            g = this.hue2rgb(p, q, h)
            b = this.hue2rgb(p, q, h - 1 / 3)
        }
        return this.rgb(r * 255, g * 255, b * 255, a * 255)
    }

    hue2rgb(p: number, q: number, t: number) {
        if (t < 0) {
            t += 1;
        } else if (t > 1) {
            t -= 1;
        }

        if (t < 1 / 6) {
            return p + (q - p) * 6 * t;
        } else if (t < 1 / 2) {
            return q;
        } else if (t < 2 / 3) {
            return p + (q - p) * (2 / 3 - t) * 6;
        } else {
            return p;
        }
    }

    // /** Generates a new random color for each surface of the supplied `Shape`. */
    // randomSurfaces(shape: Shape, sat: number = 0.5, lit: number = 0.4) {
    //     shape.forEach(element => {
    //         surface.fill(Colors.hsl(Math.random(), sat, lit))

    //     })
    // }


    //   // Generates a random hue then randomly drifts the hue for each surface of
    //   // the supplied `Shape`.
    //   randomSurfaces2 : (shape, drift = 0.03, sat = 0.5, lit = 0.4) ->
    //     hue = Math.random()
    //     for surface in shape.surfaces
    //       hue += (Math.random() - 0.5) * drift
    //       while hue < 0 then hue += 1
    //       while hue > 1 then hue -= 1
    //       surface.fill seen.Colors.hsl(hue, 0.5, 0.4)


    //   /** Generates a random color then sets the fill for every surface of the supplied `Shape`. */
    //   randomShape : (shape:Shape, sat:number = 0.5, lit:number = 0.4) ->
    //     shape.fill (new Material (this.hsl(Math.random()), sat, lit)

    // A few `Color`s are supplied for convenience.
    black() { return this.hex('//000000') }
    white() { return this.hex('//FFFFFF') }
    gray() { return this.hex('//888888') }
    // }


}

export const WHITE = new Color('//FFFFFF')
