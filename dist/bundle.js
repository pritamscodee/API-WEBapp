/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchUserdata: () => (/* binding */ fetchUserdata)\n/* harmony export */ });\nlet a = 455;\nconsole.log(a);\nlet c = \"pritam\";\nconsole.log(c);\nconst searchInput = document.querySelector('#searchInput');\nconst apidiv = document.querySelector('.apidivs');\nasync function fetchUserdata(url) {\n    const response = await fetch(url);\n    const data = await response.json();\n    console.log(data);\n    return data;\n}\n// 👆 ADD THIS - Actually call your function\nfetchUserdata('https://api.github.com/users')\n    .then(data => {\n    data;\n    //console.log('Fetched user data:', data);\n    data.forEach((data) => {\n        apidiv.appendChild(document.createElement('div')).innerHTML = `   <div class=\"card\">\r\n    <img src=\"${data.avatar_url}\" alt=\"John\" style=\"width:100%\">\r\n    <h1>${data.login}</h1>\r\n    <p class=\"title\">Location: ${data.location}</p>\r\n    <p>Some text that describes me lorem ipsum ipsum lorem.</p>\r\n    <a href=\"${data.url}\"><button>Contact</button></a>\r\n  </div>`;\n    });\n})\n    .catch(error => {\n    console.log('Error:', error);\n});\n\n\n\n//# sourceURL=webpack:///./src/index.ts?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;