webpackHotUpdate_N_E("pages/campaigns/requests",{

/***/ "./components/RequestRow.js":
/*!**********************************!*\
  !*** ./components/RequestRow.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_nicolasmanzato_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_nicolasmanzato_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_nicolasmanzato_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_nicolasmanzato_kickstart_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_nicolasmanzato_kickstart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_nicolasmanzato_kickstart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_nicolasmanzato_kickstart_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _Users_nicolasmanzato_kickstart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_nicolasmanzato_kickstart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_nicolasmanzato_kickstart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _Users_nicolasmanzato_kickstart_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/nicolasmanzato/kickstart/components/RequestRow.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_nicolasmanzato_kickstart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_nicolasmanzato_kickstart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_nicolasmanzato_kickstart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar RequestRow = /*#__PURE__*/function (_Component) {\n  Object(_Users_nicolasmanzato_kickstart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(RequestRow, _Component);\n\n  var _super = _createSuper(RequestRow);\n\n  function RequestRow() {\n    var _this;\n\n    Object(_Users_nicolasmanzato_kickstart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, RequestRow);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_Users_nicolasmanzato_kickstart_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_Users_nicolasmanzato_kickstart_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"onApprove\", /*#__PURE__*/Object(_Users_nicolasmanzato_kickstart_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_nicolasmanzato_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      return _Users_nicolasmanzato_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    })));\n\n    return _this;\n  }\n\n  Object(_Users_nicolasmanzato_kickstart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(RequestRow, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          id = _this$props.id,\n          request = _this$props.request,\n          approversCount = _this$props.approversCount;\n      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Table\"].Row, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 7\n        }\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Table\"].Cell, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 9\n        }\n      }, id), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Table\"].Cell, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 9\n        }\n      }, request.description), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Table\"].Cell, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 9\n        }\n      }, _ethereum_web3__WEBPACK_IMPORTED_MODULE_11__[\"default\"].utils.fromWei(request.value, 'ether')), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Table\"].Cell, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 9\n        }\n      }, request.recipient), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Table\"].Cell, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 9\n        }\n      }, request.approvalCount, \" / \", approversCount), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Table\"].Cell, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 9\n        }\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Button\"], {\n        color: \"green\",\n        basic: true,\n        onClick: this.onApprove,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 11\n        }\n      }, \"Approve\")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Table\"].Cell, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 9\n        }\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Button\"], {\n        color: \"red\",\n        basic: true,\n        onClick: this.onFinalize,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 11\n        }\n      }, \"Finalize\")));\n    }\n  }]);\n\n  return RequestRow;\n}(react__WEBPACK_IMPORTED_MODULE_9__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestRow);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXF1ZXN0Um93LmpzP2M0MGUiXSwibmFtZXMiOlsiUmVxdWVzdFJvdyIsInByb3BzIiwiaWQiLCJyZXF1ZXN0IiwiYXBwcm92ZXJzQ291bnQiLCJkZXNjcmlwdGlvbiIsIndlYjMiLCJ1dGlscyIsImZyb21XZWkiLCJ2YWx1ZSIsInJlY2lwaWVudCIsImFwcHJvdmFsQ291bnQiLCJvbkFwcHJvdmUiLCJvbkZpbmFsaXplIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUVNQSxVOzs7Ozs7Ozs7Ozs7Ozs7O2trQkFFUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEs7Ozs7Ozs7NkJBSUg7QUFBQSx3QkFDaUMsS0FBS0MsS0FEdEM7QUFBQSxVQUNDQyxFQURELGVBQ0NBLEVBREQ7QUFBQSxVQUNLQyxPQURMLGVBQ0tBLE9BREw7QUFBQSxVQUNjQyxjQURkLGVBQ2NBLGNBRGQ7QUFHUCxhQUNFLE1BQUMsd0RBQUQsQ0FBTyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLHdEQUFELENBQU8sSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQWNGLEVBQWQsQ0FERixFQUVFLE1BQUMsd0RBQUQsQ0FBTyxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBY0MsT0FBTyxDQUFDRSxXQUF0QixDQUZGLEVBR0UsTUFBQyx3REFBRCxDQUFPLElBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFjQyx1REFBSSxDQUFDQyxLQUFMLENBQVdDLE9BQVgsQ0FBbUJMLE9BQU8sQ0FBQ00sS0FBM0IsRUFBa0MsT0FBbEMsQ0FBZCxDQUhGLEVBSUUsTUFBQyx3REFBRCxDQUFPLElBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFjTixPQUFPLENBQUNPLFNBQXRCLENBSkYsRUFLRSxNQUFDLHdEQUFELENBQU8sSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQWNQLE9BQU8sQ0FBQ1EsYUFBdEIsU0FBMENQLGNBQTFDLENBTEYsRUFNRSxNQUFDLHdEQUFELENBQU8sSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyx5REFBRDtBQUFRLGFBQUssRUFBQyxPQUFkO0FBQXNCLGFBQUssTUFBM0I7QUFBNEIsZUFBTyxFQUFFLEtBQUtRLFNBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsQ0FORixFQVdFLE1BQUMsd0RBQUQsQ0FBTyxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLHlEQUFEO0FBQVEsYUFBSyxFQUFDLEtBQWQ7QUFBb0IsYUFBSyxNQUF6QjtBQUEwQixlQUFPLEVBQUUsS0FBS0MsVUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixDQVhGLENBREY7QUFtQkQ7Ozs7RUE1QnNCQywrQzs7QUErQlZkLHlFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9SZXF1ZXN0Um93LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGFibGUsIEJ1dHRvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCB3ZWIzIGZyb20gJy4uL2V0aGVyZXVtL3dlYjMnO1xuXG5jbGFzcyBSZXF1ZXN0Um93IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgXG4gIG9uQXBwcm92ZSA9IGFzeW5jICgpID0+IHtcbiAgICBcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGlkLCByZXF1ZXN0LCBhcHByb3ZlcnNDb3VudCB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8VGFibGUuUm93PlxuICAgICAgICA8VGFibGUuQ2VsbD57IGlkIH08L1RhYmxlLkNlbGw+XG4gICAgICAgIDxUYWJsZS5DZWxsPnsgcmVxdWVzdC5kZXNjcmlwdGlvbiB9PC9UYWJsZS5DZWxsPlxuICAgICAgICA8VGFibGUuQ2VsbD57IHdlYjMudXRpbHMuZnJvbVdlaShyZXF1ZXN0LnZhbHVlLCAnZXRoZXInKSB9PC9UYWJsZS5DZWxsPlxuICAgICAgICA8VGFibGUuQ2VsbD57IHJlcXVlc3QucmVjaXBpZW50IH08L1RhYmxlLkNlbGw+XG4gICAgICAgIDxUYWJsZS5DZWxsPnsgcmVxdWVzdC5hcHByb3ZhbENvdW50IH0gLyB7IGFwcHJvdmVyc0NvdW50IH08L1RhYmxlLkNlbGw+XG4gICAgICAgIDxUYWJsZS5DZWxsPlxuICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJncmVlblwiIGJhc2ljIG9uQ2xpY2s9e3RoaXMub25BcHByb3ZlfT5cbiAgICAgICAgICAgIEFwcHJvdmVcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9UYWJsZS5DZWxsPlxuICAgICAgICA8VGFibGUuQ2VsbD5cbiAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwicmVkXCIgYmFzaWMgb25DbGljaz17dGhpcy5vbkZpbmFsaXplfT5cbiAgICAgICAgICAgIEZpbmFsaXplXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvVGFibGUuQ2VsbD5cbiAgICAgIDwvVGFibGUuUm93PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdFJvdztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/RequestRow.js\n");

/***/ })

})