$(document).ready(function () {
  const distanceFromTopToNav = $('#nav').offset().top;

    // Smooth scroll
    $("a.nav-link").click(function (event) {
      event.preventDefault();
      $("html, body").animate(
        { scrollTop: $($(this).attr("href")).offset().top },
        750
      );
    });
    
    // Sticky menu to the top after first section
    $(window).scroll(function() {
      let currentDistanceFromTop = $(this).scrollTop();
      if (currentDistanceFromTop >= distanceFromTopToNav) {
          $('#nav').addClass('fixed');
      } else {
          $('#nav').removeClass('fixed');
      }
    });

    //Collapse function for nav

    $(".navBtn").click(function(){
      $(".container nav").toggleClass('active');
    });
});