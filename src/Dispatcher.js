/* 
* @Author: mike
* @Date:   2015-11-17 13:22:24
* @Last Modified 2015-11-17
* @Last Modified time: 2015-11-17 15:37:52
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
} 