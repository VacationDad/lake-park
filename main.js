// Sets value for slide position/counter
let slidePosition = 0;
// Grabs slides
const slides = document.getElementsByClassName('carousel__item');
const totalSlides = slides.length;
// Next button feature
document.
  getElementById('carousel__button--next')
  .addEventListener("click", function() {
    moveToNextSlide();
    changeImageBackground();
  });
// Previous button feature
document.
  getElementById('carousel__button--prev')
  .addEventListener("click", function() {
    moveToPrevSlide();
    changeImageBackground();
  });
// Upates slider position - toggles visibility of previous slide
function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('carousel__item--visible');
    slide.classList.add('carousel__item--hidden');
  }

  slides[slidePosition].classList.add('carousel__item--visible');
}
// Counter to move to next slide
function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  updateSlidePosition();
}
// Counter to move to previous slide
function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  updateSlidePosition();
}
// Function to swap imgs on right side of slider
function changeImageBackground() {
    var imageBack = document.getElementById('carousel-right-wrapper');
    imageBack.classList.toggle('lastImg');
}