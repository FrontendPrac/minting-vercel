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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/layout/Layout */ \"./src/layout/Layout.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar ComingSoon = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), days = ref[0], setDays = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), hours = ref1[0], setHours = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), minutes = ref2[0], setMinutes = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), seconds = ref3[0], setSeconds = ref3[1];\n    var showCountdown = function() {\n        var intervalId = setInterval(function() {\n            var currentTime = new Date().getTime();\n            var targetTime = new Date(\"2023/09/07 19:00:00\").getTime();\n            var diffTime = targetTime - currentTime;\n            if (diffTime <= 0) {\n                clearInterval(intervalId);\n                console.log(\"타이머 종료\");\n            } else {\n                var days = Math.floor(diffTime / (1000 * 60 * 60 * 24));\n                var hours = Math.floor(diffTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));\n                var minutes = Math.floor(diffTime % (1000 * 60 * 60) / (1000 * 60));\n                var seconds = Math.floor(diffTime % (1000 * 60) / 1000);\n                set;\n                console.log(\"남은 시간: \".concat(days, \"일 \").concat(hours, \"시간 \").concat(minutes, \"분 \").concat(seconds, \"초\"));\n            }\n        }, 1000);\n    };\n    // useEffect(() => {\n    //   showCountdown();\n    // }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_layout_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        pageTitle: \"Coming Soon\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"metaportal_fn_coming_soon\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"soon_countdown\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"metaportal_fn_countdown boxed\",\n                            \"data-type\": \"ever\",\n                            \"data-date\": \"October 13, 2022 12:30:00\",\n                            \"data-days\": 34,\n                            \"data-hours\": 9,\n                            \"data-minutes\": 20,\n                            \"data-seconds\": 10,\n                            children: \"0d: 0h: 0m: 0s\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                            lineNumber: 61,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"soon_title\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"fn__maintitle\",\n                                \"data-text\": \"Public Minting is Coming Soon\",\n                                \"data-align\": \"center\",\n                                children: \"Public Minting is Coming Soon\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Our website is coming soon. We are currently working on our website. Please check again within couple days.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, _this);\n};\n_s(ComingSoon, \"CT3f3t+i/xpPGLUDuIL2NrjZd+8=\");\n_c = ComingSoon;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ComingSoon);\nvar _c;\n$RefreshReg$(_c, \"ComingSoon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLEVBQUU7NEJBQ2JDLFlBQVUsRUFBRSxDQUFDOzRCQUNiQyxjQUFZLEVBQUUsRUFBRTs0QkFDaEJDLGNBQVksRUFBRSxFQUFFO3NDQUNqQixnQkFFRDs7Ozs7aUNBQUs7Ozs7OzZCQUNEO2tDQUNOLDhEQUFDUixLQUFHO3dCQUFDQyxTQUFTLEVBQUMsWUFBWTs7MENBQ3pCLDhEQUFDQyxJQUFFO2dDQUNERCxTQUFTLEVBQUMsZUFBZTtnQ0FDekJRLFdBQVMsRUFBQywrQkFBK0I7Z0NBQ3pDQyxZQUFVLEVBQUMsUUFBUTswQ0FDcEIsK0JBRUQ7Ozs7O3FDQUFLOzBDQUNMLDhEQUFDQyxHQUFDOzBDQUFDLDZHQUdIOzs7OztxQ0FBSTs7Ozs7OzZCQUNBOzs7Ozs7cUJBQ0Y7Ozs7O2lCQUNGOzs7OzthQUNDLENBQ1Q7QUFDSixDQUFDO0dBdkZLbkMsVUFBVTtBQUFWQSxLQUFBQSxVQUFVO0FBd0ZoQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbWluZy1zb29uLmpzP2Y2NDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vc3JjL2xheW91dC9MYXlvdXRcIjtcbmNvbnN0IENvbWluZ1Nvb24gPSAoKSA9PiB7XG4gIGNvbnN0IFtkYXlzLCBzZXREYXlzXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtob3Vycywgc2V0SG91cnNdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW21pbnV0ZXMsIHNldE1pbnV0ZXNdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3NlY29uZHMsIHNldFNlY29uZHNdID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCBzaG93Q291bnRkb3duID0gKCkgPT4ge1xuICAgIGNvbnN0IGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgY29uc3QgdGFyZ2V0VGltZSA9IG5ldyBEYXRlKFwiMjAyMy8wOS8wNyAxOTowMDowMFwiKS5nZXRUaW1lKCk7XG5cbiAgICAgIGNvbnN0IGRpZmZUaW1lID0gdGFyZ2V0VGltZSAtIGN1cnJlbnRUaW1lO1xuXG4gICAgICBpZiAoZGlmZlRpbWUgPD0gMCkge1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIu2DgOydtOuouCDsooXro4xcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcihkaWZmVGltZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcihcbiAgICAgICAgICAoZGlmZlRpbWUgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigoZGlmZlRpbWUgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcbiAgICAgICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKGRpZmZUaW1lICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XG5cbnNldFxuXG4gICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgIGDrgqjsnYAg7Iuc6rCEOiAke2RheXN97J28ICR7aG91cnN97Iuc6rCEICR7bWludXRlc33rtoQgJHtzZWNvbmRzfey0iGBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9LCAxMDAwKTtcbiAgfTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIHNob3dDb3VudGRvd24oKTtcbiAgLy8gfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBwYWdlVGl0bGU9e1wiQ29taW5nIFNvb25cIn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGFwb3J0YWxfZm5fY29taW5nX3Nvb25cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvb25fY291bnRkb3duXCI+XG4gICAgICAgICAgICB7LyogXG5cdFx0XHRcdFx0XHRUaGVyZSBpcyB0d28gdHlwZXMgb2YgY291bnRkb3duOiBkdWVfZGF0ZSAoRHVlIERhdGUpLCBldmVyIChFdmVyZ3JlZW4gdGltZXIpXG5cdFx0XHRcdFx0XHRcdDEuIFx0ZGF0YS10eXBlPVwiZHVlX2RhdGVcIlxuXHRcdFx0XHRcdFx0XHRcdEluIHRoaXMgY2FzZSB5b3UgaGF2ZSB0byBjaGFuZ2UgdmFsdWUgb2YgZGF0YS1kYXRlLiBGb3IgZXhhbXBsZTpcblx0XHRcdFx0XHRcdFx0XHRkYXRhLWRhdGU9XCJPY3RvYmVyIDEzLCAyMDIyIDEyOjMwOjAwXCJcblx0XHRcdFx0XHRcdFx0XHRJdCB3aWxsIG1lYW4gdGhhdCBtaW50IHdpbGwgZmluaXNoZWQgYXQgdGhpcyB0aW1lXG5cblx0XHRcdFx0XHRcdFx0Mi4gXHRkYXRhLXR5cGU9XCJldmVyXCJcblx0XHRcdFx0XHRcdFx0XHRJbiB0aGlzIGNhc2UgeW91IGhhdmUgdG8gY2hhbmdlIHZhbHVlcyBvZiBkYXRhLWRheXMsIGRhdGEtaG91cnMsIGRhdGEtbWludXRlcyBhbmQgZGF0YS1zZWNvbmRzLiBGb3IgZXhhbXBsZTpcblx0XHRcdFx0XHRcdFx0XHRkYXRhLWRheXM9XCIzNFwiXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS1ob3Vycz1cIjEwXCJcblx0XHRcdFx0XHRcdFx0XHRkYXRhLW1pbnV0ZXM9XCIyMFwiXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS1zZWNvbmRzPVwiMFwiXG5cdFx0XHRcdFx0XHRcdFx0SXQgd2lsbCBtZWFuIHRoYXQgdGhlIHRpbWUgZXhwaXJlcyBhZnRlciB0aGlzIHRpbWUsIGJ1dCB3aGVuIHRoZSBwYWdlIGlzIHJlZnJlc2hlZCwgdGhlIHZhbHVlIHdpbGwgcmV0dXJuIGFnYWluLiBJdCBtZWFucywgaXQgd29uJ3QgZW5kLlxuXHRcdFx0XHRcdFx0QWRkIGJveGVkIGNsYXNzIHRvIGdldCAjMSB0eXBlIG9mIGNvdW50ZG93blxuXHRcdFx0XHRcdCovfVxuICAgICAgICAgICAgPGgzXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1ldGFwb3J0YWxfZm5fY291bnRkb3duIGJveGVkXCJcbiAgICAgICAgICAgICAgZGF0YS10eXBlPVwiZXZlclwiXG4gICAgICAgICAgICAgIGRhdGEtZGF0ZT1cIk9jdG9iZXIgMTMsIDIwMjIgMTI6MzA6MDBcIlxuICAgICAgICAgICAgICBkYXRhLWRheXM9ezM0fVxuICAgICAgICAgICAgICBkYXRhLWhvdXJzPXs5fVxuICAgICAgICAgICAgICBkYXRhLW1pbnV0ZXM9ezIwfVxuICAgICAgICAgICAgICBkYXRhLXNlY29uZHM9ezEwfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAwZDogMGg6IDBtOiAwc1xuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvb25fdGl0bGVcIj5cbiAgICAgICAgICAgIDxoM1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbl9fbWFpbnRpdGxlXCJcbiAgICAgICAgICAgICAgZGF0YS10ZXh0PVwiUHVibGljIE1pbnRpbmcgaXMgQ29taW5nIFNvb25cIlxuICAgICAgICAgICAgICBkYXRhLWFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgUHVibGljIE1pbnRpbmcgaXMgQ29taW5nIFNvb25cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgT3VyIHdlYnNpdGUgaXMgY29taW5nIHNvb24uIFdlIGFyZSBjdXJyZW50bHkgd29ya2luZyBvbiBvdXJcbiAgICAgICAgICAgICAgd2Vic2l0ZS4gUGxlYXNlIGNoZWNrIGFnYWluIHdpdGhpbiBjb3VwbGUgZGF5cy5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBDb21pbmdTb29uO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGF5b3V0IiwiQ29taW5nU29vbiIsImRheXMiLCJzZXREYXlzIiwiaG91cnMiLCJzZXRIb3VycyIsIm1pbnV0ZXMiLCJzZXRNaW51dGVzIiwic2Vjb25kcyIsInNldFNlY29uZHMiLCJzaG93Q291bnRkb3duIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwiY3VycmVudFRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsInRhcmdldFRpbWUiLCJkaWZmVGltZSIsImNsZWFySW50ZXJ2YWwiLCJjb25zb2xlIiwibG9nIiwiTWF0aCIsImZsb29yIiwic2V0IiwicGFnZVRpdGxlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJkYXRhLXR5cGUiLCJkYXRhLWRhdGUiLCJkYXRhLWRheXMiLCJkYXRhLWhvdXJzIiwiZGF0YS1taW51dGVzIiwiZGF0YS1zZWNvbmRzIiwiZGF0YS10ZXh0IiwiZGF0YS1hbGlnbiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/coming-soon.js\n"));

/***/ })

});