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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/layout/Layout */ \"./src/layout/Layout.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/kidongg/Desktop/dream-bridge-react/pages/event.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar OwnershipNotInitializedForExtraDatavent = function OwnershipNotInitializedForExtraDatavent() {\n  _s();\n\n  var initializeEthers = /*#__PURE__*/function () {\n    var _ref = (0,_Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      return _Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return window.ethereum.request({\n                method: \"eth_requestAccounts\"\n              });\n\n            case 2:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function initializeEthers() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    // Check if the window.ethereum object is available\n    if (window.ethereum) {\n      // Check if the connect to metamask\n      if (window.ethereum.selectedAddress) {\n        initializeEthers();\n      } else {\n        alert(\"Please connect to MetaMask.\");\n      }\n    } else {\n      alert(\"Please install a Web3-enabled browser like MetaMask.\");\n    }\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_src_layout_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    pageTitle: \"Event\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      children: \"event\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, _this), \" \"]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(OwnershipNotInitializedForExtraDatavent, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = OwnershipNotInitializedForExtraDatavent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (event);\n\nvar _c;\n\n$RefreshReg$(_c, \"OwnershipNotInitializedForExtraDatavent\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ldmVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBRUEsSUFBTUcsdUNBQXVDLEdBQUcsU0FBMUNBLHVDQUEwQyxHQUFNO0VBQUE7O0VBQ3BELElBQU1DLGdCQUFnQjtJQUFBLHNWQUFHO01BQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtjQUFBLE9BRWpCQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCO2dCQUFFQyxNQUFNLEVBQUU7Y0FBVixDQUF4QixDQUZpQjs7WUFBQTtZQUFBO2NBQUE7VUFBQTtRQUFBO01BQUE7SUFBQSxDQUFIOztJQUFBLGdCQUFoQkosZ0JBQWdCO01BQUE7SUFBQTtFQUFBLEdBQXRCOztFQUtBSCxnREFBUyxDQUFDLFlBQU07SUFDZDtJQUNBLElBQUlJLE1BQU0sQ0FBQ0MsUUFBWCxFQUFxQjtNQUNuQjtNQUNBLElBQUlELE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkcsZUFBcEIsRUFBcUM7UUFDbkNMLGdCQUFnQjtNQUNqQixDQUZELE1BRU87UUFDTE0sS0FBSyxDQUFDLDZCQUFELENBQUw7TUFDRDtJQUNGLENBUEQsTUFPTztNQUNMQSxLQUFLLENBQUMsc0RBQUQsQ0FBTDtJQUNEO0VBQ0YsQ0FaUSxFQVlOLEVBWk0sQ0FBVDtFQWNBLG9CQUNFLDhEQUFDLDBEQUFEO0lBQVEsU0FBUyxFQUFFLE9BQW5CO0lBQUEsd0JBQ0U7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FERixFQUNtQixHQURuQjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FERjtBQUtELENBekJEOztHQUFNUDs7S0FBQUE7QUEyQk4sK0RBQWVRLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnQuanM/NzY1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9zcmMvbGF5b3V0L0xheW91dFwiO1xuXG5jb25zdCBPd25lcnNoaXBOb3RJbml0aWFsaXplZEZvckV4dHJhRGF0YXZlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IGluaXRpYWxpemVFdGhlcnMgPSBhc3luYyAoKSA9PiB7XG4gICAgLy8gUmVxdWVzdCBhY2Nlc3MgdG8gdGhlIHVzZXIncyBFdGhlcmV1bSBhY2NvdW50XG4gICAgYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiIH0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gQ2hlY2sgaWYgdGhlIHdpbmRvdy5ldGhlcmV1bSBvYmplY3QgaXMgYXZhaWxhYmxlXG4gICAgaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xuICAgICAgLy8gQ2hlY2sgaWYgdGhlIGNvbm5lY3QgdG8gbWV0YW1hc2tcbiAgICAgIGlmICh3aW5kb3cuZXRoZXJldW0uc2VsZWN0ZWRBZGRyZXNzKSB7XG4gICAgICAgIGluaXRpYWxpemVFdGhlcnMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIGNvbm5lY3QgdG8gTWV0YU1hc2suXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydChcIlBsZWFzZSBpbnN0YWxsIGEgV2ViMy1lbmFibGVkIGJyb3dzZXIgbGlrZSBNZXRhTWFzay5cIik7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHBhZ2VUaXRsZT17XCJFdmVudFwifT5cbiAgICAgIDxkaXY+ZXZlbnQ8L2Rpdj57XCIgXCJ9XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBldmVudDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIkxheW91dCIsIk93bmVyc2hpcE5vdEluaXRpYWxpemVkRm9yRXh0cmFEYXRhdmVudCIsImluaXRpYWxpemVFdGhlcnMiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInJlcXVlc3QiLCJtZXRob2QiLCJzZWxlY3RlZEFkZHJlc3MiLCJhbGVydCIsImV2ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/event.js\n"));

/***/ })

});