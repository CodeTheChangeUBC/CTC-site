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




$('#volunteerForm').submit(function (event) {
   console.log("Submitting volunteer form");

   let vform = document.getElementById("volunteerForm");
   let ta = vform.getElementsByTagName("textarea");
   let tindex = ta.length;
   let input = vform.getElementsByTagName("input");
   let isize = input.length;


   let vanswers = [];

   for (let x = 0; x < isize; x++) {
      vanswers[x] = [input[x].id, input[x].value];
   }
   for (let x = isize; x < (isize + tindex); x++) {
      vanswers[x] = [ta[x - isize].id, ta[x - isize].value];
   }
      vanswers[vanswers.length]="VOLUNTEER FORM";

   fetch('https://aifdsuhx1m.execute-api.us-west-2.amazonaws.com/prod/send-email', {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(vanswers),
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
      }
   });
   console.log("submitted");
});

$('#partnerForm').submit(function (event) {
   console.log("Submitting partner form");

   let pform = document.getElementById("partnerForm");
   let pta = pform.getElementsByTagName("textarea");
   let ptindex = pta.length;
   let pinput = pform.getElementsByTagName("input");
   let pisize = pinput.length;


   let panswers = [];
   

   for (let x = 0; x < pisize; x++) {
      panswers[x] = [pinput[x].id, pinput[x].value];
   }
   for (let x = pisize; x < (pisize + ptindex); x++) {
      panswers[x] = [pta[x - pisize].id, pta[x - pisize].value];
   }
   
   panswers[panswers.length]="PARTNER FORM";
   
   fetch('https://aifdsuhx1m.execute-api.us-west-2.amazonaws.com/prod/send-email', {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(panswers),
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
      }
   });
   console.log(JSON.stringify(panswers));


});

$('#contactForm').submit(function (event) {
   event.preventDefault();
   console.log("submitting contact form");
   
   let cform = document.getElementById("contactForm");
   let cta = cform.getElementsByTagName("textarea");
   let ctindex = cta.length;
   let cinput = cform.getElementsByTagName("input");
   let cisize = cinput.length;


   let canswers = [];
   

   for (let x = 0; x < cisize; x++) {
      canswers[x] = [cinput[x].id, cinput[x].value];
   }
   for (let x = cisize; x < (cisize + ctindex); x++) {
      canswers[x] = [cta[x - cisize].id, cta[x - cisize].value];
   }
   
   fetch('https://aifdsuhx1m.execute-api.us-west-2.amazonaws.com/prod/send-email', {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(canswers),
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
      }
   });
   console.log(JSON.stringify(canswers));
});