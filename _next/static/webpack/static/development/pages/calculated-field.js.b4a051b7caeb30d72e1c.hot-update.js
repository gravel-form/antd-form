webpackHotUpdate("static/development/pages/calculated-field.js",{

/***/ "./middlewares/CheckboxMw.tsx":
/*!************************************!*\
  !*** ./middlewares/CheckboxMw.tsx ***!
  \************************************/
/*! exports provided: RadioGroupMw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioGroupMw", function() { return RadioGroupMw; });
/* harmony import */ var antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/checkbox/style */ "./node_modules/antd/lib/checkbox/style/index.js");
/* harmony import */ var antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/checkbox */ "./node_modules/antd/lib/checkbox/index.js");
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_4__);




var _this = undefined,
    _jsxFileName = "/Users/yihui.lin/workspace/gravel/antd/middlewares/CheckboxMw.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3__["createElement"];


var RadioGroupMw = function RadioGroupMw(props) {
  var schema = props.schema,
      _onChange = props.onChange,
      data = props.data,
      next = props.next,
      extraProps = props.extraProps;
  if (typeof schema === 'boolean' || schema.type !== 'boolean') return next(props);
  return __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    checked: data,
    onChange: function onChange(e) {
      return _onChange(e.target.checked || undefined);
    }
  }, lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(extraProps, 'props'), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }), schema.title);
};
/* harmony default export */ __webpack_exports__["default"] = (RadioGroupMw);

/***/ })

})
//# sourceMappingURL=calculated-field.js.b4a051b7caeb30d72e1c.hot-update.js.map