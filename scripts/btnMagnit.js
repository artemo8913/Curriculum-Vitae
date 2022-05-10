const magnet = {
    enable: false,
    circlePos: { x: 0, y: 0 },
    btnInnerOffset: { x: 0, y: 0 }
};

function magnetBtn(btn, mouse) {
    const btnInner = btn.children[0];
    btn.addEventListener("mouseenter", (event) => {
        magnet.enable = true;
        mouse.classList.add('mouse_btn-hover');
    });
    btn.addEventListener('mousemove', event => {
        magnet.circlePos.x = btn.getBoundingClientRect().left + btn.getBoundingClientRect().width / 2 - 50 / 2;
        magnet.circlePos.y = btn.getBoundingClientRect().top + btn.getBoundingClientRect().height / 2 - 50 / 2;
        magnet.btnInnerOffset.x = (event.offsetX - btn.getBoundingClientRect().width / 2) / 2;
        magnet.btnInnerOffset.y = (event.offsetY - btn.getBoundingClientRect().height / 2) / 2;
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
