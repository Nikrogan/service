!function(e){var t={};function n(c){if(t[c])return t[c].exports;var o=t[c]={i:c,l:!1,exports:{}};return e[c].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,c){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(c,o,function(t){return e[t]}.bind(null,o));return c},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2),n(3);if(window.innerWidth<=767)new Swiper(".swiper-container",{slidesPerView:"auto",loop:!0,pagination:{el:".swiper-pagination",clickable:!0}});var c=[],o=[],a=(document.querySelectorAll(".brand__item").forEach((function(e){c.push(e)})),document.querySelectorAll(".repair-technic__item").forEach((function(e){o.push(e)})),c.slice(c.length-3)),i=c.slice(c.length-5),r=document.querySelector(".brand__all"),l=o.slice(o.length-6),s=o.slice(o.length-5),u=!0,d=function(){var e=window.matchMedia("(min-width:1120px)").matches,t=window.matchMedia("(width:768px)").matches;window.matchMedia("(width:320px)").matches?(c.forEach((function(e){e.style.display="block"})),o.forEach((function(e){e.style.display="block"}))):t?(i.forEach((function(e){e.style.display="none"})),l.forEach((function(e){e.style.display="none"}))):e&&(c.forEach((function(e){e.style.display="block"})),a.forEach((function(e){e.style.display="none"})),s.forEach((function(e){e.style.display="none"})))};d(),r.addEventListener("click",(function(){u?(c.forEach((function(e){e.style.display="block"})),u=!1):(u=!0,d())}));var f=document.querySelector(".nav-menu"),m=document.querySelector(".blur"),p=document.querySelector(".modal-call");document.addEventListener("click",(function(e){e.target.matches(".menu-logo__btn")&&(f.classList.add("nav-menu--active"),m.classList.add("blur--active")),e.target.matches("#menu-logo__btn--close")&&(f.classList.remove("nav-menu--active"),m.classList.remove("blur--active")),(e.target.matches(".repair-list__btn")||e.target.matches(".table-price__btn")||e.target.matches(".contacts-list__call"))&&(p.classList.add("modal-call--active"),m.classList.add("blur--active")),e.target.matches(".modal-call__close")&&(p.classList.remove("modal-call--active"),m.classList.remove("blur--active"))}));var y=!0;document.querySelector(".repair-technic__all").addEventListener("click",(function(){y?(o.forEach((function(e){e.style.display="block"})),y=!1):(y=!0,d())}))},function(e,t,n){},function(e,t,n){}]);
//# sourceMappingURL=bundle.js.map