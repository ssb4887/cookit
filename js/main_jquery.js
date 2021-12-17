$(function () {
  var current = 0;
  var setIntervalId;

  $(".btns > li").click(function () {
    var i = $(this).index();
    move(i);
    $(".btns > li").removeClass();
    $(this).addClass("on");
  });

  $(".img_area").on({
    mouseover: function () {
      clearInterval(setIntervalId);
    },
    mouseout: function () {
      timer();
    },
  });

  timer();

  function timer() {
    setIntervalId = setInterval(function () {
      var n = current + 1;
      if (n == 3) {
        n = 0;
      }
      move(n);
    }, 3000);
  }
  function move(n) {
    if (current == n) {
      return;
    }
    var currentEl = $("#imgs > li").eq(current);
    var nextEl = $("#imgs > li").eq(n);

    currentEl.css({ left: "0%" }).animate({ left: "-100%" });
    nextEl.css({ left: "100%" }).animate({ left: "0%" });

    current = n;
  }

  var ch = 0;

  $(".btn").click(function () {
    if (ch == 1) {
      $("#hide").stop().css({ "z-index": -50 }).animate({ top: "0px" });
      ch = 0;
    } else if (ch == 0) {
      $("#hide").stop().animate({ top: "-200px", "z-index": 10 });
      ch = 1;
    }
  });
});
