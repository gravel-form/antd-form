webpackHotUpdate("static/development/pages/grid.js",{

/***/ "./components/DemoForm.tsx":
/*!*********************************!*\
  !*** ./components/DemoForm.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row/style */ "./node_modules/antd/lib/row/style/index.js");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col/style */ "./node_modules/antd/lib/col/style/index.js");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/card/style */ "./node_modules/antd/lib/card/style/index.js");
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/card */ "./node_modules/antd/lib/card/index.js");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_live__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-live */ "./node_modules/react-live/dist/react-live.es.js");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Form */ "./Form.tsx");
/* harmony import */ var _middlewares_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../middlewares/index */ "./middlewares/index.tsx");
/* harmony import */ var _middlewares_share__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../middlewares/share */ "./middlewares/share.ts");
/* harmony import */ var _middlewares_DatePickerMw__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../middlewares/DatePickerMw */ "./middlewares/DatePickerMw.tsx");
/* harmony import */ var _middlewares_TimePickerMw__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../middlewares/TimePickerMw */ "./middlewares/TimePickerMw.tsx");
/* harmony import */ var _middlewares_ExtraPropsMw__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../middlewares/ExtraPropsMw */ "./middlewares/ExtraPropsMw.tsx");
/* harmony import */ var _middlewares_FormItemTemplateMw__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../middlewares/FormItemTemplateMw */ "./middlewares/FormItemTemplateMw.tsx");
/* harmony import */ var _middlewares_ValidateMw__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../middlewares/ValidateMw */ "./middlewares/ValidateMw.tsx");
/* harmony import */ var _middlewares_NotSupportedMw__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../middlewares/NotSupportedMw */ "./middlewares/NotSupportedMw.tsx");
/* harmony import */ var _middlewares_ErrorListMw__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../middlewares/ErrorListMw */ "./middlewares/ErrorListMw.tsx");
/* harmony import */ var _middlewares_InputMw__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../middlewares/InputMw */ "./middlewares/InputMw.tsx");
/* harmony import */ var _middlewares_InputNumberMw__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../middlewares/InputNumberMw */ "./middlewares/InputNumberMw.tsx");
/* harmony import */ var _middlewares_FieldsetTemplateMw__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../middlewares/FieldsetTemplateMw */ "./middlewares/FieldsetTemplateMw.tsx");
/* harmony import */ var _middlewares_CheckboxGroupMw__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../middlewares/CheckboxGroupMw */ "./middlewares/CheckboxGroupMw.tsx");
/* harmony import */ var _middlewares_SelectMw__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../middlewares/SelectMw */ "./middlewares/SelectMw.tsx");
/* harmony import */ var _middlewares_SubmitButtonMw__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../middlewares/SubmitButtonMw */ "./middlewares/SubmitButtonMw.tsx");
/* harmony import */ var _middlewares_RadioGroupMw__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../middlewares/RadioGroupMw */ "./middlewares/RadioGroupMw.tsx");
/* harmony import */ var _middlewares_CheckboxMw__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../middlewares/CheckboxMw */ "./middlewares/CheckboxMw.tsx");
/* harmony import */ var _middlewares_SwitchMw__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../middlewares/SwitchMw */ "./middlewares/SwitchMw.tsx");
/* harmony import */ var _middlewares_RateMw__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../middlewares/RateMw */ "./middlewares/RateMw.tsx");
/* harmony import */ var _middlewares_SliderMw__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../middlewares/SliderMw */ "./middlewares/SliderMw.tsx");
/* harmony import */ var _middlewares_GridMw__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../middlewares/GridMw */ "./middlewares/GridMw.tsx");
/* harmony import */ var _components_FormDataViewerMw__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../components/FormDataViewerMw */ "./components/FormDataViewerMw.tsx");








var _this = undefined,
    _jsxFileName = "/Users/yihui.lin/workspace/gravel/antd/components/DemoForm.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7__["createElement"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


























