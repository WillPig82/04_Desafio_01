let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  
  let i;
  let experiencia__slides = document.getElementsByClassName("experiencia__slides");
  let dots = document.getElementsByClassName("dot");
  if (n > experiencia__slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = experiencia__slides.length}
  for (i = 0; i < experiencia__slides.length; i++) {
    experiencia__slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  experiencia__slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

