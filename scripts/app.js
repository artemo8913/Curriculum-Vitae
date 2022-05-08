const mouse = document.querySelector(".mouse");
const container = document.querySelector('.container');
const sections = document.getElementsByTagName('section');
const aside = document.querySelector('.aside-menu');
const asideBtnOpen = document.querySelector('.aside-menu__btn-open');
const asideBtnClose = document.querySelector('.aside-menu__btn-close');
const titleBg = document.querySelector('.title__bg');
const paragraphsFirst = document.querySelectorAll('section p:first-of-type');
const links = document.querySelectorAll('a');
const anchors = document.querySelectorAll('a[linkTo]');
const paragraphsOther = document.querySelectorAll('section p:not(:first-of-type)');
const headers2 = document.querySelectorAll('section h2');
const imgs = document.querySelectorAll('section img');
const btns = document.querySelectorAll('.btn');

horizontalWheel(container);
setWhiteMouseColor(titleBg);
// Array.from(headers2).forEach(item => setParallax(container, item, 160, 10));
// Array.from(paragraphsFirst).forEach(item => setParallax(container, item, 120, 5));
// Array.from(paragraphsOther).forEach(item => setParallax(container, item, 110, 6));
// Array.from(imgs).forEach(item => setParallax(container, item, 100, 5));
Array.from(links).forEach(link => setLinkHover(link));
Array.from(btns).forEach(btn => magnetBtn(btn));

setShowAside(aside, asideBtnOpen);
setHideAside(aside, asideBtnClose, asideBtnOpen);
setAnchors(sections, anchors, aside, asideBtnClose, asideBtnOpen);

// https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);