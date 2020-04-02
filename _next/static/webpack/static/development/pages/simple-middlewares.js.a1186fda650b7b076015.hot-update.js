webpackHotUpdate("static/development/pages/simple-middlewares.js",{

/***/ "./pages/simple-middlewares.tsx":
/*!**************************************!*\
  !*** ./pages/simple-middlewares.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/main */ "./layouts/main.tsx");
/* harmony import */ var _components_DemoForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/DemoForm */ "./components/DemoForm.tsx");
var _this = undefined,
    _jsxFileName = "/Users/yihui.lin/workspace/gravel/antd/pages/simple-middlewares.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



var schema = {
  title: 'A registration form',
  description: 'A simple form example.',
  type: 'object',
  required: ['username', 'email'],
  properties: {
    username: {
      type: 'string'
    },
    firstname: {
      type: 'string'
    },
    lastname: {
      type: 'string'
    },
    email: {
      type: 'string'
    }
  }
};
var extraProps = {
  row: {
    justify: 'space-between'
  },
  properties: {
    firstname: {
      col: {
        span: 11
      }
    },
    lastname: {
      col: {
        span: 11
      }
    }
  }
};
var defaultData = {
  username: 'jhon',
  firstname: 'Jhon',
  lastname: 'Smith'
};

var MyButtonsMw = function MyButtonsMw(props) {
  var parent = props.parent,
      next = props.next; // if not on the root node, pass the control to the next middleware

  if (parent) return next(props);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, next(props), __jsx(Button, {
    type: "primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, "Primary"), __jsx(Button, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, "Default"), __jsx(Button, {
    type: "dashed",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, "Dashed"), __jsx(Button, {
    type: "link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, "Link"));
};

var code = "\nconst middlewares = [\n  ExtraPropsMw,\n  ColMw,\n  FieldsetTemplateMw,\n  RowMw,\n  FormItemTemplateMw,\n  ...schemaMws,\n  InputMw,\n  NotSupportedMw,\n];\n\nrender(\n  <Form\n    defaultData={defaultData}\n    layout=\"vertical\"\n    schema={schema}\n    extraProps={extraProps}\n    middlewares={middlewares}\n  />\n);\n";

var IndexPage = function IndexPage() {
  return __jsx(_layouts_main__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 5
    }
  }, __jsx(_components_DemoForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    code: code,
    scope: {
      schema: schema,
      extraProps: extraProps,
      defaultData: defaultData
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=simple-middlewares.js.a1186fda650b7b076015.hot-update.js.map