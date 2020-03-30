webpackHotUpdate("static/development/pages/basic.js",{

/***/ "./pages/basic.tsx":
/*!*************************!*\
  !*** ./pages/basic.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/main */ "./layouts/main.tsx");
/* harmony import */ var _components_DemoForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/DemoForm */ "./components/DemoForm.tsx");
var _this = undefined,
    _jsxFileName = "/Users/yihui.lin/workspace/gravel/antd/pages/basic.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



var code = "const schema = {\n  title: 'A registration form',\n  description: 'A simple form example.',\n  type: 'object',\n  required: ['firstName', 'lastName'],\n  definitions: {\n    firstName: {\n      type: 'string',\n      title: 'First name',\n    },\n    lastName: {\n      $id: '#last-name',\n      type: 'string',\n      title: 'Last name',\n    },\n  },\n  properties: {\n    firstName: {\n      $ref: \"#/definitions/firstName\",\n    },\n    lastName: {\n      $ref: '#last-name',\n    },\n    age: {\n      type: 'integer',\n      title: 'Age of person',\n      description: '(earthian year)',\n    },\n    dof: {\n      type: 'string',\n      title: 'Date of Birth',\n    },\n    bio: {\n      type: 'string',\n      title: 'Bio',\n    },\n    password: {\n      type: 'string',\n      title: 'Password',\n      description: 'Hint: Make it strong!',\n      minLength: 3,\n    },\n    telephone: {\n      type: 'string',\n      title: 'Telephone',\n      minLength: 10,\n    },\n    term: {\n      type: 'boolean',\n      title: 'Accept',\n    },\n  },\n};\n\nconst extraProps = {\n  row: { justify: 'space-between' },\n  properties: {\n    \"first//N~ame\": { col: { span:11 } },\n    lastName: { col: { span:11 } },\n    bio: {\n      component: 'TextArea',\n      props: {\n        placeholder: 'Roundhouse kicking asses since 1940',\n      },\n    },\n    password: {\n      component: 'Password',\n    },\n    dof: {\n      component: 'DatePicker',\n    }\n  },\n};\n\nconst middlewares = [\n  // FormDataViewerMw,\n  // SubmitButtonMw,\n  // ValidateMw,\n  SubmitButtonWithValidationMw,\n  ExtraPropsMw,\n  ColMw,\n  FieldsetTemplateMw,\n  RowMw,\n  ...schemaMws,\n  FormItemTemplateMw,\n  CheckboxMw,\n  RadioGroupMw,\n  CheckboxGroupMw,\n  TextAreaMw,\n  PasswordMw,\n  DatePickerMw,\n  SelectMw,\n  InputMw,\n  RateMw,\n  InputNumberMw,\n  NotSupported,\n];\n\nrender(\n  <Form\n    defaultData={{}}\n    layout=\"vertical\"\n    schema={schema}\n    extraProps={extraProps}\n    middlewares={middlewares}\n  />\n);\n";

var IndexPage = function IndexPage() {
  return __jsx(_layouts_main__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 5
    }
  }, __jsx(_components_DemoForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    code: code,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=basic.js.d50954b15afae2972469.hot-update.js.map