function setCarouselNav(btnLeft, btnRight, sections) {
    const sectionsArr = Array.from(sections);
    
    btnLeft.addEventListener('click', event => {
        const reversedSections = [...sectionsArr].reverse();

        for (let i = 0; i < reversedSections.length; i++) {
            let section = reversedSections[i];
            const leftPos = section.getBoundingClientRect().left;
            const rightPos = section.getBoundingClientRect().right;
            const viewWidth = window.visualViewport?.width;

            if (viewWidth && leftPos <= 0 && rightPos <= viewWidth) {
                section.scrollIntoView({ inline: "center", behavior: "smooth" });
                break;
            }
        }
    });
    
    btnRight.addEventListener('click', event => {
        for (let i = 0; i < sectionsArr.length; i++) {
            let section = sectionsArr[i];
            const leftPos = section.getBoundingClientRect().left;
            const rightPos = section.getBoundingClientRect().right;
            const viewWidth = window.visualViewport?.width;

            if (viewWidth && 0 <= leftPos && viewWidth < rightPos) {
                section.scrollIntoView({ inline: "center", behavior: "smooth" });
                break;
            }
        }
    });
};