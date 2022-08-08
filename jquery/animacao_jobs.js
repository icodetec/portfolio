//jobs
$(document).ready(function(){
        
    $(".next").on('click',function(){
      $(this).parents('.card').addClass('rotate-left').delay(700).fadeOut(1);
      $('.card').find('.status').remove();    
      if ($(this).parents('.card').is(':last-child') ) {
        $('.card:nth-child(1)').removeClass('rotate-left').fadeIn(300);
      } else {
          $(this).parents('.card').next().removeClass('rotate-left').fadeIn(400);
         
      }
    });  
  
});   