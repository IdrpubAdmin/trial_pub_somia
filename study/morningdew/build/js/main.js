(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";document.addEventListener("DOMContentLoaded",function(){new Swiper(".main-slide",{navigation:{nextEl:".main-slide .swiper-button-next",prevEl:".main-slide .swiper-button-prev"},pagination:{el:".main-slide .swiper-pagination"},autoplay:{delay:5500,disableOnInteraction:!1},loop:!0,loopAdditionalSlides:1,slidesPerView:"auto",centeredSlides:!0}),new Swiper(".review-slider",{navigation:{nextEl:".review-slider-btn-wrap .swiper-button-next",prevEl:".review-slider-btn-wrap .swiper-button-prev"},autoplay:{delay:5500,disableOnInteraction:!1},slidesPerView:5,spaceBetween:36,loop:!0})}),document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll(".menuhover"),n=document.querySelectorAll(".dropdown"),t=document.querySelectorAll(".dep2-bg");function i(i){e[i].addEventListener("mouseover",function(){return n[i].style.display="block",t[0].style.display="block"}),e[i].addEventListener("mouseout",function(){return n[i].style.display="none",t[0].style.display="none"})}for(var o=0;o<5;o++)i(o)});

},{}]},{},[1]);
