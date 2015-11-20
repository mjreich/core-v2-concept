/* 
* @Author: mike
* @Date:   2015-11-17 13:22:24
* @Last Modified 2015-11-17
* @Last Modified time: 2015-11-17 15:37:52
*/

'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = require('events');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dispatcher = (function (_EventEmitter) {
  _inherits(Dispatcher, _EventEmitter);

  function Dispatcher() {
    _classCallCheck(this, Dispatcher);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Dispatcher).call(this));
  }

  _createClass(Dispatcher, [{
    key: 'on',
    value: function on(event) {
      var _this = this;

      var superOn = _get(Object.getPrototypeOf(Dispatcher.prototype), 'on', this);
      return new Promise(function (resolve, reject) {
        superOn.apply(_this, [event, resolve]);
      });
    }
  }, {
    key: 'emit',
    value: function emit(event) {
      var _this4 = this;

      var _this2 = this;

      var cb = function cb() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        args.unshift(event);
        _get(Object.getPrototypeOf(Dispatcher.prototype), 'emit', _this4).apply(_this2, args);
      };
      return {
        with: cb
      };
    }
  }]);

  return Dispatcher;
})(_events.EventEmitter);

exports.default = Dispatcher;