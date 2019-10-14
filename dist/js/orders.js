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
            key: "init",
            value: function init() {
                this.data = localStorage.getItem("goodsArr") ? JSON.parse(localStorage.getItem("goodsArr")) : [];

                var str4 = "";
                for (var i = 0; i < this.data.length; i++) {
                    if (this.data != []) {
                        str4 += "\n                    <div class=\"commodity\">\n\t\t\t\t\t<div class=\"comm_img\">\n\t\t\t\t\t\t<img src=\"" + this.data[i].img + "\" alt=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"comm_name\">" + this.data[i].tit + "</div>\n\t\t\t\t\t<div class=\"comm_price\">" + this.data[i].uprice + "</div>\n\t\t\t\t\t<div class=\"comm_num\">" + this.data[i].num + "</div>\n\t\t\t\t\t<div class=\"comm_total\">" + this.data[i].money + "</div>\n\t\t\t\t</div>";
                    }
                }
                $(".bbbbb").html(str4);
                // this.rend();

                // this.sum();

            }
            // rend () {
            //     var that=this;
            //     this.$ele = $(".elections");
            //     this.$id = $(".comm_id");
            //     this.$oper = $(".comm_operation span");
            //     this.$oper.on("click",function () { 
            //     var arr=localStorage.getItem('goodsArr')?  JSON.parse (localStorage.getItem('goodsArr')):[]

            //     for(var i=0;i<arr.length;i++){

            //         if($(this).attr("name") == arr[i].tit){
            //             // console.log($(this).attr("name"))
            //             // console.log(i)
            //             arr.splice(i,1)
            //             // console.log(arr)

            //             localStorage.setItem("goodsArr",JSON.stringify(arr) )

            //         }

            //     }
            //     this.data= localStorage.getItem("goodsArr")? JSON.parse  (localStorage.getItem("goodsArr")):[];
            //     this.$total = $(".comm_total");
            //     var sum = 0;
            //     for(var i=0;i<this.data.length;i++) {
            //         sum += parseFloat(this.data[i].money)
            //     }
            //    console.log(this.data)
            //     $(".a_middle span em").html(sum)

            //         $(this).parent().parent().remove();


            //     })

            // }
            // quanxuan () {
            //     this.$qx = $(".qx");
            //     this.$qxmin = $(".qxmin:checked");
            // }

        }]);

        return Car;
    }();

    new Car();
})(jQuery);