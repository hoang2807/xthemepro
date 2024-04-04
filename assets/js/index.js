const burger = document.getElementById('open')
const overlay = document.getElementById('overlay')
const li = document.querySelectorAll('.overlay-container li')
// burger.addEventListener('click', function () {
//   if (overlay.style.width == '100%') {
//     return overlay.style.width = '0%'
//   }
//   overlay.style.width = '100%'
//   setTimeout(() => {
//     li.forEach(function (item) {
//       item.classList.add('reveal-text')
//     })
//     // overlap.classList.add('reveal-text')
//   }, 400)
// })

document.addEventListener("DOMContentLoaded", function () {
  const t1 = gsap.timeline({ paused: true });

  t1.to(".overlay", {
    duration: 1,
    width: "100%",
    ease: "expo.inOut"
  });

  // t1.staggerTo(
  //   ".overlay-container li",
  //   2.0,
  //   {
  //     top: "0px",
  //     ease: "expo.inOut"
  //   },
  //   0.1,
  //   "-=0.8"
  // );

  t1.to('.overlay-container li', {
    duration: 3.0,
    yoyo: true,
    ease: "power2.in"
  })

  t1.reverse();

  burger.addEventListener('click', function () {
    t1.reversed(!t1.reversed())
  })
});
