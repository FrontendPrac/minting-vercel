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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/layout/Layout */ \"./src/layout/Layout.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _src_components_utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/utils/constants */ \"./src/components/utils/constants.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/kidongg/Desktop/dream-bridge-react/pages/event.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar EventPage = function EventPage() {\n  _s();\n\n  // State variables for user status\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"),\n      contract = _useState[0],\n      setContract = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"),\n      isRaffle = _useState2[0],\n      setIsRaffle = _useState2[1];\n\n  var initializeEthers = /*#__PURE__*/function () {\n    var _ref = (0,_Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var newProvider, accounts, newRaffleContract, response;\n      return _Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return window.ethereum.request({\n                method: \"eth_requestAccounts\"\n              });\n\n            case 2:\n              // Create an ethers provider using the window.ethereum object\n              newProvider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(window.ethereum);\n              console.log(\"newProvider: \", newProvider); // Wallet Address\n\n              _context.next = 6;\n              return newProvider.listAccounts();\n\n            case 6:\n              accounts = _context.sent;\n              // Create an ethers contract instance using the contract address and ABI\n              newRaffleContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(_src_components_utils_constants__WEBPACK_IMPORTED_MODULE_4__.raffleContractAddress, _src_components_utils_constants__WEBPACK_IMPORTED_MODULE_4__.raffleContactABI, newProvider.getSigner());\n              console.log(\"newRaffleContract: \", newRaffleContract);\n              setContract(newRaffleContract);\n              _context.next = 12;\n              return newRaffleContract.getEntranceState(accounts[0]);\n\n            case 12:\n              response = _context.sent;\n              setIsRaffle(response);\n              console.log(\"response: \", response);\n\n            case 15:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function initializeEthers() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var onClickRaffleSetting = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {\n      var isApprovedForAll;\n      return _Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return contract.isApprovedForAll(signerAddress, _src_components_utils_constants__WEBPACK_IMPORTED_MODULE_4__.raffleContractAddress);\n\n            case 2:\n              isApprovedForAll = _context2.sent;\n              console.log(\"isApprovedForAll: \", isApprovedForAll);\n\n              if (isApprovedForAll) {\n                _context2.next = 8;\n                break;\n              }\n\n              _context2.next = 7;\n              return contract.setApprovalForAll(_src_components_utils_constants__WEBPACK_IMPORTED_MODULE_4__.raffleContractAddress, true);\n\n            case 7:\n              console.log(\"isApprovedForAll: \", isApprovedForAll);\n\n            case 8:\n              _context2.next = 10;\n              return contract.setRaffleParams(1691054137, 1690884996, 0, 0, 3, 3, 0, {\n                gasLimit: 500000\n              });\n\n            case 10:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function onClickRaffleSetting() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    // Check if the window.ethereum object is available\n    if (window.ethereum) {\n      // Check if the connect to metamask\n      if (window.ethereum.selectedAddress) {\n        initializeEthers();\n      } else {\n        alert(\"Please connect to MetaMask.\");\n      }\n    } else {\n      alert(\"Please install a Web3-enabled browser like MetaMask.\");\n    }\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_src_layout_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    pageTitle: \"Event\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: \"metaportal_fn_event\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"button\", {\n          onClick: onClickRaffleSetting,\n          children: \"\\uC138\\uD305\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 71,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(EventPage, \"SzDCc97ij0R1N2abwJVSTxLzpcc=\");\n\n_c = EventPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"EventPage\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixLQUFLLENBQUMsNkJBQUQsQ0FBTDtNQUNEO0lBQ0YsQ0FQRCxNQU9PO01BQ0xBLEtBQUssQ0FBQyxzREFBRCxDQUFMO0lBQ0Q7RUFDRixDQVpRLEVBWU4sRUFaTSxDQUFUO0VBY0Esb0JBQ0UsOERBQUMsMERBQUQ7SUFBUSxTQUFTLEVBQUUsT0FBbkI7SUFBQSx1QkFDRTtNQUFLLFNBQVMsRUFBQyxxQkFBZjtNQUFBLHVCQUNFO1FBQUssU0FBUyxFQUFDLFdBQWY7UUFBQSx1QkFDRTtVQUFRLE9BQU8sRUFBRVAsb0JBQWpCO1VBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BREY7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURGO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFERjtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBREY7QUFTRCxDQXRFRDs7R0FBTXRCOztLQUFBQTtBQXdFTiwrREFBZUEsU0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ldmVudC5qcz83NjU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9zcmMvbGF5b3V0L0xheW91dFwiO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHtcbiAgcmFmZmxlQ29udGFjdEFCSSxcbiAgcmFmZmxlQ29udHJhY3RBZGRyZXNzLFxufSBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvdXRpbHMvY29uc3RhbnRzXCI7XG5cbmNvbnN0IEV2ZW50UGFnZSA9ICgpID0+IHtcbiAgLy8gU3RhdGUgdmFyaWFibGVzIGZvciB1c2VyIHN0YXR1c1xuICBjb25zdCBbY29udHJhY3QsIHNldENvbnRyYWN0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbaXNSYWZmbGUsIHNldElzUmFmZmxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGluaXRpYWxpemVFdGhlcnMgPSBhc3luYyAoKSA9PiB7XG4gICAgLy8gUmVxdWVzdCBhY2Nlc3MgdG8gdGhlIHVzZXIncyBFdGhlcmV1bSBhY2NvdW50XG4gICAgYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiIH0pO1xuXG4gICAgLy8gQ3JlYXRlIGFuIGV0aGVycyBwcm92aWRlciB1c2luZyB0aGUgd2luZG93LmV0aGVyZXVtIG9iamVjdFxuICAgIGNvbnN0IG5ld1Byb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgY29uc29sZS5sb2coXCJuZXdQcm92aWRlcjogXCIsIG5ld1Byb3ZpZGVyKTtcblxuICAgIC8vIFdhbGxldCBBZGRyZXNzXG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBuZXdQcm92aWRlci5saXN0QWNjb3VudHMoKTtcblxuICAgIC8vIENyZWF0ZSBhbiBldGhlcnMgY29udHJhY3QgaW5zdGFuY2UgdXNpbmcgdGhlIGNvbnRyYWN0IGFkZHJlc3MgYW5kIEFCSVxuICAgIGNvbnN0IG5ld1JhZmZsZUNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChcbiAgICAgIHJhZmZsZUNvbnRyYWN0QWRkcmVzcyxcbiAgICAgIHJhZmZsZUNvbnRhY3RBQkksXG4gICAgICBuZXdQcm92aWRlci5nZXRTaWduZXIoKVxuICAgICk7XG4gICAgY29uc29sZS5sb2coXCJuZXdSYWZmbGVDb250cmFjdDogXCIsIG5ld1JhZmZsZUNvbnRyYWN0KTtcbiAgICBzZXRDb250cmFjdChuZXdSYWZmbGVDb250cmFjdCk7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG5ld1JhZmZsZUNvbnRyYWN0LmdldEVudHJhbmNlU3RhdGUoYWNjb3VudHNbMF0pO1xuICAgIHNldElzUmFmZmxlKHJlc3BvbnNlKTtcbiAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlOiBcIiwgcmVzcG9uc2UpO1xuICB9O1xuXG4gIGNvbnN0IG9uQ2xpY2tSYWZmbGVTZXR0aW5nID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGlzQXBwcm92ZWRGb3JBbGwgPSBhd2FpdCBjb250cmFjdC5pc0FwcHJvdmVkRm9yQWxsKFxuICAgICAgc2lnbmVyQWRkcmVzcyxcbiAgICAgIHJhZmZsZUNvbnRyYWN0QWRkcmVzc1xuICAgICk7XG5cbiAgICBjb25zb2xlLmxvZyhcImlzQXBwcm92ZWRGb3JBbGw6IFwiLCBpc0FwcHJvdmVkRm9yQWxsKTtcbiAgICBpZiAoIWlzQXBwcm92ZWRGb3JBbGwpIHtcbiAgICAgIGF3YWl0IGNvbnRyYWN0LnNldEFwcHJvdmFsRm9yQWxsKHJhZmZsZUNvbnRyYWN0QWRkcmVzcywgdHJ1ZSk7XG4gICAgICBjb25zb2xlLmxvZyhcImlzQXBwcm92ZWRGb3JBbGw6IFwiLCBpc0FwcHJvdmVkRm9yQWxsKTtcbiAgICB9XG5cbiAgICBhd2FpdCBjb250cmFjdC5zZXRSYWZmbGVQYXJhbXMoMTY5MTA1NDEzNywgMTY5MDg4NDk5NiwgMCwgMCwgMywgMywgMCwge1xuICAgICAgZ2FzTGltaXQ6IDUwMDAwMCxcbiAgICB9KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIENoZWNrIGlmIHRoZSB3aW5kb3cuZXRoZXJldW0gb2JqZWN0IGlzIGF2YWlsYWJsZVxuICAgIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcbiAgICAgIC8vIENoZWNrIGlmIHRoZSBjb25uZWN0IHRvIG1ldGFtYXNrXG4gICAgICBpZiAod2luZG93LmV0aGVyZXVtLnNlbGVjdGVkQWRkcmVzcykge1xuICAgICAgICBpbml0aWFsaXplRXRoZXJzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChcIlBsZWFzZSBjb25uZWN0IHRvIE1ldGFNYXNrLlwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQoXCJQbGVhc2UgaW5zdGFsbCBhIFdlYjMtZW5hYmxlZCBicm93c2VyIGxpa2UgTWV0YU1hc2suXCIpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBwYWdlVGl0bGU9e1wiRXZlbnRcIn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGFwb3J0YWxfZm5fZXZlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tSYWZmbGVTZXR0aW5nfT7shLjtjIU8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50UGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGF5b3V0IiwiZXRoZXJzIiwicmFmZmxlQ29udGFjdEFCSSIsInJhZmZsZUNvbnRyYWN0QWRkcmVzcyIsIkV2ZW50UGFnZSIsImNvbnRyYWN0Iiwic2V0Q29udHJhY3QiLCJpc1JhZmZsZSIsInNldElzUmFmZmxlIiwiaW5pdGlhbGl6ZUV0aGVycyIsIndpbmRvdyIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsIm5ld1Byb3ZpZGVyIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwiY29uc29sZSIsImxvZyIsImxpc3RBY2NvdW50cyIsImFjY291bnRzIiwibmV3UmFmZmxlQ29udHJhY3QiLCJDb250cmFjdCIsImdldFNpZ25lciIsImdldEVudHJhbmNlU3RhdGUiLCJyZXNwb25zZSIsIm9uQ2xpY2tSYWZmbGVTZXR0aW5nIiwiaXNBcHByb3ZlZEZvckFsbCIsInNpZ25lckFkZHJlc3MiLCJzZXRBcHByb3ZhbEZvckFsbCIsInNldFJhZmZsZVBhcmFtcyIsImdhc0xpbWl0Iiwic2VsZWN0ZWRBZGRyZXNzIiwiYWxlcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/event.js\n"));

/***/ })

});