var map = {
  schemaMws: _middlewares_share__WEBPACK_IMPORTED_MODULE_11__["schemaMws"],
  SubmitButtonMw: _middlewares_SubmitButtonMw__WEBPACK_IMPORTED_MODULE_24__["SubmitButtonMw"],
  SubmitButtonWithValidationMw: _middlewares_SubmitButtonMw__WEBPACK_IMPORTED_MODULE_24__["SubmitButtonWithValidationMw"],
  ValidateMw: _middlewares_ValidateMw__WEBPACK_IMPORTED_MODULE_16__["default"],
  ExtraPropsMw: _middlewares_ExtraPropsMw__WEBPACK_IMPORTED_MODULE_14__["default"],
  ErrorListMw: _middlewares_ErrorListMw__WEBPACK_IMPORTED_MODULE_18__["default"],
  RowMw: _middlewares_GridMw__WEBPACK_IMPORTED_MODULE_30__["RowMw"],
  ColMw: _middlewares_GridMw__WEBPACK_IMPORTED_MODULE_30__["ColMw"],
  FieldsetTemplateMw: _middlewares_FieldsetTemplateMw__WEBPACK_IMPORTED_MODULE_21__["default"],
  FormItemTemplateMw: _middlewares_FormItemTemplateMw__WEBPACK_IMPORTED_MODULE_15__["default"],
  FixedObjectMw: _middlewares_share__WEBPACK_IMPORTED_MODULE_11__["FixedObjectMw"],
  FixedArrayMw: _middlewares_share__WEBPACK_IMPORTED_MODULE_11__["FixedArrayMw"],
  // array, enum, unique
  CheckboxGroupMw: _middlewares_CheckboxGroupMw__WEBPACK_IMPORTED_MODULE_22__["default"],
  // boolean
  SwitchMw: _middlewares_SwitchMw__WEBPACK_IMPORTED_MODULE_27__["default"],
  CheckboxMw: _middlewares_CheckboxMw__WEBPACK_IMPORTED_MODULE_26__["default"],
  // enum
  RadioGroupMw: _middlewares_RadioGroupMw__WEBPACK_IMPORTED_MODULE_25__["default"],
  SelectMw: _middlewares_SelectMw__WEBPACK_IMPORTED_MODULE_23__["default"],
  // integer
  RateMw: _middlewares_RateMw__WEBPACK_IMPORTED_MODULE_28__["default"],
  // number, integer
  InputNumberMw: _middlewares_InputNumberMw__WEBPACK_IMPORTED_MODULE_20__["default"],
  SliderMw: _middlewares_SliderMw__WEBPACK_IMPORTED_MODULE_29__["default"],
  // string
  DatePickerMw: _middlewares_DatePickerMw__WEBPACK_IMPORTED_MODULE_12__["default"],
  TimePickerMw: _middlewares_TimePickerMw__WEBPACK_IMPORTED_MODULE_13__["default"],
  TextAreaMw: _middlewares_InputMw__WEBPACK_IMPORTED_MODULE_19__["TextAreaMw"],
  PasswordMw: _middlewares_InputMw__WEBPACK_IMPORTED_MODULE_19__["PasswordMw"],
  InputMw: _middlewares_InputMw__WEBPACK_IMPORTED_MODULE_19__["default"],
  NotSupportedMw: _middlewares_NotSupportedMw__WEBPACK_IMPORTED_MODULE_17__["default"],
  // dev
  FormDataViewerMw: _components_FormDataViewerMw__WEBPACK_IMPORTED_MODULE_31__["default"]
};

