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

  function RRadioButton() {
    _classCallCheck(this, RRadioButton);

    return _super.apply(this, arguments);
  }

  _createClass(RRadioButton, [{
    key: "getStyle",
    value: function getStyle() {
      var _this$props = this.props,
          justify = _this$props.justify,
          _this$props$style = _this$props.style,
          style = _this$props$style === void 0 ? {} : _this$props$style;
      var Style = {};

      if (justify) {
        Style.justifyContent = justify;
      }

      return { ...Style,
        ...style
      };
    }
  }, {
    key: "getItemStyle",
    value: function getItemStyle() {
      var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _this$props2 = this.props,
          _this$props2$inline = _this$props2.inline,
          inline = _this$props2$inline === void 0 ? true : _this$props2$inline,
          _this$props2$itemStyl = _this$props2.itemStyle,
          itemStyle = _this$props2$itemStyl === void 0 ? {} : _this$props2$itemStyl;
      return {
        width: inline ? 'fit-content' : '100%',
        ...itemStyle,
        ...style
      };
    }
  }, {
    key: "getOuterIconStyle",
    value: function getOuterIconStyle(color) {
      var _this$props3 = this.props,
          _this$props3$size = _this$props3.size,
          size = _this$props3$size === void 0 ? 16 : _this$props3$size,
          round = _this$props3.round;
      var style = {
        color: color,
        width: size,
        height: size
      };

      if (round === false) {
        style.borderRadius = 0;
      }

      return style;
    }
  }, {
    key: "getInnerIconStyle",
    value: function getInnerIconStyle(active, color) {
      var _this$props4 = this.props,
          gap = _this$props4.gap,
          round = _this$props4.round;
      var style = {
        background: color
      };

      if (gap !== undefined && active) {
        style.width = "calc(100% - ".concat(gap * 2, "px)");
        style.height = "calc(100% - ".concat(gap * 2, "px)");
      }

      if (round === false) {
        style.borderRadius = 0;
      }

      return style;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props5 = this.props,
          id = _this$props5.id,
          className = _this$props5.className,
          _this$props5$margin = _this$props5.margin,
          margin = _this$props5$margin === void 0 ? 6 : _this$props5$margin,
          items = _this$props5.items,
          _this$props5$value = _this$props5.value,
          value = _this$props5$value === void 0 ? true : _this$props5$value,
          onChange = _this$props5.onChange,
          rtl = _this$props5.rtl;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: 'r-radio-button' + (rtl ? ' rtl' : '') + (className ? ' ' + className : ''),
        style: this.getStyle(),
        id: id
      }, items.map(function (item, i) {
        var active = item.value === value ? ' active' : '';
        var color = item.color || _this.props.color;
        return /*#__PURE__*/_react.default.createElement(_react.Fragment, {
          key: i
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: 'r-radio-button-item' + active,
          title: item.title,
          onClick: function onClick() {
            return onChange(item.value, i);
          },
          style: _this.getItemStyle(item.style)
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: 'r-radio-button-icon' + active,
          style: _this.getOuterIconStyle(color)
        }, item.badge && /*#__PURE__*/_react.default.createElement("div", {
          className: "r-radio-button-badge"
        }, /*#__PURE__*/_react.default.createElement("div", null, item.badge)), /*#__PURE__*/_react.default.createElement("div", {
          className: "r-radio-button-icon-inner",
          style: _this.getInnerIconStyle(active, color)
        })), /*#__PURE__*/_react.default.createElement("div", {
          className: "r-radio-button-margin",
          style: {
            width: margin
          }
        }), /*#__PURE__*/_react.default.createElement("div", {
          className: "r-radio-button-text",
          style: {
            color: item.color
          }
        }, item.text)));
      }));
    }
  }]);

  return RRadioButton;
}(_react.Component);

exports.default = RRadioButton;