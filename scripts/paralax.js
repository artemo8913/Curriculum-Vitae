
/**
 * На элемент страницы добавляется эффект parallaxa (лучше сказать перемещения/смещения). В зависимости от расположения
 * на видимой части экрана родительского контейнера будет осуществляться определенная анимация
 * @param {Element} container
 * @param {HTMLElement} item
 * @param {Number} range 
 */
function setParallax(container, item, range, factor){
    container.addEventListener('scroll', event => {
        let rigthCurrent = item.getBoundingClientRect().right;

        let windowWidth = window.visualViewport.width;
        let offsetLeft = Math.max(rigthCurrent / windowWidth * 100, range) - range;
        let offseOpacity = Math.min(windowWidth / rigthCurrent + 0.1, 1);

        item.style.position = 'relative';
        item.style.left = factor * offsetLeft + 'px';
        item.style.opacity = offseOpacity + "";
    });
}