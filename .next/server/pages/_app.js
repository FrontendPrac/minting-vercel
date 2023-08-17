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

/***/ "./context/GlobalContextProvider.jsx":
/*!*******************************************!*\
  !*** ./context/GlobalContextProvider.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GlobalContextProvider\": () => (/* binding */ GlobalContextProvider),\n/* harmony export */   \"useGlobalContext\": () => (/* binding */ useGlobalContext)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"C:\\\\Users\\\\Frontis_002\\\\Desktop\\\\Minting-Page\\\\context\\\\GlobalContextProvider.jsx\";\n\n\n\nconst AuthContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext();\nfunction useGlobalContext() {\n  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(AuthContext);\n}\nfunction GlobalContextProvider({\n  children\n}) {\n  const route = new next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter();\n  const {\n    0: currentUser,\n    1: SetCurrentUser\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  const {\n    0: network,\n    1: setNetwork\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');\n  const {\n    0: isloading,\n    1: Setloading\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    Setloading(false);\n  }, []);\n  const value = {\n    currentUser,\n    SetCurrentUser,\n    network,\n    setNetwork\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(AuthContext.Provider, {\n    value: value,\n    children: !isloading && children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0dsb2JhbENvbnRleHRQcm92aWRlci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNSyxXQUFXLGdCQUFHTCwwREFBQSxFQUFwQjtBQUNPLFNBQVNPLGdCQUFULEdBQTRCO0VBRWpDLE9BQU9OLGlEQUFVLENBQUNJLFdBQUQsQ0FBakI7QUFFRDtBQUVNLFNBQVNHLHFCQUFULENBQStCO0VBQUVDO0FBQUYsQ0FBL0IsRUFBNkM7RUFDbEQsTUFBTUMsS0FBSyxHQUFHLElBQUlOLGtEQUFKLEVBQWQ7RUFDQSxNQUFNO0lBQUEsR0FBQ08sV0FBRDtJQUFBLEdBQWNDO0VBQWQsSUFBZ0NULCtDQUFRLEVBQTlDO0VBQ0EsTUFBTTtJQUFBLEdBQUNVLE9BQUQ7SUFBQSxHQUFVQztFQUFWLElBQXdCWCwrQ0FBUSxDQUFDLEVBQUQsQ0FBdEM7RUFDQSxNQUFNO0lBQUEsR0FBQ1ksU0FBRDtJQUFBLEdBQVlDO0VBQVosSUFBMEJiLCtDQUFRLENBQUMsSUFBRCxDQUF4QztFQUdBRCxnREFBUyxDQUFDLE1BQU07SUFDZGMsVUFBVSxDQUFDLEtBQUQsQ0FBVjtFQUdELENBSlEsRUFJTixFQUpNLENBQVQ7RUFPQSxNQUFNQyxLQUFLLEdBQUc7SUFDWk4sV0FEWTtJQUVaQyxjQUZZO0lBR1pDLE9BSFk7SUFJWkM7RUFKWSxDQUFkO0VBUUEsb0JBQ0UsOERBQUMsV0FBRCxDQUFhLFFBQWI7SUFBc0IsS0FBSyxFQUFFRyxLQUE3QjtJQUFBLFVBQ0csQ0FBQ0YsU0FBRCxJQUFjTjtFQURqQjtJQUFBO0lBQUE7SUFBQTtFQUFBLFFBREY7QUFLRCIsInNvdXJjZXMiOlsid2VicGFjazovL2RyZWFtLWJyaWRnZS1yZWFjdC8uL2NvbnRleHQvR2xvYmFsQ29udGV4dFByb3ZpZGVyLmpzeD9mMDY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmNvbnN0IEF1dGhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VHbG9iYWxDb250ZXh0KCkge1xyXG5cclxuICByZXR1cm4gdXNlQ29udGV4dChBdXRoQ29udGV4dClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHbG9iYWxDb250ZXh0UHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3Qgcm91dGUgPSBuZXcgdXNlUm91dGVyKClcclxuICBjb25zdCBbY3VycmVudFVzZXIsIFNldEN1cnJlbnRVc2VyXSA9IHVzZVN0YXRlKClcclxuICBjb25zdCBbbmV0d29yaywgc2V0TmV0d29ya10gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbaXNsb2FkaW5nLCBTZXRsb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgU2V0bG9hZGluZyhmYWxzZSlcclxuICAgIFxyXG5cclxuICB9LCBbXSlcclxuXHJcblxyXG4gIGNvbnN0IHZhbHVlID0ge1xyXG4gICAgY3VycmVudFVzZXIsXHJcbiAgICBTZXRDdXJyZW50VXNlcixcclxuICAgIG5ldHdvcmssXHJcbiAgICBzZXROZXR3b3JrXHJcblxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PlxyXG4gICAgICB7IWlzbG9hZGluZyAmJiBjaGlsZHJlbn1cclxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VHbG9iYWxDb250ZXh0IiwiR2xvYmFsQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJyb3V0ZSIsImN1cnJlbnRVc2VyIiwiU2V0Q3VycmVudFVzZXIiLCJuZXR3b3JrIiwic2V0TmV0d29yayIsImlzbG9hZGluZyIsIlNldGxvYWRpbmciLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/GlobalContextProvider.jsx\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/redux/store */ \"./src/redux/store.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-alert */ \"react-alert\");\n/* harmony import */ var react_alert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_alert__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var react_alert_template_basic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-alert-template-basic */ \"react-alert-template-basic\");\n/* harmony import */ var react_alert_template_basic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_alert_template_basic__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _context_GlobalContextProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context/GlobalContextProvider */ \"./context/GlobalContextProvider.jsx\");\n/* harmony import */ var metamask_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! metamask-react */ \"metamask-react\");\n/* harmony import */ var metamask_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(metamask_react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_5__]);\nframer_motion__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\nvar _jsxFileName = \"C:\\\\Users\\\\Frontis_002\\\\Desktop\\\\Minting-Page\\\\pages\\\\_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n // import AlertTemplate from \"react-alert-template-oldschool-dark\";\n// import AlertTemplate from \"react-alert-template-mui\";\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  // Alert options\n  const options = {\n    timeout: 5000,\n    position: react_alert__WEBPACK_IMPORTED_MODULE_4__.positions.BOTTOM_CENTER,\n    offset: \"10px\",\n    containerStyle: {\n      zIndex: 1000,\n      marginBottom: \"250px\"\n    }\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(metamask_react__WEBPACK_IMPORTED_MODULE_8__.MetaMaskProvider, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_context_GlobalContextProvider__WEBPACK_IMPORTED_MODULE_7__.GlobalContextProvider, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"link\", {\n            rel: \"preconnect\",\n            href: \"https://fonts.googleapis.com\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"link\", {\n            rel: \"preconnect\",\n            href: \"https://fonts.gstatic.com\",\n            crossOrigin: \"\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"link\", {\n            href: \"https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\",\n            rel: \"stylesheet\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"link\", {\n            type: \"text/css\",\n            rel: \"stylesheet\",\n            href: \"/css/plugins.css?ver=4.1\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"link\", {\n            href: \"//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css\",\n            rel: \"stylesheet\",\n            type: \"text/css\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"link\", {\n            href: \"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap\",\n            rel: \"stylesheet\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"link\", {\n            rel: \"stylesheet\",\n            href: \"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"link\", {\n            href: \"https://fonts.cdnfonts.com/css/copperplate\",\n            rel: \"stylesheet\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"link\", {\n            type: \"text/css\",\n            rel: \"stylesheet\",\n            href: \"/css/style.css?ver=4.1\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"link\", {\n            rel: \"icon\",\n            href: \"/favicon.png\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.AnimatePresence, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_alert__WEBPACK_IMPORTED_MODULE_4__.Provider, _objectSpread(_objectSpread({\n            template: (react_alert_template_basic__WEBPACK_IMPORTED_MODULE_6___default())\n          }, options), {}, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_0__.Provider, {\n              store: _src_redux_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 64,\n                columnNumber: 17\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 15\n            }, this)\n          }), void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, this)\n  }, void 0, false);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBO0FBQ0E7Ozs7O0FBRUEsU0FBU1MsS0FBVCxDQUFlO0VBQUVDLFNBQUY7RUFBYUM7QUFBYixDQUFmLEVBQXlDO0VBQ3ZDO0VBQ0EsTUFBTUMsT0FBTyxHQUFHO0lBQ2RDLE9BQU8sRUFBRSxJQURLO0lBRWRDLFFBQVEsRUFBRVgsZ0VBRkk7SUFHZGEsTUFBTSxFQUFFLE1BSE07SUFJZEMsY0FBYyxFQUFFO01BQUVDLE1BQU0sRUFBRSxJQUFWO01BQWdCQyxZQUFZLEVBQUU7SUFBOUI7RUFKRixDQUFoQjtFQU9BLG9CQUNFO0lBQUEsdUJBQ0UsOERBQUMsNERBQUQ7TUFBQSx1QkFDRSw4REFBQyxpRkFBRDtRQUFBLHdCQUNFLDhEQUFDLGtEQUFEO1VBQUEsd0JBQ0U7WUFBTSxHQUFHLEVBQUMsWUFBVjtZQUF1QixJQUFJLEVBQUM7VUFBNUI7WUFBQTtZQUFBO1lBQUE7VUFBQSxRQURGLGVBRUU7WUFDRSxHQUFHLEVBQUMsWUFETjtZQUVFLElBQUksRUFBQywyQkFGUDtZQUdFLFdBQVcsRUFBQztVQUhkO1lBQUE7WUFBQTtZQUFBO1VBQUEsUUFGRixlQU9FO1lBQ0UsSUFBSSxFQUFDLDhOQURQO1lBRUUsR0FBRyxFQUFDO1VBRk47WUFBQTtZQUFBO1lBQUE7VUFBQSxRQVBGLGVBYUU7WUFDRSxJQUFJLEVBQUMsVUFEUDtZQUVFLEdBQUcsRUFBQyxZQUZOO1lBR0UsSUFBSSxFQUFDO1VBSFA7WUFBQTtZQUFBO1lBQUE7VUFBQSxRQWJGLGVBa0JFO1lBQ0UsSUFBSSxFQUFDLDBEQURQO1lBQ2tFLEdBQUcsRUFBQyxZQUR0RTtZQUNtRixJQUFJLEVBQUM7VUFEeEY7WUFBQTtZQUFBO1lBQUE7VUFBQSxRQWxCRixlQXFCRTtZQUNFLElBQUksRUFBQyxzU0FEUDtZQUM4UyxHQUFHLEVBQUM7VUFEbFQ7WUFBQTtZQUFBO1lBQUE7VUFBQSxRQXJCRixlQXdCRTtZQUNFLEdBQUcsRUFBQyxZQUROO1lBQ21CLElBQUksRUFBQztVQUR4QjtZQUFBO1lBQUE7WUFBQTtVQUFBLFFBeEJGLGVBMkJFO1lBQ0UsSUFBSSxFQUFDLDRDQURQO1lBQ29ELEdBQUcsRUFBQztVQUR4RDtZQUFBO1lBQUE7WUFBQTtVQUFBLFFBM0JGLGVBOEJFO1lBQU0sSUFBSSxFQUFDLFVBQVg7WUFBc0IsR0FBRyxFQUFDLFlBQTFCO1lBQXVDLElBQUksRUFBQztVQUE1QztZQUFBO1lBQUE7WUFBQTtVQUFBLFFBOUJGLGVBZ0NFO1lBQU0sR0FBRyxFQUFDLE1BQVY7WUFBaUIsSUFBSSxFQUFDO1VBQXRCO1lBQUE7WUFBQTtZQUFBO1VBQUEsUUFoQ0Y7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBLFFBREYsZUFvQ0UsOERBQUMsMERBQUQ7VUFBQSx1QkFDRSw4REFBQyxpREFBRDtZQUFlLFFBQVEsRUFBRWIsbUVBQWFBO1VBQXRDLEdBQTRDTSxPQUE1QztZQUFBLHVCQUNFLDhEQUFDLGlEQUFEO2NBQVUsS0FBSyxFQUFFWCx3REFBakI7Y0FBQSx1QkFDRSw4REFBQyxTQUFELG9CQUFlVSxTQUFmO2dCQUFBO2dCQUFBO2dCQUFBO2NBQUE7WUFERjtjQUFBO2NBQUE7Y0FBQTtZQUFBO1VBREY7WUFBQTtZQUFBO1lBQUE7VUFBQTtRQURGO1VBQUE7VUFBQTtVQUFBO1FBQUEsUUFwQ0Y7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREY7TUFBQTtNQUFBO01BQUE7SUFBQTtFQURGLGlCQURGO0FBbUREOztBQUVELGlFQUFlRixLQUFmLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcmVhbS1icmlkZ2UtcmVhY3QvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9zcmMvcmVkdXgvc3RvcmVcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgcG9zaXRpb25zLCBQcm92aWRlciBhcyBBbGVydFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LWFsZXJ0XCI7XHJcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCBBbGVydFRlbXBsYXRlIGZyb20gXCJyZWFjdC1hbGVydC10ZW1wbGF0ZS1iYXNpY1wiO1xyXG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0UHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dC9HbG9iYWxDb250ZXh0UHJvdmlkZXJcIjtcclxuaW1wb3J0IHsgTWV0YU1hc2tQcm92aWRlciB9IGZyb20gXCJtZXRhbWFzay1yZWFjdFwiO1xyXG4vLyBpbXBvcnQgQWxlcnRUZW1wbGF0ZSBmcm9tIFwicmVhY3QtYWxlcnQtdGVtcGxhdGUtb2xkc2Nob29sLWRhcmtcIjtcclxuLy8gaW1wb3J0IEFsZXJ0VGVtcGxhdGUgZnJvbSBcInJlYWN0LWFsZXJ0LXRlbXBsYXRlLW11aVwiO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgLy8gQWxlcnQgb3B0aW9uc1xyXG4gIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICB0aW1lb3V0OiA1MDAwLFxyXG4gICAgcG9zaXRpb246IHBvc2l0aW9ucy5CT1RUT01fQ0VOVEVSLFxyXG4gICAgb2Zmc2V0OiBcIjEwcHhcIixcclxuICAgIGNvbnRhaW5lclN0eWxlOiB7IHpJbmRleDogMTAwMCwgbWFyZ2luQm90dG9tOiBcIjI1MHB4XCIgfSxcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE1ldGFNYXNrUHJvdmlkZXI+XHJcbiAgICAgICAgPEdsb2JhbENvbnRleHRQcm92aWRlcj5cclxuICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb21cIiAvPlxyXG4gICAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICAgIHJlbD1cInByZWNvbm5lY3RcIlxyXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCJcclxuICAgICAgICAgICAgICBjcm9zc09yaWdpbj1cIlwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SGVlYm86d2dodEAxMDA7MjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZmYW1pbHk9TnVuaXRvOml0YWwsd2dodEAwLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXBcIlxyXG4gICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7LyogIUdvb2dsZSBGb250cyAqL31cclxuICAgICAgICAgICAgey8qIFN0eWxlcyAqL31cclxuICAgICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxyXG4gICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICAgIGhyZWY9XCIvY3NzL3BsdWdpbnMuY3NzP3Zlcj00LjFcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICAgIGhyZWY9Jy8vc3BvcWEuZ2l0aHViLmlvL3Nwb3FhLWhhbi1zYW5zL2Nzcy9TcG9xYUhhblNhbnNOZW8uY3NzJyByZWw9J3N0eWxlc2hlZXQnIHR5cGU9J3RleHQvY3NzJ1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmZhbWlseT1Sb2JvdG8rTW9ubzppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDAmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1hdGVyaWFsK1N5bWJvbHMrT3V0bGluZWQ6b3Bzeix3Z2h0LEZJTEwsR1JBREAyMC4uNDgsMTAwLi43MDAsMC4uMSwtNTAuLjIwMFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuY2RuZm9udHMuY29tL2Nzcy9jb3BwZXJwbGF0ZVwiIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8bGluayB0eXBlPVwidGV4dC9jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9jc3Mvc3R5bGUuY3NzP3Zlcj00LjFcIiAvPlxyXG4gICAgICAgICAgICB7LyogRmF2aWNvbiAqL31cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5wbmdcIiAvPlxyXG4gICAgICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2U+XHJcbiAgICAgICAgICAgIDxBbGVydFByb3ZpZGVyIHRlbXBsYXRlPXtBbGVydFRlbXBsYXRlfSB7Li4ub3B0aW9uc30+XHJcbiAgICAgICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICAgICAgICAgPC9BbGVydFByb3ZpZGVyPlxyXG4gICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XHJcblxyXG4gICAgICAgIDwvR2xvYmFsQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgICA8L01ldGFNYXNrUHJvdmlkZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIl0sIm5hbWVzIjpbIlByb3ZpZGVyIiwic3RvcmUiLCJIZWFkIiwicG9zaXRpb25zIiwiQWxlcnRQcm92aWRlciIsIkFuaW1hdGVQcmVzZW5jZSIsIkFsZXJ0VGVtcGxhdGUiLCJHbG9iYWxDb250ZXh0UHJvdmlkZXIiLCJNZXRhTWFza1Byb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJvcHRpb25zIiwidGltZW91dCIsInBvc2l0aW9uIiwiQk9UVE9NX0NFTlRFUiIsIm9mZnNldCIsImNvbnRhaW5lclN0eWxlIiwiekluZGV4IiwibWFyZ2luQm90dG9tIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./src/redux/actions/type.js":
