/**
 * @param {HTMLElement} container
 */
const container = document.querySelector('.container');
const sections = document.getElementsByTagName('section');
const paragraphsFirst = document.querySelectorAll('section p:first-of-type');
const paragraphsOther = document.querySelectorAll('section p:not(:first-of-type)');
const headers2 = document.querySelectorAll('section h2');
const imgs = document.querySelectorAll('section img');

horizontalWheel(container);

Array.from(headers2).forEach(item => setParallax(container, item, 160, 10));
Array.from(paragraphsFirst).forEach(item => setParallax(container, item, 120, 5));
Array.from(paragraphsOther).forEach(item => setParallax(container, item, 110, 6));
Array.from(imgs).forEach(item => setParallax(container, item, 100, 5));
