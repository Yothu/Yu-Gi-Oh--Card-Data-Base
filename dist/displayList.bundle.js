"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkapi_capstone_project"] = self["webpackChunkapi_capstone_project"] || []).push([["displayList"],{

/***/ "./src/apiCode.js":
/*!************************!*\
  !*** ./src/apiCode.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst API_CODE = 'cOGEfAnTEwb10Y4bv0g7';\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (API_CODE);\n\n\n//# sourceURL=webpack://api-capstone-project/./src/apiCode.js?");

/***/ }),

/***/ "./src/cardLikes.js":
/*!**************************!*\
  !*** ./src/cardLikes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"addLike\": () => (/* binding */ addLike)\n/* harmony export */ });\n/* harmony import */ var _apiCode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiCode.js */ \"./src/apiCode.js\");\n\n\nconst URL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${_apiCode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]}/likes/`;\n\nlet likesPerCard = [];\n\nconst getLikes = async () => {\n  likesPerCard = [];\n  const response = await fetch(`${URL}`);\n  const data = await response.json();\n  data.forEach((obj) => {\n    likesPerCard.push(\n      {\n        item_id: obj.item_id,\n        likes: obj.likes,\n      },\n    );\n  });\n  return likesPerCard;\n};\n\nconst addLike = async (objCardId) => {\n  await fetch(`${URL}`, {\n    method: 'POST',\n    body: JSON.stringify(objCardId),\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n  });\n  await getLikes();\n\n  let cardLikes = 0;\n  likesPerCard.forEach((obj) => {\n    if ((objCardId.item_id) === obj.item_id) {\n      cardLikes = obj.likes;\n    }\n  });\n\n  const cardID = objCardId.item_id;\n  const cardToUpdate = document.getElementById(`card-${cardID}`);\n  cardToUpdate.querySelector('.likes-counter').textContent = `\n  ${cardLikes}\n  `;\n};\n\n\n\n//# sourceURL=webpack://api-capstone-project/./src/cardLikes.js?");

/***/ }),

/***/ "./src/checkCommentData.js":
/*!*********************************!*\
  !*** ./src/checkCommentData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentDataIsValid = (user, comment) => {\n  if (user !== '' && comment !== '') {\n    return true;\n  }\n  return false;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentDataIsValid);\n\n\n//# sourceURL=webpack://api-capstone-project/./src/checkCommentData.js?");

/***/ }),

/***/ "./src/commentCounter.js":
/*!*******************************!*\
  !*** ./src/commentCounter.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst popupCommentCounter = (commentContainer) => {\n  const comContTitle = document.querySelector('.comments-container-title');\n  const comments = commentContainer.querySelectorAll(':scope > .comment-element');\n  comContTitle.innerHTML = `Comments (${comments.length})`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popupCommentCounter);\n\n\n//# sourceURL=webpack://api-capstone-project/./src/commentCounter.js?");

/***/ }),

/***/ "./src/countCards.js":
/*!***************************!*\
  !*** ./src/countCards.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst countCards = () => {\n  const listContainer = document.querySelector('#list-container');\n  const cardsShown = listContainer.querySelectorAll('.card');\n  return cardsShown.length;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countCards);\n\n//# sourceURL=webpack://api-capstone-project/./src/countCards.js?");

/***/ }),

/***/ "./src/createComment.js":
/*!******************************!*\
  !*** ./src/createComment.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apiCode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiCode.js */ \"./src/apiCode.js\");\n\n\nconst createComment = async (id, user, comment) => {\n  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${_apiCode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]}/comments`;\n\n  await fetch(url, {\n    method: 'POST',\n    headers: {\n      'content-type': 'application/json; charset=utf-8',\n    },\n    body: JSON.stringify({\n      item_id: `${id}`,\n      username: `${user}`,\n      comment: `${comment}`,\n    }),\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createComment);\n\n\n//# sourceURL=webpack://api-capstone-project/./src/createComment.js?");

/***/ }),

/***/ "./src/deleteComments.js":
/*!*******************************!*\
  !*** ./src/deleteComments.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst removeHTMLComments = () => {\n  const commentContainer = document.querySelector('.popup-comments-container');\n  commentContainer.innerHTML = '';\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeHTMLComments);\n\n\n//# sourceURL=webpack://api-capstone-project/./src/deleteComments.js?");

/***/ }),

