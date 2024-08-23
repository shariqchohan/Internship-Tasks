// script.js
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const slideImages = document.querySelectorAll('.slide');
    const totalSlides = slideImages.length;
    let currentIndex = 0;
    const intervalTime = 3000; // Time between slides in milliseconds

    function showSlide(index) {
        slides.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    // Initialize the slider
    showSlide(currentIndex);
    setInterval(nextSlide, intervalTime);
});
