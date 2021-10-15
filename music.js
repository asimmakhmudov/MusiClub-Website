const checkbox = document.getElementById("checkbox")
checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});
var menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";
function toggleMenu(){
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "500px";
    }
    else {
        menuList.style.maxHeight = "0px"
    }
}


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