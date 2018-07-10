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


// smooth scroll
// WORK Banner
$(document).on('click', '.workBanner a[href^="#"]', function (event) {
   $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
   }, 500);
});
