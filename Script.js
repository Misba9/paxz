let currentSlide = 0;
const totalImages = document.querySelectorAll('.carousel-images img').length;
const visibleImages = 4;

function updateSlider() {
  const carouselImages = document.querySelector('.carousel-images');
  const imageWidth = carouselImages.querySelector('img').clientWidth;
  carouselImages.style.transform = `translateX(-${currentSlide * imageWidth}px)`;

  // Disable buttons if at the start or end of the carousel
  document.querySelector('#previous-btn').disabled = currentSlide === 0;
  document.querySelector('#next-btn').disabled = currentSlide >= totalImages - visibleImages;
}

function nextSlide() {
  if (currentSlide < totalImages - visibleImages) {
    currentSlide++;
    updateSlider();
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlider();
  }
}

window.onload = updateSlider;