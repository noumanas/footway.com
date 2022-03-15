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
var search_active =document.querySelector('.search-active');
var close_icons = document.querySelector('.close_icons');
var Visa_button = document.querySelector('.Visa_button');

search_bar.addEventListener('click',
function search_action(){
  search_bar.setAttribute('style',' height:auto; margin-top:290px; z-index:1; ');
  search_active.style.display="block";
  close_icons.style.display="block";
  // Visa_button.style.display="block";
  // s_icon.setAttribute('style','background-color: white; height: 22px; color: black; padding: 10px; border-radius: 10px 0px 1px 10px;')
}
);
search_bar.addEventListener('mouseleave',
function search_action(){
  search_bar.setAttribute('style','  height:50%; z-index:1; ');
  search_active.style.display="none";
  close_icons.style.display="none";
  // Visa_button.style.display="none";
  // s_icon.setAttribute('style','background-color: ; height: 22px; color: black; padding: 10px; border-radius: 0;')
}
);

//left right slide
let control = document.querySelector('#control');

        control.addEventListener('click', function (e) {
            // get the scrollDemo
            let div = document.getElementById('brandShoes');
            // get the target
            let target = e.target;
            // handle each button's click
            switch (target.id) {
                case 'btnScrollTop':
                    div.scrollLeft += 100;
                    break;

                case 'btnScrollLeft':
                    div.scrollLeft -= 100;
                    break;
            }
        });

//left right slide
let control2 = document.querySelector('#control2');

        control2.addEventListener('click', function (e) {
            // get the scrollDemo
            let div = document.getElementById('recommend_product');
            // get the target
            let target = e.target;
            // handle each button's click
            switch (target.id) {
                case 'btnScrollright2':
                    div.scrollLeft += 100;
                    break;

                case 'btnScrollLeft2':
                    div.scrollLeft -= 100;
                    break;
            }
        });
//drop down
var drop = document.querySelector('.dropup');
var dropup = document.querySelector('.dropup-content');
drop.addEventListener('click', function (e){
  dropup.style.display="block";
})
dropup.addEventListener('mouseleave',function (e){
  dropup.style.display="none";
})


//accordians
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      
    } else {
      panel.style.display = "block";
    }
  });
}