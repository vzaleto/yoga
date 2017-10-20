;(function() {

  $(document).ready(function() {

    var slider = function() {
      
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
        $('.slider').css('background-image', 'url(' + backImg[i] + ')');
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

    slider();

  });
  
})();