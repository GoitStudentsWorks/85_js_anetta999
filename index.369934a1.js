!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=e.parcelRequired7c6;null==a&&((a=function(t){if(t in n)return n[t].exports;if(t in o){var e=o[t];delete o[t];var a={id:t,exports:{}};return n[t]=a,e.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){o[t]=e},e.parcelRequired7c6=a),a("iE7OH").register(JSON.parse('{"EVgbq":"index.369934a1.js","4IAcE":"image1@1x.06fa7713.png","ixwRt":"image1@2x.08fa6ff3.png","gcnlj":"image2@1x.57ecc8dc.png","hG39U":"image2@2x.c5385d25.png","iYXGX":"image3@1x.e5effbae.png","bPJ9f":"image3@2x.3b8922c8.png","eAXxV":"sprite.dee5ce80.svg","01IoP":"shopping-list.575bcf7c.js"}')),a("i8Q71"),a("8Veln");var r,c=a("bpxeT"),i=a("2TvXO"),s=a("b7ONl");r=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("4IAcE");var l;l=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("ixwRt");var d;d=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("gcnlj");var u;u=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("hG39U");var m;m=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("iYXGX");var f;f=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("bPJ9f");var p;p=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("eAXxV");var v=document.querySelector(".modal"),g=document.querySelector(".books-container-list"),b=document.querySelector(".backdrop"),h=document.body,k="shopplist";function y(){return(y=t(c)(t(i).mark((function e(n){var o,a,r,c,l,d;return t(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),"UL"!==n.target.nodeName&&"BUTTON"!==n.target.nodeName){t.next=3;break}return t.abrupt("return");case 3:return o=n.target.id,a=JSON.parse(localStorage.getItem(k))||[],t.prev=5,t.next=8,(0,s.fetchBookId)(o);case 8:r=t.sent,v.innerHTML=E(r),document.querySelector(".modal-close-btn").addEventListener("click",L),b.classList.remove("is-hidden"),h.classList.add("no-scroll"),window.addEventListener("keydown",w),c=document.querySelector(".modal-add-btn"),l=document.querySelector(".modal-remove-text"),a.some((function(t){return t._id===o}))?(c.textContent="remove from the shopping list",c.classList.replace("modal-add-btn","modal-remove-btn"),l.style.display="block",(d=document.querySelector(".modal-remove-btn")).addEventListener("click",(function(t){_(t,d,l,r)}))):c.addEventListener("click",(function(t){x(t,c,l,r)})),t.next=23;break;case 20:t.prev=20,t.t0=t.catch(5),console.error(t.t0);case 23:return t.prev=23,t.finish(23);case 25:case"end":return t.stop()}}),e,null,[[5,20,23,25]])})))).apply(this,arguments)}function x(t,e,n,o){if(t.target.classList.contains("modal-add-btn")){var a=JSON.parse(localStorage.getItem(k))||[];a.push(o),localStorage.setItem(k,JSON.stringify(a)),e.textContent="remove from the shopping list",e.classList.replace("modal-add-btn","modal-remove-btn"),n.style.display="block";var r=document.querySelector(".modal-remove-btn");r.addEventListener("click",(function(t){_(t,r,n,o)}))}}function _(t,e,n,o){if(t.target.classList.contains("modal-remove-btn")){var a=t.target.closest(".modal-id").dataset.id,r=(JSON.parse(localStorage.getItem(k))||[]).filter((function(t){return t._id!==a}));localStorage.setItem(k,JSON.stringify(r)),e.textContent="add to shopping list",e.classList.replace("modal-remove-btn","modal-add-btn"),n.classList.toggle("is-hidden"),e.addEventListener("click",(function(t){x(t,e,n,o)}))}}function E(e){var n=e._id,o=e.author,a=e.title,c=e.book_image,i=e.description,s=e.buy_links;return'\n  <button type="button" class="modal-close-btn dark-close-btn" data-modal-close>\n        <svg class="modal-close-png dark-close-png">\n          <use href="'.concat(t(p),'#x-close"></use>\n        </svg>\n      </button>\n  <div data-id=').concat(n,' class="modal-id dark-modal-id">\n  <div class="modal-card-item">\n   <img src="').concat(c,'" alt="').concat(a,'" class="modal-book-img dark-modal-book-img" />\n   <div class="">\n     <h2 class="modal-book-name dark-modal-book-name">').concat(a,'</h2>\n     <p class="modal-book-autor dark-modal-book-autor">').concat(o,'</p>\n     <p class="modal-book-info dark-modal-book-info">').concat(i,'</p>\n     <div class="modal-box-link dark-modal-box-link">\n       <a href="').concat(s[0].url,'" class="modal-link dark-modal-link" target="_blank">\n       <img class="modal-link-svg dark-modal-link-svg dark-amazon"\n       src="').concat(t(r),'"\n       srcset="\n       ').concat(t(r)," 1x,\n       ").concat(t(l),' 2x"\n       alt="amazon"\n       width="62"\n       height="19"\n     />\n       </a>\n       <a href="').concat(s[1].url,'" class="modal-link dark-modal-link" target="_blank">\n       <img class="modal-link-svg dark-modal-link-svg"\n       src="').concat(t(d),'"\n       srcset="\n       ').concat(t(d)," 1x,\n       ").concat(t(u),' 2x"\n       alt="apple-books"\n       width="33"\n       height="32"\n     />\n       </a>\n       <a href="').concat(s[4].url,'" target="_blank" class="modal-link dark-modal-link">\n       <img class="modal-link-svg dark-modal-link-svg"\n          src="').concat(t(m),'"\n          srcset="\n          ').concat(t(m)," 1x,\n          ").concat(t(f),' 2x"\n          alt="bookshop"\n          width="38"\n          height="36"\n        />\n     </a>\n       </div>\n    </div>\n    </div>\n    <button type="button" class="modal-add-btn dark-modal-add-btn">add to shopping list</button>\n    <p class="modal-remove-text dark-modal-remove-text">Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>\n    </div>\n       ')}function L(){b.classList.add("is-hidden"),h.classList.remove("no-scroll"),window.removeEventListener("keydown",w)}function w(t){"Escape"===t.code&&(L(),h.classList.remove("no-scroll"),window.removeEventListener("keydown",w))}g.addEventListener("click",(function(t){return y.apply(this,arguments)})),b.addEventListener("click",(function(t){t.target.classList.contains("backdrop")&&L()}));c=a("bpxeT");var S=a("1t1Wn"),O=(i=a("2TvXO"),s=a("b7ONl"),c=a("bpxeT"),i=a("2TvXO"),s=a("b7ONl"),document.querySelector(".loader-backdrop")),H=document.body;function q(){O.classList.remove("loader-is-hidden"),H.classList.add("loader-open")}function T(){O.classList.add("loader-is-hidden"),H.classList.remove("loader-open")}var N,j,R=document.querySelector(".categories_list"),C=document.querySelector(".books-container-list"),A="";function B(t){return J.apply(this,arguments)}function J(){return(J=t(c)(t(i).mark((function e(n){var o;return t(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return C.innerHTML="",q(),t.prev=2,t.next=5,(0,s.fetchSelectCategory)(n);case 5:o=t.sent,I(n),C.innerHTML=U(o),T(),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(2),console.error(t.t0);case 14:case"end":return t.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}function I(t){N=document.querySelector(".title-color1"),j=document.querySelector(".title-color2"),N.textContent=t.substring(0,M(t)),j.textContent=t.substring(M(t))}function M(t){return t.lastIndexOf(" ")}function U(t){var e=V();return t.map((function(t){var n=t._id,o=t.book_image,a=t.title,r=t.author,c=o||e;return'<li class="book-card" id="'.concat(n,'">\n  <a href="" class="book-card-thumb" id="').concat(n,'"\n    ><div class="thumb">\n    <img id="').concat(n,'" src="').concat(c,'" alt="').concat(a,'" class="books-image" onerror="handleImageError(this, ').concat(e,')" />\n    <div id="').concat(n,'" class="overlay"><p id="').concat(n,'"> quick view</p></div>\n    </div>\n    <p id="').concat(n,'" class="book-card-title">').concat(F(a),'</p>\n    <p id="').concat(n,'" class="book-card-author">').concat(X(r),"</p\n  ></a></li>")})).join("")}function V(){return window.matchMedia("(min-width: 1440px)").matches?"../img/default_images/default_img_desc.jpg":window.matchMedia("(min-width: 768px)").matches?"../img/default_images/default_img_table.jpg":"../img/default_images/default_img_mobile.jpg"}function F(t){return t.length>17?t.slice(0,17)+"...":t}function X(t){return t.length>28?t.slice(0,28)+"...":t}R.addEventListener("click",(function(t){var e=document.querySelector(".chosen_category");if(t.target!==e&&t.target!==t.currentTarget){if("All Categories"===t.target.textContent)return $(),A=t.target.textContent,e.classList.remove("chosen_category"),t.target.classList.add("chosen_category"),I("Best Sellers Books"),void(e=t.target);A=t.target.textContent,e.classList.remove("chosen_category"),t.target.classList.add("chosen_category"),e=t.target,B(A)}}));c=a("bpxeT"),i=a("2TvXO"),s=a("b7ONl");var D=document.querySelector(".categories_list");function G(){return P.apply(this,arguments)}function P(){return(P=t(c)(t(i).mark((function e(){var n;return t(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,s.fetchCategoryList)();case 3:n=t.sent,D.insertAdjacentHTML("beforeend",W(n)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(error);case 10:case"end":return t.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function W(t){return t.map((function(t){var e=t.list_name;return'<li class="js_category_list_element category_list_element" data="'.concat(e,'">').concat(e,"</li>")})).join("")}function $(){return z.apply(this,arguments)}function z(){return(z=t(c)(t(i).mark((function e(){var n,o;return t(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=document.querySelector(".books-container-list")).innerHTML="",q(),t.prev=3,t.next=6,(0,s.fetchTopBooks)();case 6:o=t.sent,I("Best Sellers Books"),n.innerHTML=K(o),Y(document.querySelectorAll(".button-open-categories")),T(),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(3),console.error(t.t0);case 17:case"end":return t.stop()}}),e,null,[[3,14]])})))).apply(this,arguments)}function Y(t){t.forEach((function(t){t.addEventListener("click",(function(){var e=t.getAttribute("data-list");B(e);var n=document.querySelector('[data="'.concat(e,'"]'));document.querySelector(".chosen_category").classList.remove("chosen_category"),n.classList.add("chosen_category"),n.scrollIntoView({block:"center",behavior:"smooth"})}))}))}function K(t){return t.map((function(t){var e=t.list_name,n=t.books;return'<li class="top-books-ul">\n      <h2 class="top-books-category">'.concat(e,'</h2>\n      <ul class="top-books-list">').concat(function(t){var e=V();return t.map((function(t){var n=t._id,o=t.book_image,a=t.title,r=t.author,c=o||e;return'<li class="top-book-card" id="'.concat(n,'">\n  <a href="" class="book-card-thumb" id="').concat(n,'">\n    <div class="thumb">\n      <img id="').concat(n,'" src="').concat(c,'" alt="').concat(a,'" class="books-image" onerror="handleImageError(this, ').concat(e,')" />\n      <div class="overlay" id="').concat(n,'"><p id="').concat(n,'"> quick view</p></div>\n    </div>\n    <p id="').concat(n,'" class="book-card-title">').concat(F(a),'</p>\n    <p id="').concat(n,'" class="book-card-author">').concat(X(r),"</p>\n    </a></li>")})).join("")}(n),"</ul>\n      ").concat(function(t){return'\n      <div class="div-button">\n        <button data-list="'.concat(t,'" href="" class="button-open-categories">SEE MORE</button>\n      </div>\n    ')}(e),"\n        </li>\n        ")})).join("")}function Q(){return(Q=t(c)(t(i).mark((function e(){return t(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return q(),e.prev=1,e.t0=t(S),e.next=5,Promise.all([G(),$()]);case 5:e.t1=e.sent,(0,e.t0)(e.t1,0),T(),e.next=13;break;case 10:e.prev=10,e.t2=e.catch(1),console.error(e.t2);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}!function(){Q.apply(this,arguments)}(),a("32ZrB");var Z,tt=a("l5bVx"),et="Expected a function",nt=/^\s+|\s+$/g,ot=/^[-+]0x[0-9a-f]+$/i,at=/^0b[01]+$/i,rt=/^0o[0-7]+$/i,ct=parseInt,it="object"==typeof e&&e&&e.Object===Object&&e,st="object"==typeof self&&self&&self.Object===Object&&self,lt=it||st||Function("return this")(),dt=Object.prototype.toString,ut=Math.max,mt=Math.min,ft=function(){return lt.Date.now()};function pt(t,e,n){var o,a,r,c,i,s,l=0,d=!1,u=!1,m=!0;if("function"!=typeof t)throw new TypeError(et);function f(e){var n=o,r=a;return o=a=void 0,l=e,c=t.apply(r,n)}function p(t){return l=t,i=setTimeout(g,e),d?f(t):c}function v(t){var n=t-s;return void 0===s||n>=e||n<0||u&&t-l>=r}function g(){var t=ft();if(v(t))return b(t);i=setTimeout(g,function(t){var n=e-(t-s);return u?mt(n,r-(t-l)):n}(t))}function b(t){return i=void 0,m&&o?f(t):(o=a=void 0,c)}function h(){var t=ft(),n=v(t);if(o=arguments,a=this,s=t,n){if(void 0===i)return p(s);if(u)return i=setTimeout(g,e),f(s)}return void 0===i&&(i=setTimeout(g,e)),c}return e=gt(e)||0,vt(n)&&(d=!!n.leading,r=(u="maxWait"in n)?ut(gt(n.maxWait)||0,e):r,m="trailing"in n?!!n.trailing:m),h.cancel=function(){void 0!==i&&clearTimeout(i),l=0,o=s=a=i=void 0},h.flush=function(){return void 0===i?c:b(ft())},h}function vt(e){var n=void 0===e?"undefined":t(tt)(e);return!!e&&("object"==n||"function"==n)}function gt(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(tt)(e))||function(t){return!!t&&"object"==typeof t}(e)&&"[object Symbol]"==dt.call(e)}(e))return NaN;if(vt(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=vt(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(nt,"");var o=at.test(e);return o||rt.test(e)?ct(e.slice(2),o?2:8):ot.test(e)?NaN:+e}Z=function(t,e,n){var o=!0,a=!0;if("function"!=typeof t)throw new TypeError(et);return vt(n)&&(o="leading"in n?!!n.leading:o,a="trailing"in n?!!n.trailing:a),pt(t,e,{leading:o,maxWait:e,trailing:a})};var bt=document.querySelector(".scroll-up");bt.addEventListener("click",(function(){return window.scrollTo({top:0,left:0,behavior:"smooth"})})),document.addEventListener("scroll",t(Z)((function(){var t=document.documentElement,e=t.scrollTop,n=t.scrollHeight-t.clientHeight;e/n>.05?bt.classList.add("showButton"):bt.classList.remove("showButton")}),1e3)),a("7hKzD")}();
//# sourceMappingURL=index.369934a1.js.map
