"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Slide = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactDom = require("react-dom");

var _react = require("react");

var _usePortal = _interopRequireDefault(require("lib/hooks/usePortal"));

var _Text = _interopRequireDefault(require("./Text"));

var _Button = _interopRequireDefault(require("./Button"));

const _excluded = ["children"],
      _excluded2 = ["onClick"],
      _excluded3 = ["children"],
      _excluded4 = ["children"],
      _excluded5 = ["children"],
      _excluded6 = ["children"],
      _excluded7 = ["slide", "children"],
      _excluded8 = ["open", "items", "index", "children"];

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const GalleryContext = /*#__PURE__*/(0, _react.createContext)();

const GalleryContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  z-index: 1024;\n  position: fixed;\n  inset: 0;\n  margin: 0;\n  background: #fff;\n  justify-content: space-around;\n  align-items: center;\n  outline: none;\n"])));

const StyledSlider = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n"])));

const StyledSlide = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  > div {\n    pointer-events: none;\n    opacity: 0;\n    position: absolute;\n    inset: 0;\n    display: flex;\n    margin: auto;\n    transition: .4s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  }\n  .show {\n    opacity: 1;\n    pointer-events: auto;\n  }\n"])));

exports.Slide = StyledSlide;

const StyledCloseContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  z-index: 2;\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  @media(min-width: 920px) {\n    right: 25px;\n  }\n"])));

const StyledInfo = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: absolute;\n  bottom: 16px;\n  left: 0;\n  right: 0;\n  padding-left: 8px;\n  padding-right: 8px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  .buttons {\n    display: none;\n    flex-direction: row;\n    gap: 8px;\n  }\n  @media(min-width: 920px) {\n    padding-left: 25px;\n    padding-right: 25px;\n    justify-content: space-between;\n    .buttons {\n      display: flex;\n    }\n  }\n"])));

const CloseButton = _ref => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  let {
    onClick
  } = props,
      rest = _objectWithoutProperties(props, _excluded2);

  return /*#__PURE__*/React.createElement(StyledCloseContainer, null, /*#__PURE__*/React.createElement(_Button.default.Icon, _extends({}, rest, {
    onClick: onClick
  }), children));
};

const PrevButton = _ref2 => {
  let {
    children
  } = _ref2,
      props = _objectWithoutProperties(_ref2, _excluded3);

  const {
    prev,
    index
  } = (0, _react.useContext)(GalleryContext);
  return /*#__PURE__*/React.createElement(_Button.default.Icon, _extends({
    disabled: index === 0,
    onClick: prev
  }, props), children);
};

const NextButton = _ref3 => {
  let {
    children
  } = _ref3,
      props = _objectWithoutProperties(_ref3, _excluded4);

  const {
    next,
    index,
    items
  } = (0, _react.useContext)(GalleryContext);
  return /*#__PURE__*/React.createElement(_Button.default.Icon, _extends({
    disabled: index + 1 === items,
    onClick: next
  }, props), children);
};

const Info = _ref4 => {
  let {
    children
  } = _ref4,
      props = _objectWithoutProperties(_ref4, _excluded5);

  const {
    items,
    index
  } = (0, _react.useContext)(GalleryContext);
  return /*#__PURE__*/React.createElement(StyledInfo, props, /*#__PURE__*/React.createElement(_Text.default, null, "".concat(index + 1, " / ").concat(items)), /*#__PURE__*/React.createElement("div", {
    className: "buttons"
  }, children));
};

const Slider = _ref5 => {
  let {
    children
  } = _ref5,
      props = _objectWithoutProperties(_ref5, _excluded6);

  return /*#__PURE__*/React.createElement(StyledSlider, props, children);
};

const Slide = _ref6 => {
  let {
    slide,
    children
  } = _ref6,
      props = _objectWithoutProperties(_ref6, _excluded7);

  const {
    index
  } = (0, _react.useContext)(GalleryContext);
  return /*#__PURE__*/React.createElement(StyledSlide, props, /*#__PURE__*/React.createElement("div", {
    className: "".concat(slide === index && 'show')
  }, children));
};

const Gallery = _ref7 => {
  let {
    open,
    items,
    index,
    children
  } = _ref7,
      props = _objectWithoutProperties(_ref7, _excluded8);

  const target = (0, _usePortal.default)('modal-gallery');
  const [galleryData, setGalleryData] = (0, _react.useState)({
    items: 0,
    index: 0
  });
  const [touch, setTouch] = (0, _react.useState)({
    startPoint: 0,
    direction: true
  });

  function prevImage() {
    setGalleryData(prev => {
      if (prev.index === 0) {
        return _objectSpread({}, prev);
      }

      return {
        items: prev.items,
        index: prev.index - 1
      };
    });
  }

  function nextImage() {
    setGalleryData(prev => {
      let lastCard = prev.index + 1;

      if (lastCard === prev.items) {
        return _objectSpread({}, prev);
      }

      return {
        items: prev.items,
        index: prev.index + 1
      };
    });
  }
  /* Touch */


  function touchStart(e) {
    setTouch(prev => {
      return {
        startPoint: e.changedTouches[0].clientX,
        direction: prev.direction
      };
    });
  }

  function touchMove(e) {
    setTouch(prev => {
      return {
        startPoint: prev.startPoint,
        direction: e.changedTouches[0].clientX < prev.startPoint
      };
    });
  }

  function touchEnd() {
    if (!touch.direction) {
      return prevImage();
    }

    nextImage();
  }
  /* Keys */


  function keyPress(e) {
    if (e.keyCode === 39 || e.keyCode === 40) {
      nextImage();
    }

    if (e.keyCode === 37 || e.keyCode === 38) {
      prevImage();
    }
  }

  (0, _react.useEffect)(() => {
    if (open) {
      setGalleryData({
        items: items,
        index: index
      });
    }
  }, [open, items, index]);
  return open && /*#__PURE__*/(0, _reactDom.createPortal)( /*#__PURE__*/React.createElement(GalleryContainer, _extends({}, props, {
    onTouchStart: touchStart,
    onTouchEnd: touchEnd,
    onTouchMove: touchMove,
    onKeyDown: keyPress,
    tabIndex: 0
  }), /*#__PURE__*/React.createElement(GalleryContext.Provider, {
    value: {
      prev: prevImage,
      next: nextImage,
      index: galleryData.index,
      items: galleryData.items
    }
  }, children)), target);
};

Gallery.Info = Info;
Gallery.Prev = PrevButton;
Gallery.Next = NextButton;
Gallery.Close = CloseButton;
Gallery.Slider = Slider;
Gallery.Slide = Slide;
var _default = Gallery;
exports.default = _default;