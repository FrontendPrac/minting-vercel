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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/layout/Layout */ \"./src/layout/Layout.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _src_components_utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/utils/constants */ \"./src/components/utils/constants.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/kidongg/Desktop/dream-bridge-react/pages/event.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar EventPage = function EventPage() {\n  _s();\n\n  // State variables for user status\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"),\n      contract = _useState[0],\n      setContract = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"),\n      isRaffle = _useState2[0],\n      setIsRaffle = _useState2[1];\n\n  var initializeEthers = /*#__PURE__*/function () {\n    var _ref = (0,_Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var newProvider, accounts, newRaffleContract, response;\n      return _Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return window.ethereum.request({\n                method: \"eth_requestAccounts\"\n              });\n\n            case 2:\n              // Create an ethers provider using the window.ethereum object\n              newProvider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(window.ethereum);\n              console.log(\"newProvider: \", newProvider); // Wallet Address\n\n              _context.next = 6;\n              return newProvider.listAccounts();\n\n            case 6:\n              accounts = _context.sent;\n              // Create an ethers contract instance using the contract address and ABI\n              newRaffleContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(_src_components_utils_constants__WEBPACK_IMPORTED_MODULE_4__.raffleContractAddress, _src_components_utils_constants__WEBPACK_IMPORTED_MODULE_4__.raffleContactABI, newProvider.getSigner());\n              console.log(\"newRaffleContract: \", newRaffleContract);\n              setContract(newRaffleContract);\n              _context.next = 12;\n              return newRaffleContract.getEntranceState(accounts[0]);\n\n            case 12:\n              response = _context.sent;\n              setIsRaffle(response);\n              console.log(\"response: \", response);\n\n            case 15:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function initializeEthers() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var onClickRaffleSetting = function onClickRaffleSetting() {\n    contract.setRaffleParams();\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    // Check if the window.ethereum object is available\n    if (window.ethereum) {\n      // Check if the connect to metamask\n      if (window.ethereum.selectedAddress) {\n        initializeEthers();\n      } else {\n        alert(\"Please connect to MetaMask.\");\n      }\n    } else {\n      alert(\"Please install a Web3-enabled browser like MetaMask.\");\n    }\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_src_layout_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    pageTitle: \"Event\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: \"metaportal_event\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"button\", {\n        children: \"\\uC138\\uD305\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, _this), \" \"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 58,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(EventPage, \"SzDCc97ij0R1N2abwJVSTxLzpcc=\");\n\n_c = EventPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"EventPage\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ldmVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBS0EsSUFBTU8sU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtFQUFBOztFQUN0QjtFQUNBLGdCQUFnQ0wsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0VBQUEsSUFBT00sUUFBUDtFQUFBLElBQWlCQyxXQUFqQjs7RUFDQSxpQkFBZ0NQLCtDQUFRLENBQUMsRUFBRCxDQUF4QztFQUFBLElBQU9RLFFBQVA7RUFBQSxJQUFpQkMsV0FBakI7O0VBRUEsSUFBTUMsZ0JBQWdCO0lBQUEsc1ZBQUc7TUFBQTtNQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Y0FBQSxPQUVqQkMsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxPQUFoQixDQUF3QjtnQkFBRUMsTUFBTSxFQUFFO2NBQVYsQ0FBeEIsQ0FGaUI7O1lBQUE7Y0FJdkI7Y0FDTUMsV0FMaUIsR0FLSCxJQUFJYixpRUFBSixDQUFrQ1MsTUFBTSxDQUFDQyxRQUF6QyxDQUxHO2NBTXZCTSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCSixXQUE3QixFQU51QixDQVF2Qjs7Y0FSdUI7Y0FBQSxPQVNBQSxXQUFXLENBQUNLLFlBQVosRUFUQTs7WUFBQTtjQVNqQkMsUUFUaUI7Y0FXdkI7Y0FDTUMsaUJBWmlCLEdBWUcsSUFBSXBCLG1EQUFKLENBQ3hCRSxrRkFEd0IsRUFFeEJELDZFQUZ3QixFQUd4QlksV0FBVyxDQUFDUyxTQUFaLEVBSHdCLENBWkg7Y0FpQnZCTixPQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBWixFQUFtQ0csaUJBQW5DO2NBQ0FmLFdBQVcsQ0FBQ2UsaUJBQUQsQ0FBWDtjQWxCdUI7Y0FBQSxPQW9CQUEsaUJBQWlCLENBQUNHLGdCQUFsQixDQUFtQ0osUUFBUSxDQUFDLENBQUQsQ0FBM0MsQ0FwQkE7O1lBQUE7Y0FvQmpCSyxRQXBCaUI7Y0FxQnZCakIsV0FBVyxDQUFDaUIsUUFBRCxDQUFYO2NBQ0FSLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEJPLFFBQTFCOztZQXRCdUI7WUFBQTtjQUFBO1VBQUE7UUFBQTtNQUFBO0lBQUEsQ0FBSDs7SUFBQSxnQkFBaEJoQixnQkFBZ0I7TUFBQTtJQUFBO0VBQUEsR0FBdEI7O0VBeUJBLElBQU1pQixvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLEdBQU07SUFDakNyQixRQUFRLENBQUNzQixlQUFUO0VBQ0QsQ0FGRDs7RUFJQTdCLGdEQUFTLENBQUMsWUFBTTtJQUNkO0lBQ0EsSUFBSVksTUFBTSxDQUFDQyxRQUFYLEVBQXFCO01BQ25CO01BQ0EsSUFBSUQsTUFBTSxDQUFDQyxRQUFQLENBQWdCaUIsZUFBcEIsRUFBcUM7UUFDbkNuQixnQkFBZ0I7TUFDakIsQ0FGRCxNQUVPO1FBQ0xvQixLQUFLLENBQUMsNkJBQUQsQ0FBTDtNQUNEO0lBQ0YsQ0FQRCxNQU9PO01BQ0xBLEtBQUssQ0FBQyxzREFBRCxDQUFMO0lBQ0Q7RUFDRixDQVpRLEVBWU4sRUFaTSxDQUFUO0VBY0Esb0JBQ0UsOERBQUMsMERBQUQ7SUFBUSxTQUFTLEVBQUUsT0FBbkI7SUFBQSx1QkFDRTtNQUFLLFNBQVMsRUFBQyxrQkFBZjtNQUFBLHdCQUNFO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBREYsRUFDc0IsR0FEdEI7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBREY7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQURGO0FBT0QsQ0F2REQ7O0dBQU16Qjs7S0FBQUE7QUF5RE4sK0RBQWVBLFNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnQuanM/NzY1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vc3JjL2xheW91dC9MYXlvdXRcIjtcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7XG4gIHJhZmZsZUNvbnRhY3RBQkksXG4gIHJhZmZsZUNvbnRyYWN0QWRkcmVzcyxcbn0gZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL3V0aWxzL2NvbnN0YW50c1wiO1xuXG5jb25zdCBFdmVudFBhZ2UgPSAoKSA9PiB7XG4gIC8vIFN0YXRlIHZhcmlhYmxlcyBmb3IgdXNlciBzdGF0dXNcbiAgY29uc3QgW2NvbnRyYWN0LCBzZXRDb250cmFjdF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2lzUmFmZmxlLCBzZXRJc1JhZmZsZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBpbml0aWFsaXplRXRoZXJzID0gYXN5bmMgKCkgPT4ge1xuICAgIC8vIFJlcXVlc3QgYWNjZXNzIHRvIHRoZSB1c2VyJ3MgRXRoZXJldW0gYWNjb3VudFxuICAgIGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIiB9KTtcblxuICAgIC8vIENyZWF0ZSBhbiBldGhlcnMgcHJvdmlkZXIgdXNpbmcgdGhlIHdpbmRvdy5ldGhlcmV1bSBvYmplY3RcbiAgICBjb25zdCBuZXdQcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pO1xuICAgIGNvbnNvbGUubG9nKFwibmV3UHJvdmlkZXI6IFwiLCBuZXdQcm92aWRlcik7XG5cbiAgICAvLyBXYWxsZXQgQWRkcmVzc1xuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgbmV3UHJvdmlkZXIubGlzdEFjY291bnRzKCk7XG5cbiAgICAvLyBDcmVhdGUgYW4gZXRoZXJzIGNvbnRyYWN0IGluc3RhbmNlIHVzaW5nIHRoZSBjb250cmFjdCBhZGRyZXNzIGFuZCBBQklcbiAgICBjb25zdCBuZXdSYWZmbGVDb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoXG4gICAgICByYWZmbGVDb250cmFjdEFkZHJlc3MsXG4gICAgICByYWZmbGVDb250YWN0QUJJLFxuICAgICAgbmV3UHJvdmlkZXIuZ2V0U2lnbmVyKClcbiAgICApO1xuICAgIGNvbnNvbGUubG9nKFwibmV3UmFmZmxlQ29udHJhY3Q6IFwiLCBuZXdSYWZmbGVDb250cmFjdCk7XG4gICAgc2V0Q29udHJhY3QobmV3UmFmZmxlQ29udHJhY3QpO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBuZXdSYWZmbGVDb250cmFjdC5nZXRFbnRyYW5jZVN0YXRlKGFjY291bnRzWzBdKTtcbiAgICBzZXRJc1JhZmZsZShyZXNwb25zZSk7XG4gICAgY29uc29sZS5sb2coXCJyZXNwb25zZTogXCIsIHJlc3BvbnNlKTtcbiAgfTtcblxuICBjb25zdCBvbkNsaWNrUmFmZmxlU2V0dGluZyA9ICgpID0+IHtcbiAgICBjb250cmFjdC5zZXRSYWZmbGVQYXJhbXMoKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIENoZWNrIGlmIHRoZSB3aW5kb3cuZXRoZXJldW0gb2JqZWN0IGlzIGF2YWlsYWJsZVxuICAgIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcbiAgICAgIC8vIENoZWNrIGlmIHRoZSBjb25uZWN0IHRvIG1ldGFtYXNrXG4gICAgICBpZiAod2luZG93LmV0aGVyZXVtLnNlbGVjdGVkQWRkcmVzcykge1xuICAgICAgICBpbml0aWFsaXplRXRoZXJzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChcIlBsZWFzZSBjb25uZWN0IHRvIE1ldGFNYXNrLlwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQoXCJQbGVhc2UgaW5zdGFsbCBhIFdlYjMtZW5hYmxlZCBicm93c2VyIGxpa2UgTWV0YU1hc2suXCIpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBwYWdlVGl0bGU9e1wiRXZlbnRcIn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGFwb3J0YWxfZXZlbnRcIj5cbiAgICAgICAgPGJ1dHRvbj7shLjtjIU8L2J1dHRvbj57XCIgXCJ9XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50UGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGF5b3V0IiwiZXRoZXJzIiwicmFmZmxlQ29udGFjdEFCSSIsInJhZmZsZUNvbnRyYWN0QWRkcmVzcyIsIkV2ZW50UGFnZSIsImNvbnRyYWN0Iiwic2V0Q29udHJhY3QiLCJpc1JhZmZsZSIsInNldElzUmFmZmxlIiwiaW5pdGlhbGl6ZUV0aGVycyIsIndpbmRvdyIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsIm5ld1Byb3ZpZGVyIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwiY29uc29sZSIsImxvZyIsImxpc3RBY2NvdW50cyIsImFjY291bnRzIiwibmV3UmFmZmxlQ29udHJhY3QiLCJDb250cmFjdCIsImdldFNpZ25lciIsImdldEVudHJhbmNlU3RhdGUiLCJyZXNwb25zZSIsIm9uQ2xpY2tSYWZmbGVTZXR0aW5nIiwic2V0UmFmZmxlUGFyYW1zIiwic2VsZWN0ZWRBZGRyZXNzIiwiYWxlcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/event.js\n"));

/***/ })

});