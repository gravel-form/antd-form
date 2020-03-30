webpackHotUpdate("static/development/pages/dynamic-array.js",{

/***/ "./middlewares/CheckboxGroup.tsx":
/*!***************************************!*\
  !*** ./middlewares/CheckboxGroup.tsx ***!
  \***************************************/
/*! exports provided: CheckboxGroupMw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxGroupMw", function() { return CheckboxGroupMw; });
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
    _jsxFileName = "/Users/yihui.lin/workspace/gravel/antd/middlewares/CheckboxGroup.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3__["createElement"];


var CheckboxGroupMw = function CheckboxGroupMw(props) {
  var schema = props.schema,
      _onChange = props.onChange,
      extraProps = props.extraProps,
      next = props.next;

  if (typeof schema === 'boolean' || Array.isArray(schema.items) || typeof schema.items === 'boolean' || !schema.items || !schema.items["enum"] || !schema.uniqueItems) {
    return next(props);
  }

  var checkboxValues = schema.items["enum"] || [];
  var data = props.data || [];
  return __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1___default.a.Group, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    options: checkboxValues.map(function (value) {
      return {
        label: value,
        value: value
      };
    }),
    value: data,
    onChange: function onChange(value) {
      return _onChange(value);
    }
  }, lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(extraProps, 'props'), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (CheckboxGroupMw);

/***/ })

})
//# sourceMappingURL=dynamic-array.js.bf5c236a8c3c0d095c17.hot-update.js.map