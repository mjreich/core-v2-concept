/* 
* @Author: mike
* @Date:   2015-11-17 13:22:24
* @Last Modified 2015-11-22
* @Last Modified time: 2015-11-22 12:58:44
*/

'use strict';

import { EventEmitter } from 'events'

export default class Dispatcher extends EventEmitter {
  constructor() {
    super()
    this._awaits = []
  }

  await (event, promise) {
    if(!this._awaits[event]) this._awaits[event] = []
    this._awaits[event].push(Promise.resolve(promise)); 
  }

  on (event) {
    let superOn = super.on
    return new Promise((resolve, reject) => {
      superOn.apply(this, [event, resolve])
    })
  }

  emit (event) {
    var cb = (...args) => {

      let _handlers = [].concat(super.listeners(event+".before")).concat(super.listeners(event)).concat(super.listeners(event+".after"));
      let _awaits = [].concat(this._awaits[event+".before"]).concat(this._awaits[event]).concat(this._awaits[event+".after"]);

      return Promise.all(_handlers.map((handler) => {
        let ret = handler(...args)
        return Promise.resolve(ret)
      }).concat(_awaits));
    }

    return {
      with: cb
    }
  }
} 