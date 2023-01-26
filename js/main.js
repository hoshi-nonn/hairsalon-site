$(function () {
  $('#js-hamburger').on('click', function () {
    $('#js-hamburger').toggleClass('active');
    $('#js-nav').toggleClass('active');
  });

  $(function () {
    $("#js-nav a").on("click", function () {
      $('#js-hamburger').toggleClass('active');
      $('#js-nav').toggleClass('active');
    });
});

$('a[href^="#"]').click(function () {
  var speed = 400;
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top;
  $('body,html').animate({ scrollTop: position }, speed, 'swing');
  return false;
});

$(window).resize(function(){ 
  var $window = $(this).width();
  var bp = 768;

  if($window > bp){
    $('#js-hamburger').removeClass("active"); 
    $('#js-nav').removeClass("active");  
  }
});

  $('.mainvisual').vegas(
    {
    delay: 7000,
    timer: false,
    firstTransition: 'fade',
    firstTransitionDuration: 5000,
    transitionDuration: 7000,
    animationDuration: 20000,
    animation: 'kenburns',
    slides: [
      { src: 'img/mv_bg01.jpg' },
      { src: 'img/mv_bg02.jpg' },
      { src: 'img/mv_bg03.jpg' },
      { src: 'img/mv_bg04.jpg' },
    ]
  });

  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 8000,
    speed: 800,
    dots: true,
    arrows: false,
    infinite: true,
    dots: true,
	});


  $(window).scroll(function() {
    let scrollTop = $(window).scrollTop(); 
    let areaTop = $(".target-area").offset().top; 
    let areaBottom = areaTop + $(".target-area").innerHeight(); 
    if (scrollTop > areaTop && scrollTop < areaBottom) {
      $(".bottom-logo").addClass("on"); 
    } else {
      $(".bottom-logo").removeClass("on"); 
    }
  });
});
