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
  // const t1 = gsap.timeline({ paused: true });

  // t1.to(".overlay", {
  //   duration: 1,
  //   width: "100%",
  //   ease: "expo.inOut"
  // });

  // // t1.staggerTo(
  // //   ".overlay-container li",
  // //   2.0,
  // //   {
  // //     top: "0px",
  // //     ease: "expo.inOut"
  // //   },
  // //   0.1,
  // //   "-=0.8"
  // // );

  // t1.to('.overlay-container li', {
  //   duration: 3.0,
  //   yoyo: true,
  //   ease: "power2.in"
  // })

  // t1.reverse();

  // burger.addEventListener('click', function () {
  //   t1.reversed(!t1.reversed())
  // })

  var tl = gsap.timeline({ paused: true });

  function openNav() {
    animateOpenNav();
    burger.onclick = function (e) {
      // Toggle reversed to it's opposite value
      tl.reversed(!tl.reversed());
      // Use the toggle method in the classList API
      burger.classList.toggle("active");
    };
  }

  function animateOpenNav() {
    var mobileNav = document.getElementById("mb_nav");
    tl.to(mobileNav, {
      duration: 0.8,
      ease: "power3.out",
      y: 0
    }).to(".nav__link", {
      opacity: 1,
      y: 0,
      duration: 0.3,
      stagger: {
        // wrap advanced options in an object
        each: 0.2,
        ease: "power1.in"
      }
    })
      .reverse(); // Finally reverse the timeline. reversed() is true
  }

  // init
  openNav();
});


$(document).ready(function () {
  $(".theme-list").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    draggable: false,
    variableWidth: true,
    prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
    dots: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          infinite: false,
        },
      },
    ],
    // autoplay: true,
    // autoplaySpeed: 1000,
  });
});