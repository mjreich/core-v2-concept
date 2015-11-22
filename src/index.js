/* 
* @Author: Mike Reich
* @Date:   2015-11-22 10:42:17
* @Last Modified 2015-11-22
*/

'use strict';

import App from './Application'

var app = new App()

// # Case 1: basic event callback with promises

app.on('init').then((text) => console.log('inited', text));

// # Case 1a: event dispatching

app.emit('init').with('some value');

// # Case 2: Gather callbacks
app.get('router').send('route').with("/", (req, res) => {console.log('routing handler called')})

// # Case 2a: Get the gathered callbacks, do something with each value, then on completion start the server

app.get('router').gather('route').each((args) => {
  var [path, handler] = args
  console.log('registering route', path)
}).then(() => {
  console.log('fake starting server 1')
})

// # Case 2b: Process all gather responses in one go

app.get('router').gather('route').all().then((arrayOfRoutes) => {
  console.log('registering all routes', arrayOfRoutes)
}).then(() => {
  console.log('fake starting server 2')
})

// Emulating a boot stage, which is coded into the Module#gather method.


app.emit('loaded').with()
