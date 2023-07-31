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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/layout/Layout */ \"./src/layout/Layout.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar ComingSoon = function() {\n    _s();\n    // Get Kor remaining time\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), korDiffTime = ref[0], setKorDiffTime = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), korDays = ref1[0], setKorDays = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), korHours = ref2[0], setKorHours = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), korMinutes = ref3[0], setKorMinutes = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), korSeconds = ref4[0], setKorSeconds = ref4[1];\n    // Get UTC remaining time\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), utcDiffTime = ref5[0], setUTCDiffTime = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), utcDays = ref6[0], setUTCDays = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), utcHours = ref7[0], setUTCHours = ref7[1];\n    var ref8 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), utcMinutes = ref8[0], setUTCMinutes = ref8[1];\n    var ref9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), utcSeconds = ref9[0], setUTCSeconds = ref9[1];\n    var showKorCountdown = function() {\n        var intervalId = setInterval(function() {\n            var korCurrentTime = new Date();\n            var korTargetTime = new Date(\"2023/09/07 19:00:00\");\n            var korDiffTime = korTargetTime - korCurrentTime;\n            if (korDiffTime <= 0) {\n                setKorDiffTime(0);\n                clearInterval(intervalId);\n                console.log(\"타이머 종료\");\n            } else {\n                var days = Math.floor(korDiffTime / (1000 * 60 * 60 * 24));\n                var hours = Math.floor(korDiffTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));\n                var minutes = Math.floor(korDiffTime % (1000 * 60 * 60) / (1000 * 60));\n                var seconds = Math.floor(korDiffTime % (1000 * 60) / 1000);\n                setKorDays(days);\n                setKorHours(hours);\n                setKorMinutes(minutes);\n                setKorSeconds(seconds);\n                setKorDiffTime(korDiffTime);\n            }\n        }, 1000);\n    };\n    var showUTCCountDown = function() {\n        var intervalId = setInterval(function() {}, 1000);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        showKorCountdown();\n        showUTCCountDown();\n    }, []);\n    var k1 = new Date();\n    console.log(\"KST \");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_layout_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        pageTitle: \"Coming Soon\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"metaportal_fn_coming_soon\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"soon_countdown\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"metaportal_fn_countdown boxed\",\n                            \"data-type\": \"ever\",\n                            \"data-date\": \"October 13, 2022 12:30:00\",\n                            \"data-days\": 34,\n                            \"data-hours\": 9,\n                            \"data-minutes\": 20,\n                            \"data-seconds\": 10,\n                            children: [\n                                korDiffTime <= 0 ? \"카운트다운 종료\" : \"\".concat(korDays, \"d: \").concat(korHours, \"h: \").concat(korMinutes, \"m: \").concat(korSeconds, \"s\"),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                                    lineNumber: 94,\n                                    columnNumber: 15\n                                }, _this),\n                                utcDiffTime <= 0 ? \"카운트다운 종료\" : \"\".concat(utcDays, \"d: \").concat(utcHours, \"h: \").concat(utcMinutes, \"m: \").concat(utcSeconds, \"s\")\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                            lineNumber: 82,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"soon_title\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"fn__maintitle\",\n                                \"data-text\": \"Public Minting is Coming Soon\",\n                                \"data-align\": \"center\",\n                                children: \"Public Minting is Coming Soon\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                                lineNumber: 101,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Our website is coming soon. We are currently working on our website. Please check again within couple days.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                                lineNumber: 108,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                        lineNumber: 100,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n            lineNumber: 63,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, _this);\n};\n_s(ComingSoon, \"kaQ5va6noafkHxSuBKWEIHmUYUo=\");\n_c = ComingSoon;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ComingSoon);\nvar _c;\n$RefreshReg$(_c, \"ComingSoon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUU7O2dDQUVmOUMsV0FBVyxJQUFJLENBQUMsR0FDYixVQUFVLEdBQ1YsRUFBQyxDQUFlSSxNQUFRLENBQXJCRixPQUFPLEVBQUMsS0FBRyxDQUFXLENBQUtJLE1BQVUsQ0FBeEJGLFFBQVEsRUFBQyxLQUFHLENBQWEsQ0FBS0ksTUFBVSxDQUExQkYsVUFBVSxFQUFDLEtBQUcsQ0FBYSxPQUFDLENBQVpFLFVBQVUsRUFBQyxHQUFDLENBQUM7OENBQy9ELDhEQUFDdUMsSUFBRTs7Ozt5Q0FBRztnQ0FDTHJDLFdBQVcsSUFBSSxDQUFDLEdBQ2IsVUFBVSxHQUNWLEVBQUMsQ0FBZUksTUFBUSxDQUFyQkYsT0FBTyxFQUFDLEtBQUcsQ0FBVyxDQUFLSSxNQUFVLENBQXhCRixRQUFRLEVBQUMsS0FBRyxDQUFhLENBQUtJLE1BQVUsQ0FBMUJGLFVBQVUsRUFBQyxLQUFHLENBQWEsT0FBQyxDQUFaRSxVQUFVLEVBQUMsR0FBQyxDQUFDOzs7Ozs7aUNBQzVEOzs7Ozs2QkFDRDtrQ0FDTiw4REFBQ29CLEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxZQUFZOzswQ0FDekIsOERBQUNDLElBQUU7Z0NBQ0RELFNBQVMsRUFBQyxlQUFlO2dDQUN6QlMsV0FBUyxFQUFDLCtCQUErQjtnQ0FDekNDLFlBQVUsRUFBQyxRQUFROzBDQUNwQiwrQkFFRDs7Ozs7cUNBQUs7MENBQ0wsOERBQUNDLEdBQUM7MENBQUMsNkdBR0g7Ozs7O3FDQUFJOzs7Ozs7NkJBQ0E7Ozs7OztxQkFDRjs7Ozs7aUJBQ0Y7Ozs7O2FBQ0MsQ0FDVDtBQUNKLENBQUM7R0FsSEtuRCxVQUFVO0FBQVZBLEtBQUFBLFVBQVU7QUFtSGhCLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29taW5nLXNvb24uanM/ZjY0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9zcmMvbGF5b3V0L0xheW91dFwiO1xuY29uc3QgQ29taW5nU29vbiA9ICgpID0+IHtcbiAgLy8gR2V0IEtvciByZW1haW5pbmcgdGltZVxuICBjb25zdCBba29yRGlmZlRpbWUsIHNldEtvckRpZmZUaW1lXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtrb3JEYXlzLCBzZXRLb3JEYXlzXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtrb3JIb3Vycywgc2V0S29ySG91cnNdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2tvck1pbnV0ZXMsIHNldEtvck1pbnV0ZXNdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2tvclNlY29uZHMsIHNldEtvclNlY29uZHNdID0gdXNlU3RhdGUoKTtcblxuICAvLyBHZXQgVVRDIHJlbWFpbmluZyB0aW1lXG4gIGNvbnN0IFt1dGNEaWZmVGltZSwgc2V0VVRDRGlmZlRpbWVdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3V0Y0RheXMsIHNldFVUQ0RheXNdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3V0Y0hvdXJzLCBzZXRVVENIb3Vyc10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbdXRjTWludXRlcywgc2V0VVRDTWludXRlc10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbdXRjU2Vjb25kcywgc2V0VVRDU2Vjb25kc10gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IHNob3dLb3JDb3VudGRvd24gPSAoKSA9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGNvbnN0IGtvckN1cnJlbnRUaW1lID0gbmV3IERhdGUoKTtcblxuICAgICAgY29uc3Qga29yVGFyZ2V0VGltZSA9IG5ldyBEYXRlKFwiMjAyMy8wOS8wNyAxOTowMDowMFwiKTtcblxuICAgICAgY29uc3Qga29yRGlmZlRpbWUgPSBrb3JUYXJnZXRUaW1lIC0ga29yQ3VycmVudFRpbWU7XG5cbiAgICAgIGlmIChrb3JEaWZmVGltZSA8PSAwKSB7XG4gICAgICAgIHNldEtvckRpZmZUaW1lKDApO1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIu2DgOydtOuouCDsooXro4xcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcihrb3JEaWZmVGltZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcihcbiAgICAgICAgICAoa29yRGlmZlRpbWUgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcihcbiAgICAgICAgICAoa29yRGlmZlRpbWUgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKChrb3JEaWZmVGltZSAlICgxMDAwICogNjApKSAvIDEwMDApO1xuXG4gICAgICAgIHNldEtvckRheXMoZGF5cyk7XG4gICAgICAgIHNldEtvckhvdXJzKGhvdXJzKTtcbiAgICAgICAgc2V0S29yTWludXRlcyhtaW51dGVzKTtcbiAgICAgICAgc2V0S29yU2Vjb25kcyhzZWNvbmRzKTtcbiAgICAgICAgc2V0S29yRGlmZlRpbWUoa29yRGlmZlRpbWUpO1xuICAgICAgfVxuICAgIH0sIDEwMDApO1xuICB9O1xuXG4gIGNvbnN0IHNob3dVVENDb3VudERvd24gPSAoKSA9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHt9LCAxMDAwKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNob3dLb3JDb3VudGRvd24oKTtcbiAgICBzaG93VVRDQ291bnREb3duKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBrMSA9IG5ldyBEYXRlKCk7XG4gIGNvbnNvbGUubG9nKFwiS1NUIFwiKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgcGFnZVRpdGxlPXtcIkNvbWluZyBTb29uXCJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXRhcG9ydGFsX2ZuX2NvbWluZ19zb29uXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb29uX2NvdW50ZG93blwiPlxuICAgICAgICAgICAgey8qIFxuXHRcdFx0XHRcdFx0VGhlcmUgaXMgdHdvIHR5cGVzIG9mIGNvdW50ZG93bjogZHVlX2RhdGUgKER1ZSBEYXRlKSwgZXZlciAoRXZlcmdyZWVuIHRpbWVyKVxuXHRcdFx0XHRcdFx0XHQxLiBcdGRhdGEtdHlwZT1cImR1ZV9kYXRlXCJcblx0XHRcdFx0XHRcdFx0XHRJbiB0aGlzIGNhc2UgeW91IGhhdmUgdG8gY2hhbmdlIHZhbHVlIG9mIGRhdGEtZGF0ZS4gRm9yIGV4YW1wbGU6XG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS1kYXRlPVwiT2N0b2JlciAxMywgMjAyMiAxMjozMDowMFwiXG5cdFx0XHRcdFx0XHRcdFx0SXQgd2lsbCBtZWFuIHRoYXQgbWludCB3aWxsIGZpbmlzaGVkIGF0IHRoaXMgdGltZVxuXG5cdFx0XHRcdFx0XHRcdDIuIFx0ZGF0YS10eXBlPVwiZXZlclwiXG5cdFx0XHRcdFx0XHRcdFx0SW4gdGhpcyBjYXNlIHlvdSBoYXZlIHRvIGNoYW5nZSB2YWx1ZXMgb2YgZGF0YS1kYXlzLCBkYXRhLWhvdXJzLCBkYXRhLW1pbnV0ZXMgYW5kIGRhdGEtc2Vjb25kcy4gRm9yIGV4YW1wbGU6XG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS1kYXlzPVwiMzRcIlxuXHRcdFx0XHRcdFx0XHRcdGRhdGEtaG91cnM9XCIxMFwiXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS1taW51dGVzPVwiMjBcIlxuXHRcdFx0XHRcdFx0XHRcdGRhdGEtc2Vjb25kcz1cIjBcIlxuXHRcdFx0XHRcdFx0XHRcdEl0IHdpbGwgbWVhbiB0aGF0IHRoZSB0aW1lIGV4cGlyZXMgYWZ0ZXIgdGhpcyB0aW1lLCBidXQgd2hlbiB0aGUgcGFnZSBpcyByZWZyZXNoZWQsIHRoZSB2YWx1ZSB3aWxsIHJldHVybiBhZ2Fpbi4gSXQgbWVhbnMsIGl0IHdvbid0IGVuZC5cblx0XHRcdFx0XHRcdEFkZCBib3hlZCBjbGFzcyB0byBnZXQgIzEgdHlwZSBvZiBjb3VudGRvd25cblx0XHRcdFx0XHQqL31cbiAgICAgICAgICAgIDxoM1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZXRhcG9ydGFsX2ZuX2NvdW50ZG93biBib3hlZFwiXG4gICAgICAgICAgICAgIGRhdGEtdHlwZT1cImV2ZXJcIlxuICAgICAgICAgICAgICBkYXRhLWRhdGU9XCJPY3RvYmVyIDEzLCAyMDIyIDEyOjMwOjAwXCJcbiAgICAgICAgICAgICAgZGF0YS1kYXlzPXszNH1cbiAgICAgICAgICAgICAgZGF0YS1ob3Vycz17OX1cbiAgICAgICAgICAgICAgZGF0YS1taW51dGVzPXsyMH1cbiAgICAgICAgICAgICAgZGF0YS1zZWNvbmRzPXsxMH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2tvckRpZmZUaW1lIDw9IDBcbiAgICAgICAgICAgICAgICA/IFwi7Lm07Jq07Yq464uk7Jq0IOyiheujjFwiXG4gICAgICAgICAgICAgICAgOiBgJHtrb3JEYXlzfWQ6ICR7a29ySG91cnN9aDogJHtrb3JNaW51dGVzfW06ICR7a29yU2Vjb25kc31zYH1cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIHt1dGNEaWZmVGltZSA8PSAwXG4gICAgICAgICAgICAgICAgPyBcIuy5tOyatO2KuOuLpOyatCDsooXro4xcIlxuICAgICAgICAgICAgICAgIDogYCR7dXRjRGF5c31kOiAke3V0Y0hvdXJzfWg6ICR7dXRjTWludXRlc31tOiAke3V0Y1NlY29uZHN9c2B9XG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29vbl90aXRsZVwiPlxuICAgICAgICAgICAgPGgzXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZuX19tYWludGl0bGVcIlxuICAgICAgICAgICAgICBkYXRhLXRleHQ9XCJQdWJsaWMgTWludGluZyBpcyBDb21pbmcgU29vblwiXG4gICAgICAgICAgICAgIGRhdGEtYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBQdWJsaWMgTWludGluZyBpcyBDb21pbmcgU29vblxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBPdXIgd2Vic2l0ZSBpcyBjb21pbmcgc29vbi4gV2UgYXJlIGN1cnJlbnRseSB3b3JraW5nIG9uIG91clxuICAgICAgICAgICAgICB3ZWJzaXRlLiBQbGVhc2UgY2hlY2sgYWdhaW4gd2l0aGluIGNvdXBsZSBkYXlzLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IENvbWluZ1Nvb247XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMYXlvdXQiLCJDb21pbmdTb29uIiwia29yRGlmZlRpbWUiLCJzZXRLb3JEaWZmVGltZSIsImtvckRheXMiLCJzZXRLb3JEYXlzIiwia29ySG91cnMiLCJzZXRLb3JIb3VycyIsImtvck1pbnV0ZXMiLCJzZXRLb3JNaW51dGVzIiwia29yU2Vjb25kcyIsInNldEtvclNlY29uZHMiLCJ1dGNEaWZmVGltZSIsInNldFVUQ0RpZmZUaW1lIiwidXRjRGF5cyIsInNldFVUQ0RheXMiLCJ1dGNIb3VycyIsInNldFVUQ0hvdXJzIiwidXRjTWludXRlcyIsInNldFVUQ01pbnV0ZXMiLCJ1dGNTZWNvbmRzIiwic2V0VVRDU2Vjb25kcyIsInNob3dLb3JDb3VudGRvd24iLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJrb3JDdXJyZW50VGltZSIsIkRhdGUiLCJrb3JUYXJnZXRUaW1lIiwiY2xlYXJJbnRlcnZhbCIsImNvbnNvbGUiLCJsb2ciLCJkYXlzIiwiTWF0aCIsImZsb29yIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsInNob3dVVENDb3VudERvd24iLCJrMSIsInBhZ2VUaXRsZSIsImRpdiIsImNsYXNzTmFtZSIsImgzIiwiZGF0YS10eXBlIiwiZGF0YS1kYXRlIiwiZGF0YS1kYXlzIiwiZGF0YS1ob3VycyIsImRhdGEtbWludXRlcyIsImRhdGEtc2Vjb25kcyIsImJyIiwiZGF0YS10ZXh0IiwiZGF0YS1hbGlnbiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/coming-soon.js\n"));

/***/ })

});