"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkapi_capstone_project"] = self["webpackChunkapi_capstone_project"] || []).push([["displayComment"],{

/***/ "./src/displayCommentPopup.js":
/*!************************************!*\
  !*** ./src/displayCommentPopup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst displayCommentpopup = (name, type, description, race, image) => {\n  const popUpOuterContainer = document.createElement('div');\n  popUpOuterContainer.classList.add('pop-up-background', 'd-flex', 'justify-content-center');\n\n  popUpOuterContainer.innerHTML = `\n    <div class=\"pop-up-container m-3 border border-3 text-align-center\">\n      <div id=\"popupImageContainer\" class=\"d-flex flex-column p-3 align-items-center\">\n        <img class=\"cross-pop p-1 align-self-end\" alt=\"cross-icon\" src=\"https://img.icons8.com/external-tal-revivo-bold-tal-revivo/344/external-close-cross-symbol-for-discontinued-and-invalid-basic-bold-tal-revivo.png\">\n        <img class=\"y-card\" alt=\"card-image\" src=\"${image}\">\n      </div>\n      <hr class=\"border border-3 border-dark\">\n      <div class=\"p-3\">\n        <div class=\"name-container d-flex align-items-center\">\n          <p class=\"text-white pe-3\">Name:</p>\n          <p class=\"text-white font-matrix-regular-small-caps font-50px\">${name}</p>\n        </div>\n        <div class=\"type-container d-flex align-items-center\">\n          <p class=\"text-white pe-3\">Type:</p>\n          <p class=\"text-white font-itc-stone-serif-small-caps-bold font-35px\">${type}</p>\n        </div>\n        <div class=\"race-container d-flex align-items-center\">\n          <p class=\"text-white pe-3\">Race:</p>\n          <p class=\"text-white font-matrix-book font-20px\">${race}</p>\n        </div>\n        <div class=\"description-container d-flex\">\n          <p class=\"text-white font-itc-stone-serif-it-italic font-20px\">${description}</p>\n        </div>\n      </div>\n    </div>\n  `;\n\n  const cardsContainer = document.getElementById('list-container');\n  cardsContainer.appendChild(popUpOuterContainer);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayCommentpopup);\n\n\n//# sourceURL=webpack://api-capstone-project/./src/displayCommentPopup.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/displayCommentPopup.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);