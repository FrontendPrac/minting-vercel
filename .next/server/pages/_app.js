/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/redux/store */ \"./src/redux/store.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-alert */ \"react-alert\");\n/* harmony import */ var react_alert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_alert__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var react_alert_template_basic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-alert-template-basic */ \"react-alert-template-basic\");\n/* harmony import */ var react_alert_template_basic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_alert_template_basic__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_5__]);\nframer_motion__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\nvar _jsxFileName = \"/Users/kidongg/Desktop/dream-bridge-react/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n // import AlertTemplate from \"react-alert-template-oldschool-dark\";\n// import AlertTemplate from \"react-alert-template-mui\";\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  // Alert options\n  const options = {\n    timeout: 5000,\n    position: react_alert__WEBPACK_IMPORTED_MODULE_4__.positions.BOTTOM_CENTER,\n    offset: \"10px\",\n    containerStyle: {\n      zIndex: 1000,\n      marginBottom: \"250px\"\n    }\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"link\", {\n        rel: \"preconnect\",\n        href: \"https://fonts.googleapis.com\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"link\", {\n        rel: \"preconnect\",\n        href: \"https://fonts.gstatic.com\",\n        crossOrigin: \"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"link\", {\n        href: \"https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\",\n        rel: \"stylesheet\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"link\", {\n        type: \"text/css\",\n        rel: \"stylesheet\",\n        href: \"/css/plugins.css?ver=4.1\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"link\", {\n        href: \"//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css\",\n        rel: \"stylesheet\",\n        type: \"text/css\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"link\", {\n        href: \"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap\",\n        rel: \"stylesheet\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"link\", {\n        rel: \"stylesheet\",\n        href: \"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"link\", {\n        href: \"https://fonts.cdnfonts.com/css/copperplate\",\n        rel: \"stylesheet\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"link\", {\n        type: \"text/css\",\n        rel: \"stylesheet\",\n        href: \"/css/style.css?ver=4.1\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.AnimatePresence, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_alert__WEBPACK_IMPORTED_MODULE_4__.Provider, _objectSpread(_objectSpread({\n        template: (react_alert_template_basic__WEBPACK_IMPORTED_MODULE_6___default())\n      }, options), {}, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_0__.Provider, {\n          store: _src_redux_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 11\n        }, this)\n      }), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7QUFDQTs7Ozs7QUFFQSxTQUFTTyxLQUFULENBQWU7RUFBRUMsU0FBRjtFQUFhQztBQUFiLENBQWYsRUFBeUM7RUFDdkM7RUFDQSxNQUFNQyxPQUFPLEdBQUc7SUFDZEMsT0FBTyxFQUFFLElBREs7SUFFZEMsUUFBUSxFQUFFVCxnRUFGSTtJQUdkVyxNQUFNLEVBQUUsTUFITTtJQUlkQyxjQUFjLEVBQUU7TUFBRUMsTUFBTSxFQUFFLElBQVY7TUFBZ0JDLFlBQVksRUFBRTtJQUE5QjtFQUpGLENBQWhCO0VBT0Esb0JBQ0U7SUFBQSx3QkFDRSw4REFBQyxrREFBRDtNQUFBLHdCQUNFO1FBQU0sR0FBRyxFQUFDLFlBQVY7UUFBdUIsSUFBSSxFQUFDO01BQTVCO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFERixlQUVFO1FBQ0UsR0FBRyxFQUFDLFlBRE47UUFFRSxJQUFJLEVBQUMsMkJBRlA7UUFHRSxXQUFXLEVBQUM7TUFIZDtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBRkYsZUFPRTtRQUNFLElBQUksRUFBQyw4TkFEUDtRQUVFLEdBQUcsRUFBQztNQUZOO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFQRixlQWFFO1FBQ0UsSUFBSSxFQUFDLFVBRFA7UUFFRSxHQUFHLEVBQUMsWUFGTjtRQUdFLElBQUksRUFBQztNQUhQO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFiRixlQWtCRTtRQUNFLElBQUksRUFBQywwREFEUDtRQUNrRSxHQUFHLEVBQUMsWUFEdEU7UUFDbUYsSUFBSSxFQUFDO01BRHhGO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFsQkYsZUFxQkU7UUFDRSxJQUFJLEVBQUMsc1NBRFA7UUFDOFMsR0FBRyxFQUFDO01BRGxUO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFyQkYsZUF3QkU7UUFDRSxHQUFHLEVBQUMsWUFETjtRQUNtQixJQUFJLEVBQUM7TUFEeEI7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQXhCRixlQTJCRTtRQUNFLElBQUksRUFBQyw0Q0FEUDtRQUNvRCxHQUFHLEVBQUM7TUFEeEQ7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQTNCRixlQThCRTtRQUFNLElBQUksRUFBQyxVQUFYO1FBQXNCLEdBQUcsRUFBQyxZQUExQjtRQUF1QyxJQUFJLEVBQUM7TUFBNUM7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQTlCRixlQWdDRTtRQUFNLEdBQUcsRUFBQyxNQUFWO1FBQWlCLElBQUksRUFBQztNQUF0QjtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBaENGO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxRQURGLGVBbUNFLDhEQUFDLDBEQUFEO01BQUEsdUJBQ0UsOERBQUMsaURBQUQ7UUFBZSxRQUFRLEVBQUVYLG1FQUFhQTtNQUF0QyxHQUE0Q0ksT0FBNUM7UUFBQSx1QkFDRSw4REFBQyxpREFBRDtVQUFVLEtBQUssRUFBRVQsd0RBQWpCO1VBQUEsdUJBQ0UsOERBQUMsU0FBRCxvQkFBZVEsU0FBZjtZQUFBO1lBQUE7WUFBQTtVQUFBO1FBREY7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQURGO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFERjtNQUFBO01BQUE7TUFBQTtJQUFBLFFBbkNGO0VBQUEsZ0JBREY7QUE2Q0Q7O0FBRUQsaUVBQWVGLEtBQWYsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2RyZWFtLWJyaWRnZS1yZWFjdC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9zcmMvcmVkdXgvc3RvcmVcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgcG9zaXRpb25zLCBQcm92aWRlciBhcyBBbGVydFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LWFsZXJ0XCI7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IEFsZXJ0VGVtcGxhdGUgZnJvbSBcInJlYWN0LWFsZXJ0LXRlbXBsYXRlLWJhc2ljXCI7XG4vLyBpbXBvcnQgQWxlcnRUZW1wbGF0ZSBmcm9tIFwicmVhY3QtYWxlcnQtdGVtcGxhdGUtb2xkc2Nob29sLWRhcmtcIjtcbi8vIGltcG9ydCBBbGVydFRlbXBsYXRlIGZyb20gXCJyZWFjdC1hbGVydC10ZW1wbGF0ZS1tdWlcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIC8vIEFsZXJ0IG9wdGlvbnNcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICB0aW1lb3V0OiA1MDAwLFxuICAgIHBvc2l0aW9uOiBwb3NpdGlvbnMuQk9UVE9NX0NFTlRFUixcbiAgICBvZmZzZXQ6IFwiMTBweFwiLFxuICAgIGNvbnRhaW5lclN0eWxlOiB7IHpJbmRleDogMTAwMCwgbWFyZ2luQm90dG9tOiBcIjI1MHB4XCIgfSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tXCIgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJwcmVjb25uZWN0XCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiXG4gICAgICAgICAgY3Jvc3NPcmlnaW49XCJcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUhlZWJvOndnaHRAMTAwOzIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMDs5MDAmZmFtaWx5PU51bml0bzppdGFsLHdnaHRAMCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgLz5cbiAgICAgICAgey8qICFHb29nbGUgRm9udHMgKi99XG4gICAgICAgIHsvKiBTdHlsZXMgKi99XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPVwiL2Nzcy9wbHVnaW5zLmNzcz92ZXI9NC4xXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPScvL3Nwb3FhLmdpdGh1Yi5pby9zcG9xYS1oYW4tc2Fucy9jc3MvU3BvcWFIYW5TYW5zTmVvLmNzcycgcmVsPSdzdHlsZXNoZWV0JyB0eXBlPSd0ZXh0L2NzcydcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZmYW1pbHk9Um9ib3RvK01vbm86aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NYXRlcmlhbCtTeW1ib2xzK091dGxpbmVkOm9wc3osd2dodCxGSUxMLEdSQURAMjAuLjQ4LDEwMC4uNzAwLDAuLjEsLTUwLi4yMDBcIiBcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5jZG5mb250cy5jb20vY3NzL2NvcHBlcnBsYXRlXCIgcmVsPVwic3R5bGVzaGVldFwiIFxuICAgICAgICAvPlxuICAgICAgICA8bGluayB0eXBlPVwidGV4dC9jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9jc3Mvc3R5bGUuY3NzP3Zlcj00LjFcIiAvPlxuICAgICAgICB7LyogRmF2aWNvbiAqL31cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5wbmdcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgPEFsZXJ0UHJvdmlkZXIgdGVtcGxhdGU9e0FsZXJ0VGVtcGxhdGV9IHsuLi5vcHRpb25zfT5cbiAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICAgICA8L0FsZXJ0UHJvdmlkZXI+XG4gICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiUHJvdmlkZXIiLCJzdG9yZSIsIkhlYWQiLCJwb3NpdGlvbnMiLCJBbGVydFByb3ZpZGVyIiwiQW5pbWF0ZVByZXNlbmNlIiwiQWxlcnRUZW1wbGF0ZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwib3B0aW9ucyIsInRpbWVvdXQiLCJwb3NpdGlvbiIsIkJPVFRPTV9DRU5URVIiLCJvZmZzZXQiLCJjb250YWluZXJTdHlsZSIsInpJbmRleCIsIm1hcmdpbkJvdHRvbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./src/redux/actions/type.js":
/*!***********************************!*\
  !*** ./src/redux/actions/type.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GET_DATA\": () => (/* binding */ GET_DATA),\n/* harmony export */   \"GET_SINGLE_NFT\": () => (/* binding */ GET_SINGLE_NFT),\n/* harmony export */   \"NAVIGATION\": () => (/* binding */ NAVIGATION),\n/* harmony export */   \"SEARCH\": () => (/* binding */ SEARCH),\n/* harmony export */   \"WALLET\": () => (/* binding */ WALLET)\n/* harmony export */ });\nconst GET_DATA = \"GET_DATA\";\nconst GET_SINGLE_NFT = \"GET_SINGLE_NFT\"; // set settings\n\nconst NAVIGATION = \"NAVIGATION\";\nconst WALLET = \"WALLET\";\nconst SEARCH = \"SEARCH\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvYWN0aW9ucy90eXBlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQU8sTUFBTUEsUUFBUSxHQUFHLFVBQWpCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHLGdCQUF2QixFQUVQOztBQUNPLE1BQU1DLFVBQVUsR0FBRyxZQUFuQjtBQUNBLE1BQU1DLE1BQU0sR0FBRyxRQUFmO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcmVhbS1icmlkZ2UtcmVhY3QvLi9zcmMvcmVkdXgvYWN0aW9ucy90eXBlLmpzPzY1MTQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEdFVF9EQVRBID0gXCJHRVRfREFUQVwiO1xuZXhwb3J0IGNvbnN0IEdFVF9TSU5HTEVfTkZUID0gXCJHRVRfU0lOR0xFX05GVFwiO1xuXG4vLyBzZXQgc2V0dGluZ3NcbmV4cG9ydCBjb25zdCBOQVZJR0FUSU9OID0gXCJOQVZJR0FUSU9OXCI7XG5leHBvcnQgY29uc3QgV0FMTEVUID0gXCJXQUxMRVRcIjtcbmV4cG9ydCBjb25zdCBTRUFSQ0ggPSBcIlNFQVJDSFwiO1xuIl0sIm5hbWVzIjpbIkdFVF9EQVRBIiwiR0VUX1NJTkdMRV9ORlQiLCJOQVZJR0FUSU9OIiwiV0FMTEVUIiwiU0VBUkNIIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/redux/actions/type.js\n");

