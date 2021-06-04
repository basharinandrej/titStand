/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./css/article.sass":
/*!**************************!*\
  !*** ./css/article.sass ***!
  \**************************/
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
/*!***********************!*\
  !*** ./js/article.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_article_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @css/article.sass */ "./css/article.sass");
/* harmony import */ var _js_functions_heed_blog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/functions/heed-blog */ "./js/functions/heed-blog.js");
/* harmony import */ var _js_functions_heed_blog__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_functions_heed_blog__WEBPACK_IMPORTED_MODULE_1__);
// import '@css/default/variables.sass'
// import '@css/default/reset.sass'
// import '@css/default/default.sass'



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jc3MvYXJ0aWNsZS5zYXNzPzc3NjQiLCJ3ZWJwYWNrOi8vLy4vanMvZnVuY3Rpb25zL2hlZWQtYmxvZy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vanMvYXJ0aWNsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7OztVQ3RERDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQzBCO0FBQ1EiLCJmaWxlIjoiYXJ0aWNsZS4wNWEwNTAwZDRiMDBmOTMwMzdlOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImNvbnN0IG5hdmlnYXRpb25CbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmlnYXRpb24tLWJsb2ctanMnKVxyXG5jb25zdCBuYXZMaXN0ID0gbmF2aWdhdGlvbkJsb2cucXVlcnlTZWxlY3RvcignLm5hdmlnYXRpb24tbGlzdC0tanMnKVxyXG5sZXQgaXNPcGVuSW5wdXRGb3JTZWFyY2ggPSBmYWxzZVxyXG5cclxubmF2TGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGNvbnN0IG5hdkl0ZW0gPSBlLnRhcmdldC5jbG9zZXN0KCdsaScpXHJcbiAgICBuYXZMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ25hdmlnYXRpb24tbGlzdC0taGlkZS1jaGlsZHJlbicpXHJcbiAgICBuYXZMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZpZ2F0aW9uLWxpc3RfX2l0ZW0tLWpzJykuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgICAgICBuYXZJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ25hdmlnYXRpb24tbGlzdF9faXRlbS0taGFzLWlucHV0JylcclxuICAgIH0pXHJcbiAgICBjb25zdCB0YXJnZXQgPSBuYXZJdGVtLmRhdGFzZXQudHlwZVxyXG4gICAgbmF2SXRlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG5cclxuICAgIGlmICh0YXJnZXQgPT09ICdzZWFyY2gnKSB7XHJcbiAgICAgICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2xvZ28tLWpzJylcclxuICAgICAgICBsb2dvLnN0eWxlLm9yZGVyID0gXCItMVwiXHJcbiAgICAgICAgbG9nby5zdHlsZS5tYXJnaW5SaWdodCA9IFwiMjRweFwiXHJcbiAgICAgICAgbG9nby5xdWVyeVNlbGVjdG9yKCcubG9nb19fcGFyYWdyYXBoJyk/LnJlbW92ZSgnLmxvZ29fX3BhcmFncmFwaCcpXHJcbiAgICAgICAgbG9nby5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsICc8cCBjbGFzcz1cImxvZ29fX3BhcmFncmFwaFwiPmJsb2c8L3A+JylcclxuICAgICAgICBuYXZJdGVtLmNsYXNzTGlzdC5hZGQoJ25hdmlnYXRpb24tbGlzdF9faXRlbS0taGFzLWlucHV0JylcclxuICAgICAgICBuYXZMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdmlnYXRpb24tbGlzdC0taGlkZS1jaGlsZHJlbicpXHJcbiAgICAgICAgaXNPcGVuSW5wdXRGb3JTZWFyY2ggPSB0cnVlXHJcblxyXG4gICAgICAgIGlmICggZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA8IDc2OCApIHtcclxuICAgICAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci0tanMnKVxyXG4gICAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLS1vcGVuLWlucHV0JylcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19sb2dvLS1qcycpXHJcbiAgICAgICAgbG9nby5zdHlsZS5vcmRlciA9IFwidW5zZXRcIlxyXG4gICAgICAgIGxvZ28uc3R5bGUubWFyZ2luUmlnaHQgPSBcImF1dG9cIlxyXG4gICAgICAgIGxvZ28ucXVlcnlTZWxlY3RvcignLmxvZ29fX3BhcmFncmFwaCcpLmlubmVySFRNTCA9ICcgJ1xyXG4gICAgfVxyXG59KVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgIGNvbnN0IGlzVGFyZ2V0ID0gIWUudGFyZ2V0LmNsb3Nlc3QoJy5uYXZpZ2F0aW9uLS1ibG9nLWpzJylcclxuICAgIGlmICggaXNUYXJnZXQgJiYgaXNPcGVuSW5wdXRGb3JTZWFyY2ggKSB7XHJcbiAgICAgICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2xvZ28tLWpzJylcclxuICAgICAgICBsb2dvLnN0eWxlLm9yZGVyID0gXCJ1bnNldFwiXHJcbiAgICAgICAgbG9nby5zdHlsZS5tYXJnaW5SaWdodCA9IFwiYXV0b1wiXHJcbiAgICAgICAgbG9nby5xdWVyeVNlbGVjdG9yKCcubG9nb19fcGFyYWdyYXBoJykuaW5uZXJIVE1MID0gJyAnXHJcblxyXG4gICAgICAgIG5hdkxpc3QuY2xhc3NMaXN0LnJlbW92ZSgnbmF2aWdhdGlvbi1saXN0LS1oaWRlLWNoaWxkcmVuJylcclxuICAgICAgICBuYXZMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZpZ2F0aW9uLWxpc3RfX2l0ZW0nKS5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpZiAoIGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggPCA3NjggKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItLWpzJylcclxuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlci0tb3Blbi1pbnB1dCcpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gaW1wb3J0ICdAY3NzL2RlZmF1bHQvdmFyaWFibGVzLnNhc3MnXHJcbi8vIGltcG9ydCAnQGNzcy9kZWZhdWx0L3Jlc2V0LnNhc3MnXHJcbi8vIGltcG9ydCAnQGNzcy9kZWZhdWx0L2RlZmF1bHQuc2FzcydcclxuaW1wb3J0ICdAY3NzL2FydGljbGUuc2FzcydcclxuaW1wb3J0ICcuLi9qcy9mdW5jdGlvbnMvaGVlZC1ibG9nJ1xyXG4iXSwic291cmNlUm9vdCI6IiJ9