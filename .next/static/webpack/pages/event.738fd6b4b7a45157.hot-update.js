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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/layout/Layout */ \"./src/layout/Layout.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _src_components_utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/utils/constants */ \"./src/components/utils/constants.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/kidongg/Desktop/dream-bridge-react/pages/event.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar EventPage = function EventPage() {\n  _s();\n\n  // State variables for ethers provider and contract\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"),\n      contract = _useState[0],\n      setContract = _useState[1]; // State variables for user status\n\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"),\n      signerAddress = _useState2[0],\n      setSignerAddress = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"),\n      isRaffle = _useState3[0],\n      setIsRaffle = _useState3[1];\n\n  var initializeEthers = /*#__PURE__*/function () {\n    var _ref = (0,_Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var newProvider, accounts, newRaffleContract, response;\n      return _Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return window.ethereum.request({\n                method: \"eth_requestAccounts\"\n              });\n\n            case 2:\n              // Create an ethers provider using the window.ethereum object\n              newProvider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(window.ethereum);\n              console.log(\"newProvider: \", newProvider); // Wallet Address\n\n              _context.next = 6;\n              return newProvider.listAccounts();\n\n            case 6:\n              accounts = _context.sent;\n              setSignerAddress(accounts[0]); // Create an ethers contract instance using the contract address and ABI\n\n              newRaffleContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(_src_components_utils_constants__WEBPACK_IMPORTED_MODULE_4__.raffleContractAddress, _src_components_utils_constants__WEBPACK_IMPORTED_MODULE_4__.raffleContactABI, newProvider.getSigner());\n              console.log(\"newRaffleContract: \", newRaffleContract);\n              setContract(newRaffleContract);\n              _context.next = 13;\n              return newRaffleContract.getEntranceState(accounts[0]);\n\n            case 13:\n              response = _context.sent;\n              setIsRaffle(response);\n              console.log(\"response: \", response);\n\n            case 16:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function initializeEthers() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var onClickRaffleSetting = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {\n      var newContract, isApprovedForAll;\n      return _Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              newContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(_src_components_utils_constants__WEBPACK_IMPORTED_MODULE_4__.contractAddress, _src_components_utils_constants__WEBPACK_IMPORTED_MODULE_4__.contractABI, provider.getSigner());\n              _context2.next = 3;\n              return newContract.isApprovedForAll(signerAddress, _src_components_utils_constants__WEBPACK_IMPORTED_MODULE_4__.raffleContractAddress);\n\n            case 3:\n              isApprovedForAll = _context2.sent;\n              console.log(\"isApprovedForAll: \", isApprovedForAll);\n\n              if (isApprovedForAll) {\n                _context2.next = 9;\n                break;\n              }\n\n              _context2.next = 8;\n              return contract.setApprovalForAll(_src_components_utils_constants__WEBPACK_IMPORTED_MODULE_4__.raffleContractAddress, true);\n\n            case 8:\n              console.log(\"isApprovedForAll: \", isApprovedForAll);\n\n            case 9:\n              _context2.next = 11;\n              return contract.setRaffleParams(1691054137, 1690884996, 0, 0, 3, 3, 0, {\n                gasLimit: 500000\n              });\n\n            case 11:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function onClickRaffleSetting() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    // Check if the window.ethereum object is available\n    if (window.ethereum) {\n      // Check if the connect to metamask\n      if (window.ethereum.selectedAddress) {\n        initializeEthers();\n      } else {\n        alert(\"Please connect to MetaMask.\");\n      }\n    } else {\n      alert(\"Please install a Web3-enabled browser like MetaMask.\");\n    }\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_src_layout_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    pageTitle: \"Event\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: \"metaportal_fn_event\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"button\", {\n          onClick: onClickRaffleSetting,\n          children: \"\\uC138\\uD305\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 83,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(EventPage, \"6Rf5WlwxgfOZ99liOjE3Y7H3uZo=\");\n\n_c = EventPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"EventPage\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztZQUFBO1lBQUE7Y0FBQTtVQUFBO1FBQUE7TUFBQTtJQUFBLENBQUg7O0lBQUEsZ0JBQXBCTixvQkFBb0I7TUFBQTtJQUFBO0VBQUEsR0FBMUI7O0VBdUJBaEMsZ0RBQVMsQ0FBQyxZQUFNO0lBQ2Q7SUFDQSxJQUFJZ0IsTUFBTSxDQUFDQyxRQUFYLEVBQXFCO01BQ25CO01BQ0EsSUFBSUQsTUFBTSxDQUFDQyxRQUFQLENBQWdCc0IsZUFBcEIsRUFBcUM7UUFDbkN4QixnQkFBZ0I7TUFDakIsQ0FGRCxNQUVPO1FBQ0x5QixLQUFLLENBQUMsNkJBQUQsQ0FBTDtNQUNEO0lBQ0YsQ0FQRCxNQU9PO01BQ0xBLEtBQUssQ0FBQyxzREFBRCxDQUFMO0lBQ0Q7RUFDRixDQVpRLEVBWU4sRUFaTSxDQUFUO0VBY0Esb0JBQ0UsOERBQUMsMERBQUQ7SUFBUSxTQUFTLEVBQUUsT0FBbkI7SUFBQSx1QkFDRTtNQUFLLFNBQVMsRUFBQyxxQkFBZjtNQUFBLHVCQUNFO1FBQUssU0FBUyxFQUFDLFdBQWY7UUFBQSx1QkFDRTtVQUFRLE9BQU8sRUFBRVIsb0JBQWpCO1VBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BREY7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURGO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFERjtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBREY7QUFTRCxDQWhGRDs7R0FBTXhCOztLQUFBQTtBQWtGTiwrREFBZUEsU0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ldmVudC5qcz83NjU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9zcmMvbGF5b3V0L0xheW91dFwiO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHtcbiAgY29udHJhY3RBQkksXG4gIGNvbnRyYWN0QWRkcmVzcyxcbiAgcmFmZmxlQ29udGFjdEFCSSxcbiAgcmFmZmxlQ29udHJhY3RBZGRyZXNzLFxufSBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvdXRpbHMvY29uc3RhbnRzXCI7XG5cbmNvbnN0IEV2ZW50UGFnZSA9ICgpID0+IHtcbiAgLy8gU3RhdGUgdmFyaWFibGVzIGZvciBldGhlcnMgcHJvdmlkZXIgYW5kIGNvbnRyYWN0XG4gIGNvbnN0IFtjb250cmFjdCwgc2V0Q29udHJhY3RdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgLy8gU3RhdGUgdmFyaWFibGVzIGZvciB1c2VyIHN0YXR1c1xuICBjb25zdCBbc2lnbmVyQWRkcmVzcywgc2V0U2lnbmVyQWRkcmVzc10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2lzUmFmZmxlLCBzZXRJc1JhZmZsZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBpbml0aWFsaXplRXRoZXJzID0gYXN5bmMgKCkgPT4ge1xuICAgIC8vIFJlcXVlc3QgYWNjZXNzIHRvIHRoZSB1c2VyJ3MgRXRoZXJldW0gYWNjb3VudFxuICAgIGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIiB9KTtcblxuICAgIC8vIENyZWF0ZSBhbiBldGhlcnMgcHJvdmlkZXIgdXNpbmcgdGhlIHdpbmRvdy5ldGhlcmV1bSBvYmplY3RcbiAgICBjb25zdCBuZXdQcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pO1xuICAgIGNvbnNvbGUubG9nKFwibmV3UHJvdmlkZXI6IFwiLCBuZXdQcm92aWRlcik7XG5cbiAgICAvLyBXYWxsZXQgQWRkcmVzc1xuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgbmV3UHJvdmlkZXIubGlzdEFjY291bnRzKCk7XG4gICAgc2V0U2lnbmVyQWRkcmVzcyhhY2NvdW50c1swXSk7XG5cbiAgICAvLyBDcmVhdGUgYW4gZXRoZXJzIGNvbnRyYWN0IGluc3RhbmNlIHVzaW5nIHRoZSBjb250cmFjdCBhZGRyZXNzIGFuZCBBQklcbiAgICBjb25zdCBuZXdSYWZmbGVDb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoXG4gICAgICByYWZmbGVDb250cmFjdEFkZHJlc3MsXG4gICAgICByYWZmbGVDb250YWN0QUJJLFxuICAgICAgbmV3UHJvdmlkZXIuZ2V0U2lnbmVyKClcbiAgICApO1xuICAgIGNvbnNvbGUubG9nKFwibmV3UmFmZmxlQ29udHJhY3Q6IFwiLCBuZXdSYWZmbGVDb250cmFjdCk7XG4gICAgc2V0Q29udHJhY3QobmV3UmFmZmxlQ29udHJhY3QpO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBuZXdSYWZmbGVDb250cmFjdC5nZXRFbnRyYW5jZVN0YXRlKGFjY291bnRzWzBdKTtcbiAgICBzZXRJc1JhZmZsZShyZXNwb25zZSk7XG4gICAgY29uc29sZS5sb2coXCJyZXNwb25zZTogXCIsIHJlc3BvbnNlKTtcbiAgfTtcblxuICBjb25zdCBvbkNsaWNrUmFmZmxlU2V0dGluZyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBuZXdDb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoXG4gICAgICBjb250cmFjdEFkZHJlc3MsXG4gICAgICBjb250cmFjdEFCSSxcbiAgICAgIHByb3ZpZGVyLmdldFNpZ25lcigpXG4gICAgKTtcblxuICAgIGNvbnN0IGlzQXBwcm92ZWRGb3JBbGwgPSBhd2FpdCBuZXdDb250cmFjdC5pc0FwcHJvdmVkRm9yQWxsKFxuICAgICAgc2lnbmVyQWRkcmVzcyxcbiAgICAgIHJhZmZsZUNvbnRyYWN0QWRkcmVzc1xuICAgICk7XG5cbiAgICBjb25zb2xlLmxvZyhcImlzQXBwcm92ZWRGb3JBbGw6IFwiLCBpc0FwcHJvdmVkRm9yQWxsKTtcbiAgICBpZiAoIWlzQXBwcm92ZWRGb3JBbGwpIHtcbiAgICAgIGF3YWl0IGNvbnRyYWN0LnNldEFwcHJvdmFsRm9yQWxsKHJhZmZsZUNvbnRyYWN0QWRkcmVzcywgdHJ1ZSk7XG4gICAgICBjb25zb2xlLmxvZyhcImlzQXBwcm92ZWRGb3JBbGw6IFwiLCBpc0FwcHJvdmVkRm9yQWxsKTtcbiAgICB9XG5cbiAgICBhd2FpdCBjb250cmFjdC5zZXRSYWZmbGVQYXJhbXMoMTY5MTA1NDEzNywgMTY5MDg4NDk5NiwgMCwgMCwgMywgMywgMCwge1xuICAgICAgZ2FzTGltaXQ6IDUwMDAwMCxcbiAgICB9KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIENoZWNrIGlmIHRoZSB3aW5kb3cuZXRoZXJldW0gb2JqZWN0IGlzIGF2YWlsYWJsZVxuICAgIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcbiAgICAgIC8vIENoZWNrIGlmIHRoZSBjb25uZWN0IHRvIG1ldGFtYXNrXG4gICAgICBpZiAod2luZG93LmV0aGVyZXVtLnNlbGVjdGVkQWRkcmVzcykge1xuICAgICAgICBpbml0aWFsaXplRXRoZXJzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChcIlBsZWFzZSBjb25uZWN0IHRvIE1ldGFNYXNrLlwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQoXCJQbGVhc2UgaW5zdGFsbCBhIFdlYjMtZW5hYmxlZCBicm93c2VyIGxpa2UgTWV0YU1hc2suXCIpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBwYWdlVGl0bGU9e1wiRXZlbnRcIn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGFwb3J0YWxfZm5fZXZlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tSYWZmbGVTZXR0aW5nfT7shLjtjIU8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50UGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGF5b3V0IiwiZXRoZXJzIiwiY29udHJhY3RBQkkiLCJjb250cmFjdEFkZHJlc3MiLCJyYWZmbGVDb250YWN0QUJJIiwicmFmZmxlQ29udHJhY3RBZGRyZXNzIiwiRXZlbnRQYWdlIiwiY29udHJhY3QiLCJzZXRDb250cmFjdCIsInNpZ25lckFkZHJlc3MiLCJzZXRTaWduZXJBZGRyZXNzIiwiaXNSYWZmbGUiLCJzZXRJc1JhZmZsZSIsImluaXRpYWxpemVFdGhlcnMiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInJlcXVlc3QiLCJtZXRob2QiLCJuZXdQcm92aWRlciIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsImNvbnNvbGUiLCJsb2ciLCJsaXN0QWNjb3VudHMiLCJhY2NvdW50cyIsIm5ld1JhZmZsZUNvbnRyYWN0IiwiQ29udHJhY3QiLCJnZXRTaWduZXIiLCJnZXRFbnRyYW5jZVN0YXRlIiwicmVzcG9uc2UiLCJvbkNsaWNrUmFmZmxlU2V0dGluZyIsIm5ld0NvbnRyYWN0IiwicHJvdmlkZXIiLCJpc0FwcHJvdmVkRm9yQWxsIiwic2V0QXBwcm92YWxGb3JBbGwiLCJzZXRSYWZmbGVQYXJhbXMiLCJnYXNMaW1pdCIsInNlbGVjdGVkQWRkcmVzcyIsImFsZXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/event.js\n"));

/***/ })

});