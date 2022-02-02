"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkapi_capstone_project"] = self["webpackChunkapi_capstone_project"] || []).push([["getCardList"],{

/***/ "./src/getCardsApiData.js":
/*!********************************!*\
  !*** ./src/getCardsApiData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCardsApiData\": () => (/* binding */ getCardsApiData),\n/* harmony export */   \"monsters\": () => (/* binding */ monsters),\n/* harmony export */   \"traps\": () => (/* binding */ traps),\n/* harmony export */   \"spells\": () => (/* binding */ spells)\n/* harmony export */ });\nconst traps = [];\nconst monsters = [];\nconst spells = [];\n\nconst getCardsApiData = async (url) => {\n  const response = await fetch(url);\n  const data = await response.json();\n\n  data.data.forEach((card) => {\n    if (card.type === 'Spell Card') {\n      spells.push(card);\n    }\n  });\n\n  data.data.forEach((card) => {\n    if (card.type === 'Normal Monster') {\n      monsters.push(card);\n    }\n  });\n\n  data.data.forEach((card) => {\n    if (card.type === 'Trap Card') {\n      traps.push(card);\n    }\n  });\n};\n\n\n\n//# sourceURL=webpack://api-capstone-project/./src/getCardsApiData.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/getCardsApiData.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);