"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkYu_Gi_Oh_Card_Data_Base"] = self["webpackChunkYu_Gi_Oh_Card_Data_Base"] || []).push([["getComments"],{

/***/ "./src/apiCode.js":
/*!************************!*\
  !*** ./src/apiCode.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst API_CODE = 'cOGEfAnTEwb10Y4bv0g7';\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (API_CODE);\n\n\n//# sourceURL=webpack://Yu-Gi-Oh--Card-Data-Base/./src/apiCode.js?");

/***/ }),

/***/ "./src/getComments.js":
/*!****************************!*\
  !*** ./src/getComments.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apiCode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiCode.js */ \"./src/apiCode.js\");\n\n\nconst getComments = async (id) => {\n  try {\n    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${_apiCode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]}/comments?item_id=${id}`;\n    const response = await fetch(url);\n    if (response.ok) {\n      return response.json();\n    }\n    return false;\n  } catch (error) {\n    return false;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComments);\n\n\n//# sourceURL=webpack://Yu-Gi-Oh--Card-Data-Base/./src/getComments.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/getComments.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);