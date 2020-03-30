webpackHotUpdate("static/development/pages/dynamic-array.js",{

/***/ "./middlewares/Select.tsx":
/*!********************************!*\
  !*** ./middlewares/Select.tsx ***!
  \********************************/
/*! exports provided: SelectMw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectMw", function() { return SelectMw; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/select/style */ "./node_modules/antd/lib/select/style/index.js");
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/select */ "./node_modules/antd/lib/select/index.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_4__);




var _this = undefined,
    _jsxFileName = "/Users/yihui.lin/workspace/gravel/antd/middlewares/Select.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3__["createElement"];


var SelectMw = function SelectMw(props) {
  var schema = props.schema,
      value = props.data,
      _onChange = props.onChange,
      next = props.next,
      extraProps = props.extraProps;
  if (typeof schema === 'boolean' || !schema["enum"] || !(schema.type === 'string' || schema.type === 'number' || schema.type === 'integer') || schema["enum"].find(function (option) {
    return !['string', 'number'].includes(typeof option);
  })) return next(props);
  return __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    value: value,
    style: {
      width: '100%'
    },
    onChange: function onChange(value) {
      return _onChange(value);
    }
  }, lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(extraProps, 'props'), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }), schema["enum"].map(function (option) {
    return __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_2___default.a.Option, {
      key: option,
      value: option,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }
    }, option);
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (SelectMw);

/***/ })

})
//# sourceMappingURL=dynamic-array.js.bfeea99f830861eab0e8.hot-update.js.map