/*!***********************************!*\
  !*** ./src/redux/actions/type.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GET_DATA\": () => (/* binding */ GET_DATA),\n/* harmony export */   \"GET_SINGLE_NFT\": () => (/* binding */ GET_SINGLE_NFT),\n/* harmony export */   \"NAVIGATION\": () => (/* binding */ NAVIGATION),\n/* harmony export */   \"SEARCH\": () => (/* binding */ SEARCH),\n/* harmony export */   \"WALLET\": () => (/* binding */ WALLET)\n/* harmony export */ });\nconst GET_DATA = \"GET_DATA\";\nconst GET_SINGLE_NFT = \"GET_SINGLE_NFT\"; // set settings\n\nconst NAVIGATION = \"NAVIGATION\";\nconst WALLET = \"WALLET\";\nconst SEARCH = \"SEARCH\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvYWN0aW9ucy90eXBlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQU8sTUFBTUEsUUFBUSxHQUFHLFVBQWpCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHLGdCQUF2QixFQUVQOztBQUNPLE1BQU1DLFVBQVUsR0FBRyxZQUFuQjtBQUNBLE1BQU1DLE1BQU0sR0FBRyxRQUFmO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcmVhbS1icmlkZ2UtcmVhY3QvLi9zcmMvcmVkdXgvYWN0aW9ucy90eXBlLmpzPzY1MTQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEdFVF9EQVRBID0gXCJHRVRfREFUQVwiO1xyXG5leHBvcnQgY29uc3QgR0VUX1NJTkdMRV9ORlQgPSBcIkdFVF9TSU5HTEVfTkZUXCI7XHJcblxyXG4vLyBzZXQgc2V0dGluZ3NcclxuZXhwb3J0IGNvbnN0IE5BVklHQVRJT04gPSBcIk5BVklHQVRJT05cIjtcclxuZXhwb3J0IGNvbnN0IFdBTExFVCA9IFwiV0FMTEVUXCI7XHJcbmV4cG9ydCBjb25zdCBTRUFSQ0ggPSBcIlNFQVJDSFwiO1xyXG4iXSwibmFtZXMiOlsiR0VUX0RBVEEiLCJHRVRfU0lOR0xFX05GVCIsIk5BVklHQVRJT04iLCJXQUxMRVQiLCJTRUFSQ0giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/redux/actions/type.js\n");

