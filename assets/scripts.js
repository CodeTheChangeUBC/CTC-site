

// Resize project box

let activeElement = null;

$(".project-container").click(function () {
   if (activeElement) {
      $(activeElement).removeClass("activeProject");
   }
   if (this) {
      activeElement=this;
   }
   $(this).addClass("activeProject");
   console.log(this.classList);
   console.log(activeElement);
});

// smooth scroll
$(document).on('click', 'a[href^="#"]', function (event) {
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});