webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/loginForm.js":
/*!*********************************!*\
  !*** ./components/loginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/Users/heeyeonkim/catagory/react/react-nodebird/front/components/loginForm.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar ButtonStyle = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"loginForm__ButtonStyle\",\n  componentId: \"sc-1awitul-0\"\n})([\"margin-top:15px;\"]);\n_c = ButtonStyle;\nvar FormContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(antd__WEBPACK_IMPORTED_MODULE_5__[\"Form\"]).withConfig({\n  displayName: \"loginForm__FormContainer\",\n  componentId: \"sc-1awitul-1\"\n})([\"padding:10px;\"]);\n_c2 = FormContainer;\n\nvar LoginForm = function LoginForm(_ref) {\n  _s();\n\n  var setIsLoggedIn = _ref.setIsLoggedIn;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    uId: \"\",\n    password: \"\"\n  }),\n      inputs = _useState[0],\n      setInputs = _useState[1];\n\n  var onChange = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (e) {\n    var _e$target = e.target,\n        name = _e$target.name,\n        value = _e$target.value;\n    setInputs(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, name, value));\n  });\n  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n    setIsLoggedIn(true);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(FormContainer, {\n    onFinish: onSubmit,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"uId\",\n        children: \"\\uC544\\uC774\\uB514\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_5__[\"Input\"], {\n        name: \"id\",\n        value: inputs.uId,\n        onChange: onChange\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"password\",\n        children: \"\\uBE44\\uBC00\\uBC88\\uD638\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_5__[\"Input\"], {\n        type: \"password\",\n        name: \"password\",\n        value: inputs.password,\n        onChange: onChange,\n        required: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(ButtonStyle, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_5__[\"Button\"], {\n        type: \"primary\",\n        htmlType: \"submit\",\n        children: \"\\uB85C\\uADF8\\uC778\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        href: \"/signup\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"a\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_5__[\"Button\"], {\n            children: \"\\uD68C\\uC6D0\\uAC00\\uC785\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(LoginForm, \"nXm77c8v5BXH8oLCWC5ThiO49vI=\");\n\n_c3 = LoginForm;\nLoginForm.propTypes = {\n  setIsLoggedIn: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.elementType.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginForm);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"ButtonStyle\");\n$RefreshReg$(_c2, \"FormContainer\");\n$RefreshReg$(_c3, \"LoginForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb2dpbkZvcm0uanM/MTg3YSJdLCJuYW1lcyI6WyJCdXR0b25TdHlsZSIsInN0eWxlZCIsImRpdiIsIkZvcm1Db250YWluZXIiLCJGb3JtIiwiTG9naW5Gb3JtIiwic2V0SXNMb2dnZWRJbiIsInVzZVN0YXRlIiwidUlkIiwicGFzc3dvcmQiLCJpbnB1dHMiLCJzZXRJbnB1dHMiLCJvbkNoYW5nZSIsInVzZUNhbGxiYWNrIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsIm9uU3VibWl0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx3QkFBakI7S0FBTUYsVztBQUlOLElBQU1HLGFBQWEsR0FBR0YsaUVBQU0sQ0FBQ0cseUNBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSxxQkFBbkI7TUFBTUQsYTs7QUFJTixJQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUF1QjtBQUFBOztBQUFBLE1BQXBCQyxhQUFvQixRQUFwQkEsYUFBb0I7O0FBQ3ZDLGtCQUE0QkMsc0RBQVEsQ0FBQztBQUFFQyxPQUFHLEVBQUUsRUFBUDtBQUFXQyxZQUFRLEVBQUU7QUFBckIsR0FBRCxDQUFwQztBQUFBLE1BQU9DLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUVBLE1BQU1DLFFBQVEsR0FBR0MseURBQVcsQ0FBQyxVQUFDQyxDQUFELEVBQU87QUFDbEMsb0JBQXdCQSxDQUFDLENBQUNDLE1BQTFCO0FBQUEsUUFBUUMsSUFBUixhQUFRQSxJQUFSO0FBQUEsUUFBY0MsS0FBZCxhQUFjQSxLQUFkO0FBQ0FOLGFBQVMsQ0FBQyw4RkFDUEssSUFETSxFQUNDQyxLQURELEVBQVQ7QUFHRCxHQUwyQixDQUE1QjtBQU9BLE1BQU1DLFFBQVEsR0FBR0wseURBQVcsQ0FBQyxZQUFNO0FBQ2pDUCxpQkFBYSxDQUFDLElBQUQsQ0FBYjtBQUNELEdBRjJCLEVBRXpCLEVBRnlCLENBQTVCO0FBSUEsc0JBQ0UscUVBQUMsYUFBRDtBQUFlLFlBQVEsRUFBRVksUUFBekI7QUFBQSw0QkFDRTtBQUFBLDhCQUNFO0FBQU8sZUFBTyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLHFFQUFDLDBDQUFEO0FBQU8sWUFBSSxFQUFDLElBQVo7QUFBaUIsYUFBSyxFQUFFUixNQUFNLENBQUNGLEdBQS9CO0FBQW9DLGdCQUFRLEVBQUVJO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQUdFO0FBQU8sZUFBTyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRixlQUlFLHFFQUFDLDBDQUFEO0FBQ0UsWUFBSSxFQUFDLFVBRFA7QUFFRSxZQUFJLEVBQUMsVUFGUDtBQUdFLGFBQUssRUFBRUYsTUFBTSxDQUFDRCxRQUhoQjtBQUlFLGdCQUFRLEVBQUVHLFFBSlo7QUFLRSxnQkFBUTtBQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQWNFLHFFQUFDLFdBQUQ7QUFBQSw4QkFDRSxxRUFBQywyQ0FBRDtBQUFRLFlBQUksRUFBQyxTQUFiO0FBQXVCLGdCQUFRLEVBQUMsUUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUlFLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLFNBQVg7QUFBQSwrQkFDRTtBQUFBLGlDQUNFLHFFQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTJCRCxDQXpDRDs7R0FBTVAsUzs7TUFBQUEsUztBQTJDTkEsU0FBUyxDQUFDYyxTQUFWLEdBQXNCO0FBQ3BCYixlQUFhLEVBQUVjLGlEQUFTLENBQUNDLFdBQVYsQ0FBc0JDO0FBRGpCLENBQXRCO0FBSWVqQix3RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbG9naW5Gb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xuXG5jb25zdCBCdXR0b25TdHlsZSA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi10b3A6IDE1cHg7XG5gO1xuXG5jb25zdCBGb3JtQ29udGFpbmVyID0gc3R5bGVkKEZvcm0pYFxuICBwYWRkaW5nOiAxMHB4O1xuYDtcblxuY29uc3QgTG9naW5Gb3JtID0gKHsgc2V0SXNMb2dnZWRJbiB9KSA9PiB7XG4gIGNvbnN0IFtpbnB1dHMsIHNldElucHV0c10gPSB1c2VTdGF0ZSh7IHVJZDogXCJcIiwgcGFzc3dvcmQ6IFwiXCIgfSk7XG5cbiAgY29uc3Qgb25DaGFuZ2UgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgIHNldElucHV0cyh7XG4gICAgICBbbmFtZV06IHZhbHVlLFxuICAgIH0pO1xuICB9KTtcblxuICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRJc0xvZ2dlZEluKHRydWUpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybUNvbnRhaW5lciBvbkZpbmlzaD17b25TdWJtaXR9PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1SWRcIj7slYTsnbTrlJQ8L2xhYmVsPlxuICAgICAgICA8SW5wdXQgbmFtZT1cImlkXCIgdmFsdWU9e2lucHV0cy51SWR9IG9uQ2hhbmdlPXtvbkNoYW5nZX0+PC9JbnB1dD5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPuu5hOuwgOuyiO2YuDwvbGFiZWw+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICB2YWx1ZT17aW5wdXRzLnBhc3N3b3JkfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICA+PC9JbnB1dD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8QnV0dG9uU3R5bGU+XG4gICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgIOuhnOq3uOyduFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj5cbiAgICAgICAgICA8YT5cbiAgICAgICAgICAgIDxCdXR0b24+7ZqM7JuQ6rCA7J6FPC9CdXR0b24+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L0J1dHRvblN0eWxlPlxuICAgIDwvRm9ybUNvbnRhaW5lcj5cbiAgKTtcbn07XG5cbkxvZ2luRm9ybS5wcm9wVHlwZXMgPSB7XG4gIHNldElzTG9nZ2VkSW46IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/loginForm.js\n");

/***/ })

})