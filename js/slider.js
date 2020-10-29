let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll("slider-item");
    // slides.length -> 3
    const dots = document.querySelectorAll("dot");
    // dots.length -> 3

    if (slides.length == 0) {
        return;
    }

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