"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactDom = require("react-dom");

var _usePortal = _interopRequireDefault(require("lib/hooks/usePortal"));

var _Box = _interopRequireDefault(require("./Box"));

var _Button = _interopRequireDefault(require("./Button"));

var _Text = _interopRequireDefault(require("./Text"));

const _excluded = ["children", "sx"],
      _excluded2 = ["children", "sx"],
      _excluded3 = ["children", "sx"],
      _excluded4 = ["open", "close", "id", "children", "sx"];

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  .modal--container {\n    display: grid;\n    width: 100%;\n    height: 100%;\n  }\n  .show {\n    opacity: 1;\n  }\n  ", ";\n"])), p => p.sx && p.sx);

const StyledMask = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: fixed;\n  inset: 0;\n  z-index: 1040;\n  width: 100vw;\n  height: 100vh;\n  opacity: 0;\n  background: rgba(234, 235, 237, 0.6);\n  transition: opacity 0.8s ease-out;\n  backdrop-filter: blur(3px);\n"])));

const StyledDialog = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: grid;\n  place-items: center;\n  width: 100%;\n  height: 100%;\n  .dialog--wrapper {\n    display: flex;\n    flex-direction: column;\n    margin: 30px;\n    > button {\n      margin-left: auto;\n      margin-bottom: 8px;\n    }\n  }\n"])));

const StyledBox = (0, _styledComponents.default)(_Box.default)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  padding: 25px;\n  background: #000;\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n"])));

const StyledTitle = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  margin-bottom: 15px;\n  ", ";\n"])), p => p.sx && p.sx);

const StyledContent = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  margin-bottom: 15px;\n  ", ";\n"])), p => p.sx && p.sx);

const StyledActions = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  gap: 8px;\n  ", ";\n"])), p => p.sx && p.sx);

const Title = _ref => {
  let {
    children,
    sx
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(StyledTitle, _extends({
    sx: sx
  }, props), /*#__PURE__*/React.createElement(_Text.default, {
    component: "h4",
    type: 400
  }, children));
};

const Content = _ref2 => {
  let {
    children,
    sx
  } = _ref2,
      props = _objectWithoutProperties(_ref2, _excluded2);

  return /*#__PURE__*/React.createElement(StyledContent, _extends({
    sx: sx
  }, props), /*#__PURE__*/React.createElement(_Text.default, {
    component: "p",
    type: 300
  }, children));
};

const Actions = _ref3 => {
  let {
    children,
    sx
  } = _ref3,
      props = _objectWithoutProperties(_ref3, _excluded3);

  return /*#__PURE__*/React.createElement(StyledActions, _extends({
    sx: sx
  }, props), children);
};

const Modal = _ref4 => {
  let {
    open,
    close,
    id,
    children,
    sx
  } = _ref4,
      props = _objectWithoutProperties(_ref4, _excluded4);

  const target = (0, _usePortal.default)(id ? id : 'modal-view');
  return open && /*#__PURE__*/(0, _reactDom.createPortal)( /*#__PURE__*/React.createElement(Container, props, /*#__PURE__*/React.createElement(StyledMask, {
    className: open && 'show'
  }, /*#__PURE__*/React.createElement(StyledDialog, null, /*#__PURE__*/React.createElement("div", {
    className: "dialog--wrapper"
  }, /*#__PURE__*/React.createElement(_Button.default.Icon, {
    onClick: close
  }, "close"), /*#__PURE__*/React.createElement(StyledBox, null, children))))), target);
};

Modal.Title = Title;
Modal.Content = Content;
Modal.Actions = Actions;
var _default = Modal;
exports.default = _default;