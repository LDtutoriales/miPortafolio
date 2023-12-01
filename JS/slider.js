// Add your JavaScript here
const sliderWrapper = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.content_slide');


let width = sliderWrapper.clientWidth;

// initial call to position the images
positioning();

// reposition on resize
window.addEventListener('resize', positioning);

// auto-slide
setInterval(moveRight, 5000);

function positioning() {
    width = sliderWrapper.clientWidth;

    slides.forEach((slide, idx) => {
        let x = idx * width;
        if (idx === slides.length - 1) {
            x = -width;
        }

        slide.setAttribute('data-x', x);
        slide.style.transform = `translateX(${x}px)`;
    });
}

function moveRight() {
    slides.forEach(slide => {
        const x = Number(slide.getAttribute('data-x'));
        let newX = x - width;

        if (newX < -(width * (slides.length - 2))) {
            newX = width;
            slide.style.zIndex = -1;
        } else {
            slide.style.zIndex = 1;
        }

        slide.style.transform = `translateX(${newX}px)`;
        slide.setAttribute('data-x', newX);
    });
}

function moveLeft() {
    slides.forEach(slide => {
        const x = Number(slide.getAttribute('data-x'));
        let newX = x + width;

        if (newX > width * (slides.length - 2)) {
            newX = -width;
            slide.style.zIndex = -1;
        } else {
            slide.style.zIndex = 1;
        }

        slide.style.transform = `translateX(${newX}px)`;
        slide.setAttribute('data-x', newX);
    });
}

