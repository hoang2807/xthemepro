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
      start: "top 70%",
      end: "bottom 20%",
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


  // reveal up
  gsap.utils.toArray(".revealUp").forEach(function (elem) {
    ScrollTrigger.create({
      trigger: elem,
      start: "top 70%",
      end: "bottom 20%",
      markers: true,
      onEnter: function () {
        gsap.fromTo(
          elem,
          { y: 100, autoAlpha: 0 },
          {
            duration: 1.25,
            y: 0,
            autoAlpha: 1,
            ease: "back",
            overwrite: "auto"
          }
        );
      },
      onLeave: function () {
        gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
      },
      onEnterBack: function () {
        gsap.fromTo(
          elem,
          { y: -100, autoAlpha: 0 },
          {
            duration: 1.25,
            y: 0,
            autoAlpha: 1,
            ease: "back",
            overwrite: "auto"
          }
        );
      },
      onLeaveBack: function () {
        gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
      }
    });
  });

});

function showTiles() {
  var tl = gsap.timeline();

  // show tiles
  tl.to("ul.transition li", {
    duration: .2,
    scaleY: 1,
    transformOrigin: "bottom left",
    stagger: .2
  })

  gsap.fromTo(".popup__content", 1, {
    opacity: 0,
    y: 50,
  }, {
    opacity: 1,
    y: 0,
    delay: 1,
  });
}

function hideTiles() {
  var tl = gsap.timeline();
  gsap.fromTo(".popup__content", 1, {
    opacity: 1,
    y: 0,
  }, {
    opacity: 0,
    y: 50,
  });
  tl.to("ul.transition li", {
    duration: .2,
    scaleY: 0,
    transformOrigin: "bottom right",
    stagger: .2,
    delay: 1
  })
}

// (function ($) {

//   let openPopup = $(".list-header-itemRight");
//   let closePopup = $(".popup-close");
//   let popup = $(".popup");

//   openPopup.click(function (e) {
//     e.preventDefault();
//     popup.addClass("popup--open");
//     showTiles();
//   });

//   closePopup.click(function () {
//     setTimeout(function () {
//       popup.removeClass("popup--open");
//     }, 1000);
//     hideTiles();
//   });


// })(jQuery);