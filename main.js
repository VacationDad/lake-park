// Sets value for slide position/counter
let slidePosition = 0;

//Autoplay 
var slideInterval = setInterval(moveToNextSlide,3000);
var backgroundInterval = setInterval(changeImageBackground, 3000);
var textInterval = setInterval(changeText, 3000);

// Grabs slides
const slides = document.getElementsByClassName('carousel__item');
const totalSlides = slides.length;

// Next button feature
document.
  getElementById('carousel__button--next')
  .addEventListener("click", function() {
    moveToNextSlide();
    changeImageBackground();
    changeText();
    clearInterval(slideInterval);
    clearInterval(backgroundInterval);
    clearInterval(textInterval);
  });

// Previous button feature
document.
  getElementById('carousel__button--prev')
  .addEventListener("click", function() {
    moveToPrevSlide();
    changeImageBackground();
    changeText();
    clearInterval(slideInterval);
    clearInterval(backgroundInterval);
    clearInterval(textInterval); 
  });

//Autoplay
var playing = true;
var pauseButton = document.getElementById('carousel__button--pause');

function pauseSlideshow(){
	playing = false;
	clearInterval(slideInterval);
  clearInterval(backgroundInterval);
  clearInterval(textInterval);
  pauseClicked();
}

function playSlideshow(){
	playing = true;
	slideInterval = setInterval(moveToNextSlide,3000);
  backgroundInterval = setInterval(changeImageBackground, 3000);
  textInterval = setInterval(changeText, 3000);
  pauseClicked();
}
// Pause On Click
pauseButton.onclick = function(){
	if(playing){ pauseSlideshow(); }
	else{ playSlideshow(); }
};
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

//Function to change text on click
function changeText() {
  var textOption1 = document.getElementById("carousel-right-wrapper").getElementsByTagName("h4")[0];
  var textOption2 = document.getElementById("carousel-right-wrapper").getElementsByTagName("p")[0];
  if (textOption1.innerHTML === "Welcome to Our Site!") {
    textOption1.innerHTML = "Tada! New Text!";
  } else {
    textOption1.innerHTML = "Welcome to Our Site!";
  }
  if (textOption2.innerHTML === "Ullamcorper arcu ante duis mus condimentum dapibus ullamcorper venenatis torquent parturient condimentum facilisis diam lacinia.") {
    textOption2.innerHTML = "Viverra adipiscing at in tellus integer feugiat scelerisque. Egestas pretium aenean pharetra magna ac placerat!";
  } else {
    textOption2.innerHTML = "Ullamcorper arcu ante duis mus condimentum dapibus ullamcorper venenatis torquent parturient condimentum facilisis diam lacinia.";
  }
}

// Changes pause button background on clicks
function pauseClicked() {
  var pauseColor = document.getElementById('carousel__button--pause')
  pauseColor.classList.toggle('pressedState');
}