/***/ "./src/displayCommentPopup.js":
/*!************************************!*\
  !*** ./src/displayCommentPopup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayCommentsOnPopup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayCommentsOnPopup.js */ \"./src/displayCommentsOnPopup.js\");\n/* harmony import */ var _createComment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createComment.js */ \"./src/createComment.js\");\n/* harmony import */ var _checkCommentData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkCommentData.js */ \"./src/checkCommentData.js\");\n/* harmony import */ var _deleteComments_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deleteComments.js */ \"./src/deleteComments.js\");\n/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./commentCounter.js */ \"./src/commentCounter.js\");\n\n\n\n\n\n\nconst displayCommentpopup = (id, name, type, description, race, image) => {\n  const popUpOuterContainer = document.createElement('div');\n  popUpOuterContainer.classList.add('pop-up-background', 'd-flex', 'justify-content-center');\n\n  popUpOuterContainer.innerHTML = `\n    <div class=\"pop-up-container m-3 border border-3 text-align-center\">\n      <div class=\"popupImageContainer d-flex flex-column p-3 align-items-center\">\n        <a href=\"#\" class=\"align-self-end\"><img class=\"cross-pop p-1\" alt=\"cross-icon\" src=\"https://img.icons8.com/external-tal-revivo-bold-tal-revivo/344/external-close-cross-symbol-for-discontinued-and-invalid-basic-bold-tal-revivo.png\"></a>\n        <img class=\"y-card\" alt=\"card-image\" src=\"${image}\">\n      </div>\n      <hr>\n      <div class=\"p-3\">\n        <div class=\"name-container d-flex align-items-center\">\n          <p class=\"text-white pe-3\">Name:</p>\n          <p class=\"text-white font-matrix-regular-small-caps font-50px\">${name}</p>\n        </div>\n        <div class=\"type-container d-flex align-items-center\">\n          <p class=\"text-white pe-3\">Type:</p>\n          <p class=\"text-white font-itc-stone-serif-small-caps-bold font-25px\">${type}</p>\n        </div>\n        <div class=\"race-container d-flex align-items-center\">\n          <p class=\"text-white pe-3\">Race:</p>\n          <p class=\"text-white font-matrix-book font-20px\">${race}</p>\n        </div>\n        <div class=\"description-container d-flex\">\n          <p class=\"text-white font-itc-stone-serif-it-italic font-20px\">${description}</p>\n        </div>\n      </div>\n      <hr>\n      <div class=\"popup-comment-section d-flex flex-column align-items-start\">\n        <h4 class=\"comments-container-title align-self-center text-white font-30px\">Comments</h4>\n        <div class=\"popup-comments-container p-3 d-flex flex-column align-self-stretch\"></div>\n      </div>\n      <hr>\n      <div class=\"popup-comments-form-container d-flex flex-column p-3\">\n        <h4 class=\"align-self-center text-white font-30px\">Add a comment!</h4>\n        <div class=\"popup-comments-form d-flex flex-column p-3\">\n          <input type=\"text\" class=\"comment-user mb-3 w-50\" name=\"contact-user\" placeholder=\"Username\" maxlength=\"30\" required>\n          <textarea class=\"comment-message mb-3\" name=\"contact-message\" placeholder=\"Your insights\" maxlength=\"500\" required></textarea>\n          <button type=\"button\" class=\"add-comment-btn align-self-start\">Post Comment</button> \n        </div>\n      </div>\n    </div>\n  `;\n\n  const popComCnt = popUpOuterContainer.querySelector('.popup-comments-container');\n\n  (async () => {\n    await (0,_displayCommentsOnPopup_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id, popComCnt);\n    (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(popComCnt);\n  })();\n\n  const popupCross = popUpOuterContainer.querySelector('.cross-pop');\n  popupCross.addEventListener('click', () => {\n    popUpOuterContainer.remove();\n  });\n\n  const addCommentBtn = popUpOuterContainer.querySelector('.add-comment-btn');\n  addCommentBtn.addEventListener('click', () => {\n    const commentUser = popUpOuterContainer.querySelector('.comment-user').value;\n    const commentMessage = popUpOuterContainer.querySelector('.comment-message').value;\n\n    (async () => {\n      if ((0,_checkCommentData_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(commentUser, commentMessage)) {\n        await (0,_createComment_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(id, commentUser, commentMessage);\n        (0,_deleteComments_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n        await (0,_displayCommentsOnPopup_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id, popComCnt);\n        popUpOuterContainer.querySelector('.comment-user').value = '';\n        popUpOuterContainer.querySelector('.comment-message').value = '';\n        (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(popComCnt);\n      } else {\n        console.log('Username or Comment is empty');\n      }\n    })();\n  });\n\n  const cardsContainer = document.getElementById('list-container');\n  cardsContainer.appendChild(popUpOuterContainer);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayCommentpopup);\n\n\n//# sourceURL=webpack://api-capstone-project/./src/displayCommentPopup.js?");