/***/ }),

/***/ "./src/redux/reducer/index.js":
/*!************************************!*\
  !*** ./src/redux/reducer/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _nfts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nfts */ \"./src/redux/reducer/nfts.js\");\n/* harmony import */ var _siteSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./siteSettings */ \"./src/redux/reducer/siteSettings.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n  nfts: _nfts__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  site: _siteSettings__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvcmVkdWNlci9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLGlFQUFlQSxzREFBZSxDQUFDO0VBQUVDLElBQUY7RUFBUUMsSUFBSUEsdURBQUFBO0FBQVosQ0FBRCxDQUE5QiIsInNvdXJjZXMiOlsid2VicGFjazovL2RyZWFtLWJyaWRnZS1yZWFjdC8uL3NyYy9yZWR1eC9yZWR1Y2VyL2luZGV4LmpzPzcyZTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCBuZnRzIGZyb20gXCIuL25mdHNcIjtcclxuaW1wb3J0IHNpdGUgZnJvbSBcIi4vc2l0ZVNldHRpbmdzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoeyBuZnRzLCBzaXRlIH0pO1xyXG4iXSwibmFtZXMiOlsiY29tYmluZVJlZHVjZXJzIiwibmZ0cyIsInNpdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/redux/reducer/index.js\n");

/***/ }),

