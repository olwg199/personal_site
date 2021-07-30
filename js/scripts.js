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
  //If page is opened not on top - make sure that menu is visible
  if ($(window).scrollTop() >= distanceFromTopToNav) {
    $('#nav').addClass('fixed');
  }
  $(window).scroll(function () {
    let currentDistanceFromTop = $(this).scrollTop();
    if (currentDistanceFromTop >= distanceFromTopToNav) {
      $('#nav').addClass('fixed');
    } else {
      $('#nav').removeClass('fixed');
    }
  });

  //Collapse function for nav
  $(".navBtn").click(function () {
    navBtnClickToggle();
  });

  //Send message logic
  var form_id = "contact-me-form";
  var data = {
    "access_token": "xv9sym5vmo5t5bha48gogfax"
  };
  var sendButton = $("#" + form_id + " [name='send']");
  var subjectInput = $("#" + form_id + " [name='subject']");
  var messageInput = $("#" + form_id + " [name='text']");

  function onSuccess() {
    alert("Thank you for your message!");
    subjectInput.val("")
    messageInput.val("")
    sendButton.val('Sent');
    sendButton.prop('disabled', true);
  }

  function onError(error) {
    sendButton.val('Send');
    alert("Something went worng. Please reload page and try again!")
  }


  function send() {
    sendButton.val('Sending…');

    var subject = subjectInput.val();
    var message = messageInput.val();
    data['subject'] = subject;
    data['text'] = message;

    $.post('https://postmail.invotes.com/send',
      data,
      onSuccess
    ).fail(onError);

    return false;
  }

  sendButton.on('click', send);

  var $form = $("#" + form_id);
  $form.submit(function (event) {
    event.preventDefault();
  });

});

function navBtnClickToggle() {
  let navBtn = $(".nav-container nav");

  if (navBtn.hasClass('active')) {
    navBtn.removeClass('active');
    $('.navBtn i').removeClass('bx-caret-up-circle');
    $('.navBtn i').addClass('bx-caret-down-circle');
  } else {
    navBtn.addClass('active');
    $('.navBtn i').removeClass('bx-caret-down-circle');
    $('.navBtn i').addClass('bx-caret-up-circle');
  }
}