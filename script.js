let slidePosition = 0
const slides = document.getElementsByClassName('carousel_item')
const totalSlides = slides.length

document.getElementById('carousel_button--next').addEventListener("click", function(){
    moveToNextSlide();
});

document.getElementById('carousel_button--prev').addEventListener("click", function(){
    moveToPreviousSlide();
});

function updateSlidePosition() {
    for (let slide of slides) {
        slide.classList.remove('carousel_item--visible')
        slide.classList.add('carousel_item--hidden')
    }
    slides[slidePosition].classList.add('carousel_item--visible');
}

function moveToNextSlide() {
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0
    }
    else {
        slidePosition++;
    }
    updateSlidePosition()
}

function moveToPreviousSlide() {
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1
    }
    else {
        slidePosition--;
    }
    updateSlidePosition()
}

const dark = document.getElementById("dark")
dark.addEventListener('click', () => {
    document.body.classList.add('active');
    document.nav.classList.add('navtheme');
});
const light = document.getElementById("light")
light.addEventListener('click', () => {
    document.body.classList.remove('active');
});