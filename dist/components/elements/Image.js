"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LazyLoad = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactLazyLoadImageComponent = require("react-lazy-load-image-component");

require("react-lazy-load-image-component/src/effects/blur.css");

require("react-lazy-load-image-component/src/effects/opacity.css");

var _Gallery = require("./Gallery");

var _jsxRuntime = require("react/jsx-runtime");

const _excluded = ["children", "sx"],
      _excluded2 = ["children", "sx"];

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const StyledImage = _styledComponents.default.img(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin: auto;\n  border-radius: 12px;\n  object-fit: contain;\n  display: block;\n  ", " & {\n    object-fit: scale-down;\n    width: 100%;\n    height: 100%;\n    padding: 16px;\n    display: flex;\n    margin: auto;\n  }\n  @media (min-width: 920px) {\n    ", " & {\n      padding: 16px 25px;\n      width: 70%;\n      height: 70%;\n    }\n  }\n  ", ";\n"])), _Gallery.Slide, _Gallery.Slide, p => p.sx && p.sx);

const StyledLazyLoad = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  border-radius: 12px;\n  span {\n    display: block !important;\n    width: 100%;\n    height: 100%;\n    img {\n      border-radius: 12px;\n      width: 100%;\n      height: 100%;\n      object-fit: contain;\n    }\n  }\n  ", ";\n"])), p => p.sx && p.sx);

const Image = _ref => {
  let {
    children,
    sx
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(StyledImage, _objectSpread({
    sx: sx
  }, props));
};

const LazyLoad = _ref2 => {
  let {
    children,
    sx
  } = _ref2,
      props = _objectWithoutProperties(_ref2, _excluded2);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(StyledLazyLoad, {
    sx: sx,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactLazyLoadImageComponent.LazyLoadImage, _objectSpread(_objectSpread({}, props), {}, {
      children: children
    }))
  });
};

exports.LazyLoad = LazyLoad;
var _default = Image;
exports.default = _default;