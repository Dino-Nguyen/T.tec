$(document).ready(function () {
  $(".menu_mobile").click(function () {
    $(".close").show("slow");
    $(".menu_mobile_list").animate(
      {
        top: "0",
      },
      500,
      function () {}
    );
    $("header").css("z-index", "2");
  });

  $(".close").click(function () {
    $(".menu_mobile_list").animate(
      {
        top: "-500px",
      },
      500,
      function () {}
    );
    $(".close").hide();
  });
});
