/**
 * @param {HTMLElement} container
 */
const container = document.querySelector('.container');
const sections = document.getElementsByTagName('section');
Array.from(sections).forEach(section => section.style.left = `0px`);
let leftOffset = '0px';
let leftOffsetNumber = 0;
console.log(container);
const edge = { left: 0, right: container.scrollWidth - screen.width }

container.addEventListener('wheel', event => {
    console.log(`event.deltaY ${event.deltaY} leftOffset ${leftOffset} edge.right ${edge.right}`);
    event.preventDefault();

    leftOffsetNumber = Number(leftOffset.slice(0, leftOffset.length - 2)) - event.deltaY;
    if(-leftOffsetNumber > edge.right) leftOffsetNumber = -edge.right;
    else if(-leftOffsetNumber < edge.left) leftOffsetNumber = edge.left;
    leftOffset = `${leftOffsetNumber}px`;
    Array.from(sections).forEach(element => element.style.left = leftOffset);
});

// Простая прокрутка
// const camera = {
//     scrollFactor: 1
// };
// container.addEventListener('wheel', (event) => {
//     console.log(event.deltaY);
//     event.preventDefault();
//     container.scrollLeft += camera.scrollFactor * event.deltaY;
// });

//Первый вариант плавной прокрутки. Для мыши хорошо работает, но для тач пада жесть полная
// const camera = {
//     changePosition: false,
//     addScroll: false,
//     changeDirection: false,
//     position: { delta: 0, previous: 0, current: 0 },
//     scrollAnimation: { startTime: 0, duration: 400 },
//     scrollFactor: 1
// };
// container.addEventListener('wheel', (event) => {
//     event.preventDefault();
//     camera.addScroll = true;
//     if (camera.position.delta / event.deltaY < 0) {
//         camera.position.delta = 0;
//         camera.changeDirection = true;
//     }
//     camera.position.delta += camera.scrollFactor * event.deltaY;
//     if (!camera.changePosition) {
//         window.requestAnimationFrame(smoothScroll);
//     }
// });

// function smoothScroll(time) {
//     camera.changePosition = true;
//     if (camera.changeDirection) camera.changeDirection = false;
//     if (camera.position.delta === 0) camera.scrollAnimation.startTime = time;
//     else if (camera.addScroll) {
//         camera.scrollAnimation.startTime = time;
//         camera.position.previous = 0;
//         camera.position.current = 0;
//         camera.addScroll = false;
//     }
//     const progress = time - camera.scrollAnimation.startTime;
//     camera.position.current = camera.position.delta * progress / camera.scrollAnimation.duration;
//     container.scrollLeft += camera.position.current - camera.position.previous;
//     camera.position.previous = camera.position.current;
//     console.log(`camera.position.delta ${camera.position.delta} camera.position.current ${camera.position.current}`)
//     if (progress >= camera.scrollAnimation.duration) {
//         console.log(`progress ${progress} scrollAnimation.duration ${camera.scrollAnimation.duration}`);
//         camera.position = { delta: 0, previous: 0, current: 0 };
//         camera.scrollAnimationюstartTime = 0;
//         camera.changePosition = false;
//     }
//     else window.requestAnimationFrame(smoothScroll);
// }