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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/layout/Layout */ \"./src/layout/Layout.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar ComingSoon = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), diffTime = ref[0], setDiffTime = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), days = ref1[0], setDays = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), hours = ref2[0], setHours = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), minutes = ref3[0], setMinutes = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), seconds = ref4[0], setSeconds = ref4[1];\n    var showCountdown = function() {\n        var intervalId = setInterval(function() {\n            var currentTime = new Date();\n            var targetTime = new Date(\"2023/09/07 19:00:00\");\n            var diffTime = targetTime - currentTime;\n            if (diffTime <= 0) {\n                setDiffTime(0);\n                clearInterval(intervalId);\n                console.log(\"타이머 종료\");\n            } else {\n                var days = Math.floor(diffTime / (1000 * 60 * 60 * 24));\n                var hours = Math.floor(diffTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));\n                var minutes = Math.floor(diffTime % (1000 * 60 * 60) / (1000 * 60));\n                var seconds = Math.floor(diffTime % (1000 * 60) / 1000);\n                setDays(days);\n                setHours(hours);\n                setMinutes(minutes);\n                setSeconds(seconds);\n                setDiffTime(diffTime);\n            }\n        }, 1000);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        showCountdown();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_layout_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        pageTitle: \"Coming Soon\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"metaportal_fn_coming_soon\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"soon_countdown\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"metaportal_fn_countdown boxed\",\n                            \"data-type\": \"ever\",\n                            \"data-date\": \"October 13, 2022 12:30:00\",\n                            \"data-days\": 34,\n                            \"data-hours\": 9,\n                            \"data-minutes\": 20,\n                            \"data-seconds\": 10,\n                            children: diffTime <= 0 ? \"카운트다운 종료\" : \"\".concat(days, \"d: \").concat(hours, \"h: \").concat(minutes, \"m: \").concat(seconds, \"s\")\n                        }, void 0, false, {\n                            fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                            lineNumber: 63,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"soon_title\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"fn__maintitle\",\n                                \"data-text\": \"Public Minting is Coming Soon\",\n                                \"data-align\": \"center\",\n                                children: \"Public Minting is Coming Soon\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Our website is coming soon. We are currently working on our website. Please check again within couple days.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                                lineNumber: 85,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                        lineNumber: 77,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, _this);\n};\n_s(ComingSoon, \"soko+kVdAXU05EpV+66TjArSCrQ=\");\n_c = ComingSoon;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ComingSoon);\nvar _c;\n$RefreshReg$(_c, \"ComingSoon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NEVBQUNDLElBQUU7NEJBQ0RELFNBQVMsRUFBQywrQkFBK0I7NEJBQ3pDRSxXQUFTLEVBQUMsTUFBTTs0QkFDaEJDLFdBQVMsRUFBQywyQkFBMkI7NEJBQ3JDQyxXQUFTLEVBQUUsRUFBRTs0QkFDYkMsWUFBVSxFQUFFLENBQUM7NEJBQ2JDLGNBQVksRUFBRSxFQUFFOzRCQUNoQkMsY0FBWSxFQUFFLEVBQUU7c0NBRWY5QixRQUFRLElBQUksQ0FBQyxHQUNWLFVBQVUsR0FDVixFQUFDLENBQVlJLE1BQUssQ0FBZkYsSUFBSSxFQUFDLEtBQUcsQ0FBUSxDQUFLSSxNQUFPLENBQWxCRixLQUFLLEVBQUMsS0FBRyxDQUFVLENBQUtJLE1BQU8sQ0FBcEJGLE9BQU8sRUFBQyxLQUFHLENBQVUsT0FBQyxDQUFURSxPQUFPLEVBQUMsR0FBQyxDQUFDOzs7OztpQ0FDaEQ7Ozs7OzZCQUNEO2tDQUNOLDhEQUFDYyxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsWUFBWTs7MENBQ3pCLDhEQUFDQyxJQUFFO2dDQUNERCxTQUFTLEVBQUMsZUFBZTtnQ0FDekJRLFdBQVMsRUFBQywrQkFBK0I7Z0NBQ3pDQyxZQUFVLEVBQUMsUUFBUTswQ0FDcEIsK0JBRUQ7Ozs7O3FDQUFLOzBDQUNMLDhEQUFDQyxHQUFDOzBDQUFDLDZHQUdIOzs7OztxQ0FBSTs7Ozs7OzZCQUNBOzs7Ozs7cUJBQ0Y7Ozs7O2lCQUNGOzs7OzthQUNDLENBQ1Q7QUFDSixDQUFDO0dBM0ZLbEMsVUFBVTtBQUFWQSxLQUFBQSxVQUFVO0FBNEZoQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbWluZy1zb29uLmpzP2Y2NDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vc3JjL2xheW91dC9MYXlvdXRcIjtcbmNvbnN0IENvbWluZ1Nvb24gPSAoKSA9PiB7XG4gIGNvbnN0IFtkaWZmVGltZSwgc2V0RGlmZlRpbWVdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2RheXMsIHNldERheXNdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2hvdXJzLCBzZXRIb3Vyc10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbbWludXRlcywgc2V0TWludXRlc10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbc2Vjb25kcywgc2V0U2Vjb25kc10gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IHNob3dDb3VudGRvd24gPSAoKSA9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKTtcbiAgICAgIGNvbnN0IHRhcmdldFRpbWUgPSBuZXcgRGF0ZShcIjIwMjMvMDkvMDcgMTk6MDA6MDBcIik7XG5cbiAgICAgIGNvbnN0IGRpZmZUaW1lID0gdGFyZ2V0VGltZSAtIGN1cnJlbnRUaW1lO1xuXG4gICAgICBpZiAoZGlmZlRpbWUgPD0gMCkge1xuICAgICAgICBzZXREaWZmVGltZSgwKTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgICAgICAgY29uc29sZS5sb2coXCLtg4DsnbTrqLgg7KKF66OMXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IoZGlmZlRpbWUgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgICAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IoXG4gICAgICAgICAgKGRpZmZUaW1lICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MClcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKGRpZmZUaW1lICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSk7XG4gICAgICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKChkaWZmVGltZSAlICgxMDAwICogNjApKSAvIDEwMDApO1xuXG4gICAgICAgIHNldERheXMoZGF5cyk7XG4gICAgICAgIHNldEhvdXJzKGhvdXJzKTtcbiAgICAgICAgc2V0TWludXRlcyhtaW51dGVzKTtcbiAgICAgICAgc2V0U2Vjb25kcyhzZWNvbmRzKTtcbiAgICAgICAgc2V0RGlmZlRpbWUoZGlmZlRpbWUpO1xuICAgICAgfVxuICAgIH0sIDEwMDApO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2hvd0NvdW50ZG93bigpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHBhZ2VUaXRsZT17XCJDb21pbmcgU29vblwifT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWV0YXBvcnRhbF9mbl9jb21pbmdfc29vblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29vbl9jb3VudGRvd25cIj5cbiAgICAgICAgICAgIHsvKiBcblx0XHRcdFx0XHRcdFRoZXJlIGlzIHR3byB0eXBlcyBvZiBjb3VudGRvd246IGR1ZV9kYXRlIChEdWUgRGF0ZSksIGV2ZXIgKEV2ZXJncmVlbiB0aW1lcilcblx0XHRcdFx0XHRcdFx0MS4gXHRkYXRhLXR5cGU9XCJkdWVfZGF0ZVwiXG5cdFx0XHRcdFx0XHRcdFx0SW4gdGhpcyBjYXNlIHlvdSBoYXZlIHRvIGNoYW5nZSB2YWx1ZSBvZiBkYXRhLWRhdGUuIEZvciBleGFtcGxlOlxuXHRcdFx0XHRcdFx0XHRcdGRhdGEtZGF0ZT1cIk9jdG9iZXIgMTMsIDIwMjIgMTI6MzA6MDBcIlxuXHRcdFx0XHRcdFx0XHRcdEl0IHdpbGwgbWVhbiB0aGF0IG1pbnQgd2lsbCBmaW5pc2hlZCBhdCB0aGlzIHRpbWVcblxuXHRcdFx0XHRcdFx0XHQyLiBcdGRhdGEtdHlwZT1cImV2ZXJcIlxuXHRcdFx0XHRcdFx0XHRcdEluIHRoaXMgY2FzZSB5b3UgaGF2ZSB0byBjaGFuZ2UgdmFsdWVzIG9mIGRhdGEtZGF5cywgZGF0YS1ob3VycywgZGF0YS1taW51dGVzIGFuZCBkYXRhLXNlY29uZHMuIEZvciBleGFtcGxlOlxuXHRcdFx0XHRcdFx0XHRcdGRhdGEtZGF5cz1cIjM0XCJcblx0XHRcdFx0XHRcdFx0XHRkYXRhLWhvdXJzPVwiMTBcIlxuXHRcdFx0XHRcdFx0XHRcdGRhdGEtbWludXRlcz1cIjIwXCJcblx0XHRcdFx0XHRcdFx0XHRkYXRhLXNlY29uZHM9XCIwXCJcblx0XHRcdFx0XHRcdFx0XHRJdCB3aWxsIG1lYW4gdGhhdCB0aGUgdGltZSBleHBpcmVzIGFmdGVyIHRoaXMgdGltZSwgYnV0IHdoZW4gdGhlIHBhZ2UgaXMgcmVmcmVzaGVkLCB0aGUgdmFsdWUgd2lsbCByZXR1cm4gYWdhaW4uIEl0IG1lYW5zLCBpdCB3b24ndCBlbmQuXG5cdFx0XHRcdFx0XHRBZGQgYm94ZWQgY2xhc3MgdG8gZ2V0ICMxIHR5cGUgb2YgY291bnRkb3duXG5cdFx0XHRcdFx0Ki99XG4gICAgICAgICAgICA8aDNcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWV0YXBvcnRhbF9mbl9jb3VudGRvd24gYm94ZWRcIlxuICAgICAgICAgICAgICBkYXRhLXR5cGU9XCJldmVyXCJcbiAgICAgICAgICAgICAgZGF0YS1kYXRlPVwiT2N0b2JlciAxMywgMjAyMiAxMjozMDowMFwiXG4gICAgICAgICAgICAgIGRhdGEtZGF5cz17MzR9XG4gICAgICAgICAgICAgIGRhdGEtaG91cnM9ezl9XG4gICAgICAgICAgICAgIGRhdGEtbWludXRlcz17MjB9XG4gICAgICAgICAgICAgIGRhdGEtc2Vjb25kcz17MTB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtkaWZmVGltZSA8PSAwXG4gICAgICAgICAgICAgICAgPyBcIuy5tOyatO2KuOuLpOyatCDsooXro4xcIlxuICAgICAgICAgICAgICAgIDogYCR7ZGF5c31kOiAke2hvdXJzfWg6ICR7bWludXRlc31tOiAke3NlY29uZHN9c2B9XG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29vbl90aXRsZVwiPlxuICAgICAgICAgICAgPGgzXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZuX19tYWludGl0bGVcIlxuICAgICAgICAgICAgICBkYXRhLXRleHQ9XCJQdWJsaWMgTWludGluZyBpcyBDb21pbmcgU29vblwiXG4gICAgICAgICAgICAgIGRhdGEtYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBQdWJsaWMgTWludGluZyBpcyBDb21pbmcgU29vblxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBPdXIgd2Vic2l0ZSBpcyBjb21pbmcgc29vbi4gV2UgYXJlIGN1cnJlbnRseSB3b3JraW5nIG9uIG91clxuICAgICAgICAgICAgICB3ZWJzaXRlLiBQbGVhc2UgY2hlY2sgYWdhaW4gd2l0aGluIGNvdXBsZSBkYXlzLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IENvbWluZ1Nvb247XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMYXlvdXQiLCJDb21pbmdTb29uIiwiZGlmZlRpbWUiLCJzZXREaWZmVGltZSIsImRheXMiLCJzZXREYXlzIiwiaG91cnMiLCJzZXRIb3VycyIsIm1pbnV0ZXMiLCJzZXRNaW51dGVzIiwic2Vjb25kcyIsInNldFNlY29uZHMiLCJzaG93Q291bnRkb3duIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwiY3VycmVudFRpbWUiLCJEYXRlIiwidGFyZ2V0VGltZSIsImNsZWFySW50ZXJ2YWwiLCJjb25zb2xlIiwibG9nIiwiTWF0aCIsImZsb29yIiwicGFnZVRpdGxlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJkYXRhLXR5cGUiLCJkYXRhLWRhdGUiLCJkYXRhLWRheXMiLCJkYXRhLWhvdXJzIiwiZGF0YS1taW51dGVzIiwiZGF0YS1zZWNvbmRzIiwiZGF0YS10ZXh0IiwiZGF0YS1hbGlnbiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/coming-soon.js\n"));

/***/ })

});