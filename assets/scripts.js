//
// Scripts
//


// projects page

let act = 0;


$(document).on('click', 'a[href^="#"]', function (event) {
   if (act == 0) {
      act = $($.attr(this, 'href'));
      console.log(act);
      $('html, body').animate({
         scrollTop: $($.attr(this, 'href')).offset().top -= 100
      }, 500);
   }

});


$('.show-more-button').on('click', function (event) {

   if (act != 0) {
      $('.collapse.show').collapse('toggle');
   }
   $('.collapse.show').collapse('toggle');
});



$('.closeIcon').on('click', function () {
   $('.collapse.show').collapse('toggle');
   act = 0;
});

// Contact Us Form
$(document).on('submit', '#contactForm', function (event) {
  let thankYou = $(".thank-you");
  thankYou.show();
  thankYou.fadeOut(15000);
  return window.submitGoogleForm(this, function() {
    $("#contactForm")[0].reset();
  });
});

// Partner With Us Form
$(document).on('submit', '#partner-form', function (event) {
  let thankYou = $(".thank-you");
  thankYou.show();
  thankYou.fadeOut(15000);
  return window.submitGoogleForm(this, function() {
    $("#partner-form")[0].reset();
  });
});

// Volunteer With Us Form
$(document).on('submit', '#volunteer-form', function (event) {
  let thankYou = $(".thank-you");
  thankYou.show();
  thankYou.fadeOut(15000);
  return window.submitGoogleForm(this, function() {
    $("#volunteer-form")[0].reset();
  });
});

// smooth scroll
// WORK Banner
$(document).on('click', '.workBanner a[href^="#"]', function (event) {
   $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
   }, 500);
});
