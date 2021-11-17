"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = require("styled-components");

var _Theme = _interopRequireDefault(require("./Theme"));

var _GlobalStyles = _interopRequireDefault(require("./GlobalStyles"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ThemeProvider = _ref => {
  let {
    theme,
    children
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_styledComponents.ThemeProvider, {
    theme: theme,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_GlobalStyles.default, {}), children]
  });
};

ThemeProvider.defaultProps = {
  theme: _Theme.default
};
var _default = ThemeProvider;
exports.default = _default;