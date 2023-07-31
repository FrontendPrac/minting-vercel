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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/layout/Layout */ \"./src/layout/Layout.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar ComingSoon = function() {\n    _s();\n    // Get Kor remaining time\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), korDiffTime = ref[0], setKorDiffTime = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), korDays = ref1[0], setKorDays = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), korHours = ref2[0], setKorHours = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), korMinutes = ref3[0], setKorMinutes = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), korSeconds = ref4[0], setKorSeconds = ref4[1];\n    // Get UTC remaining time\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), utcDiffTime = ref5[0], setUTCDiffTime = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), utcDays = ref6[0], setUTCDays = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), utcHours = ref7[0], setUTCHours = ref7[1];\n    var ref8 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), utcMinutes = ref8[0], setUTCMinutes = ref8[1];\n    var ref9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), utcSeconds = ref9[0], setUTCSeconds = ref9[1];\n    var showKorCountdown = function() {\n        var intervalId = setInterval(function() {\n            var korCurrentTime = new Date();\n            var korTargetTime = new Date(\"2023/07/31 16:30:00\"); // KST 입력\n            var korDiffTime = korTargetTime - korCurrentTime;\n            if (korDiffTime <= 0) {\n                setKorDiffTime(0);\n                clearInterval(intervalId);\n                console.log(\"한국 타이머 종료\");\n            } else {\n                var days = Math.floor(korDiffTime / (1000 * 60 * 60 * 24));\n                var hours = Math.floor(korDiffTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));\n                var minutes = Math.floor(korDiffTime % (1000 * 60 * 60) / (1000 * 60));\n                var seconds = Math.floor(korDiffTime % (1000 * 60) / 1000);\n                setKorDays(days);\n                setKorHours(hours);\n                setKorMinutes(minutes);\n                setKorSeconds(seconds);\n                setKorDiffTime(korDiffTime);\n            }\n        }, 1000);\n    };\n    var showUTCCountDown = function() {\n        var intervalId = setInterval(function() {\n            var korCurrentTime = new Date();\n            var utcCurrentTime = new Date(korCurrentTime.getTime() + korCurrentTime.getTimezoneOffset() * 60 * 1000);\n            var korTargetTime = new Date(\"2023/07/31 :30:00\"); // UTC 입력\n            var utcTargetTime = new Date(korTargetTime.getTime() + korTargetTime.getTimezoneOffset() * 60 * 1000);\n            var utcDiffTime = utcTargetTime - utcCurrentTime;\n            if (utcDiffTime <= 0) {\n                setUTCDiffTime(0);\n                clearInterval(intervalId);\n                console.log(\"미국 타이머 종료\");\n            } else {\n                var days = Math.floor(utcDiffTime / (1000 * 60 * 60 * 24));\n                var hours = Math.floor(utcDiffTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));\n                var minutes = Math.floor(utcDiffTime % (1000 * 60 * 60) / (1000 * 60));\n                var seconds = Math.floor(utcDiffTime % (1000 * 60) / 1000);\n                setUTCDays(days);\n                setUTCHours(hours);\n                setUTCMinutes(minutes);\n                setUTCSeconds(seconds);\n                setUTCDiffTime(utcDiffTime);\n            }\n        }, 1000);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        showKorCountdown();\n        showUTCCountDown();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_layout_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        pageTitle: \"Coming Soon\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"metaportal_fn_coming_soon\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"soon_countdown\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"metaportal_fn_countdown boxed\",\n                            \"data-type\": \"ever\",\n                            \"data-date\": \"October 13, 2022 12:30:00\",\n                            \"data-days\": 34,\n                            \"data-hours\": 9,\n                            \"data-minutes\": 20,\n                            \"data-seconds\": 10,\n                            children: [\n                                korDiffTime <= 0 ? \"한국 타이머 종료\" : \"\".concat(korDays, \"d: \").concat(korHours, \"h: \").concat(korMinutes, \"m: \").concat(korSeconds, \"s\"),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                                    lineNumber: 125,\n                                    columnNumber: 15\n                                }, _this),\n                                utcDiffTime <= 0 ? \"미국 타이머 종료\" : \"\".concat(utcDays, \"d: \").concat(utcHours, \"h: \").concat(utcMinutes, \"m: \").concat(utcSeconds, \"s\")\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                            lineNumber: 113,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                        lineNumber: 96,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"soon_title\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"fn__maintitle\",\n                                \"data-text\": \"Public Minting is Coming Soon\",\n                                \"data-align\": \"center\",\n                                children: \"Public Minting is Coming Soon\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                                lineNumber: 132,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Our website is coming soon. We are currently working on our website. Please check again within couple days.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                                lineNumber: 139,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                        lineNumber: 131,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                lineNumber: 95,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n            lineNumber: 94,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n        lineNumber: 93,\n        columnNumber: 5\n    }, _this);\n};\n_s(ComingSoon, \"kaQ5va6noafkHxSuBKWEIHmUYUo=\");\n_c = ComingSoon;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ComingSoon);\nvar _c;\n$RefreshReg$(_c, \"ComingSoon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Olsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21pbmctc29vbi5qcz9mNjQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL3NyYy9sYXlvdXQvTGF5b3V0XCI7XG5jb25zdCBDb21pbmdTb29uID0gKCkgPT4ge1xuICAvLyBHZXQgS29yIHJlbWFpbmluZyB0aW1lXG4gIGNvbnN0IFtrb3JEaWZmVGltZSwgc2V0S29yRGlmZlRpbWVdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2tvckRheXMsIHNldEtvckRheXNdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2tvckhvdXJzLCBzZXRLb3JIb3Vyc10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBba29yTWludXRlcywgc2V0S29yTWludXRlc10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBba29yU2Vjb25kcywgc2V0S29yU2Vjb25kc10gPSB1c2VTdGF0ZSgpO1xuXG4gIC8vIEdldCBVVEMgcmVtYWluaW5nIHRpbWVcbiAgY29uc3QgW3V0Y0RpZmZUaW1lLCBzZXRVVENEaWZmVGltZV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbdXRjRGF5cywgc2V0VVRDRGF5c10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbdXRjSG91cnMsIHNldFVUQ0hvdXJzXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFt1dGNNaW51dGVzLCBzZXRVVENNaW51dGVzXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFt1dGNTZWNvbmRzLCBzZXRVVENTZWNvbmRzXSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3Qgc2hvd0tvckNvdW50ZG93biA9ICgpID0+IHtcbiAgICBjb25zdCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgY29uc3Qga29yQ3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICBjb25zdCBrb3JUYXJnZXRUaW1lID0gbmV3IERhdGUoXCIyMDIzLzA3LzMxIDE2OjMwOjAwXCIpOyAvLyBLU1Qg7J6F66ClXG5cbiAgICAgIGNvbnN0IGtvckRpZmZUaW1lID0ga29yVGFyZ2V0VGltZSAtIGtvckN1cnJlbnRUaW1lO1xuXG4gICAgICBpZiAoa29yRGlmZlRpbWUgPD0gMCkge1xuICAgICAgICBzZXRLb3JEaWZmVGltZSgwKTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgICAgICAgY29uc29sZS5sb2coXCLtlZzqta0g7YOA7J2066i4IOyiheujjFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGRheXMgPSBNYXRoLmZsb29yKGtvckRpZmZUaW1lIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKFxuICAgICAgICAgIChrb3JEaWZmVGltZSAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKFxuICAgICAgICAgIChrb3JEaWZmVGltZSAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MClcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKGtvckRpZmZUaW1lICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XG5cbiAgICAgICAgc2V0S29yRGF5cyhkYXlzKTtcbiAgICAgICAgc2V0S29ySG91cnMoaG91cnMpO1xuICAgICAgICBzZXRLb3JNaW51dGVzKG1pbnV0ZXMpO1xuICAgICAgICBzZXRLb3JTZWNvbmRzKHNlY29uZHMpO1xuICAgICAgICBzZXRLb3JEaWZmVGltZShrb3JEaWZmVGltZSk7XG4gICAgICB9XG4gICAgfSwgMTAwMCk7XG4gIH07XG5cbiAgY29uc3Qgc2hvd1VUQ0NvdW50RG93biA9ICgpID0+IHtcbiAgICBjb25zdCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgY29uc3Qga29yQ3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgICAgY29uc3QgdXRjQ3VycmVudFRpbWUgPSBuZXcgRGF0ZShcbiAgICAgICAga29yQ3VycmVudFRpbWUuZ2V0VGltZSgpICtcbiAgICAgICAgICBrb3JDdXJyZW50VGltZS5nZXRUaW1lem9uZU9mZnNldCgpICogNjAgKiAxMDAwXG4gICAgICApO1xuXG4gICAgICBjb25zdCBrb3JUYXJnZXRUaW1lID0gbmV3IERhdGUoXCIyMDIzLzA3LzMxIDozMDowMFwiKTsgLy8gVVRDIOyeheugpVxuICAgICAgY29uc3QgdXRjVGFyZ2V0VGltZSA9IG5ldyBEYXRlKFxuICAgICAgICBrb3JUYXJnZXRUaW1lLmdldFRpbWUoKSArIGtvclRhcmdldFRpbWUuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwICogMTAwMFxuICAgICAgKTtcblxuICAgICAgY29uc3QgdXRjRGlmZlRpbWUgPSB1dGNUYXJnZXRUaW1lIC0gdXRjQ3VycmVudFRpbWU7XG5cbiAgICAgIGlmICh1dGNEaWZmVGltZSA8PSAwKSB7XG4gICAgICAgIHNldFVUQ0RpZmZUaW1lKDApO1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIuuvuOq1rSDtg4DsnbTrqLgg7KKF66OMXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IodXRjRGlmZlRpbWUgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgICAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IoXG4gICAgICAgICAgKHV0Y0RpZmZUaW1lICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MClcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoXG4gICAgICAgICAgKHV0Y0RpZmZUaW1lICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcigodXRjRGlmZlRpbWUgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcblxuICAgICAgICBzZXRVVENEYXlzKGRheXMpO1xuICAgICAgICBzZXRVVENIb3Vycyhob3Vycyk7XG4gICAgICAgIHNldFVUQ01pbnV0ZXMobWludXRlcyk7XG4gICAgICAgIHNldFVUQ1NlY29uZHMoc2Vjb25kcyk7XG4gICAgICAgIHNldFVUQ0RpZmZUaW1lKHV0Y0RpZmZUaW1lKTtcbiAgICAgIH1cbiAgICB9LCAxMDAwKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNob3dLb3JDb3VudGRvd24oKTtcbiAgICBzaG93VVRDQ291bnREb3duKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgcGFnZVRpdGxlPXtcIkNvbWluZyBTb29uXCJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXRhcG9ydGFsX2ZuX2NvbWluZ19zb29uXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb29uX2NvdW50ZG93blwiPlxuICAgICAgICAgICAgey8qIFxuXHRcdFx0XHRcdFx0VGhlcmUgaXMgdHdvIHR5cGVzIG9mIGNvdW50ZG93bjogZHVlX2RhdGUgKER1ZSBEYXRlKSwgZXZlciAoRXZlcmdyZWVuIHRpbWVyKVxuXHRcdFx0XHRcdFx0XHQxLiBcdGRhdGEtdHlwZT1cImR1ZV9kYXRlXCJcblx0XHRcdFx0XHRcdFx0XHRJbiB0aGlzIGNhc2UgeW91IGhhdmUgdG8gY2hhbmdlIHZhbHVlIG9mIGRhdGEtZGF0ZS4gRm9yIGV4YW1wbGU6XG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS1kYXRlPVwiT2N0b2JlciAxMywgMjAyMiAxMjozMDowMFwiXG5cdFx0XHRcdFx0XHRcdFx0SXQgd2lsbCBtZWFuIHRoYXQgbWludCB3aWxsIGZpbmlzaGVkIGF0IHRoaXMgdGltZVxuXG5cdFx0XHRcdFx0XHRcdDIuIFx0ZGF0YS10eXBlPVwiZXZlclwiXG5cdFx0XHRcdFx0XHRcdFx0SW4gdGhpcyBjYXNlIHlvdSBoYXZlIHRvIGNoYW5nZSB2YWx1ZXMgb2YgZGF0YS1kYXlzLCBkYXRhLWhvdXJzLCBkYXRhLW1pbnV0ZXMgYW5kIGRhdGEtc2Vjb25kcy4gRm9yIGV4YW1wbGU6XG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS1kYXlzPVwiMzRcIlxuXHRcdFx0XHRcdFx0XHRcdGRhdGEtaG91cnM9XCIxMFwiXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS1taW51dGVzPVwiMjBcIlxuXHRcdFx0XHRcdFx0XHRcdGRhdGEtc2Vjb25kcz1cIjBcIlxuXHRcdFx0XHRcdFx0XHRcdEl0IHdpbGwgbWVhbiB0aGF0IHRoZSB0aW1lIGV4cGlyZXMgYWZ0ZXIgdGhpcyB0aW1lLCBidXQgd2hlbiB0aGUgcGFnZSBpcyByZWZyZXNoZWQsIHRoZSB2YWx1ZSB3aWxsIHJldHVybiBhZ2Fpbi4gSXQgbWVhbnMsIGl0IHdvbid0IGVuZC5cblx0XHRcdFx0XHRcdEFkZCBib3hlZCBjbGFzcyB0byBnZXQgIzEgdHlwZSBvZiBjb3VudGRvd25cblx0XHRcdFx0XHQqL31cbiAgICAgICAgICAgIDxoM1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZXRhcG9ydGFsX2ZuX2NvdW50ZG93biBib3hlZFwiXG4gICAgICAgICAgICAgIGRhdGEtdHlwZT1cImV2ZXJcIlxuICAgICAgICAgICAgICBkYXRhLWRhdGU9XCJPY3RvYmVyIDEzLCAyMDIyIDEyOjMwOjAwXCJcbiAgICAgICAgICAgICAgZGF0YS1kYXlzPXszNH1cbiAgICAgICAgICAgICAgZGF0YS1ob3Vycz17OX1cbiAgICAgICAgICAgICAgZGF0YS1taW51dGVzPXsyMH1cbiAgICAgICAgICAgICAgZGF0YS1zZWNvbmRzPXsxMH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2tvckRpZmZUaW1lIDw9IDBcbiAgICAgICAgICAgICAgICA/IFwi7ZWc6rWtIO2DgOydtOuouCDsooXro4xcIlxuICAgICAgICAgICAgICAgIDogYCR7a29yRGF5c31kOiAke2tvckhvdXJzfWg6ICR7a29yTWludXRlc31tOiAke2tvclNlY29uZHN9c2B9XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICB7dXRjRGlmZlRpbWUgPD0gMFxuICAgICAgICAgICAgICAgID8gXCLrr7jqta0g7YOA7J2066i4IOyiheujjFwiXG4gICAgICAgICAgICAgICAgOiBgJHt1dGNEYXlzfWQ6ICR7dXRjSG91cnN9aDogJHt1dGNNaW51dGVzfW06ICR7dXRjU2Vjb25kc31zYH1cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb29uX3RpdGxlXCI+XG4gICAgICAgICAgICA8aDNcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm5fX21haW50aXRsZVwiXG4gICAgICAgICAgICAgIGRhdGEtdGV4dD1cIlB1YmxpYyBNaW50aW5nIGlzIENvbWluZyBTb29uXCJcbiAgICAgICAgICAgICAgZGF0YS1hbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFB1YmxpYyBNaW50aW5nIGlzIENvbWluZyBTb29uXG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIE91ciB3ZWJzaXRlIGlzIGNvbWluZyBzb29uLiBXZSBhcmUgY3VycmVudGx5IHdvcmtpbmcgb24gb3VyXG4gICAgICAgICAgICAgIHdlYnNpdGUuIFBsZWFzZSBjaGVjayBhZ2FpbiB3aXRoaW4gY291cGxlIGRheXMuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQ29taW5nU29vbjtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxheW91dCIsIkNvbWluZ1Nvb24iLCJrb3JEaWZmVGltZSIsInNldEtvckRpZmZUaW1lIiwia29yRGF5cyIsInNldEtvckRheXMiLCJrb3JIb3VycyIsInNldEtvckhvdXJzIiwia29yTWludXRlcyIsInNldEtvck1pbnV0ZXMiLCJrb3JTZWNvbmRzIiwic2V0S29yU2Vjb25kcyIsInV0Y0RpZmZUaW1lIiwic2V0VVRDRGlmZlRpbWUiLCJ1dGNEYXlzIiwic2V0VVRDRGF5cyIsInV0Y0hvdXJzIiwic2V0VVRDSG91cnMiLCJ1dGNNaW51dGVzIiwic2V0VVRDTWludXRlcyIsInV0Y1NlY29uZHMiLCJzZXRVVENTZWNvbmRzIiwic2hvd0tvckNvdW50ZG93biIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbCIsImtvckN1cnJlbnRUaW1lIiwiRGF0ZSIsImtvclRhcmdldFRpbWUiLCJjbGVhckludGVydmFsIiwiY29uc29sZSIsImxvZyIsImRheXMiLCJNYXRoIiwiZmxvb3IiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwic2hvd1VUQ0NvdW50RG93biIsInV0Y0N1cnJlbnRUaW1lIiwiZ2V0VGltZSIsImdldFRpbWV6b25lT2Zmc2V0IiwidXRjVGFyZ2V0VGltZSIsInBhZ2VUaXRsZSIsImRpdiIsImNsYXNzTmFtZSIsImgzIiwiZGF0YS10eXBlIiwiZGF0YS1kYXRlIiwiZGF0YS1kYXlzIiwiZGF0YS1ob3VycyIsImRhdGEtbWludXRlcyIsImRhdGEtc2Vjb25kcyIsImJyIiwiZGF0YS10ZXh0IiwiZGF0YS1hbGlnbiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/coming-soon.js\n"));

/***/ })

});