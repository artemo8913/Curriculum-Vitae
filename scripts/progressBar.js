function setProgressBar(progressBar, container) {
    const progressBarMaxWidth = progressBar.parentElement.getBoundingClientRect().width;
    const offset = window.visualViewport.width;
    container.addEventListener('scroll', event => {
        const containerWidth = container.scrollWidth - offset;
        const containerScroll = container.scrollLeft;
        progressBar.style.width = Math.max(0, containerScroll / containerWidth * progressBarMaxWidth) + 'px';
    });
}

function hideHint(hint, container) {
    container.addEventListener('scroll', () => {
        if (container.scrollLeft > 200) hint.classList.add("scrollInfo__hint_hide");
        else hint.classList.remove("scrollInfo__hint_hide");
    });
}