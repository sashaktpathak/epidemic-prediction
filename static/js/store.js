window.onload = function()
{
    var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
window.plusSlides1 = function(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
window.currentSlide = function(n) {
  showSlides(slideIndex = n);
}

    function showSlides(n) {
    var i;
    if(slideIndex<0)
        slideIndex=1;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
    }
    setInterval(()=>showSlides(slideIndex = slideIndex+1),5000);
}