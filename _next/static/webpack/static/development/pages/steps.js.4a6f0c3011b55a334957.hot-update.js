webpackHotUpdate("static/development/pages/steps.js",{

/***/ "./Form.tsx":
/*!******************!*\
  !*** ./Form.tsx ***!
  \******************/
/*! exports provided: advanceComponents, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "advanceComponents", function() { return advanceComponents; });
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/form/style */ "./node_modules/antd/lib/form/style/index.js");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _middlewares_share__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./middlewares/share */ "./middlewares/share.ts");





var _this = undefined,
    _jsxFileName = "/Users/yihui.lin/workspace/gravel/antd/Form.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4__["createElement"];




var Form = function Form(props) {
  var onChange = props.onChange;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4__["useState"](props.data || props.defaultData),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState, 2),
      data = _React$useState2[0],
      setData = _React$useState2[1];

  var _React$useRef = react__WEBPACK_IMPORTED_MODULE_4__["useRef"](props.data !== undefined),
      isControlled = _React$useRef.current;

  var handleChange = function handleChange(newData) {
    if (!isControlled) {
      setData(newData);
    }

    onChange && onChange(newData);
  };

  var colon = props.colon,
      hideRequiredMark = props.hideRequiredMark,
      labelAlign = props.labelAlign,
      labelCol = props.labelCol,
      layout = props.layout,
      name = props.name,
      size = props.size;
  return __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    colon: colon,
    hideRequiredMark: hideRequiredMark,
    labelAlign: labelAlign,
    labelCol: labelCol,
    layout: layout,
    name: name,
    size: size
  }, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }), __jsx(_middlewares_share__WEBPACK_IMPORTED_MODULE_6__["FormCore"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
    onChange: handleChange,
    data: data,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  })));
};

function advanceComponents(list) {
  return list.map([name, function (props) {
    lodash_get__WEBPACK_IMPORTED_MODULE_5___default()();
  }]);
}
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ })

})
//# sourceMappingURL=steps.js.4a6f0c3011b55a334957.hot-update.js.map