"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/event",{

/***/ "./pages/event.js":
/*!************************!*\
  !*** ./pages/event.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/layout/Layout */ \"./src/layout/Layout.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/kidongg/Desktop/dream-bridge-react/pages/event.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar eventComponent = function eventComponent() {\n  _s();\n\n  var initializeEthers = /*#__PURE__*/function () {\n    var _ref = (0,_Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      return _Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return window.etherum.request({\n                method: \"eth_requestAccounts\"\n              });\n\n            case 2:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function initializeEthers() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    // Check if the window.ethereum object is available\n    if (window.ethereum) {\n      // Check if the connect to metamask\n      if (window.ethereum.selectedAddress) {\n        initializeEthers();\n      } else {\n        alert(\"Please connect to MetaMask.\");\n      }\n    } else {\n      alert(\"Please install a Web3-enabled browser like MetaMask.\");\n    }\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_src_layout_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    pageTitle: \"Event\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 10\n  }, _this);\n};\n\n_s(eventComponent, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (eventComponent);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ldmVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBRUEsSUFBTUcsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0VBQUE7O0VBQzNCLElBQU1DLGdCQUFnQjtJQUFBLHNWQUFHO01BQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtjQUFBLE9BRWpCQyxNQUFNLENBQUNDLE9BQVAsQ0FBZUMsT0FBZixDQUF1QjtnQkFBRUMsTUFBTSxFQUFFO2NBQVYsQ0FBdkIsQ0FGaUI7O1lBQUE7WUFBQTtjQUFBO1VBQUE7UUFBQTtNQUFBO0lBQUEsQ0FBSDs7SUFBQSxnQkFBaEJKLGdCQUFnQjtNQUFBO0lBQUE7RUFBQSxHQUF0Qjs7RUFLQUgsZ0RBQVMsQ0FBQyxZQUFNO0lBQ2Q7SUFDQSxJQUFJSSxNQUFNLENBQUNJLFFBQVgsRUFBcUI7TUFDbkI7TUFDQSxJQUFJSixNQUFNLENBQUNJLFFBQVAsQ0FBZ0JDLGVBQXBCLEVBQXFDO1FBQ25DTixnQkFBZ0I7TUFDakIsQ0FGRCxNQUVPO1FBQ0xPLEtBQUssQ0FBQyw2QkFBRCxDQUFMO01BQ0Q7SUFDRixDQVBELE1BT087TUFDTEEsS0FBSyxDQUFDLHNEQUFELENBQUw7SUFDRDtFQUNGLENBWlEsRUFZTixFQVpNLENBQVQ7RUFhQSxvQkFBTyw4REFBQywwREFBRDtJQUFRLFNBQVMsRUFBRTtFQUFuQjtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBQVA7QUFDRCxDQXBCRDs7R0FBTVI7O0FBc0JOLCtEQUFlQSxjQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2V2ZW50LmpzPzc2NTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vc3JjL2xheW91dC9MYXlvdXRcIjtcblxuY29uc3QgZXZlbnRDb21wb25lbnQgPSAoKSA9PiB7XG4gIGNvbnN0IGluaXRpYWxpemVFdGhlcnMgPSBhc3luYyAoKSA9PiB7XG4gICAgLy8gUmVxdWVzdCBhY2Nlc3MgdG8gdGhlIHVzZXIncyBFdGhlcmV1bSBhY2NvdW50XG4gICAgYXdhaXQgd2luZG93LmV0aGVydW0ucmVxdWVzdCh7IG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIgfSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBDaGVjayBpZiB0aGUgd2luZG93LmV0aGVyZXVtIG9iamVjdCBpcyBhdmFpbGFibGVcbiAgICBpZiAod2luZG93LmV0aGVyZXVtKSB7XG4gICAgICAvLyBDaGVjayBpZiB0aGUgY29ubmVjdCB0byBtZXRhbWFza1xuICAgICAgaWYgKHdpbmRvdy5ldGhlcmV1bS5zZWxlY3RlZEFkZHJlc3MpIHtcbiAgICAgICAgaW5pdGlhbGl6ZUV0aGVycygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoXCJQbGVhc2UgY29ubmVjdCB0byBNZXRhTWFzay5cIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KFwiUGxlYXNlIGluc3RhbGwgYSBXZWIzLWVuYWJsZWQgYnJvd3NlciBsaWtlIE1ldGFNYXNrLlwiKTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgcmV0dXJuIDxMYXlvdXQgcGFnZVRpdGxlPXtcIkV2ZW50XCJ9PnsvKiA8ZGl2PmV2ZW50PC9kaXY+ICovfTwvTGF5b3V0Pjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZW50Q29tcG9uZW50O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiTGF5b3V0IiwiZXZlbnRDb21wb25lbnQiLCJpbml0aWFsaXplRXRoZXJzIiwid2luZG93IiwiZXRoZXJ1bSIsInJlcXVlc3QiLCJtZXRob2QiLCJldGhlcmV1bSIsInNlbGVjdGVkQWRkcmVzcyIsImFsZXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/event.js\n"));

/***/ })

});