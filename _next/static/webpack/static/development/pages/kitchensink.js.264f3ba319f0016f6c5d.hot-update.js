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



var code = "const schema = {\n  title: 'Demo of all available widgets',\n  type: 'object',\n  properties: {\n    input: { type: 'string' },\n    textarea: { type: 'string' },\n    date: { type: 'string' },\n    password: { type: 'string' },\n    number: { type: 'number' },\n    rate: { type: 'number' },\n    select: {\n      type: 'string',\n      enum: ['foo', 'bar', 'baz'],\n    },\n    radioGroup: {\n      type: 'string',\n      enum: ['foo', 'bar', 'baz'],\n    },\n    checkbox: { type: 'boolean',title: 'Accepted' },\n    switch: { type: 'boolean' },\n    checkboxGroup: {\n      type: 'array',\n      items: {\n        type: 'string',\n        enum: ['foo', 'bar', 'baz'],\n      },\n      uniqueItems: true,\n    },\n    slider: { type: 'integer', minimum: 0, maximum: 100 },\n  },\n};\n\nconst extraProps = {\n  properties: {\n    textarea: { component: 'TextArea' },\n    password: { component: 'Password' },\n    date: { component: 'DatePicker' },\n    rate: { component: 'Rate' },\n    radioGroup: { component: 'RadioGroup' },\n    switch: { component: 'Switch' },\n    slider: { component: 'Slider' },\n  },\n};\n\nconst middlewares = [\n  SubmitButtonMw,\n  ValidateMw,\n  ExtraPropsMw,\n  FieldsetTemplateMw,\n  ...schemaMws,\n  FormItemTemplateMw,\n\n  ...withName([\n    [ 'DatePicker', DatePickerMw ],\n    [ 'Rate', RateMw ],\n    [ 'Switch', SwitchMw ],\n    [ 'TextArea', TextAreaMw ],\n    [ 'Password', PasswordMw ],\n    [ 'RadioGroup', RadioGroupMw ],\n    [ 'Slider', SliderMw ],\n  ]),\n\n  CheckboxGroupMw,\n  CheckboxMw,\n  SelectMw,\n  InputMw,\n  InputNumberMw,\n  NotSupported,\n];\n\nrender(\n  <Form\n    layout=\"vertical\"\n    schema={schema}\n    extraProps={extraProps}\n    middlewares={middlewares}\n  />\n);\n";

var IndexPage = function IndexPage() {
  return __jsx(_layouts_main__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 5
    }
  }, __jsx(_components_DemoForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    code: code,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=kitchensink.js.264f3ba319f0016f6c5d.hot-update.js.map