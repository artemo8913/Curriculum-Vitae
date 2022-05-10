function setHideAside(aside, asideBtnClose, asideBtnOpen) {
    asideBtnClose.addEventListener('click', () => {
        hideAside(aside, asideBtnClose, asideBtnOpen);
    });
}
function setShowAside(aside, asideBtnOpen, asideArea) {
    asideArea.addEventListener('click', () => {
        aside.classList.remove('aside-menu_closed');
        asideBtnOpen.style.display = "none";
    });
    asideBtnOpen.addEventListener('click', () => {
        aside.classList.remove('aside-menu_closed');
        asideBtnOpen.style.display = "none";
    });
}
function setAnchors(sections, anchors, aside, asideBtnClose, asideBtnOpen) {
    Array.from(sections).forEach(/**@param {HTMLElement}section*/section => {
        Array.from(anchors).forEach(anchor => {
            if (anchor.getAttribute('linkTo') === section.className) {
                anchor.addEventListener('click', () => {
                    section.scrollIntoView({ block: "start", behavior: "smooth" });
                    hideAside(aside, asideBtnClose, asideBtnOpen);
                });
            }
        });
    });

}
function hideAside(aside, asideBtnClose, asideBtnOpen) {
    aside.classList.add('aside-menu_closed');
    asideBtnOpen.style.display = "";
}