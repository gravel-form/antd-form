webpackHotUpdate("static/development/pages/dynamic-array.js",{

/***/ "./middlewares/ValidateMw.tsx":
/*!************************************!*\
  !*** ./middlewares/ValidateMw.tsx ***!
  \************************************/
/*! exports provided: validate, ValidateMw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return validate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateMw", function() { return ValidateMw; });
/* harmony import */ var antd_lib_alert_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/alert/style */ "./node_modules/antd/lib/alert/style/index.js");
/* harmony import */ var antd_lib_alert_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_alert_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/alert */ "./node_modules/antd/lib/alert/index.js");
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_alert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ajv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ajv */ "./node_modules/ajv/lib/ajv.js");
/* harmony import */ var ajv__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ajv__WEBPACK_IMPORTED_MODULE_5__);





var _this = undefined,
    _jsxFileName = "/Users/yihui.lin/workspace/gravel/antd/middlewares/ValidateMw.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var ajv = new ajv__WEBPACK_IMPORTED_MODULE_5___default.a({
  errorDataPath: 'property',
  allErrors: true,
  multipleOfPrecision: 8,
  schemaId: 'auto',
  unknownFormats: 'ignore'
});
function validate(schema, data) {
  console.log(schema.properties && Object.keys(schema.properties));
  ajv.validate(schema, data);
  return ajv.errors;
}
var ValidateMw = function ValidateMw(props) {
  var schema = props.schema,
      data = props.data,
      next = props.next,
      parent = props.parent;

  var _React$useMemo = react__WEBPACK_IMPORTED_MODULE_4___default.a.useMemo(function () {
    try {
      return [parent || typeof schema === 'boolean' ? null : validate(schema, data), null];
    } catch (err) {
      return [null, err];
    }
  }, [schema, data]),
      _React$useMemo2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useMemo, 2),
      errors = _React$useMemo2[0],
      ajvException = _React$useMemo2[1];

  var newProps = react__WEBPACK_IMPORTED_MODULE_4___default.a.useMemo(function () {
    return _objectSpread({}, props, {
      errors: errors
    });
  }, [errors, props]);
  return ajvException ? __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(antd_lib_alert__WEBPACK_IMPORTED_MODULE_1___default.a, {
    message: "Ajv exception",
    description: ajvException.message,
    type: "error",
    showIcon: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }), next(props)) : next(errors ? newProps : props);
};
/* harmony default export */ __webpack_exports__["default"] = (ValidateMw);

/***/ })

})
//# sourceMappingURL=dynamic-array.js.6c47a6269db49a6e82fb.hot-update.js.map