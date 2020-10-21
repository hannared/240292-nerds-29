var slideIndex = 0;

function showSlides() {
    var slides = document.getElementsByClassName("slider-item");
    // slides.length -> 3
    var dots = document.getElementsByClassName("dot");
    // dots.length -> 3

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (var i = 0; i < dots.length; i++) {
        var dot = dots[i];
        // dot.className -> "dot" + " current" -> "dot current"
        dot.className = dot.className.replace(" current", "");
    }

    // slideIndex(1) -> 1 - 1 -> 0
    // slideIndex(2) -> 2 - 1 -> 1
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " current";

    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

showSlides();