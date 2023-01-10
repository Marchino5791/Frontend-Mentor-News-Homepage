function openMenu() {
  $("nav").show(200);
  $(".overflow-effect").show(200);
}

function closeMenu() {
  $("nav").hide(200);
  $(".overflow-effect").hide(200);
}

$(".navbar__icon-menu").click(openMenu);
$(".navbar__close").click(closeMenu);
$(".overflow-effect").click(closeMenu);

// reset when screen is > 500px
$(window).resize(function () {
  if ($(window).width() > 500) {
    $("nav").show();
  } else {
    closeMenu();
  }
});