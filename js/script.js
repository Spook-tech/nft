'use strict'
let footer_links = document.querySelectorAll('.footer__menu__link');
footer_links.forEach(function(footer_link) {
   // Вешаем событие клик
   let i = 0;
   footer_link.addEventListener('click', function(e) {
      for (i = 0; i != footer_links.length; i++){
         footer_links[i].classList.remove('active');
      }
     footer_link.classList.add('active');
   })
 })
let header__links = document.querySelectorAll('.header__menu__link');
header__links.forEach(function(header__link) {
   // Вешаем событие клик
   let i = 0;
   header__link.addEventListener('click', function(e) {
      for (i = 0; i != header__links.length; i++){
         header__links[i].classList.remove('active');
      }
      header__link.classList.add('active');
      console.log(5);
   })
})

let menuBurger = document.querySelector(".header__burger");
let headerMenu = document.querySelector(".header__menu");
menuBurger.addEventListener("click", function(){
   menuBurger.classList.toggle("active");
   headerMenu.classList.toggle("active");
   document.body.classList.toggle("lock");
});

// Анимация при скролле
let elements = document.querySelectorAll(".to__anim");
let html = document.querySelector('html');

if (elements) {
   console.log(elements);
   giveActive()
   window.addEventListener('scroll', giveActive);
   function giveActive(){
      for (let i = 0; i != elements.length; i++){
         let animItem = elements[i];
         let itemHeight = animItem.offsetHeight;
         let itemOffset = offset(animItem).top;
         const coefficient = 4;
         let StartAnimPoint = window.innerHeight - itemHeight / coefficient;

         if((pageYOffset > itemOffset - StartAnimPoint) && pageYOffset < (itemOffset + itemHeight)){
            animItem.classList.add("active");
         }
      }
   }
   function offset(el) {
      var rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
}
