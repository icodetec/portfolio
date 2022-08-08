$(document).ready(function(){

    let i = 1;
    var total = $(".card_menu").length; //total de cards
    $(".card_menu:nth-of-type(" + i + ")").addClass('active_menu');
    $(".card_menu:nth-of-type(" + i + ") img").addClass('active_image');

    $(".next").click(function(){
        if(i < total)
        {   
            $(".card_menu:nth-of-type(" + i + ")").addClass('active_menu_next');
            $(".card_menu:nth-of-type(" + i + ") img").removeClass('active_image');
            i++;
            $(".card_menu:nth-of-type(" + i + ")").addClass('active_menu');
            $(".card_menu:nth-of-type(" + i + ") img").addClass('active_image');
        }
    });

    $(".prev").click(function(){
        if(i <= total)
        {   
            if(i == 1){ return false;}
            $(".card_menu:nth-of-type(" + i + ")").removeClass('active_menu');
            $(".card_menu:nth-of-type(" + i + ") img").removeClass('active_image');
            i--; 
            $(".card_menu:nth-of-type(" + i + ")").removeClass('active_menu_next');
            $(".card_menu:nth-of-type(" + i + ") img").addClass('active_image');
            
        }
    });


});    
