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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/kidongg/Desktop/dream-bridge-react/src/components/eventpage/EventPicker.js\",\n    _this = undefined;\n\n\n\n\nvar EventPicker = function EventPicker(_ref) {\n  var open = _ref.open,\n      result = _ref.result,\n      setResult = _ref.setResult;\n  var rewards = [\"확정화리\", \"경쟁화리\", \"확정화리\", \"경쟁화리\", \"확정화리\", \"경쟁화리\"]; // const [result, setResult] = useState(\"\");\n\n  var pickReward = function pickReward() {\n    var randomIndex = Math.floor(Math.random() * rewards.length);\n    var selectedReward = rewards[randomIndex]; //! 랜덤 화이트 리스트를 주는 로직\n\n    setResult(selectedReward);\n    open();\n  }; // pickReward();\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n      onClick: pickReward,\n      children: \"\\uBF51\\uAE30\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, _this), result && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n      children: [\"\\uB2F9\\uCCA8 \\uACB0\\uACFC : \", result]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 18\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = EventPicker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventPicker);\n\nvar _c;\n\n$RefreshReg$(_c, \"EventPicker\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ldmVudHBhZ2UvRXZlbnRQaWNrZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7O0FBRUEsSUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBaUM7RUFBQSxJQUE5QkMsSUFBOEIsUUFBOUJBLElBQThCO0VBQUEsSUFBeEJDLE1BQXdCLFFBQXhCQSxNQUF3QjtFQUFBLElBQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7RUFDbkQsSUFBTUMsT0FBTyxHQUFHLENBQ2QsTUFEYyxFQUVkLE1BRmMsRUFHZCxNQUhjLEVBSWQsTUFKYyxFQUtkLE1BTGMsRUFNZCxNQU5jLENBQWhCLENBRG1ELENBU25EOztFQUVBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07SUFDdkIsSUFBTUMsV0FBVyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCTCxPQUFPLENBQUNNLE1BQW5DLENBQXBCO0lBQ0EsSUFBTUMsY0FBYyxHQUFHUCxPQUFPLENBQUNFLFdBQUQsQ0FBOUIsQ0FGdUIsQ0FJdkI7O0lBQ0FILFNBQVMsQ0FBQ1EsY0FBRCxDQUFUO0lBQ0FWLElBQUk7RUFDTCxDQVBELENBWG1ELENBb0JuRDs7O0VBQ0Esb0JBQ0U7SUFBQSx3QkFDRTtNQUFRLE9BQU8sRUFBRUksVUFBakI7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FERixFQUVHSCxNQUFNLGlCQUFJO01BQUEsMkNBQVlBLE1BQVo7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFNBRmI7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBREY7QUFNRCxDQTNCRDs7S0FBTUY7QUE2Qk4sK0RBQWVBLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZXZlbnRwYWdlL0V2ZW50UGlja2VyLmpzP2JkYmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEV2ZW50UGlja2VyID0gKHsgb3BlbiwgcmVzdWx0LCBzZXRSZXN1bHQgfSkgPT4ge1xuICBjb25zdCByZXdhcmRzID0gW1xuICAgIFwi7ZmV7KCV7ZmU66asXCIsXG4gICAgXCLqsr3sn4HtmZTrpqxcIixcbiAgICBcIu2Zleygle2ZlOumrFwiLFxuICAgIFwi6rK97J+B7ZmU66asXCIsXG4gICAgXCLtmZXsoJXtmZTrpqxcIixcbiAgICBcIuqyveyfge2ZlOumrFwiLFxuICBdO1xuICAvLyBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgcGlja1Jld2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJld2FyZHMubGVuZ3RoKTtcbiAgICBjb25zdCBzZWxlY3RlZFJld2FyZCA9IHJld2FyZHNbcmFuZG9tSW5kZXhdO1xuXG4gICAgLy8hIOuenOuNpCDtmZTsnbTtirgg66as7Iqk7Yq466W8IOyjvOuKlCDroZzsp4FcbiAgICBzZXRSZXN1bHQoc2VsZWN0ZWRSZXdhcmQpO1xuICAgIG9wZW4oKTtcbiAgfTtcblxuICAvLyBwaWNrUmV3YXJkKCk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxidXR0b24gb25DbGljaz17cGlja1Jld2FyZH0+672R6riwPC9idXR0b24+XG4gICAgICB7cmVzdWx0ICYmIDxwPuuLueyyqCDqsrDqs7wgOiB7cmVzdWx0fTwvcD59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFdmVudFBpY2tlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRXZlbnRQaWNrZXIiLCJvcGVuIiwicmVzdWx0Iiwic2V0UmVzdWx0IiwicmV3YXJkcyIsInBpY2tSZXdhcmQiLCJyYW5kb21JbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsInNlbGVjdGVkUmV3YXJkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/eventpage/EventPicker.js\n"));

/***/ })

});