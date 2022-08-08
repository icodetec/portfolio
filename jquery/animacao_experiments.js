$(document).ready(function(){

    let i = 1;
    var total = $(".card_experiments").length; //total de cards
    

    $(".button_right").click(function(){
        if(i < total)
        {   
            /* 
             .card_experiments
             {
               height: 500px;
               margin-bottom: 60px;   
             }
            
            */
            value = -560 * i;/*500 + 60 = 560// height + margin-bottom = 560*/
            $(".container_cards").css(
                'top', value
            );
            i++;
        }
    });
    

    $(".button_left").click(function(){
        if(i <= total)
        {   

           if(i == 1){ return false}
           value = value - (-560);
           $(".container_cards").css(
            'top', value
           );
           i--; 
       } 
    });

});
