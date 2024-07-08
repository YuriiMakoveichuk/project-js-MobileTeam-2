import{S as w,A as v}from"./assets/vendor-607157ac.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const y=document.querySelector(".js-covers-container"),L=document.querySelectorAll(".covers-item");function h(e){const n={top:window.scrollY+e.getBoundingClientRect().top,bottom:window.scrollY+e.getBoundingClientRect().bottom},i={top:window.scrollY,bottom:window.scrollY+document.documentElement.clientHeight};if(n.bottom>i.top&&n.top<i.bottom)for(const r of L)r.classList.add("js-covers-item")}window.addEventListener("scroll",function(){h(y)});document.addEventListener("DOMContentLoaded",()=>{window.innerWidth<1440&&new w(".swiper-about",{slidesPerView:2,spaceBetween:0,slideToClickedSlide:!0,loop:!0,loopedSlides:1,keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{320:{loop:!0,loopedSlides:1,slidesPerView:2,spaceBetween:0,slideToClickedSlide:!0},768:{slidesPerView:3,spaceBetween:0,slideToClickedSlide:!0,loop:!0,loopedSlides:1}},navigation:{nextEl:".swiper-button-next"}})});const m=document.querySelector(".list-my-skills"),g=m.children,S=document.querySelector(".btn-next-skill");let a=g[0];function b(){a.classList.remove("active");let e=a.nextElementSibling;e||(e=m.firstElementChild),a=e,a.classList.add("active")}S.addEventListener("click",()=>{b()});document.addEventListener("keydown",e=>{e.key==="ArrowRight"&&b()});const E=new v(".accordion-container-about-me",{duration:500,showMultiple:!0,onOpen:function(e){const n=e.querySelector(".icon-btn-show-content");e.querySelector(".icon-btn-hide-content").classList.remove("visually-hidden"),n.classList.add("visually-hidden")},onClose:function(e){const n=e.querySelector(".icon-btn-show-content");e.querySelector(".icon-btn-hide-content").classList.add("visually-hidden"),n.classList.remove("visually-hidden")}});E.open(0);document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".menu-item a").forEach(t=>{t.addEventListener("click",o=>{o.preventDefault(),n();const c=t.getAttribute("href").substring(1),f=document.getElementById(c);f&&f.scrollIntoView()})});function n(){const t=document.querySelector(".backdrop");t&&(t.classList.remove("show"),document.body.style.overflow="")}const i=document.querySelector(".menu-open-button-btn");i&&i.addEventListener("click",()=>{const t=document.querySelector(".backdrop");t&&(t.classList.add("show"),document.body.style.overflow="hidden")});const r=document.querySelector(".close-button");r&&r.addEventListener("click",n)});new w(".swiper",{centeredSlides:!0,centeredSlidesBounds:!0,spaceBetween:20,navigation:{nextEl:".swiper-button-next.projects-btn",prevEl:".swiper-button-prev.projects-btn"},keyboard:{enabled:!0,onlyInViewport:!0}});const u=document.querySelector(".reviews-list"),l=document.querySelector(".btn-go-left"),d=document.querySelector(".btn-go-right");let s;async function k(){const n=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(!n.ok)throw new Error(n.status);return await n.json()}function q(e){return`<li class="swiper-slide list-item">
    <img class="person-avatar" src="${e.avatar_url}" alt="Avatar">
    <p class="person-name">${e.author}</p>
    <p class="person-review">${e.review}</p>
  </li>`}async function B(){try{const e=await k();if(e.length===0){u.innerHTML='<li class="swiper-slide list-item">Not found</li>',l.classList.add("disabled"),d.classList.add("disabled");return}u.innerHTML=e.map(q).join(""),s=new w(".swiper-container",{slidesPerView:"auto",navigation:{nextEl:".btn-go-right",prevEl:".btn-go-left"},breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}}}),l.addEventListener("click",()=>{s&&(s.slidePrev(),p())}),d.addEventListener("click",()=>{s&&(s.slideNext(),p())}),p()}catch(e){console.error("Error fetching reviews:",e),u.innerHTML='<li class="swiper-slide list-item">Not found</li>',l.classList.add("disabled"),d.classList.add("disabled")}}function p(){s&&(s.isBeginning?l.classList.add("disabled"):l.classList.remove("disabled"),s.isEnd?d.classList.add("disabled"):d.classList.remove("disabled"))}B();
//# sourceMappingURL=commonHelpers.js.map
