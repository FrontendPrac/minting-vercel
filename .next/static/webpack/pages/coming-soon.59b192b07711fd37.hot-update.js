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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/layout/Layout */ \"./src/layout/Layout.js\");\nvar _this = undefined;\n\n\n\nvar ComingSoon = function() {\n    var showCountdown = function() {\n        var intervalId = setInterval(function() {\n            var currentTime = new Date().getTime();\n            var targetTime = new Date(\"2023/09/07 19:00:00\").getTime();\n            var targetTime2 = new Date(\"2023/09/07 19:00:00\").getTime();\n            var diffTime = targetTime - currentTime;\n            if (diffTime <= 0) {\n                clearInterval(intervalId);\n                console.log(\"타이머 종료\");\n            } else {\n                var days = Math.floor(diffTime / (1000 * 60 * 60 * 24));\n                var hours = Math.floor(diffTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));\n                var minutes = Math.floor(diffTime % (1000 * 60 * 60) / (1000 * 60));\n                var seconds = Math.floor(diffTime % (1000 * 60) / 1000);\n                console.log(\"남은 시간: \".concat(days, \"일 \").concat(hours, \"시간 \").concat(minutes, \"분 \").concat(seconds, \"초\"));\n            }\n        }, 1000);\n    };\n    // useEffect(() => {\n    //   showCountdown();\n    // }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_layout_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        pageTitle: \"Coming Soon\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"metaportal_fn_coming_soon\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"soon_countdown\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"metaportal_fn_countdown boxed\",\n                            \"data-type\": \"ever\",\n                            \"data-date\": \"October 13, 2022 12:30:00\",\n                            \"data-days\": 34,\n                            \"data-hours\": 9,\n                            \"data-minutes\": 20,\n                            \"data-seconds\": 10,\n                            children: \"0d: 0h: 0m: 0s\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                            lineNumber: 55,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"soon_title\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"fn__maintitle\",\n                                \"data-text\": \"Public Minting is Coming Soon\",\n                                \"data-align\": \"center\",\n                                children: \"Public Minting is Coming Soon\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Our website is coming soon. We are currently working on our website. Please check again within couple days.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, _this);\n};\n_c = ComingSoon;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ComingSoon);\nvar _c;\n$RefreshReg$(_c, \"ComingSoon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cUJBQ0Y7Ozs7O2lCQUNGOzs7OzthQUNDLENBQ1Q7QUFDSixDQUFDO0FBakZLL0IsS0FBQUEsVUFBVTtBQWtGaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21pbmctc29vbi5qcz9mNjQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vc3JjL2xheW91dC9MYXlvdXRcIjtcbmNvbnN0IENvbWluZ1Nvb24gPSAoKSA9PiB7XG4gIGNvbnN0IHNob3dDb3VudGRvd24gPSAoKSA9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICBjb25zdCB0YXJnZXRUaW1lID0gbmV3IERhdGUoXCIyMDIzLzA5LzA3IDE5OjAwOjAwXCIpLmdldFRpbWUoKTtcbiAgICAgIGNvbnN0IHRhcmdldFRpbWUyID0gbmV3IERhdGUoXCIyMDIzLzA5LzA3IDE5OjAwOjAwXCIpLmdldFRpbWUoKTtcblxuICAgICAgY29uc3QgZGlmZlRpbWUgPSB0YXJnZXRUaW1lIC0gY3VycmVudFRpbWU7XG5cbiAgICAgIGlmIChkaWZmVGltZSA8PSAwKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi7YOA7J2066i4IOyiheujjFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGRheXMgPSBNYXRoLmZsb29yKGRpZmZUaW1lIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKFxuICAgICAgICAgIChkaWZmVGltZSAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKChkaWZmVGltZSAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xuICAgICAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcigoZGlmZlRpbWUgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICBg64Ko7J2AIOyLnOqwhDogJHtkYXlzfeydvCAke2hvdXJzfeyLnOqwhCAke21pbnV0ZXN967aEICR7c2Vjb25kc33stIhgXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSwgMTAwMCk7XG4gIH07XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBzaG93Q291bnRkb3duKCk7XG4gIC8vIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgcGFnZVRpdGxlPXtcIkNvbWluZyBTb29uXCJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXRhcG9ydGFsX2ZuX2NvbWluZ19zb29uXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb29uX2NvdW50ZG93blwiPlxuICAgICAgICAgICAgey8qIFxuXHRcdFx0XHRcdFx0VGhlcmUgaXMgdHdvIHR5cGVzIG9mIGNvdW50ZG93bjogZHVlX2RhdGUgKER1ZSBEYXRlKSwgZXZlciAoRXZlcmdyZWVuIHRpbWVyKVxuXHRcdFx0XHRcdFx0XHQxLiBcdGRhdGEtdHlwZT1cImR1ZV9kYXRlXCJcblx0XHRcdFx0XHRcdFx0XHRJbiB0aGlzIGNhc2UgeW91IGhhdmUgdG8gY2hhbmdlIHZhbHVlIG9mIGRhdGEtZGF0ZS4gRm9yIGV4YW1wbGU6XG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS1kYXRlPVwiT2N0b2JlciAxMywgMjAyMiAxMjozMDowMFwiXG5cdFx0XHRcdFx0XHRcdFx0SXQgd2lsbCBtZWFuIHRoYXQgbWludCB3aWxsIGZpbmlzaGVkIGF0IHRoaXMgdGltZVxuXG5cdFx0XHRcdFx0XHRcdDIuIFx0ZGF0YS10eXBlPVwiZXZlclwiXG5cdFx0XHRcdFx0XHRcdFx0SW4gdGhpcyBjYXNlIHlvdSBoYXZlIHRvIGNoYW5nZSB2YWx1ZXMgb2YgZGF0YS1kYXlzLCBkYXRhLWhvdXJzLCBkYXRhLW1pbnV0ZXMgYW5kIGRhdGEtc2Vjb25kcy4gRm9yIGV4YW1wbGU6XG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS1kYXlzPVwiMzRcIlxuXHRcdFx0XHRcdFx0XHRcdGRhdGEtaG91cnM9XCIxMFwiXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS1taW51dGVzPVwiMjBcIlxuXHRcdFx0XHRcdFx0XHRcdGRhdGEtc2Vjb25kcz1cIjBcIlxuXHRcdFx0XHRcdFx0XHRcdEl0IHdpbGwgbWVhbiB0aGF0IHRoZSB0aW1lIGV4cGlyZXMgYWZ0ZXIgdGhpcyB0aW1lLCBidXQgd2hlbiB0aGUgcGFnZSBpcyByZWZyZXNoZWQsIHRoZSB2YWx1ZSB3aWxsIHJldHVybiBhZ2Fpbi4gSXQgbWVhbnMsIGl0IHdvbid0IGVuZC5cblx0XHRcdFx0XHRcdEFkZCBib3hlZCBjbGFzcyB0byBnZXQgIzEgdHlwZSBvZiBjb3VudGRvd25cblx0XHRcdFx0XHQqL31cbiAgICAgICAgICAgIDxoM1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZXRhcG9ydGFsX2ZuX2NvdW50ZG93biBib3hlZFwiXG4gICAgICAgICAgICAgIGRhdGEtdHlwZT1cImV2ZXJcIlxuICAgICAgICAgICAgICBkYXRhLWRhdGU9XCJPY3RvYmVyIDEzLCAyMDIyIDEyOjMwOjAwXCJcbiAgICAgICAgICAgICAgZGF0YS1kYXlzPXszNH1cbiAgICAgICAgICAgICAgZGF0YS1ob3Vycz17OX1cbiAgICAgICAgICAgICAgZGF0YS1taW51dGVzPXsyMH1cbiAgICAgICAgICAgICAgZGF0YS1zZWNvbmRzPXsxMH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgMGQ6IDBoOiAwbTogMHNcbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb29uX3RpdGxlXCI+XG4gICAgICAgICAgICA8aDNcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm5fX21haW50aXRsZVwiXG4gICAgICAgICAgICAgIGRhdGEtdGV4dD1cIlB1YmxpYyBNaW50aW5nIGlzIENvbWluZyBTb29uXCJcbiAgICAgICAgICAgICAgZGF0YS1hbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFB1YmxpYyBNaW50aW5nIGlzIENvbWluZyBTb29uXG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIE91ciB3ZWJzaXRlIGlzIGNvbWluZyBzb29uLiBXZSBhcmUgY3VycmVudGx5IHdvcmtpbmcgb24gb3VyXG4gICAgICAgICAgICAgIHdlYnNpdGUuIFBsZWFzZSBjaGVjayBhZ2FpbiB3aXRoaW4gY291cGxlIGRheXMuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQ29taW5nU29vbjtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJMYXlvdXQiLCJDb21pbmdTb29uIiwic2hvd0NvdW50ZG93biIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbCIsImN1cnJlbnRUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJ0YXJnZXRUaW1lIiwidGFyZ2V0VGltZTIiLCJkaWZmVGltZSIsImNsZWFySW50ZXJ2YWwiLCJjb25zb2xlIiwibG9nIiwiZGF5cyIsIk1hdGgiLCJmbG9vciIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJwYWdlVGl0bGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsImRhdGEtdHlwZSIsImRhdGEtZGF0ZSIsImRhdGEtZGF5cyIsImRhdGEtaG91cnMiLCJkYXRhLW1pbnV0ZXMiLCJkYXRhLXNlY29uZHMiLCJkYXRhLXRleHQiLCJkYXRhLWFsaWduIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/coming-soon.js\n"));

/***/ })

});