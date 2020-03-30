webpackHotUpdate("static/development/pages/steps.js",{

/***/ "./middlewares/Input.tsx":
/*!*******************************!*\
  !*** ./middlewares/Input.tsx ***!
  \*******************************/
/*! exports provided: InputMw, TextAreaMw, PasswordMw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputMw", function() { return InputMw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextAreaMw", function() { return TextAreaMw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordMw", function() { return PasswordMw; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/input/style */ "./node_modules/antd/lib/input/style/index.js");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_4__);




var _this = undefined,
    _jsxFileName = "/Users/yihui.lin/workspace/gravel/antd/middlewares/Input.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3__["createElement"];


var TextArea = antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default.a.TextArea,
    Password = antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default.a.Password;
var InputMw = function InputMw(props) {
  var next = props.next,
      schema = props.schema,
      data = props.data,
      _onChange = props.onChange,
      extraProps = props.extraProps;
  if (typeof schema === 'boolean' || schema.type !== 'string') return next(props);
  return __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    value: data || '',
    onChange: function onChange(e) {
      _onChange(e.target.value || undefined);
    }
  }, lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(extraProps, 'props'), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }));
};
var TextAreaMw = function TextAreaMw(props) {
  var next = props.next,
      schema = props.schema,
      data = props.data,
      _onChange2 = props.onChange,
      extraProps = props.extraProps;
  if (typeof schema === 'boolean' || schema.type !== 'string' || lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(extraProps, 'component') !== 'TextArea') return next(props);
  return __jsx(TextArea, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    value: data || '',
    onChange: function onChange(e) {
      _onChange2(e.target.value || undefined);
    }
  }, lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(extraProps, 'props'), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }));
};
var PasswordMw = function PasswordMw(props) {
  var next = props.next,
      schema = props.schema,
      data = props.data,
      _onChange3 = props.onChange,
      extraProps = props.extraProps;
  if (typeof schema === 'boolean' || schema.type !== 'string' || lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(extraProps, 'component') !== 'Password') return next(props);
  return __jsx(Password, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    value: data || '',
    onChange: function onChange(e) {
      _onChange3(e.target.value || undefined);
    }
  }, lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(extraProps, 'props'), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (InputMw);

/***/ })

})
//# sourceMappingURL=steps.js.37a19ed9cd98cf5b19b5.hot-update.js.map