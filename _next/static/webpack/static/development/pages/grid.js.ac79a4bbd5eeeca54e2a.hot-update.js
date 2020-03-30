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
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Form */ "./Form.tsx");
/* harmony import */ var _middlewares_share__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../middlewares/share */ "./middlewares/share.ts");
/* harmony import */ var _middlewares_DatePickerMw__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../middlewares/DatePickerMw */ "./middlewares/DatePickerMw.tsx");
/* harmony import */ var _middlewares_TimePickerMw__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../middlewares/TimePickerMw */ "./middlewares/TimePickerMw.tsx");
/* harmony import */ var _middlewares_ExtraPropsMw__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../middlewares/ExtraPropsMw */ "./middlewares/ExtraPropsMw.tsx");
/* harmony import */ var _middlewares_FormItemTemplateMw__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../middlewares/FormItemTemplateMw */ "./middlewares/FormItemTemplateMw.tsx");
/* harmony import */ var _middlewares_ValidateMw__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../middlewares/ValidateMw */ "./middlewares/ValidateMw.tsx");
/* harmony import */ var _middlewares_NotSupportedMw__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../middlewares/NotSupportedMw */ "./middlewares/NotSupportedMw.tsx");
/* harmony import */ var _middlewares_ErrorListMw__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../middlewares/ErrorListMw */ "./middlewares/ErrorListMw.tsx");
/* harmony import */ var _middlewares_InputMw__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../middlewares/InputMw */ "./middlewares/InputMw.tsx");
/* harmony import */ var _middlewares_InputNumberMw__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../middlewares/InputNumberMw */ "./middlewares/InputNumberMw.tsx");
/* harmony import */ var _middlewares_FieldsetTemplateMw__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../middlewares/FieldsetTemplateMw */ "./middlewares/FieldsetTemplateMw.tsx");
/* harmony import */ var _middlewares_CheckboxGroupMw__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../middlewares/CheckboxGroupMw */ "./middlewares/CheckboxGroupMw.tsx");
/* harmony import */ var _middlewares_SelectMw__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../middlewares/SelectMw */ "./middlewares/SelectMw.tsx");
/* harmony import */ var _middlewares_SubmitButtonMw__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../middlewares/SubmitButtonMw */ "./middlewares/SubmitButtonMw.tsx");
/* harmony import */ var _middlewares_RadioGroupMw__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../middlewares/RadioGroupMw */ "./middlewares/RadioGroupMw.tsx");
/* harmony import */ var _middlewares_CheckboxMw__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../middlewares/CheckboxMw */ "./middlewares/CheckboxMw.tsx");
/* harmony import */ var _middlewares_SwitchMw__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../middlewares/SwitchMw */ "./middlewares/SwitchMw.tsx");
/* harmony import */ var _middlewares_RateMw__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../middlewares/RateMw */ "./middlewares/RateMw.tsx");
/* harmony import */ var _middlewares_SliderMw__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../middlewares/SliderMw */ "./middlewares/SliderMw.tsx");
/* harmony import */ var _middlewares_GridMw__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../middlewares/GridMw */ "./middlewares/GridMw.tsx");
/* harmony import */ var react_live__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! react-live */ "./node_modules/react-live/dist/react-live.es.js");
/* harmony import */ var _components_FormDataViewerMw__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../components/FormDataViewerMw */ "./components/FormDataViewerMw.tsx");








var _this = undefined,
    _jsxFileName = "/Users/yihui.lin/workspace/gravel/antd/components/DemoForm.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7__["createElement"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

























var map = {
  schemaMws: _middlewares_share__WEBPACK_IMPORTED_MODULE_9__["schemaMws"],
  SubmitButtonMw: _middlewares_SubmitButtonMw__WEBPACK_IMPORTED_MODULE_22__["SubmitButtonMw"],
  SubmitButtonWithValidationMw: _middlewares_SubmitButtonMw__WEBPACK_IMPORTED_MODULE_22__["SubmitButtonWithValidationMw"],
  ValidateMw: _middlewares_ValidateMw__WEBPACK_IMPORTED_MODULE_14__["default"],
  ExtraPropsMw: _middlewares_ExtraPropsMw__WEBPACK_IMPORTED_MODULE_12__["default"],
  ErrorListMw: _middlewares_ErrorListMw__WEBPACK_IMPORTED_MODULE_16__["default"],
  RowMw: _middlewares_GridMw__WEBPACK_IMPORTED_MODULE_28__["RowMw"],
  ColMw: _middlewares_GridMw__WEBPACK_IMPORTED_MODULE_28__["ColMw"],
  FieldsetTemplateMw: _middlewares_FieldsetTemplateMw__WEBPACK_IMPORTED_MODULE_19__["default"],
  FormItemTemplateMw: _middlewares_FormItemTemplateMw__WEBPACK_IMPORTED_MODULE_13__["default"],
  FixedObjectMw: _middlewares_share__WEBPACK_IMPORTED_MODULE_9__["FixedObjectMw"],
  FixedArrayMw: _middlewares_share__WEBPACK_IMPORTED_MODULE_9__["FixedArrayMw"],
  // array, enum, unique
  CheckboxGroupMw: _middlewares_CheckboxGroupMw__WEBPACK_IMPORTED_MODULE_20__["default"],
  // boolean
  SwitchMw: _middlewares_SwitchMw__WEBPACK_IMPORTED_MODULE_25__["default"],
  CheckboxMw: _middlewares_CheckboxMw__WEBPACK_IMPORTED_MODULE_24__["default"],
  // enum
  RadioGroupMw: _middlewares_RadioGroupMw__WEBPACK_IMPORTED_MODULE_23__["default"],
  SelectMw: _middlewares_SelectMw__WEBPACK_IMPORTED_MODULE_21__["default"],
  // integer
  RateMw: _middlewares_RateMw__WEBPACK_IMPORTED_MODULE_26__["default"],
  // number, integer
  InputNumberMw: _middlewares_InputNumberMw__WEBPACK_IMPORTED_MODULE_18__["default"],
  SliderMw: _middlewares_SliderMw__WEBPACK_IMPORTED_MODULE_27__["default"],
  // string
  DatePickerMw: _middlewares_DatePickerMw__WEBPACK_IMPORTED_MODULE_10__["default"],
  TimePickerMw: _middlewares_TimePickerMw__WEBPACK_IMPORTED_MODULE_11__["default"],
  TextAreaMw: _middlewares_InputMw__WEBPACK_IMPORTED_MODULE_17__["TextAreaMw"],
  PasswordMw: _middlewares_InputMw__WEBPACK_IMPORTED_MODULE_17__["PasswordMw"],
  InputMw: _middlewares_InputMw__WEBPACK_IMPORTED_MODULE_17__["default"],
  NotSupported: _middlewares_NotSupportedMw__WEBPACK_IMPORTED_MODULE_15__["default"],
  // dev
  FormDataViewerMw: _components_FormDataViewerMw__WEBPACK_IMPORTED_MODULE_30__["default"]
};

