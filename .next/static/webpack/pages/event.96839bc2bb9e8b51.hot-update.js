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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/layout/Layout */ \"./src/layout/Layout.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _src_components_utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/utils/constants */ \"./src/components/utils/constants.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/kidongg/Desktop/dream-bridge-react/pages/event.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar EventPage = function EventPage() {\n  _s();\n\n  // State variables for ethers provider and contract\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      provider = _useState[0],\n      setProvider = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      contract = _useState2[0],\n      setContract = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"),\n      signerAddress = _useState3[0],\n      setSignerAddress = _useState3[1];\n\n  var initializeEthers = /*#__PURE__*/function () {\n    var _ref = (0,_Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var newProvider;\n      return _Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return window.ethereum.request({\n                method: \"eth_requestAccounts\"\n              });\n\n            case 2:\n              // Create an ethers provider using the window.ethereum object\n              newProvider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(window.ethereum);\n              console.log(\"newProvider: \", newProvider);\n              setProvider(newProvider);\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function initializeEthers() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var initializeRaffle = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {\n      var newContract;\n      return _Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              newContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(_src_components_utils_constants__WEBPACK_IMPORTED_MODULE_4__.contractAddress, _src_components_utils_constants__WEBPACK_IMPORTED_MODULE_4__.contractABI);\n\n            case 1:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function initializeRaffle() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    // Check if the window.ethereum object is available\n    if (window.ethereum) {\n      // Check if the connect to metamask\n      if (window.ethereum.selectedAddress) {\n        initializeEthers();\n      } else {\n        alert(\"Please connect to MetaMask.\");\n      }\n    } else {\n      alert(\"Please install a Web3-enabled browser like MetaMask.\");\n    }\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_src_layout_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    pageTitle: \"Event\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      children: \"event\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, _this), \" \"]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(EventPage, \"KKz+2B1Gb0YwdP0Nee4GTNwONF8=\");\n\n_c = EventPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"EventPage\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ldmVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBS0EsSUFBTU8sU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtFQUFBOztFQUN0QjtFQUNBLGdCQUFnQ0wsK0NBQVEsQ0FBQyxJQUFELENBQXhDO0VBQUEsSUFBT00sUUFBUDtFQUFBLElBQWlCQyxXQUFqQjs7RUFDQSxpQkFBZ0NQLCtDQUFRLENBQUMsSUFBRCxDQUF4QztFQUFBLElBQU9RLFFBQVA7RUFBQSxJQUFpQkMsV0FBakI7O0VBRUEsaUJBQTBDVCwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEQ7RUFBQSxJQUFPVSxhQUFQO0VBQUEsSUFBc0JDLGdCQUF0Qjs7RUFFQSxJQUFNQyxnQkFBZ0I7SUFBQSxzVkFBRztNQUFBO01BQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtjQUFBLE9BRWpCQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCO2dCQUFFQyxNQUFNLEVBQUU7Y0FBVixDQUF4QixDQUZpQjs7WUFBQTtjQUl2QjtjQUNNQyxXQUxpQixHQUtILElBQUlmLGlFQUFKLENBQWtDVyxNQUFNLENBQUNDLFFBQXpDLENBTEc7Y0FNdkJNLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFBNkJKLFdBQTdCO2NBQ0FWLFdBQVcsQ0FBQ1UsV0FBRCxDQUFYOztZQVB1QjtZQUFBO2NBQUE7VUFBQTtRQUFBO01BQUE7SUFBQSxDQUFIOztJQUFBLGdCQUFoQkwsZ0JBQWdCO01BQUE7SUFBQTtFQUFBLEdBQXRCOztFQVVBLElBQU1VLGdCQUFnQjtJQUFBLHVWQUFHO01BQUE7TUFBQTtRQUFBO1VBQUE7WUFBQTtjQUNqQkMsV0FEaUIsR0FDSCxJQUFJckIsbURBQUosQ0FBb0JFLDRFQUFwQixFQUFxQ0Qsd0VBQXJDLENBREc7O1lBQUE7WUFBQTtjQUFBO1VBQUE7UUFBQTtNQUFBO0lBQUEsQ0FBSDs7SUFBQSxnQkFBaEJtQixnQkFBZ0I7TUFBQTtJQUFBO0VBQUEsR0FBdEI7O0VBSUF2QixnREFBUyxDQUFDLFlBQU07SUFDZDtJQUNBLElBQUljLE1BQU0sQ0FBQ0MsUUFBWCxFQUFxQjtNQUNuQjtNQUNBLElBQUlELE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQlcsZUFBcEIsRUFBcUM7UUFDbkNiLGdCQUFnQjtNQUNqQixDQUZELE1BRU87UUFDTGMsS0FBSyxDQUFDLDZCQUFELENBQUw7TUFDRDtJQUNGLENBUEQsTUFPTztNQUNMQSxLQUFLLENBQUMsc0RBQUQsQ0FBTDtJQUNEO0VBQ0YsQ0FaUSxFQVlOLEVBWk0sQ0FBVDtFQWNBLG9CQUNFLDhEQUFDLDBEQUFEO0lBQVEsU0FBUyxFQUFFLE9BQW5CO0lBQUEsd0JBQ0U7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FERixFQUNtQixHQURuQjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FERjtBQUtELENBeENEOztHQUFNckI7O0tBQUFBO0FBMENOLCtEQUFlQSxTQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2V2ZW50LmpzPzc2NTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL3NyYy9sYXlvdXQvTGF5b3V0XCI7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQge1xuICBjb250cmFjdEFCSSxcbiAgY29udHJhY3RBZGRyZXNzLFxufSBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvdXRpbHMvY29uc3RhbnRzXCI7XG5cbmNvbnN0IEV2ZW50UGFnZSA9ICgpID0+IHtcbiAgLy8gU3RhdGUgdmFyaWFibGVzIGZvciBldGhlcnMgcHJvdmlkZXIgYW5kIGNvbnRyYWN0XG4gIGNvbnN0IFtwcm92aWRlciwgc2V0UHJvdmlkZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtjb250cmFjdCwgc2V0Q29udHJhY3RdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgW3NpZ25lckFkZHJlc3MsIHNldFNpZ25lckFkZHJlc3NdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgaW5pdGlhbGl6ZUV0aGVycyA9IGFzeW5jICgpID0+IHtcbiAgICAvLyBSZXF1ZXN0IGFjY2VzcyB0byB0aGUgdXNlcidzIEV0aGVyZXVtIGFjY291bnRcbiAgICBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIgfSk7XG5cbiAgICAvLyBDcmVhdGUgYW4gZXRoZXJzIHByb3ZpZGVyIHVzaW5nIHRoZSB3aW5kb3cuZXRoZXJldW0gb2JqZWN0XG4gICAgY29uc3QgbmV3UHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcbiAgICBjb25zb2xlLmxvZyhcIm5ld1Byb3ZpZGVyOiBcIiwgbmV3UHJvdmlkZXIpO1xuICAgIHNldFByb3ZpZGVyKG5ld1Byb3ZpZGVyKTtcbiAgfTtcblxuICBjb25zdCBpbml0aWFsaXplUmFmZmxlID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IG5ld0NvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChjb250cmFjdEFkZHJlc3MsIGNvbnRyYWN0QUJJKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIENoZWNrIGlmIHRoZSB3aW5kb3cuZXRoZXJldW0gb2JqZWN0IGlzIGF2YWlsYWJsZVxuICAgIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcbiAgICAgIC8vIENoZWNrIGlmIHRoZSBjb25uZWN0IHRvIG1ldGFtYXNrXG4gICAgICBpZiAod2luZG93LmV0aGVyZXVtLnNlbGVjdGVkQWRkcmVzcykge1xuICAgICAgICBpbml0aWFsaXplRXRoZXJzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChcIlBsZWFzZSBjb25uZWN0IHRvIE1ldGFNYXNrLlwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQoXCJQbGVhc2UgaW5zdGFsbCBhIFdlYjMtZW5hYmxlZCBicm93c2VyIGxpa2UgTWV0YU1hc2suXCIpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBwYWdlVGl0bGU9e1wiRXZlbnRcIn0+XG4gICAgICA8ZGl2PmV2ZW50PC9kaXY+e1wiIFwifVxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMYXlvdXQiLCJldGhlcnMiLCJjb250cmFjdEFCSSIsImNvbnRyYWN0QWRkcmVzcyIsIkV2ZW50UGFnZSIsInByb3ZpZGVyIiwic2V0UHJvdmlkZXIiLCJjb250cmFjdCIsInNldENvbnRyYWN0Iiwic2lnbmVyQWRkcmVzcyIsInNldFNpZ25lckFkZHJlc3MiLCJpbml0aWFsaXplRXRoZXJzIiwid2luZG93IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwibmV3UHJvdmlkZXIiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJjb25zb2xlIiwibG9nIiwiaW5pdGlhbGl6ZVJhZmZsZSIsIm5ld0NvbnRyYWN0IiwiQ29udHJhY3QiLCJzZWxlY3RlZEFkZHJlc3MiLCJhbGVydCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/event.js\n"));

/***/ })

});