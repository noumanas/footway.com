window.onscroll = function() {myFunction()};
//Sticky Bar 
var navbar = document.getElementById("header");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//slider...

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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

// search bar
var search_bar = document.getElementById('search_box');
var s_icon = document.getElementById('s-icons');

search_bar.addEventListener('click',
function search_action(){
  search_bar.setAttribute('style',' height:300px; margin-top:260px; z-index:1; width:40%;');
  // s_icon.setAttribute('style','background-color: white; height: 22px; color: black; padding: 10px; border-radius: 10px 0px 1px 10px;')
}
);
search_bar.addEventListener('mouseleave',
function search_action(){
  search_bar.setAttribute('style',' height:50%; margin-top:0px; z-index:1; ');
  // s_icon.setAttribute('style','background-color: ; height: 22px; color: black; padding: 10px; border-radius: 0;')
}
);