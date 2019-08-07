/* 
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
    $('.aside_bg').each(function() {
      if ($(this).isInViewport()) {
          console.log("done");
        } else {
            console.log("exp");
         }
    });
  }); 
  $(window).scroll(function (event) {
      var scroll = $(window).scrollTop();
      console.log("scr "+ scroll);
      $('.aside_bg').each(function() {
        if ($(this).isInViewport()) {
            console.log("done");
          } else {
              console.log("exp");
           }
      });
  }).trigger('scroll'); */
/* $(window).on('resize scroll', function(){
    if($('.aside_bg').isInViewport()){
        $('header::before').addClass(temp_height);
        console.log("done");
    }
    if(!$('.aside_bg').isInViewport()){
        $('header::before').removeClass(temp_height);
    }
}); *//* 
window.onload=function () {
    $(window).detectScroll({
        testMode: true,
        targetPercent: 40,
        position: "left",
        target: "#leftPosition"
        width: 500,
    });
} */
window.onload=function()
{
    console.log("D");
    window.onscroll = function(e)
    {
        console.log("sds");
    }
}
