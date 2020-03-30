webpackHotUpdate("static/development/pages/basic.js",{

/***/ "./middlewares/index.ts":
/*!******************************!*\
  !*** ./middlewares/index.ts ***!
  \******************************/
/*! exports provided: withName, preset, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withName", function() { return withName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preset", function() { return preset; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_src__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/src */ "./core/src/index.ts");
/* harmony import */ var _middlewares_DatePickerMw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../middlewares/DatePickerMw */ "./middlewares/DatePickerMw.tsx");
/* harmony import */ var _middlewares_ExtraPropsMw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../middlewares/ExtraPropsMw */ "./middlewares/ExtraPropsMw.tsx");
/* harmony import */ var _middlewares_FormItemTemplateMw__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../middlewares/FormItemTemplateMw */ "./middlewares/FormItemTemplateMw.tsx");
/* harmony import */ var _middlewares_NotSupportedMw__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../middlewares/NotSupportedMw */ "./middlewares/NotSupportedMw.tsx");
/* harmony import */ var _middlewares_InputMw__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../middlewares/InputMw */ "./middlewares/InputMw.tsx");
/* harmony import */ var _middlewares_InputNumberMw__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../middlewares/InputNumberMw */ "./middlewares/InputNumberMw.tsx");
/* harmony import */ var _middlewares_FieldsetTemplateMw__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../middlewares/FieldsetTemplateMw */ "./middlewares/FieldsetTemplateMw.tsx");
/* harmony import */ var _middlewares_CheckboxGroupMw__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../middlewares/CheckboxGroupMw */ "./middlewares/CheckboxGroupMw.tsx");
/* harmony import */ var _middlewares_SelectMw__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../middlewares/SelectMw */ "./middlewares/SelectMw.tsx");
/* harmony import */ var _middlewares_SubmitButtonMw__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../middlewares/SubmitButtonMw */ "./middlewares/SubmitButtonMw.tsx");
/* harmony import */ var _middlewares_RadioGroupMw__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../middlewares/RadioGroupMw */ "./middlewares/RadioGroupMw.tsx");
/* harmony import */ var _middlewares_CheckboxMw__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../middlewares/CheckboxMw */ "./middlewares/CheckboxMw.tsx");
/* harmony import */ var _middlewares_SwitchMw__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../middlewares/SwitchMw */ "./middlewares/SwitchMw.tsx");
/* harmony import */ var _middlewares_RateMw__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../middlewares/RateMw */ "./middlewares/RateMw.tsx");
/* harmony import */ var _middlewares_GridMw__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../middlewares/GridMw */ "./middlewares/GridMw.tsx");



















function withName(list) {
  return list.map(function (_ref) {
    var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, 2),
        name = _ref2[0],
        Component = _ref2[1];

    var ComponentWithName = function ComponentWithName(props) {
      if (lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(props.extraProps, 'component') !== name) return props.next(props);
      return component(props);
    };

    return ComponentWithName;
  });
}
var preset = [// SubmitButtonMw,
// ValidateMw,
_middlewares_SubmitButtonMw__WEBPACK_IMPORTED_MODULE_13__["SubmitButtonWithValidationMw"], _middlewares_ExtraPropsMw__WEBPACK_IMPORTED_MODULE_5__["default"], _middlewares_GridMw__WEBPACK_IMPORTED_MODULE_18__["ColMw"], _middlewares_FieldsetTemplateMw__WEBPACK_IMPORTED_MODULE_10__["default"], _middlewares_GridMw__WEBPACK_IMPORTED_MODULE_18__["RowMw"]].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_core_src__WEBPACK_IMPORTED_MODULE_3__["schemaMws"]), [_middlewares_FormItemTemplateMw__WEBPACK_IMPORTED_MODULE_6__["default"]], Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(withName([['DatePicker', _middlewares_DatePickerMw__WEBPACK_IMPORTED_MODULE_4__["default"]], ['Rate', _middlewares_RateMw__WEBPACK_IMPORTED_MODULE_17__["default"]], ['Switch', _middlewares_SwitchMw__WEBPACK_IMPORTED_MODULE_16__["default"]], ['TextArea', _middlewares_InputMw__WEBPACK_IMPORTED_MODULE_8__["TextAreaMw"]], ['Password', _middlewares_InputMw__WEBPACK_IMPORTED_MODULE_8__["PasswordMw"]], ['RadioGroup', _middlewares_RadioGroupMw__WEBPACK_IMPORTED_MODULE_14__["default"]]])), [_middlewares_CheckboxGroupMw__WEBPACK_IMPORTED_MODULE_11__["default"], _middlewares_CheckboxMw__WEBPACK_IMPORTED_MODULE_15__["default"], _middlewares_SelectMw__WEBPACK_IMPORTED_MODULE_12__["default"], _middlewares_InputMw__WEBPACK_IMPORTED_MODULE_8__["default"], _middlewares_InputNumberMw__WEBPACK_IMPORTED_MODULE_9__["default"], _middlewares_NotSupportedMw__WEBPACK_IMPORTED_MODULE_7__["default"]]);
/* harmony default export */ __webpack_exports__["default"] = (preset);

/***/ })

})
//# sourceMappingURL=basic.js.bc1f81fe109b5c11cad0.hot-update.js.map