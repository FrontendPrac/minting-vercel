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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/layout/Layout */ \"./src/layout/Layout.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar ComingSoon = function() {\n    _s();\n    // Get Kor remaining time\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), korDiffTime = ref[0], setKorDiffTime = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), korDays = ref1[0], setKorDays = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), korHours = ref2[0], setKorHours = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), korMinutes = ref3[0], setKorMinutes = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), korSeconds = ref4[0], setKorSeconds = ref4[1];\n    // Get UTC remaining time\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), utcDiffTime = ref5[0], setUTCDiffTime = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), utcDays = ref6[0], setUTCDays = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), utcHours = ref7[0], setUTCHours = ref7[1];\n    var ref8 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), utcMinutes = ref8[0], setUTCMinutes = ref8[1];\n    var ref9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), utcSeconds = ref9[0], setUTCSeconds = ref9[1];\n    var showKorCountdown = function() {\n        var intervalId = setInterval(function() {\n            var korCurrentTime = new Date();\n            var korTargetTime = new Date(\"2023/09/07 19:00:00\");\n            var korDiffTime = korTargetTime - korCurrentTime;\n            if (korDiffTime <= 0) {\n                setDiffTime(0);\n                clearInterval(intervalId);\n                console.log(\"타이머 종료\");\n            } else {\n                var days = Math.floor(korDiffTime / (1000 * 60 * 60 * 24));\n                var hours = Math.floor(korDiffTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));\n                var minutes = Math.floor(korDiffTime % (1000 * 60 * 60) / (1000 * 60));\n                var seconds = Math.floor(korDiffTime % (1000 * 60) / 1000);\n                setKorDays(days);\n                setKorHours(hours);\n                setKorMinutes(minutes);\n                setKorSeconds(seconds);\n                setKorDiffTime(korDiffTime);\n            }\n        }, 1000);\n    };\n    var showUTCCountDown = function() {\n        var intervalId = setInterval(function() {\n            var currentTime = new Date();\n            var utcCurrentTime = currentTime.getTimezoneOffset() * 60000;\n            var utcTargetTime = new Date(\"2023/09/07 19:00:00\");\n            var utcDiffTime = utcTargetTime - utcCurrentTime;\n            if (utcDiffTime <= 0) {\n                setDiffTime(0);\n                clearInterval(intervalId);\n                console.log(\"타이머 종료\");\n            } else {\n                var days = Math.floor(korDiffTime / (1000 * 60 * 60 * 24));\n                var hours = Math.floor(korDiffTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));\n                var minutes = Math.floor(korDiffTime % (1000 * 60 * 60) / (1000 * 60));\n                var seconds = Math.floor(korDiffTime % (1000 * 60) / 1000);\n                setKorDays(days);\n                setKorHours(hours);\n                setKorMinutes(minutes);\n                setKorSeconds(seconds);\n                setKorDiffTime(korDiffTime);\n            }\n        }, 1000);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        showKorCountdown();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_layout_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        pageTitle: \"Coming Soon\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"metaportal_fn_coming_soon\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"soon_countdown\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"metaportal_fn_countdown boxed\",\n                            \"data-type\": \"ever\",\n                            \"data-date\": \"October 13, 2022 12:30:00\",\n                            \"data-days\": 34,\n                            \"data-hours\": 9,\n                            \"data-minutes\": 20,\n                            \"data-seconds\": 10,\n                            children: korDiffTime <= 0 ? \"카운트다운 종료\" : \"\".concat(korDays, \"d: \").concat(korHours, \"h: \").concat(korMinutes, \"m: \").concat(korSeconds, \"s\")\n                        }, void 0, false, {\n                            fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                            lineNumber: 106,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                        lineNumber: 89,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"soon_title\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"fn__maintitle\",\n                                \"data-text\": \"Public Minting is Coming Soon\",\n                                \"data-align\": \"center\",\n                                children: \"Public Minting is Coming Soon\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                                lineNumber: 121,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Our website is coming soon. We are currently working on our website. Please check again within couple days.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                                lineNumber: 128,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                        lineNumber: 120,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                lineNumber: 88,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n            lineNumber: 87,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, _this);\n};\n_s(ComingSoon, \"kaQ5va6noafkHxSuBKWEIHmUYUo=\");\n_c = ComingSoon;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ComingSoon);\nvar _c;\n$RefreshReg$(_c, \"ComingSoon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkYsT0FBTyxFQUFDLEtBQUcsQ0FBVyxDQUFLSSxNQUFVLENBQXhCRixRQUFRLEVBQUMsS0FBRyxDQUFhLENBQUtJLE1BQVUsQ0FBMUJGLFVBQVUsRUFBQyxLQUFHLENBQWEsT0FBQyxDQUFaRSxVQUFVLEVBQUMsR0FBQyxDQUFDOzs7OztpQ0FDNUQ7Ozs7OzZCQUNEO2tDQUNOLDhEQUFDa0MsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLFlBQVk7OzBDQUN6Qiw4REFBQ0MsSUFBRTtnQ0FDREQsU0FBUyxFQUFDLGVBQWU7Z0NBQ3pCUSxXQUFTLEVBQUMsK0JBQStCO2dDQUN6Q0MsWUFBVSxFQUFDLFFBQVE7MENBQ3BCLCtCQUVEOzs7OztxQ0FBSzswQ0FDTCw4REFBQ0MsR0FBQzswQ0FBQyw2R0FHSDs7Ozs7cUNBQUk7Ozs7Ozs2QkFDQTs7Ozs7O3FCQUNGOzs7OztpQkFDRjs7Ozs7YUFDQyxDQUNUO0FBQ0osQ0FBQztHQXRJS3RELFVBQVU7QUFBVkEsS0FBQUEsVUFBVTtBQXVJaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21pbmctc29vbi5qcz9mNjQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL3NyYy9sYXlvdXQvTGF5b3V0XCI7XG5jb25zdCBDb21pbmdTb29uID0gKCkgPT4ge1xuICAvLyBHZXQgS29yIHJlbWFpbmluZyB0aW1lXG4gIGNvbnN0IFtrb3JEaWZmVGltZSwgc2V0S29yRGlmZlRpbWVdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2tvckRheXMsIHNldEtvckRheXNdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2tvckhvdXJzLCBzZXRLb3JIb3Vyc10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBba29yTWludXRlcywgc2V0S29yTWludXRlc10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBba29yU2Vjb25kcywgc2V0S29yU2Vjb25kc10gPSB1c2VTdGF0ZSgpO1xuXG4gIC8vIEdldCBVVEMgcmVtYWluaW5nIHRpbWVcbiAgY29uc3QgW3V0Y0RpZmZUaW1lLCBzZXRVVENEaWZmVGltZV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbdXRjRGF5cywgc2V0VVRDRGF5c10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbdXRjSG91cnMsIHNldFVUQ0hvdXJzXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFt1dGNNaW51dGVzLCBzZXRVVENNaW51dGVzXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFt1dGNTZWNvbmRzLCBzZXRVVENTZWNvbmRzXSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3Qgc2hvd0tvckNvdW50ZG93biA9ICgpID0+IHtcbiAgICBjb25zdCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgY29uc3Qga29yQ3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICBjb25zdCBrb3JUYXJnZXRUaW1lID0gbmV3IERhdGUoXCIyMDIzLzA5LzA3IDE5OjAwOjAwXCIpO1xuXG4gICAgICBjb25zdCBrb3JEaWZmVGltZSA9IGtvclRhcmdldFRpbWUgLSBrb3JDdXJyZW50VGltZTtcblxuICAgICAgaWYgKGtvckRpZmZUaW1lIDw9IDApIHtcbiAgICAgICAgc2V0RGlmZlRpbWUoMCk7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi7YOA7J2066i4IOyiheujjFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGRheXMgPSBNYXRoLmZsb29yKGtvckRpZmZUaW1lIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKFxuICAgICAgICAgIChrb3JEaWZmVGltZSAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKFxuICAgICAgICAgIChrb3JEaWZmVGltZSAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MClcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKGtvckRpZmZUaW1lICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XG5cbiAgICAgICAgc2V0S29yRGF5cyhkYXlzKTtcbiAgICAgICAgc2V0S29ySG91cnMoaG91cnMpO1xuICAgICAgICBzZXRLb3JNaW51dGVzKG1pbnV0ZXMpO1xuICAgICAgICBzZXRLb3JTZWNvbmRzKHNlY29uZHMpO1xuICAgICAgICBzZXRLb3JEaWZmVGltZShrb3JEaWZmVGltZSk7XG4gICAgICB9XG4gICAgfSwgMTAwMCk7XG4gIH07XG5cbiAgY29uc3Qgc2hvd1VUQ0NvdW50RG93biA9ICgpID0+IHtcbiAgICBjb25zdCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgICAgY29uc3QgdXRjQ3VycmVudFRpbWUgPSBjdXJyZW50VGltZS5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDA7XG5cbiAgICAgIGNvbnN0IHV0Y1RhcmdldFRpbWUgPSBuZXcgRGF0ZShcIjIwMjMvMDkvMDcgMTk6MDA6MDBcIik7XG5cbiAgICAgIGNvbnN0IHV0Y0RpZmZUaW1lID0gdXRjVGFyZ2V0VGltZSAtIHV0Y0N1cnJlbnRUaW1lO1xuXG4gICAgICBpZiAodXRjRGlmZlRpbWUgPD0gMCkge1xuICAgICAgICBzZXREaWZmVGltZSgwKTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgICAgICAgY29uc29sZS5sb2coXCLtg4DsnbTrqLgg7KKF66OMXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3Ioa29yRGlmZlRpbWUgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgICAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IoXG4gICAgICAgICAgKGtvckRpZmZUaW1lICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MClcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoXG4gICAgICAgICAgKGtvckRpZmZUaW1lICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcigoa29yRGlmZlRpbWUgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcblxuICAgICAgICBzZXRLb3JEYXlzKGRheXMpO1xuICAgICAgICBzZXRLb3JIb3Vycyhob3Vycyk7XG4gICAgICAgIHNldEtvck1pbnV0ZXMobWludXRlcyk7XG4gICAgICAgIHNldEtvclNlY29uZHMoc2Vjb25kcyk7XG4gICAgICAgIHNldEtvckRpZmZUaW1lKGtvckRpZmZUaW1lKTtcbiAgICAgIH1cbiAgICB9LCAxMDAwKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNob3dLb3JDb3VudGRvd24oKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBwYWdlVGl0bGU9e1wiQ29taW5nIFNvb25cIn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGFwb3J0YWxfZm5fY29taW5nX3Nvb25cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvb25fY291bnRkb3duXCI+XG4gICAgICAgICAgICB7LyogXG5cdFx0XHRcdFx0XHRUaGVyZSBpcyB0d28gdHlwZXMgb2YgY291bnRkb3duOiBkdWVfZGF0ZSAoRHVlIERhdGUpLCBldmVyIChFdmVyZ3JlZW4gdGltZXIpXG5cdFx0XHRcdFx0XHRcdDEuIFx0ZGF0YS10eXBlPVwiZHVlX2RhdGVcIlxuXHRcdFx0XHRcdFx0XHRcdEluIHRoaXMgY2FzZSB5b3UgaGF2ZSB0byBjaGFuZ2UgdmFsdWUgb2YgZGF0YS1kYXRlLiBGb3IgZXhhbXBsZTpcblx0XHRcdFx0XHRcdFx0XHRkYXRhLWRhdGU9XCJPY3RvYmVyIDEzLCAyMDIyIDEyOjMwOjAwXCJcblx0XHRcdFx0XHRcdFx0XHRJdCB3aWxsIG1lYW4gdGhhdCBtaW50IHdpbGwgZmluaXNoZWQgYXQgdGhpcyB0aW1lXG5cblx0XHRcdFx0XHRcdFx0Mi4gXHRkYXRhLXR5cGU9XCJldmVyXCJcblx0XHRcdFx0XHRcdFx0XHRJbiB0aGlzIGNhc2UgeW91IGhhdmUgdG8gY2hhbmdlIHZhbHVlcyBvZiBkYXRhLWRheXMsIGRhdGEtaG91cnMsIGRhdGEtbWludXRlcyBhbmQgZGF0YS1zZWNvbmRzLiBGb3IgZXhhbXBsZTpcblx0XHRcdFx0XHRcdFx0XHRkYXRhLWRheXM9XCIzNFwiXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS1ob3Vycz1cIjEwXCJcblx0XHRcdFx0XHRcdFx0XHRkYXRhLW1pbnV0ZXM9XCIyMFwiXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS1zZWNvbmRzPVwiMFwiXG5cdFx0XHRcdFx0XHRcdFx0SXQgd2lsbCBtZWFuIHRoYXQgdGhlIHRpbWUgZXhwaXJlcyBhZnRlciB0aGlzIHRpbWUsIGJ1dCB3aGVuIHRoZSBwYWdlIGlzIHJlZnJlc2hlZCwgdGhlIHZhbHVlIHdpbGwgcmV0dXJuIGFnYWluLiBJdCBtZWFucywgaXQgd29uJ3QgZW5kLlxuXHRcdFx0XHRcdFx0QWRkIGJveGVkIGNsYXNzIHRvIGdldCAjMSB0eXBlIG9mIGNvdW50ZG93blxuXHRcdFx0XHRcdCovfVxuICAgICAgICAgICAgPGgzXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1ldGFwb3J0YWxfZm5fY291bnRkb3duIGJveGVkXCJcbiAgICAgICAgICAgICAgZGF0YS10eXBlPVwiZXZlclwiXG4gICAgICAgICAgICAgIGRhdGEtZGF0ZT1cIk9jdG9iZXIgMTMsIDIwMjIgMTI6MzA6MDBcIlxuICAgICAgICAgICAgICBkYXRhLWRheXM9ezM0fVxuICAgICAgICAgICAgICBkYXRhLWhvdXJzPXs5fVxuICAgICAgICAgICAgICBkYXRhLW1pbnV0ZXM9ezIwfVxuICAgICAgICAgICAgICBkYXRhLXNlY29uZHM9ezEwfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7a29yRGlmZlRpbWUgPD0gMFxuICAgICAgICAgICAgICAgID8gXCLsubTsmrTtirjri6TsmrQg7KKF66OMXCJcbiAgICAgICAgICAgICAgICA6IGAke2tvckRheXN9ZDogJHtrb3JIb3Vyc31oOiAke2tvck1pbnV0ZXN9bTogJHtrb3JTZWNvbmRzfXNgfVxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvb25fdGl0bGVcIj5cbiAgICAgICAgICAgIDxoM1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbl9fbWFpbnRpdGxlXCJcbiAgICAgICAgICAgICAgZGF0YS10ZXh0PVwiUHVibGljIE1pbnRpbmcgaXMgQ29taW5nIFNvb25cIlxuICAgICAgICAgICAgICBkYXRhLWFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgUHVibGljIE1pbnRpbmcgaXMgQ29taW5nIFNvb25cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgT3VyIHdlYnNpdGUgaXMgY29taW5nIHNvb24uIFdlIGFyZSBjdXJyZW50bHkgd29ya2luZyBvbiBvdXJcbiAgICAgICAgICAgICAgd2Vic2l0ZS4gUGxlYXNlIGNoZWNrIGFnYWluIHdpdGhpbiBjb3VwbGUgZGF5cy5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBDb21pbmdTb29uO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGF5b3V0IiwiQ29taW5nU29vbiIsImtvckRpZmZUaW1lIiwic2V0S29yRGlmZlRpbWUiLCJrb3JEYXlzIiwic2V0S29yRGF5cyIsImtvckhvdXJzIiwic2V0S29ySG91cnMiLCJrb3JNaW51dGVzIiwic2V0S29yTWludXRlcyIsImtvclNlY29uZHMiLCJzZXRLb3JTZWNvbmRzIiwidXRjRGlmZlRpbWUiLCJzZXRVVENEaWZmVGltZSIsInV0Y0RheXMiLCJzZXRVVENEYXlzIiwidXRjSG91cnMiLCJzZXRVVENIb3VycyIsInV0Y01pbnV0ZXMiLCJzZXRVVENNaW51dGVzIiwidXRjU2Vjb25kcyIsInNldFVUQ1NlY29uZHMiLCJzaG93S29yQ291bnRkb3duIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwia29yQ3VycmVudFRpbWUiLCJEYXRlIiwia29yVGFyZ2V0VGltZSIsInNldERpZmZUaW1lIiwiY2xlYXJJbnRlcnZhbCIsImNvbnNvbGUiLCJsb2ciLCJkYXlzIiwiTWF0aCIsImZsb29yIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsInNob3dVVENDb3VudERvd24iLCJjdXJyZW50VGltZSIsInV0Y0N1cnJlbnRUaW1lIiwiZ2V0VGltZXpvbmVPZmZzZXQiLCJ1dGNUYXJnZXRUaW1lIiwicGFnZVRpdGxlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJkYXRhLXR5cGUiLCJkYXRhLWRhdGUiLCJkYXRhLWRheXMiLCJkYXRhLWhvdXJzIiwiZGF0YS1taW51dGVzIiwiZGF0YS1zZWNvbmRzIiwiZGF0YS10ZXh0IiwiZGF0YS1hbGlnbiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/coming-soon.js\n"));

/***/ })

});