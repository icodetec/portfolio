$(document).ready(function(){

  //comments   
  $(".cliente-1").addClass("active");
  var x = 1;

  $('.button_plus').on("click", function() {
    var value       = $(".active").next().length;
    var value_click = x++;
    if(value_click <= value)
    {
    $(".active").next().addClass("active");
    $('#chatmessages').scrollTop($('#chatmessages')[0].scrollHeight);
    }else{
      $(".active").removeClass("active");
      $(".cliente-1").addClass("active");
      x=1;
    } 
  });

});    