webpackHotUpdate("static/development/pages/steps.js",{

/***/ "./middlewares/InputNumber.tsx":
/*!*************************************!*\
  !*** ./middlewares/InputNumber.tsx ***!
  \*************************************/
/*! exports provided: InputNumberMw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputNumberMw", function() { return InputNumberMw; });
/* harmony import */ var antd_lib_input_number_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/input-number/style */ "./node_modules/antd/lib/input-number/style/index.js");
/* harmony import */ var antd_lib_input_number_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_number_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_input_number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/input-number */ "./node_modules/antd/lib/input-number/index.js");
/* harmony import */ var antd_lib_input_number__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_4__);




var _this = undefined,
    _jsxFileName = "/Users/yihui.lin/workspace/gravel/antd/middlewares/InputNumber.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3__["createElement"];


var InputNumberMw = function InputNumberMw(props) {
  var next = props.next,
      schema = props.schema,
      data = props.data,
      onChange = props.onChange,
      extraProps = props.extraProps;
  if (typeof schema === 'boolean' || !(schema.type === 'number' || schema.type === 'integer')) return next(props);
  var maximum = schema.maximum,
      minimum = schema.minimum;
  return __jsx(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_1___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    style: {
      width: '100%'
    },
    max: maximum,
    min: minimum,
    type: "number",
    value: typeof data === 'number' ? data : undefined,
    onChange: onChange
  }, lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(extraProps, 'props'), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (InputNumberMw);

/***/ })

})
//# sourceMappingURL=steps.js.1b7d24639537cf2c744d.hot-update.js.map