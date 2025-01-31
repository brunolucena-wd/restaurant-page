/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contentContainer = document.getElementById(\"content\");\n\nfunction renderAboutPage() {\n    while(contentContainer.firstElementChild) {\n        contentContainer.firstElementChild.remove();\n        console.log(\"Had to clean\");\n    }\n    const mainHeading = document.createElement(\"h1\");\n    mainHeading.textContent = \"Who am I?\";\n    const mainDescription = document.createElement(\"p\");\n    mainDescription.textContent = \"Can I condemn this man to slavery?\";\n    contentContainer.append(mainHeading);\n    contentContainer.append(mainDescription);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderAboutPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWJvdXQuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2Fib3V0LmpzPzU4NjQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuZnVuY3Rpb24gcmVuZGVyQWJvdXRQYWdlKCkge1xuICAgIHdoaWxlKGNvbnRlbnRDb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgICAgY29udGVudENvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZC5yZW1vdmUoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJIYWQgdG8gY2xlYW5cIik7XG4gICAgfVxuICAgIGNvbnN0IG1haW5IZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIG1haW5IZWFkaW5nLnRleHRDb250ZW50ID0gXCJXaG8gYW0gST9cIjtcbiAgICBjb25zdCBtYWluRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBtYWluRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIkNhbiBJIGNvbmRlbW4gdGhpcyBtYW4gdG8gc2xhdmVyeT9cIjtcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZChtYWluSGVhZGluZyk7XG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmQobWFpbkRlc2NyaXB0aW9uKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyQWJvdXRQYWdlOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/about.js\n");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contentContainer = document.getElementById(\"content\");\n\nfunction renderHomePage() {\n    while(contentContainer.firstElementChild) {\n        contentContainer.firstElementChild.remove();\n        console.log(\"Had to clean\");\n    }\n    const mainHeading = document.createElement(\"h1\");\n    mainHeading.textContent = \"Tuni's Restaurant\";\n    const mainDescription = document.createElement(\"p\");\n    mainDescription.textContent = \"Just another Italian restaurant with a twist of extra cheese\";\n    contentContainer.append(mainHeading);\n    contentContainer.append(mainDescription);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHomePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9tZS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS5qcz83YjQxIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbmZ1bmN0aW9uIHJlbmRlckhvbWVQYWdlKCkge1xuICAgIHdoaWxlKGNvbnRlbnRDb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgICAgY29udGVudENvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZC5yZW1vdmUoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJIYWQgdG8gY2xlYW5cIik7XG4gICAgfVxuICAgIGNvbnN0IG1haW5IZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIG1haW5IZWFkaW5nLnRleHRDb250ZW50ID0gXCJUdW5pJ3MgUmVzdGF1cmFudFwiO1xuICAgIGNvbnN0IG1haW5EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIG1haW5EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiSnVzdCBhbm90aGVyIEl0YWxpYW4gcmVzdGF1cmFudCB3aXRoIGEgdHdpc3Qgb2YgZXh0cmEgY2hlZXNlXCI7XG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmQobWFpbkhlYWRpbmcpO1xuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kKG1haW5EZXNjcmlwdGlvbik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckhvbWVQYWdlOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/home.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\n\n\n\nconst mainNav = document.querySelector(\"nav\");\nconst navButtons = mainNav.querySelectorAll(\"button\");\n\nnavButtons.forEach(button => {\n    button.addEventListener(\"click\", () => {\n        if (button.id === \"home-button\") (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        if (button.id === \"menu-button\") (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        if (button.id === \"about-button\") (0,_about_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUF1QztBQUNBO0FBQ0U7O0FBRXpDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlDQUF5QyxvREFBYztBQUN2RCx5Q0FBeUMsb0RBQWM7QUFDdkQsMENBQTBDLHFEQUFlO0FBQ3pELEtBQUs7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlbmRlckhvbWVQYWdlIGZyb20gXCIuL2hvbWUuanNcIjtcbmltcG9ydCByZW5kZXJNZW51UGFnZSBmcm9tIFwiLi9tZW51LmpzXCI7XG5pbXBvcnQgcmVuZGVyQWJvdXRQYWdlIGZyb20gXCIuL2Fib3V0LmpzXCI7XG5cbmNvbnN0IG1haW5OYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpO1xuY29uc3QgbmF2QnV0dG9ucyA9IG1haW5OYXYucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKTtcblxubmF2QnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmIChidXR0b24uaWQgPT09IFwiaG9tZS1idXR0b25cIikgcmVuZGVySG9tZVBhZ2UoKTtcbiAgICAgICAgaWYgKGJ1dHRvbi5pZCA9PT0gXCJtZW51LWJ1dHRvblwiKSByZW5kZXJNZW51UGFnZSgpO1xuICAgICAgICBpZiAoYnV0dG9uLmlkID09PSBcImFib3V0LWJ1dHRvblwiKSByZW5kZXJBYm91dFBhZ2UoKTtcbiAgICB9KTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contentContainer = document.getElementById(\"content\");\n\nfunction renderMenuPage() {\n    while(contentContainer.firstElementChild) {\n        contentContainer.firstElementChild.remove();\n        console.log(\"Had to clean\");\n    }\n    const mainHeading = document.createElement(\"h1\");\n    mainHeading.textContent = \"Tuni's Restaurant - The Menu\";\n    const mainDescription = document.createElement(\"p\");\n    mainDescription.textContent = \"Dishes with extra cheese\";\n    contentContainer.append(mainHeading);\n    contentContainer.append(mainDescription);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMenuPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWVudS5qcz9hYjA4Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbmZ1bmN0aW9uIHJlbmRlck1lbnVQYWdlKCkge1xuICAgIHdoaWxlKGNvbnRlbnRDb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgICAgY29udGVudENvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZC5yZW1vdmUoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJIYWQgdG8gY2xlYW5cIik7XG4gICAgfVxuICAgIGNvbnN0IG1haW5IZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIG1haW5IZWFkaW5nLnRleHRDb250ZW50ID0gXCJUdW5pJ3MgUmVzdGF1cmFudCAtIFRoZSBNZW51XCI7XG4gICAgY29uc3QgbWFpbkRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbWFpbkRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJEaXNoZXMgd2l0aCBleHRyYSBjaGVlc2VcIjtcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZChtYWluSGVhZGluZyk7XG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmQobWFpbkRlc2NyaXB0aW9uKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyTWVudVBhZ2U7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/menu.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;