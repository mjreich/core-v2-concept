/* 
* @Author: Mike Reich
* @Date:   2015-11-17 13:22:33
* @Last Modified 2015-11-17
*/

'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Dispatcher2 = require('./Dispatcher');

var _Dispatcher3 = _interopRequireDefault(_Dispatcher2);

var _Module = require('./Module');

var _Module2 = _interopRequireDefault(_Module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Application = (function (_Dispatcher) {
  _inherits(Application, _Dispatcher);

  function Application(opts) {
    _classCallCheck(this, Application);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Application).call(this));

    _this.modules = {};
    return _this;
  }

  _createClass(Application, [{
    key: 'get',
    value: function get(module) {
      if (!this.modules[module]) this.modules[module] = new _Module2.default(this, module);
      return this.modules[module];
    }
  }]);

  return Application;
})(_Dispatcher3.default);

exports.default = Application;