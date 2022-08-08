let t1 = gsap.timeline();

// t1.from(".name_artist", {
//   opacity: 0,
//   xPercent: -100,
//   delay: 0.5,
//   duration: 1,
//   ease: "power1.out",
//   yoyo: true,
// });
t1.to(".name_artist", {
  opacity: 0,
  xPercent: -100,
  duration: 1,
  ease: "power1.out",
  yoyo: true,
},
1.8/*tempo em que a nimação fica paralisada*/
);
t1.to(
  ".cover",
  {
    xPercent: -100,
    duration: 1,
    ease: "power1.out",
  },
  3
);
// First Level Of JS
t1.to(
  ".cover-2",
  {
    xPercent: -100,
    duration: 1,
    ease: "power1.out",
  },
  3.2
);
t1.to(
  ".cover-3",
  {
    xPercent: -100,
    duration: 1,
    ease: "power1.out",
  },
  3.4
);
t1.to(
  ".cover-4",
  {
    xPercent: -100,
    duration: 1,
    ease: "power1.out",
  },
  3.6
);
t1.from(".logo", {
  xPercent: -100,
  opacity: 0,
  duration: 1,
  ease: "power1.out",
});
t1.from(".menu_historia", {
  xPercent: 100,
  opacity: 0,
  duration: 1,
  ease: "power1.out",
});
// Evitar o scroll grande
t1.to(".container_info_obra" , {
  duration: 0.2,
  display: "block",
  ease: "power1.in"
});

t1.from('.name_obra', 0.6,{
  delay: 0.2,
  y: "-100%",
  opacity: 0,
});
t1.from('.text_obra', 1.2,{
  delay: 1,
  y: "-100%",
  opacity: 0
});
t1.fromTo(".image_obra",{
  y: "200%",
},{
  duration: 1,
  y: "0%",
  ease: "power1.in"
},"-=3");

t1.from(".footer_social", {
  xPercent: -100,
  opacity: 0,
  duration: 1,
  ease: "power1.out",
});
t1.from(".footer_endereco", {
  xPercent: 100,
  opacity: 0,
  duration: 1,
  ease: "power1.out",
});

// t1.fromTo(".heroImg",{
//   height: "0",
// },{
//   duration: 1,
//   height: "60vh",
//   opacity: 1,
//   ease: "power1.out"
// });



// t1.to(".heroImg" , {
//   duration: 2.5,
//   y: "0%",
//   display: "block",
//   ease: "power1.out"
// },"+=1");

// t1.from(
//   ".name_obra",1.8,
//   {
//     yPercent: -100,
//     duration: 0.8,
//     ease: "power1.out",
//     opacity: 0,
//   },
//   3.8
// );

$(document).ready(function(){
  $(".link_voltar").click(function(){
    window.history.back();
  });
});


