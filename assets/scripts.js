//
// Scripts
//

// smooth scroll
$(document).on('click', '.workBanner a[href^="#"]', function (event) {
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});

// projects page
$('.show-more-button').on('click', function (event) {
   $('.collapse.show').collapse('toggle');
});