"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Image = _interopRequireDefault(require("./Image"));

const _excluded = ["src", "children", "sx"],
      _excluded2 = ["children", "sx"];

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const StyledCard = _styledComponents.default.article(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  padding: 16px;\n  user-select: none;\n  > div > :last-child {\n    margin-bottom: 0px;\n  }\n  ", ";\n"])), p => p.sx && p.sx);

const StyledMedia = _styledComponents.default.figure(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin: 0;\n  cursor: pointer;\n  img {\n    pointer-events: none;\n    width: 100%;\n    height: 100%;\n  }\n  figcaption {\n    margin: 5px 0;\n    font-size: 17px;\n  }\n  ", ";\n"])), p => p.sx && p.sx);

const StyledHeader = _styledComponents.default.header(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin: 15px 0;\n  ", ";\n"])), p => p.sx && p.sx);

const StyledContent = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin: 15px 0;\n  display: flex;\n  ", ";\n"])), p => p.sx && p.sx);

const StyledActions = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  margin: 15px 0;\n  display: flex;\n  flex-direction: row;\n  gap: 8px;\n  ", ";\n"])), p => p.sx && p.sx);

const Media = _ref => {
  let {
    src,
    children,
    sx
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(StyledMedia, _extends({
    sx: sx
  }, props), /*#__PURE__*/React.createElement(_Image.default, {
    src: src,
    alt: ""
  }), /*#__PURE__*/React.createElement("figcaption", null, children));
};

const Card = _ref2 => {
  let {
    children,
    sx
  } = _ref2,
      props = _objectWithoutProperties(_ref2, _excluded2);

  return /*#__PURE__*/React.createElement(StyledCard, _extends({
    sx: sx
  }, props), /*#__PURE__*/React.createElement("div", null, children));
};

Card.Media = Media;
Card.Header = StyledHeader;
Card.Content = StyledContent;
Card.Actions = StyledActions;
var _default = Card;
exports.default = _default;