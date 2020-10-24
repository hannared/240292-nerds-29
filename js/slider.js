let slideIndex = 0;

function showSlides() {
    const slides = document.getElementsByClassName("slider-item");
    // slides.length -> 3
    const dots = document.getElementsByClassName("dot");
    // dots.length -> 3

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('current-slider');
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("current");
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // slideIndex(1) -> 1 - 1 -> 0
    // slideIndex(2) -> 2 - 1 -> 1
    slides[slideIndex - 1].classList.add("current-slider");
    dots[slideIndex - 1].classList.add("current");

    setTimeout(showSlides, 4000); // Change image every 4 seconds
}

showSlides();