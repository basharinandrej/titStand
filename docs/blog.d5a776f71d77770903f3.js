/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./css/blog.sass":
/*!***********************!*\
  !*** ./css/blog.sass ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************!*\
  !*** ./blog.js ***!
  \*****************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_blog_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/blog.sass */ "./css/blog.sass");


const navigationBlog = document.querySelector('.navigation--blog-js')
const navList = navigationBlog.querySelector('.navigation-list--js')
let isOpenInputForSearch = false



navList.addEventListener('click', function(e) {
    const navItem = e.target.closest('li')
    navList.classList.remove('navigation-list--hide-children')
    navList.querySelectorAll('.navigation-list__item--js').forEach(el => {
        el.classList.remove('active')
        navItem.classList.remove('navigation-list__item--open-input')
    })
    const target = navItem.dataset.type
    navItem.classList.add('active')

    if (target === 'search') {
        const logo = document.querySelector('.header__logo--js')
        logo.style.order = "-1"
        logo.style.marginRight = "24px"
        logo.querySelector('.logo__paragraph') && logo.querySelector('.logo__paragraph').remove('.logo__paragraph')
        logo.insertAdjacentHTML('beforeend', '<p class="logo__paragraph">blog</p>')
        navItem.classList.add('navigation-list__item--open-input')
        navList.classList.add('navigation-list--hide-children')
        isOpenInputForSearch = true
    } else {
        const logo = document.querySelector('.header__logo--js')
        logo.style.order = "unset"
        logo.style.marginRight = "auto"
        logo.querySelector('.logo__paragraph').innerHTML = ' '
    }
})


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jc3MvYmxvZy5zYXNzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9ibG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7O0FDTndCOztBQUV4QjtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiYmxvZy5kNWE3NzZmNzFkNzc3NzA5MDNmMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vY3NzL2Jsb2cuc2FzcydcclxuXHJcbmNvbnN0IG5hdmlnYXRpb25CbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmlnYXRpb24tLWJsb2ctanMnKVxyXG5jb25zdCBuYXZMaXN0ID0gbmF2aWdhdGlvbkJsb2cucXVlcnlTZWxlY3RvcignLm5hdmlnYXRpb24tbGlzdC0tanMnKVxyXG5sZXQgaXNPcGVuSW5wdXRGb3JTZWFyY2ggPSBmYWxzZVxyXG5cclxuXHJcblxyXG5uYXZMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgY29uc3QgbmF2SXRlbSA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2xpJylcclxuICAgIG5hdkxpc3QuY2xhc3NMaXN0LnJlbW92ZSgnbmF2aWdhdGlvbi1saXN0LS1oaWRlLWNoaWxkcmVuJylcclxuICAgIG5hdkxpc3QucXVlcnlTZWxlY3RvckFsbCgnLm5hdmlnYXRpb24tbGlzdF9faXRlbS0tanMnKS5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgICAgIG5hdkl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnbmF2aWdhdGlvbi1saXN0X19pdGVtLS1vcGVuLWlucHV0JylcclxuICAgIH0pXHJcbiAgICBjb25zdCB0YXJnZXQgPSBuYXZJdGVtLmRhdGFzZXQudHlwZVxyXG4gICAgbmF2SXRlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG5cclxuICAgIGlmICh0YXJnZXQgPT09ICdzZWFyY2gnKSB7XHJcbiAgICAgICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2xvZ28tLWpzJylcclxuICAgICAgICBsb2dvLnN0eWxlLm9yZGVyID0gXCItMVwiXHJcbiAgICAgICAgbG9nby5zdHlsZS5tYXJnaW5SaWdodCA9IFwiMjRweFwiXHJcbiAgICAgICAgbG9nby5xdWVyeVNlbGVjdG9yKCcubG9nb19fcGFyYWdyYXBoJykgJiYgbG9nby5xdWVyeVNlbGVjdG9yKCcubG9nb19fcGFyYWdyYXBoJykucmVtb3ZlKCcubG9nb19fcGFyYWdyYXBoJylcclxuICAgICAgICBsb2dvLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgJzxwIGNsYXNzPVwibG9nb19fcGFyYWdyYXBoXCI+YmxvZzwvcD4nKVxyXG4gICAgICAgIG5hdkl0ZW0uY2xhc3NMaXN0LmFkZCgnbmF2aWdhdGlvbi1saXN0X19pdGVtLS1vcGVuLWlucHV0JylcclxuICAgICAgICBuYXZMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdmlnYXRpb24tbGlzdC0taGlkZS1jaGlsZHJlbicpXHJcbiAgICAgICAgaXNPcGVuSW5wdXRGb3JTZWFyY2ggPSB0cnVlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19sb2dvLS1qcycpXHJcbiAgICAgICAgbG9nby5zdHlsZS5vcmRlciA9IFwidW5zZXRcIlxyXG4gICAgICAgIGxvZ28uc3R5bGUubWFyZ2luUmlnaHQgPSBcImF1dG9cIlxyXG4gICAgICAgIGxvZ28ucXVlcnlTZWxlY3RvcignLmxvZ29fX3BhcmFncmFwaCcpLmlubmVySFRNTCA9ICcgJ1xyXG4gICAgfVxyXG59KVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==