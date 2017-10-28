
$(document).ready(function(){
  $('.sliders').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1
});
  });




$(document).ready(function(){
  $('.slider-reviews').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1
  
});
  });

$(document).ready(function(){
$('.item-icon').appendTo('.slider-reviews');
$('.item-icon').css({
  position:"absolute",
  bottom:"-30px",
  left:"324px",
  "z-index": 10000
});

});


/*$(document).ready(function(){
function breakOverflow(elm) {
   var top = elm.offset().top;
   var left = elm.offset().left;
   elm.appendTo($('.box-relative'));
   elm.css({
      position: 'absolute',
      left: 36+'%',
      top: 87+'%',
      bottom: 'auto',
      right: 'auto',
      'z-index': 10000
   });
}
breakOverflow($('.item-icon'));
}); 
*/



/*
$(document).ready(function(){
  $(function() {
    var $slider = $('#slider'),
        $slides = $('#slider').find('.slide'),
        $next = $('.arrow.left'),
        $dot = $('.dot.active'),
        $dotNext = $('#page_view').next($dot),
        slideIndex = 0,
        sliding = false;
 
    $slides.eq(slideIndex).show();
    $slider.on('click', '.arrow.left', function() {
      $(".dot").removeClass('active');
      $(".dot").eq(slideIndex-1).addClass('active');
      
      
        if (sliding) return false;
        sliding = true;
          $slider.fadeOut(100, function() {
                $slides.eq(slideIndex).hide();
                if (--slideIndex >= $slides.length) {
                  slideIndex = 0; 
                } 
            
                $slides.eq(slideIndex).show();
                $slider.fadeIn(150);
                sliding = false;
  
            }); 
          }); 

       $slider.on('click', '.arrow.right', function() {
      $(".dot").removeClass('active');
      $(".dot").eq(slideIndex+1).addClass('active');
      
      
        if (sliding) return false;
        sliding = true;
          $slider.fadeOut(100, function() {
                $slides.eq(slideIndex).hide();
                if (++slideIndex >= $slides.length) {
                  slideIndex = 0;
                }
            
                $slides.eq(slideIndex).show();
                $slider.fadeIn(150);
                sliding = false; 
            
            }); 
    });
});
});

*/