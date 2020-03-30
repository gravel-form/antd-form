webpackHotUpdate("static/development/pages/steps.js",{

/***/ "./pages/steps.tsx":
/*!*************************!*\
  !*** ./pages/steps.tsx ***!
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
    _jsxFileName = "/Users/yihui.lin/workspace/gravel/antd/pages/steps.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



var code = "const _ = Lodash;\nconst { Steps, Button } = Antd;\nconst { Step } = Steps;\n\nconst ExampleStepsRmw = (props) => {\n  const {\n    schema,\n    next,\n    MiddlewareComponent,\n    parent,\n    onChange,\n    schemaPath,\n    dataPath,\n    formProps,\n    extraProps,\n    errors,\n    onSubmit,\n  } = props;\n  const [current, setCurrent] = React.useState(0);\n\n  if (parent || typeof schema === 'boolean' || schema.type !== 'object' || !schema.properties) return next(props);\n\n  const data = typeof props.data === 'object' && props.data ? props.data : {};\n  const properties = schema.properties;\n\n  const childKeys = Object.keys(schema.properties);\n  const currentProp = childKeys[current];\n  return (\n    <>\n      {\n        <Steps current={current}>\n          {childKeys.map((key) => {\n            const childSchema = properties[key];\n            if (typeof childSchema === 'boolean') return <Step key={key} title={key} />;\n            return <Step key={key} title={childSchema.title || key} description={childSchema.description} />;\n          })}\n        </Steps>\n      }\n\n      <MiddlewareComponent\n        schema={properties[currentProp]}\n        data={_.get(data, currentProp)}\n        onChange={(item) => onChange({ ...data, [currentProp]: item })}\n        parent={props}\n        schemaPath={[...schemaPath, 'properties', currentProp]}\n        dataPath={[...dataPath, currentProp]}\n        next={() => null}\n        formProps={formProps}\n        MiddlewareComponent={MiddlewareComponent}\n        {...{ extraProps: _.get(extraProps, currentProp), errors, onSubmit }}\n      />\n\n      <div className=\"steps-action\">\n        {current < childKeys.length - 1 && (\n          <Button type=\"primary\" onClick={() => setCurrent(current + 1)}>\n            Next\n          </Button>\n        )}\n        {current === childKeys.length - 1 && (\n          <Button type=\"primary\" onClick={() => message.success('Processing complete!')}>\n            Done\n          </Button>\n        )}\n        {current > 0 && (\n          <Button style={{ marginLeft: 8 }} onClick={() => setCurrent(current - 1)}>\n            Previous\n          </Button>\n        )}\n      </div>\n    </>\n  );\n};\n\nconst schema = {\n  type: 'object',\n  properties: {\n    basic: {\n      type: 'object',\n      title: 'Basic Info',\n      description: 'A simple example for step 1',\n      properties: {\n        firstName: { type: 'string' },\n        lastName: { type: 'string' },\n        dob: { type: 'string' },\n      },\n    },\n    contactDetails: {\n      type: 'object',\n      title: 'Contact Details',\n      description: 'The second example',\n      properties: {\n        country: { type: 'string' },\n        city: { type: 'string' },\n        address: { type: 'string' },\n        phoneNumber: { type: 'string' },\n      },\n    },\n    billingDetails: {\n      type: 'object',\n      title: 'Billing Details',\n      properties: {\n        creditCard: { type: 'string' },\n      },\n    },\n  },\n};\n\nconst extraProps = {\n  properties: {\n    basic: {\n      properties: { dob: { component: 'DatePicker' } },\n    },\n  },\n};\n\nconst middlewares = [\n  ExampleStepsRmw,\n  ExtraPropsMw,\n  ...schemaMws,\n  FormItemTemplateMw,\n  ...withName([[ 'DatePicker', DatePickerMw ]]),\n  InputMw,\n  NotSupported,\n];\n\nrender(\n  <Form\n    layout=\"vertical\"\n    schema={schema}\n    extraProps={extraProps}\n    middlewares={middlewares}\n  />\n);\n";

var IndexPage = function IndexPage() {
  return __jsx(_layouts_main__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 5
    }
  }, __jsx(_components_DemoForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    code: code,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=steps.js.c2cfc5a44cda6ee029cb.hot-update.js.map