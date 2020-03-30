webpackHotUpdate("static/development/pages/kitchensink.js",{

/***/ "./Form.tsx":
/*!******************!*\
  !*** ./Form.tsx ***!
  \******************/
/*! exports provided: withName, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withName", function() { return withName; });
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

function withName(list) {
  var _this2 = this;

  return list.map(function (_ref) {
    var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, 2),
        name = _ref2[0],
        Component = _ref2[1];

    var C = function C(props) {
      if (lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(props.extraProps, 'component') !== name) return props.next(props);
      return __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 14
        }
      }));
    };

    return C;
  });
}
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

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
/* harmony import */ var _middlewares_DatePicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../middlewares/DatePicker */ "./middlewares/DatePicker.tsx");
/* harmony import */ var _middlewares_ExtraPropsMw__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../middlewares/ExtraPropsMw */ "./middlewares/ExtraPropsMw.tsx");
/* harmony import */ var _middlewares_FormItemTemplateMw__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../middlewares/FormItemTemplateMw */ "./middlewares/FormItemTemplateMw.tsx");
/* harmony import */ var _middlewares_ValidateMw__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../middlewares/ValidateMw */ "./middlewares/ValidateMw.tsx");
/* harmony import */ var _middlewares_NotSupported__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../middlewares/NotSupported */ "./middlewares/NotSupported.tsx");
/* harmony import */ var _middlewares_ErrorListMw__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../middlewares/ErrorListMw */ "./middlewares/ErrorListMw.tsx");
/* harmony import */ var _middlewares_Input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../middlewares/Input */ "./middlewares/Input.tsx");
/* harmony import */ var _middlewares_InputNumber__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../middlewares/InputNumber */ "./middlewares/InputNumber.tsx");
/* harmony import */ var _middlewares_FieldsetTemplateMw__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../middlewares/FieldsetTemplateMw */ "./middlewares/FieldsetTemplateMw.tsx");
/* harmony import */ var _middlewares_CheckboxGroup__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../middlewares/CheckboxGroup */ "./middlewares/CheckboxGroup.tsx");
/* harmony import */ var _middlewares_Select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../middlewares/Select */ "./middlewares/Select.tsx");
/* harmony import */ var _middlewares_SubmitButtonMw__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../middlewares/SubmitButtonMw */ "./middlewares/SubmitButtonMw.tsx");
/* harmony import */ var _middlewares_RadioGroupMw__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../middlewares/RadioGroupMw */ "./middlewares/RadioGroupMw.tsx");
/* harmony import */ var _middlewares_CheckboxMw__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../middlewares/CheckboxMw */ "./middlewares/CheckboxMw.tsx");
/* harmony import */ var _middlewares_SwitchMw__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../middlewares/SwitchMw */ "./middlewares/SwitchMw.tsx");
/* harmony import */ var _middlewares_RateMw__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../middlewares/RateMw */ "./middlewares/RateMw.tsx");
/* harmony import */ var _middlewares_GridMw__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../middlewares/GridMw */ "./middlewares/GridMw.tsx");
/* harmony import */ var react_live__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-live */ "./node_modules/react-live/dist/react-live.es.js");
/* harmony import */ var _components_FormDataViewerMw__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../components/FormDataViewerMw */ "./components/FormDataViewerMw.tsx");








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
  RowMw: _middlewares_GridMw__WEBPACK_IMPORTED_MODULE_26__["RowMw"],
  ColMw: _middlewares_GridMw__WEBPACK_IMPORTED_MODULE_26__["ColMw"],
  FieldsetTemplateMw: _middlewares_FieldsetTemplateMw__WEBPACK_IMPORTED_MODULE_18__["default"],
  FormItemTemplateMw: _middlewares_FormItemTemplateMw__WEBPACK_IMPORTED_MODULE_12__["default"],
  FixedObjectMw: _middlewares_share__WEBPACK_IMPORTED_MODULE_9__["FixedObjectMw"],
  FixedArrayMw: _middlewares_share__WEBPACK_IMPORTED_MODULE_9__["FixedArrayMw"],
  // array, enum, unique
  CheckboxGroupMw: _middlewares_CheckboxGroup__WEBPACK_IMPORTED_MODULE_19__["default"],
  // boolean
  SwitchMw: _middlewares_SwitchMw__WEBPACK_IMPORTED_MODULE_24__["default"],
  CheckboxMw: _middlewares_CheckboxMw__WEBPACK_IMPORTED_MODULE_23__["default"],
  // enum
  RadioGroupMw: _middlewares_RadioGroupMw__WEBPACK_IMPORTED_MODULE_22__["default"],
  SelectMw: _middlewares_Select__WEBPACK_IMPORTED_MODULE_20__["default"],
  // integer
  RateMw: _middlewares_RateMw__WEBPACK_IMPORTED_MODULE_25__["default"],
  // number, integer
  InputNumberMw: _middlewares_InputNumber__WEBPACK_IMPORTED_MODULE_17__["default"],
  // string
  DatePickerMw: _middlewares_DatePicker__WEBPACK_IMPORTED_MODULE_10__["default"],
  TextAreaMw: _middlewares_Input__WEBPACK_IMPORTED_MODULE_16__["TextAreaMw"],
  PasswordMw: _middlewares_Input__WEBPACK_IMPORTED_MODULE_16__["PasswordMw"],
  InputMw: _middlewares_Input__WEBPACK_IMPORTED_MODULE_16__["default"],
  NotSupported: _middlewares_NotSupported__WEBPACK_IMPORTED_MODULE_14__["default"],
  // dev
  FormDataViewerMw: _components_FormDataViewerMw__WEBPACK_IMPORTED_MODULE_28__["default"]
};

var DemoForm = function DemoForm(_ref) {
  var code = _ref.code,
      scope = _ref.scope;

  if (typeof code === 'string') {
    return __jsx(react_live__WEBPACK_IMPORTED_MODULE_27__["LiveProvider"], {
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
        lineNumber: 76,
        columnNumber: 7
      }
    }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }
    }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
      span: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
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
        lineNumber: 94,
        columnNumber: 13
      }
    }, __jsx(react_live__WEBPACK_IMPORTED_MODULE_27__["LiveEditor"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 15
      }
    }))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
      span: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
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
        lineNumber: 99,
        columnNumber: 13
      }
    }, __jsx(react_live__WEBPACK_IMPORTED_MODULE_27__["LiveError"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 15
      }
    }), __jsx(react_live__WEBPACK_IMPORTED_MODULE_27__["LivePreview"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 15
      }
    })))));
  }

  return __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 5
    }
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }
  }, __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  })), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
  }, code)));
};

/* harmony default export */ __webpack_exports__["default"] = (DemoForm);

/***/ })

})
//# sourceMappingURL=kitchensink.js.b6fd0e84acf3acf5ea8b.hot-update.js.map