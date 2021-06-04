/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./css/blog.sass":
/*!***********************!*\
  !*** ./css/blog.sass ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./js/functions/heed-blog.js":
/*!***********************************!*\
  !*** ./js/functions/heed-blog.js ***!
  \***********************************/
/***/ (() => {

const navigationBlog = document.querySelector('.navigation--blog-js')
const navList = navigationBlog.querySelector('.navigation-list--js')
let isOpenInputForSearch = false

navList.addEventListener('click', function(e) {
    const navItem = e.target.closest('li')
    navList.classList.remove('navigation-list--hide-children')
    navList.querySelectorAll('.navigation-list__item--js').forEach(el => {
        el.classList.remove('active')
        navItem.classList.remove('navigation-list__item--has-input')
    })
    const target = navItem.dataset.type
    navItem.classList.add('active')

    if (target === 'search') {
        const logo = document.querySelector('.header__logo--js')
        logo.style.order = "-1"
        logo.style.marginRight = "24px"
        logo.querySelector('.logo__paragraph')?.remove('.logo__paragraph')
        logo.insertAdjacentHTML('beforeend', '<p class="logo__paragraph">blog</p>')
        navItem.classList.add('navigation-list__item--has-input')
        navList.classList.add('navigation-list--hide-children')
        isOpenInputForSearch = true

        if ( document.body.clientWidth < 768 ) {
            const header = document.querySelector('.header--js')
            header.classList.add('header--open-input')
        }
    } else {
        const logo = document.querySelector('.header__logo--js')
        logo.style.order = "unset"
        logo.style.marginRight = "auto"
        logo.querySelector('.logo__paragraph').innerHTML = ' '
    }
})

document.addEventListener('click', e => {
    const isTarget = !e.target.closest('.navigation--blog-js')
    if ( isTarget && isOpenInputForSearch ) {
        const logo = document.querySelector('.header__logo--js')
        logo.style.order = "unset"
        logo.style.marginRight = "auto"
        logo.querySelector('.logo__paragraph').innerHTML = ' '

        navList.classList.remove('navigation-list--hide-children')
        navList.querySelectorAll('.navigation-list__item').forEach(el => {
            el.classList.remove('active')
        })

        if ( document.body.clientWidth < 768 ) {
            const header = document.querySelector('.header--js')
            header.classList.remove('header--open-input')
        }
    }
})


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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************!*\
  !*** ./js/blog.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_blog_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @css/blog.sass */ "./css/blog.sass");
/* harmony import */ var _js_functions_heed_blog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/functions/heed-blog */ "./js/functions/heed-blog.js");
/* harmony import */ var _js_functions_heed_blog__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_functions_heed_blog__WEBPACK_IMPORTED_MODULE_1__);
// import '@css/default/variables.sass'
// import '@css/default/reset.sass'
// import '@css/default/default.sass'




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jc3MvYmxvZy5zYXNzIiwid2VicGFjazovLy8uL2pzL2Z1bmN0aW9ucy9oZWVkLWJsb2cuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL2pzL2Jsb2cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7VUN0REQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUN1QjtBQUNXIiwiZmlsZSI6ImJsb2cuMDVhMDUwMGQ0YjAwZjkzMDM3ZTkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjb25zdCBuYXZpZ2F0aW9uQmxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZpZ2F0aW9uLS1ibG9nLWpzJylcclxuY29uc3QgbmF2TGlzdCA9IG5hdmlnYXRpb25CbG9nLnF1ZXJ5U2VsZWN0b3IoJy5uYXZpZ2F0aW9uLWxpc3QtLWpzJylcclxubGV0IGlzT3BlbklucHV0Rm9yU2VhcmNoID0gZmFsc2VcclxuXHJcbm5hdkxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICBjb25zdCBuYXZJdGVtID0gZS50YXJnZXQuY2xvc2VzdCgnbGknKVxyXG4gICAgbmF2TGlzdC5jbGFzc0xpc3QucmVtb3ZlKCduYXZpZ2F0aW9uLWxpc3QtLWhpZGUtY2hpbGRyZW4nKVxyXG4gICAgbmF2TGlzdC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2aWdhdGlvbi1saXN0X19pdGVtLS1qcycpLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICAgICAgbmF2SXRlbS5jbGFzc0xpc3QucmVtb3ZlKCduYXZpZ2F0aW9uLWxpc3RfX2l0ZW0tLWhhcy1pbnB1dCcpXHJcbiAgICB9KVxyXG4gICAgY29uc3QgdGFyZ2V0ID0gbmF2SXRlbS5kYXRhc2V0LnR5cGVcclxuICAgIG5hdkl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuXHJcbiAgICBpZiAodGFyZ2V0ID09PSAnc2VhcmNoJykge1xyXG4gICAgICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19sb2dvLS1qcycpXHJcbiAgICAgICAgbG9nby5zdHlsZS5vcmRlciA9IFwiLTFcIlxyXG4gICAgICAgIGxvZ28uc3R5bGUubWFyZ2luUmlnaHQgPSBcIjI0cHhcIlxyXG4gICAgICAgIGxvZ28ucXVlcnlTZWxlY3RvcignLmxvZ29fX3BhcmFncmFwaCcpPy5yZW1vdmUoJy5sb2dvX19wYXJhZ3JhcGgnKVxyXG4gICAgICAgIGxvZ28uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCAnPHAgY2xhc3M9XCJsb2dvX19wYXJhZ3JhcGhcIj5ibG9nPC9wPicpXHJcbiAgICAgICAgbmF2SXRlbS5jbGFzc0xpc3QuYWRkKCduYXZpZ2F0aW9uLWxpc3RfX2l0ZW0tLWhhcy1pbnB1dCcpXHJcbiAgICAgICAgbmF2TGlzdC5jbGFzc0xpc3QuYWRkKCduYXZpZ2F0aW9uLWxpc3QtLWhpZGUtY2hpbGRyZW4nKVxyXG4gICAgICAgIGlzT3BlbklucHV0Rm9yU2VhcmNoID0gdHJ1ZVxyXG5cclxuICAgICAgICBpZiAoIGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggPCA3NjggKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItLWpzJylcclxuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci0tb3Blbi1pbnB1dCcpXHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbG9nby0tanMnKVxyXG4gICAgICAgIGxvZ28uc3R5bGUub3JkZXIgPSBcInVuc2V0XCJcclxuICAgICAgICBsb2dvLnN0eWxlLm1hcmdpblJpZ2h0ID0gXCJhdXRvXCJcclxuICAgICAgICBsb2dvLnF1ZXJ5U2VsZWN0b3IoJy5sb2dvX19wYXJhZ3JhcGgnKS5pbm5lckhUTUwgPSAnICdcclxuICAgIH1cclxufSlcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICBjb25zdCBpc1RhcmdldCA9ICFlLnRhcmdldC5jbG9zZXN0KCcubmF2aWdhdGlvbi0tYmxvZy1qcycpXHJcbiAgICBpZiAoIGlzVGFyZ2V0ICYmIGlzT3BlbklucHV0Rm9yU2VhcmNoICkge1xyXG4gICAgICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19sb2dvLS1qcycpXHJcbiAgICAgICAgbG9nby5zdHlsZS5vcmRlciA9IFwidW5zZXRcIlxyXG4gICAgICAgIGxvZ28uc3R5bGUubWFyZ2luUmlnaHQgPSBcImF1dG9cIlxyXG4gICAgICAgIGxvZ28ucXVlcnlTZWxlY3RvcignLmxvZ29fX3BhcmFncmFwaCcpLmlubmVySFRNTCA9ICcgJ1xyXG5cclxuICAgICAgICBuYXZMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ25hdmlnYXRpb24tbGlzdC0taGlkZS1jaGlsZHJlbicpXHJcbiAgICAgICAgbmF2TGlzdC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2aWdhdGlvbi1saXN0X19pdGVtJykuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYgKCBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIDwgNzY4ICkge1xyXG4gICAgICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLS1qcycpXHJcbiAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXItLW9wZW4taW5wdXQnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSlcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGltcG9ydCAnQGNzcy9kZWZhdWx0L3ZhcmlhYmxlcy5zYXNzJ1xyXG4vLyBpbXBvcnQgJ0Bjc3MvZGVmYXVsdC9yZXNldC5zYXNzJ1xyXG4vLyBpbXBvcnQgJ0Bjc3MvZGVmYXVsdC9kZWZhdWx0LnNhc3MnXHJcbmltcG9ydCAnQGNzcy9ibG9nLnNhc3MnXHJcbmltcG9ydCAnLi4vanMvZnVuY3Rpb25zL2hlZWQtYmxvZydcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=