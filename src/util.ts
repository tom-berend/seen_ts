import { Transformable } from "./transformable";

// //// Util
// //////// Utility methods
// ------------------

var NEXT_UNIQUE_ID = 1 // An auto-incremented value

export class Util {
  constructor(){}

  // Copies default values. First, overwrite undefined attributes of `obj` from
  // `opts`. Second, overwrite undefined attributes of `obj` from `defaults`.
  static defaults(obj:any, opts:any, defaults:any) {   // TODO: find proper types
    var prop, results;
    for (prop in opts) {
      if (obj[prop] == null) {
        obj[prop] = opts[prop];
      }
    }
    results = [];
    for (prop in defaults) {
      if (obj[prop] == null) {
        results.push(obj[prop] = defaults[prop]);
      } else {
        results.push(void 0);
      }
    }
    return results;
  }

  /** Returns an ID which is unique to this instance of the library */  // TODO: change to type 'symbol'?
  static uniqueId (prefix:string ='x'):string {
    return (prefix + NEXT_UNIQUE_ID++);
  }

  // Accept a DOM element or a string. If a string is provided, we assume it is
  // the id of an element, which we return.
  static element (elementOrString:HTMLCanvasElement|string) {
      if (typeof elementOrString === 'string') {
        return document.getElementById(elementOrString) as HTMLCanvasElement;
      } else {
        return elementOrString;
      }
    }
  }