var DemoForm = function DemoForm(_ref) {
  var code = _ref.code,
      scope = _ref.scope;

  if (typeof code === 'string') {
    return __jsx(react_live__WEBPACK_IMPORTED_MODULE_8__["LiveProvider"], {
      code: code,
      scope: _objectSpread({
        Form: _Form__WEBPACK_IMPORTED_MODULE_9__["default"],
        withName: _middlewares_index__WEBPACK_IMPORTED_MODULE_10__["withName"]
      }, map, {
        Ajv: __webpack_require__(/*! ajv */ "./node_modules/ajv/lib/ajv.js"),
        Antd: __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js"),
        ReactAsyncHook: __webpack_require__(/*! react-async-hook */ "./node_modules/react-async-hook/dist/index.js"),
        GravelFormCore: __webpack_require__(/*! ../core/src */ "./core/src/index.ts"),
        Bluebird: __webpack_require__(/*! bluebird */ "./node_modules/bluebird/js/browser/bluebird.js"),
        Lodash: __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js")
      }, scope),
      noInline: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 7
      }
    }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }
    }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
      span: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 11
      }
    }, __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default.a, {
      style: {
        height: '100vh',
        overflowY: 'auto'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 13
      }
    }, __jsx(react_live__WEBPACK_IMPORTED_MODULE_8__["LiveEditor"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 15
      }
    }))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
      span: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 11
      }
    }, __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default.a, {
      style: {
        height: '100vh',
        overflowY: 'auto'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 13
      }
    }, __jsx(react_live__WEBPACK_IMPORTED_MODULE_8__["LiveError"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 15
      }
    }), __jsx(react_live__WEBPACK_IMPORTED_MODULE_8__["LivePreview"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 15
      }
    })))));
  }

  return __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 5
    }
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }
  }, __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  })), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }
  }, __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, code)));
};

/* harmony default export */ __webpack_exports__["default"] = (DemoForm);

/***/ }),

/***/ "./middlewares/CheckboxMw.tsx":
/*!************************************!*\
  !*** ./middlewares/CheckboxMw.tsx ***!
  \************************************/
/*! exports provided: CheckboxMw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxMw", function() { return CheckboxMw; });
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


var CheckboxMw = function CheckboxMw(props) {
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
/* harmony default export */ __webpack_exports__["default"] = (CheckboxMw);

/***/ }),

/***/ "./middlewares/index.ts":
false,

/***/ "./middlewares/index.tsx":
/*!*******************************!*\
  !*** ./middlewares/index.tsx ***!
  \*******************************/
/*! exports provided: DatePickerMw, TimePickerMw, ExtraPropsMw, FormItemTemplateBaseMw, FormItemTemplateMw, validate, ValidateMw, ErrorListMw, InputMw, TextAreaMw, PasswordMw, InputNumberMw, FieldsetTemplateMw, CheckboxGroupMw, SelectMw, SubmitButtonMw, SubmitButtonWithValidationMw, RadioGroupMw, CheckboxMw, SwitchMw, RateMw, SliderMw, ColMw, RowMw, withName, basicFormControls, advancedFormControls, preset, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withName", function() { return withName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basicFormControls", function() { return basicFormControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "advancedFormControls", function() { return advancedFormControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preset", function() { return preset; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_src__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/src */ "./core/src/index.ts");
/* harmony import */ var _middlewares_DatePickerMw__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../middlewares/DatePickerMw */ "./middlewares/DatePickerMw.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatePickerMw", function() { return _middlewares_DatePickerMw__WEBPACK_IMPORTED_MODULE_6__["DatePickerMw"]; });

/* harmony import */ var _middlewares_TimePickerMw__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../middlewares/TimePickerMw */ "./middlewares/TimePickerMw.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimePickerMw", function() { return _middlewares_TimePickerMw__WEBPACK_IMPORTED_MODULE_7__["TimePickerMw"]; });

/* harmony import */ var _middlewares_ExtraPropsMw__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../middlewares/ExtraPropsMw */ "./middlewares/ExtraPropsMw.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExtraPropsMw", function() { return _middlewares_ExtraPropsMw__WEBPACK_IMPORTED_MODULE_8__["ExtraPropsMw"]; });

