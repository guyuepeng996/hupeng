"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

;(function ($) {
    "use strict";

    var Car = function () {
        function Car() {
            _classCallCheck(this, Car);

            this.$comm = $(".commodity");
            // this.$sum = $("a_middle span em")
            this.init();
            // this.quanxuan()
        }

        _createClass(Car, [{
            key: "sum",
            value: function sum() {
                this.$total = $(".comm_total");
                var sum = 0;
                for (var i = 0; i < this.data.length; i++) {
                    sum += parseFloat(this.data[i].money);
                }
                console.log(this.data);
                $(".a_middle span em").html(sum);
            }
        }, {
            key: "init",
            value: function init() {
                this.data = localStorage.getItem("goodsArr") ? JSON.parse(localStorage.getItem("goodsArr")) : [];

                var str4 = "";
                for (var i = 0; i < this.data.length; i++) {
                    if (this.data != []) {
                        str4 += "<div class=\"commodity\" >\n                    <div class=\"all_elections\">\n                    <input type=\"checkbox\">\n                    </div>\n                    <div class=\"comm_img\">\n                        <img src=\"" + this.data[i].img + "\" alt=\"\">\n                    </div>\n                    <div class=\"comm_name\">" + this.data[i].tit + "</div>\n                    <div class=\"comm_price\">" + this.data[i].uprice + "</div>\n                    <div class=\"comm_num\">" + this.data[i].num + "</div>\n                    <div class=\"comm_total\">" + this.data[i].money + "</div>\n                    <div class=\"comm_operation\" ><span  name= '" + this.data[i].tit + "'>\xD7</span></div></div>";
                    }
                }
                $(".aaaaa").html(str4);
                this.rend();

                this.sum();
                // this.ctrl();
            }
        }, {
            key: "rend",
            value: function rend() {
                var that = this;
                this.$ele = $(".elections");
                this.$id = $(".comm_id");
                this.$oper = $(".comm_operation span");
                this.$oper.on("click", function () {
                    var arr = localStorage.getItem('goodsArr') ? JSON.parse(localStorage.getItem('goodsArr')) : [];

                    for (var i = 0; i < arr.length; i++) {

                        if ($(this).attr("name") == arr[i].tit) {
                            // console.log($(this).attr("name"))
                            // console.log(i)
                            arr.splice(i, 1);
                            // console.log(arr)

                            localStorage.setItem("goodsArr", JSON.stringify(arr));
                        }
                    }
                    this.data = localStorage.getItem("goodsArr") ? JSON.parse(localStorage.getItem("goodsArr")) : [];
                    this.$total = $(".comm_total");
                    var sum = 0;
                    for (var i = 0; i < this.data.length; i++) {
                        sum += parseFloat(this.data[i].money);
                    }
                    console.log(this.data);
                    $(".a_middle span em").html(sum);

                    $(this).parent().parent().remove();
                });
            }
            // 全选
            // ctrl() {
            //     console.log(1)
            //     console.log(this.data.length)
            //     this.all = $('#all');
            //     this.xz = $('')
            //     this.all.on('click', () => {
            //         if (this.all.is(":checked")) {

            //             for (var i = 0; i < this.data.length; i++) {
            //                 this.data[i].prop('checked', true);
            //             }
            //         } else {
            //             for (var i = 0; i < this.data.length; i++) {
            //                 this.data.prop('checked', false);
            //             }

            //         }

            //         // this.changeAll();
            //     })

            // }

        }]);

        return Car;
    }();

    new Car();
})(jQuery);