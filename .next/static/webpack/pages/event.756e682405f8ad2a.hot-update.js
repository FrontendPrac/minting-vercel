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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/layout/Layout */ \"./src/layout/Layout.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _src_components_utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/utils/constants */ \"./src/components/utils/constants.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/kidongg/Desktop/dream-bridge-react/pages/event.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar EventPage = function EventPage() {\n  _s();\n\n  // State variables for ethers provider and contract\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"),\n      provider = _useState[0],\n      setProvider = _useState[1]; // const [contract, setContract] = useState(\"\");\n  // State variables for user status\n\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"),\n      signerAddress = _useState2[0],\n      setSignerAddress = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"),\n      isRaffle = _useState3[0],\n      setIsRaffle = _useState3[1];\n\n  var initializeEthers = /*#__PURE__*/function () {\n    var _ref = (0,_Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var newProvider, accounts, newRaffleContract, response;\n      return _Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return window.ethereum.request({\n                method: \"eth_requestAccounts\"\n              });\n\n            case 2:\n              // Create an ethers provider using the window.ethereum object\n              newProvider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(window.ethereum);\n              console.log(\"newProvider: \", newProvider);\n              setProvider(newProvider); // Wallet Address\n\n              _context.next = 7;\n              return newProvider.listAccounts();\n\n            case 7:\n              accounts = _context.sent;\n              setSignerAddress(accounts[0]); // Create an ethers contract instance using the contract address and ABI\n\n              newRaffleContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(_src_components_utils_constants__WEBPACK_IMPORTED_MODULE_4__.raffleContractAddress, _src_components_utils_constants__WEBPACK_IMPORTED_MODULE_4__.raffleContactABI, newProvider.getSigner());\n              console.log(\"newRaffleContract: \", newRaffleContract); // setContract(newRaffleContract);\n\n              _context.next = 13;\n              return newRaffleContract.getEntranceState(accounts[0]);\n\n            case 13:\n              response = _context.sent;\n              setIsRaffle(response);\n              console.log(\"response: \", response);\n\n            case 16:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function initializeEthers() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var onClickRaffleSetting = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {\n      var newContract, isApprovedForAll;\n      return _Users_kidongg_Desktop_dream_bridge_react_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              newContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(_src_components_utils_constants__WEBPACK_IMPORTED_MODULE_4__.contractAddress, _src_components_utils_constants__WEBPACK_IMPORTED_MODULE_4__.contractABI, provider.getSigner());\n              _context2.next = 3;\n              return newContract.isApprovedForAll(signerAddress, _src_components_utils_constants__WEBPACK_IMPORTED_MODULE_4__.raffleContractAddress);\n\n            case 3:\n              isApprovedForAll = _context2.sent;\n              console.log(\"isApprovedForAll: \", isApprovedForAll);\n\n              if (isApprovedForAll) {\n                _context2.next = 9;\n                break;\n              }\n\n              _context2.next = 8;\n              return contract.setApprovalForAll(_src_components_utils_constants__WEBPACK_IMPORTED_MODULE_4__.raffleContractAddress, true);\n\n            case 8:\n              console.log(\"isApprovedForAll: \", isApprovedForAll);\n\n            case 9:\n              _context2.next = 11;\n              return contract.setRaffleParams(1691054137, 1690884996, 0, 0, 3, 3, 0, {\n                gasLimit: 500000\n              });\n\n            case 11:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function onClickRaffleSetting() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    // Check if the window.ethereum object is available\n    if (window.ethereum) {\n      // Check if the connect to metamask\n      if (window.ethereum.selectedAddress) {\n        initializeEthers();\n      } else {\n        alert(\"Please connect to MetaMask.\");\n      }\n    } else {\n      alert(\"Please install a Web3-enabled browser like MetaMask.\");\n    }\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_src_layout_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    pageTitle: \"Event\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: \"metaportal_fn_event\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"button\", {\n          onClick: onClickRaffleSetting,\n          children: \"\\uC138\\uD305\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 85,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(EventPage, \"03ifan9/K+f3JwNAHqAEjeuLLv4=\");\n\n_c = EventPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"EventPage\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ldmVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBT0EsSUFBTVMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtFQUFBOztFQUN0QjtFQUNBLGdCQUFnQ1AsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0VBQUEsSUFBT1EsUUFBUDtFQUFBLElBQWlCQyxXQUFqQixnQkFGc0IsQ0FHdEI7RUFFQTs7O0VBQ0EsaUJBQTBDVCwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEQ7RUFBQSxJQUFPVSxhQUFQO0VBQUEsSUFBc0JDLGdCQUF0Qjs7RUFDQSxpQkFBZ0NYLCtDQUFRLENBQUMsRUFBRCxDQUF4QztFQUFBLElBQU9ZLFFBQVA7RUFBQSxJQUFpQkMsV0FBakI7O0VBRUEsSUFBTUMsZ0JBQWdCO0lBQUEsc1ZBQUc7TUFBQTtNQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Y0FBQSxPQUVqQkMsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxPQUFoQixDQUF3QjtnQkFBRUMsTUFBTSxFQUFFO2NBQVYsQ0FBeEIsQ0FGaUI7O1lBQUE7Y0FJdkI7Y0FDTUMsV0FMaUIsR0FLSCxJQUFJakIsaUVBQUosQ0FBa0NhLE1BQU0sQ0FBQ0MsUUFBekMsQ0FMRztjQU12Qk0sT0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQUE2QkosV0FBN0I7Y0FDQVYsV0FBVyxDQUFDVSxXQUFELENBQVgsQ0FQdUIsQ0FTdkI7O2NBVHVCO2NBQUEsT0FVQUEsV0FBVyxDQUFDSyxZQUFaLEVBVkE7O1lBQUE7Y0FVakJDLFFBVmlCO2NBV3ZCZCxnQkFBZ0IsQ0FBQ2MsUUFBUSxDQUFDLENBQUQsQ0FBVCxDQUFoQixDQVh1QixDQWF2Qjs7Y0FDTUMsaUJBZGlCLEdBY0csSUFBSXhCLG1EQUFKLENBQ3hCSSxrRkFEd0IsRUFFeEJELDZFQUZ3QixFQUd4QmMsV0FBVyxDQUFDUyxTQUFaLEVBSHdCLENBZEg7Y0FtQnZCTixPQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBWixFQUFtQ0csaUJBQW5DLEVBbkJ1QixDQW9CdkI7O2NBcEJ1QjtjQUFBLE9Bc0JBQSxpQkFBaUIsQ0FBQ0csZ0JBQWxCLENBQW1DSixRQUFRLENBQUMsQ0FBRCxDQUEzQyxDQXRCQTs7WUFBQTtjQXNCakJLLFFBdEJpQjtjQXVCdkJqQixXQUFXLENBQUNpQixRQUFELENBQVg7Y0FDQVIsT0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQk8sUUFBMUI7O1lBeEJ1QjtZQUFBO2NBQUE7VUFBQTtRQUFBO01BQUE7SUFBQSxDQUFIOztJQUFBLGdCQUFoQmhCLGdCQUFnQjtNQUFBO0lBQUE7RUFBQSxHQUF0Qjs7RUEyQkEsSUFBTWlCLG9CQUFvQjtJQUFBLHVWQUFHO01BQUE7TUFBQTtRQUFBO1VBQUE7WUFBQTtjQUNyQkMsV0FEcUIsR0FDUCxJQUFJOUIsbURBQUosQ0FDbEJFLDRFQURrQixFQUVsQkQsd0VBRmtCLEVBR2xCSyxRQUFRLENBQUNvQixTQUFULEVBSGtCLENBRE87Y0FBQTtjQUFBLE9BT0lJLFdBQVcsQ0FBQ0MsZ0JBQVosQ0FDN0J2QixhQUQ2QixFQUU3Qkosa0ZBRjZCLENBUEo7O1lBQUE7Y0FPckIyQixnQkFQcUI7Y0FZM0JYLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaLEVBQWtDVSxnQkFBbEM7O2NBWjJCLElBYXRCQSxnQkFic0I7Z0JBQUE7Z0JBQUE7Y0FBQTs7Y0FBQTtjQUFBLE9BY25CQyxRQUFRLENBQUNDLGlCQUFULENBQTJCN0Isa0ZBQTNCLEVBQWtELElBQWxELENBZG1COztZQUFBO2NBZXpCZ0IsT0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVosRUFBa0NVLGdCQUFsQzs7WUFmeUI7Y0FBQTtjQUFBLE9Ba0JyQkMsUUFBUSxDQUFDRSxlQUFULENBQXlCLFVBQXpCLEVBQXFDLFVBQXJDLEVBQWlELENBQWpELEVBQW9ELENBQXBELEVBQXVELENBQXZELEVBQTBELENBQTFELEVBQTZELENBQTdELEVBQWdFO2dCQUNwRUMsUUFBUSxFQUFFO2NBRDBELENBQWhFLENBbEJxQjs7WUFBQTtZQUFBO2NBQUE7VUFBQTtRQUFBO01BQUE7SUFBQSxDQUFIOztJQUFBLGdCQUFwQk4sb0JBQW9CO01BQUE7SUFBQTtFQUFBLEdBQTFCOztFQXVCQWhDLGdEQUFTLENBQUMsWUFBTTtJQUNkO0lBQ0EsSUFBSWdCLE1BQU0sQ0FBQ0MsUUFBWCxFQUFxQjtNQUNuQjtNQUNBLElBQUlELE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQnNCLGVBQXBCLEVBQXFDO1FBQ25DeEIsZ0JBQWdCO01BQ2pCLENBRkQsTUFFTztRQUNMeUIsS0FBSyxDQUFDLDZCQUFELENBQUw7TUFDRDtJQUNGLENBUEQsTUFPTztNQUNMQSxLQUFLLENBQUMsc0RBQUQsQ0FBTDtJQUNEO0VBQ0YsQ0FaUSxFQVlOLEVBWk0sQ0FBVDtFQWNBLG9CQUNFLDhEQUFDLDBEQUFEO0lBQVEsU0FBUyxFQUFFLE9BQW5CO0lBQUEsdUJBQ0U7TUFBSyxTQUFTLEVBQUMscUJBQWY7TUFBQSx1QkFDRTtRQUFLLFNBQVMsRUFBQyxXQUFmO1FBQUEsdUJBQ0U7VUFBUSxPQUFPLEVBQUVSLG9CQUFqQjtVQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQURGO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFERjtNQUFBO01BQUE7TUFBQTtJQUFBO0VBREY7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQURGO0FBU0QsQ0FsRkQ7O0dBQU14Qjs7S0FBQUE7QUFvRk4sK0RBQWVBLFNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnQuanM/NzY1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vc3JjL2xheW91dC9MYXlvdXRcIjtcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7XG4gIGNvbnRyYWN0QUJJLFxuICBjb250cmFjdEFkZHJlc3MsXG4gIHJhZmZsZUNvbnRhY3RBQkksXG4gIHJhZmZsZUNvbnRyYWN0QWRkcmVzcyxcbn0gZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL3V0aWxzL2NvbnN0YW50c1wiO1xuXG5jb25zdCBFdmVudFBhZ2UgPSAoKSA9PiB7XG4gIC8vIFN0YXRlIHZhcmlhYmxlcyBmb3IgZXRoZXJzIHByb3ZpZGVyIGFuZCBjb250cmFjdFxuICBjb25zdCBbcHJvdmlkZXIsIHNldFByb3ZpZGVyXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAvLyBjb25zdCBbY29udHJhY3QsIHNldENvbnRyYWN0XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIC8vIFN0YXRlIHZhcmlhYmxlcyBmb3IgdXNlciBzdGF0dXNcbiAgY29uc3QgW3NpZ25lckFkZHJlc3MsIHNldFNpZ25lckFkZHJlc3NdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpc1JhZmZsZSwgc2V0SXNSYWZmbGVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgaW5pdGlhbGl6ZUV0aGVycyA9IGFzeW5jICgpID0+IHtcbiAgICAvLyBSZXF1ZXN0IGFjY2VzcyB0byB0aGUgdXNlcidzIEV0aGVyZXVtIGFjY291bnRcbiAgICBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIgfSk7XG5cbiAgICAvLyBDcmVhdGUgYW4gZXRoZXJzIHByb3ZpZGVyIHVzaW5nIHRoZSB3aW5kb3cuZXRoZXJldW0gb2JqZWN0XG4gICAgY29uc3QgbmV3UHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcbiAgICBjb25zb2xlLmxvZyhcIm5ld1Byb3ZpZGVyOiBcIiwgbmV3UHJvdmlkZXIpO1xuICAgIHNldFByb3ZpZGVyKG5ld1Byb3ZpZGVyKTtcblxuICAgIC8vIFdhbGxldCBBZGRyZXNzXG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBuZXdQcm92aWRlci5saXN0QWNjb3VudHMoKTtcbiAgICBzZXRTaWduZXJBZGRyZXNzKGFjY291bnRzWzBdKTtcblxuICAgIC8vIENyZWF0ZSBhbiBldGhlcnMgY29udHJhY3QgaW5zdGFuY2UgdXNpbmcgdGhlIGNvbnRyYWN0IGFkZHJlc3MgYW5kIEFCSVxuICAgIGNvbnN0IG5ld1JhZmZsZUNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChcbiAgICAgIHJhZmZsZUNvbnRyYWN0QWRkcmVzcyxcbiAgICAgIHJhZmZsZUNvbnRhY3RBQkksXG4gICAgICBuZXdQcm92aWRlci5nZXRTaWduZXIoKVxuICAgICk7XG4gICAgY29uc29sZS5sb2coXCJuZXdSYWZmbGVDb250cmFjdDogXCIsIG5ld1JhZmZsZUNvbnRyYWN0KTtcbiAgICAvLyBzZXRDb250cmFjdChuZXdSYWZmbGVDb250cmFjdCk7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG5ld1JhZmZsZUNvbnRyYWN0LmdldEVudHJhbmNlU3RhdGUoYWNjb3VudHNbMF0pO1xuICAgIHNldElzUmFmZmxlKHJlc3BvbnNlKTtcbiAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlOiBcIiwgcmVzcG9uc2UpO1xuICB9O1xuXG4gIGNvbnN0IG9uQ2xpY2tSYWZmbGVTZXR0aW5nID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IG5ld0NvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChcbiAgICAgIGNvbnRyYWN0QWRkcmVzcyxcbiAgICAgIGNvbnRyYWN0QUJJLFxuICAgICAgcHJvdmlkZXIuZ2V0U2lnbmVyKClcbiAgICApO1xuXG4gICAgY29uc3QgaXNBcHByb3ZlZEZvckFsbCA9IGF3YWl0IG5ld0NvbnRyYWN0LmlzQXBwcm92ZWRGb3JBbGwoXG4gICAgICBzaWduZXJBZGRyZXNzLFxuICAgICAgcmFmZmxlQ29udHJhY3RBZGRyZXNzXG4gICAgKTtcblxuICAgIGNvbnNvbGUubG9nKFwiaXNBcHByb3ZlZEZvckFsbDogXCIsIGlzQXBwcm92ZWRGb3JBbGwpO1xuICAgIGlmICghaXNBcHByb3ZlZEZvckFsbCkge1xuICAgICAgYXdhaXQgY29udHJhY3Quc2V0QXBwcm92YWxGb3JBbGwocmFmZmxlQ29udHJhY3RBZGRyZXNzLCB0cnVlKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiaXNBcHByb3ZlZEZvckFsbDogXCIsIGlzQXBwcm92ZWRGb3JBbGwpO1xuICAgIH1cblxuICAgIGF3YWl0IGNvbnRyYWN0LnNldFJhZmZsZVBhcmFtcygxNjkxMDU0MTM3LCAxNjkwODg0OTk2LCAwLCAwLCAzLCAzLCAwLCB7XG4gICAgICBnYXNMaW1pdDogNTAwMDAwLFxuICAgIH0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gQ2hlY2sgaWYgdGhlIHdpbmRvdy5ldGhlcmV1bSBvYmplY3QgaXMgYXZhaWxhYmxlXG4gICAgaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xuICAgICAgLy8gQ2hlY2sgaWYgdGhlIGNvbm5lY3QgdG8gbWV0YW1hc2tcbiAgICAgIGlmICh3aW5kb3cuZXRoZXJldW0uc2VsZWN0ZWRBZGRyZXNzKSB7XG4gICAgICAgIGluaXRpYWxpemVFdGhlcnMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIGNvbm5lY3QgdG8gTWV0YU1hc2suXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydChcIlBsZWFzZSBpbnN0YWxsIGEgV2ViMy1lbmFibGVkIGJyb3dzZXIgbGlrZSBNZXRhTWFzay5cIik7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHBhZ2VUaXRsZT17XCJFdmVudFwifT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWV0YXBvcnRhbF9mbl9ldmVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25DbGlja1JhZmZsZVNldHRpbmd9PuyEuO2MhTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMYXlvdXQiLCJldGhlcnMiLCJjb250cmFjdEFCSSIsImNvbnRyYWN0QWRkcmVzcyIsInJhZmZsZUNvbnRhY3RBQkkiLCJyYWZmbGVDb250cmFjdEFkZHJlc3MiLCJFdmVudFBhZ2UiLCJwcm92aWRlciIsInNldFByb3ZpZGVyIiwic2lnbmVyQWRkcmVzcyIsInNldFNpZ25lckFkZHJlc3MiLCJpc1JhZmZsZSIsInNldElzUmFmZmxlIiwiaW5pdGlhbGl6ZUV0aGVycyIsIndpbmRvdyIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsIm5ld1Byb3ZpZGVyIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwiY29uc29sZSIsImxvZyIsImxpc3RBY2NvdW50cyIsImFjY291bnRzIiwibmV3UmFmZmxlQ29udHJhY3QiLCJDb250cmFjdCIsImdldFNpZ25lciIsImdldEVudHJhbmNlU3RhdGUiLCJyZXNwb25zZSIsIm9uQ2xpY2tSYWZmbGVTZXR0aW5nIiwibmV3Q29udHJhY3QiLCJpc0FwcHJvdmVkRm9yQWxsIiwiY29udHJhY3QiLCJzZXRBcHByb3ZhbEZvckFsbCIsInNldFJhZmZsZVBhcmFtcyIsImdhc0xpbWl0Iiwic2VsZWN0ZWRBZGRyZXNzIiwiYWxlcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/event.js\n"));

/***/ })

});