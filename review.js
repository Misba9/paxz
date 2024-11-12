document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.reviews-carousel');
    const reviews = document.querySelectorAll('.review-card');
    const nextButton = document.getElementById('next-btn');
    const previousButton = document.getElementById('previous-btn');

    let currentIndex = 0;

    nextButton.addEventListener('click', function() {
        // Move to the next review
        currentIndex++;
        
        // If at the end, loop back to the first review
        if (currentIndex >= reviews.length) {
            currentIndex = 0;
        }

        // Calculate the width to translate based on the current index
        const translateWidth = -currentIndex * 100;
        
        // Apply the transform to move the carousel
        carousel.style.transform = `translateX(${translateWidth}%)`;
    });


    previousButton.addEventListener('click', function() {
        // Move to the next review
        currentIndex--;
        
        // If at the end, loop back to the first review
        if (currentIndex <= reviews.length) {
            currentIndex = 0;
        }

        // Calculate the width to translate based on the current index
        const translateWidth = +currentIndex * 100;
        
        // Apply the transform to move the carousel
        carousel.style.transform = `translateX(${translateWidth}%)`;
    });
});



// navbar
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('nav-active');
}

function openPopup() {
    // Add popup opening logic here if needed
    alert("Register button clicked!");
}
