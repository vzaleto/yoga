
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

/*function ajax() { //Ajax отправка формы
    var msg = $("#form").serialize();
    $.ajax({
        type: "POST",
        url: "send.php",
        data: msg,
        success: function(data) {
            $("#results").html(data);
            if($("#results").val()=="SUCCESS VALIDATION"){
              addData();
            }
        },
        error:  function(xhr, str){
            alert("Возникла ошибка!");
        }
    });
}
 
 $(document).ready(function(){ //Валидация формы
 
    $( "#form" ).validate({
        rules:{
            name:{
                required: true
            },
            tel:{
                required: true
            }
        },
        messages:{
            name:{
                required: "This field is required"
            },
            tel:{
                required: "This field is required"
            }
        },
        submitHandler: function(form) {
 
            addData();
        }
 
    });
 
    $("#form input").click(function () {
        $("#res").text("");
 
    });


 
});*/
 
$(document).ready(function(){

var pattern = /^\+[0-9]{12}$/i;

 var tel = $("#tel");

tel.blur(function(){
  if(tel.val() != ""){
    if (tel.val().search(pattern)==0){
      $("#error-danger").text("");
    }else{
      alert("должны быть цифры и +");
      $("#form input").addClass("error-input");
    }

  }else{
    $("#form input").addClass("error-input");
    alert("поля не заполнены");
  }
})
 
})

