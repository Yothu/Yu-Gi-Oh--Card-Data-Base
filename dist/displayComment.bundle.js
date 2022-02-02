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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayCommentsOnPopup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayCommentsOnPopup.js */ \"./src/displayCommentsOnPopup.js\");\n\n\nconst displayCommentpopup = (id, name, type, description, race, image) => {\n  const popUpOuterContainer = document.createElement('div');\n  popUpOuterContainer.classList.add('pop-up-background', 'd-flex', 'justify-content-center');\n\n  popUpOuterContainer.innerHTML = `\n    <div class=\"pop-up-container m-3 border border-3 text-align-center\">\n      <div class=\"popupImageContainer d-flex flex-column p-3 align-items-center\">\n        <img class=\"cross-pop p-1 align-self-end\" alt=\"cross-icon\" src=\"https://img.icons8.com/external-tal-revivo-bold-tal-revivo/344/external-close-cross-symbol-for-discontinued-and-invalid-basic-bold-tal-revivo.png\">\n        <img class=\"y-card\" alt=\"card-image\" src=\"${image}\">\n      </div>\n      <hr>\n      <div class=\"p-3\">\n        <div class=\"name-container d-flex align-items-center\">\n          <p class=\"text-white pe-3\">Name:</p>\n          <p class=\"text-white font-matrix-regular-small-caps font-50px\">${name}</p>\n        </div>\n        <div class=\"type-container d-flex align-items-center\">\n          <p class=\"text-white pe-3\">Type:</p>\n          <p class=\"text-white font-itc-stone-serif-small-caps-bold font-25px\">${type}</p>\n        </div>\n        <div class=\"race-container d-flex align-items-center\">\n          <p class=\"text-white pe-3\">Race:</p>\n          <p class=\"text-white font-matrix-book font-20px\">${race}</p>\n        </div>\n        <div class=\"description-container d-flex\">\n          <p class=\"text-white font-itc-stone-serif-it-italic font-20px\">${description}</p>\n        </div>\n      </div>\n      <hr>\n      <div class=\"popup-comment-section d-flex flex-column align-items-start\">\n        <h4 class=\"align-self-center text-white font-30px\">Comments</h4>\n        <div class=\"popup-comments-container p-3\"></div>\n      </div>\n      <hr>\n      <div class=\"popup-comments-form-container d-flex flex-column align-items-start\">\n        <h4 class=\"align-self-center text-white font-30px\">Add a comment!</h4>\n        <div class=\"popup-comments-form\"></div>\n      </div>\n    </div>\n  `;\n\n  const popComCnt = popUpOuterContainer.querySelector('.popup-comments-container');\n  (0,_displayCommentsOnPopup_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id, popComCnt);\n\n  const popupCross = popUpOuterContainer.querySelector('.cross-pop');\n  popupCross.addEventListener('click', () => {\n    popUpOuterContainer.remove();\n  });\n\n  const cardsContainer = document.getElementById('list-container');\n  cardsContainer.appendChild(popUpOuterContainer);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayCommentpopup);\n\n\n//# sourceURL=webpack://api-capstone-project/./src/displayCommentPopup.js?");

/***/ }),

/***/ "./src/displayCommentsOnPopup.js":
/*!***************************************!*\
  !*** ./src/displayCommentsOnPopup.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getComments.js */ \"./src/getComments.js\");\n\n\nconst createDisplayComment = ({ username, comment }, date) => {\n  const commentElement = document.createElement('div');\n  commentElement.classList.add('d-flex', 'p-2', 'text-white', 'flex-column');\n\n  const commentDate = document.createElement('p');\n  commentDate.classList.add('text-white', 'font-15px', 'm-0', 'px-1', 'order-1');\n  commentDate.innerHTML = `${date}`;\n  commentElement.appendChild(commentDate);\n\n  const commentName = document.createElement('p');\n  commentName.classList.add('text-white', 'font-20px', 'm-0', 'px-1', 'order-0', 'font-itc-stone-serif-small-caps-bold');\n  commentName.innerHTML = `${username}`;\n  commentElement.appendChild(commentName);\n\n  const commentComment = document.createElement('p');\n  commentComment.classList.add('text-white', 'font-18px', 'm-0', 'px-1', 'order-2', 'font-itc-stone-serif-it-italic');\n  commentComment.innerHTML = `${comment}`;\n  commentElement.appendChild(commentComment);\n\n  return commentElement;\n};\n\nconst displayCommentsOnPopup = async (id, commentsContainer) => {\n  const commentArray = await (0,_getComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id);\n\n  if (commentArray) {\n    for (let i = 0; i < commentArray.length; i += 1) {\n      const commentElement = createDisplayComment(commentArray[i], commentArray[i].creation_date);\n      commentsContainer.appendChild(commentElement);\n    }\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayCommentsOnPopup);\n\n//# sourceURL=webpack://api-capstone-project/./src/displayCommentsOnPopup.js?");

/***/ }),

/***/ "./src/getComments.js":
/*!****************************!*\
  !*** ./src/getComments.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst appCode = 'oY7NrmeQIcmEQ8n2GjZY';\n\nconst getComments = async (id) => {\n  try {\n    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appCode}/comments?item_id=${id}`;\n    const response = await fetch(url);\n    if (response.ok) {\n      return response.json();\n    }\n    return false;\n  } catch (error) {\n    return false;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComments);\n\n\n//# sourceURL=webpack://api-capstone-project/./src/getComments.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/displayCommentPopup.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);