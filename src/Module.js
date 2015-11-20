/* 
* @Author: mike
* @Date:   2015-11-17 13:22:40
* @Last Modified 2015-11-18
* @Last Modified time: 2015-11-18 14:07:10
*/

'use strict';

import Dispatcher from './Dispatcher'

export default class Module extends Dispatcher {

  constructor(app, name) {
    super()
    this._name = name
    this._app = app
    this._awaits = {}
    this._appLoaded = false
    app.on('loaded.after').then(this._setLoaded)
  }

  _setLoaded() {
    this._appLoaded = true
  }

  gather(name) {
    var each = (cb) => {
      return new Promise((resolve, reject) => {
        if(this._appLoaded){
          this._awaits[name].forEach(cb)
          resolve()
        } else {
          this._app.on('loaded.after').then(() => {
            this._awaits[name].forEach(cb)
            resolve()
          }) 
        }
      })
    }
    return {
      each: each
    }
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