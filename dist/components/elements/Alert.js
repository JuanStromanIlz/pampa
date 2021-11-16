"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Button = _interopRequireDefault(require("./Button"));

var _Text = _interopRequireDefault(require("./Text"));

const _excluded = ["open", "close", "delay", "variant", "action", "children", "sx"],
      _excluded2 = ["children", "sx"];

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: fixed;\n  bottom: 30px;\n  left: 30px;\n  @keyframes showAlert {\n    from {\n      opacity: 0;\n    }\n    to {\n      opactiy: 1;\n    }\n  }\n  .alert--open {\n    transition: all .2s linear;\n    opacity: 1;\n    pointer-events: auto;\n  }\n"])));

const StyledAlert = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  border-radius: 32px;\n  background: ", ";\n  transition: all .2s linear;\n  opacity: 0;\n  pointer-events: none;\n  display: flex;\n  flex-direction: row;\n  .icon {\n    display: flex;\n    padding: 10px 10px 10px 25px;\n    span {\n      margin: auto;\n      color: #fff;\n    }\n  }\n  .actions {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    padding: 10px 25px 10px 0px;\n    span {\n      color: #fff;\n      font-size: 16px;\n      line-height: 16px;\n    }\n  }\n  ", ";\n"])), props => props.theme.state[props.variant], p => p.sx && p.sx);

const StyledMessage = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  padding: 10px;\n  flex-grow: 1;\n  display: flex;\n  p {\n    color: #fff;\n  }\n  ", ";\n"])), p => p.sx && p.sx);

function Alert(_ref) {
  let {
    open,
    close,
    delay,
    variant,
    action,
    children,
    sx
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const [icon, setIcon] = (0, _react.useState)('info');
  const alertRef = (0, _react.useRef)(null);

  function closeAlert() {
    alertRef.current.classList.remove('alert--open');
    close();
  }

  (0, _react.useEffect)(() => {
    function alertConfig(variant) {
      switch (variant) {
        case 'success':
          setIcon('check');
          break;

        case 'warning':
          setIcon('warning');
          break;

        case 'error':
          setIcon('error');
          break;

        case 'info':
          setIcon('info');
          break;

        default:
          setIcon('info');
      }
    }

    alertConfig(variant);

    if (open) {
      setTimeout(() => {
        alertRef.current.classList.remove('alert--open');
      }, delay || 3000);
    }
  }, [open, delay, variant]);
  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(StyledAlert, _extends({
    sx: sx
  }, props, {
    ref: alertRef,
    className: "".concat(open ? 'alert--open' : ''),
    onClick: () => console.log(alertRef),
    variant: variant
  }), /*#__PURE__*/React.createElement("div", {
    className: "icon"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-icons"
  }, icon)), children, /*#__PURE__*/React.createElement("div", {
    className: "actions"
  }, action, /*#__PURE__*/React.createElement(_Button.default.Icon, {
    onClick: closeAlert
  }, "close"))));
}

const Message = _ref2 => {
  let {
    children,
    sx
  } = _ref2,
      props = _objectWithoutProperties(_ref2, _excluded2);

  return /*#__PURE__*/React.createElement(StyledMessage, _extends({
    sx: sx
  }, props), /*#__PURE__*/React.createElement(_Text.default, {
    component: "p",
    type: 300
  }, children));
};

Alert.Message = Message;
var _default = Alert;
exports.default = _default;