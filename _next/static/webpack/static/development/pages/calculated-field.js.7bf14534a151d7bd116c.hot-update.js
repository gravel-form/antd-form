webpackHotUpdate("static/development/pages/calculated-field.js",{

/***/ "./pages/calculated-field.tsx":
/*!************************************!*\
  !*** ./pages/calculated-field.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/main */ "./layouts/main.tsx");
/* harmony import */ var _components_DemoForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/DemoForm */ "./components/DemoForm.tsx");
var _this = undefined,
    _jsxFileName = "/Users/yihui.lin/workspace/gravel/antd/pages/calculated-field.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



var code = "const fullNameSchema = {\n  type: 'string',\n  title: 'Full Name',\n};\n\nconst ExampleCalculatedFieldMw = (props) => {\n  const { schema, next, data, MiddlewareComponent, onChange } = props;\n  if (typeof schema === 'boolean' || schema.type !== 'object') return next(props);\n\n  const handleChange = (value) => {\n    const { firstName, lastName } = data || {};\n    if (typeof value !== 'string') {\n      onChange({ ...data, firstName: null, lastName: null });\n    } else if (value.startsWith(firstName + ' ')) {\n      onChange({ ...data, lastName: value.slice(firstName.length + 1) });\n    } else if (value.endsWith(' ' + lastName)) {\n      onChange({ ...data, firstName: value.slice(0, -lastName.length - 1) });\n    } else {\n      const [newFirstName, ...newLastName] = value.split(' ');\n      onChange({ ...data, firstName: newFirstName, lastName: newLastName.length ? newLastName.join(' ') : null });\n    }\n  };\n\n  return (\n    <>\n      {next(props)}\n      <MiddlewareComponent\n        {...props}\n        parent={props}\n        schema={fullNameSchema}\n        next={() => null}\n        data={data && [data.firstName, data.lastName].filter((s) => typeof s === 'string').join(' ')}\n        onChange={handleChange}\n      />\n    </>\n  );\n};\n\nconst schema = {\n  type: 'object',\n  properties: {\n    firstName: {\n      type: 'string',\n      title: 'First name',\n      default: 'Chuck',\n    },\n    lastName: {\n      type: 'string',\n      title: 'Last name',\n    },\n  },\n};\n\nconst middlewares = [\n  ExtraPropsMw,\n  ExampleCalculatedFieldMw,\n  FieldsetTemplateMw,\n  ...schemaMws,\n  FormItemTemplateMw,\n  InputMw,\n  NotSupported,\n];\n\nrender(\n  <Form\n    schema={schema}\n    middlewares={middlewares}\n  />\n);\n";

var IndexPage = function IndexPage() {
  return __jsx(_layouts_main__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 5
    }
  }, __jsx(_components_DemoForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    code: code,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=calculated-field.js.7bf14534a151d7bd116c.hot-update.js.map