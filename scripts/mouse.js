const mousePos = { x: 0, y: 0 };

window.addEventListener('pointerdown', event=>{
    event.preventDefault();
});
window.addEventListener('mousemove', event => {
    mouse.style.display = 'block';
    if (magnet.enable) {
        mousePos.x = magnet.circlePos.x + magnet.btnInnerOffset.x / 2;
        mousePos.y = magnet.circlePos.y + magnet.btnInnerOffset.y / 2;
    }
    else {
        mousePos.x = event.pageX - mouse.getBoundingClientRect().width / 2;
        mousePos.y = event.pageY - mouse.getBoundingClientRect().width / 2;
    }
    mouse.style.transform = `translate(${mousePos.x + 'px'},${mousePos.y + 'px'})`;
});

function setWhiteMouseColor(element) {
    element.addEventListener("mouseenter", () => {
        mouse.classList.add('mouse_white');
    });
    element.addEventListener("mouseleave", () => {
        mouse.classList.remove('mouse_white');
    });
}

function setLinkHover(link) {
    link.addEventListener("mouseenter", () => {
        mouse.classList.add('mouse_link-hover');
    });
    link.addEventListener("mouseleave", () => {
        mouse.classList.remove('mouse_link-hover');
    });
}