/***/ }),

/***/ "./src/redux/reducer/index.js":
/*!************************************!*\
  !*** ./src/redux/reducer/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _nfts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nfts */ \"./src/redux/reducer/nfts.js\");\n/* harmony import */ var _siteSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./siteSettings */ \"./src/redux/reducer/siteSettings.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n  nfts: _nfts__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  site: _siteSettings__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvcmVkdWNlci9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLGlFQUFlQSxzREFBZSxDQUFDO0VBQUVDLElBQUY7RUFBUUMsSUFBSUEsdURBQUFBO0FBQVosQ0FBRCxDQUE5QiIsInNvdXJjZXMiOlsid2VicGFjazovL2RyZWFtLWJyaWRnZS1yZWFjdC8uL3NyYy9yZWR1eC9yZWR1Y2VyL2luZGV4LmpzPzcyZTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgbmZ0cyBmcm9tIFwiLi9uZnRzXCI7XG5pbXBvcnQgc2l0ZSBmcm9tIFwiLi9zaXRlU2V0dGluZ3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHsgbmZ0cywgc2l0ZSB9KTtcbiJdLCJuYW1lcyI6WyJjb21iaW5lUmVkdWNlcnMiLCJuZnRzIiwic2l0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/redux/reducer/index.js\n");

/***/ }),

