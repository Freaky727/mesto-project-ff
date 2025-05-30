/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("var cardsContainer = document.querySelector(\".places__list\");\nvar cardTemplate = document.querySelector(\"#card-template\").content;\nvar removeCard = function removeCard(cardElement) {\n  cardElement.remove();\n};\nvar createCard = function createCard(cardName, cardImage, removeCard) {\n  var cardElement = cardTemplate.querySelector(\".places__item\").cloneNode(true);\n  cardElement.querySelector(\".card__image\").src = cardImage;\n  cardElement.querySelector(\".card__title\").textContent = cardName;\n  cardElement.querySelector(\".card__image\").alt = \"\\u0424\\u043E\\u0442\\u043E\\u0433\\u0440\\u0430\\u0444\\u0438\\u044F \\u043C\\u0435\\u0441\\u0442\\u0430: \".concat(cardName);\n  var deleteCard = cardElement.querySelector(\".card__delete-button\");\n  deleteCard.addEventListener(\"click\", function () {\n    removeCard(cardElement);\n  });\n  return cardElement;\n};\nvar showCards = function showCards() {\n  initialCards.forEach(function (item) {\n    cardsContainer.append(createCard(item.name, item.link, removeCard));\n  });\n};\nshowCards();\nconsole.log('Hello, World!');\n\n//# sourceURL=webpack://yandex_praktikum/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;