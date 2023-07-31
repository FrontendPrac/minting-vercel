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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/layout/Layout */ \"./src/layout/Layout.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar ComingSoon = function() {\n    _s();\n    // Get Kor remaining time\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), korDiffTime = ref[0], setKorDiffTime = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), korDays = ref1[0], setKorDays = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), korHours = ref2[0], setKorHours = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), korMinutes = ref3[0], setKorMinutes = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), korSeconds = ref4[0], setKorSeconds = ref4[1];\n    // Get UTC remaining time\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), utcDiffTime = ref5[0], setUTCDiffTime = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), utcDays = ref6[0], setUTCDays = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), utcHours = ref7[0], setUTCHours = ref7[1];\n    var ref8 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), utcMinutes = ref8[0], setUTCMinutes = ref8[1];\n    var ref9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), utcSeconds = ref9[0], setUTCSeconds = ref9[1];\n    var showKorCountdown = function() {\n        var intervalId = setInterval(function() {\n            var korCurrentTime = new Date();\n            var korTargetTime = new Date(\"2023/07/07 19:00:00\"); // KST 입력\n            var korDiffTime = korTargetTime - korCurrentTime;\n            if (korDiffTime <= 0) {\n                setKorDiffTime(0);\n                clearInterval(intervalId);\n                console.log(\"한국 타이머 종료\");\n            } else {\n                var days = Math.floor(korDiffTime / (1000 * 60 * 60 * 24));\n                var hours = Math.floor(korDiffTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));\n                var minutes = Math.floor(korDiffTime % (1000 * 60 * 60) / (1000 * 60));\n                var seconds = Math.floor(korDiffTime % (1000 * 60) / 1000);\n                setKorDays(days);\n                setKorHours(hours);\n                setKorMinutes(minutes);\n                setKorSeconds(seconds);\n                setKorDiffTime(korDiffTime);\n            }\n        }, 1000);\n    };\n    var showUTCCountDown = function() {\n        var intervalId = setInterval(function() {\n            var korCurrentTime = new Date();\n            var utcCurrentTime = new Date(korCurrentTime.getTime() + korCurrentTime.getTimezoneOffset() * 60 * 1000);\n            var korTargetTime = new Date(\"2023/09/07 10:00:00\"); // UTC 입력\n            var utcTargetTime = new Date(korTargetTime.getTime() + korTargetTime.getTimezoneOffset() * 60 * 1000);\n            var utcDiffTime = utcTargetTime - utcCurrentTime;\n            if (utcDiffTime <= 0) {\n                setUTCDiffTime(0);\n                clearInterval(intervalId);\n                console.log(\"미국 타이머 종료\");\n            } else {\n                var days = Math.floor(utcDiffTime / (1000 * 60 * 60 * 24));\n                var hours = Math.floor(utcDiffTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));\n                var minutes = Math.floor(utcDiffTime % (1000 * 60 * 60) / (1000 * 60));\n                var seconds = Math.floor(utcDiffTime % (1000 * 60) / 1000);\n                setUTCDays(days);\n                setUTCHours(hours);\n                setUTCMinutes(minutes);\n                setUTCSeconds(seconds);\n                setUTCDiffTime(utcDiffTime);\n            }\n        }, 1000);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        showKorCountdown();\n        showUTCCountDown();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_layout_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        pageTitle: \"Coming Soon\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"metaportal_fn_coming_soon\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"soon_countdown\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"metaportal_fn_countdown boxed\",\n                            \"data-type\": \"ever\",\n                            \"data-date\": \"October 13, 2022 12:30:00\",\n                            \"data-days\": 34,\n                            \"data-hours\": 9,\n                            \"data-minutes\": 20,\n                            \"data-seconds\": 10,\n                            children: [\n                                korDiffTime <= 0 ? \"카운트다운 종료\" : \"\".concat(korDays, \"d: \").concat(korHours, \"h: \").concat(korMinutes, \"m: \").concat(korSeconds, \"s\"),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                                    lineNumber: 125,\n                                    columnNumber: 15\n                                }, _this),\n                                utcDiffTime <= 0 ? \"카운트다운 종료\" : \"\".concat(utcDays, \"d: \").concat(utcHours, \"h: \").concat(utcMinutes, \"m: \").concat(utcSeconds, \"s\")\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                            lineNumber: 113,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                        lineNumber: 96,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"soon_title\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"fn__maintitle\",\n                                \"data-text\": \"Public Minting is Coming Soon\",\n                                \"data-align\": \"center\",\n                                children: \"Public Minting is Coming Soon\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                                lineNumber: 132,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Our website is coming soon. We are currently working on our website. Please check again within couple days.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                                lineNumber: 139,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                        lineNumber: 131,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n                lineNumber: 95,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n            lineNumber: 94,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/kidongg/Desktop/dream-bridge-react/pages/coming-soon.js\",\n        lineNumber: 93,\n        columnNumber: 5\n    }, _this);\n};\n_s(ComingSoon, \"kaQ5va6noafkHxSuBKWEIHmUYUo=\");\n_c = ComingSoon;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ComingSoon);\nvar _c;\n$RefreshReg$(_c, \"ComingSoon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Olsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21pbmctc29vbi5qcz9mNjQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL3NyYy9sYXlvdXQvTGF5b3V0XCI7XG5jb25zdCBDb21pbmdTb29uID0gKCkgPT4ge1xuICAvLyBHZXQgS29yIHJlbWFpbmluZyB0aW1lXG4gIGNvbnN0IFtrb3JEaWZmVGltZSwgc2V0S29yRGlmZlRpbWVdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2tvckRheXMsIHNldEtvckRheXNdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2tvckhvdXJzLCBzZXRLb3JIb3Vyc10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBba29yTWludXRlcywgc2V0S29yTWludXRlc10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBba29yU2Vjb25kcywgc2V0S29yU2Vjb25kc10gPSB1c2VTdGF0ZSgpO1xuXG4gIC8vIEdldCBVVEMgcmVtYWluaW5nIHRpbWVcbiAgY29uc3QgW3V0Y0RpZmZUaW1lLCBzZXRVVENEaWZmVGltZV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbdXRjRGF5cywgc2V0VVRDRGF5c10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbdXRjSG91cnMsIHNldFVUQ0hvdXJzXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFt1dGNNaW51dGVzLCBzZXRVVENNaW51dGVzXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFt1dGNTZWNvbmRzLCBzZXRVVENTZWNvbmRzXSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3Qgc2hvd0tvckNvdW50ZG93biA9ICgpID0+IHtcbiAgICBjb25zdCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgY29uc3Qga29yQ3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICBjb25zdCBrb3JUYXJnZXRUaW1lID0gbmV3IERhdGUoXCIyMDIzLzA3LzA3IDE5OjAwOjAwXCIpOyAgLy8gS1NUIOyeheugpVxuXG4gICAgICBjb25zdCBrb3JEaWZmVGltZSA9IGtvclRhcmdldFRpbWUgLSBrb3JDdXJyZW50VGltZTtcblxuICAgICAgaWYgKGtvckRpZmZUaW1lIDw9IDApIHtcbiAgICAgICAgc2V0S29yRGlmZlRpbWUoMCk7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi7ZWc6rWtIO2DgOydtOuouCDsooXro4xcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcihrb3JEaWZmVGltZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcihcbiAgICAgICAgICAoa29yRGlmZlRpbWUgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcihcbiAgICAgICAgICAoa29yRGlmZlRpbWUgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKChrb3JEaWZmVGltZSAlICgxMDAwICogNjApKSAvIDEwMDApO1xuXG4gICAgICAgIHNldEtvckRheXMoZGF5cyk7XG4gICAgICAgIHNldEtvckhvdXJzKGhvdXJzKTtcbiAgICAgICAgc2V0S29yTWludXRlcyhtaW51dGVzKTtcbiAgICAgICAgc2V0S29yU2Vjb25kcyhzZWNvbmRzKTtcbiAgICAgICAgc2V0S29yRGlmZlRpbWUoa29yRGlmZlRpbWUpO1xuICAgICAgfVxuICAgIH0sIDEwMDApO1xuICB9O1xuXG4gIGNvbnN0IHNob3dVVENDb3VudERvd24gPSAoKSA9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGNvbnN0IGtvckN1cnJlbnRUaW1lID0gbmV3IERhdGUoKTtcbiAgICAgIGNvbnN0IHV0Y0N1cnJlbnRUaW1lID0gbmV3IERhdGUoXG4gICAgICAgIGtvckN1cnJlbnRUaW1lLmdldFRpbWUoKSArXG4gICAgICAgICAga29yQ3VycmVudFRpbWUuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwICogMTAwMFxuICAgICAgKTtcblxuICAgICAgY29uc3Qga29yVGFyZ2V0VGltZSA9IG5ldyBEYXRlKFwiMjAyMy8wOS8wNyAxMDowMDowMFwiKTsgIC8vIFVUQyDsnoXroKVcbiAgICAgIGNvbnN0IHV0Y1RhcmdldFRpbWUgPSBuZXcgRGF0ZShcbiAgICAgICAga29yVGFyZ2V0VGltZS5nZXRUaW1lKCkgKyBrb3JUYXJnZXRUaW1lLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MCAqIDEwMDBcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IHV0Y0RpZmZUaW1lID0gdXRjVGFyZ2V0VGltZSAtIHV0Y0N1cnJlbnRUaW1lO1xuXG4gICAgICBpZiAodXRjRGlmZlRpbWUgPD0gMCkge1xuICAgICAgICBzZXRVVENEaWZmVGltZSgwKTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgICAgICAgY29uc29sZS5sb2coXCLrr7jqta0g7YOA7J2066i4IOyiheujjFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGRheXMgPSBNYXRoLmZsb29yKHV0Y0RpZmZUaW1lIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKFxuICAgICAgICAgICh1dGNEaWZmVGltZSAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKFxuICAgICAgICAgICh1dGNEaWZmVGltZSAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MClcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKHV0Y0RpZmZUaW1lICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XG5cbiAgICAgICAgc2V0VVRDRGF5cyhkYXlzKTtcbiAgICAgICAgc2V0VVRDSG91cnMoaG91cnMpO1xuICAgICAgICBzZXRVVENNaW51dGVzKG1pbnV0ZXMpO1xuICAgICAgICBzZXRVVENTZWNvbmRzKHNlY29uZHMpO1xuICAgICAgICBzZXRVVENEaWZmVGltZSh1dGNEaWZmVGltZSk7XG4gICAgICB9XG4gICAgfSwgMTAwMCk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzaG93S29yQ291bnRkb3duKCk7XG4gICAgc2hvd1VUQ0NvdW50RG93bigpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHBhZ2VUaXRsZT17XCJDb21pbmcgU29vblwifT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWV0YXBvcnRhbF9mbl9jb21pbmdfc29vblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29vbl9jb3VudGRvd25cIj5cbiAgICAgICAgICAgIHsvKiBcblx0XHRcdFx0XHRcdFRoZXJlIGlzIHR3byB0eXBlcyBvZiBjb3VudGRvd246IGR1ZV9kYXRlIChEdWUgRGF0ZSksIGV2ZXIgKEV2ZXJncmVlbiB0aW1lcilcblx0XHRcdFx0XHRcdFx0MS4gXHRkYXRhLXR5cGU9XCJkdWVfZGF0ZVwiXG5cdFx0XHRcdFx0XHRcdFx0SW4gdGhpcyBjYXNlIHlvdSBoYXZlIHRvIGNoYW5nZSB2YWx1ZSBvZiBkYXRhLWRhdGUuIEZvciBleGFtcGxlOlxuXHRcdFx0XHRcdFx0XHRcdGRhdGEtZGF0ZT1cIk9jdG9iZXIgMTMsIDIwMjIgMTI6MzA6MDBcIlxuXHRcdFx0XHRcdFx0XHRcdEl0IHdpbGwgbWVhbiB0aGF0IG1pbnQgd2lsbCBmaW5pc2hlZCBhdCB0aGlzIHRpbWVcblxuXHRcdFx0XHRcdFx0XHQyLiBcdGRhdGEtdHlwZT1cImV2ZXJcIlxuXHRcdFx0XHRcdFx0XHRcdEluIHRoaXMgY2FzZSB5b3UgaGF2ZSB0byBjaGFuZ2UgdmFsdWVzIG9mIGRhdGEtZGF5cywgZGF0YS1ob3VycywgZGF0YS1taW51dGVzIGFuZCBkYXRhLXNlY29uZHMuIEZvciBleGFtcGxlOlxuXHRcdFx0XHRcdFx0XHRcdGRhdGEtZGF5cz1cIjM0XCJcblx0XHRcdFx0XHRcdFx0XHRkYXRhLWhvdXJzPVwiMTBcIlxuXHRcdFx0XHRcdFx0XHRcdGRhdGEtbWludXRlcz1cIjIwXCJcblx0XHRcdFx0XHRcdFx0XHRkYXRhLXNlY29uZHM9XCIwXCJcblx0XHRcdFx0XHRcdFx0XHRJdCB3aWxsIG1lYW4gdGhhdCB0aGUgdGltZSBleHBpcmVzIGFmdGVyIHRoaXMgdGltZSwgYnV0IHdoZW4gdGhlIHBhZ2UgaXMgcmVmcmVzaGVkLCB0aGUgdmFsdWUgd2lsbCByZXR1cm4gYWdhaW4uIEl0IG1lYW5zLCBpdCB3b24ndCBlbmQuXG5cdFx0XHRcdFx0XHRBZGQgYm94ZWQgY2xhc3MgdG8gZ2V0ICMxIHR5cGUgb2YgY291bnRkb3duXG5cdFx0XHRcdFx0Ki99XG4gICAgICAgICAgICA8aDNcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWV0YXBvcnRhbF9mbl9jb3VudGRvd24gYm94ZWRcIlxuICAgICAgICAgICAgICBkYXRhLXR5cGU9XCJldmVyXCJcbiAgICAgICAgICAgICAgZGF0YS1kYXRlPVwiT2N0b2JlciAxMywgMjAyMiAxMjozMDowMFwiXG4gICAgICAgICAgICAgIGRhdGEtZGF5cz17MzR9XG4gICAgICAgICAgICAgIGRhdGEtaG91cnM9ezl9XG4gICAgICAgICAgICAgIGRhdGEtbWludXRlcz17MjB9XG4gICAgICAgICAgICAgIGRhdGEtc2Vjb25kcz17MTB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtrb3JEaWZmVGltZSA8PSAwXG4gICAgICAgICAgICAgICAgPyBcIuy5tOyatO2KuOuLpOyatCDsooXro4xcIlxuICAgICAgICAgICAgICAgIDogYCR7a29yRGF5c31kOiAke2tvckhvdXJzfWg6ICR7a29yTWludXRlc31tOiAke2tvclNlY29uZHN9c2B9XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICB7dXRjRGlmZlRpbWUgPD0gMFxuICAgICAgICAgICAgICAgID8gXCLsubTsmrTtirjri6TsmrQg7KKF66OMXCJcbiAgICAgICAgICAgICAgICA6IGAke3V0Y0RheXN9ZDogJHt1dGNIb3Vyc31oOiAke3V0Y01pbnV0ZXN9bTogJHt1dGNTZWNvbmRzfXNgfVxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvb25fdGl0bGVcIj5cbiAgICAgICAgICAgIDxoM1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbl9fbWFpbnRpdGxlXCJcbiAgICAgICAgICAgICAgZGF0YS10ZXh0PVwiUHVibGljIE1pbnRpbmcgaXMgQ29taW5nIFNvb25cIlxuICAgICAgICAgICAgICBkYXRhLWFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgUHVibGljIE1pbnRpbmcgaXMgQ29taW5nIFNvb25cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgT3VyIHdlYnNpdGUgaXMgY29taW5nIHNvb24uIFdlIGFyZSBjdXJyZW50bHkgd29ya2luZyBvbiBvdXJcbiAgICAgICAgICAgICAgd2Vic2l0ZS4gUGxlYXNlIGNoZWNrIGFnYWluIHdpdGhpbiBjb3VwbGUgZGF5cy5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBDb21pbmdTb29uO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGF5b3V0IiwiQ29taW5nU29vbiIsImtvckRpZmZUaW1lIiwic2V0S29yRGlmZlRpbWUiLCJrb3JEYXlzIiwic2V0S29yRGF5cyIsImtvckhvdXJzIiwic2V0S29ySG91cnMiLCJrb3JNaW51dGVzIiwic2V0S29yTWludXRlcyIsImtvclNlY29uZHMiLCJzZXRLb3JTZWNvbmRzIiwidXRjRGlmZlRpbWUiLCJzZXRVVENEaWZmVGltZSIsInV0Y0RheXMiLCJzZXRVVENEYXlzIiwidXRjSG91cnMiLCJzZXRVVENIb3VycyIsInV0Y01pbnV0ZXMiLCJzZXRVVENNaW51dGVzIiwidXRjU2Vjb25kcyIsInNldFVUQ1NlY29uZHMiLCJzaG93S29yQ291bnRkb3duIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwia29yQ3VycmVudFRpbWUiLCJEYXRlIiwia29yVGFyZ2V0VGltZSIsImNsZWFySW50ZXJ2YWwiLCJjb25zb2xlIiwibG9nIiwiZGF5cyIsIk1hdGgiLCJmbG9vciIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJzaG93VVRDQ291bnREb3duIiwidXRjQ3VycmVudFRpbWUiLCJnZXRUaW1lIiwiZ2V0VGltZXpvbmVPZmZzZXQiLCJ1dGNUYXJnZXRUaW1lIiwicGFnZVRpdGxlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJkYXRhLXR5cGUiLCJkYXRhLWRhdGUiLCJkYXRhLWRheXMiLCJkYXRhLWhvdXJzIiwiZGF0YS1taW51dGVzIiwiZGF0YS1zZWNvbmRzIiwiYnIiLCJkYXRhLXRleHQiLCJkYXRhLWFsaWduIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/coming-soon.js\n"));

/***/ })

});