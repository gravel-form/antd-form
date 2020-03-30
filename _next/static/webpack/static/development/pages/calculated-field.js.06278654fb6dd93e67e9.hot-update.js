webpackHotUpdate("static/development/pages/calculated-field.js",{

/***/ "./middlewares/DatePicker.tsx":
/*!************************************!*\
  !*** ./middlewares/DatePicker.tsx ***!
  \************************************/
/*! exports provided: DatePickerMw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerMw", function() { return DatePickerMw; });
/* harmony import */ var antd_lib_date_picker_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/date-picker/style */ "./node_modules/antd/lib/date-picker/style/index.js");
/* harmony import */ var antd_lib_date_picker_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_date_picker_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/date-picker */ "./node_modules/antd/lib/date-picker/index.js");
/* harmony import */ var antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);




var _this = undefined,
    _jsxFileName = "/Users/yihui.lin/workspace/gravel/antd/middlewares/DatePicker.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3__["createElement"];



var DatePickerMw = function DatePickerMw(props) {
  var next = props.next,
      schema = props.schema,
      data = props.data,
      _onChange = props.onChange,
      extraProps = props.extraProps;
  if (typeof schema === 'boolean' || schema.type !== 'string') return next(props);
  return __jsx(antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_1___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    style: {
      width: '100%'
    },
    value: typeof data === 'string' ? moment__WEBPACK_IMPORTED_MODULE_5___default()(data) : null,
    onChange: function onChange(_, dateString) {
      _onChange(dateString || undefined);
    }
  }, lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(extraProps, 'props'), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (DatePickerMw);

/***/ })

})
//# sourceMappingURL=calculated-field.js.06278654fb6dd93e67e9.hot-update.js.map