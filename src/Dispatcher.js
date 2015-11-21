/* 
* @Author: mike
* @Date:   2015-11-17 13:22:24
* @Last Modified 2015-11-20
* @Last Modified time: 2015-11-20 17:29:31
*/

'use strict';

import { EventEmitter } from 'events'

export default class Dispatcher extends EventEmitter {
  constructor() {
    super()
  }

  on(event) {
    let superOn = super.on
    return new Promise((resolve, reject) => {
      superOn.apply(this, [event, resolve])
    })
  }

  emit(event) {
    var cb = (...args) => {
      args.unshift(event);
      super.emit.apply(this, args);
    }
    return {
      with: cb
    }
  }

  // emit(event) {
  //   var cb = (...args) => {
  //     args.unshift(event);
  //     try {
  //       if (arguments[0] == "newListener") return super.emit.apply(this, arguments)

  //       var args = Array.prototype.slice.call(arguments)
  //       var beforeArgs = Array.prototype.slice.call(arguments)
  //       beforeArgs[0] = beforeArgs[0]+".before"
  //       var afterArgs = Array.prototype.slice.call(arguments)
  //       afterArgs[0] = afterArgs[0]+".after"

  //       super.once.apply(this, [beforeArgs[0], ((a) => {
  //         return () => {super.emit.apply(this, a)}
  //       })(args)])

  //       super.once.apply(this, [arguments[0], ((a) => {
  //         return () => {
  //           this._registered.forEach((cb) => {
  //             cb(arguments);
  //           });
  //           super.emit.apply(this, a)
  //         }
  //       })(afterArgs)])
        
  //       super.emit.apply(this, beforeArgs)
  //     } catch (e) {
  //       var logger = console
  //       if (this.log && this.log.error) logger = this.log
  //       logger.error("Exception processing event: " + arguments[0], e.stack, e)
  //     }
  //   }
  // }

} 