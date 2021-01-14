// ============================== Copy Email to clip board & Tooltip begins ========================================
$(function(){
   $('.cpy').click(function(){
       $('#emailInp').focus();
       $('#emailInp').select();
       document.execCommand('copy');
       $('.cpy').tooltip('hide')
          .attr('data-original-title', "Copied!")
          .tooltip('update')
          .tooltip('show');

   });
});

$(function(){
    $('.cpy').mouseleave(function(){
        $('.cpy').tooltip('hide')
           .attr('data-original-title', "Copy to clipboard")
           .tooltip('update');
 
    });
 });

// ============================== Copy Email to clip board & Tooltip Ends ========================================

// ============================== Bootstrap Tool Tip =============================================================
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

//==========================Disable Right Click===================================================================
//   $(function(){
//    $(document).on("contextmenu",function(e){
//       e.preventDefault();
//    });
// });

//======================= Gallery Filter ===============================
$(document).ready(function(){
   let $btns = $('.galleryArea .buttonGroup button');

   $btns.click(function(e){
      $('.galleryArea .buttonGroup button').removeClass('active');
      e.target.classList.add('active');

      let selector = $(e.target).attr('data-filter');
      $('.galleryArea .grid').isotope({
         filter:selector
      });
      return false;
   })
   $('.galleryArea .buttonGroup #btn1').trigger('click');
});

//==============================Magnific Popup ====================

 $(document).ready(function() {
   $('.test-popup-link').magnificPopup({
      type:'image',
      gallery: {
               
         enabled: true,
      }
 
 });
 });

//============================ Initial Owl Carousel =========================
$('.mainContainer .recomArea .owl-carousel').owlCarousel({
   loop: true,
   autoplay: true,
   dots: true,
   responsive:{
      0:{
         items:1 
      },

      544:{
         items:2            
      }
   }
});

//============================================ See More ========================================
$(document).ready(function () {
   $('.nav-toggle').click(function () {
      var txt = $(this).text();
      if(txt == "Read More"){
         $(this).text('Read Less');
      }else{
         $(this).text('Read More');
      }

   });

});

//===================================== Sticky navBar ============================================

let navOffsetTop = $('.header').height() + 50;

function navBarFixed(){
   if($('.header').length){

      $(window).scroll(function(){
         let scroll = $(window).scrollTop();
         if(scroll>=navOffsetTop){
            $('.header .mainMenu').addClass("navbar-fixed");
         }else{
            $('.header .mainMenu').removeClass("navbar-fixed");
         }
      })

   }
}

navBarFixed();