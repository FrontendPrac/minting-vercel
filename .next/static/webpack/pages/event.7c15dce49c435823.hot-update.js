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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/layout/Layout */ \"./src/layout/Layout.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _src_components_utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/utils/constants */ \"./src/components/utils/constants.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/kidongg/Desktop/dream-bridge-react/pages/event.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar EventPage = function EventPage() {\n  _s();\n\n  // State variables for user status\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"),\n      isRaffle = _useState[0],\n      setIsRaffle = _useState[1];\n\n  var initializeEthers = /*#__PURE__*/function () {\n    var _ref = (0,_Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var newProvider, accounts, newRaffleContract, response;\n      return _Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return window.ethereum.request({\n                method: \"eth_requestAccounts\"\n              });\n\n            case 2:\n              // Create an ethers provider using the window.ethereum object\n              newProvider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(window.ethereum);\n              console.log(\"newProvider: \", newProvider); // Wallet Address\n\n              _context.next = 6;\n              return newProvider.listAccounts();\n\n            case 6:\n              accounts = _context.sent;\n              // Create an ethers contract instance using the contract address and ABI\n              newRaffleContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(_src_components_utils_constants__WEBPACK_IMPORTED_MODULE_4__.raffleContractAddress, _src_components_utils_constants__WEBPACK_IMPORTED_MODULE_4__.raffleContactABI, newProvider.getSigner());\n              console.log(\"newRaffleContract: \", newRaffleContract);\n              _context.next = 11;\n              return newRaffleContract.getEntranceState(accounts[0]);\n\n            case 11:\n              response = _context.sent;\n              set;\n              console.log(\"response: \", response);\n\n            case 14:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function initializeEthers() {\n      return _ref.apply(this, arguments);\n    };\n  }(); // const initializeRaffle = async () => {\n  //   const newRaffleContract = new ethers.Contract(\n  //     raffleContractAddress,\n  //     raffleContactABI,\n  //     provider.getSigner()\n  //   );\n  //   console.log(\"newRaffleContract: \", newRaffleContract);\n  //   const response = await newRaffleContract.getEntranceState(signerAddress);\n  //   console.log(\"response: \", response);\n  // };\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    // Check if the window.ethereum object is available\n    if (window.ethereum) {\n      // Check if the connect to metamask\n      if (window.ethereum.selectedAddress) {\n        initializeEthers(); // initializeRaffle();\n      } else {\n        alert(\"Please connect to MetaMask.\");\n      }\n    } else {\n      alert(\"Please install a Web3-enabled browser like MetaMask.\");\n    }\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_src_layout_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    pageTitle: \"Event\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      children: \"event\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }, _this), \" \"]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 65,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(EventPage, \"tQZ4qriFHUP0wPWm88fEO5D8fA0=\");\n\n_c = EventPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"EventPage\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ldmVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBS0EsSUFBTU8sU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtFQUFBOztFQUN0QjtFQUNBLGdCQUFnQ0wsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0VBQUEsSUFBT00sUUFBUDtFQUFBLElBQWlCQyxXQUFqQjs7RUFFQSxJQUFNQyxnQkFBZ0I7SUFBQSxzVkFBRztNQUFBO01BQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtjQUFBLE9BRWpCQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCO2dCQUFFQyxNQUFNLEVBQUU7Y0FBVixDQUF4QixDQUZpQjs7WUFBQTtjQUl2QjtjQUNNQyxXQUxpQixHQUtILElBQUlYLGlFQUFKLENBQWtDTyxNQUFNLENBQUNDLFFBQXpDLENBTEc7Y0FNdkJNLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFBNkJKLFdBQTdCLEVBTnVCLENBUXZCOztjQVJ1QjtjQUFBLE9BU0FBLFdBQVcsQ0FBQ0ssWUFBWixFQVRBOztZQUFBO2NBU2pCQyxRQVRpQjtjQVd2QjtjQUNNQyxpQkFaaUIsR0FZRyxJQUFJbEIsbURBQUosQ0FDeEJFLGtGQUR3QixFQUV4QkQsNkVBRndCLEVBR3hCVSxXQUFXLENBQUNTLFNBQVosRUFId0IsQ0FaSDtjQWlCdkJOLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaLEVBQW1DRyxpQkFBbkM7Y0FqQnVCO2NBQUEsT0FtQkFBLGlCQUFpQixDQUFDRyxnQkFBbEIsQ0FBbUNKLFFBQVEsQ0FBQyxDQUFELENBQTNDLENBbkJBOztZQUFBO2NBbUJqQkssUUFuQmlCO2NBb0J2QkMsR0FBRztjQUNIVCxPQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCTyxRQUExQjs7WUFyQnVCO1lBQUE7Y0FBQTtVQUFBO1FBQUE7TUFBQTtJQUFBLENBQUg7O0lBQUEsZ0JBQWhCaEIsZ0JBQWdCO01BQUE7SUFBQTtFQUFBLEdBQXRCLENBSnNCLENBNEJ0QjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUVBO0VBQ0E7RUFDQTs7O0VBRUFULGdEQUFTLENBQUMsWUFBTTtJQUNkO0lBQ0EsSUFBSVUsTUFBTSxDQUFDQyxRQUFYLEVBQXFCO01BQ25CO01BQ0EsSUFBSUQsTUFBTSxDQUFDQyxRQUFQLENBQWdCZ0IsZUFBcEIsRUFBcUM7UUFDbkNsQixnQkFBZ0IsR0FEbUIsQ0FFbkM7TUFDRCxDQUhELE1BR087UUFDTG1CLEtBQUssQ0FBQyw2QkFBRCxDQUFMO01BQ0Q7SUFDRixDQVJELE1BUU87TUFDTEEsS0FBSyxDQUFDLHNEQUFELENBQUw7SUFDRDtFQUNGLENBYlEsRUFhTixFQWJNLENBQVQ7RUFlQSxvQkFDRSw4REFBQywwREFBRDtJQUFRLFNBQVMsRUFBRSxPQUFuQjtJQUFBLHdCQUNFO01BQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFNBREYsRUFDbUIsR0FEbkI7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBREY7QUFLRCxDQTVERDs7R0FBTXRCOztLQUFBQTtBQThETiwrREFBZUEsU0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ldmVudC5qcz83NjU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9zcmMvbGF5b3V0L0xheW91dFwiO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHtcbiAgcmFmZmxlQ29udGFjdEFCSSxcbiAgcmFmZmxlQ29udHJhY3RBZGRyZXNzLFxufSBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvdXRpbHMvY29uc3RhbnRzXCI7XG5cbmNvbnN0IEV2ZW50UGFnZSA9ICgpID0+IHtcbiAgLy8gU3RhdGUgdmFyaWFibGVzIGZvciB1c2VyIHN0YXR1c1xuICBjb25zdCBbaXNSYWZmbGUsIHNldElzUmFmZmxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGluaXRpYWxpemVFdGhlcnMgPSBhc3luYyAoKSA9PiB7XG4gICAgLy8gUmVxdWVzdCBhY2Nlc3MgdG8gdGhlIHVzZXIncyBFdGhlcmV1bSBhY2NvdW50XG4gICAgYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiIH0pO1xuXG4gICAgLy8gQ3JlYXRlIGFuIGV0aGVycyBwcm92aWRlciB1c2luZyB0aGUgd2luZG93LmV0aGVyZXVtIG9iamVjdFxuICAgIGNvbnN0IG5ld1Byb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgY29uc29sZS5sb2coXCJuZXdQcm92aWRlcjogXCIsIG5ld1Byb3ZpZGVyKTtcblxuICAgIC8vIFdhbGxldCBBZGRyZXNzXG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBuZXdQcm92aWRlci5saXN0QWNjb3VudHMoKTtcblxuICAgIC8vIENyZWF0ZSBhbiBldGhlcnMgY29udHJhY3QgaW5zdGFuY2UgdXNpbmcgdGhlIGNvbnRyYWN0IGFkZHJlc3MgYW5kIEFCSVxuICAgIGNvbnN0IG5ld1JhZmZsZUNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChcbiAgICAgIHJhZmZsZUNvbnRyYWN0QWRkcmVzcyxcbiAgICAgIHJhZmZsZUNvbnRhY3RBQkksXG4gICAgICBuZXdQcm92aWRlci5nZXRTaWduZXIoKVxuICAgICk7XG4gICAgY29uc29sZS5sb2coXCJuZXdSYWZmbGVDb250cmFjdDogXCIsIG5ld1JhZmZsZUNvbnRyYWN0KTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbmV3UmFmZmxlQ29udHJhY3QuZ2V0RW50cmFuY2VTdGF0ZShhY2NvdW50c1swXSk7XG4gICAgc2V0XG4gICAgY29uc29sZS5sb2coXCJyZXNwb25zZTogXCIsIHJlc3BvbnNlKTtcbiAgfTtcblxuICAvLyBjb25zdCBpbml0aWFsaXplUmFmZmxlID0gYXN5bmMgKCkgPT4ge1xuICAvLyAgIGNvbnN0IG5ld1JhZmZsZUNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChcbiAgLy8gICAgIHJhZmZsZUNvbnRyYWN0QWRkcmVzcyxcbiAgLy8gICAgIHJhZmZsZUNvbnRhY3RBQkksXG4gIC8vICAgICBwcm92aWRlci5nZXRTaWduZXIoKVxuICAvLyAgICk7XG4gIC8vICAgY29uc29sZS5sb2coXCJuZXdSYWZmbGVDb250cmFjdDogXCIsIG5ld1JhZmZsZUNvbnRyYWN0KTtcblxuICAvLyAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbmV3UmFmZmxlQ29udHJhY3QuZ2V0RW50cmFuY2VTdGF0ZShzaWduZXJBZGRyZXNzKTtcbiAgLy8gICBjb25zb2xlLmxvZyhcInJlc3BvbnNlOiBcIiwgcmVzcG9uc2UpO1xuICAvLyB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gQ2hlY2sgaWYgdGhlIHdpbmRvdy5ldGhlcmV1bSBvYmplY3QgaXMgYXZhaWxhYmxlXG4gICAgaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xuICAgICAgLy8gQ2hlY2sgaWYgdGhlIGNvbm5lY3QgdG8gbWV0YW1hc2tcbiAgICAgIGlmICh3aW5kb3cuZXRoZXJldW0uc2VsZWN0ZWRBZGRyZXNzKSB7XG4gICAgICAgIGluaXRpYWxpemVFdGhlcnMoKTtcbiAgICAgICAgLy8gaW5pdGlhbGl6ZVJhZmZsZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoXCJQbGVhc2UgY29ubmVjdCB0byBNZXRhTWFzay5cIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KFwiUGxlYXNlIGluc3RhbGwgYSBXZWIzLWVuYWJsZWQgYnJvd3NlciBsaWtlIE1ldGFNYXNrLlwiKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgcGFnZVRpdGxlPXtcIkV2ZW50XCJ9PlxuICAgICAgPGRpdj5ldmVudDwvZGl2PntcIiBcIn1cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50UGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGF5b3V0IiwiZXRoZXJzIiwicmFmZmxlQ29udGFjdEFCSSIsInJhZmZsZUNvbnRyYWN0QWRkcmVzcyIsIkV2ZW50UGFnZSIsImlzUmFmZmxlIiwic2V0SXNSYWZmbGUiLCJpbml0aWFsaXplRXRoZXJzIiwid2luZG93IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwibmV3UHJvdmlkZXIiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJjb25zb2xlIiwibG9nIiwibGlzdEFjY291bnRzIiwiYWNjb3VudHMiLCJuZXdSYWZmbGVDb250cmFjdCIsIkNvbnRyYWN0IiwiZ2V0U2lnbmVyIiwiZ2V0RW50cmFuY2VTdGF0ZSIsInJlc3BvbnNlIiwic2V0Iiwic2VsZWN0ZWRBZGRyZXNzIiwiYWxlcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/event.js\n"));

/***/ })

});