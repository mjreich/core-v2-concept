/* 
* @Author: mike
* @Date:   2015-11-17 13:22:24
* @Last Modified 2015-11-22
* @Last Modified time: 2015-11-22 12:20:54
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

      let _handlers = []

      _handlers = _handlers.concat(super.listeners(event+".before")).concat(super.listeners(event)).concat(super.listeners(event+".after"));
      return Promise.all(_handlers.map((handler) => {
        let ret = handler(...args)
        return Promise.resolve(ret)
      }))
    }

    return {
      with: cb
    }
  }

  // emit(event) {
  //   var cb = (...args) => {
  //     args.unshift(event);
      
  //     if (args[0] == "newListener") return super.emit.apply(this, args)
  //     var beforeArgs = Array.prototype.slice.call(args)
  //     beforeArgs[0] = beforeArgs[0]+".before"
  //     var afterArgs = Array.prototype.slice.call(args)
  //     afterArgs[0] = afterArgs[0]+".after"
      
  //     super.once.apply(this, [beforeArgs[0], () => super.emit.apply(this, args)])

  //     super.once.apply(this, [args[0], () => super.emit.apply(this, afterArgs)])
      
  //     super.emit.apply(this, beforeArgs)
  //   }
  //   return {
  //     with: cb
  //   }
  // }

} 