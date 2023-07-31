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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/layout/Layout */ \"./src/layout/Layout.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar ComingSoon = function() {\n    var convertToUTC = // 로컬 타임존에 있는 시간(KMT)을 UTC로 변환하는 함수\n    function convertToUTC(localTime) {\n        var utcTime = new Date(localTime);\n        utcTime.setMinutes(utcTime.getMinutes() - utcTime.getTimezoneOffset());\n        return utcTime;\n    };\n    _s();\n    // Get Kor remaining time\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), korDiffTime = ref[0], setKorDiffTime = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), korDays = ref1[0], setKorDays = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), korHours = ref2[0], setKorHours = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), korMinutes = ref3[0], setKorMinutes = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), korSeconds = ref4[0], setKorSeconds = ref4[1];\n    // Get UTC remaining time\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), utcDiffTime = ref5[0], setUTCDiffTime = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), utcDays = ref6[0], setUTCDays = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), utcHours = ref7[0], setUTCHours = ref7[1];\n    var ref8 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), utcMinutes = ref8[0], setUTCMinutes = ref8[1];\n    var ref9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), utcSeconds = ref9[0], setUTCSeconds = ref9[1];\n    var showKorCountdown = function() {\n        var intervalId = setInterval(function() {\n            var korCurrentTime = new Date();\n            var korTargetTime = new Date(\"2023/09/07 19:00:00\");\n            var korDiffTime = korTargetTime - korCurrentTime;\n            if (korDiffTime <= 0) {\n                setKorDiffTime(0);\n                clearInterval(intervalId);\n                console.log(\"타이머 종료\");\n            } else {\n                var days = Math.floor(korDiffTime / (1000 * 60 * 60 * 24));\n                var hours = Math.floor(korDiffTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));\n                var minutes = Math.floor(korDiffTime % (1000 * 60 * 60) / (1000 * 60));\n                var seconds = Math.floor(korDiffTime % (1000 * 60) / 1000);\n                setKorDays(days);\n                setKorHours(hours);\n                setKorMinutes(minutes);\n                setKorSeconds(seconds);\n                setKorDiffTime(korDiffTime);\n            }\n        }, 1000);\n    };\n    var showUTCCountDown = function() {\n        var intervalId = setInterval(function() {\n            var korCurrentTime = new Date();\n            var korTargetTime = new Date(\"2023/09/07 19:00:00\");\n            var korDiffTime = korTargetTime - korCurrentTime;\n            var utcDiffTime = convertToUTC(korDiffTime);\n            console.log();\n        // console.log(\"KMT:\", localTime.toISOString());\n        // console.log(\"UTC:\", utcTime.toISOString());\n        }, 1000);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        showKorCountdown();\n        showUTCCountDown();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_layout_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        pageTitle: \"Coming Soon\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"metaportal_fn_coming_soon\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"soon_countdown\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"metaportal_fn_countdown boxed\",\n                            \"data-type\": \"ever\",\n                            \"data-date\": \"October 13, 2022 12:30:00\",\n                            \"data-days\": 34,\n                            \"data-hours\": 9,\n                            \"data-minutes\": 20,\n                            \"data-seconds\": 10,\n                            children: [\n                                korDiffTime <= 0 ? \"카운트다운 종료\" : \"\".concat(korDays, \"d: \").concat(korHours, \"h: \").concat(korMinutes, \"m: \").concat(korSeconds, \"s\"),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                                    lineNumber: 110,\n                                    columnNumber: 15\n                                }, _this),\n                                utcDiffTime <= 0 ? \"카운트다운 종료\" : \"\".concat(utcDays, \"d: \").concat(utcHours, \"h: \").concat(utcMinutes, \"m: \").concat(utcSeconds, \"s\")\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                            lineNumber: 98,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                        lineNumber: 81,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"soon_title\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"fn__maintitle\",\n                                \"data-text\": \"Public Minting is Coming Soon\",\n                                \"data-align\": \"center\",\n                                children: \"Public Minting is Coming Soon\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                                lineNumber: 117,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Our website is coming soon. We are currently working on our website. Please check again within couple days.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                                lineNumber: 124,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                        lineNumber: 116,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                lineNumber: 80,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n            lineNumber: 79,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n        lineNumber: 78,\n        columnNumber: 5\n    }, _this);\n};\n_s(ComingSoon, \"kaQ5va6noafkHxSuBKWEIHmUYUo=\");\n_c = ComingSoon;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ComingSoon);\nvar _c;\n$RefreshReg$(_c, \"ComingSoon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVMsRUFBQyxlQUFlO2dDQUN6QlMsV0FBUyxFQUFDLCtCQUErQjtnQ0FDekNDLFlBQVUsRUFBQyxRQUFROzBDQUNwQiwrQkFFRDs7Ozs7cUNBQUs7MENBQ0wsOERBQUNDLEdBQUM7MENBQUMsNkdBR0g7Ozs7O3FDQUFJOzs7Ozs7NkJBQ0E7Ozs7OztxQkFDRjs7Ozs7aUJBQ0Y7Ozs7O2FBQ0MsQ0FDVDtBQUNKLENBQUM7R0FsSUt4RCxVQUFVO0FBQVZBLEtBQUFBLFVBQVU7QUFtSWhCLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29taW5nLXNvb24uanM/ZjY0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9zcmMvbGF5b3V0L0xheW91dFwiO1xuY29uc3QgQ29taW5nU29vbiA9ICgpID0+IHtcbiAgLy8gR2V0IEtvciByZW1haW5pbmcgdGltZVxuICBjb25zdCBba29yRGlmZlRpbWUsIHNldEtvckRpZmZUaW1lXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtrb3JEYXlzLCBzZXRLb3JEYXlzXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtrb3JIb3Vycywgc2V0S29ySG91cnNdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2tvck1pbnV0ZXMsIHNldEtvck1pbnV0ZXNdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2tvclNlY29uZHMsIHNldEtvclNlY29uZHNdID0gdXNlU3RhdGUoKTtcblxuICAvLyBHZXQgVVRDIHJlbWFpbmluZyB0aW1lXG4gIGNvbnN0IFt1dGNEaWZmVGltZSwgc2V0VVRDRGlmZlRpbWVdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3V0Y0RheXMsIHNldFVUQ0RheXNdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3V0Y0hvdXJzLCBzZXRVVENIb3Vyc10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbdXRjTWludXRlcywgc2V0VVRDTWludXRlc10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbdXRjU2Vjb25kcywgc2V0VVRDU2Vjb25kc10gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IHNob3dLb3JDb3VudGRvd24gPSAoKSA9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGNvbnN0IGtvckN1cnJlbnRUaW1lID0gbmV3IERhdGUoKTtcblxuICAgICAgY29uc3Qga29yVGFyZ2V0VGltZSA9IG5ldyBEYXRlKFwiMjAyMy8wOS8wNyAxOTowMDowMFwiKTtcblxuICAgICAgY29uc3Qga29yRGlmZlRpbWUgPSBrb3JUYXJnZXRUaW1lIC0ga29yQ3VycmVudFRpbWU7XG5cbiAgICAgIGlmIChrb3JEaWZmVGltZSA8PSAwKSB7XG4gICAgICAgIHNldEtvckRpZmZUaW1lKDApO1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIu2DgOydtOuouCDsooXro4xcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcihrb3JEaWZmVGltZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcihcbiAgICAgICAgICAoa29yRGlmZlRpbWUgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcihcbiAgICAgICAgICAoa29yRGlmZlRpbWUgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKChrb3JEaWZmVGltZSAlICgxMDAwICogNjApKSAvIDEwMDApO1xuXG4gICAgICAgIHNldEtvckRheXMoZGF5cyk7XG4gICAgICAgIHNldEtvckhvdXJzKGhvdXJzKTtcbiAgICAgICAgc2V0S29yTWludXRlcyhtaW51dGVzKTtcbiAgICAgICAgc2V0S29yU2Vjb25kcyhzZWNvbmRzKTtcbiAgICAgICAgc2V0S29yRGlmZlRpbWUoa29yRGlmZlRpbWUpO1xuICAgICAgfVxuICAgIH0sIDEwMDApO1xuICB9O1xuXG4gIGNvbnN0IHNob3dVVENDb3VudERvd24gPSAoKSA9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGNvbnN0IGtvckN1cnJlbnRUaW1lID0gbmV3IERhdGUoKTtcblxuICAgICAgY29uc3Qga29yVGFyZ2V0VGltZSA9IG5ldyBEYXRlKFwiMjAyMy8wOS8wNyAxOTowMDowMFwiKTtcblxuICAgICAgY29uc3Qga29yRGlmZlRpbWUgPSBrb3JUYXJnZXRUaW1lIC0ga29yQ3VycmVudFRpbWU7XG4gICAgICBjb25zdCB1dGNEaWZmVGltZSA9IGNvbnZlcnRUb1VUQyhrb3JEaWZmVGltZSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKCk7XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiS01UOlwiLCBsb2NhbFRpbWUudG9JU09TdHJpbmcoKSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIlVUQzpcIiwgdXRjVGltZS50b0lTT1N0cmluZygpKTtcbiAgICB9LCAxMDAwKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNob3dLb3JDb3VudGRvd24oKTtcbiAgICBzaG93VVRDQ291bnREb3duKCk7XG4gIH0sIFtdKTtcblxuICAvLyDroZzsu6wg7YOA7J6E7KG07JeQIOyeiOuKlCDsi5zqsIQoS01UKeydhCBVVEProZwg67OA7ZmY7ZWY64qUIO2VqOyImFxuICBmdW5jdGlvbiBjb252ZXJ0VG9VVEMobG9jYWxUaW1lKSB7XG4gICAgY29uc3QgdXRjVGltZSA9IG5ldyBEYXRlKGxvY2FsVGltZSk7XG4gICAgdXRjVGltZS5zZXRNaW51dGVzKHV0Y1RpbWUuZ2V0TWludXRlcygpIC0gdXRjVGltZS5nZXRUaW1lem9uZU9mZnNldCgpKTtcbiAgICByZXR1cm4gdXRjVGltZTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBwYWdlVGl0bGU9e1wiQ29taW5nIFNvb25cIn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGFwb3J0YWxfZm5fY29taW5nX3Nvb25cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvb25fY291bnRkb3duXCI+XG4gICAgICAgICAgICB7LyogXG5cdFx0XHRcdFx0XHRUaGVyZSBpcyB0d28gdHlwZXMgb2YgY291bnRkb3duOiBkdWVfZGF0ZSAoRHVlIERhdGUpLCBldmVyIChFdmVyZ3JlZW4gdGltZXIpXG5cdFx0XHRcdFx0XHRcdDEuIFx0ZGF0YS10eXBlPVwiZHVlX2RhdGVcIlxuXHRcdFx0XHRcdFx0XHRcdEluIHRoaXMgY2FzZSB5b3UgaGF2ZSB0byBjaGFuZ2UgdmFsdWUgb2YgZGF0YS1kYXRlLiBGb3IgZXhhbXBsZTpcblx0XHRcdFx0XHRcdFx0XHRkYXRhLWRhdGU9XCJPY3RvYmVyIDEzLCAyMDIyIDEyOjMwOjAwXCJcblx0XHRcdFx0XHRcdFx0XHRJdCB3aWxsIG1lYW4gdGhhdCBtaW50IHdpbGwgZmluaXNoZWQgYXQgdGhpcyB0aW1lXG5cblx0XHRcdFx0XHRcdFx0Mi4gXHRkYXRhLXR5cGU9XCJldmVyXCJcblx0XHRcdFx0XHRcdFx0XHRJbiB0aGlzIGNhc2UgeW91IGhhdmUgdG8gY2hhbmdlIHZhbHVlcyBvZiBkYXRhLWRheXMsIGRhdGEtaG91cnMsIGRhdGEtbWludXRlcyBhbmQgZGF0YS1zZWNvbmRzLiBGb3IgZXhhbXBsZTpcblx0XHRcdFx0XHRcdFx0XHRkYXRhLWRheXM9XCIzNFwiXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS1ob3Vycz1cIjEwXCJcblx0XHRcdFx0XHRcdFx0XHRkYXRhLW1pbnV0ZXM9XCIyMFwiXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS1zZWNvbmRzPVwiMFwiXG5cdFx0XHRcdFx0XHRcdFx0SXQgd2lsbCBtZWFuIHRoYXQgdGhlIHRpbWUgZXhwaXJlcyBhZnRlciB0aGlzIHRpbWUsIGJ1dCB3aGVuIHRoZSBwYWdlIGlzIHJlZnJlc2hlZCwgdGhlIHZhbHVlIHdpbGwgcmV0dXJuIGFnYWluLiBJdCBtZWFucywgaXQgd29uJ3QgZW5kLlxuXHRcdFx0XHRcdFx0QWRkIGJveGVkIGNsYXNzIHRvIGdldCAjMSB0eXBlIG9mIGNvdW50ZG93blxuXHRcdFx0XHRcdCovfVxuICAgICAgICAgICAgPGgzXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1ldGFwb3J0YWxfZm5fY291bnRkb3duIGJveGVkXCJcbiAgICAgICAgICAgICAgZGF0YS10eXBlPVwiZXZlclwiXG4gICAgICAgICAgICAgIGRhdGEtZGF0ZT1cIk9jdG9iZXIgMTMsIDIwMjIgMTI6MzA6MDBcIlxuICAgICAgICAgICAgICBkYXRhLWRheXM9ezM0fVxuICAgICAgICAgICAgICBkYXRhLWhvdXJzPXs5fVxuICAgICAgICAgICAgICBkYXRhLW1pbnV0ZXM9ezIwfVxuICAgICAgICAgICAgICBkYXRhLXNlY29uZHM9ezEwfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7a29yRGlmZlRpbWUgPD0gMFxuICAgICAgICAgICAgICAgID8gXCLsubTsmrTtirjri6TsmrQg7KKF66OMXCJcbiAgICAgICAgICAgICAgICA6IGAke2tvckRheXN9ZDogJHtrb3JIb3Vyc31oOiAke2tvck1pbnV0ZXN9bTogJHtrb3JTZWNvbmRzfXNgfVxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAge3V0Y0RpZmZUaW1lIDw9IDBcbiAgICAgICAgICAgICAgICA/IFwi7Lm07Jq07Yq464uk7Jq0IOyiheujjFwiXG4gICAgICAgICAgICAgICAgOiBgJHt1dGNEYXlzfWQ6ICR7dXRjSG91cnN9aDogJHt1dGNNaW51dGVzfW06ICR7dXRjU2Vjb25kc31zYH1cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb29uX3RpdGxlXCI+XG4gICAgICAgICAgICA8aDNcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm5fX21haW50aXRsZVwiXG4gICAgICAgICAgICAgIGRhdGEtdGV4dD1cIlB1YmxpYyBNaW50aW5nIGlzIENvbWluZyBTb29uXCJcbiAgICAgICAgICAgICAgZGF0YS1hbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFB1YmxpYyBNaW50aW5nIGlzIENvbWluZyBTb29uXG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIE91ciB3ZWJzaXRlIGlzIGNvbWluZyBzb29uLiBXZSBhcmUgY3VycmVudGx5IHdvcmtpbmcgb24gb3VyXG4gICAgICAgICAgICAgIHdlYnNpdGUuIFBsZWFzZSBjaGVjayBhZ2FpbiB3aXRoaW4gY291cGxlIGRheXMuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQ29taW5nU29vbjtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxheW91dCIsIkNvbWluZ1Nvb24iLCJjb252ZXJ0VG9VVEMiLCJsb2NhbFRpbWUiLCJ1dGNUaW1lIiwiRGF0ZSIsInNldE1pbnV0ZXMiLCJnZXRNaW51dGVzIiwiZ2V0VGltZXpvbmVPZmZzZXQiLCJrb3JEaWZmVGltZSIsInNldEtvckRpZmZUaW1lIiwia29yRGF5cyIsInNldEtvckRheXMiLCJrb3JIb3VycyIsInNldEtvckhvdXJzIiwia29yTWludXRlcyIsInNldEtvck1pbnV0ZXMiLCJrb3JTZWNvbmRzIiwic2V0S29yU2Vjb25kcyIsInV0Y0RpZmZUaW1lIiwic2V0VVRDRGlmZlRpbWUiLCJ1dGNEYXlzIiwic2V0VVRDRGF5cyIsInV0Y0hvdXJzIiwic2V0VVRDSG91cnMiLCJ1dGNNaW51dGVzIiwic2V0VVRDTWludXRlcyIsInV0Y1NlY29uZHMiLCJzZXRVVENTZWNvbmRzIiwic2hvd0tvckNvdW50ZG93biIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbCIsImtvckN1cnJlbnRUaW1lIiwia29yVGFyZ2V0VGltZSIsImNsZWFySW50ZXJ2YWwiLCJjb25zb2xlIiwibG9nIiwiZGF5cyIsIk1hdGgiLCJmbG9vciIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJzaG93VVRDQ291bnREb3duIiwicGFnZVRpdGxlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJkYXRhLXR5cGUiLCJkYXRhLWRhdGUiLCJkYXRhLWRheXMiLCJkYXRhLWhvdXJzIiwiZGF0YS1taW51dGVzIiwiZGF0YS1zZWNvbmRzIiwiYnIiLCJkYXRhLXRleHQiLCJkYXRhLWFsaWduIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/coming-soon.js\n"));

/***/ })

});