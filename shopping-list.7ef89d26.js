var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},s=e.parcelRequired7c6;null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in o){var s=o[e];delete o[e];var t={id:e,exports:{}};return n[e]=t,s.call(t.exports,t,t.exports),t.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},e.parcelRequired7c6=s),s("bUb57"),s("ghT7p"),s("7tzR7");s("7rYDH");s("epHO8");const t=document.querySelector(".js-shop-list"),r=document.querySelector(".js-shop-background");let a=JSON.parse(localStorage.getItem("shopplist"));let i=null;function l(e){const n=e.target.closest("[data-id]").dataset.id;if(e.target.classList.contains("shop-delete-btn")){e.target.closest("[data-id]").classList.add("hidden"),function(e){a=JSON.parse(localStorage.getItem("shopplist"));const n=a.filter((n=>n._id!==e));localStorage.setItem("shopplist",JSON.stringify(n)),n.length||d()}(n)}}function d(){t.innerHTML='\n  \n<div class="shop-base-background js-shop-background">\n  <p class="shop-text-backgr">\n    This page is empty, add some books and proceed to order.\n  </p>\n  <div class="shop-img-backgr"></div>\n</div>'}null!==a&&(!function(e){if(0===e.length)return void d();r&&r.setAttribute("hidden","");let n;t&&(n=e.map((({_id:e,author:n,title:o,list_name:s,book_image:r,description:a,buy_links:l})=>{const d=`<li data-id=${e} class="shop-item-book">\n       <img class="shop-book-img" alt="Wrapper of book" src="${r}" />\n       <div class="wrapper-descr">\n              <div class="shop-info-book">\n            <h2 class="shop-secondary-title">${o}</h2>\n            <p class="shop-category ">${s}</p>\n            <p class="shop-desc dark-desc ">${a}</p>\n                </div>\n            <div class="shop-author-wrapper">\n              <p class="shop-author">${n}</p>\n              <ul class="shop-platform-list">\n        \n                \n                  <a href="${l[0].url}" class="shop-link-amazon dark-amazon" noopener noreferrer>\n                                       </a>\n \n                  <a href="${l[1].url}" class="shop-link-applebook" noopener noreferrer>\n                    </a>\n\n    \n                  <a href="${l[4].url}" class="shop-link-bookshop">\n                    </a>\n                 \n  \n              </ul>\n        \n          </div>\n          </div> \n   \n           <button type="button" class="shop-delete-btn js-delete-btn">\n                  </button>\n        </li>`;return t.insertAdjacentHTML("beforeend",d),i=document.querySelector(".shop-item-book"),d})).join(""));t.addEventListener("click",l),t.innerHTML="",t.insertAdjacentHTML("beforeend",n)}(a),r.classList.add("hidden"));
//# sourceMappingURL=shopping-list.7ef89d26.js.map
