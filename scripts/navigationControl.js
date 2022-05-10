function setCarouselNav(btnLeft, btnRight, sections) {
    const sectionsArr = Array.from(sections);
    btnLeft.addEventListener('click', event => {
        for (let i = 0; i < sectionsArr.length; i++) {
            let section = sectionsArr[i];
            const rightPos = section.getBoundingClientRect().right;
            const leftPos = section.getBoundingClientRect().left;
            const viewWidth = window.visualViewport.width;
            if (0 <= leftPos && leftPos <= viewWidth) {
                section.previousElementSibling.scrollIntoView({ inline: "start", behavior: "smooth" });
                break;
            }
        }
    });
    btnRight.addEventListener('click', event => {
        for (let i = 0; i < sectionsArr.length; i++) {
            let section = sectionsArr[i];
            const rightPos = section.getBoundingClientRect().right;
            const leftPos = section.getBoundingClientRect().left;
            const viewWidth = window.visualViewport.width;
            if (0 <= rightPos && rightPos <= viewWidth || 0 <= leftPos && leftPos <= viewWidth) {
                section.nextElementSibling.scrollIntoView({ inline: "start", behavior: "smooth" });
                break;
            }
        }
    });
};