webpackHotUpdate("static/development/pages/kitchensink.js",{

/***/ "./pages/kitchensink.tsx":
/*!*******************************!*\
  !*** ./pages/kitchensink.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/main */ "./layouts/main.tsx");
/* harmony import */ var _components_DemoForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/DemoForm */ "./components/DemoForm.tsx");
var _this = undefined,
    _jsxFileName = "/Users/yihui.lin/workspace/gravel/antd/pages/kitchensink.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



var code = "const schema = {\n  title: 'Demo of all available widgets',\n  type: 'object',\n  properties: {\n    input: {\n      type: 'string',\n    },\n    textarea: {\n      type: 'string',\n    },\n    date: {\n      type: 'string',\n    },\n    password: {\n      type: 'string',\n    },\n    number: {\n      type: 'number',\n    },\n    rate: {\n      type: 'number',\n    },\n    select: {\n      type: 'string',\n      enum: ['foo', 'bar', 'baz'],\n    },\n    radioGroup: {\n      type: 'string',\n      enum: ['foo', 'bar', 'baz'],\n    },\n    checkbox: {\n      type: 'boolean',\n    },\n    switch: {\n      type: 'boolean',\n    },\n    checkboxGroup: {\n      type: 'array',\n      items: {\n        type: 'string',\n        enum: ['foo', 'bar', 'baz'],\n      },\n      uniqueItems: true,\n    },\n  },\n};\n\nconst extraProps = {\n  properties: {\n    textarea: {\n      component: 'TextArea',\n    },\n    password: {\n      component: 'Password',\n    },\n    date: {\n      component: 'DatePicker',\n    },\n    rate: { component: 'Rate' },\n    radioGroup: {\n      component: 'RadioGroup',\n    },\n    switch: {\n      component: 'Switch',\n    },\n  },\n};\n\nconst middlewares = [\n  SubmitButtonMw,\n  ValidateMw,\n  ExtraPropsMw,\n  FieldsetTemplateMw,\n  ...schemaMws,\n  FormItemTemplateMw,\n\n  ...advanceComponents([\n    [ 'DatePicker', DatePickerMw ],\n    [ 'Rate', RateMw ],\n    [ 'Switch', SwitchMw ],\n    [ 'TextArea', TextAreaMw ],\n    [ 'Password', PasswordMw ],\n    [ 'RadioGroup', RadioGroupMw ],\n  ]),\n\n  CheckboxGroupMw,\n  CheckboxMw,\n  SelectMw,\n  InputMw,\n  InputNumberMw,\n  NotSupported,\n];\n\nrender(\n  <Form\n    layout=\"vertical\"\n    schema={schema}\n    extraProps={extraProps}\n    middlewares={middlewares}\n  />\n);\n";

var IndexPage = function IndexPage() {
  return __jsx(_layouts_main__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 5
    }
  }, __jsx(_components_DemoForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    code: code,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=kitchensink.js.76a4c736755fd7dd52c2.hot-update.js.map