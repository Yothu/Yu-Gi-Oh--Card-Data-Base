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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createPopupOuterContainer = () => {\n  const popUpOuterContainer = document.createElement('div');\n  popUpOuterContainer.classList.add('pop-up-background');\n  return popUpOuterContainer;\n};\n\nconst createPopupInnerContainer = () => {\n  const popUpInnerContainer = document.createElement('div');\n  popUpInnerContainer.classList.add('pop-up-container', 'm-3', 'border', 'border-3', 'border-dark', 'bg-white');\n  return popUpInnerContainer;\n};\n\nconst createPopupImageContainer = () => {\n  const popUpImageContainer = document.createElement('div');\n  popUpImageContainer.classList.add('d-flex', 'flex-column', 'p-3', 'align-items-center');\n  return popUpImageContainer;\n};\n\nconst createPopupCrossIcon = () => {\n  const popupCrossIcon = document.createElement('img');\n  popupCrossIcon.classList.add('cross-pop', 'p-1', 'align-self-end');\n  popupCrossIcon.src = 'https://img.icons8.com/external-tal-revivo-bold-tal-revivo/344/external-close-cross-symbol-for-discontinued-and-invalid-basic-bold-tal-revivo.png';\n  popupCrossIcon.setAttribute('alt', 'cross-icon');\n  return popupCrossIcon;\n};\n\nconst displayCommentpopup = (name, type, description, race, image) => {\n  const popOutCont = createPopupOuterContainer();\n\n  const popInnCont = createPopupInnerContainer();\n  popOutCont.appendChild(popInnCont);\n\n  const popImgCont = createPopupImageContainer();\n  popInnCont.appendChild(popImgCont);\n\n  const popCrossIcon = createPopupCrossIcon();\n  popImgCont.appendChild(popCrossIcon);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayCommentpopup);\n\n\n//# sourceURL=webpack://api-capstone-project/./src/displayCommentPopup.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/displayCommentPopup.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);