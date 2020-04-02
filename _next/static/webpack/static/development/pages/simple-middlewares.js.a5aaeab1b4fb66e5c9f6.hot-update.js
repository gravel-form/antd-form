webpackHotUpdate("static/development/pages/simple-middlewares.js",{

/***/ "./node_modules/antd/lib/message/index.js":
/*!************************************************!*\
  !*** ./node_modules/antd/lib/message/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _rcNotification = _interopRequireDefault(__webpack_require__(/*! rc-notification */ "./node_modules/rc-notification/es/index.js"));

var _LoadingOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/LoadingOutlined */ "./node_modules/@ant-design/icons/LoadingOutlined.js"));

var _ExclamationCircleFilled = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/ExclamationCircleFilled */ "./node_modules/@ant-design/icons/ExclamationCircleFilled.js"));

var _CloseCircleFilled = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CloseCircleFilled */ "./node_modules/@ant-design/icons/CloseCircleFilled.js"));

var _CheckCircleFilled = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CheckCircleFilled */ "./node_modules/@ant-design/icons/CheckCircleFilled.js"));

var _InfoCircleFilled = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/InfoCircleFilled */ "./node_modules/@ant-design/icons/InfoCircleFilled.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var defaultDuration = 3;
var defaultTop;
var messageInstance;
var key = 1;
var prefixCls = 'ant-message';
var transitionName = 'move-up';
var getContainer;
var maxCount;

function getMessageInstance(callback) {
  if (messageInstance) {
    callback(messageInstance);
    return;
  }

  _rcNotification["default"].newInstance({
    prefixCls: prefixCls,
    transitionName: transitionName,
    style: {
      top: defaultTop
    },
    getContainer: getContainer,
    maxCount: maxCount
  }, function (instance) {
    if (messageInstance) {
      callback(messageInstance);
      return;
    }

    messageInstance = instance;
    callback(instance);
  });
}

var iconMap = {
  info: _InfoCircleFilled["default"],
  success: _CheckCircleFilled["default"],
  error: _CloseCircleFilled["default"],
  warning: _ExclamationCircleFilled["default"],
  loading: _LoadingOutlined["default"]
};

function notice(args) {
  var duration = args.duration !== undefined ? args.duration : defaultDuration;
  var IconComponent = iconMap[args.type];
  var target = args.key || key++;
  var closePromise = new Promise(function (resolve) {
    var callback = function callback() {
      if (typeof args.onClose === 'function') {
        args.onClose();
      }

      return resolve(true);
    };

    getMessageInstance(function (instance) {
      instance.notice({
        key: target,
        duration: duration,
        style: {},
        content: /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-custom-content").concat(args.type ? " ".concat(prefixCls, "-").concat(args.type) : '')
        }, args.icon || IconComponent && /*#__PURE__*/React.createElement(IconComponent, null), /*#__PURE__*/React.createElement("span", null, args.content)),
        onClose: callback
      });
    });
  });

  var result = function result() {
    if (messageInstance) {
      messageInstance.removeNotice(target);
    }
  };

  result.then = function (filled, rejected) {
    return closePromise.then(filled, rejected);
  };

  result.promise = closePromise;
  return result;
}

function isArgsProps(content) {
  return Object.prototype.toString.call(content) === '[object Object]' && !!content.content;
}

var api = {
  open: notice,
  config: function config(options) {
    if (options.top !== undefined) {
      defaultTop = options.top;
      messageInstance = null; // delete messageInstance for new defaultTop
    }

    if (options.duration !== undefined) {
      defaultDuration = options.duration;
    }

    if (options.prefixCls !== undefined) {
      prefixCls = options.prefixCls;
    }

    if (options.getContainer !== undefined) {
      getContainer = options.getContainer;
    }

    if (options.transitionName !== undefined) {
      transitionName = options.transitionName;
      messageInstance = null; // delete messageInstance for new transitionName
    }

    if (options.maxCount !== undefined) {
      maxCount = options.maxCount;
      messageInstance = null;
    }
  },
  destroy: function destroy() {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    }
  }
};
['success', 'info', 'warning', 'error', 'loading'].forEach(function (type) {
  api[type] = function (content, duration, onClose) {
    if (isArgsProps(content)) {
      return api.open(_extends(_extends({}, content), {
        type: type
      }));
    }

    if (typeof duration === 'function') {
      onClose = duration;
      duration = undefined;
    }

    return api.open({
      content: content,
      duration: duration,
      type: type,
      onClose: onClose
    });
  };
});
api.warn = api.warning;
var _default = api;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/message/style/index.js":
/*!******************************************************!*\
  !*** ./node_modules/antd/lib/message/style/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.less */ "./node_modules/antd/lib/style/index.less");

__webpack_require__(/*! ./index.less */ "./node_modules/antd/lib/message/style/index.less");

/***/ }),

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
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/message/style */ "./node_modules/antd/lib/message/style/index.js");
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/message */ "./node_modules/antd/lib/message/index.js");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../layouts/main */ "./layouts/main.tsx");
/* harmony import */ var _components_DemoForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/DemoForm */ "./components/DemoForm.tsx");







var _this = undefined,
    _jsxFileName = "/Users/yihui.lin/workspace/gravel/antd/pages/simple-middlewares.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6__["createElement"];



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

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_6__["useState"](false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_React$useState, 2),
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

            antd_lib_message__WEBPACK_IMPORTED_MODULE_4___default.a.success('Submited!');

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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, next(props)
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
  return __jsx(_layouts_main__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 5
    }
  }, __jsx(_components_DemoForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
//# sourceMappingURL=simple-middlewares.js.a5aaeab1b4fb66e5c9f6.hot-update.js.map