"use strict";

;(function ($) {
    "use strict";

    var $row = $(".row-input");
    var $sjh = $row.find(".sjh");
    var $tips = $(".tips-sj");
    var $mm = $(".mm");
    var $tips1 = $(".tips-mm");
    var $qrmm = $(".qrmm");
    var $tips2 = $(".tips-qrmm");
    var $check = $(".checkbox");
    var $btn = $(".btn");

    var s = false;
    var p = false;
    var p2 = false;
    var h = false;
    // var t=false;
    // 手机号验证
    $sjh.on("focus", function () {
        $sjh.parent().css("border-color", "#ff3000");
    });
    $sjh.on("blur", function () {
        var res = /^1[3-9][0-9]{9}$/;
        if (!res.test($(this).val())) {
            $tips.html("请重新输入手机号");
            $tips.css("color", "#ff3000");
        } else {
            s = true;
            $tips.html("");
            $sjh.parent().css("border-color", "#c4c6cf");
        }
    });

    // 密码验证
    $mm.on("focus", function () {
        $mm.parent().css("border-color", "#ff3000");
    });
    $mm.on("blur", function () {
        var res1 = /^[\w]{6,20}$/;
        if (!res1.test($(this).val())) {
            $tips1.html("格式错误,请重新输入密码");
            $tips1.css("color", "#ff3000");
        } else {
            p = true;
            $tips1.html("");
            $mm.parent().css("border-color", "#c4c6cf");
        }
    });

    // 确认密码
    $qrmm.on("focus", function () {
        $qrmm.parent().css("border-color", "#ff3000");
    });
    $qrmm.on("blur", function () {
        // var res1=/^[\w]{6,20}$/;
        if (!($(this).val() == $mm.val())) {
            $tips2.html("密码不一致");
            $tips2.css("color", "#ff3000");
        } else {
            p2 = true;
            $tips2.html("密码一致");
            $tips2.css("color", "#c4c6cf");
            $qrmm.parent().css("border-color", "#c4c6cf");
        }
    });

    // 验证框验证
    $("#slider").slider({
        callback: function callback(result) {
            $("#result").text(result);
            h = true;
        }
    });
    // 还原
    $("#reset").click(function () {
        $("#slider").slider("restore");
    });

    // 同意注册按钮
    // $("checkbox").on("click",function () {
    // if($check.checked() == true){
    //     console.log(1)
    // }
    // })
    $btn.on("click", function () {
        var k = 0;
        if (s && p && p2 && h) {
            var pos = localStorage.getItem("userArr") ? JSON.parse(localStorage.getItem("userArr")) : [];
            var obj = {
                phone: $sjh.val(),
                pass: $mm.val()
            };
            pos.push(obj);
            localStorage.setItem("userArr", JSON.stringify(pos));

            alert("注册成功");
            k = 1;
            window.location.href = "homepage.html";
        }
        if (k = 0) {
            alert("注册失败，请重新注册");
        }
    });
})(jQuery);