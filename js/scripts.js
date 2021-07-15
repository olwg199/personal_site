$(document).ready(function () {
  const distanceFromTopToNav = $('#nav').offset().top;

    // Smooth scroll
    $("a.nav-link").click(function (event) {
      event.preventDefault();
      $("html, body").animate(
        { scrollTop: $($(this).attr("href")).offset().top },
        750
      );

      //Close menu and change icon
      navBtnClickToggle();
    });
    
    //Sticky menu to the top after first section
    //If page is opend not on top - make sure that menu is visible
    if($(window).scrollTop()>=distanceFromTopToNav){
      $('#nav').addClass('fixed');
    }
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
      navBtnClickToggle();
    });
});

function navBtnClickToggle() {
  let navBtn = $(".container nav");

  if(navBtn.hasClass('active')){
    navBtn.removeClass('active');
    $('.navBtn i').removeClass('bx-caret-up-circle');
    $('.navBtn i').addClass('bx-caret-down-circle');
  } else {
    navBtn.addClass('active');
    $('.navBtn i').removeClass('bx-caret-down-circle');
    $('.navBtn i').addClass('bx-caret-up-circle');
  }
}