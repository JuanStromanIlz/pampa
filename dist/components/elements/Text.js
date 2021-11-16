"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Tag = require("./Tag");

const _excluded = ["component", "type", "children", "sx"],
      _excluded2 = ["className"];

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

  return /*#__PURE__*/React.createElement(StyledText, null, /*#__PURE__*/React.createElement(Field, _extends({
    as: component,
    sx: sx
  }, rest, {
    className: "type".concat(type || 400, " ").concat(className || '')
  }), children));
};

var _default = Text;
exports.default = _default;