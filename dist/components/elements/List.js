"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Item = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _jsxRuntime = require("react/jsx-runtime");

const _excluded = ["children", "sx"],
      _excluded2 = ["children", "sx"],
      _excluded3 = ["children", "sx"],
      _excluded4 = ["children", "sx"];

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const StyledBigItem = _styledComponents.default.li(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  flex: 50%;\n  border-bottom: 1px solid black;\n  padding: 30px;\n  :last-of-type {\n    flex: 100%;\n    border-bottom: 0;\n  }\n  ", ";\n"])), p => p.sx && p.sx);

const StyledList = _styledComponents.default.ul(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  padding: 0;\n  list-style: none;\n  display: flex;\n  flex-flow: row wrap;\n  margin: 0;\n  ", ";\n"])), p => p.sx && p.sx);

const StyledLabel = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-size: 16px;\n  line-height: 28px;\n  letter-spacing: 0;\n  display: inline-block;\n  margin-bottom: 0.5rem;\n  ", ";\n"])), p => p.sx && p.sx);

const StyledContent = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  font-size: 32px;\n  line-height: 40px;\n  letter-spacing: -0.3px;\n  ", ";\n"])), p => p.sx && p.sx);

const Item = _ref => {
  let {
    children,
    sx
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(StyledBigItem, _objectSpread(_objectSpread({
    sx: sx
  }, props), {}, {
    children: children
  }));
};

exports.Item = Item;

const Label = _ref2 => {
  let {
    children,
    sx
  } = _ref2,
      props = _objectWithoutProperties(_ref2, _excluded2);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(StyledLabel, _objectSpread(_objectSpread({
    sx: sx
  }, props), {}, {
    children: children
  }));
};

const Content = _ref3 => {
  let {
    children,
    sx
  } = _ref3,
      props = _objectWithoutProperties(_ref3, _excluded3);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(StyledContent, _objectSpread(_objectSpread({
    sx: sx
  }, props), {}, {
    children: children
  }));
};

const List = _ref4 => {
  let {
    children,
    sx
  } = _ref4,
      props = _objectWithoutProperties(_ref4, _excluded4);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(StyledList, _objectSpread(_objectSpread({
    sx: sx
  }, props), {}, {
    children: children
  }));
};

Item.Label = Label;
Item.Content = Content;
var _default = List;
exports.default = _default;