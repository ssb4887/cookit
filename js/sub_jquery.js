$(function () {
  var ch = 0;

  $(".btn").click(function () {
    if (ch == 1) {
      $("#hide").stop().css({ "z-index": -100 }).animate({ top: "0px" });
      ch = 0;
    } else if (ch == 0) {
      $("#hide").stop().animate({ top: "-200px", "z-index": 10 });
      ch = 1;
    }
  });

  $(window).scroll(function () {
    var sct1 = $(window).scrollTop() - 6085;
    if (sct1 > 50) {
      $("#box").css({ position: "fixed", top: "45px", left: "402px" });
    } else if (sct1 < 50) {
      $("#box").css({ position: "absolute", top: "50px", left: "50px" });
    }
  });
});
