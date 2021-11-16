"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.object.assign.js");

require("core-js/modules/web.dom-collections.iterator.js");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = require("react");

var _Text = _interopRequireDefault(require("./Text"));

const _excluded = ["error", "valid", "children", "sx"],
      _excluded2 = ["show", "variant", "children", "sx"],
      _excluded3 = ["name", "id", "sx"];

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const StyledContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  margin-top: 8px;\n  margin-bottom: 16px;\n  .container--wrapper {\n    border-radius: 32px;\n    display: flex;\n    flex-direction: column;\n    ", ";\n  }\n  ", ";\n"])), p => p.sx && p.sx, props => props.valid ? "label {\n        color: ".concat(props.theme.state.success, ";\n      }\n      fieldset {\n        border-color: ").concat(props.theme.state.success, " !important;\n      }") : props.error && "label {\n        color: ".concat(props.theme.state.error, ";\n      }\n      fieldset {\n        border-color: ").concat(props.theme.state.error, " !important;\n      }"));

const StyledMessage = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  overflow: hidden;\n  transform-origin: top;\n  transition: all .1s linear;\n  transform: scaleY(", ");\n  height: ", ";\n  .message--wrapper {\n    padding-left: 25px;\n    color: ", ";\n  }\n  ", ";\n"])), props => props.show ? 1 : 0, props => props.show ? 'auto' : '0px', props => props.variant ? props.theme.state[props.variant] : props.theme.state.error, p => p.sx && p.sx);

const StyledInput = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: relative;\n  fieldset {\n    color: grey;\n    position: absolute;\n    top: -8px;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    margin: 0;\n    padding: 0px 25px;\n    overflow: hidden;\n    border: 1px solid grey;\n    border-radius: 32px;\n    pointer-events: none;\n    label {\n      text-transform: Capitalize;\n      line-height: 15px;\n      font-size: 15px;\n      font-weight: 500;\n    }\n  }\n  input {\n    appearance: none;\n    border-radius: 32px;\n    outline: none;\n    font: inherit;\n    border: none;\n    width: 100%;\n    padding: 10px 25px;\n    padding-top: 15px;\n    ", ";\n  }\n  :focus-within {\n    fieldset {\n      color: ", ";\n      border-color: ", ";\n    }\n  }\n  .filled {\n    color: ", ";\n    border-color: ", ";\n  }\n"])), p => p.sx && p.sx, props => props.theme.state.info, props => props.theme.state.info, props => props.theme.state.info, props => props.theme.state.info);

const Container = _ref => {
  let {
    error,
    valid,
    children,
    sx
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(StyledContainer, {
    error: error,
    valid: valid
  }, /*#__PURE__*/React.createElement("div", _extends({
    className: "container--wrapper",
    sx: sx
  }, props), children));
};

const Message = _ref2 => {
  let {
    show,
    variant,
    children,
    sx
  } = _ref2,
      props = _objectWithoutProperties(_ref2, _excluded2);

  return /*#__PURE__*/React.createElement(StyledMessage, _extends({
    show: show,
    variant: variant,
    sx: sx
  }, props), /*#__PURE__*/React.createElement(_Text.default, {
    className: "message--wrapper",
    type: 200
  }, children));
};

const Input = _ref3 => {
  let props = Object.assign({}, _ref3);
  const [focused, setFocused] = (0, _react.useState)(false);
  const [filled, setFilled] = (0, _react.useState)(false);

  let {
    name,
    id,
    sx
  } = props,
      restProps = _objectWithoutProperties(props, _excluded3);

  return /*#__PURE__*/React.createElement(StyledInput, null, /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    sx: sx
  }, restProps, {
    onChange: e => setFilled(Boolean(e.target.value.length)),
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  })), /*#__PURE__*/React.createElement("fieldset", {
    className: !focused && filled ? 'filled' : ''
  }, /*#__PURE__*/React.createElement("legend", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: name
  }, /*#__PURE__*/React.createElement(_Text.default, {
    type: 300
  }, name)))));
};

Input.Container = Container;
Input.Message = Message;
var _default = Input;
exports.default = _default;