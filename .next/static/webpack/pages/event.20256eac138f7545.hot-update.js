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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/layout/Layout */ \"./src/layout/Layout.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _src_components_utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/utils/constants */ \"./src/components/utils/constants.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/kidongg/Desktop/dream-bridge-react/pages/event.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar EventPage = function EventPage() {\n  _s();\n\n  // State variables for ethers provider and contract\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"),\n      provider = _useState[0],\n      setProvider = _useState[1]; // const [contract, setContract] = useState(\"\");\n  // State variables for user status\n\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"),\n      signerAddress = _useState2[0],\n      setSignerAddress = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"),\n      isRaffle = _useState3[0],\n      setIsRaffle = _useState3[1]; // Get Raffle Data\n\n\n  var initializeEthers = /*#__PURE__*/function () {\n    var _ref = (0,_Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var newProvider, accounts, newRaffleContract, response;\n      return _Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return window.ethereum.request({\n                method: \"eth_requestAccounts\"\n              });\n\n            case 2:\n              // Create an ethers provider using the window.ethereum object\n              newProvider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(window.ethereum);\n              console.log(\"newProvider: \", newProvider);\n              setProvider(newProvider); // Wallet Address\n\n              _context.next = 7;\n              return newProvider.listAccounts();\n\n            case 7:\n              accounts = _context.sent;\n              console.log(\"accounts[0]: \", accounts[0]);\n              setSignerAddress(accounts[0]); // Create an ethers contract instance using the contract address and ABI\n\n              newRaffleContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(_src_components_utils_constants__WEBPACK_IMPORTED_MODULE_4__.raffleContractAddress, _src_components_utils_constants__WEBPACK_IMPORTED_MODULE_4__.raffleContactABI, newProvider.getSigner());\n              console.log(\"newRaffleContract: \", newRaffleContract); // setContract(newRaffleContract);\n\n              _context.next = 14;\n              return newRaffleContract.getEntranceState(accounts[0]);\n\n            case 14:\n              response = _context.sent;\n              setIsRaffle(response);\n              console.log(\"response: \", response);\n\n            case 17:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function initializeEthers() {\n      return _ref.apply(this, arguments);\n    };\n  }(); // Setting initial Raffle\n\n\n  var onClickRaffleSetting = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {\n      var contract, isApprovedForAll, raffleContract;\n      return _Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              contract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(_src_components_utils_constants__WEBPACK_IMPORTED_MODULE_4__.contractAddress, _src_components_utils_constants__WEBPACK_IMPORTED_MODULE_4__.contractABI, provider.getSigner());\n              _context2.next = 3;\n              return contract.isApprovedForAll(signerAddress, _src_components_utils_constants__WEBPACK_IMPORTED_MODULE_4__.raffleContractAddress);\n\n            case 3:\n              isApprovedForAll = _context2.sent;\n              console.log(\"isApprovedForAll: \", isApprovedForAll);\n\n              if (isApprovedForAll) {\n                _context2.next = 9;\n                break;\n              }\n\n              _context2.next = 8;\n              return contract.setApprovalForAll(_src_components_utils_constants__WEBPACK_IMPORTED_MODULE_4__.raffleContractAddress, true);\n\n            case 8:\n              console.log(\"isApprovedForAll: \", isApprovedForAll);\n\n            case 9:\n              raffleContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(_src_components_utils_constants__WEBPACK_IMPORTED_MODULE_4__.raffleContractAddress, _src_components_utils_constants__WEBPACK_IMPORTED_MODULE_4__.raffleContactABI, provider.getSigner());\n              _context2.next = 12;\n              return raffleContract.setRaffleParams(1691054137, 1690884996, 0, 0, 3, 3, 0, {\n                gasLimit: 500000\n              });\n\n            case 12:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function onClickRaffleSetting() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    // Check if the window.ethereum object is available\n    if (window.ethereum) {\n      // Check if the connect to metamask\n      if (window.ethereum.selectedAddress) {\n        initializeEthers();\n      } else {\n        alert(\"Please connect to MetaMask.\");\n      }\n    } else {\n      alert(\"Please install a Web3-enabled browser like MetaMask.\");\n    }\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_src_layout_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    pageTitle: \"Event\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: \"metaportal_fn_event\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"button\", {\n          onClick: onClickRaffleSetting,\n          children: \"\\uC138\\uD305\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 103,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(EventPage, \"03ifan9/K+f3JwNAHqAEjeuLLv4=\");\n\n_c = EventPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"EventPage\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkcsUUFBUSxDQUFDb0IsU0FBVCxFQUhxQixDQWxCSTtjQUFBO2NBQUEsT0F3QnJCTyxjQUFjLENBQUNDLGVBQWYsQ0FDSixVQURJLEVBRUosVUFGSSxFQUdKLENBSEksRUFJSixDQUpJLEVBS0osQ0FMSSxFQU1KLENBTkksRUFPSixDQVBJLEVBUUo7Z0JBQ0VDLFFBQVEsRUFBRTtjQURaLENBUkksQ0F4QnFCOztZQUFBO1lBQUE7Y0FBQTtVQUFBO1FBQUE7TUFBQTtJQUFBLENBQUg7O0lBQUEsZ0JBQXBCTixvQkFBb0I7TUFBQTtJQUFBO0VBQUEsR0FBMUI7O0VBc0NBaEMsZ0RBQVMsQ0FBQyxZQUFNO0lBQ2Q7SUFDQSxJQUFJZ0IsTUFBTSxDQUFDQyxRQUFYLEVBQXFCO01BQ25CO01BQ0EsSUFBSUQsTUFBTSxDQUFDQyxRQUFQLENBQWdCc0IsZUFBcEIsRUFBcUM7UUFDbkN4QixnQkFBZ0I7TUFDakIsQ0FGRCxNQUVPO1FBQ0x5QixLQUFLLENBQUMsNkJBQUQsQ0FBTDtNQUNEO0lBQ0YsQ0FQRCxNQU9PO01BQ0xBLEtBQUssQ0FBQyxzREFBRCxDQUFMO0lBQ0Q7RUFDRixDQVpRLEVBWU4sRUFaTSxDQUFUO0VBY0Esb0JBQ0UsOERBQUMsMERBQUQ7SUFBUSxTQUFTLEVBQUUsT0FBbkI7SUFBQSx1QkFDRTtNQUFLLFNBQVMsRUFBQyxxQkFBZjtNQUFBLHVCQUNFO1FBQUssU0FBUyxFQUFDLFdBQWY7UUFBQSx1QkFDRTtVQUFRLE9BQU8sRUFBRVIsb0JBQWpCO1VBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BREY7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURGO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFERjtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBREY7QUFTRCxDQXBHRDs7R0FBTXhCOztLQUFBQTtBQXNHTiwrREFBZUEsU0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ldmVudC5qcz83NjU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9zcmMvbGF5b3V0L0xheW91dFwiO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHtcbiAgY29udHJhY3RBQkksXG4gIGNvbnRyYWN0QWRkcmVzcyxcbiAgcmFmZmxlQ29udGFjdEFCSSxcbiAgcmFmZmxlQ29udHJhY3RBZGRyZXNzLFxufSBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvdXRpbHMvY29uc3RhbnRzXCI7XG5cbmNvbnN0IEV2ZW50UGFnZSA9ICgpID0+IHtcbiAgLy8gU3RhdGUgdmFyaWFibGVzIGZvciBldGhlcnMgcHJvdmlkZXIgYW5kIGNvbnRyYWN0XG4gIGNvbnN0IFtwcm92aWRlciwgc2V0UHJvdmlkZXJdID0gdXNlU3RhdGUoXCJcIik7XG4gIC8vIGNvbnN0IFtjb250cmFjdCwgc2V0Q29udHJhY3RdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgLy8gU3RhdGUgdmFyaWFibGVzIGZvciB1c2VyIHN0YXR1c1xuICBjb25zdCBbc2lnbmVyQWRkcmVzcywgc2V0U2lnbmVyQWRkcmVzc10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2lzUmFmZmxlLCBzZXRJc1JhZmZsZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAvLyBHZXQgUmFmZmxlIERhdGFcbiAgY29uc3QgaW5pdGlhbGl6ZUV0aGVycyA9IGFzeW5jICgpID0+IHtcbiAgICAvLyBSZXF1ZXN0IGFjY2VzcyB0byB0aGUgdXNlcidzIEV0aGVyZXVtIGFjY291bnRcbiAgICBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIgfSk7XG5cbiAgICAvLyBDcmVhdGUgYW4gZXRoZXJzIHByb3ZpZGVyIHVzaW5nIHRoZSB3aW5kb3cuZXRoZXJldW0gb2JqZWN0XG4gICAgY29uc3QgbmV3UHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcbiAgICBjb25zb2xlLmxvZyhcIm5ld1Byb3ZpZGVyOiBcIiwgbmV3UHJvdmlkZXIpO1xuICAgIHNldFByb3ZpZGVyKG5ld1Byb3ZpZGVyKTtcblxuICAgIC8vIFdhbGxldCBBZGRyZXNzXG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBuZXdQcm92aWRlci5saXN0QWNjb3VudHMoKTtcbiAgICBjb25zb2xlLmxvZyhcImFjY291bnRzWzBdOiBcIiwgYWNjb3VudHNbMF0pO1xuICAgIHNldFNpZ25lckFkZHJlc3MoYWNjb3VudHNbMF0pO1xuXG4gICAgLy8gQ3JlYXRlIGFuIGV0aGVycyBjb250cmFjdCBpbnN0YW5jZSB1c2luZyB0aGUgY29udHJhY3QgYWRkcmVzcyBhbmQgQUJJXG4gICAgY29uc3QgbmV3UmFmZmxlQ29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxuICAgICAgcmFmZmxlQ29udHJhY3RBZGRyZXNzLFxuICAgICAgcmFmZmxlQ29udGFjdEFCSSxcbiAgICAgIG5ld1Byb3ZpZGVyLmdldFNpZ25lcigpXG4gICAgKTtcbiAgICBjb25zb2xlLmxvZyhcIm5ld1JhZmZsZUNvbnRyYWN0OiBcIiwgbmV3UmFmZmxlQ29udHJhY3QpO1xuICAgIC8vIHNldENvbnRyYWN0KG5ld1JhZmZsZUNvbnRyYWN0KTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbmV3UmFmZmxlQ29udHJhY3QuZ2V0RW50cmFuY2VTdGF0ZShhY2NvdW50c1swXSk7XG4gICAgc2V0SXNSYWZmbGUocmVzcG9uc2UpO1xuICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2U6IFwiLCByZXNwb25zZSk7XG4gIH07XG5cbiAgLy8gU2V0dGluZyBpbml0aWFsIFJhZmZsZVxuICBjb25zdCBvbkNsaWNrUmFmZmxlU2V0dGluZyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoXG4gICAgICBjb250cmFjdEFkZHJlc3MsXG4gICAgICBjb250cmFjdEFCSSxcbiAgICAgIHByb3ZpZGVyLmdldFNpZ25lcigpXG4gICAgKTtcblxuICAgIGNvbnN0IGlzQXBwcm92ZWRGb3JBbGwgPSBhd2FpdCBjb250cmFjdC5pc0FwcHJvdmVkRm9yQWxsKFxuICAgICAgc2lnbmVyQWRkcmVzcyxcbiAgICAgIHJhZmZsZUNvbnRyYWN0QWRkcmVzc1xuICAgICk7XG5cbiAgICBjb25zb2xlLmxvZyhcImlzQXBwcm92ZWRGb3JBbGw6IFwiLCBpc0FwcHJvdmVkRm9yQWxsKTtcbiAgICBpZiAoIWlzQXBwcm92ZWRGb3JBbGwpIHtcbiAgICAgIGF3YWl0IGNvbnRyYWN0LnNldEFwcHJvdmFsRm9yQWxsKHJhZmZsZUNvbnRyYWN0QWRkcmVzcywgdHJ1ZSk7XG4gICAgICBjb25zb2xlLmxvZyhcImlzQXBwcm92ZWRGb3JBbGw6IFwiLCBpc0FwcHJvdmVkRm9yQWxsKTtcbiAgICB9XG5cbiAgICBjb25zdCByYWZmbGVDb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoXG4gICAgICByYWZmbGVDb250cmFjdEFkZHJlc3MsXG4gICAgICByYWZmbGVDb250YWN0QUJJLFxuICAgICAgcHJvdmlkZXIuZ2V0U2lnbmVyKClcbiAgICApO1xuXG4gICAgYXdhaXQgcmFmZmxlQ29udHJhY3Quc2V0UmFmZmxlUGFyYW1zKFxuICAgICAgMTY5MTA1NDEzNyxcbiAgICAgIDE2OTA4ODQ5OTYsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIDMsXG4gICAgICAzLFxuICAgICAgMCxcbiAgICAgIHtcbiAgICAgICAgZ2FzTGltaXQ6IDUwMDAwMCxcbiAgICAgIH1cbiAgICApO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gQ2hlY2sgaWYgdGhlIHdpbmRvdy5ldGhlcmV1bSBvYmplY3QgaXMgYXZhaWxhYmxlXG4gICAgaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xuICAgICAgLy8gQ2hlY2sgaWYgdGhlIGNvbm5lY3QgdG8gbWV0YW1hc2tcbiAgICAgIGlmICh3aW5kb3cuZXRoZXJldW0uc2VsZWN0ZWRBZGRyZXNzKSB7XG4gICAgICAgIGluaXRpYWxpemVFdGhlcnMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIGNvbm5lY3QgdG8gTWV0YU1hc2suXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydChcIlBsZWFzZSBpbnN0YWxsIGEgV2ViMy1lbmFibGVkIGJyb3dzZXIgbGlrZSBNZXRhTWFzay5cIik7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHBhZ2VUaXRsZT17XCJFdmVudFwifT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWV0YXBvcnRhbF9mbl9ldmVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25DbGlja1JhZmZsZVNldHRpbmd9PuyEuO2MhTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMYXlvdXQiLCJldGhlcnMiLCJjb250cmFjdEFCSSIsImNvbnRyYWN0QWRkcmVzcyIsInJhZmZsZUNvbnRhY3RBQkkiLCJyYWZmbGVDb250cmFjdEFkZHJlc3MiLCJFdmVudFBhZ2UiLCJwcm92aWRlciIsInNldFByb3ZpZGVyIiwic2lnbmVyQWRkcmVzcyIsInNldFNpZ25lckFkZHJlc3MiLCJpc1JhZmZsZSIsInNldElzUmFmZmxlIiwiaW5pdGlhbGl6ZUV0aGVycyIsIndpbmRvdyIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsIm5ld1Byb3ZpZGVyIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwiY29uc29sZSIsImxvZyIsImxpc3RBY2NvdW50cyIsImFjY291bnRzIiwibmV3UmFmZmxlQ29udHJhY3QiLCJDb250cmFjdCIsImdldFNpZ25lciIsImdldEVudHJhbmNlU3RhdGUiLCJyZXNwb25zZSIsIm9uQ2xpY2tSYWZmbGVTZXR0aW5nIiwiY29udHJhY3QiLCJpc0FwcHJvdmVkRm9yQWxsIiwic2V0QXBwcm92YWxGb3JBbGwiLCJyYWZmbGVDb250cmFjdCIsInNldFJhZmZsZVBhcmFtcyIsImdhc0xpbWl0Iiwic2VsZWN0ZWRBZGRyZXNzIiwiYWxlcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/event.js\n"));

/***/ })

});