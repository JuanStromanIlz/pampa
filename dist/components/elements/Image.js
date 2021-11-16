"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LazyLoad = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactLazyLoadImageComponent = require("react-lazy-load-image-component");

require("react-lazy-load-image-component/src/effects/blur.css");

require("react-lazy-load-image-component/src/effects/opacity.css");

var _Gallery = require("./Gallery");

const _excluded = ["children", "sx"],
      _excluded2 = ["children", "sx"];

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

  return /*#__PURE__*/React.createElement(StyledImage, _extends({
    sx: sx
  }, props));
};

const LazyLoad = _ref2 => {
  let {
    children,
    sx
  } = _ref2,
      props = _objectWithoutProperties(_ref2, _excluded2);

  return /*#__PURE__*/React.createElement(StyledLazyLoad, {
    sx: sx
  }, /*#__PURE__*/React.createElement(_reactLazyLoadImageComponent.LazyLoadImage, props, children));
};

exports.LazyLoad = LazyLoad;
var _default = Image;
exports.default = _default;