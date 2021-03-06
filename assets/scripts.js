//
// Scripts
//

// Projects
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
$(document).on('submit', '#contact-form', function (event) {
  let thankYou = $(".thank-you");
  thankYou.show();
  thankYou.fadeOut(15000);
  return window.submitGoogleForm(this, function() {
    $("#contact-form")[0].reset();
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
