webpackHotUpdate("static/development/pages/grid.js",{

/***/ "./pages/grid.tsx":
/*!************************!*\
  !*** ./pages/grid.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/main */ "./layouts/main.tsx");
/* harmony import */ var _components_DemoForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/DemoForm */ "./components/DemoForm.tsx");


var _this = undefined,
    _jsxFileName = "/Users/yihui.lin/workspace/gravel/antd/pages/grid.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];



var extraProps = {
  row: {
    justify: 'space-between'
  },
  properties: {
    input1: {
      col: {
        span: 11
      }
    },
    input2: {
      col: {
        span: 11
      }
    },
    input3: {
      col: {
        span: 7
      }
    },
    input4: {
      col: {
        span: 7
      }
    },
    input5: {
      col: {
        span: 7
      }
    },
    object1: {
      col: {
        span: 11
      }
    },
    object2: {
      col: {
        span: 11
      },
      properties: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
        o2_i1: {
          col: {
            span: 12
          }
        }
      }, "o2_i1", {
        col: {
          span: 12
        }
      })
    }
  }
};
var code = "const schema = {\n  type: 'object',\n  properties: {\n    input1: { type: 'string' },\n    input2: { type: 'string' },\n    input3: { type: 'string' },\n    input4: { type: 'string' },\n    input5: { type: 'string' },\n    object1: {\n      type: 'object',\n      title: 'object-1',\n      properties: {\n        o1_i1: { type: 'string' },\n        o1_i2: { type: 'string' },\n      },\n    },\n    object2: {\n      title: 'object-2',\n      type: 'object',\n      properties: {\n        o2_i1: { type: 'string' },\n        o2_i2: { type: 'string' },\n      },\n    },\n  },\n};\n\nconst extraProps = {\n  row: { justify: 'space-between' },\n  properties: {\n    input1: { col: { span: 11 } },\n    input2: { col: { span: 11 } },\n    input3: { col: { span: 7 } },\n    input4: { col: { span: 7 } },\n    input5: { col: { span: 7 } },\n    object1: { col: { span: 11 } },\n    object2: { col: { span: 11 } },\n  },\n};\n\nconst middlewares = [\n  ExtraPropsMw,\n  ColMw,\n  FieldsetTemplateMw,\n  RowMw,\n  ...schemaMws,\n  FormItemTemplateMw,\n  InputMw,\n  NotSupported,\n];\n\nrender(\n  <Form\n    layout=\"vertical\"\n    schema={schema}\n    extraProps={extraProps}\n    middlewares={middlewares}\n  />\n);\n";

var IndexPage = function IndexPage() {
  return __jsx(_layouts_main__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 5
    }
  }, __jsx(_components_DemoForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    code: code,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=grid.js.5761dd6b496a6b0b0091.hot-update.js.map