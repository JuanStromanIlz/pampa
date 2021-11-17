"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Tag = require("./Tag");

var _jsxRuntime = require("react/jsx-runtime");

const _excluded = ["component", "type", "children", "sx"],
      _excluded2 = ["className"];

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const StyledText = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  .type900 {\n    font-weight: 900;\n    font-size: 105px;\n    line-height: 104px;\n  }\n  .type800 {\n    font-weight: 800;\n    font-size: 70px;\n    line-height: 80px;\n  }\n  .type700 {\n    font-weight: 700;\n    font-size: 42px;\n    line-height: 48px;\n  }\n  .type600 {\n    font-weight: 600;\n    font-size: 32px;\n    line-height: 40px;\n  }\n  .type500 {\n    font-weight: 500;\n    font-size: 28px;\n    line-height: 40px;\n  }\n  .type400 {\n    font-weight: 400;\n    font-size: 21px;\n    line-height: 32px;\n  }\n  .type300 {\n    font-weight: 300;\n    font-size: 16px;\n    line-height: 28px;\n  }\n  .type200 {\n    font-weight: 200;\n    font-size: 13px;\n    line-height: 28px;\n  }\n  .type100 {\n    font-weight: 100;\n    font-size: 11px;\n    line-height: 20px;\n  }\n"])));

const Field = _styledComponents.default.span(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", " & {\n    line-height: inherit;\n  }\n  ", ";\n"])), _Tag.StyledTag, p => p.sx && p.sx);

const Text = _ref => {
  let {
    component,
    type,
    children,
    sx
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  let {
    className
  } = props,
      rest = _objectWithoutProperties(props, _excluded2);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(StyledText, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Field, _objectSpread(_objectSpread({
      as: component,
      sx: sx
    }, rest), {}, {
      className: "type".concat(type, " ").concat(className || ''),
      children: children
    }))
  });
};

Text.defaultProps = {
  type: 400,
  component: 'span'
};
var _default = Text;
exports.default = _default;