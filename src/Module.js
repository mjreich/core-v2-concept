/* 
* @Author: mike
* @Date:   2015-11-17 13:22:40
* @Last Modified 2015-11-22
* @Last Modified time: 2015-11-22 12:39:04
*/

'use strict';

import Dispatcher from './Dispatcher'

export default class Module extends Dispatcher {

  constructor(app, name) {
    super()
    this._name = name
    this._app = app
    this._awaits = {}
    this._appLoaded = app.on('loaded.after')
  }

  gather(name) {
    return this._appLoaded.then(() => {
      return this._awaits[name]
    })
  }

  send(name) { 
    var cb = (...args) => {
      if(!this._awaits[name]) this._awaits[name] = []
      this._awaits[name].push(args);
    }
    return {
      with: cb
    }
  }
}