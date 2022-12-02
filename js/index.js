let swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 70,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  }
});


let tabsBtn = document.querySelectorAll('.stages__link');
let tabsItemL = document.querySelectorAll('.blog__left-x');
let tabsItemR = document.querySelectorAll('.blog__right');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const pathL = e.currentTarget.dataset.path;
    const pathR = e.currentTarget.dataset.path;


    tabsBtn.forEach(function(btn){
      btn.classList.remove('stages__link--active')});
    e.currentTarget.classList.add('stages__link--active');

    tabsItemL.forEach(function(element){
      element.classList.remove('blog__left--active')});
    document.querySelector(`[data-targetl="${pathL}"]`).classList.add('blog__left--active');

    tabsItemR.forEach(function(element){
      element.classList.remove('blog__right--active')});
    document.querySelector(`[data-targetr="${pathR}"]`).classList.add('blog__right--active');
  });
});

$('.accordion-list').accordion({
  heightStyle: "content",
  elementClass: 'accordion',
  triggerClass: 'accordion__control',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active',
  collapsible: true,
  active: false,
});

let control = document.querySelectorAll('.accordion__control');

control.forEach(function(element){
  element.addEventListener('click', function(e) {
    control.forEach(function(){
      e.currentTarget.classList.toggle('accordion__control--active');
    });
  });
});

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',

  function () {
    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
});

menuLinks.forEach(function (el) {
  el.addEventListener('click', function() {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');
  });
});

let search = document.querySelector('.nav__link-search');
let line = document.querySelector('.header__search');
let svg = document.querySelector('.header__svg');

search.addEventListener('click',

  function () {
    line.classList.add('header__search--active');
});

svg.addEventListener('click',

  function () {
    line.classList.remove('header__search--active');
});
