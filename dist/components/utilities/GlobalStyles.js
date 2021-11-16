"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = require("styled-components");

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const GlobalStyles = (0, _styledComponents.createGlobalStyle)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  .material-icons {\n    font-family: 'Material Icons';\n    font-weight: normal;\n    font-style: normal;\n    font-size: 24px;  /* Preferred icon size */\n    display: inline-block;\n    line-height: 1;\n    text-transform: none;\n    letter-spacing: normal;\n    word-wrap: normal;\n    white-space: nowrap;\n    direction: ltr;\n\n    /* Support for all WebKit browsers. */\n    -webkit-font-smoothing: antialiased;\n    /* Support for Safari and Chrome. */\n    text-rendering: optimizeLegibility;\n\n    /* Support for Firefox. */\n    -moz-osx-font-smoothing: grayscale;\n\n    /* Support for IE. */\n    font-feature-settings: 'liga';\n  }\n  html {\n    -ms-text-size-adjust: 100%;\n    -webkit-text-size-adjust: 100%;\n    box-sizing: border-box;\n    height: 100%;\n    font-size: 62.5%;\n    scroll-behavior: smooth;\n    scroll-padding: 53px 0 0 0;\n  }\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: 'Syne', sans-serif;\n    font-size: 1.6rem;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  *,\n  :after,\n  :before {\n    box-sizing: border-box;\n  }\n  h1, h2, h3, h4, h5, h6, p, a {\n    margin: 0;\n    padding: 0;\n    font-weight: inherit;\n    font-style: inherit;\n  }\n"])));
var _default = GlobalStyles;
exports.default = _default;