/* 
* @Author: Mike Reich
* @Date:   2015-11-17 13:22:29
* @Last Modified 2015-11-17
*/


var App = require('./lib/Application').default

var app = new App()

// app.on('init').then(this._gatherRoutes);

// _gatherRoutes () => {

// }



// app.get('router').send('route').with("/", this._handleRequest)

// app.get('router').on('request').then((req, res) => {

// })

// app.get('router').emit('request').with()



app.on('init').then((text) => console.log('inited', text));

app.emit('init').with('some value');

app.get('router').send('route').with("/", (req, res) => {console.log('routing handler called')})

app.get('router').gather('route').each((path, callback) => {
  console.log('registering route', path)
}).then(() => {
  console.log('starting server')
})

app.emit('loaded.after').with()