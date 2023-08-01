"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/coming-soon",{

/***/ "./pages/coming-soon.js":
/*!******************************!*\
  !*** ./pages/coming-soon.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/layout/Layout */ \"./src/layout/Layout.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _src_components_utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/utils/constants */ \"./src/components/utils/constants.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar ComingSoon = function() {\n    _s();\n    // Get Kor remaining time\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), korDiffTime = ref[0], setKorDiffTime = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), korDays = ref1[0], setKorDays = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), korHours = ref2[0], setKorHours = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), korMinutes = ref3[0], setKorMinutes = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), korSeconds = ref4[0], setKorSeconds = ref4[1];\n    // Get UTC remaining time\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), utcDiffTime = ref5[0], setUTCDiffTime = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), utcDays = ref6[0], setUTCDays = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), utcHours = ref7[0], setUTCHours = ref7[1];\n    var ref8 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), utcMinutes = ref8[0], setUTCMinutes = ref8[1];\n    var ref9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), utcSeconds = ref9[0], setUTCSeconds = ref9[1];\n    // State variables for ethers provider and contract\n    var ref10 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), provider = ref10[0], setProvider = ref10[1];\n    var ref11 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), contract = ref11[0], setContract = ref11[1];\n    // State variables for user status\n    var ref12 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), publicActive = ref12[0], setPublicActive = ref12[1];\n    var initializeEthers = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n            var newProvider, contractAbi, newContract, transferEventFilter;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        // Request access to the user's Ethereum account\n                        return [\n                            4,\n                            window.ethereum.request({\n                                method: \"eth_requestAccounts\"\n                            })\n                        ];\n                    case 1:\n                        _state.sent();\n                        newProvider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(window.ethereum);\n                        console.log(\"newProvider: \", newProvider);\n                        setProvider(newProvider);\n                        contractAbi = _src_components_utils_constants__WEBPACK_IMPORTED_MODULE_3__.contractABI;\n                        newContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(_src_components_utils_constants__WEBPACK_IMPORTED_MODULE_3__.contractAddress, contractAbi, newProvider);\n                        console.log(\"newContract: \", newContract);\n                        setContract(newContract);\n                        transferEventFilter = newContract.filters.Transfer();\n                        return [\n                            2\n                        ];\n                }\n            });\n        // // Function to load the public_Price value from the contract\n        // try {\n        //   // Call the public_Price function in the smart contract to get the value\n        //   const publicActive = await newContract.getPublicActive();\n        //   console.log(\"publicActive: \", parseInt(publicActive));\n        //   setPublicActive(parseInt(publicActive));\n        // } catch (error) {\n        //   console.error(\"Error loading public_Price:\", error);\n        //   alert(\n        //     \"Error loading public_Price. Please check the console for details.\"\n        //   );\n        // }\n        });\n        return function initializeEthers() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var showKorCountdown = function() {\n        var intervalId = setInterval(function() {\n            var korCurrentTime = new Date();\n            var korTargetTime = new Date(\"2023/09/07 19:00:00\"); // KST 입력\n            var korDiffTime = korTargetTime - korCurrentTime;\n            if (korDiffTime <= 0) {\n                setKorDiffTime(0);\n                clearInterval(intervalId);\n                console.log(\"한국 타이머 종료\");\n            } else {\n                var days = Math.floor(korDiffTime / (1000 * 60 * 60 * 24));\n                var hours = Math.floor(korDiffTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));\n                var minutes = Math.floor(korDiffTime % (1000 * 60 * 60) / (1000 * 60));\n                var seconds = Math.floor(korDiffTime % (1000 * 60) / 1000);\n                setKorDays(days);\n                setKorHours(hours);\n                setKorMinutes(minutes);\n                setKorSeconds(seconds);\n                setKorDiffTime(korDiffTime);\n            }\n        }, 1000);\n    };\n    var showUTCCountDown = function() {\n        var intervalId = setInterval(function() {\n            var korCurrentTime = new Date();\n            var utcCurrentTime = new Date(korCurrentTime.getTime() + korCurrentTime.getTimezoneOffset() * 60 * 1000);\n            var korTargetTime = new Date(\"2023/09/07 10:00:00\"); // UTC 입력\n            var utcTargetTime = new Date(korTargetTime.getTime() + korTargetTime.getTimezoneOffset() * 60 * 1000);\n            var utcDiffTime = utcTargetTime - utcCurrentTime;\n            if (utcDiffTime <= 0) {\n                setUTCDiffTime(0);\n                clearInterval(intervalId);\n                console.log(\"미국 타이머 종료\");\n            } else {\n                var days = Math.floor(utcDiffTime / (1000 * 60 * 60 * 24));\n                var hours = Math.floor(utcDiffTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));\n                var minutes = Math.floor(utcDiffTime % (1000 * 60 * 60) / (1000 * 60));\n                var seconds = Math.floor(utcDiffTime % (1000 * 60) / 1000);\n                setUTCDays(days);\n                setUTCHours(hours);\n                setUTCMinutes(minutes);\n                setUTCSeconds(seconds);\n                setUTCDiffTime(utcDiffTime);\n            }\n        }, 1000);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        showKorCountdown();\n        showUTCCountDown();\n        // Check if the window.ethereum object is available\n        if (window.ethereum) {\n            // Check if the connect to metamask\n            if (window.ethereum.selectedAddress) {\n                initializeEthers();\n            } else {\n                alert(\"Please connect to MetaMask.\");\n            }\n        } else {\n            alert(\"Please install a Web3-enabled browser like MetaMask.\");\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_layout_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        pageTitle: \"Coming Soon\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"metaportal_fn_coming_soon\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"soon_countdown\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"metaportal_fn_countdown boxed\",\n                                \"data-type\": \"ever\",\n                                \"data-date\": \"October 13, 2022 12:30:00\",\n                                \"data-days\": 34,\n                                \"data-hours\": 9,\n                                \"data-minutes\": 20,\n                                \"data-seconds\": 10,\n                                children: [\n                                    korDiffTime <= 0 ? \"한국 타이머 종료\" : \"KST : \".concat(korDays, \"d: \").concat(korHours, \"h: \").concat(korMinutes, \"m: \").concat(korSeconds, \"s\"),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                                        lineNumber: 186,\n                                        columnNumber: 15\n                                    }, _this),\n                                    utcDiffTime <= 0 ? \"미국 타이머 종료\" : \"UTC : \".concat(utcDays, \"d: \").concat(utcHours, \"h: \").concat(utcMinutes, \"m: \").concat(utcSeconds, \"s\")\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                                lineNumber: 174,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                            lineNumber: 157,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"soon_title\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"fn__maintitle\",\n                                    \"data-text\": \"Public Minting is Coming Soon\",\n                                    \"data-align\": \"center\",\n                                    children: \"Public Minting is Coming Soon\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                                    lineNumber: 193,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Our website is coming soon. We are currently working on our website. Please check again within couple days.\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                                    lineNumber: 200,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                            lineNumber: 192,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                    lineNumber: 156,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                lineNumber: 155,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                children: \"스테이킹\"\n            }, void 0, false, {\n                fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                lineNumber: 207,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                lineNumber: 208,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                children: \"언스테이킹\"\n            }, void 0, false, {\n                fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                lineNumber: 209,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n        lineNumber: 154,\n        columnNumber: 5\n    }, _this);\n};\n_s(ComingSoon, \"+mxUdfXgVOa5QmJEBOEZtYpwxoM=\");\n_c = ComingSoon;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ComingSoon);\nvar _c;\n$RefreshReg$(_c, \"ComingSoon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXLElBQUksQ0FBQyxHQUNiLFdBQVcsR0FDWCxRQUFPLENBQWVJLE1BQVEsQ0FBckJGLE9BQU8sRUFBQyxLQUFHLENBQVcsQ0FBS0ksTUFBVSxDQUF4QkYsUUFBUSxFQUFDLEtBQUcsQ0FBYSxDQUFLSSxNQUFVLENBQTFCRixVQUFVLEVBQUMsS0FBRyxDQUFhLE9BQUMsQ0FBWkUsVUFBVSxFQUFDLEdBQUMsQ0FBQzs7Ozs7O3FDQUNsRTs7Ozs7aUNBQ0Q7c0NBQ04sOERBQUM2QyxLQUFHOzRCQUFDQyxTQUFTLEVBQUMsWUFBWTs7OENBQ3pCLDhEQUFDQyxJQUFFO29DQUNERCxTQUFTLEVBQUMsZUFBZTtvQ0FDekJTLFdBQVMsRUFBQywrQkFBK0I7b0NBQ3pDQyxZQUFVLEVBQUMsUUFBUTs4Q0FDcEIsK0JBRUQ7Ozs7O3lDQUFLOzhDQUNMLDhEQUFDQyxHQUFDOzhDQUFDLDZHQUdIOzs7Ozt5Q0FBSTs7Ozs7O2lDQUNBOzs7Ozs7eUJBQ0Y7Ozs7O3FCQUNGOzBCQUNOLDhEQUFDQyxRQUFNOzBCQUFDLE1BQUk7Ozs7O3FCQUFTOzBCQUNyQiw4REFBQ0osSUFBRTs7OztxQkFBRzswQkFDTiw4REFBQ0ksUUFBTTswQkFBQyxPQUFLOzs7OztxQkFBUzs7Ozs7O2FBQ2YsQ0FDVDtBQUNKLENBQUM7R0E1TUs3RSxVQUFVO0FBQVZBLEtBQUFBLFVBQVU7QUE2TWhCLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29taW5nLXNvb24uanM/ZjY0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9zcmMvbGF5b3V0L0xheW91dFwiO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHtcbiAgY29udHJhY3RBQkksXG4gIGNvbnRyYWN0QWRkcmVzcyxcbn0gZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL3V0aWxzL2NvbnN0YW50c1wiO1xuY29uc3QgQ29taW5nU29vbiA9ICgpID0+IHtcbiAgLy8gR2V0IEtvciByZW1haW5pbmcgdGltZVxuICBjb25zdCBba29yRGlmZlRpbWUsIHNldEtvckRpZmZUaW1lXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtrb3JEYXlzLCBzZXRLb3JEYXlzXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtrb3JIb3Vycywgc2V0S29ySG91cnNdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2tvck1pbnV0ZXMsIHNldEtvck1pbnV0ZXNdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2tvclNlY29uZHMsIHNldEtvclNlY29uZHNdID0gdXNlU3RhdGUoKTtcblxuICAvLyBHZXQgVVRDIHJlbWFpbmluZyB0aW1lXG4gIGNvbnN0IFt1dGNEaWZmVGltZSwgc2V0VVRDRGlmZlRpbWVdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3V0Y0RheXMsIHNldFVUQ0RheXNdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3V0Y0hvdXJzLCBzZXRVVENIb3Vyc10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbdXRjTWludXRlcywgc2V0VVRDTWludXRlc10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbdXRjU2Vjb25kcywgc2V0VVRDU2Vjb25kc10gPSB1c2VTdGF0ZSgpO1xuXG4gIC8vIFN0YXRlIHZhcmlhYmxlcyBmb3IgZXRoZXJzIHByb3ZpZGVyIGFuZCBjb250cmFjdFxuICBjb25zdCBbcHJvdmlkZXIsIHNldFByb3ZpZGVyXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbY29udHJhY3QsIHNldENvbnRyYWN0XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIC8vIFN0YXRlIHZhcmlhYmxlcyBmb3IgdXNlciBzdGF0dXNcbiAgY29uc3QgW3B1YmxpY0FjdGl2ZSwgc2V0UHVibGljQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBpbml0aWFsaXplRXRoZXJzID0gYXN5bmMgKCkgPT4ge1xuICAgIC8vIFJlcXVlc3QgYWNjZXNzIHRvIHRoZSB1c2VyJ3MgRXRoZXJldW0gYWNjb3VudFxuICAgIGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIiB9KTtcblxuICAgIC8vIENyZWF0ZSBhbiBldGhlcnMgcHJvdmlkZXIgdXNpbmcgdGhlIHdpbmRvdy5ldGhlcmV1bSBvYmplY3RcbiAgICBjb25zdCBuZXdQcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pO1xuICAgIGNvbnNvbGUubG9nKFwibmV3UHJvdmlkZXI6IFwiLCBuZXdQcm92aWRlcik7XG4gICAgc2V0UHJvdmlkZXIobmV3UHJvdmlkZXIpO1xuXG4gICAgLy8gQ3JlYXRlIGFuIGV0aGVycyBjb250cmFjdCBpbnN0YW5jZSB1c2luZyB0aGUgY29udHJhY3QgYWRkcmVzcyBhbmQgQUJJXG4gICAgY29uc3QgY29udHJhY3RBYmkgPSBjb250cmFjdEFCSTtcblxuICAgIGNvbnN0IG5ld0NvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChcbiAgICAgIGNvbnRyYWN0QWRkcmVzcyxcbiAgICAgIGNvbnRyYWN0QWJpLFxuICAgICAgbmV3UHJvdmlkZXJcbiAgICAgIC8vIG5ld1Byb3ZpZGVyLmdldFNpZ25lcigpIC8vIFVzZSB0aGUgc2lnbmVyIHRvIHNlbmQgdHJhbnNhY3Rpb25zXG4gICAgKTtcbiAgICBjb25zb2xlLmxvZyhcIm5ld0NvbnRyYWN0OiBcIiwgbmV3Q29udHJhY3QpO1xuICAgIHNldENvbnRyYWN0KG5ld0NvbnRyYWN0KTtcblxuICAgIGNvbnN0IHRyYW5zZmVyRXZlbnRGaWx0ZXIgPSBuZXdDb250cmFjdC5maWx0ZXJzLlRyYW5zZmVyKCk7XG5cbiAgICAvLyAvLyBGdW5jdGlvbiB0byBsb2FkIHRoZSBwdWJsaWNfUHJpY2UgdmFsdWUgZnJvbSB0aGUgY29udHJhY3RcbiAgICAvLyB0cnkge1xuICAgIC8vICAgLy8gQ2FsbCB0aGUgcHVibGljX1ByaWNlIGZ1bmN0aW9uIGluIHRoZSBzbWFydCBjb250cmFjdCB0byBnZXQgdGhlIHZhbHVlXG4gICAgLy8gICBjb25zdCBwdWJsaWNBY3RpdmUgPSBhd2FpdCBuZXdDb250cmFjdC5nZXRQdWJsaWNBY3RpdmUoKTtcbiAgICAvLyAgIGNvbnNvbGUubG9nKFwicHVibGljQWN0aXZlOiBcIiwgcGFyc2VJbnQocHVibGljQWN0aXZlKSk7XG4gICAgLy8gICBzZXRQdWJsaWNBY3RpdmUocGFyc2VJbnQocHVibGljQWN0aXZlKSk7XG4gICAgLy8gfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBsb2FkaW5nIHB1YmxpY19QcmljZTpcIiwgZXJyb3IpO1xuICAgIC8vICAgYWxlcnQoXG4gICAgLy8gICAgIFwiRXJyb3IgbG9hZGluZyBwdWJsaWNfUHJpY2UuIFBsZWFzZSBjaGVjayB0aGUgY29uc29sZSBmb3IgZGV0YWlscy5cIlxuICAgIC8vICAgKTtcbiAgICAvLyB9XG4gIH07XG5cbiAgY29uc3Qgc2hvd0tvckNvdW50ZG93biA9ICgpID0+IHtcbiAgICBjb25zdCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgY29uc3Qga29yQ3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICBjb25zdCBrb3JUYXJnZXRUaW1lID0gbmV3IERhdGUoXCIyMDIzLzA5LzA3IDE5OjAwOjAwXCIpOyAvLyBLU1Qg7J6F66ClXG5cbiAgICAgIGNvbnN0IGtvckRpZmZUaW1lID0ga29yVGFyZ2V0VGltZSAtIGtvckN1cnJlbnRUaW1lO1xuXG4gICAgICBpZiAoa29yRGlmZlRpbWUgPD0gMCkge1xuICAgICAgICBzZXRLb3JEaWZmVGltZSgwKTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgICAgICAgY29uc29sZS5sb2coXCLtlZzqta0g7YOA7J2066i4IOyiheujjFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGRheXMgPSBNYXRoLmZsb29yKGtvckRpZmZUaW1lIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKFxuICAgICAgICAgIChrb3JEaWZmVGltZSAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKFxuICAgICAgICAgIChrb3JEaWZmVGltZSAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MClcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKGtvckRpZmZUaW1lICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XG5cbiAgICAgICAgc2V0S29yRGF5cyhkYXlzKTtcbiAgICAgICAgc2V0S29ySG91cnMoaG91cnMpO1xuICAgICAgICBzZXRLb3JNaW51dGVzKG1pbnV0ZXMpO1xuICAgICAgICBzZXRLb3JTZWNvbmRzKHNlY29uZHMpO1xuICAgICAgICBzZXRLb3JEaWZmVGltZShrb3JEaWZmVGltZSk7XG4gICAgICB9XG4gICAgfSwgMTAwMCk7XG4gIH07XG5cbiAgY29uc3Qgc2hvd1VUQ0NvdW50RG93biA9ICgpID0+IHtcbiAgICBjb25zdCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgY29uc3Qga29yQ3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgICAgY29uc3QgdXRjQ3VycmVudFRpbWUgPSBuZXcgRGF0ZShcbiAgICAgICAga29yQ3VycmVudFRpbWUuZ2V0VGltZSgpICtcbiAgICAgICAgICBrb3JDdXJyZW50VGltZS5nZXRUaW1lem9uZU9mZnNldCgpICogNjAgKiAxMDAwXG4gICAgICApO1xuXG4gICAgICBjb25zdCBrb3JUYXJnZXRUaW1lID0gbmV3IERhdGUoXCIyMDIzLzA5LzA3IDEwOjAwOjAwXCIpOyAvLyBVVEMg7J6F66ClXG4gICAgICBjb25zdCB1dGNUYXJnZXRUaW1lID0gbmV3IERhdGUoXG4gICAgICAgIGtvclRhcmdldFRpbWUuZ2V0VGltZSgpICsga29yVGFyZ2V0VGltZS5nZXRUaW1lem9uZU9mZnNldCgpICogNjAgKiAxMDAwXG4gICAgICApO1xuXG4gICAgICBjb25zdCB1dGNEaWZmVGltZSA9IHV0Y1RhcmdldFRpbWUgLSB1dGNDdXJyZW50VGltZTtcblxuICAgICAgaWYgKHV0Y0RpZmZUaW1lIDw9IDApIHtcbiAgICAgICAgc2V0VVRDRGlmZlRpbWUoMCk7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi66+46rWtIO2DgOydtOuouCDsooXro4xcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcih1dGNEaWZmVGltZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcihcbiAgICAgICAgICAodXRjRGlmZlRpbWUgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcihcbiAgICAgICAgICAodXRjRGlmZlRpbWUgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKCh1dGNEaWZmVGltZSAlICgxMDAwICogNjApKSAvIDEwMDApO1xuXG4gICAgICAgIHNldFVUQ0RheXMoZGF5cyk7XG4gICAgICAgIHNldFVUQ0hvdXJzKGhvdXJzKTtcbiAgICAgICAgc2V0VVRDTWludXRlcyhtaW51dGVzKTtcbiAgICAgICAgc2V0VVRDU2Vjb25kcyhzZWNvbmRzKTtcbiAgICAgICAgc2V0VVRDRGlmZlRpbWUodXRjRGlmZlRpbWUpO1xuICAgICAgfVxuICAgIH0sIDEwMDApO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2hvd0tvckNvdW50ZG93bigpO1xuICAgIHNob3dVVENDb3VudERvd24oKTtcblxuICAgIC8vIENoZWNrIGlmIHRoZSB3aW5kb3cuZXRoZXJldW0gb2JqZWN0IGlzIGF2YWlsYWJsZVxuICAgIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcbiAgICAgIC8vIENoZWNrIGlmIHRoZSBjb25uZWN0IHRvIG1ldGFtYXNrXG4gICAgICBpZiAod2luZG93LmV0aGVyZXVtLnNlbGVjdGVkQWRkcmVzcykge1xuICAgICAgICBpbml0aWFsaXplRXRoZXJzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChcIlBsZWFzZSBjb25uZWN0IHRvIE1ldGFNYXNrLlwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQoXCJQbGVhc2UgaW5zdGFsbCBhIFdlYjMtZW5hYmxlZCBicm93c2VyIGxpa2UgTWV0YU1hc2suXCIpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBwYWdlVGl0bGU9e1wiQ29taW5nIFNvb25cIn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGFwb3J0YWxfZm5fY29taW5nX3Nvb25cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvb25fY291bnRkb3duXCI+XG4gICAgICAgICAgICB7LyogXG5cdFx0XHRcdFx0XHRUaGVyZSBpcyB0d28gdHlwZXMgb2YgY291bnRkb3duOiBkdWVfZGF0ZSAoRHVlIERhdGUpLCBldmVyIChFdmVyZ3JlZW4gdGltZXIpXG5cdFx0XHRcdFx0XHRcdDEuIFx0ZGF0YS10eXBlPVwiZHVlX2RhdGVcIlxuXHRcdFx0XHRcdFx0XHRcdEluIHRoaXMgY2FzZSB5b3UgaGF2ZSB0byBjaGFuZ2UgdmFsdWUgb2YgZGF0YS1kYXRlLiBGb3IgZXhhbXBsZTpcblx0XHRcdFx0XHRcdFx0XHRkYXRhLWRhdGU9XCJPY3RvYmVyIDEzLCAyMDIyIDEyOjMwOjAwXCJcblx0XHRcdFx0XHRcdFx0XHRJdCB3aWxsIG1lYW4gdGhhdCBtaW50IHdpbGwgZmluaXNoZWQgYXQgdGhpcyB0aW1lXG5cblx0XHRcdFx0XHRcdFx0Mi4gXHRkYXRhLXR5cGU9XCJldmVyXCJcblx0XHRcdFx0XHRcdFx0XHRJbiB0aGlzIGNhc2UgeW91IGhhdmUgdG8gY2hhbmdlIHZhbHVlcyBvZiBkYXRhLWRheXMsIGRhdGEtaG91cnMsIGRhdGEtbWludXRlcyBhbmQgZGF0YS1zZWNvbmRzLiBGb3IgZXhhbXBsZTpcblx0XHRcdFx0XHRcdFx0XHRkYXRhLWRheXM9XCIzNFwiXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS1ob3Vycz1cIjEwXCJcblx0XHRcdFx0XHRcdFx0XHRkYXRhLW1pbnV0ZXM9XCIyMFwiXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS1zZWNvbmRzPVwiMFwiXG5cdFx0XHRcdFx0XHRcdFx0SXQgd2lsbCBtZWFuIHRoYXQgdGhlIHRpbWUgZXhwaXJlcyBhZnRlciB0aGlzIHRpbWUsIGJ1dCB3aGVuIHRoZSBwYWdlIGlzIHJlZnJlc2hlZCwgdGhlIHZhbHVlIHdpbGwgcmV0dXJuIGFnYWluLiBJdCBtZWFucywgaXQgd29uJ3QgZW5kLlxuXHRcdFx0XHRcdFx0QWRkIGJveGVkIGNsYXNzIHRvIGdldCAjMSB0eXBlIG9mIGNvdW50ZG93blxuXHRcdFx0XHRcdCovfVxuICAgICAgICAgICAgPGgzXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1ldGFwb3J0YWxfZm5fY291bnRkb3duIGJveGVkXCJcbiAgICAgICAgICAgICAgZGF0YS10eXBlPVwiZXZlclwiXG4gICAgICAgICAgICAgIGRhdGEtZGF0ZT1cIk9jdG9iZXIgMTMsIDIwMjIgMTI6MzA6MDBcIlxuICAgICAgICAgICAgICBkYXRhLWRheXM9ezM0fVxuICAgICAgICAgICAgICBkYXRhLWhvdXJzPXs5fVxuICAgICAgICAgICAgICBkYXRhLW1pbnV0ZXM9ezIwfVxuICAgICAgICAgICAgICBkYXRhLXNlY29uZHM9ezEwfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7a29yRGlmZlRpbWUgPD0gMFxuICAgICAgICAgICAgICAgID8gXCLtlZzqta0g7YOA7J2066i4IOyiheujjFwiXG4gICAgICAgICAgICAgICAgOiBgS1NUIDogJHtrb3JEYXlzfWQ6ICR7a29ySG91cnN9aDogJHtrb3JNaW51dGVzfW06ICR7a29yU2Vjb25kc31zYH1cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIHt1dGNEaWZmVGltZSA8PSAwXG4gICAgICAgICAgICAgICAgPyBcIuuvuOq1rSDtg4DsnbTrqLgg7KKF66OMXCJcbiAgICAgICAgICAgICAgICA6IGBVVEMgOiAke3V0Y0RheXN9ZDogJHt1dGNIb3Vyc31oOiAke3V0Y01pbnV0ZXN9bTogJHt1dGNTZWNvbmRzfXNgfVxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvb25fdGl0bGVcIj5cbiAgICAgICAgICAgIDxoM1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbl9fbWFpbnRpdGxlXCJcbiAgICAgICAgICAgICAgZGF0YS10ZXh0PVwiUHVibGljIE1pbnRpbmcgaXMgQ29taW5nIFNvb25cIlxuICAgICAgICAgICAgICBkYXRhLWFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgUHVibGljIE1pbnRpbmcgaXMgQ29taW5nIFNvb25cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgT3VyIHdlYnNpdGUgaXMgY29taW5nIHNvb24uIFdlIGFyZSBjdXJyZW50bHkgd29ya2luZyBvbiBvdXJcbiAgICAgICAgICAgICAgd2Vic2l0ZS4gUGxlYXNlIGNoZWNrIGFnYWluIHdpdGhpbiBjb3VwbGUgZGF5cy5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24+7Iqk7YWM7J207YK5PC9idXR0b24+XG4gICAgICA8YnIgLz5cbiAgICAgIDxidXR0b24+7Ja47Iqk7YWM7J207YK5PC9idXR0b24+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQ29taW5nU29vbjtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxheW91dCIsImV0aGVycyIsImNvbnRyYWN0QUJJIiwiY29udHJhY3RBZGRyZXNzIiwiQ29taW5nU29vbiIsImtvckRpZmZUaW1lIiwic2V0S29yRGlmZlRpbWUiLCJrb3JEYXlzIiwic2V0S29yRGF5cyIsImtvckhvdXJzIiwic2V0S29ySG91cnMiLCJrb3JNaW51dGVzIiwic2V0S29yTWludXRlcyIsImtvclNlY29uZHMiLCJzZXRLb3JTZWNvbmRzIiwidXRjRGlmZlRpbWUiLCJzZXRVVENEaWZmVGltZSIsInV0Y0RheXMiLCJzZXRVVENEYXlzIiwidXRjSG91cnMiLCJzZXRVVENIb3VycyIsInV0Y01pbnV0ZXMiLCJzZXRVVENNaW51dGVzIiwidXRjU2Vjb25kcyIsInNldFVUQ1NlY29uZHMiLCJwcm92aWRlciIsInNldFByb3ZpZGVyIiwiY29udHJhY3QiLCJzZXRDb250cmFjdCIsInB1YmxpY0FjdGl2ZSIsInNldFB1YmxpY0FjdGl2ZSIsImluaXRpYWxpemVFdGhlcnMiLCJuZXdQcm92aWRlciIsImNvbnRyYWN0QWJpIiwibmV3Q29udHJhY3QiLCJ0cmFuc2ZlckV2ZW50RmlsdGVyIiwid2luZG93IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwiY29uc29sZSIsImxvZyIsIkNvbnRyYWN0IiwiZmlsdGVycyIsIlRyYW5zZmVyIiwic2hvd0tvckNvdW50ZG93biIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbCIsImtvckN1cnJlbnRUaW1lIiwiRGF0ZSIsImtvclRhcmdldFRpbWUiLCJjbGVhckludGVydmFsIiwiZGF5cyIsIk1hdGgiLCJmbG9vciIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJzaG93VVRDQ291bnREb3duIiwidXRjQ3VycmVudFRpbWUiLCJnZXRUaW1lIiwiZ2V0VGltZXpvbmVPZmZzZXQiLCJ1dGNUYXJnZXRUaW1lIiwic2VsZWN0ZWRBZGRyZXNzIiwiYWxlcnQiLCJwYWdlVGl0bGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsImRhdGEtdHlwZSIsImRhdGEtZGF0ZSIsImRhdGEtZGF5cyIsImRhdGEtaG91cnMiLCJkYXRhLW1pbnV0ZXMiLCJkYXRhLXNlY29uZHMiLCJiciIsImRhdGEtdGV4dCIsImRhdGEtYWxpZ24iLCJwIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/coming-soon.js\n"));

/***/ })

});