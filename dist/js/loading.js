"use strict";

;(function () {
    "use strict";

    $(".loading .load-load div").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".loading .load-cont>div").eq($(this).index()).addClass("active").siblings().removeClass("active");
    });
    var $names = $(".load-cont .user .phonee");
    var $password = $(".load-cont .password .psd");
    var $btn1 = $(".load-s .btn1");

    var pos = localStorage.getItem("userArr") ? JSON.parse(localStorage.getItem("userArr")) : [];

    // var $userArr = JSON.parse(localStorage.getItem("userArr"));
    // console.log(pos)
    $btn1.on("click", function () {
        var k = 0;
        for (var i = 0; i < pos.length; i++) {
            if ($names.val() == pos[i].phone && $password.val() == pos[i].pass) {
                alert("成功");
                k = 1;
                window.location.href = "homepage.html";
            }
        }
        if (k == 0) {
            alert("用户名密码错误");
        }
    });
})();