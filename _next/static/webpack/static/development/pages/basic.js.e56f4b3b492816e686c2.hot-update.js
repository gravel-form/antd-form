webpackHotUpdate("static/development/pages/basic.js",{

/***/ "./middlewares/SubmitButtonMw.tsx":
/*!****************************************!*\
  !*** ./middlewares/SubmitButtonMw.tsx ***!
  \****************************************/
/*! exports provided: SubmitButtonMw, SubmitButtonWithValidationMw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitButtonMw", function() { return SubmitButtonMw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitButtonWithValidationMw", function() { return SubmitButtonWithValidationMw; });
/* harmony import */ var antd_lib_alert_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/alert/style */ "./node_modules/antd/lib/alert/style/index.js");
/* harmony import */ var antd_lib_alert_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_alert_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/alert */ "./node_modules/antd/lib/alert/index.js");
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_alert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/form/style */ "./node_modules/antd/lib/form/style/index.js");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/button/style */ "./node_modules/antd/lib/button/style/index.js");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ValidateMw__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ValidateMw */ "./middlewares/ValidateMw.tsx");










var _this = undefined,
    _jsxFileName = "/Users/yihui.lin/workspace/gravel/antd/middlewares/SubmitButtonMw.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9__["createElement"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var SubmitButtonMw = function SubmitButtonMw(props) {
  var parent = props.parent,
      next = props.next,
      onSubmit = props.formProps.onSubmit;
  if (parent) return next(props);
  var extraProps = props.extraProps;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_9__["Fragment"], null, props.next(props), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_7___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__["default"])({
    onClick: onSubmit,
    type: "primary"
  }, lodash__WEBPACK_IMPORTED_MODULE_10___default.a.get(extraProps, 'props'), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }), "Submit")));
};
var SubmitButtonWithValidationMw = function SubmitButtonWithValidationMw(props) {
  var data = props.data,
      parent = props.parent,
      next = props.next,
      _props$formProps = props.formProps,
      schema = _props$formProps.schema,
      onSubmit = _props$formProps.onSubmit;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_9__["useState"](null),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState, 2),
      errors = _React$useState2[0],
      setErrors = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_9__["useState"](null),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState3, 2),
      ajvException = _React$useState4[0],
      setAjvException = _React$useState4[1];

  if (parent) return next(props);
  var extraProps = props.extraProps;

  var handleClick = function handleClick() {
    try {
      var _errors = Object(_ValidateMw__WEBPACK_IMPORTED_MODULE_11__["validate"])(schema, data);

      if (!_errors) onSubmit && onSubmit(data);else setErrors(_errors);
      ajvException && setAjvException(null);
    } catch (err) {
      setAjvException(err);
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_9__["Fragment"], null, props.next(errors === props.errors ? props : _objectSpread({}, props, {
    errors: errors
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_7___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__["default"])({
    onClick: handleClick,
    type: "primary"
  }, lodash__WEBPACK_IMPORTED_MODULE_10___default.a.get(extraProps, 'props'), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }), "Submit")), ajvException ? __jsx(antd_lib_alert__WEBPACK_IMPORTED_MODULE_1___default.a, {
    message: "Ajv exception",
    description: ajvException.message,
    type: "error",
    showIcon: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 23
    }
  }) : null);
};
/* harmony default export */ __webpack_exports__["default"] = (SubmitButtonMw);

/***/ })

})
//# sourceMappingURL=basic.js.e56f4b3b492816e686c2.hot-update.js.map