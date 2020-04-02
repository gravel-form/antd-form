webpackHotUpdate("static/development/pages/single-async-validate.js",{

/***/ "./layouts/main.tsx":
/*!**************************!*\
  !*** ./layouts/main.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/menu/style */ "./node_modules/antd/lib/menu/style/index.js");
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/menu */ "./node_modules/antd/lib/menu/index.js");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/layout/style */ "./node_modules/antd/lib/layout/style/index.js");
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/layout */ "./node_modules/antd/lib/layout/index.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_6__);





var _this = undefined,
    _jsxFileName = "/Users/yihui.lin/workspace/gravel/antd/layouts/main.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4__["createElement"];



// import getConfig from 'next-server/config';
var Sider = antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a.Sider,
    Content = antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a.Content; // const { publicRuntimeConfig } = getConfig();
// const linkPrefix = publicRuntimeConfig.linkPrefix;

var backendUrl =  false || '';

var Page = function Page(_ref) {
  var children = _ref.children;
  return __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(Sider, {
    breakpoint: "lg",
    collapsedWidth: "0",
    onBreakpoint: function onBreakpoint(broken) {
      console.log(broken);
    },
    onCollapse: function onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a, {
    theme: "dark",
    mode: "inline",
    style: {
      height: '100vh',
      overflow: 'auto'
    },
    defaultSelectedKeys: [],
    onClick: function onClick(_ref2) {
      var key = _ref2.key;
      next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push(key, "".concat(backendUrl).concat(key), {
        shallow: true
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
    key: "/basic",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "nav-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, "Basic")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
    key: "/kitchensink",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, "Kitchen Sink")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
    key: "/simple-middlewares",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, "Simple Middlewares")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
    key: "/grid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "nav-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, "Grid")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
    key: "/single-async-validate",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, "Single Field Async")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
    key: "/dynamic-array",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, "Dynamic Array")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
    key: "/steps",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, "Steps Component")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
    key: "/calculated-field",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, "Calculated Field")))), __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, __jsx(Content, {
    style: {} || {
      margin: '24px 16px',
      padding: 24,
      background: '#fff',
      minHeight: 280
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, children)));
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=single-async-validate.js.87c8739c0fc21fb8020a.hot-update.js.map