$(window).on("scroll", function () {
  if ($(window).scrollTop() > 50) {
    $("header").addClass("header-show");
  } else {
    $("header").removeClass("header-show");
  }
});