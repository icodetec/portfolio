//Link Acora Créditos
var $root = $('html, body');

    $('a[href^="#creditos"]').click(function () {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1500);
    return false;
});

//scroll smooth 
luxy.init({
    wrapper: '#luxy',
    targets : '.luxy-el',
    wrapperSpeed:  0.08
});
//Reset List Animação Luxy.js
$(".list").css({"transform": "translate3d(0,0px,0)", "opacity": "1"});

//Animação Section
AOS.init({
    duration:1500
});



    