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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/layout/Layout */ \"./src/layout/Layout.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar ComingSoon = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), diffTime = ref[0], setDiffTime = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), days = ref1[0], setDays = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), hours = ref2[0], setHours = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), minutes = ref3[0], setMinutes = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), seconds = ref4[0], setSeconds = ref4[1];\n    var showCountdown = function() {\n        var intervalId = setInterval(function() {\n            var currentTime = new Date().getTime();\n            var targetTime = new Date(\"2023/09/07 19:00:00\").getTime();\n            var targetTime2 = new Date(\"2023/07/28 15:08:00\").getTime();\n            var diffTime = targetTime - currentTime;\n            if (diffTime <= 0) {\n                clearInterval(intervalId);\n                console.log(\"타이머 종료\");\n            } else {\n                var days = Math.floor(diffTime / (1000 * 60 * 60 * 24));\n                var hours = Math.floor(diffTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));\n                var minutes = Math.floor(diffTime % (1000 * 60 * 60) / (1000 * 60));\n                var seconds = Math.floor(diffTime % (1000 * 60) / 1000);\n                setDays(days);\n                setHours(hours);\n                setMinutes(minutes);\n                setSeconds(seconds);\n                setDiffTime(diffTime);\n                console.log(\"남은 시간: \".concat(days, \"일 \").concat(hours, \"시간 \").concat(minutes, \"분 \").concat(seconds, \"초\"));\n            }\n        }, 1000);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        showCountdown();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_layout_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        pageTitle: \"Coming Soon\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"metaportal_fn_coming_soon\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"soon_countdown\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"metaportal_fn_countdown boxed\",\n                            \"data-type\": \"ever\",\n                            \"data-date\": \"October 13, 2022 12:30:00\",\n                            \"data-days\": 34,\n                            \"data-hours\": 9,\n                            \"data-minutes\": 20,\n                            \"data-seconds\": 10,\n                            children: diffTime <= 0 ? \"카운트다운 종료\" : \"\".concat(days, \"d: \").concat(hours, \"h: \").concat(minutes, \"m: \").concat(seconds, \"s\")\n                        }, void 0, false, {\n                            fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                            lineNumber: 67,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"soon_title\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"fn__maintitle\",\n                                \"data-text\": \"Public Minting is Coming Soon\",\n                                \"data-align\": \"center\",\n                                children: \"Public Minting is Coming Soon\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                                lineNumber: 82,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Our website is coming soon. We are currently working on our website. Please check again within couple days.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                        lineNumber: 81,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, _this);\n};\n_s(ComingSoon, \"soko+kVdAXU05EpV+66TjArSCrQ=\");\n_c = ComingSoon;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ComingSoon);\nvar _c;\n$RefreshReg$(_c, \"ComingSoon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVTtBQUFWQSxLQUFBQSxVQUFVO0FBZ0doQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbWluZy1zb29uLmpzP2Y2NDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vc3JjL2xheW91dC9MYXlvdXRcIjtcbmNvbnN0IENvbWluZ1Nvb24gPSAoKSA9PiB7XG4gIGNvbnN0IFtkaWZmVGltZSwgc2V0RGlmZlRpbWVdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2RheXMsIHNldERheXNdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2hvdXJzLCBzZXRIb3Vyc10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbbWludXRlcywgc2V0TWludXRlc10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbc2Vjb25kcywgc2V0U2Vjb25kc10gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IHNob3dDb3VudGRvd24gPSAoKSA9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICBjb25zdCB0YXJnZXRUaW1lID0gbmV3IERhdGUoXCIyMDIzLzA5LzA3IDE5OjAwOjAwXCIpLmdldFRpbWUoKTtcbiAgICAgIGNvbnN0IHRhcmdldFRpbWUyID0gbmV3IERhdGUoXCIyMDIzLzA3LzI4IDE1OjA4OjAwXCIpLmdldFRpbWUoKTtcblxuICAgICAgY29uc3QgZGlmZlRpbWUgPSB0YXJnZXRUaW1lIC0gY3VycmVudFRpbWU7XG5cbiAgICAgIGlmIChkaWZmVGltZSA8PSAwKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi7YOA7J2066i4IOyiheujjFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGRheXMgPSBNYXRoLmZsb29yKGRpZmZUaW1lIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKFxuICAgICAgICAgIChkaWZmVGltZSAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKChkaWZmVGltZSAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xuICAgICAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcigoZGlmZlRpbWUgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcblxuICAgICAgICBzZXREYXlzKGRheXMpO1xuICAgICAgICBzZXRIb3Vycyhob3Vycyk7XG4gICAgICAgIHNldE1pbnV0ZXMobWludXRlcyk7XG4gICAgICAgIHNldFNlY29uZHMoc2Vjb25kcyk7XG4gICAgICAgIHNldERpZmZUaW1lKGRpZmZUaW1lKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICBg64Ko7J2AIOyLnOqwhDogJHtkYXlzfeydvCAke2hvdXJzfeyLnOqwhCAke21pbnV0ZXN967aEICR7c2Vjb25kc33stIhgXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSwgMTAwMCk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzaG93Q291bnRkb3duKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgcGFnZVRpdGxlPXtcIkNvbWluZyBTb29uXCJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXRhcG9ydGFsX2ZuX2NvbWluZ19zb29uXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb29uX2NvdW50ZG93blwiPlxuICAgICAgICAgICAgey8qIFxuXHRcdFx0XHRcdFx0VGhlcmUgaXMgdHdvIHR5cGVzIG9mIGNvdW50ZG93bjogZHVlX2RhdGUgKER1ZSBEYXRlKSwgZXZlciAoRXZlcmdyZWVuIHRpbWVyKVxuXHRcdFx0XHRcdFx0XHQxLiBcdGRhdGEtdHlwZT1cImR1ZV9kYXRlXCJcblx0XHRcdFx0XHRcdFx0XHRJbiB0aGlzIGNhc2UgeW91IGhhdmUgdG8gY2hhbmdlIHZhbHVlIG9mIGRhdGEtZGF0ZS4gRm9yIGV4YW1wbGU6XG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS1kYXRlPVwiT2N0b2JlciAxMywgMjAyMiAxMjozMDowMFwiXG5cdFx0XHRcdFx0XHRcdFx0SXQgd2lsbCBtZWFuIHRoYXQgbWludCB3aWxsIGZpbmlzaGVkIGF0IHRoaXMgdGltZVxuXG5cdFx0XHRcdFx0XHRcdDIuIFx0ZGF0YS10eXBlPVwiZXZlclwiXG5cdFx0XHRcdFx0XHRcdFx0SW4gdGhpcyBjYXNlIHlvdSBoYXZlIHRvIGNoYW5nZSB2YWx1ZXMgb2YgZGF0YS1kYXlzLCBkYXRhLWhvdXJzLCBkYXRhLW1pbnV0ZXMgYW5kIGRhdGEtc2Vjb25kcy4gRm9yIGV4YW1wbGU6XG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS1kYXlzPVwiMzRcIlxuXHRcdFx0XHRcdFx0XHRcdGRhdGEtaG91cnM9XCIxMFwiXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS1taW51dGVzPVwiMjBcIlxuXHRcdFx0XHRcdFx0XHRcdGRhdGEtc2Vjb25kcz1cIjBcIlxuXHRcdFx0XHRcdFx0XHRcdEl0IHdpbGwgbWVhbiB0aGF0IHRoZSB0aW1lIGV4cGlyZXMgYWZ0ZXIgdGhpcyB0aW1lLCBidXQgd2hlbiB0aGUgcGFnZSBpcyByZWZyZXNoZWQsIHRoZSB2YWx1ZSB3aWxsIHJldHVybiBhZ2Fpbi4gSXQgbWVhbnMsIGl0IHdvbid0IGVuZC5cblx0XHRcdFx0XHRcdEFkZCBib3hlZCBjbGFzcyB0byBnZXQgIzEgdHlwZSBvZiBjb3VudGRvd25cblx0XHRcdFx0XHQqL31cbiAgICAgICAgICAgIDxoM1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZXRhcG9ydGFsX2ZuX2NvdW50ZG93biBib3hlZFwiXG4gICAgICAgICAgICAgIGRhdGEtdHlwZT1cImV2ZXJcIlxuICAgICAgICAgICAgICBkYXRhLWRhdGU9XCJPY3RvYmVyIDEzLCAyMDIyIDEyOjMwOjAwXCJcbiAgICAgICAgICAgICAgZGF0YS1kYXlzPXszNH1cbiAgICAgICAgICAgICAgZGF0YS1ob3Vycz17OX1cbiAgICAgICAgICAgICAgZGF0YS1taW51dGVzPXsyMH1cbiAgICAgICAgICAgICAgZGF0YS1zZWNvbmRzPXsxMH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2RpZmZUaW1lIDw9IDBcbiAgICAgICAgICAgICAgICA/IFwi7Lm07Jq07Yq464uk7Jq0IOyiheujjFwiXG4gICAgICAgICAgICAgICAgOiBgJHtkYXlzfWQ6ICR7aG91cnN9aDogJHttaW51dGVzfW06ICR7c2Vjb25kc31zYH1cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb29uX3RpdGxlXCI+XG4gICAgICAgICAgICA8aDNcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm5fX21haW50aXRsZVwiXG4gICAgICAgICAgICAgIGRhdGEtdGV4dD1cIlB1YmxpYyBNaW50aW5nIGlzIENvbWluZyBTb29uXCJcbiAgICAgICAgICAgICAgZGF0YS1hbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFB1YmxpYyBNaW50aW5nIGlzIENvbWluZyBTb29uXG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIE91ciB3ZWJzaXRlIGlzIGNvbWluZyBzb29uLiBXZSBhcmUgY3VycmVudGx5IHdvcmtpbmcgb24gb3VyXG4gICAgICAgICAgICAgIHdlYnNpdGUuIFBsZWFzZSBjaGVjayBhZ2FpbiB3aXRoaW4gY291cGxlIGRheXMuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQ29taW5nU29vbjtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxheW91dCIsIkNvbWluZ1Nvb24iLCJkaWZmVGltZSIsInNldERpZmZUaW1lIiwiZGF5cyIsInNldERheXMiLCJob3VycyIsInNldEhvdXJzIiwibWludXRlcyIsInNldE1pbnV0ZXMiLCJzZWNvbmRzIiwic2V0U2Vjb25kcyIsInNob3dDb3VudGRvd24iLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJjdXJyZW50VGltZSIsIkRhdGUiLCJnZXRUaW1lIiwidGFyZ2V0VGltZSIsInRhcmdldFRpbWUyIiwiY2xlYXJJbnRlcnZhbCIsImNvbnNvbGUiLCJsb2ciLCJNYXRoIiwiZmxvb3IiLCJwYWdlVGl0bGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsImRhdGEtdHlwZSIsImRhdGEtZGF0ZSIsImRhdGEtZGF5cyIsImRhdGEtaG91cnMiLCJkYXRhLW1pbnV0ZXMiLCJkYXRhLXNlY29uZHMiLCJkYXRhLXRleHQiLCJkYXRhLWFsaWduIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/coming-soon.js\n"));

/***/ })

});