// //// Groups
// ------------------

import { Transformable } from './transformable';
import { Light } from './light'
import { Surface } from './surface'
import {Shape} from './shape'
import {Point} from './point'


// The object group class. It stores `Shapes`, `Lights`, and sub-Groups

// Notably, models are hierarchical, like a tree. This means you can isolate
// the transformation of groups of shapes in the scene, as well as create
// chains of transformations for creating, for example, articulated skeletons.
export class Group extends Transformable {

    public groups: Group[] = [];   // sub-groups
    public lights: Light[] = [];
    public surfaces: Surface[] = [];
    public shapes: Shape[] = []

    public barycenter: Point
    public normal:Point

    /** Add a `Shape`, `Surface`, Light`, and other `Group` */
    add(child: Shape | Surface | Group | Light) {

        if (child instanceof Light)
            this.lights.push(child)

        else if (child instanceof Group)
            this.groups.push(child)

        else if (child instanceof Surface)
            this.surfaces.push(child)

        else if (child instanceof Shape)
            this.shapes.push(child)

        else   // shouldn't get here
            throw new Error('Tried to add something strange')
    }





    // /* Remove a shape, model, or light from the model. NOTE: the scene may still
    // * contain a renderGroup in its cache. If you are adding and removing many items,
    // * consider calling `.flush()` on the scene to flush its renderGroup cache. */
    // remove : (childs...) ->
    //   for child in childs
    //     while (i = this.children.indexOf(child)) >= 0
    //       this.children.splice(i,1)
    //     while (i = this.lights.indexOf(child)) >= 0
    //       this.lights.splice(i,1)

    // // Create a new child model and return it.
    // append: () ->
    //   model = new seen.Group
    //   this.add model
    //   return model


    // // Visit each `Shape` in this `Group` and all recursive child `Group`s.
    // eachShape (f){
    //   for child in this.children
    //     if child instanceof seen.Shape
    //       f.call(this., child)
    //     if child instanceof seen.Group
    //       child.eachShape(f)


    //}
}