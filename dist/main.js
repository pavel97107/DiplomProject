!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=function(e,t,n,o){var c=document.querySelector(e),r=document.querySelector("body"),u=function(e){e.classList.toggle("active-block")},a=function(){if(!document.querySelector(".status"))return!1;document.querySelector(".status").remove()};r.addEventListener("click",(function(r){var i=r.target;i.matches(t)&&u(c),i.closest(n)&&(u(c),a(),o()),i.matches(e)&&(u(c),a(),o())}))},c=function(){var e=document.querySelector(".sentence .row"),t=document.querySelector(".add-sentence-btn"),n=e.querySelectorAll(".col-xs-12"),o=document.querySelectorAll(".windowAn"),c={count:-75,speed:2.5},r={count:0,speed:.02},u=function e(){o.forEach((function(e){e.style.transform="translateY(".concat(c.count,"%)")})),c.count+=c.speed,c.count<=0&&requestAnimationFrame(e)},a=function e(){o.forEach((function(e){e.style.opacity="".concat(r.count)})),r.count+=r.speed,r.count<=1&&requestAnimationFrame(e)};t.addEventListener("click",(function(){n.forEach((function(e){(e.classList.contains("hidden")||e.classList.contains("visible-sm-block"))&&e.classList.add("active-block")})),requestAnimationFrame(a),requestAnimationFrame(u),t.style.display="none"}))},r=function(e,t,n){var o=document.querySelectorAll(e),c=document.querySelectorAll(t),r=document.querySelector(n),u=document.querySelectorAll(".btn-step"),a=document.querySelector(".calc-content");c[0].style.maxHeight="".concat(c[0].scrollHeight,"px"),c[0].style.transition="max-height 0.5s ease-out";r.addEventListener("click",(function(t){var n=t.target.closest(e);n&&o.forEach((function(e,t){n===e&&function(e){for(var t=0;t<c.length;t++)t===e?(c[t].classList.add("in"),c[t].classList.add("heightAnimation"),c[t].style.maxHeight="".concat(c[t].scrollHeight,"px")):c[t].style.maxHeight="".concat(c[t].scrollHeight-c[t].scrollHeight,"px")}(t)})),console.log(t.target)})),u[0].addEventListener("click",(function(){a.style.maxHeight="".concat(a.scrollHeight-a.scrollHeight,"px")}))},u=function(){document.querySelectorAll("input").forEach((function(e){"user_phone"!==e.name&&"user_name"!==e.name&&"user_quest"!==e.name||(e.value="")}))},a=function(e,t,n){var o=document.querySelector(e),c=document.createElement("div");c.classList.add("status"),c.style.fontSize="20px",c.style.fontWeight="500";var r=document.querySelector(".userQuestion"),u=document.getElementById("calc-result");o.addEventListener("input",(function(e){var t=e.target,n=t.value;"user_name"===t.name&&(t.value=n.replace(/[^а-яА-я]/g,""));var o=t.value.split("");if("user_phone"===t.name){var c=!0,r=!1,u=void 0;try{for(var a,i=o[Symbol.iterator]();!(c=(a=i.next()).done);c=!0){var l=a.value;t.value="+"===l?"+":n.replace(/[^+0-9]/g,"")}}catch(e){r=!0,u=e}finally{try{c||null==i.return||i.return()}finally{if(r)throw u}}}}));var a=function(e){if(200!==e.status)throw c.textContent="Что то пошло не так!",new Error("status network not 200");c.textContent="Спасибо, мы скоро свяжемся с вами!",t(),setTimeout((function(){c.remove()}),3e3)};o.addEventListener("submit",(function(e){e.preventDefault(),o.append(c),c.textContent="Загрузка....";var t=new FormData(o),l={};r.value&&(l.userQuestion=r.value),u.value&&(l.resultCalc=n),t.forEach((function(e,t){l[t]=e})),i(l).then(a).catch()}));var i=function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}},i={};o(".popup-call",".call-btn",".callBtn",(function(){return u()})),o(".popup-discount",".discount-btn",".discountBtn",(function(){return u()})),o(".popup-check",".check-btn",".checkBtn",(function(){return u()})),o(".popup-consultation",".consultation-btn",".consultationBtn",(function(){return u()})),function(){var e=document.querySelector(".typeSeptic"),t=document.querySelector(".checkBottom"),n=document.querySelectorAll(".itemDisabled"),o=document.querySelector(".calc-container"),c=(document.querySelector(".btnShowTotal"),document.querySelector(".diameterRing")),r=document.querySelector(".numberRing"),u=document.querySelector(".diameterRing2"),a=document.querySelector(".numberRing2"),l=document.getElementById("calc-result"),s=document.querySelector(".distance"),d={price:1e4,total:"",bottomValue:1e3};o.addEventListener("click",(function(o){var c=o.target;c===c.closest(".typeSeptic")&&(e.classList.toggle("two"),e.classList.contains("two")?(n.forEach((function(e){e.classList.remove("itemDisabled")})),d.bottomValue=2e3,d.price=15e3):(n.forEach((function(e){e.classList.add("itemDisabled")})),d.bottomValue=1e3,d.price=1e4)),c===c.closest(".checkBottom")&&(t.classList.toggle("bottomFalse"),t.classList.contains("bottomFalse")?d.bottomValue=0:e.classList.contains("two")?d.bottomValue=2e3:d.bottomValue=1e3)}));o.addEventListener("change",(function(e){var t=e.target;(t.matches("select")||t.matches("input"))&&(d.numberRing=r.options[r.selectedIndex].value,d.diameterRing=c.options[c.selectedIndex].value,d.numberRing2=a.options[a.selectedIndex].value,d.diameterRing2=u.options[u.selectedIndex].value,15e3===d.price?(d.total=d.price*d.diameterRing*d.numberRing*d.diameterRing2*d.numberRing2+d.bottomValue,d.distanceHome=+s.value):(d.total=d.price*d.diameterRing*d.numberRing+d.bottomValue,delete d.diameterRing2,delete d.numberRing2,d.distanceHome=+s.value),l.value=d.total,i.calc=JSON.stringify(d))}))}(),a(".popup-call .capture-form",(function(){return u()}),i),a(".section-form .capture-form"),a(".popup-discount .capture-form",(function(){return u()})),a(".popup-check .capture-form",(function(){return u()})),a(".popup-consultation .capture-form",(function(){return u()})),a(".main-form"),c(),r(".panelElement",".collapseElement",".slideInDown"),r(".calc-heading",".calc-content",".calc-container"),r(".btn-step",".btn-content",".calc-container")}]);