webpackHotUpdate("static/development/pages/simple-middlewares.js",{

/***/ "./pages/simple-middlewares.tsx":
/*!**************************************!*\
  !*** ./pages/simple-middlewares.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "./node_modules/antd/lib/button/style/index.js");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layouts/main */ "./layouts/main.tsx");
/* harmony import */ var _components_DemoForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/DemoForm */ "./components/DemoForm.tsx");





var _this = undefined,
    _jsxFileName = "/Users/yihui.lin/workspace/gravel/antd/pages/simple-middlewares.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4__["createElement"];



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
      next = props.next,
      onChange = props.onChange,
      defaultData = props.formProps.defaultData; // if not on the root node, pass the control to the next middleware

  if (parent) return next(props);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4__["useState"](false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState, 2),
      submitting = _React$useState2[0],
      setSubmitting = _React$useState2[1];

  var handleSubmit = function handleSubmit() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(function handleSubmit$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setSubmitting(true);
            _context.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(__webpack_require__(/*! bluebird */ "./node_modules/bluebird/js/browser/bluebird.js").delay(1000));

          case 3:
            // pactically, should check unmounted here
            setSubmitting(false);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var handleClear = function handleClear() {
    return onChange({});
  };

  var handleReset = function handleReset() {
    return onChange(defaultData);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], null, next(props)
  /* render the body of the form */
  , __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "primary",
    onClick: handleSubmit,
    loading: submitting,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, "Submit"), ' ', __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    onClick: handleClear,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, "Clear"), " ", __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    onClick: handleReset,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 52
    }
  }, "Reset"));
};

var code = "\nconst middlewares = [\n  MyButtonsMw,\n  ExtraPropsMw,\n  ColMw,\n  FieldsetTemplateMw,\n  RowMw,\n  FormItemTemplateMw,\n  ...schemaMws,\n  InputMw,\n  NotSupportedMw,\n];\n\nrender(\n  <Form\n    defaultData={defaultData}\n    layout=\"vertical\"\n    schema={schema}\n    extraProps={extraProps}\n    middlewares={middlewares}\n  />\n);\n";

var IndexPage = function IndexPage() {
  return __jsx(_layouts_main__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 5
    }
  }, __jsx(_components_DemoForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    code: code,
    scope: {
      schema: schema,
      extraProps: extraProps,
      defaultData: defaultData,
      MyButtonsMw: MyButtonsMw
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=simple-middlewares.js.ead04057b76181b02d3d.hot-update.js.map