/***/ "./src/redux/reducer/nfts.js":
/*!***********************************!*\
  !*** ./src/redux/reducer/nfts.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _actions_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/type */ \"./src/redux/actions/type.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nconst nfts = (state = [], action) => {\n  const {\n    type,\n    payload\n  } = action;\n\n  switch (type) {\n    case _actions_type__WEBPACK_IMPORTED_MODULE_0__.GET_DATA:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        data: payload\n      });\n\n    case _actions_type__WEBPACK_IMPORTED_MODULE_0__.GET_SINGLE_NFT:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        nft: payload\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nfts);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvcmVkdWNlci9uZnRzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUUsSUFBSSxHQUFHLENBQUNDLEtBQUssR0FBRyxFQUFULEVBQWFDLE1BQWIsS0FBd0I7RUFDbkMsTUFBTTtJQUFFQyxJQUFGO0lBQVFDO0VBQVIsSUFBb0JGLE1BQTFCOztFQUNBLFFBQVFDLElBQVI7SUFDRSxLQUFLTCxtREFBTDtNQUNFLHVDQUNLRyxLQURMO1FBRUVJLElBQUksRUFBRUQ7TUFGUjs7SUFJRixLQUFLTCx5REFBTDtNQUNFLHVDQUNLRSxLQURMO1FBRUVLLEdBQUcsRUFBRUY7TUFGUDs7SUFLRjtNQUNFLE9BQU9ILEtBQVA7RUFiSjtBQWVELENBakJEOztBQWtCQSxpRUFBZUQsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2RyZWFtLWJyaWRnZS1yZWFjdC8uL3NyYy9yZWR1eC9yZWR1Y2VyL25mdHMuanM/YWI0NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHRVRfREFUQSwgR0VUX1NJTkdMRV9ORlQgfSBmcm9tIFwiLi4vYWN0aW9ucy90eXBlXCI7XG5cbmNvbnN0IG5mdHMgPSAoc3RhdGUgPSBbXSwgYWN0aW9uKSA9PiB7XG4gIGNvbnN0IHsgdHlwZSwgcGF5bG9hZCB9ID0gYWN0aW9uO1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIEdFVF9EQVRBOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGRhdGE6IHBheWxvYWQsXG4gICAgICB9O1xuICAgIGNhc2UgR0VUX1NJTkdMRV9ORlQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbmZ0OiBwYXlsb2FkLFxuICAgICAgfTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBuZnRzO1xuIl0sIm5hbWVzIjpbIkdFVF9EQVRBIiwiR0VUX1NJTkdMRV9ORlQiLCJuZnRzIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsImRhdGEiLCJuZnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/redux/reducer/nfts.js\n");

