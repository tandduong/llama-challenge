//toggle the menu icon
$(document).ready(function(){
  $(".icon i").on("click", function(){
    $("nav ul").toggleClass("show");
  });
});


//the scroll effect of the navbar when scroll down and up to top
$(window).on("scroll", function(){
 if($(window).scrollTop()){
   $('nav').addClass('scroll');
 }
 else{
   $('nav').removeClass('scroll');
 }
})


//smoothly jump link on the web page
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
      scrollTop: $(hash).offset().top
      }, 1000, function(){
        window.location.hash = hash;
      });
    }
  });
});