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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/layout/Layout */ \"./src/layout/Layout.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar ComingSoon = function() {\n    _s();\n    // Get Kor remaining time\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), korDiffTime = ref[0], setKorDiffTime = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), korDays = ref1[0], setKorDays = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), korHours = ref2[0], setKorHours = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), korMinutes = ref3[0], setKorMinutes = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), korSeconds = ref4[0], setKorSeconds = ref4[1];\n    // Get UTC remaining time\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), utcDiffTime = ref5[0], setUTCDiffTime = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), utcDays = ref6[0], setUTCDays = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), utcHours = ref7[0], setUTCHours = ref7[1];\n    var ref8 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), utcMinutes = ref8[0], setUTCMinutes = ref8[1];\n    var ref9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), utcSeconds = ref9[0], setUTCSeconds = ref9[1];\n    var showKorCountdown = function() {\n        var intervalId = setInterval(function() {\n            var korCurrentTime = new Date();\n            var korTargetTime = new Date(\"2023/09/07 19:00:00\");\n            var korDiffTime = korTargetTime - korCurrentTime;\n            if (korDiffTime <= 0) {\n                setKorDiffTime(0);\n                clearInterval(intervalId);\n                console.log(\"타이머 종료\");\n            } else {\n                var days = Math.floor(korDiffTime / (1000 * 60 * 60 * 24));\n                var hours = Math.floor(korDiffTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));\n                var minutes = Math.floor(korDiffTime % (1000 * 60 * 60) / (1000 * 60));\n                var seconds = Math.floor(korDiffTime % (1000 * 60) / 1000);\n                setKorDays(days);\n                setKorHours(hours);\n                setKorMinutes(minutes);\n                setKorSeconds(seconds);\n                setKorDiffTime(korDiffTime);\n            }\n        }, 1000);\n    };\n    var showUTCCountDown = function() {\n        var intervalId = setInterval(function() {}, 1000);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        showKorCountdown();\n        showUTCCountDown();\n        var k1 = new Date();\n        var u1 = new Date(k1.getTime() + k1.getTimezoneOffset() * 60 * 1000);\n        console.log(\"KST: \", k1);\n        console.log(\"UTC: \", u1);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_layout_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        pageTitle: \"Coming Soon\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"metaportal_fn_coming_soon\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"soon_countdown\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"metaportal_fn_countdown boxed\",\n                            \"data-type\": \"ever\",\n                            \"data-date\": \"October 13, 2022 12:30:00\",\n                            \"data-days\": 34,\n                            \"data-hours\": 9,\n                            \"data-minutes\": 20,\n                            \"data-seconds\": 10,\n                            children: [\n                                korDiffTime <= 0 ? \"카운트다운 종료\" : \"\".concat(korDays, \"d: \").concat(korHours, \"h: \").concat(korMinutes, \"m: \").concat(korSeconds, \"s\"),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                                    lineNumber: 97,\n                                    columnNumber: 15\n                                }, _this),\n                                utcDiffTime <= 0 ? \"카운트다운 종료\" : \"\".concat(utcDays, \"d: \").concat(utcHours, \"h: \").concat(utcMinutes, \"m: \").concat(utcSeconds, \"s\")\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                            lineNumber: 85,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"soon_title\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"fn__maintitle\",\n                                \"data-text\": \"Public Minting is Coming Soon\",\n                                \"data-align\": \"center\",\n                                children: \"Public Minting is Coming Soon\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                                lineNumber: 104,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Our website is coming soon. We are currently working on our website. Please check again within couple days.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                                lineNumber: 111,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                        lineNumber: 103,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                lineNumber: 67,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n            lineNumber: 66,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, _this);\n};\n_s(ComingSoon, \"kaQ5va6noafkHxSuBKWEIHmUYUo=\");\n_c = ComingSoon;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ComingSoon);\nvar _c;\n$RefreshReg$(_c, \"ComingSoon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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K0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21pbmctc29vbi5qcz9mNjQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL3NyYy9sYXlvdXQvTGF5b3V0XCI7XG5jb25zdCBDb21pbmdTb29uID0gKCkgPT4ge1xuICAvLyBHZXQgS29yIHJlbWFpbmluZyB0aW1lXG4gIGNvbnN0IFtrb3JEaWZmVGltZSwgc2V0S29yRGlmZlRpbWVdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2tvckRheXMsIHNldEtvckRheXNdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2tvckhvdXJzLCBzZXRLb3JIb3Vyc10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBba29yTWludXRlcywgc2V0S29yTWludXRlc10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBba29yU2Vjb25kcywgc2V0S29yU2Vjb25kc10gPSB1c2VTdGF0ZSgpO1xuXG4gIC8vIEdldCBVVEMgcmVtYWluaW5nIHRpbWVcbiAgY29uc3QgW3V0Y0RpZmZUaW1lLCBzZXRVVENEaWZmVGltZV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbdXRjRGF5cywgc2V0VVRDRGF5c10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbdXRjSG91cnMsIHNldFVUQ0hvdXJzXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFt1dGNNaW51dGVzLCBzZXRVVENNaW51dGVzXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFt1dGNTZWNvbmRzLCBzZXRVVENTZWNvbmRzXSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3Qgc2hvd0tvckNvdW50ZG93biA9ICgpID0+IHtcbiAgICBjb25zdCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgY29uc3Qga29yQ3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICBjb25zdCBrb3JUYXJnZXRUaW1lID0gbmV3IERhdGUoXCIyMDIzLzA5LzA3IDE5OjAwOjAwXCIpO1xuXG4gICAgICBjb25zdCBrb3JEaWZmVGltZSA9IGtvclRhcmdldFRpbWUgLSBrb3JDdXJyZW50VGltZTtcblxuICAgICAgaWYgKGtvckRpZmZUaW1lIDw9IDApIHtcbiAgICAgICAgc2V0S29yRGlmZlRpbWUoMCk7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi7YOA7J2066i4IOyiheujjFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGRheXMgPSBNYXRoLmZsb29yKGtvckRpZmZUaW1lIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKFxuICAgICAgICAgIChrb3JEaWZmVGltZSAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKFxuICAgICAgICAgIChrb3JEaWZmVGltZSAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MClcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKGtvckRpZmZUaW1lICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XG5cbiAgICAgICAgc2V0S29yRGF5cyhkYXlzKTtcbiAgICAgICAgc2V0S29ySG91cnMoaG91cnMpO1xuICAgICAgICBzZXRLb3JNaW51dGVzKG1pbnV0ZXMpO1xuICAgICAgICBzZXRLb3JTZWNvbmRzKHNlY29uZHMpO1xuICAgICAgICBzZXRLb3JEaWZmVGltZShrb3JEaWZmVGltZSk7XG4gICAgICB9XG4gICAgfSwgMTAwMCk7XG4gIH07XG5cbiAgY29uc3Qgc2hvd1VUQ0NvdW50RG93biA9ICgpID0+IHtcbiAgICBjb25zdCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge30sIDEwMDApO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2hvd0tvckNvdW50ZG93bigpO1xuICAgIHNob3dVVENDb3VudERvd24oKTtcblxuICAgIGNvbnN0IGsxID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCB1MSA9IG5ldyBEYXRlKGsxLmdldFRpbWUoKSArIGsxLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MCAqIDEwMDApO1xuXG4gICAgY29uc29sZS5sb2coXCJLU1Q6IFwiLCBrMSk7XG4gICAgY29uc29sZS5sb2coXCJVVEM6IFwiLCB1MSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgcGFnZVRpdGxlPXtcIkNvbWluZyBTb29uXCJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXRhcG9ydGFsX2ZuX2NvbWluZ19zb29uXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb29uX2NvdW50ZG93blwiPlxuICAgICAgICAgICAgey8qIFxuXHRcdFx0XHRcdFx0VGhlcmUgaXMgdHdvIHR5cGVzIG9mIGNvdW50ZG93bjogZHVlX2RhdGUgKER1ZSBEYXRlKSwgZXZlciAoRXZlcmdyZWVuIHRpbWVyKVxuXHRcdFx0XHRcdFx0XHQxLiBcdGRhdGEtdHlwZT1cImR1ZV9kYXRlXCJcblx0XHRcdFx0XHRcdFx0XHRJbiB0aGlzIGNhc2UgeW91IGhhdmUgdG8gY2hhbmdlIHZhbHVlIG9mIGRhdGEtZGF0ZS4gRm9yIGV4YW1wbGU6XG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS1kYXRlPVwiT2N0b2JlciAxMywgMjAyMiAxMjozMDowMFwiXG5cdFx0XHRcdFx0XHRcdFx0SXQgd2lsbCBtZWFuIHRoYXQgbWludCB3aWxsIGZpbmlzaGVkIGF0IHRoaXMgdGltZVxuXG5cdFx0XHRcdFx0XHRcdDIuIFx0ZGF0YS10eXBlPVwiZXZlclwiXG5cdFx0XHRcdFx0XHRcdFx0SW4gdGhpcyBjYXNlIHlvdSBoYXZlIHRvIGNoYW5nZSB2YWx1ZXMgb2YgZGF0YS1kYXlzLCBkYXRhLWhvdXJzLCBkYXRhLW1pbnV0ZXMgYW5kIGRhdGEtc2Vjb25kcy4gRm9yIGV4YW1wbGU6XG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS1kYXlzPVwiMzRcIlxuXHRcdFx0XHRcdFx0XHRcdGRhdGEtaG91cnM9XCIxMFwiXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS1taW51dGVzPVwiMjBcIlxuXHRcdFx0XHRcdFx0XHRcdGRhdGEtc2Vjb25kcz1cIjBcIlxuXHRcdFx0XHRcdFx0XHRcdEl0IHdpbGwgbWVhbiB0aGF0IHRoZSB0aW1lIGV4cGlyZXMgYWZ0ZXIgdGhpcyB0aW1lLCBidXQgd2hlbiB0aGUgcGFnZSBpcyByZWZyZXNoZWQsIHRoZSB2YWx1ZSB3aWxsIHJldHVybiBhZ2Fpbi4gSXQgbWVhbnMsIGl0IHdvbid0IGVuZC5cblx0XHRcdFx0XHRcdEFkZCBib3hlZCBjbGFzcyB0byBnZXQgIzEgdHlwZSBvZiBjb3VudGRvd25cblx0XHRcdFx0XHQqL31cbiAgICAgICAgICAgIDxoM1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZXRhcG9ydGFsX2ZuX2NvdW50ZG93biBib3hlZFwiXG4gICAgICAgICAgICAgIGRhdGEtdHlwZT1cImV2ZXJcIlxuICAgICAgICAgICAgICBkYXRhLWRhdGU9XCJPY3RvYmVyIDEzLCAyMDIyIDEyOjMwOjAwXCJcbiAgICAgICAgICAgICAgZGF0YS1kYXlzPXszNH1cbiAgICAgICAgICAgICAgZGF0YS1ob3Vycz17OX1cbiAgICAgICAgICAgICAgZGF0YS1taW51dGVzPXsyMH1cbiAgICAgICAgICAgICAgZGF0YS1zZWNvbmRzPXsxMH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2tvckRpZmZUaW1lIDw9IDBcbiAgICAgICAgICAgICAgICA/IFwi7Lm07Jq07Yq464uk7Jq0IOyiheujjFwiXG4gICAgICAgICAgICAgICAgOiBgJHtrb3JEYXlzfWQ6ICR7a29ySG91cnN9aDogJHtrb3JNaW51dGVzfW06ICR7a29yU2Vjb25kc31zYH1cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIHt1dGNEaWZmVGltZSA8PSAwXG4gICAgICAgICAgICAgICAgPyBcIuy5tOyatO2KuOuLpOyatCDsooXro4xcIlxuICAgICAgICAgICAgICAgIDogYCR7dXRjRGF5c31kOiAke3V0Y0hvdXJzfWg6ICR7dXRjTWludXRlc31tOiAke3V0Y1NlY29uZHN9c2B9XG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29vbl90aXRsZVwiPlxuICAgICAgICAgICAgPGgzXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZuX19tYWludGl0bGVcIlxuICAgICAgICAgICAgICBkYXRhLXRleHQ9XCJQdWJsaWMgTWludGluZyBpcyBDb21pbmcgU29vblwiXG4gICAgICAgICAgICAgIGRhdGEtYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBQdWJsaWMgTWludGluZyBpcyBDb21pbmcgU29vblxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBPdXIgd2Vic2l0ZSBpcyBjb21pbmcgc29vbi4gV2UgYXJlIGN1cnJlbnRseSB3b3JraW5nIG9uIG91clxuICAgICAgICAgICAgICB3ZWJzaXRlLiBQbGVhc2UgY2hlY2sgYWdhaW4gd2l0aGluIGNvdXBsZSBkYXlzLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IENvbWluZ1Nvb247XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMYXlvdXQiLCJDb21pbmdTb29uIiwia29yRGlmZlRpbWUiLCJzZXRLb3JEaWZmVGltZSIsImtvckRheXMiLCJzZXRLb3JEYXlzIiwia29ySG91cnMiLCJzZXRLb3JIb3VycyIsImtvck1pbnV0ZXMiLCJzZXRLb3JNaW51dGVzIiwia29yU2Vjb25kcyIsInNldEtvclNlY29uZHMiLCJ1dGNEaWZmVGltZSIsInNldFVUQ0RpZmZUaW1lIiwidXRjRGF5cyIsInNldFVUQ0RheXMiLCJ1dGNIb3VycyIsInNldFVUQ0hvdXJzIiwidXRjTWludXRlcyIsInNldFVUQ01pbnV0ZXMiLCJ1dGNTZWNvbmRzIiwic2V0VVRDU2Vjb25kcyIsInNob3dLb3JDb3VudGRvd24iLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJrb3JDdXJyZW50VGltZSIsIkRhdGUiLCJrb3JUYXJnZXRUaW1lIiwiY2xlYXJJbnRlcnZhbCIsImNvbnNvbGUiLCJsb2ciLCJkYXlzIiwiTWF0aCIsImZsb29yIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsInNob3dVVENDb3VudERvd24iLCJrMSIsInUxIiwiZ2V0VGltZSIsImdldFRpbWV6b25lT2Zmc2V0IiwicGFnZVRpdGxlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJkYXRhLXR5cGUiLCJkYXRhLWRhdGUiLCJkYXRhLWRheXMiLCJkYXRhLWhvdXJzIiwiZGF0YS1taW51dGVzIiwiZGF0YS1zZWNvbmRzIiwiYnIiLCJkYXRhLXRleHQiLCJkYXRhLWFsaWduIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/coming-soon.js\n"));

/***/ })

});