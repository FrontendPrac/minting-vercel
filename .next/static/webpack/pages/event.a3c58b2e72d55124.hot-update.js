"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/event",{

/***/ "./src/components/eventpage/EventPicker.js":
/*!*************************************************!*\
  !*** ./src/components/eventpage/EventPicker.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\n\n\nvar EventPicker = function EventPicker() {\n  _s();\n\n  var rewards = [\"혜택1\", \"혜택2\", \"혜택3\"];\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n      result = _useState[0],\n      setResult = _useState[1];\n\n  var pickReward = function pickReward() {\n    var randomIndex = Math.floor(Math.random() * rewards.length); // console.log(\"randomIndex: \", randomIndex);\n\n    var selectedReward = rewards[randomIndex]; // console.log(\"selectedReward: \", selectedReward);\n\n    setResult(selectedReward);\n  }; // pickReward();\n\n\n  return;\n};\n\n_s(EventPicker, \"qoGl22B7WAXz9bHytSnRSI+DHp8=\");\n\n_c = EventPicker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventPicker);\n\nvar _c;\n\n$RefreshReg$(_c, \"EventPicker\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ldmVudHBhZ2UvRXZlbnRQaWNrZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFFQSxJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0VBQUE7O0VBQ3hCLElBQU1DLE9BQU8sR0FBRyxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FBZixDQUFoQjs7RUFDQSxnQkFBNEJGLCtDQUFRLENBQUMsRUFBRCxDQUFwQztFQUFBLElBQU9HLE1BQVA7RUFBQSxJQUFlQyxTQUFmOztFQUVBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07SUFDdkIsSUFBTUMsV0FBVyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCUCxPQUFPLENBQUNRLE1BQW5DLENBQXBCLENBRHVCLENBRXZCOztJQUNBLElBQU1DLGNBQWMsR0FBR1QsT0FBTyxDQUFDSSxXQUFELENBQTlCLENBSHVCLENBSXZCOztJQUNBRixTQUFTLENBQUNPLGNBQUQsQ0FBVDtFQUNELENBTkQsQ0FKd0IsQ0FZeEI7OztFQUNBO0FBQ0QsQ0FkRDs7R0FBTVY7O0tBQUFBO0FBZ0JOLCtEQUFlQSxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2V2ZW50cGFnZS9FdmVudFBpY2tlci5qcz9iZGJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBFdmVudFBpY2tlciA9ICgpID0+IHtcbiAgY29uc3QgcmV3YXJkcyA9IFtcIu2YnO2DnTFcIiwgXCLtmJztg50yXCIsIFwi7Zic7YOdM1wiXTtcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IHBpY2tSZXdhcmQgPSAoKSA9PiB7XG4gICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByZXdhcmRzLmxlbmd0aCk7XG4gICAgLy8gY29uc29sZS5sb2coXCJyYW5kb21JbmRleDogXCIsIHJhbmRvbUluZGV4KTtcbiAgICBjb25zdCBzZWxlY3RlZFJld2FyZCA9IHJld2FyZHNbcmFuZG9tSW5kZXhdO1xuICAgIC8vIGNvbnNvbGUubG9nKFwic2VsZWN0ZWRSZXdhcmQ6IFwiLCBzZWxlY3RlZFJld2FyZCk7XG4gICAgc2V0UmVzdWx0KHNlbGVjdGVkUmV3YXJkKTtcbiAgfTtcblxuICAvLyBwaWNrUmV3YXJkKCk7XG4gIHJldHVybiBcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50UGlja2VyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJFdmVudFBpY2tlciIsInJld2FyZHMiLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJwaWNrUmV3YXJkIiwicmFuZG9tSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJzZWxlY3RlZFJld2FyZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/eventpage/EventPicker.js\n"));

/***/ })

});