/* harmony import */ var _middlewares_FormItemTemplateMw__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../middlewares/FormItemTemplateMw */ "./middlewares/FormItemTemplateMw.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormItemTemplateBaseMw", function() { return _middlewares_FormItemTemplateMw__WEBPACK_IMPORTED_MODULE_9__["FormItemTemplateBaseMw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormItemTemplateMw", function() { return _middlewares_FormItemTemplateMw__WEBPACK_IMPORTED_MODULE_9__["FormItemTemplateMw"]; });

/* harmony import */ var _middlewares_ValidateMw__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../middlewares/ValidateMw */ "./middlewares/ValidateMw.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return _middlewares_ValidateMw__WEBPACK_IMPORTED_MODULE_10__["validate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValidateMw", function() { return _middlewares_ValidateMw__WEBPACK_IMPORTED_MODULE_10__["ValidateMw"]; });

/* harmony import */ var _middlewares_NotSupportedMw__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../middlewares/NotSupportedMw */ "./middlewares/NotSupportedMw.tsx");
/* empty/unused harmony star reexport *//* harmony import */ var _middlewares_ErrorListMw__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../middlewares/ErrorListMw */ "./middlewares/ErrorListMw.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorListMw", function() { return _middlewares_ErrorListMw__WEBPACK_IMPORTED_MODULE_12__["ErrorListMw"]; });

/* harmony import */ var _middlewares_InputMw__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../middlewares/InputMw */ "./middlewares/InputMw.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputMw", function() { return _middlewares_InputMw__WEBPACK_IMPORTED_MODULE_13__["InputMw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextAreaMw", function() { return _middlewares_InputMw__WEBPACK_IMPORTED_MODULE_13__["TextAreaMw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PasswordMw", function() { return _middlewares_InputMw__WEBPACK_IMPORTED_MODULE_13__["PasswordMw"]; });

/* harmony import */ var _middlewares_InputNumberMw__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../middlewares/InputNumberMw */ "./middlewares/InputNumberMw.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputNumberMw", function() { return _middlewares_InputNumberMw__WEBPACK_IMPORTED_MODULE_14__["InputNumberMw"]; });

/* harmony import */ var _middlewares_FieldsetTemplateMw__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../middlewares/FieldsetTemplateMw */ "./middlewares/FieldsetTemplateMw.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FieldsetTemplateMw", function() { return _middlewares_FieldsetTemplateMw__WEBPACK_IMPORTED_MODULE_15__["FieldsetTemplateMw"]; });

/* harmony import */ var _middlewares_CheckboxGroupMw__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../middlewares/CheckboxGroupMw */ "./middlewares/CheckboxGroupMw.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxGroupMw", function() { return _middlewares_CheckboxGroupMw__WEBPACK_IMPORTED_MODULE_16__["CheckboxGroupMw"]; });

/* harmony import */ var _middlewares_SelectMw__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../middlewares/SelectMw */ "./middlewares/SelectMw.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectMw", function() { return _middlewares_SelectMw__WEBPACK_IMPORTED_MODULE_17__["SelectMw"]; });

/* harmony import */ var _middlewares_SubmitButtonMw__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../middlewares/SubmitButtonMw */ "./middlewares/SubmitButtonMw.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubmitButtonMw", function() { return _middlewares_SubmitButtonMw__WEBPACK_IMPORTED_MODULE_18__["SubmitButtonMw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubmitButtonWithValidationMw", function() { return _middlewares_SubmitButtonMw__WEBPACK_IMPORTED_MODULE_18__["SubmitButtonWithValidationMw"]; });

/* harmony import */ var _middlewares_RadioGroupMw__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../middlewares/RadioGroupMw */ "./middlewares/RadioGroupMw.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioGroupMw", function() { return _middlewares_RadioGroupMw__WEBPACK_IMPORTED_MODULE_19__["RadioGroupMw"]; });

/* harmony import */ var _middlewares_CheckboxMw__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../middlewares/CheckboxMw */ "./middlewares/CheckboxMw.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxMw", function() { return _middlewares_CheckboxMw__WEBPACK_IMPORTED_MODULE_20__["CheckboxMw"]; });

/* harmony import */ var _middlewares_SwitchMw__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../middlewares/SwitchMw */ "./middlewares/SwitchMw.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwitchMw", function() { return _middlewares_SwitchMw__WEBPACK_IMPORTED_MODULE_21__["SwitchMw"]; });

