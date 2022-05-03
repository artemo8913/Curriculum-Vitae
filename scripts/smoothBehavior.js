//Плавная прокрутка страницы происходит за счет смещения разделов влево и применения свойства css transperent
Array.from(sections).forEach(section => section.style.left = `0px`);
let leftOffset = '0px';
let leftOffsetNumber = 0;
const edge = { left: 0, right: container.scrollWidth - window.visualViewport.width };
container.addEventListener('wheel', event => {
    // console.log(`event.deltaY ${event.deltaY} leftOffset ${leftOffset} edge.right ${edge.right}`);
    event.preventDefault();
    leftOffsetNumber = Number(leftOffset.slice(0, leftOffset.length - 2)) - event.deltaY;
    if (-leftOffsetNumber > edge.right) leftOffsetNumber = -edge.right;
    else if (-leftOffsetNumber < edge.left) leftOffsetNumber = edge.left;
    leftOffset = `${leftOffsetNumber}px`;
    Array.from(sections).forEach(section => section.style.left = leftOffset);
});
