"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = require("styled-components");

var _Theme = require("./Theme");

var _GlobalStyles = _interopRequireDefault(require("./GlobalStyles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ThemeProvider = _ref => {
  let {
    theme,
    children
  } = _ref;
  return /*#__PURE__*/React.createElement(_styledComponents.ThemeProvider, {
    theme: theme || _Theme.theme
  }, /*#__PURE__*/React.createElement(_GlobalStyles.default, null), children);
};

var _default = ThemeProvider;
exports.default = _default;