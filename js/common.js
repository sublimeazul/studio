//menu
$(function() {
      var navBox = $("nav");
      navBox.hide();
      var TargetPos = 185;
      $(window).scroll( function() {
         var ScrollPos = $(window).scrollTop();
         if( ScrollPos > TargetPos ) {
            navBox.fadeIn();
         }
         else {
            navBox.fadeOut();
         }
      });
   });

//slider
$('.slider-voice').slick({
    arrows: false,
    centerMode: true,
	autoplay: true,
	slidesToShow: 3,
    centerPadding: '20%'
  });

//scroll
$(function() {
        $(".inner").jScrollPane();
    });

//pagetop
$(function() {
    var topBtn = $('#page-top');    
    topBtn.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});