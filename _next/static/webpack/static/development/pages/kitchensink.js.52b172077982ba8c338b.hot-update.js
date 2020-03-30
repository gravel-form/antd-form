webpackHotUpdate("static/development/pages/kitchensink.js",{

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
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Form */ "./Form.tsx");
/* harmony import */ var _middlewares_share__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../middlewares/share */ "./middlewares/share.ts");
/* harmony import */ var _middlewares_DatePickerMw__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../middlewares/DatePickerMw */ "./middlewares/DatePickerMw.tsx");
/* harmony import */ var _middlewares_ExtraPropsMw__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../middlewares/ExtraPropsMw */ "./middlewares/ExtraPropsMw.tsx");
/* harmony import */ var _middlewares_FormItemTemplateMw__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../middlewares/FormItemTemplateMw */ "./middlewares/FormItemTemplateMw.tsx");
/* harmony import */ var _middlewares_ValidateMw__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../middlewares/ValidateMw */ "./middlewares/ValidateMw.tsx");
/* harmony import */ var _middlewares_NotSupportedMw__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../middlewares/NotSupportedMw */ "./middlewares/NotSupportedMw.tsx");
/* harmony import */ var _middlewares_ErrorListMw__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../middlewares/ErrorListMw */ "./middlewares/ErrorListMw.tsx");
/* harmony import */ var _middlewares_InputMw__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../middlewares/InputMw */ "./middlewares/InputMw.tsx");
/* harmony import */ var _middlewares_InputNumberMw__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../middlewares/InputNumberMw */ "./middlewares/InputNumberMw.tsx");
/* harmony import */ var _middlewares_FieldsetTemplateMw__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../middlewares/FieldsetTemplateMw */ "./middlewares/FieldsetTemplateMw.tsx");
/* harmony import */ var _middlewares_CheckboxGroupMw__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../middlewares/CheckboxGroupMw */ "./middlewares/CheckboxGroupMw.tsx");
/* harmony import */ var _middlewares_SelectMw__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../middlewares/SelectMw */ "./middlewares/SelectMw.tsx");
/* harmony import */ var _middlewares_SubmitButtonMw__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../middlewares/SubmitButtonMw */ "./middlewares/SubmitButtonMw.tsx");
/* harmony import */ var _middlewares_RadioGroupMw__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../middlewares/RadioGroupMw */ "./middlewares/RadioGroupMw.tsx");
/* harmony import */ var _middlewares_CheckboxMw__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../middlewares/CheckboxMw */ "./middlewares/CheckboxMw.tsx");
/* harmony import */ var _middlewares_SwitchMw__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../middlewares/SwitchMw */ "./middlewares/SwitchMw.tsx");
/* harmony import */ var _middlewares_RateMw__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../middlewares/RateMw */ "./middlewares/RateMw.tsx");
/* harmony import */ var _middlewares_SliderMw__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../middlewares/SliderMw */ "./middlewares/SliderMw.tsx");
/* harmony import */ var _middlewares_GridMw__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../middlewares/GridMw */ "./middlewares/GridMw.tsx");
/* harmony import */ var react_live__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react-live */ "./node_modules/react-live/dist/react-live.es.js");
/* harmony import */ var _components_FormDataViewerMw__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../components/FormDataViewerMw */ "./components/FormDataViewerMw.tsx");








var _this = undefined,
    _jsxFileName = "/Users/yihui.lin/workspace/gravel/antd/components/DemoForm.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7__["createElement"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
























