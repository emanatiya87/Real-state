let currentSlide = 1;

function showSlide(slideIndex) {
    const cards = document.querySelector('.cards');
    const dots = document.querySelectorAll('.dot');

    // Update the slide position
    currentSlide = slideIndex;
    const offset = (slideIndex - 1) * -300; // Adjust the offset to move the slider
    cards.style.transform = `translateX(${offset}px)`;

    // Update the active dot
    dots.forEach(dot => dot.classList.remove('active'));
    dots[slideIndex - 1].classList.add('active');
}

// Initialize the first slide as active
showSlide(currentSlide);