/***/ "./src/redux/reducer/nfts.js":
/*!***********************************!*\
  !*** ./src/redux/reducer/nfts.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _actions_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/type */ \"./src/redux/actions/type.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nconst nfts = (state = [], action) => {\n  const {\n    type,\n    payload\n  } = action;\n\n  switch (type) {\n    case _actions_type__WEBPACK_IMPORTED_MODULE_0__.GET_DATA:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        data: payload\n      });\n\n    case _actions_type__WEBPACK_IMPORTED_MODULE_0__.GET_SINGLE_NFT:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        nft: payload\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nfts);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvcmVkdWNlci9uZnRzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUUsSUFBSSxHQUFHLENBQUNDLEtBQUssR0FBRyxFQUFULEVBQWFDLE1BQWIsS0FBd0I7RUFDbkMsTUFBTTtJQUFFQyxJQUFGO0lBQVFDO0VBQVIsSUFBb0JGLE1BQTFCOztFQUNBLFFBQVFDLElBQVI7SUFDRSxLQUFLTCxtREFBTDtNQUNFLHVDQUNLRyxLQURMO1FBRUVJLElBQUksRUFBRUQ7TUFGUjs7SUFJRixLQUFLTCx5REFBTDtNQUNFLHVDQUNLRSxLQURMO1FBRUVLLEdBQUcsRUFBRUY7TUFGUDs7SUFLRjtNQUNFLE9BQU9ILEtBQVA7RUFiSjtBQWVELENBakJEOztBQWtCQSxpRUFBZUQsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2RyZWFtLWJyaWRnZS1yZWFjdC8uL3NyYy9yZWR1eC9yZWR1Y2VyL25mdHMuanM/YWI0NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHRVRfREFUQSwgR0VUX1NJTkdMRV9ORlQgfSBmcm9tIFwiLi4vYWN0aW9ucy90eXBlXCI7XHJcblxyXG5jb25zdCBuZnRzID0gKHN0YXRlID0gW10sIGFjdGlvbikgPT4ge1xyXG4gIGNvbnN0IHsgdHlwZSwgcGF5bG9hZCB9ID0gYWN0aW9uO1xyXG4gIHN3aXRjaCAodHlwZSkge1xyXG4gICAgY2FzZSBHRVRfREFUQTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBkYXRhOiBwYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBHRVRfU0lOR0xFX05GVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBuZnQ6IHBheWxvYWQsXHJcbiAgICAgIH07XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgbmZ0cztcclxuIl0sIm5hbWVzIjpbIkdFVF9EQVRBIiwiR0VUX1NJTkdMRV9ORlQiLCJuZnRzIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsImRhdGEiLCJuZnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/redux/reducer/nfts.js\n");

