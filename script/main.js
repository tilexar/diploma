//SCROLL/////////////////////////////////////////////////////
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector('' + blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
};


// SLIDER///////////////////////////////////////////////////////////////
var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider_item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
};


// NAV ///////////////////////////////////////////////////////////////////
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
};



// TESTIMONIAL SLIDER///////////////////////////////////////////////
var slideIndex1 = 1;
showSlides1(slideIndex1);

function plusSlider() {
    showSlides1(slideIndex1 += 1);
}

function minusSlider() {
    showSlides1(slideIndex1 -= 1);  
}

function currentSlider(n) {
    showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
    var i;
    var slides1 = document.getElementsByClassName("testimonial_item");
    var dots1 = document.getElementsByClassName("testimonial_slider_dots_item");
    if (n > slides1.length) {
      slideIndex1 = 1
    }
    if (n < 1) {
        slideIndex1 = slides1.length
    }
    for (i = 0; i < slides1.length; i++) {
        slides1[i].style.display = "none";
    }
    for (i = 0; i < dots1.length; i++) {
        dots1[i].className = dots1[i].className.replace(" active1", "");
    }
    slides1[slideIndex1 - 1].style.display = "flex";
    dots1[slideIndex1 - 1].className += " active1";
};


// TABS///////////////////////////////////////////////
$('.portfolio_block').not(':first').hide();
$('.portfolio .portfolio_tabs_item').click(function() {
    $('.portfolio .portfolio_tabs_item').removeClass('active_tab').eq($(this).index()).addClass('active_tab');
    $('.portfolio_block').hide().eq($(this).index()).fadeIn()
}).eq(0).addClass('active_tab');