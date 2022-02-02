"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkapi_capstone_project"] = self["webpackChunkapi_capstone_project"] || []).push([["getComments"],{

/***/ "./src/getComments.js":
/*!****************************!*\
  !*** ./src/getComments.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst appCode = 'oY7NrmeQIcmEQ8n2GjZY';\n\nconst getComments = async (id) => {\n  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appCode}/comments?item_id=${id}`;\n  const response = await fetch(url);\n\n  if (response.status === 200) {\n    return response.json();\n  }\n\n  return false;\n};\n\ngetComments(11714098);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComments);\n\n\n//# sourceURL=webpack://api-capstone-project/./src/getComments.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/getComments.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);