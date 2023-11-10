/******************************************
              Pop Up
*******************************************/
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

/******************************************
              Menu Bar
*******************************************/

var menuBtn =document.getElementById("menuBtn");
var sideNav =document.getElementById("sideNav");

sideNav.style.right="-250px";
menuBtn.onclick = function (){
    if(sideNav.style.right == "-250px"){
        sideNav.style.right ="0";        
    }
    else{
        sideNav.style.right ="-250px"
    }
}


var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});

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
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function autoSlide() {
    var currentSlide = document.querySelector('.image-container .slide:target');
    var nextSlide = currentSlide.nextElementSibling || document.querySelector('.image-container .slide:first-child');

    nextSlide.click(); // Simulate a click on the next slide link
  }

  // Set an interval to call the autoSlide function every 5 seconds (adjust as needed)
  setInterval(autoSlide, 1000); // 5000 milliseconds (5 seconds)