/***/ }),

/***/ "./src/displayCommentsOnPopup.js":
/*!***************************************!*\
  !*** ./src/displayCommentsOnPopup.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getComments.js */ \"./src/getComments.js\");\n\n\nconst createDisplayComment = ({ username, comment }, date) => {\n  const commentElement = document.createElement('div');\n  commentElement.classList.add('comment-element', 'd-flex', 'p-2', 'text-white', 'flex-column', 'flex-md-row');\n\n  const commentDate = document.createElement('p');\n  commentDate.classList.add('text-white', 'font-15px', 'm-0', 'px-1', 'order-1', 'order-sm-0');\n  commentDate.innerHTML = `${date}`;\n  commentElement.appendChild(commentDate);\n\n  const commentName = document.createElement('p');\n  commentName.classList.add('text-white', 'font-20px', 'm-0', 'px-1', 'order-0', 'order-sm-1', 'font-itc-stone-serif-small-caps-bold');\n  commentName.innerHTML = `${username}`;\n  commentElement.appendChild(commentName);\n\n  const commentComment = document.createElement('p');\n  commentComment.classList.add('text-white', 'font-18px', 'm-0', 'px-1', 'order-2', 'font-itc-stone-serif-it-italic');\n  commentComment.innerHTML = `${comment}`;\n  commentElement.appendChild(commentComment);\n\n  return commentElement;\n};\n\nconst displayCommentsOnPopup = async (id, commentsContainer) => {\n  const commentArray = await (0,_getComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id);\n\n  if (commentArray !== false) {\n    for (let i = 0; i < commentArray.length; i += 1) {\n      const commentElement = createDisplayComment(commentArray[i], commentArray[i].creation_date);\n      commentsContainer.appendChild(commentElement);\n    }\n  } else {\n    const commentElement = document.createElement('span');\n    commentElement.textContent = 'No comments on this card!.';\n    commentElement.classList.add('text-white', 'font-18px', 'm-0', 'px-1', 'order-2', 'font-itc-stone-serif-it-italic', 'align-self-center');\n    commentsContainer.appendChild(commentElement);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayCommentsOnPopup);\n\n//# sourceURL=webpack://api-capstone-project/./src/displayCommentsOnPopup.js?");

/***/ }),