var map = {
  schemaMws: _middlewares_share__WEBPACK_IMPORTED_MODULE_9__["schemaMws"],
  SubmitButtonMw: _middlewares_SubmitButtonMw__WEBPACK_IMPORTED_MODULE_21__["SubmitButtonMw"],
  SubmitButtonWithValidationMw: _middlewares_SubmitButtonMw__WEBPACK_IMPORTED_MODULE_21__["SubmitButtonWithValidationMw"],
  ValidateMw: _middlewares_ValidateMw__WEBPACK_IMPORTED_MODULE_13__["default"],
  ExtraPropsMw: _middlewares_ExtraPropsMw__WEBPACK_IMPORTED_MODULE_11__["default"],
  ErrorListMw: _middlewares_ErrorListMw__WEBPACK_IMPORTED_MODULE_15__["default"],
  RowMw: _middlewares_GridMw__WEBPACK_IMPORTED_MODULE_27__["RowMw"],
  ColMw: _middlewares_GridMw__WEBPACK_IMPORTED_MODULE_27__["ColMw"],
  FieldsetTemplateMw: _middlewares_FieldsetTemplateMw__WEBPACK_IMPORTED_MODULE_18__["default"],
  FormItemTemplateMw: _middlewares_FormItemTemplateMw__WEBPACK_IMPORTED_MODULE_12__["default"],
  FixedObjectMw: _middlewares_share__WEBPACK_IMPORTED_MODULE_9__["FixedObjectMw"],
  FixedArrayMw: _middlewares_share__WEBPACK_IMPORTED_MODULE_9__["FixedArrayMw"],
  // array, enum, unique
  CheckboxGroupMw: _middlewares_CheckboxGroupMw__WEBPACK_IMPORTED_MODULE_19__["default"],
  // boolean
  SwitchMw: _middlewares_SwitchMw__WEBPACK_IMPORTED_MODULE_24__["default"],
  CheckboxMw: _middlewares_CheckboxMw__WEBPACK_IMPORTED_MODULE_23__["default"],
  // enum
  RadioGroupMw: _middlewares_RadioGroupMw__WEBPACK_IMPORTED_MODULE_22__["default"],
  SelectMw: _middlewares_SelectMw__WEBPACK_IMPORTED_MODULE_20__["default"],
  // integer
  RateMw: _middlewares_RateMw__WEBPACK_IMPORTED_MODULE_25__["default"],
  // number, integer
  InputNumberMw: _middlewares_InputNumberMw__WEBPACK_IMPORTED_MODULE_17__["default"],
  SliderMw: _middlewares_SliderMw__WEBPACK_IMPORTED_MODULE_26__["default"],
  // string
  DatePickerMw: _middlewares_DatePickerMw__WEBPACK_IMPORTED_MODULE_10__["default"],
  TextAreaMw: _middlewares_InputMw__WEBPACK_IMPORTED_MODULE_16__["TextAreaMw"],
  PasswordMw: _middlewares_InputMw__WEBPACK_IMPORTED_MODULE_16__["PasswordMw"],
  InputMw: _middlewares_InputMw__WEBPACK_IMPORTED_MODULE_16__["default"],
  NotSupported: _middlewares_NotSupportedMw__WEBPACK_IMPORTED_MODULE_14__["default"],
  // dev
  FormDataViewerMw: _components_FormDataViewerMw__WEBPACK_IMPORTED_MODULE_29__["default"]
};

var DemoForm = function DemoForm(_ref) {
  var code = _ref.code,
      scope = _ref.scope;

  if (typeof code === 'string') {
    return __jsx(react_live__WEBPACK_IMPORTED_MODULE_28__["LiveProvider"], {
      code: code,
      scope: _objectSpread({
        Form: _Form__WEBPACK_IMPORTED_MODULE_8__["default"],
        withName: _Form__WEBPACK_IMPORTED_MODULE_8__["withName"]
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
        lineNumber: 79,
        columnNumber: 7
      }
    }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }
    }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
      span: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
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
        lineNumber: 97,
        columnNumber: 13
      }
    }, __jsx(react_live__WEBPACK_IMPORTED_MODULE_28__["LiveEditor"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 15
      }
    }))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
      span: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
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
        lineNumber: 102,
        columnNumber: 13
      }
    }, __jsx(react_live__WEBPACK_IMPORTED_MODULE_28__["LiveError"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 15
      }
    }), __jsx(react_live__WEBPACK_IMPORTED_MODULE_28__["LivePreview"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 15
      }
    })))));
  }

  return __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 5
    }
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }
  }, __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  })), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }
  }, __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }, code)));
};

/* harmony default export */ __webpack_exports__["default"] = (DemoForm);

/***/ })

})
//# sourceMappingURL=kitchensink.js.52b172077982ba8c338b.hot-update.js.map