/***/ }),

/***/ "./src/redux/reducer/siteSettings.js":
/*!*******************************************!*\
  !*** ./src/redux/reducer/siteSettings.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _actions_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/type */ \"./src/redux/actions/type.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst initialState = {\n  navigation: false,\n  wallet: false,\n  search: false\n};\n\nconst nfts = (state = initialState, action) => {\n  const {\n    type,\n    payload\n  } = action;\n\n  switch (type) {\n    case _actions_type__WEBPACK_IMPORTED_MODULE_0__.NAVIGATION:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        navigation: payload\n      });\n\n    case _actions_type__WEBPACK_IMPORTED_MODULE_0__.WALLET:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        wallet: payload\n      });\n\n    case _actions_type__WEBPACK_IMPORTED_MODULE_0__.SEARCH:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        search: payload\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nfts);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvcmVkdWNlci9zaXRlU2V0dGluZ3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLE1BQU1HLFlBQVksR0FBRztFQUNuQkMsVUFBVSxFQUFFLEtBRE87RUFFbkJDLE1BQU0sRUFBRSxLQUZXO0VBR25CQyxNQUFNLEVBQUU7QUFIVyxDQUFyQjs7QUFNQSxNQUFNQyxJQUFJLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHTCxZQUFULEVBQXVCTSxNQUF2QixLQUFrQztFQUM3QyxNQUFNO0lBQUVDLElBQUY7SUFBUUM7RUFBUixJQUFvQkYsTUFBMUI7O0VBQ0EsUUFBUUMsSUFBUjtJQUNFLEtBQUtWLHFEQUFMO01BQ0UsdUNBQ0tRLEtBREw7UUFFRUosVUFBVSxFQUFFTztNQUZkOztJQUlGLEtBQUtULGlEQUFMO01BQ0UsdUNBQ0tNLEtBREw7UUFFRUgsTUFBTSxFQUFFTTtNQUZWOztJQUlGLEtBQUtWLGlEQUFMO01BQ0UsdUNBQ0tPLEtBREw7UUFFRUYsTUFBTSxFQUFFSztNQUZWOztJQUlGO01BQ0UsT0FBT0gsS0FBUDtFQWpCSjtBQW1CRCxDQXJCRDs7QUFzQkEsaUVBQWVELElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcmVhbS1icmlkZ2UtcmVhY3QvLi9zcmMvcmVkdXgvcmVkdWNlci9zaXRlU2V0dGluZ3MuanM/NzY2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOQVZJR0FUSU9OLCBTRUFSQ0gsIFdBTExFVCB9IGZyb20gXCIuLi9hY3Rpb25zL3R5cGVcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBuYXZpZ2F0aW9uOiBmYWxzZSxcclxuICB3YWxsZXQ6IGZhbHNlLFxyXG4gIHNlYXJjaDogZmFsc2UsXHJcbn07XHJcblxyXG5jb25zdCBuZnRzID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBjb25zdCB7IHR5cGUsIHBheWxvYWQgfSA9IGFjdGlvbjtcclxuICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIGNhc2UgTkFWSUdBVElPTjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBuYXZpZ2F0aW9uOiBwYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBXQUxMRVQ6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgd2FsbGV0OiBwYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBTRUFSQ0g6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgc2VhcmNoOiBwYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgbmZ0cztcclxuIl0sIm5hbWVzIjpbIk5BVklHQVRJT04iLCJTRUFSQ0giLCJXQUxMRVQiLCJpbml0aWFsU3RhdGUiLCJuYXZpZ2F0aW9uIiwid2FsbGV0Iiwic2VhcmNoIiwibmZ0cyIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/redux/reducer/siteSettings.js\n");

