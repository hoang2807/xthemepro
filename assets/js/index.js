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

  const nav__link = document.querySelectorAll('.nav__link')
  nav__link.forEach(element => {
    element.addEventListener('click', function (e) {
      tl.reversed(!tl.reversed());
    })
  })

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

window.addEventListener("scroll", function () {

  const maxHeight = document.body.scrollHeight - window.innerHeight;
  console.log((window.scrollY * 100) / maxHeight);
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
      // {
      //   breakpoint: 1633,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 1,
      //   }
      // },
      {
        breakpoint: 1120,
        settings: {
          infinite: true,
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //     arrows: false,
      //     infinite: false,
      //   },
      // },
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
    // variableWidth: true,
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
        breakpoint: 1311,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        }
      }
    ]
  })

  // reveal up
  gsap.utils.toArray(".revealUp").forEach(function (elem) {
    ScrollTrigger.create({
      trigger: elem,
      start: "top 65%",
      end: "bottom 20%",
      // markers: true,
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

$('.btn-theme').click(function () {
  myFunction(this);
});

function myFunction(element) {
  console.log(element);
  console.log(element.id);
  console.log($(element).attr("class"));
}

// $(document).scroll(function () {
//   $('section').each(function () {
//     if ($(this).position().top <= $(document).scrollTop() && ($(this).position().top + $(this).outerHeight()) > $(document).scrollTop()) {
//       console.log($(this).attr('id'));
//     }
//   });
// });
(function ($) {
  $(window).on("scroll", function () {
    //Loop Sections
    $("section").each(function (i, d) {
      //And Get Current One

      var sec = $(this);
      // var el = $(this).find('#name-page');
      const el = document.getElementById('name-page')
      const current = document.getElementById('current-page')

      // el.text('test')
      if (
        $(this).position().top - 100 <= $(document).scrollTop() &&
        $(this).position().top - 100 + $(this).outerHeight() > $(document).scrollTop()
      ) {
        console.log('<p>In The Viewport: ' + i + '</p>')
        current.innerHTML = `0${i + 1}`
        switch (i) {
          case 0:
            el.innerHTML = 'intro'
            break
          case 1:
            el.innerHTML = 'about'
            break
          case 2:
            el.innerHTML = 'web design'
            break
          case 3:
            el.innerHTML = 'app design'
            break
          case 4:
            el.innerHTML = 'software development'
            break
          case 5:
            el.innerHTML = 'themes design'
            break
          case 6:
            el.innerHTML = 'contact'
            break
        }
      } else {
        // console.log('<p>Out Of The Viewport: ' + i + '</p>')
      }
    });
  });
})(jQuery);

