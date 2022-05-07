const magnet = {
    enable: false,
    circlePos: { x: 0, y: 0 },
    btnInnerOffset: { x: 0, y: 0 }
};
document.addEventListener('cover', event => {
    magnet.circlePos.x = event.detail.centerPos.x;
    magnet.circlePos.y = event.detail.centerPos.y;
});
function magnetBtn(btn) {
    const btnInner = btn.children[0];
    btn.addEventListener("mouseenter", () => {
        magnet.enable = true;
        mouse.classList.add('mouse_btn-hover');
    });
    btn.addEventListener('mousemove', event => {
        document.dispatchEvent(new CustomEvent('cover', {
            detail: {
                centerPos: {
                    x: btn.getBoundingClientRect().left + document.documentElement.scrollLeft + btn.getBoundingClientRect().width / 2 - mouse.getBoundingClientRect().width / 2,
                    y: btn.getBoundingClientRect().top + document.documentElement.scrollTop + btn.getBoundingClientRect().width / 2 - mouse.getBoundingClientRect().height / 2
                }
            },
            bubbles: true,
            cancelable: false
        }));
        magnet.btnInnerOffset.x = 0.5 * (event.offsetX - btn.getBoundingClientRect().width / 2) / 2;
        magnet.btnInnerOffset.y = 0.5 * (event.offsetY - btn.getBoundingClientRect().height / 2) / 2;
        btnInner.style.transform = `translate(${magnet.btnInnerOffset.x + 'px'},${magnet.btnInnerOffset.y + 'px'})`;
    });
    btn.addEventListener("mouseleave", () => {
        magnet.enable = false;
        magnet.btnInnerOffset.x = 0;
        magnet.btnInnerOffset.y = 0;
        btnInner.style.transform = `translate(${magnet.btnInnerOffset.x + 'px'},${magnet.btnInnerOffset.y + 'px'})`;
        mouse.classList.remove('mouse_btn-hover');
    });
}