$(document).ready(function(){

//skills
$('.skill').on("click", function() { 
   
    var value = $(this).text();//Pega o valor clicado(H, C, J, V e etc) e faz a comparação no if/else.

      if(value == 'H')
      {
          $('.title_skill p').text('HTML5');
      }
      else if(value == 'C')
      {
          $('.title_skill p').text('CSS3');
      }
     else if(value == 'J')
      {
          $('.title_skill p').text('JAVASCRIPT');
      }
     else if(value == 'V')
      {   
          $('.title_skill p').text('VUE.JS');
      }
     else if(value == 'P')
      {
          $('.title_skill p').text('PHP');
      }
     else if(value == 'M')
      {
          $('.title_skill p').text('MYSQL');
      }
     else if(value == 'W')
      {
          $('.title_skill p').text('WORDPRESS');
      }

      if($(".circle_info_skill").hasClass("active") == true)
      {
          $(".skill-0").removeClass("active");//fecha a div de apresentação
          $(".circle_info_skill").removeClass("active");//fecha qualquer div que tenha sido aberta em um click anterior.
          $(".skill-"+value).addClass("active");//Abre adiv do click atual   
      }else{
          $(".skill-"+value).addClass("active");//Abre a div caso nao tenha nemhuma aberta
      }
  });
});     