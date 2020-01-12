// //// Models
// ------------------

import {Transformable} from './transformable';
import {Light} from './light'
import {Surface} from './surface'


// The object model class. It stores `Shapes` and `Lights`
// TODO: move lights to somewhere else

// Notably, models are hierarchical, like a tree. This means you can isolate
// the transformation of groups of shapes in the scene, as well as create
// chains of transformations for creating, for example, articulated skeletons.
export class Model extends Transformable{

  public shape:Transformable
  public models:Model[] = [];
  public lights:Light[] = [];
  public surfaces:Surface[] = [];
  constructor(shape:Transformable){
    super()
    this.shape = shape;
  }


  /** Add a `Shape`, `Light`, and other `Model` as a child of this `Model`
   *Any number of children can by supplied as arguments.   */
   addChild(child:Surface|Model|Light) {
      
    if (child instanceof Light) {
      this.lights.push(child)
        }
  else if (child instanceof Model){
    this.models.push(child)

  } else{  // must be a surface
    this.surfaces.push(child)
  }
  return this
}


  // /* Remove a shape, model, or light from the model. NOTE: the scene may still
  // * contain a renderModel in its cache. If you are adding and removing many items,
  // * consider calling `.flush()` on the scene to flush its renderModel cache. */
  // remove : (childs...) ->
  //   for child in childs
  //     while (i = this.children.indexOf(child)) >= 0
  //       this.children.splice(i,1)
  //     while (i = this.lights.indexOf(child)) >= 0
  //       this.lights.splice(i,1)

  // // Create a new child model and return it.
  // append: () ->
  //   model = new seen.Model
  //   this.add model
  //   return model


  // // Visit each `Shape` in this `Model` and all recursive child `Model`s.
  // eachShape (f){
  //   for child in this.children
  //     if child instanceof seen.Shape
  //       f.call(this., child)
  //     if child instanceof seen.Model
  //       child.eachShape(f)


//}
}