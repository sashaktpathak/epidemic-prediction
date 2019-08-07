window.onload=function()
{
    var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.visibility = "hidden";
        slides[i].style.height = "0"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.visibility = "visible";
    slides[slideIndex-1].style.height = "auto"; 
    setTimeout(showSlides, 5000); 
} 
 window.redirect=function(n)
 {
    if(n==1)
        window.location.href="https://www.ea.com/en-gb/games/anthem"
    if(n==2)
        window.location.href="https://assassinscreed.ubisoft.com/game/en-us/home"
    if(n==3)
        window.location.href="https://www.youtube.com/channel/UCrNBxHA_SavRrD-PrEek2AQ"
 }
 window.watch=function(n)
 {
    if(n==1)
        window.location.href="https://www.youtube.com/watch?v=badG-amVhXA"
    if(n==2)
        window.location.href="../games-gow.html"   
    if(n==3)
        window.location.href="https://www.youtube.com/watch?v=s_SJZSAtLBA"
 }
 window.buy=function(n)
 {
    if(n==1)
        window.location.href="#"
 }
 $.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
  
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
  
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };
  console.log("trying");
$(window).on('scroll resize', function() {
    console.log("scrolling");
    $('.translucent-ww').each(function() {
      if ($(this).isInViewport()) {
         $('.anim')[0].style.animation = "rot1 0.5s 2"
         $('.anim')[1].style.animation = "rot1 0.5s 2"
         $('.anim')[2].style.animation = "rot1 0.5s 2"
        } else {
            console.log("exp");
         }
    });
  }); 
}