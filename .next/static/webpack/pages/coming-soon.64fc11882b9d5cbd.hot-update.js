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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/layout/Layout */ \"./src/layout/Layout.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar ComingSoon = function() {\n    _s();\n    // Get Kor remaining time\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), korDiffTime = ref[0], setKorDiffTime = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), korDays = ref1[0], setKorDays = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), korHours = ref2[0], setKorHours = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), korMinutes = ref3[0], setKorMinutes = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), korSeconds = ref4[0], setKorSeconds = ref4[1];\n    // Get UTC remaining time\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), utcDiffTime = ref5[0], setUTCDiffTime = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), utcDays = ref6[0], setUTCDays = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), utcHours = ref7[0], setUTCHours = ref7[1];\n    var ref8 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), utcMinutes = ref8[0], setUTCMinutes = ref8[1];\n    var ref9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), utcSeconds = ref9[0], setUTCSeconds = ref9[1];\n    var showKorCountdown = function() {\n        var intervalId = setInterval(function() {\n            var korCurrentTime = new Date();\n            var korTargetTime = new Date(\"2023/09/07 19:00:00\");\n            var korDiffTime = korTargetTime - korCurrentTime;\n            if (korDiffTime <= 0) {\n                setDiffTime(0);\n                clearInterval(intervalId);\n                console.log(\"타이머 종료\");\n            } else {\n                var days = Math.floor(korDiffTime / (1000 * 60 * 60 * 24));\n                var hours = Math.floor(korDiffTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));\n                var minutes = Math.floor(korDiffTime % (1000 * 60 * 60) / (1000 * 60));\n                var seconds = Math.floor(korDiffTime % (1000 * 60) / 1000);\n                setKorDays(days);\n                setKorHours(hours);\n                setKorMinutes(minutes);\n                setKorSeconds(seconds);\n                setKorDiffTime(korDiffTime);\n            }\n        }, 1000);\n    };\n    var showUTCCountDown = function() {\n        var intervalId = setInterval(function() {\n            var currentTime = new Date();\n            var utcCurrentTime = currentTime.getTimezoneOffset() * 60000;\n            var utcTargetTime = new Date(\"2023/09/07 19:00:00\");\n            var utcDiffTime = utcTargetTime - utcCurrentTime;\n            if (utcDiffTime <= 0) {\n                setUTCDiffTime(0);\n                clearInterval(intervalId);\n                console.log(\"타이머 종료\");\n            } else {\n                var days = Math.floor(korDiffTime / (1000 * 60 * 60 * 24));\n                var hours = Math.floor(korDiffTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));\n                var minutes = Math.floor(korDiffTime % (1000 * 60 * 60) / (1000 * 60));\n                var seconds = Math.floor(korDiffTime % (1000 * 60) / 1000);\n                setKorDays(days);\n                setKorHours(hours);\n                setKorMinutes(minutes);\n                setKorSeconds(seconds);\n                setKorDiffTime(korDiffTime);\n            }\n        }, 1000);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        showKorCountdown();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_layout_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        pageTitle: \"Coming Soon\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"metaportal_fn_coming_soon\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"soon_countdown\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"metaportal_fn_countdown boxed\",\n                            \"data-type\": \"ever\",\n                            \"data-date\": \"October 13, 2022 12:30:00\",\n                            \"data-days\": 34,\n                            \"data-hours\": 9,\n                            \"data-minutes\": 20,\n                            \"data-seconds\": 10,\n                            children: korDiffTime <= 0 ? \"카운트다운 종료\" : \"\".concat(korDays, \"d: \").concat(korHours, \"h: \").concat(korMinutes, \"m: \").concat(korSeconds, \"s\")\n                        }, void 0, false, {\n                            fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                            lineNumber: 106,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                        lineNumber: 89,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"soon_title\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"fn__maintitle\",\n                                \"data-text\": \"Public Minting is Coming Soon\",\n                                \"data-align\": \"center\",\n                                children: \"Public Minting is Coming Soon\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                                lineNumber: 121,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Our website is coming soon. We are currently working on our website. Please check again within couple days.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                                lineNumber: 128,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                        lineNumber: 120,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                lineNumber: 88,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n            lineNumber: 87,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, _this);\n};\n_s(ComingSoon, \"kaQ5va6noafkHxSuBKWEIHmUYUo=\");\n_c = ComingSoon;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ComingSoon);\nvar _c;\n$RefreshReg$(_c, \"ComingSoon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ckJGLE9BQU8sRUFBQyxLQUFHLENBQVcsQ0FBS0ksTUFBVSxDQUF4QkYsUUFBUSxFQUFDLEtBQUcsQ0FBYSxDQUFLSSxNQUFVLENBQTFCRixVQUFVLEVBQUMsS0FBRyxDQUFhLE9BQUMsQ0FBWkUsVUFBVSxFQUFDLEdBQUMsQ0FBQzs7Ozs7aUNBQzVEOzs7Ozs2QkFDRDtrQ0FDTiw4REFBQ2tDLEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxZQUFZOzswQ0FDekIsOERBQUNDLElBQUU7Z0NBQ0RELFNBQVMsRUFBQyxlQUFlO2dDQUN6QlEsV0FBUyxFQUFDLCtCQUErQjtnQ0FDekNDLFlBQVUsRUFBQyxRQUFROzBDQUNwQiwrQkFFRDs7Ozs7cUNBQUs7MENBQ0wsOERBQUNDLEdBQUM7MENBQUMsNkdBR0g7Ozs7O3FDQUFJOzs7Ozs7NkJBQ0E7Ozs7OztxQkFDRjs7Ozs7aUJBQ0Y7Ozs7O2FBQ0MsQ0FDVDtBQUNKLENBQUM7R0F0SUt0RCxVQUFVO0FBQVZBLEtBQUFBLFVBQVU7QUF1SWhCLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29taW5nLXNvb24uanM/ZjY0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9zcmMvbGF5b3V0L0xheW91dFwiO1xuY29uc3QgQ29taW5nU29vbiA9ICgpID0+IHtcbiAgLy8gR2V0IEtvciByZW1haW5pbmcgdGltZVxuICBjb25zdCBba29yRGlmZlRpbWUsIHNldEtvckRpZmZUaW1lXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtrb3JEYXlzLCBzZXRLb3JEYXlzXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtrb3JIb3Vycywgc2V0S29ySG91cnNdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2tvck1pbnV0ZXMsIHNldEtvck1pbnV0ZXNdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2tvclNlY29uZHMsIHNldEtvclNlY29uZHNdID0gdXNlU3RhdGUoKTtcblxuICAvLyBHZXQgVVRDIHJlbWFpbmluZyB0aW1lXG4gIGNvbnN0IFt1dGNEaWZmVGltZSwgc2V0VVRDRGlmZlRpbWVdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3V0Y0RheXMsIHNldFVUQ0RheXNdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3V0Y0hvdXJzLCBzZXRVVENIb3Vyc10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbdXRjTWludXRlcywgc2V0VVRDTWludXRlc10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbdXRjU2Vjb25kcywgc2V0VVRDU2Vjb25kc10gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IHNob3dLb3JDb3VudGRvd24gPSAoKSA9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGNvbnN0IGtvckN1cnJlbnRUaW1lID0gbmV3IERhdGUoKTtcblxuICAgICAgY29uc3Qga29yVGFyZ2V0VGltZSA9IG5ldyBEYXRlKFwiMjAyMy8wOS8wNyAxOTowMDowMFwiKTtcblxuICAgICAgY29uc3Qga29yRGlmZlRpbWUgPSBrb3JUYXJnZXRUaW1lIC0ga29yQ3VycmVudFRpbWU7XG5cbiAgICAgIGlmIChrb3JEaWZmVGltZSA8PSAwKSB7XG4gICAgICAgIHNldERpZmZUaW1lKDApO1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIu2DgOydtOuouCDsooXro4xcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcihrb3JEaWZmVGltZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcihcbiAgICAgICAgICAoa29yRGlmZlRpbWUgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcihcbiAgICAgICAgICAoa29yRGlmZlRpbWUgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKChrb3JEaWZmVGltZSAlICgxMDAwICogNjApKSAvIDEwMDApO1xuXG4gICAgICAgIHNldEtvckRheXMoZGF5cyk7XG4gICAgICAgIHNldEtvckhvdXJzKGhvdXJzKTtcbiAgICAgICAgc2V0S29yTWludXRlcyhtaW51dGVzKTtcbiAgICAgICAgc2V0S29yU2Vjb25kcyhzZWNvbmRzKTtcbiAgICAgICAgc2V0S29yRGlmZlRpbWUoa29yRGlmZlRpbWUpO1xuICAgICAgfVxuICAgIH0sIDEwMDApO1xuICB9O1xuXG4gIGNvbnN0IHNob3dVVENDb3VudERvd24gPSAoKSA9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKTtcbiAgICAgIGNvbnN0IHV0Y0N1cnJlbnRUaW1lID0gY3VycmVudFRpbWUuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwO1xuXG4gICAgICBjb25zdCB1dGNUYXJnZXRUaW1lID0gbmV3IERhdGUoXCIyMDIzLzA5LzA3IDE5OjAwOjAwXCIpO1xuXG4gICAgICBjb25zdCB1dGNEaWZmVGltZSA9IHV0Y1RhcmdldFRpbWUgLSB1dGNDdXJyZW50VGltZTtcblxuICAgICAgaWYgKHV0Y0RpZmZUaW1lIDw9IDApIHtcbiAgICAgICAgc2V0VVRDRGlmZlRpbWUoMCk7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi7YOA7J2066i4IOyiheujjFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGRheXMgPSBNYXRoLmZsb29yKGtvckRpZmZUaW1lIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKFxuICAgICAgICAgIChrb3JEaWZmVGltZSAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKFxuICAgICAgICAgIChrb3JEaWZmVGltZSAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MClcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKGtvckRpZmZUaW1lICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XG5cbiAgICAgICAgc2V0S29yRGF5cyhkYXlzKTtcbiAgICAgICAgc2V0S29ySG91cnMoaG91cnMpO1xuICAgICAgICBzZXRLb3JNaW51dGVzKG1pbnV0ZXMpO1xuICAgICAgICBzZXRLb3JTZWNvbmRzKHNlY29uZHMpO1xuICAgICAgICBzZXRLb3JEaWZmVGltZShrb3JEaWZmVGltZSk7XG4gICAgICB9XG4gICAgfSwgMTAwMCk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzaG93S29yQ291bnRkb3duKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgcGFnZVRpdGxlPXtcIkNvbWluZyBTb29uXCJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXRhcG9ydGFsX2ZuX2NvbWluZ19zb29uXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb29uX2NvdW50ZG93blwiPlxuICAgICAgICAgICAgey8qIFxuXHRcdFx0XHRcdFx0VGhlcmUgaXMgdHdvIHR5cGVzIG9mIGNvdW50ZG93bjogZHVlX2RhdGUgKER1ZSBEYXRlKSwgZXZlciAoRXZlcmdyZWVuIHRpbWVyKVxuXHRcdFx0XHRcdFx0XHQxLiBcdGRhdGEtdHlwZT1cImR1ZV9kYXRlXCJcblx0XHRcdFx0XHRcdFx0XHRJbiB0aGlzIGNhc2UgeW91IGhhdmUgdG8gY2hhbmdlIHZhbHVlIG9mIGRhdGEtZGF0ZS4gRm9yIGV4YW1wbGU6XG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS1kYXRlPVwiT2N0b2JlciAxMywgMjAyMiAxMjozMDowMFwiXG5cdFx0XHRcdFx0XHRcdFx0SXQgd2lsbCBtZWFuIHRoYXQgbWludCB3aWxsIGZpbmlzaGVkIGF0IHRoaXMgdGltZVxuXG5cdFx0XHRcdFx0XHRcdDIuIFx0ZGF0YS10eXBlPVwiZXZlclwiXG5cdFx0XHRcdFx0XHRcdFx0SW4gdGhpcyBjYXNlIHlvdSBoYXZlIHRvIGNoYW5nZSB2YWx1ZXMgb2YgZGF0YS1kYXlzLCBkYXRhLWhvdXJzLCBkYXRhLW1pbnV0ZXMgYW5kIGRhdGEtc2Vjb25kcy4gRm9yIGV4YW1wbGU6XG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS1kYXlzPVwiMzRcIlxuXHRcdFx0XHRcdFx0XHRcdGRhdGEtaG91cnM9XCIxMFwiXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS1taW51dGVzPVwiMjBcIlxuXHRcdFx0XHRcdFx0XHRcdGRhdGEtc2Vjb25kcz1cIjBcIlxuXHRcdFx0XHRcdFx0XHRcdEl0IHdpbGwgbWVhbiB0aGF0IHRoZSB0aW1lIGV4cGlyZXMgYWZ0ZXIgdGhpcyB0aW1lLCBidXQgd2hlbiB0aGUgcGFnZSBpcyByZWZyZXNoZWQsIHRoZSB2YWx1ZSB3aWxsIHJldHVybiBhZ2Fpbi4gSXQgbWVhbnMsIGl0IHdvbid0IGVuZC5cblx0XHRcdFx0XHRcdEFkZCBib3hlZCBjbGFzcyB0byBnZXQgIzEgdHlwZSBvZiBjb3VudGRvd25cblx0XHRcdFx0XHQqL31cbiAgICAgICAgICAgIDxoM1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZXRhcG9ydGFsX2ZuX2NvdW50ZG93biBib3hlZFwiXG4gICAgICAgICAgICAgIGRhdGEtdHlwZT1cImV2ZXJcIlxuICAgICAgICAgICAgICBkYXRhLWRhdGU9XCJPY3RvYmVyIDEzLCAyMDIyIDEyOjMwOjAwXCJcbiAgICAgICAgICAgICAgZGF0YS1kYXlzPXszNH1cbiAgICAgICAgICAgICAgZGF0YS1ob3Vycz17OX1cbiAgICAgICAgICAgICAgZGF0YS1taW51dGVzPXsyMH1cbiAgICAgICAgICAgICAgZGF0YS1zZWNvbmRzPXsxMH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2tvckRpZmZUaW1lIDw9IDBcbiAgICAgICAgICAgICAgICA/IFwi7Lm07Jq07Yq464uk7Jq0IOyiheujjFwiXG4gICAgICAgICAgICAgICAgOiBgJHtrb3JEYXlzfWQ6ICR7a29ySG91cnN9aDogJHtrb3JNaW51dGVzfW06ICR7a29yU2Vjb25kc31zYH1cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb29uX3RpdGxlXCI+XG4gICAgICAgICAgICA8aDNcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm5fX21haW50aXRsZVwiXG4gICAgICAgICAgICAgIGRhdGEtdGV4dD1cIlB1YmxpYyBNaW50aW5nIGlzIENvbWluZyBTb29uXCJcbiAgICAgICAgICAgICAgZGF0YS1hbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFB1YmxpYyBNaW50aW5nIGlzIENvbWluZyBTb29uXG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIE91ciB3ZWJzaXRlIGlzIGNvbWluZyBzb29uLiBXZSBhcmUgY3VycmVudGx5IHdvcmtpbmcgb24gb3VyXG4gICAgICAgICAgICAgIHdlYnNpdGUuIFBsZWFzZSBjaGVjayBhZ2FpbiB3aXRoaW4gY291cGxlIGRheXMuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQ29taW5nU29vbjtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxheW91dCIsIkNvbWluZ1Nvb24iLCJrb3JEaWZmVGltZSIsInNldEtvckRpZmZUaW1lIiwia29yRGF5cyIsInNldEtvckRheXMiLCJrb3JIb3VycyIsInNldEtvckhvdXJzIiwia29yTWludXRlcyIsInNldEtvck1pbnV0ZXMiLCJrb3JTZWNvbmRzIiwic2V0S29yU2Vjb25kcyIsInV0Y0RpZmZUaW1lIiwic2V0VVRDRGlmZlRpbWUiLCJ1dGNEYXlzIiwic2V0VVRDRGF5cyIsInV0Y0hvdXJzIiwic2V0VVRDSG91cnMiLCJ1dGNNaW51dGVzIiwic2V0VVRDTWludXRlcyIsInV0Y1NlY29uZHMiLCJzZXRVVENTZWNvbmRzIiwic2hvd0tvckNvdW50ZG93biIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbCIsImtvckN1cnJlbnRUaW1lIiwiRGF0ZSIsImtvclRhcmdldFRpbWUiLCJzZXREaWZmVGltZSIsImNsZWFySW50ZXJ2YWwiLCJjb25zb2xlIiwibG9nIiwiZGF5cyIsIk1hdGgiLCJmbG9vciIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJzaG93VVRDQ291bnREb3duIiwiY3VycmVudFRpbWUiLCJ1dGNDdXJyZW50VGltZSIsImdldFRpbWV6b25lT2Zmc2V0IiwidXRjVGFyZ2V0VGltZSIsInBhZ2VUaXRsZSIsImRpdiIsImNsYXNzTmFtZSIsImgzIiwiZGF0YS10eXBlIiwiZGF0YS1kYXRlIiwiZGF0YS1kYXlzIiwiZGF0YS1ob3VycyIsImRhdGEtbWludXRlcyIsImRhdGEtc2Vjb25kcyIsImRhdGEtdGV4dCIsImRhdGEtYWxpZ24iLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/coming-soon.js\n"));

/***/ })

});