"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./index.css");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var RRadioButton = /*#__PURE__*/function (_Component) {
  _inherits(RRadioButton, _Component);

  var _super = _createSuper(RRadioButton);

  function RRadioButton(props) {
    var _this;

    _classCallCheck(this, RRadioButton);

    _this = _super.call(this, props);
    _this.state = {
      items: [{
        text: 'mohammad',
        value: 'm'
      }, {
        text: 'abbas',
        value: 'a'
      }],
      value: 'a'
    };
    return _this;
  }

  _createClass(RRadioButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          className = _this$props.className,
          style = _this$props.style,
          _this$props$margin = _this$props.margin,
          margin = _this$props$margin === void 0 ? 6 : _this$props$margin,
          items = _this$props.items,
          value = _this$props.value,
          _this$props$type = _this$props.type,
          type = _this$props$type === void 0 ? 'horizontal' : _this$props$type,
          _this$props$color = _this$props.color,
          color = _this$props$color === void 0 ? 'orange' : _this$props$color,
          _this$props$size = _this$props.size,
          size = _this$props$size === void 0 ? 20 : _this$props$size,
          _this$props$space = _this$props.space,
          space = _this$props$space === void 0 ? 12 : _this$props$space,
          onChange = _this$props.onChange,
          rtl = _this$props.rtl;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: 'r-radio-button' + (type === 'vertical' ? ' vertical' : ' horizontal') + (rtl ? ' rtl' : '') + (className ? ' ' + className : ''),
        style: style,
        id: id
      }, items.map(function (item, i) {
        var active = item.value === value;
        return /*#__PURE__*/_react.default.createElement(_react.Fragment, {
          key: i
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "r-radio-button-item",
          onClick: function onClick() {
            return onChange(item.value);
          }
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "r-radio-button-icon",
          style: {
            color: color,
            width: size,
            height: size
          }
        }, active && /*#__PURE__*/_react.default.createElement("div", {
          style: {
            background: color,
            width: size - 4,
            height: size - 4
          }
        })), /*#__PURE__*/_react.default.createElement("div", {
          className: "r-radio-button-margin",
          style: {
            width: margin
          }
        }), /*#__PURE__*/_react.default.createElement("div", {
          className: "r-radio-button-text"
        }, item.text)), i < items.length - 1 && /*#__PURE__*/_react.default.createElement("div", {
          className: "r-radio-button-space",
          style: _defineProperty({}, type === 'horizontal' ? 'width' : 'height', space)
        }));
      }));
    }
  }]);

  return RRadioButton;
}(_react.Component);

exports.default = RRadioButton;