/* harmony import */ var _middlewares_RateMw__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../middlewares/RateMw */ "./middlewares/RateMw.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RateMw", function() { return _middlewares_RateMw__WEBPACK_IMPORTED_MODULE_22__["RateMw"]; });

/* harmony import */ var _middlewares_SliderMw__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../middlewares/SliderMw */ "./middlewares/SliderMw.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SliderMw", function() { return _middlewares_SliderMw__WEBPACK_IMPORTED_MODULE_23__["SliderMw"]; });

/* harmony import */ var _middlewares_GridMw__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../middlewares/GridMw */ "./middlewares/GridMw.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColMw", function() { return _middlewares_GridMw__WEBPACK_IMPORTED_MODULE_24__["ColMw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RowMw", function() { return _middlewares_GridMw__WEBPACK_IMPORTED_MODULE_24__["RowMw"]; });




var _jsxFileName = "/Users/yihui.lin/workspace/gravel/antd/middlewares/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3__["createElement"];







































function withName(list) {
  var _this = this;

  return list.map(function (_ref) {
    var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, 2),
        name = _ref2[0],
        Component = _ref2[1];

    var ComponentWithName = function ComponentWithName(props) {
      if (lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(props.extraProps, 'component') !== name) return props.next(props);
      return __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 14
        }
      }));
    };

    return ComponentWithName;
  });
}
var basicFormControls = [_middlewares_CheckboxGroupMw__WEBPACK_IMPORTED_MODULE_16__["default"], _middlewares_CheckboxMw__WEBPACK_IMPORTED_MODULE_20__["default"], _middlewares_SelectMw__WEBPACK_IMPORTED_MODULE_17__["default"], _middlewares_InputMw__WEBPACK_IMPORTED_MODULE_13__["default"], _middlewares_InputNumberMw__WEBPACK_IMPORTED_MODULE_14__["default"], _middlewares_NotSupportedMw__WEBPACK_IMPORTED_MODULE_11__["default"]];
var advancedFormControls = withName([['DatePicker', _middlewares_DatePickerMw__WEBPACK_IMPORTED_MODULE_6__["default"]], ['TimePicker', _middlewares_TimePickerMw__WEBPACK_IMPORTED_MODULE_7__["default"]], ['Rate', _middlewares_RateMw__WEBPACK_IMPORTED_MODULE_22__["default"]], ['Switch', _middlewares_SwitchMw__WEBPACK_IMPORTED_MODULE_21__["default"]], ['TextArea', _middlewares_InputMw__WEBPACK_IMPORTED_MODULE_13__["TextAreaMw"]], ['Password', _middlewares_InputMw__WEBPACK_IMPORTED_MODULE_13__["PasswordMw"]], ['RadioGroup', _middlewares_RadioGroupMw__WEBPACK_IMPORTED_MODULE_19__["default"]], ['Slider', _middlewares_SliderMw__WEBPACK_IMPORTED_MODULE_23__["default"]]]);
var preset = [_middlewares_SubmitButtonMw__WEBPACK_IMPORTED_MODULE_18__["SubmitButtonWithValidationMw"], _middlewares_ExtraPropsMw__WEBPACK_IMPORTED_MODULE_8__["default"], _middlewares_GridMw__WEBPACK_IMPORTED_MODULE_24__["ColMw"], _middlewares_FieldsetTemplateMw__WEBPACK_IMPORTED_MODULE_15__["default"], _middlewares_GridMw__WEBPACK_IMPORTED_MODULE_24__["RowMw"]].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_core_src__WEBPACK_IMPORTED_MODULE_5__["schemaMws"]), [_middlewares_FormItemTemplateMw__WEBPACK_IMPORTED_MODULE_9__["default"]], Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(advancedFormControls), basicFormControls);
/* harmony default export */ __webpack_exports__["default"] = (preset);

/***/ })

})
//# sourceMappingURL=grid.js.040716806ff9fbd1d7c5.hot-update.js.map