/***/ }),

/***/ "./src/redux/reducer/siteSettings.js":
/*!*******************************************!*\
  !*** ./src/redux/reducer/siteSettings.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _actions_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/type */ \"./src/redux/actions/type.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst initialState = {\n  navigation: false,\n  wallet: false,\n  search: false\n};\n\nconst nfts = (state = initialState, action) => {\n  const {\n    type,\n    payload\n  } = action;\n\n  switch (type) {\n    case _actions_type__WEBPACK_IMPORTED_MODULE_0__.NAVIGATION:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        navigation: payload\n      });\n\n    case _actions_type__WEBPACK_IMPORTED_MODULE_0__.WALLET:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        wallet: payload\n      });\n\n    case _actions_type__WEBPACK_IMPORTED_MODULE_0__.SEARCH:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        search: payload\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nfts);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvcmVkdWNlci9zaXRlU2V0dGluZ3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLE1BQU1HLFlBQVksR0FBRztFQUNuQkMsVUFBVSxFQUFFLEtBRE87RUFFbkJDLE1BQU0sRUFBRSxLQUZXO0VBR25CQyxNQUFNLEVBQUU7QUFIVyxDQUFyQjs7QUFNQSxNQUFNQyxJQUFJLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHTCxZQUFULEVBQXVCTSxNQUF2QixLQUFrQztFQUM3QyxNQUFNO0lBQUVDLElBQUY7SUFBUUM7RUFBUixJQUFvQkYsTUFBMUI7O0VBQ0EsUUFBUUMsSUFBUjtJQUNFLEtBQUtWLHFEQUFMO01BQ0UsdUNBQ0tRLEtBREw7UUFFRUosVUFBVSxFQUFFTztNQUZkOztJQUlGLEtBQUtULGlEQUFMO01BQ0UsdUNBQ0tNLEtBREw7UUFFRUgsTUFBTSxFQUFFTTtNQUZWOztJQUlGLEtBQUtWLGlEQUFMO01BQ0UsdUNBQ0tPLEtBREw7UUFFRUYsTUFBTSxFQUFFSztNQUZWOztJQUlGO01BQ0UsT0FBT0gsS0FBUDtFQWpCSjtBQW1CRCxDQXJCRDs7QUFzQkEsaUVBQWVELElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcmVhbS1icmlkZ2UtcmVhY3QvLi9zcmMvcmVkdXgvcmVkdWNlci9zaXRlU2V0dGluZ3MuanM/NzY2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOQVZJR0FUSU9OLCBTRUFSQ0gsIFdBTExFVCB9IGZyb20gXCIuLi9hY3Rpb25zL3R5cGVcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBuYXZpZ2F0aW9uOiBmYWxzZSxcbiAgd2FsbGV0OiBmYWxzZSxcbiAgc2VhcmNoOiBmYWxzZSxcbn07XG5cbmNvbnN0IG5mdHMgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBjb25zdCB7IHR5cGUsIHBheWxvYWQgfSA9IGFjdGlvbjtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBOQVZJR0FUSU9OOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG5hdmlnYXRpb246IHBheWxvYWQsXG4gICAgICB9O1xuICAgIGNhc2UgV0FMTEVUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHdhbGxldDogcGF5bG9hZCxcbiAgICAgIH07XG4gICAgY2FzZSBTRUFSQ0g6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2VhcmNoOiBwYXlsb2FkLFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgbmZ0cztcbiJdLCJuYW1lcyI6WyJOQVZJR0FUSU9OIiwiU0VBUkNIIiwiV0FMTEVUIiwiaW5pdGlhbFN0YXRlIiwibmF2aWdhdGlvbiIsIndhbGxldCIsInNlYXJjaCIsIm5mdHMiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/redux/reducer/siteSettings.js\n");

