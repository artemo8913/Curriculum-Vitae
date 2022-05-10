// https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

const mouse = document.querySelector(".mouse");
const container = document.querySelector('.container');
const sections = document.getElementsByTagName('section');
const aside = document.querySelector('.aside-menu');
const asideBtnOpen = document.querySelector('.aside-menu__btn-open');
const asideAreaOpen = document.querySelector('.aside-menu__area-open');
const asideBtnClose = document.querySelector('.aside-menu__btn-close');
const titleBg = document.querySelector('.title__bg');
const links = document.querySelectorAll('a');
const anchors = document.querySelectorAll('a[linkTo]');
const btns = document.querySelectorAll('.btn');
const carouselBtnLeft = document.querySelector(".carousel__btn_left");
const carouselBtnRight = document.querySelector(".carousel__btn_right");
const scrollProgressBar = document.querySelector(".scrollInfo__progress-bar");
const hint = document.querySelector(".scrollInfo__hint");

horizontalWheel(container);
setWhiteMouseColor(titleBg);
Array.from(links).forEach(link => setLinkHover(link));
Array.from(btns).forEach(btn => magnetBtn(btn, mouse));

setShowAside(aside, asideBtnOpen, asideAreaOpen);
setHideAside(aside, asideBtnClose, asideBtnOpen);
setAnchors(sections, anchors, aside, asideBtnClose, asideBtnOpen);
setProgressBar(scrollProgressBar, container);
hideHint(hint, container);
setCarouselNav(carouselBtnLeft, carouselBtnRight, sections);