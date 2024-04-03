document.addEventListener("DOMContentLoaded", function () {
  const t1 = gsap.timeline({ paused: true });

  t1.to(".nav", {
    duration: 1.8,
    width: "94%",
    ease: "expo.inOut"
  });

  t1.staggerTo(
    ".nav-item a",
    0.6,
    {
      top: "0px",
      skewY: 10,
      ease: "expo.inOut"
    },
    0.1,
    "-=0.8"
  );

  t1.reverse();

  document.addEventListener("click", function (event) {
    if (
      event.target.matches(".nav-toggle") ||
      event.target.closest(".nav-toggle")
    ) {
      t1.reversed(!t1.reversed());
    } else if (
      event.target.matches(".nav-item a") ||
      event.target.closest(".nav-item a")
    ) {
      t1.reversed(!t1.reversed());
    }
  });
});
