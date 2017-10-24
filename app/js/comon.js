;(function() {

  $(document).ready(function() {

    var sliders = function() {
      
      var backImg = [];
      backImg[0] = src="img/pic-14.png";
      backImg[1] =  src="img/pic-13.png";
      backImg[2] = src="img/pic-12.png";
      
      var i = 0;
      var x = (backImg.length) - 1;
      var int = 3500;
      
      var initialize = function() {
        attachEvents();
      };
      
      var attachEvents = function() {
        $('.btnLeft').click(function() {
          left();
        });

        $('.btnRight').click(function() {
          right();
        });
      };

      var changeImg = function() {
        $('.sliders').css('background-image', 'url(' + backImg[i] + ')');
      }

      var left = function() {
        (i <= 0) ? i = 3 : i--;
        changeImg(i);
      };

      var right = function() {
        (i >= x) ? i = 0 : i++;
        changeImg(i);
      };

      window.setInterval(right, int);

      changeImg(i);
      return initialize();
    }

    sliders();

  });
  
})();


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