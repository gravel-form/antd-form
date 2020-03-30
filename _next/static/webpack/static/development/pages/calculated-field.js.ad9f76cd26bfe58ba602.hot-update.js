webpackHotUpdate("static/development/pages/calculated-field.js",{

/***/ "./middlewares/RadioGroupMw.tsx":
/*!**************************************!*\
  !*** ./middlewares/RadioGroupMw.tsx ***!
  \**************************************/
/*! exports provided: RadioGroupMw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioGroupMw", function() { return RadioGroupMw; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var antd_lib_radio_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/radio/style */ "./node_modules/antd/lib/radio/style/index.js");
/* harmony import */ var antd_lib_radio_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_radio_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/radio */ "./node_modules/antd/lib/radio/index.js");
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_radio__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_4__);




var _this = undefined,
    _jsxFileName = "/Users/yihui.lin/workspace/gravel/antd/middlewares/RadioGroupMw.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3__["createElement"];


var RadioGroupMw = function RadioGroupMw(props) {
  var schema = props.schema,
      _onChange = props.onChange,
      data = props.data,
      extraProps = props.extraProps,
      next = props.next;
  if (typeof schema === 'boolean' || !schema["enum"]) return next(props);
  var labels = lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(extraProps, 'labels') || schema["enum"];
  return __jsx(antd_lib_radio__WEBPACK_IMPORTED_MODULE_2___default.a.Group, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    onChange: function onChange(e) {
      return _onChange(e.target.value);
    },
    value: data
  }, lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(extraProps, 'props'), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }), schema["enum"].map(function (value, index) {
    return __jsx(antd_lib_radio__WEBPACK_IMPORTED_MODULE_2___default.a, {
      key: JSON.stringify(value),
      value: value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }
    }, labels[index]);
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (RadioGroupMw);

/***/ })

})
//# sourceMappingURL=calculated-field.js.ad9f76cd26bfe58ba602.hot-update.js.map