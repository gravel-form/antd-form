webpackHotUpdate("static/development/pages/simple-middlewares.js",{

/***/ "./pages/simple-middlewares.tsx":
/*!**************************************!*\
  !*** ./pages/simple-middlewares.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/form/style */ "./node_modules/antd/lib/form/style/index.js");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_tooltip_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/tooltip/style */ "./node_modules/antd/lib/tooltip/style/index.js");
/* harmony import */ var antd_lib_tooltip_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tooltip_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/tooltip */ "./node_modules/antd/lib/tooltip/index.js");
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/button/style */ "./node_modules/antd/lib/button/style/index.js");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/message/style */ "./node_modules/antd/lib/message/style/index.js");
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/message */ "./node_modules/antd/lib/message/index.js");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../layouts/main */ "./layouts/main.tsx");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _components_DemoForm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/DemoForm */ "./components/DemoForm.tsx");











var _this = undefined,
    _jsxFileName = "/Users/yihui.lin/workspace/gravel/antd/pages/simple-middlewares.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_10__["createElement"];




var schema = {
  title: 'A registration form',
  description: 'A simple form example.',
  type: 'object',
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

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_10__["useState"](false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_9__["default"])(_React$useState, 2),
      submitting = _React$useState2[0],
      setSubmitting = _React$useState2[1];

  var handleSubmit = function handleSubmit() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.async(function handleSubmit$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setSubmitting(true);
            _context.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.awrap(__webpack_require__(/*! bluebird */ "./node_modules/bluebird/js/browser/bluebird.js").delay(1000));

          case 3:
            // pactically, should check unmounted here
            setSubmitting(false);

            antd_lib_message__WEBPACK_IMPORTED_MODULE_8___default.a.success('Submitted!');

          case 5:
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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_10__["Fragment"], null, next(props)
  /* render the body of the form */
  , __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    type: "primary",
    onClick: handleSubmit,
    loading: submitting,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, "Submit"), ' ', __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    onClick: handleClear,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, "Clear"), " ", __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    onClick: handleReset,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 52
    }
  }, "Reset"));
};

var MyFormItemTemplate = function MyFormItemTemplate(props) {
  var schema = props.schema,
      dataPath = props.dataPath,
      next = props.next,
      errors = props.errors;
  if (typeof schema === 'boolean' || schema.type === 'object' || schema.type === 'array' || parent && typeof parent.schema !== 'boolean' && parent.schema.type === 'array') return next(props);
  var labelText = schema.title || dataPath[dataPath.length - 1]; // latter one is the current prop name

  var label = schema.description ? __jsx(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_3___default.a, {
    title: schema.description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, labelText, " ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_12__["InfoCircleOutlined"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 21
    }
  }))) : labelText;
  return __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
    label: label,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 10
    }
  }, next(props));
};

var code = "\nconst middlewares = [\n  MyButtonsMw,\n  FieldsetTemplateMw,\n  MyFormItemTemplate,\n  ...schemaMws,\n  InputMw,\n  NotSupportedMw,\n];\n\nrender(\n  <Form\n    defaultData={defaultData}\n    layout=\"vertical\"\n    schema={schema}\n    middlewares={middlewares}\n  />\n);\n";

var IndexPage = function IndexPage() {
  return __jsx(_layouts_main__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 5
    }
  }, __jsx(_components_DemoForm__WEBPACK_IMPORTED_MODULE_13__["default"], {
    code: code,
    scope: {
      schema: schema,
      defaultData: defaultData,
      MyButtonsMw: MyButtonsMw,
      MyFormItemTemplate: MyFormItemTemplate
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=simple-middlewares.js.41a60f891a53405193b1.hot-update.js.map