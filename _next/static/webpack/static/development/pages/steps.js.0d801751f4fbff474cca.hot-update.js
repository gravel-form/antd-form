webpackHotUpdate("static/development/pages/steps.js",{

/***/ "./middlewares/RateMw.tsx":
/*!********************************!*\
  !*** ./middlewares/RateMw.tsx ***!
  \********************************/
/*! exports provided: RateMw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateMw", function() { return RateMw; });
/* harmony import */ var antd_lib_rate_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/rate/style */ "./node_modules/antd/lib/rate/style/index.js");
/* harmony import */ var antd_lib_rate_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_rate_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_rate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/rate */ "./node_modules/antd/lib/rate/index.js");
/* harmony import */ var antd_lib_rate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_rate__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_4__);




var _this = undefined,
    _jsxFileName = "/Users/yihui.lin/workspace/gravel/antd/middlewares/RateMw.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3__["createElement"];


var RateMw = function RateMw(props) {
  var schema = props.schema,
      onChange = props.onChange,
      data = props.data,
      next = props.next,
      extraProps = props.extraProps;
  if (typeof schema === 'boolean' || schema.type !== 'integer' && schema.type !== 'number') return next(props);
  return __jsx(antd_lib_rate__WEBPACK_IMPORTED_MODULE_1___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    value: data,
    onChange: onChange
  }, lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(extraProps, 'props'), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 10
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (RateMw);

/***/ })

})
//# sourceMappingURL=steps.js.0d801751f4fbff474cca.hot-update.js.map