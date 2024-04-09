const burger = document.getElementById('open')
const overlay = document.getElementById('overlay')
const li = document.querySelectorAll('.overlay-container li')

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger)
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
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
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

  $('.theme-detail-slider').slick({
    centerMode: true,
    infinite: true,
    centerPadding: '120px',
    slidesToScroll: 1,
    slidesToShow: 1,
    arrows: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.screenshot-container-list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 3,
    variableWidth: true,
    prevArrow: $('.arrow-prev'),
    nextArrow: $('.arrow-next'),
    responsive: [
      {
        breakpoint: 1296,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      }
    ]
  })

  //   let sections = gsap.utils.toArray("section");
  // let listItem = gsap.utils.toArray("li");

  // sections.forEach((section, index) => {
  //   ScrollTrigger.create({
  //     trigger: section,
  //     markers: true,
  //     start: 'top bottom',
  //     end: 'bottom bottom',
  //     toggleClass: { targets: listItem[index], className: "active" }
  //   });
  // });
  const about_text = document.querySelector('.container-about-left .text')
  const about_design = document.querySelector('.about-design-text')

  gsap.from(about_text, {
    scrollTrigger: {
      trigger: about_text,
      start: "top 60%",
      end: "end 60%",
      markers: true,
      // scrub: true,
      onEnter: () => {
        console.log('onEnter');
        about_text.classList.add('reveal-about');
        about_design.classList.add('reveal-about');
      },
      onEnterBack: () => console.log('onEnterBack'),
      onLeave: () => console.log('onLeave'),
      onLeaveBack: () => console.log('onLeaveBack')
    }
  })
});