var DemoForm = function DemoForm(_ref) {
  var code = _ref.code,
      scope = _ref.scope;

  if (typeof code === 'string') {
    return __jsx(react_live__WEBPACK_IMPORTED_MODULE_29__["LiveProvider"], {
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
    }, __jsx(react_live__WEBPACK_IMPORTED_MODULE_29__["LiveEditor"], {
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
    }, __jsx(react_live__WEBPACK_IMPORTED_MODULE_29__["LiveError"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 15
      }
    }), __jsx(react_live__WEBPACK_IMPORTED_MODULE_29__["LivePreview"], {
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

/***/ "./middlewares/TimePickerMw.tsx":
/*!**************************************!*\
  !*** ./middlewares/TimePickerMw.tsx ***!
  \**************************************/
/*! exports provided: TimePickerMw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimePickerMw", function() { return TimePickerMw; });
/* harmony import */ var antd_lib_time_picker_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/time-picker/style */ "./node_modules/antd/lib/time-picker/style/index.js");
/* harmony import */ var antd_lib_time_picker_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_time_picker_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_time_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/time-picker */ "./node_modules/antd/lib/time-picker/index.js");
/* harmony import */ var antd_lib_time_picker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_time_picker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);




var _this = undefined,
    _jsxFileName = "/Users/yihui.lin/workspace/gravel/antd/middlewares/TimePickerMw.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3__["createElement"];



var TimePickerMw = function TimePickerMw(props) {
  var next = props.next,
      schema = props.schema,
      data = props.data,
      _onChange = props.onChange,
      extraProps = props.extraProps;
  if (typeof schema === 'boolean' || schema.type !== 'string') return next(props);
  return __jsx(antd_lib_time_picker__WEBPACK_IMPORTED_MODULE_1___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    style: {
      width: '100%'
    },
    value: typeof data === 'string' ? moment__WEBPACK_IMPORTED_MODULE_5___default()(data) : null,
    onChange: function onChange(_, dateString) {
      _onChange(dateString || undefined);
    }
  }, lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(extraProps, 'props'), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (TimePickerMw);

/***/ }),

/***/ "./node_modules/antd/lib/time-picker/index.js":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/time-picker/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _datePicker = _interopRequireDefault(__webpack_require__(/*! ../date-picker */ "./node_modules/antd/lib/date-picker/index.js"));

var _warning = _interopRequireDefault(__webpack_require__(/*! ../_util/warning */ "./node_modules/antd/lib/_util/warning.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var InternalTimePicker = _datePicker["default"].TimePicker,
    InternalRangePicker = _datePicker["default"].RangePicker;
var RangePicker = React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(InternalRangePicker, _extends({}, props, {
    picker: "time",
    mode: undefined,
    ref: ref
  }));
});
var TimePicker = React.forwardRef(function (_a, ref) {
  var addon = _a.addon,
      renderExtraFooter = _a.renderExtraFooter,
      restProps = __rest(_a, ["addon", "renderExtraFooter"]);

  var internalRenderExtraFooter = React.useMemo(function () {
    if (renderExtraFooter) {
      return renderExtraFooter;
    }

    if (addon) {
      (0, _warning["default"])(false, 'TimePicker', '`addon` is deprecated. Please use `renderExtraFooter` instead.');
      return addon;
    }

    return undefined;
  }, [addon, renderExtraFooter]);
  return /*#__PURE__*/React.createElement(InternalTimePicker, _extends({}, restProps, {
    mode: undefined,
    ref: ref,
    renderExtraFooter: internalRenderExtraFooter
  }));
});
TimePicker.displayName = 'TimePicker';
TimePicker.RangePicker = RangePicker;
var _default = TimePicker;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/time-picker/style/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/antd/lib/time-picker/style/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.less */ "./node_modules/antd/lib/style/index.less");

__webpack_require__(/*! ./index.less */ "./node_modules/antd/lib/time-picker/style/index.less");

__webpack_require__(/*! ../../date-picker/style */ "./node_modules/antd/lib/date-picker/style/index.js");

/***/ })

})
//# sourceMappingURL=grid.js.ac79a4bbd5eeeca54e2a.hot-update.js.map