/***/ }),

/***/ "./src/redux/store.js":
/*!****************************!*\
  !*** ./src/redux/store.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducer */ \"./src/redux/reducer/index.js\");\n\n\n\n\nconst initialState = {};\nconst middleware = [(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default())];\nconst store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_reducer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], initialState, (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(...middleware)));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvc3RvcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1LLFlBQVksR0FBRyxFQUFyQjtBQUVBLE1BQU1DLFVBQVUsR0FBRyxDQUFDSCxvREFBRCxDQUFuQjtBQUVBLE1BQU1JLEtBQUssR0FBR04sa0RBQVcsQ0FDdkJHLGdEQUR1QixFQUV2QkMsWUFGdUIsRUFHdkJILDZFQUFtQixDQUFDRixzREFBZSxDQUFDLEdBQUdNLFVBQUosQ0FBaEIsQ0FISSxDQUF6QjtBQU1BLGlFQUFlQyxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHJlYW0tYnJpZGdlLXJlYWN0Ly4vc3JjL3JlZHV4L3N0b3JlLmpzP2RkNDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIjtcbmltcG9ydCB0aHVuayBmcm9tIFwicmVkdXgtdGh1bmtcIjtcbmltcG9ydCByb290UmVkdWNlciBmcm9tIFwiLi9yZWR1Y2VyXCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9O1xuXG5jb25zdCBtaWRkbGV3YXJlID0gW3RodW5rXTtcblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgcm9vdFJlZHVjZXIsXG4gIGluaXRpYWxTdGF0ZSxcbiAgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSkpXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcbiJdLCJuYW1lcyI6WyJhcHBseU1pZGRsZXdhcmUiLCJjcmVhdGVTdG9yZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJ0aHVuayIsInJvb3RSZWR1Y2VyIiwiaW5pdGlhbFN0YXRlIiwibWlkZGxld2FyZSIsInN0b3JlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/redux/store.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react-alert":
/*!******************************!*\
  !*** external "react-alert" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-alert");

/***/ }),

/***/ "react-alert-template-basic":
/*!*********************************************!*\
  !*** external "react-alert-template-basic" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-alert-template-basic");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-thunk");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();