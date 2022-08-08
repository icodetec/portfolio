const tl = gsap.timeline();

//*************************************SECTION(PRETA) DE ABERTURA****************************

tl.to(".section_1" , {
    duration: 0.2,
    delay:1
});
tl.fromTo(".h1animacao",{
    y: "100%",
    opacity: 0
},{
    y: "0%",
    opacity: 0.9,
    duration: 2.5,
    ease: 0.25
});
tl.to(".section_1" , {
    y: "-100%",
    duration: 2,
    delay:1,
    ease: "Expo.easeInOut"
});


//*************************************CODIGO MENU TOPO - CONTAINER MENU NAV - MENU FOOTER****************************
tl.from(".logo", {
    xPercent: -100,
    opacity: 0,
    duration: 1,
    ease: "power1.out",
});
tl.from(".menu_historia", {
    xPercent: 100,
    opacity: 0,
    duration: 1,
    ease: "power1.out",
});
// CONTAINER MENU
tl.to(".container nav", {
    duration: 0.2,
    display: "block",
    ease: "power1.in"
});
tl.fromTo(".li",{
    y:"-100%",
    opacity: 0
},{
    duration: 1,
    opacity: 1,
    y: "0%",
    stagger: 0.25
});
tl.from(".footer_social", {
    xPercent: -100,
    opacity: 0,
    duration: 1,
    ease: "power1.out",
});
tl.from(".footer_endereco", {
    xPercent: 100,
    opacity: 0,
    duration: 1,
    ease: "power1.out",
});


//**************************CONTAINER MENU***********************



// function toggle(){
//     tl.play();
// }
// function togglec(){
//     tl.reverse();
// }