/***/ "./src/displayList.js":
/*!****************************!*\
  !*** ./src/displayList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayCommentPopup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayCommentPopup.js */ \"./src/displayCommentPopup.js\");\n/* harmony import */ var _load_image_module_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load-image-module.js */ \"./src/load-image-module.js\");\n/* harmony import */ var _cardLikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cardLikes.js */ \"./src/cardLikes.js\");\n/* harmony import */ var _updateCardCounter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateCardCounter.js */ \"./src/updateCardCounter.js\");\n\n\n\n\n\nconst displayList = async (array) => {\n  const listContainer = document.getElementById('list-container');\n  listContainer.innerHTML = '';\n  const likesPerCard = await (0,_cardLikes_js__WEBPACK_IMPORTED_MODULE_2__.getLikes)();\n\n  for (let j = 0; j < 15; j += 4) {\n    const row = document.createElement('div');\n    row.classList.add('row');\n\n    for (let i = 0; i < 4; i += 1) {\n      let cardLikes = 0;\n      likesPerCard.forEach((obj) => {\n        if ((array[i + j].id).toString() === obj.item_id) {\n          cardLikes = obj.likes;\n        }\n      });\n\n      const card = document.createElement('div');\n      card.classList.add('col-12', 'col-sm-6', 'col-lg-3', 'card', 'pt-2');\n      card.setAttribute('id', `card-${array[i + j].id}`);\n      card.innerHTML = `\n        <div class=\"card-img-top w-80 align-self-center\"></div>\n        <div class=\"card-body d-flex flex-column align-items-center gap-2\">\n          <div class=\"card-title d-flex justify-content-between align-items-center\">  \n            <h3 class=\"font-itc-stone-serif-small-caps-bold text-white\">${array[i + j].name}</h3>\n            <div class=\"card-text d-flex align-items-center w-40\">\n              <p class=\"likes-counter text-white\">${cardLikes}</p>\n              <i class=\"far fa-heart\"></i>\n            </div>\n          </div>\n          <a href=\"#card-${array[i + j].id}\" class=\"item-comment-button btn text-dark\">Comments</a>\n        </div>\n        `;\n      const cardImageContainer = card.querySelector('.card-img-top');\n      const cardImage = (0,_load_image_module_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(array[i + j].card_images[0].image_url,\n        cardImageContainer, array[i + j].name);\n      cardImage.classList.add('card-img-top');\n\n      const cardHeart = card.querySelector('i');\n      cardHeart.addEventListener('click', async () => {\n        const objCardId = {\n          item_id: `${array[i + j].id}`,\n        };\n        await (0,_cardLikes_js__WEBPACK_IMPORTED_MODULE_2__.addLike)(objCardId);\n      });\n\n      const itemCommentBtn = card.querySelector('.item-comment-button');\n      itemCommentBtn.addEventListener('click', () => {\n        const cardId = array[i + j].id;\n        const cardName = array[i + j].name;\n        const cardType = array[i + j].type;\n        const cardDesc = array[i + j].desc;\n        const cardRace = array[i + j].race;\n        const cardImage = array[i + j].card_images[0].image_url;\n\n        (0,_displayCommentPopup_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cardId, cardName, cardType, cardDesc, cardRace, cardImage);\n      });\n\n      row.appendChild(card);\n    }\n\n    listContainer.appendChild(row);\n  }\n\n  (0,_updateCardCounter_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  // const countedCards = countCards();\n  // const cardsCounter = document.getElementById('cards-counter');\n  // cardsCounter.textContent = `Cards shown: ${countedCards}`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayList);\n\n//# sourceURL=webpack://api-capstone-project/./src/displayList.js?");

/***/ }),

/***/ "./src/getComments.js":
/*!****************************!*\
  !*** ./src/getComments.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apiCode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiCode.js */ \"./src/apiCode.js\");\n\n\nconst getComments = async (id) => {\n  try {\n    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${_apiCode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]}/comments?item_id=${id}`;\n    const response = await fetch(url);\n    if (response.ok) {\n      return response.json();\n    }\n    return false;\n  } catch (error) {\n    return false;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComments);\n\n\n//# sourceURL=webpack://api-capstone-project/./src/getComments.js?");

/***/ }),

/***/ "./src/load-image-module.js":
/*!**********************************!*\
  !*** ./src/load-image-module.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst loadImage = (imageAddress, elementContainer, altText) => {\n  const myIcon = new Image();\n  myIcon.src = imageAddress;\n  myIcon.setAttribute('alt', altText);\n  elementContainer.appendChild(myIcon);\n\n  return myIcon;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadImage);\n\n\n//# sourceURL=webpack://api-capstone-project/./src/load-image-module.js?");

/***/ }),

/***/ "./src/updateCardCounter.js":
/*!**********************************!*\
  !*** ./src/updateCardCounter.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _countCards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countCards.js */ \"./src/countCards.js\");\n\n\nconst updateCardCounter = () => {\n  const countedCards = (0,_countCards_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  const cardsCounter = document.getElementById('cards-counter');\n  cardsCounter.textContent = `Cards shown: ${countedCards}`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateCardCounter);\n\n//# sourceURL=webpack://api-capstone-project/./src/updateCardCounter.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/displayList.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);