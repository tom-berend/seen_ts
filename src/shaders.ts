import { Light } from "./light";
import { RenderModel } from "./render/rendermodel";
import { Material } from "./materials";
import { Point, POINT_Z } from './point'
import { Color } from "./color";

// //// Shaders
// ------------------

const EYE_NORMAL = POINT_Z

// These shading functions compute the shading for a surface. To reduce code
// duplication, we aggregate them in a utils object.
class ShaderUtils {
    static applyDiffuse(c: Color, light: Light, lightNormal: Point, surfaceNormal: Point, material: Material) {
        let dot = lightNormal.dot(surfaceNormal)

        if (dot > 0) {
            // Apply diffuse phong shading
            c.addChannels(light.colorIntensity.copy().scale(dot))
        }
    }


    static applyDiffuseAndSpecular(c: Color, light: Light, lightNormal: Point, surfaceNormal: Point, material: Material) {
        let dot = lightNormal.dot(surfaceNormal)

        if (dot > 0) {
            // Apply diffuse phong shading
            c.addChannels(light.colorIntensity.copy().scale(dot))

            // Compute and apply specular phong shading
            let reflectionNormal = surfaceNormal.copy().multiply(dot * 2).subtract(lightNormal)
            let specularIntensity = Math.pow(0.5 + reflectionNormal.dot(EYE_NORMAL), material.specularExponent)
            let specularColor = material.specularColor.copy().scale(specularIntensity * light.intensity / 255.0)
            c.addChannels(specularColor)
        }
    }


    static applyAmbient(c: Color, light: Light) {
        // Apply ambient shading
        c.addChannels(light.colorIntensity)
    }
}

// The `Shader` class is the base class for all shader objects.
export abstract class Shader {
    public lights: Light
    public renderModel: RenderModel
    public material: Material

    /** Every `Shader` implementation must override the `shade` method.
    
    `lights` is an object containing the ambient, point, and directional light sources.
    `renderModel` is an instance of `RenderModel` and contains the transformed and projected surface data.
    `material` is an instance of `Material` and contains the color and other attributes for determining how light reflects off the surface.*/

    shade(lights: Light[], renderModel: RenderModel, material: Material): Color {
        return new Color()
    }

    // shade(lights:Light,rendermodel:RenderModel,material:Material): Color {
    //   this.lights = lights
    //   this.renderModel = rendermodel
    //   this.material = material
    //   return(new Color())
    // }

    //shade: (lights, renderModel, material) -> // Override this

}


// The `Phong` shader implements the Phong shading model with a diffuse,
// specular, and ambient term.
//
// See https://en.wikipedia.org/wiki/Phong_reflection_model for more information
export class Phong extends Shader {
    shade(lights: Light[], renderModel: RenderModel, material: Material): Color {
        let c = new Color()

        lights.forEach((light: Light) => {
            switch (light.type) {
                case 'point':
                    let lightNormal = light.point.copy().subtract(renderModel.barycenter).normalize()
                    ShaderUtils.applyDiffuseAndSpecular(c, light, lightNormal, renderModel.normal, material)
                    break
                case 'directional':
                    ShaderUtils.applyDiffuseAndSpecular(c, light, light.normal, renderModel.normal, material)
                    break
                case 'ambient':
                    ShaderUtils.applyAmbient(c, light)
                    break;
                default:
                    console.assert(false, `should never get here, light.type was ${light.type}`)
            }
        })

        c.multiplyChannels(material.color)

        if (material.metallic) {
            c.minChannels(material.specularColor)
        }
        c.clamp(0, 0xFF)
        return c
    }
}
// The `DiffusePhong` shader implements the Phong shading model with a diffuse
// and ambient term (no specular).
class DiffusePhong extends Shader {
    shade(lights: Light[], renderModel: RenderModel, material: Material): Color {
        let c = new Color()

        lights.forEach((light: Light) => {
            switch (light.type) {
                case 'point':
                    let lightNormal = light.point.copy().subtract(renderModel.barycenter).normalize()
                    ShaderUtils.applyDiffuse(c, light, lightNormal, renderModel.normal, material)
                case 'directional':
                    ShaderUtils.applyDiffuse(c, light, light.normal, renderModel.normal, material)
                case 'ambient':
                    ShaderUtils.applyAmbient(c, light)
            }
            c.multiplyChannels(material.color).clamp(0, 0xFF)

        })
        return c
    }
}

// The `Ambient` shader colors surfaces from ambient light only.
class Ambient extends Shader {

    shade(lights: Light[], renderModel: RenderModel, material: Material): Color {
        let c = new Color()

        lights.forEach((light: Light) => {
            switch (light.type) {
                case 'ambient':
                    ShaderUtils.applyAmbient(c, light)
                    break
            }
            c.multiplyChannels(material.color).clamp(0, 0xFF)
        })
        return c
    }
}

// The `Flat` shader colors surfaces with the material color, disregarding all
// light sources.
class Flat extends Shader {
    shade(lights: Light[], renderModel: RenderModel, material: Material): Color {
        return material.color
    }
}

// tom: this should be a type declaration to give the shaker a chance
export class Shaders {
    static phong: Phong = new Phong()
    static diffuse = new DiffusePhong()
    static ambient = new Ambient()
    static flat = new Flat()
}
