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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/layout/Layout */ \"./src/layout/Layout.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _src_components_utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/utils/constants */ \"./src/components/utils/constants.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar ComingSoon = function() {\n    _s();\n    // Get Kor remaining time\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), korDiffTime = ref[0], setKorDiffTime = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), korDays = ref1[0], setKorDays = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), korHours = ref2[0], setKorHours = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), korMinutes = ref3[0], setKorMinutes = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), korSeconds = ref4[0], setKorSeconds = ref4[1];\n    // Get UTC remaining time\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), utcDiffTime = ref5[0], setUTCDiffTime = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), utcDays = ref6[0], setUTCDays = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), utcHours = ref7[0], setUTCHours = ref7[1];\n    var ref8 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), utcMinutes = ref8[0], setUTCMinutes = ref8[1];\n    var ref9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), utcSeconds = ref9[0], setUTCSeconds = ref9[1];\n    // State variables for ethers provider and contract\n    var ref10 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), provider = ref10[0], setProvider = ref10[1];\n    var ref11 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), contract = ref11[0], setContract = ref11[1];\n    // State variables for user status\n    var ref12 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), publicActive = ref12[0], setPublicActive = ref12[1];\n    var initializeEthers = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n            var newProvider, contractAbi, newContract, transferEventFilter;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        // Request access to the user's Ethereum account\n                        return [\n                            4,\n                            window.ethereum.request({\n                                method: \"eth_requestAccounts\"\n                            })\n                        ];\n                    case 1:\n                        _state.sent();\n                        newProvider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(window.ethereum);\n                        console.log(\"newProvider: \", newProvider);\n                        setProvider(newProvider);\n                        contractAbi = _src_components_utils_constants__WEBPACK_IMPORTED_MODULE_3__.contractABI;\n                        newContract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(_src_components_utils_constants__WEBPACK_IMPORTED_MODULE_3__.contractAddress, contractAbi, newProvider);\n                        console.log(\"newContract: \", newContract);\n                        setContract(newContract);\n                        transferEventFilter = newContract.filters.Transfer();\n                        console.log(\"transferEventFilter: \", transferEventFilter);\n                        return [\n                            2\n                        ];\n                }\n            });\n        // // Function to load the public_Price value from the contract\n        // try {\n        //   // Call the public_Price function in the smart contract to get the value\n        //   const publicActive = await newContract.getPublicActive();\n        //   console.log(\"publicActive: \", parseInt(publicActive));\n        //   setPublicActive(parseInt(publicActive));\n        // } catch (error) {\n        //   console.error(\"Error loading public_Price:\", error);\n        //   alert(\n        //     \"Error loading public_Price. Please check the console for details.\"\n        //   );\n        // }\n        });\n        return function initializeEthers() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var showKorCountdown = function() {\n        var intervalId = setInterval(function() {\n            var korCurrentTime = new Date();\n            var korTargetTime = new Date(\"2023/09/07 19:00:00\"); // KST 입력\n            var korDiffTime = korTargetTime - korCurrentTime;\n            if (korDiffTime <= 0) {\n                setKorDiffTime(0);\n                clearInterval(intervalId);\n                console.log(\"한국 타이머 종료\");\n            } else {\n                var days = Math.floor(korDiffTime / (1000 * 60 * 60 * 24));\n                var hours = Math.floor(korDiffTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));\n                var minutes = Math.floor(korDiffTime % (1000 * 60 * 60) / (1000 * 60));\n                var seconds = Math.floor(korDiffTime % (1000 * 60) / 1000);\n                setKorDays(days);\n                setKorHours(hours);\n                setKorMinutes(minutes);\n                setKorSeconds(seconds);\n                setKorDiffTime(korDiffTime);\n            }\n        }, 1000);\n    };\n    var showUTCCountDown = function() {\n        var intervalId = setInterval(function() {\n            var korCurrentTime = new Date();\n            var utcCurrentTime = new Date(korCurrentTime.getTime() + korCurrentTime.getTimezoneOffset() * 60 * 1000);\n            var korTargetTime = new Date(\"2023/09/07 10:00:00\"); // UTC 입력\n            var utcTargetTime = new Date(korTargetTime.getTime() + korTargetTime.getTimezoneOffset() * 60 * 1000);\n            var utcDiffTime = utcTargetTime - utcCurrentTime;\n            if (utcDiffTime <= 0) {\n                setUTCDiffTime(0);\n                clearInterval(intervalId);\n                console.log(\"미국 타이머 종료\");\n            } else {\n                var days = Math.floor(utcDiffTime / (1000 * 60 * 60 * 24));\n                var hours = Math.floor(utcDiffTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));\n                var minutes = Math.floor(utcDiffTime % (1000 * 60 * 60) / (1000 * 60));\n                var seconds = Math.floor(utcDiffTime % (1000 * 60) / 1000);\n                setUTCDays(days);\n                setUTCHours(hours);\n                setUTCMinutes(minutes);\n                setUTCSeconds(seconds);\n                setUTCDiffTime(utcDiffTime);\n            }\n        }, 1000);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        showKorCountdown();\n        showUTCCountDown();\n        // Check if the window.ethereum object is available\n        if (window.ethereum) {\n            // Check if the connect to metamask\n            if (window.ethereum.selectedAddress) {\n                initializeEthers();\n            } else {\n                alert(\"Please connect to MetaMask.\");\n            }\n        } else {\n            alert(\"Please install a Web3-enabled browser like MetaMask.\");\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_layout_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        pageTitle: \"Coming Soon\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"metaportal_fn_coming_soon\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"soon_countdown\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"metaportal_fn_countdown boxed\",\n                                \"data-type\": \"ever\",\n                                \"data-date\": \"October 13, 2022 12:30:00\",\n                                \"data-days\": 34,\n                                \"data-hours\": 9,\n                                \"data-minutes\": 20,\n                                \"data-seconds\": 10,\n                                children: [\n                                    korDiffTime <= 0 ? \"한국 타이머 종료\" : \"KST : \".concat(korDays, \"d: \").concat(korHours, \"h: \").concat(korMinutes, \"m: \").concat(korSeconds, \"s\"),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                                        lineNumber: 187,\n                                        columnNumber: 15\n                                    }, _this),\n                                    utcDiffTime <= 0 ? \"미국 타이머 종료\" : \"UTC : \".concat(utcDays, \"d: \").concat(utcHours, \"h: \").concat(utcMinutes, \"m: \").concat(utcSeconds, \"s\")\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                                lineNumber: 175,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                            lineNumber: 158,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"soon_title\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"fn__maintitle\",\n                                    \"data-text\": \"Public Minting is Coming Soon\",\n                                    \"data-align\": \"center\",\n                                    children: \"Public Minting is Coming Soon\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                                    lineNumber: 194,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Our website is coming soon. We are currently working on our website. Please check again within couple days.\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                                    lineNumber: 201,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                            lineNumber: 193,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                    lineNumber: 157,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                lineNumber: 156,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                children: \"스테이킹\"\n            }, void 0, false, {\n                fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                lineNumber: 208,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                lineNumber: 209,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                children: \"언스테이킹\"\n            }, void 0, false, {\n                fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                lineNumber: 210,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n        lineNumber: 155,\n        columnNumber: 5\n    }, _this);\n};\n_s(ComingSoon, \"+mxUdfXgVOa5QmJEBOEZtYpwxoM=\");\n_c = ComingSoon;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ComingSoon);\nvar _c;\n$RefreshReg$(_c, \"ComingSoon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21pbmctc29vbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7O0FBQTRDO0FBQ0Y7QUFDVjtBQUlXO0FBQzNDLElBQU1NLFVBQVUsR0FBRyxXQUFNOztJQUN2Qix5QkFBeUI7SUFDekIsSUFBc0NMLEdBQVUsR0FBVkEsK0NBQVEsRUFBRSxFQUF6Q00sV0FBVyxHQUFvQk4sR0FBVSxHQUE5QixFQUFFTyxjQUFjLEdBQUlQLEdBQVUsR0FBZDtJQUNsQyxJQUE4QkEsSUFBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBQWpDUSxPQUFPLEdBQWdCUixJQUFVLEdBQTFCLEVBQUVTLFVBQVUsR0FBSVQsSUFBVSxHQUFkO0lBQzFCLElBQWdDQSxJQUFVLEdBQVZBLCtDQUFRLEVBQUUsRUFBbkNVLFFBQVEsR0FBaUJWLElBQVUsR0FBM0IsRUFBRVcsV0FBVyxHQUFJWCxJQUFVLEdBQWQ7SUFDNUIsSUFBb0NBLElBQVUsR0FBVkEsK0NBQVEsRUFBRSxFQUF2Q1ksVUFBVSxHQUFtQlosSUFBVSxHQUE3QixFQUFFYSxhQUFhLEdBQUliLElBQVUsR0FBZDtJQUNoQyxJQUFvQ0EsSUFBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBQXZDYyxVQUFVLEdBQW1CZCxJQUFVLEdBQTdCLEVBQUVlLGFBQWEsR0FBSWYsSUFBVSxHQUFkO0lBRWhDLHlCQUF5QjtJQUN6QixJQUFzQ0EsSUFBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBQXpDZ0IsV0FBVyxHQUFvQmhCLElBQVUsR0FBOUIsRUFBRWlCLGNBQWMsR0FBSWpCLElBQVUsR0FBZDtJQUNsQyxJQUE4QkEsSUFBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBQWpDa0IsT0FBTyxHQUFnQmxCLElBQVUsR0FBMUIsRUFBRW1CLFVBQVUsR0FBSW5CLElBQVUsR0FBZDtJQUMxQixJQUFnQ0EsSUFBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBQW5Db0IsUUFBUSxHQUFpQnBCLElBQVUsR0FBM0IsRUFBRXFCLFdBQVcsR0FBSXJCLElBQVUsR0FBZDtJQUM1QixJQUFvQ0EsSUFBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBQXZDc0IsVUFBVSxHQUFtQnRCLElBQVUsR0FBN0IsRUFBRXVCLGFBQWEsR0FBSXZCLElBQVUsR0FBZDtJQUNoQyxJQUFvQ0EsSUFBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBQXZDd0IsVUFBVSxHQUFtQnhCLElBQVUsR0FBN0IsRUFBRXlCLGFBQWEsR0FBSXpCLElBQVUsR0FBZDtJQUVoQyxtREFBbUQ7SUFDbkQsSUFBZ0NBLEtBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLENBQUMsRUFBdkMwQixRQUFRLEdBQWlCMUIsS0FBYyxHQUEvQixFQUFFMkIsV0FBVyxHQUFJM0IsS0FBYyxHQUFsQjtJQUM1QixJQUFnQ0EsS0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQUF2QzRCLFFBQVEsR0FBaUI1QixLQUFjLEdBQS9CLEVBQUU2QixXQUFXLEdBQUk3QixLQUFjLEdBQWxCO0lBRTVCLGtDQUFrQztJQUNsQyxJQUF3Q0EsS0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUFoRDhCLFlBQVksR0FBcUI5QixLQUFlLEdBQXBDLEVBQUUrQixlQUFlLEdBQUkvQixLQUFlLEdBQW5CO0lBRXBDLElBQU1nQyxnQkFBZ0I7bUJBQUcsK0ZBQVk7Z0JBSzdCQyxXQUFXLEVBS1hDLFdBQVcsRUFFWEMsV0FBVyxFQVNYQyxtQkFBbUI7Ozs7d0JBcEJ6QixnREFBZ0Q7d0JBQ2hEOzs0QkFBTUMsTUFBTSxDQUFDQyxRQUFRLENBQUNDLE9BQU8sQ0FBQztnQ0FBRUMsTUFBTSxFQUFFLHFCQUFxQjs2QkFBRSxDQUFDOzBCQUFBOzt3QkFBaEUsYUFBZ0UsQ0FBQzt3QkFHM0RQLFdBQVcsR0FBRyxJQUFJL0IsaUVBQTZCLENBQUNtQyxNQUFNLENBQUNDLFFBQVEsQ0FBQyxDQUFDO3dCQUN2RUssT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZSxFQUFFWCxXQUFXLENBQUMsQ0FBQzt3QkFDMUNOLFdBQVcsQ0FBQ00sV0FBVyxDQUFDLENBQUM7d0JBR25CQyxXQUFXLEdBQUcvQix3RUFBVyxDQUFDO3dCQUUxQmdDLFdBQVcsR0FBRyxJQUFJakMsbURBQWUsQ0FDckNFLDRFQUFlLEVBQ2Y4QixXQUFXLEVBQ1hELFdBQVcsQ0FFWixDQUFDO3dCQUNGVSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxlQUFlLEVBQUVULFdBQVcsQ0FBQyxDQUFDO3dCQUMxQ04sV0FBVyxDQUFDTSxXQUFXLENBQUMsQ0FBQzt3QkFFbkJDLG1CQUFtQixHQUFHRCxXQUFXLENBQUNXLE9BQU8sQ0FBQ0MsUUFBUSxFQUFFLENBQUM7d0JBQzNESixPQUFPLENBQUNDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRVIsbUJBQW1CLENBQUMsQ0FBQzs7Ozs7O1FBRTFELCtEQUErRDtRQUMvRCxRQUFRO1FBQ1IsNkVBQTZFO1FBQzdFLDhEQUE4RDtRQUM5RCwyREFBMkQ7UUFDM0QsNkNBQTZDO1FBQzdDLG9CQUFvQjtRQUNwQix5REFBeUQ7UUFDekQsV0FBVztRQUNYLDBFQUEwRTtRQUMxRSxPQUFPO1FBQ1AsSUFBSTtRQUNOLENBQUM7d0JBcENLSixnQkFBZ0I7OztPQW9DckI7SUFFRCxJQUFNZ0IsZ0JBQWdCLEdBQUcsV0FBTTtRQUM3QixJQUFNQyxVQUFVLEdBQUdDLFdBQVcsQ0FBQyxXQUFNO1lBQ25DLElBQU1DLGNBQWMsR0FBRyxJQUFJQyxJQUFJLEVBQUU7WUFFakMsSUFBTUMsYUFBYSxHQUFHLElBQUlELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLFNBQVM7WUFFaEUsSUFBTTlDLFdBQVcsR0FBRytDLGFBQWEsR0FBR0YsY0FBYztZQUVsRCxJQUFJN0MsV0FBVyxJQUFJLENBQUMsRUFBRTtnQkFDcEJDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbEIrQyxhQUFhLENBQUNMLFVBQVUsQ0FBQyxDQUFDO2dCQUMxQk4sT0FBTyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDM0IsT0FBTztnQkFDTCxJQUFNVyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDbkQsV0FBVyxHQUFJLEtBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtnQkFDNUQsSUFBTW9ELEtBQUssR0FBR0YsSUFBSSxDQUFDQyxLQUFLLENBQ3RCLFdBQVksR0FBSSxLQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQU0sS0FBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQ3hEO2dCQUNELElBQU1FLE9BQU8sR0FBR0gsSUFBSSxDQUFDQyxLQUFLLENBQ3hCLFdBQVksR0FBSSxLQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBTSxLQUFJLEdBQUcsRUFBRSxFQUM5QztnQkFDRCxJQUFNRyxPQUFPLEdBQUdKLElBQUksQ0FBQ0MsS0FBSyxDQUFDLFdBQVksR0FBSSxLQUFJLEdBQUcsRUFBRSxJQUFLLElBQUksQ0FBQztnQkFFOURoRCxVQUFVLENBQUM4QyxJQUFJLENBQUMsQ0FBQztnQkFDakI1QyxXQUFXLENBQUMrQyxLQUFLLENBQUMsQ0FBQztnQkFDbkI3QyxhQUFhLENBQUM4QyxPQUFPLENBQUMsQ0FBQztnQkFDdkI1QyxhQUFhLENBQUM2QyxPQUFPLENBQUMsQ0FBQztnQkFDdkJyRCxjQUFjLENBQUNELFdBQVcsQ0FBQyxDQUFDO1lBQzlCLENBQUM7UUFDSCxDQUFDLEVBQUUsSUFBSSxDQUFDO0lBQ1YsQ0FBQztJQUVELElBQU11RCxnQkFBZ0IsR0FBRyxXQUFNO1FBQzdCLElBQU1aLFVBQVUsR0FBR0MsV0FBVyxDQUFDLFdBQU07WUFDbkMsSUFBTUMsY0FBYyxHQUFHLElBQUlDLElBQUksRUFBRTtZQUNqQyxJQUFNVSxjQUFjLEdBQUcsSUFBSVYsSUFBSSxDQUM3QkQsY0FBYyxDQUFDWSxPQUFPLEVBQUUsR0FDdEJaLGNBQWMsQ0FBQ2EsaUJBQWlCLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUNqRDtZQUVELElBQU1YLGFBQWEsR0FBRyxJQUFJRCxJQUFJLENBQUMscUJBQXFCLENBQUMsRUFBRSxTQUFTO1lBQ2hFLElBQU1hLGFBQWEsR0FBRyxJQUFJYixJQUFJLENBQzVCQyxhQUFhLENBQUNVLE9BQU8sRUFBRSxHQUFHVixhQUFhLENBQUNXLGlCQUFpQixFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FDeEU7WUFFRCxJQUFNaEQsV0FBVyxHQUFHaUQsYUFBYSxHQUFHSCxjQUFjO1lBRWxELElBQUk5QyxXQUFXLElBQUksQ0FBQyxFQUFFO2dCQUNwQkMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNsQnFDLGFBQWEsQ0FBQ0wsVUFBVSxDQUFDLENBQUM7Z0JBQzFCTixPQUFPLENBQUNDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMzQixPQUFPO2dCQUNMLElBQU1XLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUN6QyxXQUFXLEdBQUksS0FBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO2dCQUM1RCxJQUFNMEMsS0FBSyxHQUFHRixJQUFJLENBQUNDLEtBQUssQ0FDdEIsV0FBWSxHQUFJLEtBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBTSxLQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFDeEQ7Z0JBQ0QsSUFBTUUsT0FBTyxHQUFHSCxJQUFJLENBQUNDLEtBQUssQ0FDeEIsV0FBWSxHQUFJLEtBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFNLEtBQUksR0FBRyxFQUFFLEVBQzlDO2dCQUNELElBQU1HLE9BQU8sR0FBR0osSUFBSSxDQUFDQyxLQUFLLENBQUMsV0FBWSxHQUFJLEtBQUksR0FBRyxFQUFFLElBQUssSUFBSSxDQUFDO2dCQUU5RHRDLFVBQVUsQ0FBQ29DLElBQUksQ0FBQyxDQUFDO2dCQUNqQmxDLFdBQVcsQ0FBQ3FDLEtBQUssQ0FBQyxDQUFDO2dCQUNuQm5DLGFBQWEsQ0FBQ29DLE9BQU8sQ0FBQyxDQUFDO2dCQUN2QmxDLGFBQWEsQ0FBQ21DLE9BQU8sQ0FBQyxDQUFDO2dCQUN2QjNDLGNBQWMsQ0FBQ0QsV0FBVyxDQUFDLENBQUM7WUFDOUIsQ0FBQztRQUNILENBQUMsRUFBRSxJQUFJLENBQUM7SUFDVixDQUFDO0lBRURqQixnREFBUyxDQUFDLFdBQU07UUFDZGlELGdCQUFnQixFQUFFLENBQUM7UUFDbkJhLGdCQUFnQixFQUFFLENBQUM7UUFFbkIsbURBQW1EO1FBQ25ELElBQUl4QixNQUFNLENBQUNDLFFBQVEsRUFBRTtZQUNuQixtQ0FBbUM7WUFDbkMsSUFBSUQsTUFBTSxDQUFDQyxRQUFRLENBQUM0QixlQUFlLEVBQUU7Z0JBQ25DbEMsZ0JBQWdCLEVBQUUsQ0FBQztZQUNyQixPQUFPO2dCQUNMbUMsS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUM7WUFDdkMsQ0FBQztRQUNILE9BQU87WUFDTEEsS0FBSyxDQUFDLHNEQUFzRCxDQUFDLENBQUM7UUFDaEUsQ0FBQztJQUNILENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLHFCQUNFLDhEQUFDbEUsMERBQU07UUFBQ21FLFNBQVMsRUFBRSxhQUFhOzswQkFDOUIsOERBQUNDLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQywyQkFBMkI7MEJBQ3hDLDRFQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsV0FBVzs7c0NBQ3hCLDhEQUFDRCxLQUFHOzRCQUFDQyxTQUFTLEVBQUMsZ0JBQWdCO3NDQWlCN0IsNEVBQUNDLElBQUU7Z0NBQ0RELFNBQVMsRUFBQywrQkFBK0I7Z0NBQ3pDRSxXQUFTLEVBQUMsTUFBTTtnQ0FDaEJDLFdBQVMsRUFBQywyQkFBMkI7Z0NBQ3JDQyxXQUFTLEVBQUUsRUFBRTtnQ0FDYkMsWUFBVSxFQUFFLENBQUM7Z0NBQ2JDLGNBQVksRUFBRSxFQUFFO2dDQUNoQkMsY0FBWSxFQUFFLEVBQUU7O29DQUVmdkUsV0FBVyxJQUFJLENBQUMsR0FDYixXQUFXLEdBQ1gsUUFBTyxDQUFlSSxNQUFRLENBQXJCRixPQUFPLEVBQUMsS0FBRyxDQUFXLENBQUtJLE1BQVUsQ0FBeEJGLFFBQVEsRUFBQyxLQUFHLENBQWEsQ0FBS0ksTUFBVSxDQUExQkYsVUFBVSxFQUFDLEtBQUcsQ0FBYSxPQUFDLENBQVpFLFVBQVUsRUFBQyxHQUFDLENBQUM7a0RBQ3JFLDhEQUFDZ0UsSUFBRTs7Ozs2Q0FBRztvQ0FDTDlELFdBQVcsSUFBSSxDQUFDLEdBQ2IsV0FBVyxHQUNYLFFBQU8sQ0FBZUksTUFBUSxDQUFyQkYsT0FBTyxFQUFDLEtBQUcsQ0FBVyxDQUFLSSxNQUFVLENBQXhCRixRQUFRLEVBQUMsS0FBRyxDQUFhLENBQUtJLE1BQVUsQ0FBMUJGLFVBQVUsRUFBQyxLQUFHLENBQWEsT0FBQyxDQUFaRSxVQUFVLEVBQUMsR0FBQyxDQUFDOzs7Ozs7cUNBQ2xFOzs7OztpQ0FDRDtzQ0FDTiw4REFBQzZDLEtBQUc7NEJBQUNDLFNBQVMsRUFBQyxZQUFZOzs4Q0FDekIsOERBQUNDLElBQUU7b0NBQ0RELFNBQVMsRUFBQyxlQUFlO29DQUN6QlMsV0FBUyxFQUFDLCtCQUErQjtvQ0FDekNDLFlBQVUsRUFBQyxRQUFROzhDQUNwQiwrQkFFRDs7Ozs7eUNBQUs7OENBQ0wsOERBQUNDLEdBQUM7OENBQUMsNkdBR0g7Ozs7O3lDQUFJOzs7Ozs7aUNBQ0E7Ozs7Ozt5QkFDRjs7Ozs7cUJBQ0Y7MEJBQ04sOERBQUNDLFFBQU07MEJBQUMsTUFBSTs7Ozs7cUJBQVM7MEJBQ3JCLDhEQUFDSixJQUFFOzs7O3FCQUFHOzBCQUNOLDhEQUFDSSxRQUFNOzBCQUFDLE9BQUs7Ozs7O3FCQUFTOzs7Ozs7YUFDZixDQUNUO0FBQ0osQ0FBQztHQTdNSzdFLFVBQVU7QUFBVkEsS0FBQUEsVUFBVTtBQThNaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21pbmctc29vbi5qcz9mNjQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL3NyYy9sYXlvdXQvTGF5b3V0XCI7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQge1xuICBjb250cmFjdEFCSSxcbiAgY29udHJhY3RBZGRyZXNzLFxufSBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvdXRpbHMvY29uc3RhbnRzXCI7XG5jb25zdCBDb21pbmdTb29uID0gKCkgPT4ge1xuICAvLyBHZXQgS29yIHJlbWFpbmluZyB0aW1lXG4gIGNvbnN0IFtrb3JEaWZmVGltZSwgc2V0S29yRGlmZlRpbWVdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2tvckRheXMsIHNldEtvckRheXNdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2tvckhvdXJzLCBzZXRLb3JIb3Vyc10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBba29yTWludXRlcywgc2V0S29yTWludXRlc10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBba29yU2Vjb25kcywgc2V0S29yU2Vjb25kc10gPSB1c2VTdGF0ZSgpO1xuXG4gIC8vIEdldCBVVEMgcmVtYWluaW5nIHRpbWVcbiAgY29uc3QgW3V0Y0RpZmZUaW1lLCBzZXRVVENEaWZmVGltZV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbdXRjRGF5cywgc2V0VVRDRGF5c10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbdXRjSG91cnMsIHNldFVUQ0hvdXJzXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFt1dGNNaW51dGVzLCBzZXRVVENNaW51dGVzXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFt1dGNTZWNvbmRzLCBzZXRVVENTZWNvbmRzXSA9IHVzZVN0YXRlKCk7XG5cbiAgLy8gU3RhdGUgdmFyaWFibGVzIGZvciBldGhlcnMgcHJvdmlkZXIgYW5kIGNvbnRyYWN0XG4gIGNvbnN0IFtwcm92aWRlciwgc2V0UHJvdmlkZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtjb250cmFjdCwgc2V0Q29udHJhY3RdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgLy8gU3RhdGUgdmFyaWFibGVzIGZvciB1c2VyIHN0YXR1c1xuICBjb25zdCBbcHVibGljQWN0aXZlLCBzZXRQdWJsaWNBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGluaXRpYWxpemVFdGhlcnMgPSBhc3luYyAoKSA9PiB7XG4gICAgLy8gUmVxdWVzdCBhY2Nlc3MgdG8gdGhlIHVzZXIncyBFdGhlcmV1bSBhY2NvdW50XG4gICAgYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiIH0pO1xuXG4gICAgLy8gQ3JlYXRlIGFuIGV0aGVycyBwcm92aWRlciB1c2luZyB0aGUgd2luZG93LmV0aGVyZXVtIG9iamVjdFxuICAgIGNvbnN0IG5ld1Byb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgY29uc29sZS5sb2coXCJuZXdQcm92aWRlcjogXCIsIG5ld1Byb3ZpZGVyKTtcbiAgICBzZXRQcm92aWRlcihuZXdQcm92aWRlcik7XG5cbiAgICAvLyBDcmVhdGUgYW4gZXRoZXJzIGNvbnRyYWN0IGluc3RhbmNlIHVzaW5nIHRoZSBjb250cmFjdCBhZGRyZXNzIGFuZCBBQklcbiAgICBjb25zdCBjb250cmFjdEFiaSA9IGNvbnRyYWN0QUJJO1xuXG4gICAgY29uc3QgbmV3Q29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxuICAgICAgY29udHJhY3RBZGRyZXNzLFxuICAgICAgY29udHJhY3RBYmksXG4gICAgICBuZXdQcm92aWRlclxuICAgICAgLy8gbmV3UHJvdmlkZXIuZ2V0U2lnbmVyKCkgLy8gVXNlIHRoZSBzaWduZXIgdG8gc2VuZCB0cmFuc2FjdGlvbnNcbiAgICApO1xuICAgIGNvbnNvbGUubG9nKFwibmV3Q29udHJhY3Q6IFwiLCBuZXdDb250cmFjdCk7XG4gICAgc2V0Q29udHJhY3QobmV3Q29udHJhY3QpO1xuXG4gICAgY29uc3QgdHJhbnNmZXJFdmVudEZpbHRlciA9IG5ld0NvbnRyYWN0LmZpbHRlcnMuVHJhbnNmZXIoKTtcbiAgICBjb25zb2xlLmxvZyhcInRyYW5zZmVyRXZlbnRGaWx0ZXI6IFwiLCB0cmFuc2ZlckV2ZW50RmlsdGVyKTtcblxuICAgIC8vIC8vIEZ1bmN0aW9uIHRvIGxvYWQgdGhlIHB1YmxpY19QcmljZSB2YWx1ZSBmcm9tIHRoZSBjb250cmFjdFxuICAgIC8vIHRyeSB7XG4gICAgLy8gICAvLyBDYWxsIHRoZSBwdWJsaWNfUHJpY2UgZnVuY3Rpb24gaW4gdGhlIHNtYXJ0IGNvbnRyYWN0IHRvIGdldCB0aGUgdmFsdWVcbiAgICAvLyAgIGNvbnN0IHB1YmxpY0FjdGl2ZSA9IGF3YWl0IG5ld0NvbnRyYWN0LmdldFB1YmxpY0FjdGl2ZSgpO1xuICAgIC8vICAgY29uc29sZS5sb2coXCJwdWJsaWNBY3RpdmU6IFwiLCBwYXJzZUludChwdWJsaWNBY3RpdmUpKTtcbiAgICAvLyAgIHNldFB1YmxpY0FjdGl2ZShwYXJzZUludChwdWJsaWNBY3RpdmUpKTtcbiAgICAvLyB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vICAgY29uc29sZS5lcnJvcihcIkVycm9yIGxvYWRpbmcgcHVibGljX1ByaWNlOlwiLCBlcnJvcik7XG4gICAgLy8gICBhbGVydChcbiAgICAvLyAgICAgXCJFcnJvciBsb2FkaW5nIHB1YmxpY19QcmljZS4gUGxlYXNlIGNoZWNrIHRoZSBjb25zb2xlIGZvciBkZXRhaWxzLlwiXG4gICAgLy8gICApO1xuICAgIC8vIH1cbiAgfTtcblxuICBjb25zdCBzaG93S29yQ291bnRkb3duID0gKCkgPT4ge1xuICAgIGNvbnN0IGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBjb25zdCBrb3JDdXJyZW50VGltZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAgIGNvbnN0IGtvclRhcmdldFRpbWUgPSBuZXcgRGF0ZShcIjIwMjMvMDkvMDcgMTk6MDA6MDBcIik7IC8vIEtTVCDsnoXroKVcblxuICAgICAgY29uc3Qga29yRGlmZlRpbWUgPSBrb3JUYXJnZXRUaW1lIC0ga29yQ3VycmVudFRpbWU7XG5cbiAgICAgIGlmIChrb3JEaWZmVGltZSA8PSAwKSB7XG4gICAgICAgIHNldEtvckRpZmZUaW1lKDApO1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIu2VnOq1rSDtg4DsnbTrqLgg7KKF66OMXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3Ioa29yRGlmZlRpbWUgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgICAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IoXG4gICAgICAgICAgKGtvckRpZmZUaW1lICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MClcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoXG4gICAgICAgICAgKGtvckRpZmZUaW1lICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcigoa29yRGlmZlRpbWUgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcblxuICAgICAgICBzZXRLb3JEYXlzKGRheXMpO1xuICAgICAgICBzZXRLb3JIb3Vycyhob3Vycyk7XG4gICAgICAgIHNldEtvck1pbnV0ZXMobWludXRlcyk7XG4gICAgICAgIHNldEtvclNlY29uZHMoc2Vjb25kcyk7XG4gICAgICAgIHNldEtvckRpZmZUaW1lKGtvckRpZmZUaW1lKTtcbiAgICAgIH1cbiAgICB9LCAxMDAwKTtcbiAgfTtcblxuICBjb25zdCBzaG93VVRDQ291bnREb3duID0gKCkgPT4ge1xuICAgIGNvbnN0IGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBjb25zdCBrb3JDdXJyZW50VGltZSA9IG5ldyBEYXRlKCk7XG4gICAgICBjb25zdCB1dGNDdXJyZW50VGltZSA9IG5ldyBEYXRlKFxuICAgICAgICBrb3JDdXJyZW50VGltZS5nZXRUaW1lKCkgK1xuICAgICAgICAgIGtvckN1cnJlbnRUaW1lLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MCAqIDEwMDBcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGtvclRhcmdldFRpbWUgPSBuZXcgRGF0ZShcIjIwMjMvMDkvMDcgMTA6MDA6MDBcIik7IC8vIFVUQyDsnoXroKVcbiAgICAgIGNvbnN0IHV0Y1RhcmdldFRpbWUgPSBuZXcgRGF0ZShcbiAgICAgICAga29yVGFyZ2V0VGltZS5nZXRUaW1lKCkgKyBrb3JUYXJnZXRUaW1lLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MCAqIDEwMDBcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IHV0Y0RpZmZUaW1lID0gdXRjVGFyZ2V0VGltZSAtIHV0Y0N1cnJlbnRUaW1lO1xuXG4gICAgICBpZiAodXRjRGlmZlRpbWUgPD0gMCkge1xuICAgICAgICBzZXRVVENEaWZmVGltZSgwKTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgICAgICAgY29uc29sZS5sb2coXCLrr7jqta0g7YOA7J2066i4IOyiheujjFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGRheXMgPSBNYXRoLmZsb29yKHV0Y0RpZmZUaW1lIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKFxuICAgICAgICAgICh1dGNEaWZmVGltZSAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKFxuICAgICAgICAgICh1dGNEaWZmVGltZSAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MClcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKHV0Y0RpZmZUaW1lICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XG5cbiAgICAgICAgc2V0VVRDRGF5cyhkYXlzKTtcbiAgICAgICAgc2V0VVRDSG91cnMoaG91cnMpO1xuICAgICAgICBzZXRVVENNaW51dGVzKG1pbnV0ZXMpO1xuICAgICAgICBzZXRVVENTZWNvbmRzKHNlY29uZHMpO1xuICAgICAgICBzZXRVVENEaWZmVGltZSh1dGNEaWZmVGltZSk7XG4gICAgICB9XG4gICAgfSwgMTAwMCk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzaG93S29yQ291bnRkb3duKCk7XG4gICAgc2hvd1VUQ0NvdW50RG93bigpO1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhlIHdpbmRvdy5ldGhlcmV1bSBvYmplY3QgaXMgYXZhaWxhYmxlXG4gICAgaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xuICAgICAgLy8gQ2hlY2sgaWYgdGhlIGNvbm5lY3QgdG8gbWV0YW1hc2tcbiAgICAgIGlmICh3aW5kb3cuZXRoZXJldW0uc2VsZWN0ZWRBZGRyZXNzKSB7XG4gICAgICAgIGluaXRpYWxpemVFdGhlcnMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIGNvbm5lY3QgdG8gTWV0YU1hc2suXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydChcIlBsZWFzZSBpbnN0YWxsIGEgV2ViMy1lbmFibGVkIGJyb3dzZXIgbGlrZSBNZXRhTWFzay5cIik7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHBhZ2VUaXRsZT17XCJDb21pbmcgU29vblwifT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWV0YXBvcnRhbF9mbl9jb21pbmdfc29vblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29vbl9jb3VudGRvd25cIj5cbiAgICAgICAgICAgIHsvKiBcblx0XHRcdFx0XHRcdFRoZXJlIGlzIHR3byB0eXBlcyBvZiBjb3VudGRvd246IGR1ZV9kYXRlIChEdWUgRGF0ZSksIGV2ZXIgKEV2ZXJncmVlbiB0aW1lcilcblx0XHRcdFx0XHRcdFx0MS4gXHRkYXRhLXR5cGU9XCJkdWVfZGF0ZVwiXG5cdFx0XHRcdFx0XHRcdFx0SW4gdGhpcyBjYXNlIHlvdSBoYXZlIHRvIGNoYW5nZSB2YWx1ZSBvZiBkYXRhLWRhdGUuIEZvciBleGFtcGxlOlxuXHRcdFx0XHRcdFx0XHRcdGRhdGEtZGF0ZT1cIk9jdG9iZXIgMTMsIDIwMjIgMTI6MzA6MDBcIlxuXHRcdFx0XHRcdFx0XHRcdEl0IHdpbGwgbWVhbiB0aGF0IG1pbnQgd2lsbCBmaW5pc2hlZCBhdCB0aGlzIHRpbWVcblxuXHRcdFx0XHRcdFx0XHQyLiBcdGRhdGEtdHlwZT1cImV2ZXJcIlxuXHRcdFx0XHRcdFx0XHRcdEluIHRoaXMgY2FzZSB5b3UgaGF2ZSB0byBjaGFuZ2UgdmFsdWVzIG9mIGRhdGEtZGF5cywgZGF0YS1ob3VycywgZGF0YS1taW51dGVzIGFuZCBkYXRhLXNlY29uZHMuIEZvciBleGFtcGxlOlxuXHRcdFx0XHRcdFx0XHRcdGRhdGEtZGF5cz1cIjM0XCJcblx0XHRcdFx0XHRcdFx0XHRkYXRhLWhvdXJzPVwiMTBcIlxuXHRcdFx0XHRcdFx0XHRcdGRhdGEtbWludXRlcz1cIjIwXCJcblx0XHRcdFx0XHRcdFx0XHRkYXRhLXNlY29uZHM9XCIwXCJcblx0XHRcdFx0XHRcdFx0XHRJdCB3aWxsIG1lYW4gdGhhdCB0aGUgdGltZSBleHBpcmVzIGFmdGVyIHRoaXMgdGltZSwgYnV0IHdoZW4gdGhlIHBhZ2UgaXMgcmVmcmVzaGVkLCB0aGUgdmFsdWUgd2lsbCByZXR1cm4gYWdhaW4uIEl0IG1lYW5zLCBpdCB3b24ndCBlbmQuXG5cdFx0XHRcdFx0XHRBZGQgYm94ZWQgY2xhc3MgdG8gZ2V0ICMxIHR5cGUgb2YgY291bnRkb3duXG5cdFx0XHRcdFx0Ki99XG4gICAgICAgICAgICA8aDNcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWV0YXBvcnRhbF9mbl9jb3VudGRvd24gYm94ZWRcIlxuICAgICAgICAgICAgICBkYXRhLXR5cGU9XCJldmVyXCJcbiAgICAgICAgICAgICAgZGF0YS1kYXRlPVwiT2N0b2JlciAxMywgMjAyMiAxMjozMDowMFwiXG4gICAgICAgICAgICAgIGRhdGEtZGF5cz17MzR9XG4gICAgICAgICAgICAgIGRhdGEtaG91cnM9ezl9XG4gICAgICAgICAgICAgIGRhdGEtbWludXRlcz17MjB9XG4gICAgICAgICAgICAgIGRhdGEtc2Vjb25kcz17MTB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtrb3JEaWZmVGltZSA8PSAwXG4gICAgICAgICAgICAgICAgPyBcIu2VnOq1rSDtg4DsnbTrqLgg7KKF66OMXCJcbiAgICAgICAgICAgICAgICA6IGBLU1QgOiAke2tvckRheXN9ZDogJHtrb3JIb3Vyc31oOiAke2tvck1pbnV0ZXN9bTogJHtrb3JTZWNvbmRzfXNgfVxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAge3V0Y0RpZmZUaW1lIDw9IDBcbiAgICAgICAgICAgICAgICA/IFwi66+46rWtIO2DgOydtOuouCDsooXro4xcIlxuICAgICAgICAgICAgICAgIDogYFVUQyA6ICR7dXRjRGF5c31kOiAke3V0Y0hvdXJzfWg6ICR7dXRjTWludXRlc31tOiAke3V0Y1NlY29uZHN9c2B9XG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29vbl90aXRsZVwiPlxuICAgICAgICAgICAgPGgzXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZuX19tYWludGl0bGVcIlxuICAgICAgICAgICAgICBkYXRhLXRleHQ9XCJQdWJsaWMgTWludGluZyBpcyBDb21pbmcgU29vblwiXG4gICAgICAgICAgICAgIGRhdGEtYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBQdWJsaWMgTWludGluZyBpcyBDb21pbmcgU29vblxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBPdXIgd2Vic2l0ZSBpcyBjb21pbmcgc29vbi4gV2UgYXJlIGN1cnJlbnRseSB3b3JraW5nIG9uIG91clxuICAgICAgICAgICAgICB3ZWJzaXRlLiBQbGVhc2UgY2hlY2sgYWdhaW4gd2l0aGluIGNvdXBsZSBkYXlzLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbj7siqTthYzsnbTtgrk8L2J1dHRvbj5cbiAgICAgIDxiciAvPlxuICAgICAgPGJ1dHRvbj7slrjsiqTthYzsnbTtgrk8L2J1dHRvbj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBDb21pbmdTb29uO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGF5b3V0IiwiZXRoZXJzIiwiY29udHJhY3RBQkkiLCJjb250cmFjdEFkZHJlc3MiLCJDb21pbmdTb29uIiwia29yRGlmZlRpbWUiLCJzZXRLb3JEaWZmVGltZSIsImtvckRheXMiLCJzZXRLb3JEYXlzIiwia29ySG91cnMiLCJzZXRLb3JIb3VycyIsImtvck1pbnV0ZXMiLCJzZXRLb3JNaW51dGVzIiwia29yU2Vjb25kcyIsInNldEtvclNlY29uZHMiLCJ1dGNEaWZmVGltZSIsInNldFVUQ0RpZmZUaW1lIiwidXRjRGF5cyIsInNldFVUQ0RheXMiLCJ1dGNIb3VycyIsInNldFVUQ0hvdXJzIiwidXRjTWludXRlcyIsInNldFVUQ01pbnV0ZXMiLCJ1dGNTZWNvbmRzIiwic2V0VVRDU2Vjb25kcyIsInByb3ZpZGVyIiwic2V0UHJvdmlkZXIiLCJjb250cmFjdCIsInNldENvbnRyYWN0IiwicHVibGljQWN0aXZlIiwic2V0UHVibGljQWN0aXZlIiwiaW5pdGlhbGl6ZUV0aGVycyIsIm5ld1Byb3ZpZGVyIiwiY29udHJhY3RBYmkiLCJuZXdDb250cmFjdCIsInRyYW5zZmVyRXZlbnRGaWx0ZXIiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInJlcXVlc3QiLCJtZXRob2QiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJjb25zb2xlIiwibG9nIiwiQ29udHJhY3QiLCJmaWx0ZXJzIiwiVHJhbnNmZXIiLCJzaG93S29yQ291bnRkb3duIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwia29yQ3VycmVudFRpbWUiLCJEYXRlIiwia29yVGFyZ2V0VGltZSIsImNsZWFySW50ZXJ2YWwiLCJkYXlzIiwiTWF0aCIsImZsb29yIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsInNob3dVVENDb3VudERvd24iLCJ1dGNDdXJyZW50VGltZSIsImdldFRpbWUiLCJnZXRUaW1lem9uZU9mZnNldCIsInV0Y1RhcmdldFRpbWUiLCJzZWxlY3RlZEFkZHJlc3MiLCJhbGVydCIsInBhZ2VUaXRsZSIsImRpdiIsImNsYXNzTmFtZSIsImgzIiwiZGF0YS10eXBlIiwiZGF0YS1kYXRlIiwiZGF0YS1kYXlzIiwiZGF0YS1ob3VycyIsImRhdGEtbWludXRlcyIsImRhdGEtc2Vjb25kcyIsImJyIiwiZGF0YS10ZXh0IiwiZGF0YS1hbGlnbiIsInAiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/coming-soon.js\n"));

/***/ })

});