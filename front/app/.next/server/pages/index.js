"use strict";
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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Home = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"POSTの一覧\"\n            }, void 0, false, {\n                fileName: \"/usr/src/app/pages/index.js\",\n                lineNumber: 4,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {}, void 0, false, {\n                        fileName: \"/usr/src/app/pages/index.js\",\n                        lineNumber: 8,\n                        columnNumber: 11\n                    }, undefined),\n                    props.posts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: [\n                                            post.id,\n                                            \".\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/usr/src/app/pages/index.js\",\n                                        lineNumber: 12,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: post.title\n                                    }, void 0, false, {\n                                        fileName: \"/usr/src/app/pages/index.js\",\n                                        lineNumber: 13,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/usr/src/app/pages/index.js\",\n                                lineNumber: 11,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/usr/src/app/pages/index.js\",\n                            lineNumber: 10,\n                            columnNumber: 11\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/usr/src/app/pages/index.js\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/usr/src/app/pages/index.js\",\n        lineNumber: 3,\n        columnNumber: 5\n    }, undefined);\n};\nconst getStaticProps = async ()=>{\n    // URLはlocalhostではなくapiとなる\n    const response = await fetch(\"http://api:3000/posts\", {\n        method: \"GET\"\n    });\n    const json = await response.json();\n    return {\n        props: {\n            posts: json\n        }\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBQSxNQUFNQSxJQUFJLEdBQUcsQ0FBQ0MsS0FBSyxHQUFLO0lBQ3RCLHFCQUNFLDhEQUFDQyxLQUFHOzswQkFDRiw4REFBQ0MsSUFBRTswQkFBQyxTQUVGOzs7Ozt5QkFBSzswQkFDTCw4REFBQ0MsT0FBSzs7a0NBQ0osOERBQUNDLE9BQUs7Ozs7aUNBQVM7b0JBQ2RKLEtBQUssQ0FBQ0ssS0FBSyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxpQkFDdEIsOERBQUNDLE9BQUs7c0NBQ0osNEVBQUNDLElBQUU7O2tEQUNELDhEQUFDQyxJQUFFOzs0Q0FBRUgsSUFBSSxDQUFDSSxFQUFFOzRDQUFDLEdBQUM7Ozs7OztpREFBSztrREFDbkIsOERBQUNELElBQUU7a0RBQUVILElBQUksQ0FBQ0ssS0FBSzs7Ozs7aURBQU07Ozs7Ozt5Q0FDbEI7Ozs7O3FDQUNDLENBQ1A7Ozs7Ozt5QkFDSzs7Ozs7O2lCQUNOLENBQ1A7QUFDSCxDQUFDO0FBRU0sTUFBTUMsY0FBYyxHQUFHLFVBQVk7SUFDeEMsMEJBQTBCO0lBQzFCLE1BQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUMsdUJBQXVCLEVBQUU7UUFBQ0MsTUFBTSxFQUFFLEtBQUs7S0FBQyxDQUFDO0lBQ3RFLE1BQU1DLElBQUksR0FBRyxNQUFNSCxRQUFRLENBQUNHLElBQUksRUFBRTtJQUVsQyxPQUFPO1FBQ0xqQixLQUFLLEVBQUU7WUFDTEssS0FBSyxFQUFFWSxJQUFJO1NBQ1o7S0FDRixDQUFDO0FBQ0osQ0FBQztBQUVELGlFQUFlbEIsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBIb21lID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMj5cbiAgICAgICAgICBQT1NU44Gu5LiA6KanXG4gICAgICAgIDwvaDI+XG4gICAgICAgIDx0YWJsZT5cbiAgICAgICAgICA8dGhlYWQ+PC90aGVhZD5cbiAgICAgICAgICB7cHJvcHMucG9zdHMubWFwKChwb3N0KSA9PlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkPntwb3N0LmlkfS48L3RkPlxuICAgICAgICAgICAgICA8dGQ+e3Bvc3QudGl0bGV9PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICApfVxuICAgICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgLy8gVVJM44GvbG9jYWxob3N044Gn44Gv44Gq44GPYXBp44Go44Gq44KLXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vYXBpOjMwMDAvcG9zdHNcIiwge21ldGhvZDogXCJHRVRcIn0pO1xuICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3RzOiBqc29uXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwiZGl2IiwiaDIiLCJ0YWJsZSIsInRoZWFkIiwicG9zdHMiLCJtYXAiLCJwb3N0IiwidGJvZHkiLCJ0ciIsInRkIiwiaWQiLCJ0aXRsZSIsImdldFN0YXRpY1Byb3BzIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();