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



var schema = {
  title: 'Demo of all available widgets',
  type: 'object',
  properties: {
    input: {
      type: 'string'
    },
    textarea: {
      type: 'string'
    },
    date: {
      type: 'string'
    },
    password: {
      type: 'string'
    },
    number: {
      type: 'number'
    },
    rate: {
      type: 'number'
    },
    select: {
      type: 'string',
      "enum": ['foo', 'bar', 'baz']
    },
    radioGroup: {
      type: 'string',
      "enum": ['foo', 'bar', 'baz']
    },
    checkbox: {
      type: 'boolean'
    },
    "switch": {
      type: 'boolean'
    },
    checkboxGroup: {
      type: 'array',
      items: {
        type: 'string',
        "enum": ['foo', 'bar', 'baz']
      },
      uniqueItems: true
    }
  }
};
var code = ";\n\nconst extraProps = {\n  properties: {\n    textarea: {\n      component: 'TextArea',\n    },\n    password: {\n      component: 'Password',\n    },\n    date: {\n      component: 'DatePicker',\n    },\n    rate: { component: 'Rate' },\n    radioGroup: {\n      component: 'RadioGroup',\n    },\n    switch: {\n      component: 'Switch',\n    },\n  },\n};\n\nconst middlewares = [\n  SubmitButtonMw,\n  ValidateMw,\n  ExtraPropsMw,\n  FieldsetTemplateMw,\n  ...schemaMws,\n  FormItemTemplateMw,\n\n  ...withName([\n    [ 'DatePicker', DatePickerMw ],\n    [ 'Rate', RateMw ],\n    [ 'Switch', SwitchMw ],\n    [ 'TextArea', TextAreaMw ],\n    [ 'Password', PasswordMw ],\n    [ 'RadioGroup', RadioGroupMw ],\n  ]),\n\n  CheckboxGroupMw,\n  CheckboxMw,\n  SelectMw,\n  InputMw,\n  InputNumberMw,\n  NotSupported,\n];\n\nrender(\n  <Form\n    layout=\"vertical\"\n    schema={schema}\n    extraProps={extraProps}\n    middlewares={middlewares}\n  />\n);\n";

var IndexPage = function IndexPage() {
  return __jsx(_layouts_main__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 5
    }
  }, __jsx(_components_DemoForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    code: code,
    scope: {
      schema: schema
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=kitchensink.js.8f350f3e59300be7405a.hot-update.js.map