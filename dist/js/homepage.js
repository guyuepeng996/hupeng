"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

;(function () {
    'use strict';

    $(".top .home-kind .kind a").hover(function () {
        $(this).css("color", "#ff1268");
    }, function () {
        $(this).css("color", "#000");
    });

    $(".top .rights-header #enroll1").hide();
    $(".top .rights-header #enroll2").show();
    // 登录
    $(".top .rights-header .enroll").hover(function () {
        $(this).find("i").css("color", "#ff1268");
        $(this).find("ul").css("display", "block");
        $(this).find("ul li").on("mouseenter", function () {
            $(this).find("ul li").css("background-color", "red").siblings().css("background-color", "#fff");
        });
        $(this).find("ul li").on("mouseleave", function () {
            $(this).find("ul li").css("background-color", "#fff");
        });
    }, function () {
        $(this).find("i").css("color", "#000");
        $(this).find("ul").css("display", "none");
    });

    $(".top .rights-header .download").hover(function () {
        $(this).find("i").css("color", "#ff1268");
        $(this).find("div").css("display", "block");
    }, function () {
        $(this).find("i").css("color", "#000");
        $(this).find("div").css("display", "none");
    });

    $(".quit").on("click", function () {
        $("#enroll1").css("display", "block");
        $("#enroll2").css("display", "none");
    });

    var Home = function () {
        function Home() {
            _classCallCheck(this, Home);

            this.url = "http://localhost/Barley/dist/data/catch.json";
            this.cont = document.querySelector(".boxss");
            this.cont1 = document.querySelector(".bbox");

            this.load();
        }

        _createClass(Home, [{
            key: "load",
            value: function load() {
                var _this = this;

                $.getJSON({
                    url: this.url,
                    success: function success(res) {
                        _this.res = res;
                        _this.display();
                        _this.keepId();
                    }
                });
            }
        }, {
            key: "display",
            value: function display() {
                var str = "";
                for (var i = 0; i < this.res.length; i++) {
                    str += "<div class=\"boxs\">\n                      <div class=\"head\">\n                        <span class=\"head-title\">" + this.res[i].title + "</span>\n                        <span class=\"head-more\">" + this.res[i].more + "</span>\n                        <div class=\"box\"><a href=\"./details.html\" class=\"panel-next\">\n                            <div class=\"box-left\"><img src=\"" + this.res[i].img + "\" alt=\"\">\n                            <div class=\"box-left-info\">\n                            <div class=\"title\">" + this.res[i].name + "</div>\n\t\t\t\t\t\t\t<div class=\"price\">" + this.res[i].price + "<span>\u8D77</span></div>\n                            </div>\n                            </div></a>\n                        <div class=\"box-right\">";
                    for (var j = 0; j < this.res[i].childArr.length; j++) {
                        str += "<a href=\"./details.html\" class=\"panel-next\" id=" + this.res[i].childArr[j].goodsId + "> <div class=\"img\">\n            <img src=\"" + this.res[i].childArr[j].img + "\" alt=\"\"></div>\n            <div class=\"iteninfo\">\n                <div class=\"title\">" + this.res[i].childArr[j].title + "</div>\n                <div class=\"venue\">" + this.res[i].childArr[j].venue + "</div>\n                <div class=\"showtime\">" + this.res[i].childArr[j].showtime + "</div>\n                <div class=\"price\">\uFFE5" + this.res[i].childArr[j].price + "<span>\u8D77</span></div>\n            </div></a>";
                    }
                    str += "</div> </div></div></div>";
                }
                $(".boxss").html(str);
            }

            // 保存商品的信息

        }, {
            key: "keepId",
            value: function keepId() {
                var that = this;
                // 商品
                this.goods = $('.panel-next');
                this.goods.on('click', function () {
                    // console.log($(this).attr('id'))

                    var goodsId = $(this).attr('id');
                    localStorage.setItem("id", goodsId);
                });
            }
        }]);

        return Home;
    }();

    new Home();

    onload = function onload() {
        $(window).scroll(function (e) {
            if ($(window).scrollTop() > 100) {
                $(".J_GoTop").show();
            } else {
                $(".J_GoTop").hide();
            }
        });

        //设置成平滑滚动
        $(".J_GoTop").click(function () {
            //滚动时 滚动条离上部的距离
            var distance = $("html").scrollTop() + $("body").scrollTop();
            //设置滚动的总时间
            var time = 1000;
            //间隔时间
            var intervalTime = 50;
            var itemDistance = distance / (time / intervalTime);
            var intervalId = setInterval(function () {
                distance -= itemDistance;

                if (distance <= 0) {
                    clearInterval(intervalId);
                }
                $("html,body").scrollTop(distance - itemDistance);
            }, intervalTime);
        });
    };
})();
// if (localStorage.getItem('pos[i].phone')) {

// }