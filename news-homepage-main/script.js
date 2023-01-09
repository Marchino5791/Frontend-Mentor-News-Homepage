$(".navbar__icon-menu").click(function () {
  $(".navbar__list").animate({ width: "70%" }, 400);
  $(".navbar__list__close").animate({ opacity: 1 }, 800);
  $(".overflow-effect").fadeIn();
});

$(".navbar__list__close").click(function () {
  $(".navbar__list").animate({ width: "0%" }, 400);
  $(".navbar__list__close").animate({ opacity: 0 }, 200);
  $(".overflow-effect").fadeOut();
});


$(window).resize(function () {
  if ($(window).width() > 1200) {
    $(".navbar__list").css("width", "40%");
  } else if ($(window).width() > 750) {
    $(".navbar__list").css("width", "60%");
  } else if ($(window).width() > 500) {
    $(".navbar__list").css("width", "80%");
  } else {
    $(".navbar__list").css("width", "0%");
    $(".overflow-effect").fadeOut();

    $(".navbar__list__item").click(function () {
      $(".navbar__list").animate({ width: "0%" }, 400);
      $(".navbar__list__close").animate({ opacity: 0 }, 200);
      $(".overflow-effect").fadeOut();
    });

    $(".overflow-effect").click(function () {
      $(".navbar__list").animate({ width: "0%" }, 400);
      $(".navbar__list__close").animate({ opacity: 0 }, 200);
      $(".overflow-effect").fadeOut();
    });
  }
});
