// https://stackoverflow.com/questions/70226035/smooth-horizontal-wheel-only-scrolling
function horizontalWheel(container) {
    /** Max `scrollLeft` value */
    let scrollWidth;
  
    /** Desired scroll distance per animation frame */
    let getScrollStep = () => scrollWidth / 500 /* ADJUST TO YOUR WISH */ ;
  
    /** Target value for `scrollLeft` */
    let targetLeft;
  
    function scrollLeft() {
      let beforeLeft = container.scrollLeft;
      let wantDx = getScrollStep();
      let diff = targetLeft - container.scrollLeft;
      let dX = wantDx >= Math.abs(diff) ? diff : Math.sign(diff) * wantDx;
  
      // Performing horizontal scroll
      container.scrollBy(dX, 0);
  
      // Break if smaller `diff` instead of `wantDx` was used
      if (dX === diff)
        return;
  
      // Break if can't scroll anymore or target reached
      if (beforeLeft === container.scrollLeft || container.scrollLeft === targetLeft)
        return;
  
      requestAnimationFrame(scrollLeft);
    }
  
    container.addEventListener('wheel', e => {
      e.preventDefault();
  
      scrollWidth = container.scrollWidth - container.clientWidth;
      targetLeft = Math.min(scrollWidth, Math.max(0, container.scrollLeft + e.deltaY));
  
      requestAnimationFrame(scrollLeft);
    });
}
//Плавная прокрутка страницы происходит за счет смещения разделов влево и применения свойства css transperent
// Array.from(sections).forEach(section => section.style.left = `0px`);
// let leftOffset = '0px';
// let leftOffsetNumber = 0;
// let factor = 0.5;
// const edge = { left: 0, right: container.scrollWidth - window.visualViewport.width };
// container.addEventListener('wheel', event => {
//     // console.log(`event.deltaY ${event.deltaY} leftOffset ${leftOffset} edge.right ${edge.right}`);
//     event.preventDefault();
//     leftOffsetNumber = Number(leftOffset.slice(0, leftOffset.length - 2)) - factor * event.deltaY;
//     if (-leftOffsetNumber > edge.right) leftOffsetNumber = -edge.right;
//     else if (-leftOffsetNumber < edge.left) leftOffsetNumber = edge.left;
//     leftOffset = `${leftOffsetNumber}px`;
//     Array.from(sections).forEach(section => section.style.left = leftOffset);
// });



// const h1FasterSpeed = 2;
// const titleBgFasterSpeed = 1;

// const factor = 0.5;

// container.addEventListener('wheel', event => {
//     event.preventDefault();
//     container.scrollLeft += event.deltaY * factor;
//     // container.scrollBy(event.deltaY * factor,0);


//     // titleH1.style.left = `${Number(titleH1.style.left.slice(0, titleH1.style.left.length - 2)) - h1FasterSpeed * event.deltaY/2}px`
//     // titleBg.style.left = `${Number(titleBg.style.left.slice(0, titleBg.style.left.length - 2)) - titleBgFasterSpeed * event.deltaY/2}px`
// });

// function smoothScroll(time){

// }

// const camera = {
//     moving: false,
//     stop: false,
//     increase: false,
//     position: { delta: 0, current: 0, next: 0 },
//     scrollAnimation: { startTime: 0, duration: 1000 },
//     scrollFactor: 1
// };
// container.addEventListener('wheel', (event) => {
//     event.preventDefault();
//     console.log('0000000000000000000000000000000000000000000000000000000000000000');
//     console.log(event);
//     if (-1 > event.deltaY || event.deltaY > 1) {
//         if (camera.position.delta / event.deltaY < 0) camera.stop = true;
//         camera.position.delta += camera.scrollFactor * event.deltaY;
//         if (!camera.moving) window.requestAnimationFrame(smoothScroll);
//     }
// });

// function smoothScroll(time) {
//     if (camera.stop) {
//         camera.moving = false;
//         camera.stop = false;
//         camera.position = { delta: 0, current: 0, next: 0 };
//         camera.scrollAnimation.startTime = 0;
//         return;
//     }
//     else if (!camera.moving && camera.scrollAnimation.startTime === 0) {
//         camera.moving = true;
//         camera.scrollAnimation.startTime = time;
//     }
   
//     const progress = time - camera.scrollAnimation.startTime;
//     console.log(`camera.moving ${camera.moving} progress ${progress} `);
//     camera.position.next = camera.position.delta * progress / camera.scrollAnimation.duration;
//     container.scrollLeft += camera.position.next - camera.position.current;
//     console.log(`delta ${camera.position.delta} next ${camera.position.next} current ${camera.position.current} progress ${progress}`);
//     camera.position.current = camera.position.delta * progress / camera.scrollAnimation.duration;



//     if (progress >= camera.scrollAnimation.duration) {
//         camera.moving = false;
//         camera.position = { delta: 0, current: 0, next: 0 };
//         camera.scrollAnimation.startTime = 0;
//         console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
//     }
//     else window.requestAnimationFrame(smoothScroll);
// }