/***/ }),

/***/ "./src/redux/store.js":
/*!****************************!*\
  !*** ./src/redux/store.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducer */ \"./src/redux/reducer/index.js\");\n\n\n\n\nconst initialState = {};\nconst middleware = [(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default())];\nconst store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_reducer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], initialState, (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(...middleware)));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvc3RvcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1LLFlBQVksR0FBRyxFQUFyQjtBQUVBLE1BQU1DLFVBQVUsR0FBRyxDQUFDSCxvREFBRCxDQUFuQjtBQUVBLE1BQU1JLEtBQUssR0FBR04sa0RBQVcsQ0FDdkJHLGdEQUR1QixFQUV2QkMsWUFGdUIsRUFHdkJILDZFQUFtQixDQUFDRixzREFBZSxDQUFDLEdBQUdNLFVBQUosQ0FBaEIsQ0FISSxDQUF6QjtBQU1BLGlFQUFlQyxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHJlYW0tYnJpZGdlLXJlYWN0Ly4vc3JjL3JlZHV4L3N0b3JlLmpzP2RkNDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSBcInJlZHV4LXRodW5rXCI7XHJcbmltcG9ydCByb290UmVkdWNlciBmcm9tIFwiLi9yZWR1Y2VyXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7fTtcclxuXHJcbmNvbnN0IG1pZGRsZXdhcmUgPSBbdGh1bmtdO1xyXG5cclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcclxuICByb290UmVkdWNlcixcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSkpXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcclxuIl0sIm5hbWVzIjpbImFwcGx5TWlkZGxld2FyZSIsImNyZWF0ZVN0b3JlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsInRodW5rIiwicm9vdFJlZHVjZXIiLCJpbml0aWFsU3RhdGUiLCJtaWRkbGV3YXJlIiwic3RvcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/redux/store.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "metamask-react":
/*!*********************************!*\
  !*** external "metamask-react" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("metamask-react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

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