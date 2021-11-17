"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _jsxRuntime = require("react/jsx-runtime");

const _excluded = ["children", "variant", "filled", "sx"],
      _excluded2 = ["children", "sx"];

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const StyledButton = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  border-radius: 32px;\n  button {\n    cursor: pointer;\n    transition: all .15s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n    border-radius: 32px;\n    color: ", ";\n    border: 1px solid ", ";\n    background-color: #fff;\n    padding: 10px 25px;\n    display: flex;\n    align-items: center;\n    max-width: 240px;\n    width: fit-content;\n    span {\n      display: block;\n      margin: auto;\n      text-align: center;\n      font-size: 17px;\n      letter-spacing: -0.3px;\n      font-weight: 700;\n    }\n    :disabled {\n      opacity: .7;\n      pointer-events: none;\n    }\n    ", ";\n  }\n  .filled--button {\n    background: ", ";\n    color: #fff;\n  }\n  @media (hover: hover) {\n    .filled--button:hover {\n      background: #fff;\n      border-color: #fff;\n      color: ", ";\n    }\n    button:hover {\n      background: ", ";\n      color: #fff;\n    }\n  }\n"])), props => props.variant ? props.theme.state[props.variant] : props.theme.state.info, props => props.variant ? props.theme.state[props.variant] : props.theme.state.info, p => p.sx && p.sx, props => props.variant ? props.theme.state[props.variant] : props.theme.state.info, props => props.variant ? props.theme.state[props.variant] : props.theme.state.info, props => props.variant ? props.theme.state[props.variant] : props.theme.state.info);

const StyledIconButton = _styledComponents.default.button(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  cursor: pointer;\n  background: none;\n  border: none;\n  padding: 0px;\n  span {\n    display: block;\n    margin: auto;\n  }\n  :disabled {\n    opacity: .7;\n    pointer-events: none;\n  }\n  @media (hover: hover) {\n    :hover {\n      opacity: .7;\n    }\n  }\n  ", ";\n"])), p => p.sx && p.sx);

const Button = _ref => {
  let {
    children,
    variant,
    filled,
    sx
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(StyledButton, {
    variant: variant,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", _objectSpread(_objectSpread({
      sx: sx,
      className: filled && 'filled--button'
    }, props), {}, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        children: children
      })
    }))
  });
};

const IconButton = _ref2 => {
  let {
    children,
    sx
  } = _ref2,
      props = _objectWithoutProperties(_ref2, _excluded2);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(StyledIconButton, _objectSpread(_objectSpread({
    sx: sx
  }, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "material-icons",
      children: children
    })
  }));
};

Button.Icon = IconButton;
var _default = Button;
exports.default = _default;