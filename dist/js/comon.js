
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
  left:"28%",
  "z-index": 10000
});
});


 $(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 1000, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.nav-inner a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.nav-inner ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}
/*
  var avatarElem = document.getElementById('menu-center');

    var avatarSourceBottom = avatarElem.getBoundingClientRect().top + window.pageYOffset;

    window.onscroll = function() {
      if (avatarElem.classList.contains('fixed') && window.pageYOffset < avatarSourceBottom) {
        avatarElem.classList.remove('fixed');
      } else if (window.pageYOffset > avatarSourceBottom) {
        avatarElem.classList.add('fixed');
      }
    };*/
    // Create a clone of the menu, right next to original.
$('.nav-inner').addClass('original').clone().insertAfter('.nav-inner').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();

scrollIntervalID = setInterval(stickIt, 10);


function stickIt() {
 var aaaa = $('.original');
  var orgElementPos = $('.original').offset();
  orgElementTop = orgElementPos.top;               

  if ($(window).scrollTop() >= (orgElementTop)) {
    // scrolled past the original position; now only show the cloned, sticky element.

    // Cloned element should always have same left position and width as original element.     
    orgElement = $('.original');
    coordsOrgElement = orgElement.offset();
    leftOrgElement = coordsOrgElement.left;  
    widthOrgElement = orgElement.css('width');
    $('.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).show();
    $('.original').css('visibility','hidden');
  } else {
    // not scrolled past the menu; only show the original menu.
    $('.cloned').hide();
    $('.original').css('visibility','visible');
  }
}



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