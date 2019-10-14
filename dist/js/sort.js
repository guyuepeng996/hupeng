"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

;(function ($) {
    "use strict";

    var Sort = function () {
        function Sort() {
            _classCallCheck(this, Sort);

            this.$li = $(".sort_top ul li");
            this.url = "http://localhost/Barley/dist/data/catch.json";
            this.$spbox = $(".spbox");
            this.$up = $(".lileft");
            this.$down = $(".liright");
            this.load();
        }

        _createClass(Sort, [{
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
                this.sortArr = [];
                this.pricedata = [];
                this.pricedata1 = [];
                var that = this;
                for (var i = 0; i < this.res.length; i++) {
                    for (var j = 0; j < this.res[i].childArr.length; j++) {
                        this.sortArr.push(this.res[i].childArr[j]);
                    }
                }
                // console.log(this.sortArr)
                this.pricedata = this.sortArr.concat();
                this.pricedata1 = this.sortArr.concat();

                this.pricedata.sort(function (b, a) {
                    return a.price - b.price;
                });
                // console.log(this.pricedata)

                this.pricedata1.sort(function (a, b) {
                    return a.price - b.price;
                });
                // console.log(this.pricedata1)
                var str = "";
                for (var i = 0; i < this.pricedata.length; i++) {
                    str += "<div class=\"spbox\"><a href=\"./details.html\" class=\"panel-next\" id=" + this.pricedata[i].goodsId + ">\n                <div class=\"img\"><img src=\"" + this.pricedata[i].img + "\" alt=\"\"></div></a>\n                <div class=\"iteninfo\">\n                    <div class=\"title\">" + this.pricedata[i].title + "</div>\n                    <div class=\"venue\">" + this.pricedata[i].venue + "</div>\n                    <div class=\"showtime\">" + this.pricedata[i].showtime + "</div>\n                    <div class=\"price\">\uFFE5" + this.pricedata[i].price + "<span>\u5143</span><i>\u552E\u7968\u4E2D</i></div>\n                </div>\n            </div>";
                }
                $(".sort_one").html(str);
                // 降序，从大到小
                this.$up.on("click", function () {
                    $(this).addClass("active").siblings().removeClass("active");
                    that.rendleft();
                });
                // 升序，从小到大
                this.$down.on("click", function () {
                    $(this).addClass("active").siblings().removeClass("active");

                    that.rendright();
                });
            }
        }, {
            key: "rendleft",
            value: function rendleft() {
                var str = "";
                for (var i = 0; i < this.pricedata.length; i++) {
                    str += "<div class=\"spbox\"><a href=\"./details.html\" class=\"panel-next\" id=" + this.pricedata[i].goodsId + ">\n                    <div class=\"img\"><img src=\"" + this.pricedata[i].img + "\" alt=\"\"></div></a>\n                    <div class=\"iteninfo\">\n                        <div class=\"title\">" + this.pricedata[i].title + "</div>\n                        <div class=\"venue\">" + this.pricedata[i].venue + "</div>\n                        <div class=\"showtime\">" + this.pricedata[i].showtime + "</div>\n                        <div class=\"price\">\uFFE5" + this.pricedata[i].price + "<span>\u5143</span><i>\u552E\u7968\u4E2D</i></div>\n                    </div>\n                </div>";
                }
                $(".sort_one").html(str);
            }
        }, {
            key: "rendright",
            value: function rendright() {
                var str = "";
                for (var i = 0; i < this.pricedata1.length; i++) {
                    str += "<div class=\"spbox\"><a href=\"./details.html\" class=\"panel-next\" id=" + this.pricedata1[i].goodsId + ">\n                <div class=\"img\"><img src=\"" + this.pricedata1[i].img + "\" alt=\"\"></div></a>\n                <div class=\"iteninfo\">\n                    <div class=\"title\">" + this.pricedata1[i].title + "</div>\n                    <div class=\"venue\">" + this.pricedata1[i].venue + "</div>\n                    <div class=\"showtime\">" + this.pricedata1[i].showtime + "</div>\n                    <div class=\"price\">\uFFE5" + this.pricedata1[i].price + "<span>\u5143</span><i>\u552E\u7968\u4E2D</i></div>\n                </div>\n            </div>";
                }
                $(".sort_one").html(str);
            }
            // 保存商品的信息

        }, {
            key: "keepId",
            value: function keepId() {
                var that = this;
                // 商品
                this.goods = $('.panel-next');
                this.goods.on('click', function () {
                    var goodsId = $(this).attr('id');
                    localStorage.setItem("id", goodsId);
                });
            }
        }]);

        return Sort;
    }();

    new Sort();
})(jQuery);