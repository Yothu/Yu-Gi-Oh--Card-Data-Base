"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkYu_Gi_Oh_Card_Data_Base"] = self["webpackChunkYu_Gi_Oh_Card_Data_Base"] || []).push([["loadImage"],{

/***/ "./src/load-image-module.js":
/*!**********************************!*\
  !*** ./src/load-image-module.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst loadImage = (imageAddress, elementContainer, altText) => {\n  const myIcon = new Image();\n  myIcon.src = imageAddress;\n  myIcon.setAttribute('alt', altText);\n  elementContainer.appendChild(myIcon);\n\n  return myIcon;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadImage);\n\n\n//# sourceURL=webpack://Yu-Gi-Oh--Card-Data-Base/./src/load-image-module.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/load-image-module.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);