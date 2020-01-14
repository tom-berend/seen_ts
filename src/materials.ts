

// //// Materials
// //////// Surface material properties
// ------------------
import { Util } from './util'
import { Color } from './color'
import { Light } from './light'
import { Shader } from './shaders'





// `Material` objects hold the attributes that describe the color and finish of a surface.
export class Material {

    // The base color of the material.
    public color: any;

    // The `metallic` attribute determines how the specular highlights are
    // calculated. Normally, specular highlights are the color of the light
    // source. If metallic is true, specular highlight colors are determined
    // from the `specularColor` attribute.
    public metallic = false

    // The color used for specular highlights when `metallic` is true.
    public specularColor = new Color().white()

    // The `specularExponent` determines how "shiny" the material is. A low
    // exponent will create a low-intesity, diffuse specular shine. A high
    // exponent will create an intense, point-like specular shine.
    public specularExponent = 15

    // A `Shader` object may be supplied to override the shader used for this
    // material. For example, if you want to apply a flat color to text or
    // other shapes, set this value to `seen.Shaders.Flat`.
    public shader: any = null  // TODO:

    public defaults: any;
    constructor(color: Color | string, options = {}) {
        this.color = 'gray' //Colors.gray()
        Util.defaults(this, options, this.defaults)
    }


    create(value: Material | Color | string) {
        if (value instanceof Material)
            return value
        else if (value instanceof Color)
            return new Material(value)
        else if (typeof (value) == 'string') {
            this.color = new Color(value); //.parse(value))   
            return this
        }
        else
            return this  // create() returns a Material object 
    }


    // Apply the shader's shading to this material, with the option to override
    // the shader with the material's shader (if defined).
    render(lights: Light[], shader: Shader, renderData: any) {
        let color = shader.shade(lights, renderData, this)
        color.a = this.color.a
        return color
    }
}
