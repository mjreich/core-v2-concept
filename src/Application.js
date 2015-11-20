/* 
* @Author: Mike Reich
* @Date:   2015-11-17 13:22:33
* @Last Modified 2015-11-17
*/

'use strict';

import Dispatcher from './Dispatcher'
import Module from './Module'

class Application extends Dispatcher {
  constructor(opts) {
    super()
    this.modules = {}
  }

  get(module) {
    if(!this.modules[module]) this.modules[module] = new Module(this, module)
    return this.modules[module]
  }
}

export default Application