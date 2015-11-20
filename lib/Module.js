/* 
* @Author: mike
* @Date:   2015-11-17 13:22:40
* @Last Modified 2015-11-18
* @Last Modified time: 2015-11-18 14:06:56
*/

'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Dispatcher2 = require('./Dispatcher');

var _Dispatcher3 = _interopRequireDefault(_Dispatcher2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Module = (function (_Dispatcher) {
  _inherits(Module, _Dispatcher);

  function Module(app, name) {
    _classCallCheck(this, Module);

    var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(Module).call(this));

    _this3._name = name;
    _this3._app = app;
    _this3._awaits = {};
    _this3._appLoaded = false;
    app.on('loaded.after').then(_this3._setLoaded);
    return _this3;
  }

  _createClass(Module, [{
    key: '_setLoaded',
    value: function _setLoaded() {
      this._appLoaded = true;
    }
  }, {
    key: 'gather',
    value: function gather(name) {
      var _this = this;

      var each = function each(cb) {
        console.log('each called');
        return new Promise(function (resolve, reject) {
          if (_this._appLoaded) {
            _this._awaits[name].forEach(cb);
            resolve();
          } else {
            _this._app.on('loaded.after').then(function () {
              _this._awaits[name].forEach(cb);
              resolve();
            });
          }
        });
      };
      return {
        each: each
      };
    }
  }, {
    key: 'send',
    value: function send(name) {
      var _this2 = this;

      var cb = function cb() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        if (!_this2._awaits[name]) _this2._awaits[name] = [];
        _this2._awaits[name].push(args);
      };
      return {
        with: cb
      };
    }
  }]);

  return Module;
})(_Dispatcher3.default);

exports.default = Module;