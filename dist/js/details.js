"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

;(function ($) {
    "use strict";

    var Details = function () {
        function Details() {
            _classCallCheck(this, Details);

            this.$nav = $(".notice_nav span");
            window.a = 380;
            window.b = 1;
            this.good();

            // console.log(parseInt((this.$numcont.val())))
        }

        _createClass(Details, [{
            key: "good",
            value: function good() {
                var that = this;
                $.ajax({
                    url: "../data/catch.json",
                    dateType: "JSON",
                    success: function success(res) {
                        that.res = res;
                        that.xuanran();
                    }
                });
            }
        }, {
            key: "xuanran",
            value: function xuanran() {
                //  console.log(  localStorage.getItem("id"))
                var k = localStorage.getItem("id");
                //  console.log(this.res)
                var str3 = "";

                for (var i = 0; i < this.res[0].childArr.length; i++) {
                    if (this.res[0].childArr[i].goodsId == k) {
                        str3 += "<div class=\"cont\">\n        <div class=\"poster\">\n            <img src=\"" + this.res[0].childArr[i].img + "\" alt=\"\">\n            <span></span>\n        </div>\n        <div class=\"poster_a\">\n            <img src=\"" + this.res[0].childArr[i].img + "\" alt=\"\">\n        </div>\n        <div class=\"order\">\n            <div class=\"title\">" + this.res[0].childArr[i].title + "</div>\n            <div class=\"time\">\u65F6\u95F4\uFF1A" + this.res[0].childArr[i].showtime + "</div>\n            <div class=\"addr\">\u573A\u9986\uFF1A" + this.res[0].childArr[i].venue + " </div>\n            <div class=\"perform-notice\">\n                <div class=\"perform-notice-prefix\">\n                    <div class=\"speaker\"></div>\n                    <span >\u9884\u552E</span>\n                </div> \n                <div class=\"perform-notice-content hastitle\">\n                    <div >\u672C\u5546\u54C1\u4E3A\u9884\u552E\u5546\u54C1\uFF0C\u6B63\u5F0F\u5F00\u7968\u540E\u5C06\u5728\u7B2C\u4E00\u65F6\u95F4\u4E3A\u60A8\u914D\u9001</div>\n                    <div class=\"perform-notice-content-detail\">\u9884\u552E\u671F\u95F4\uFF0C\n                        \u7531\u4E8E\u4E3B\u529E\u672A\u6B63\u5F0F\u5F00\u7968\uFF0C\u4E0B\u5355\u540E\u65E0\u6CD5\u7ACB\u5373\u914D\u9001\u7968\u54C1\u3002\n                        \u4E00\u822C\u6F14\u51FA\u524D2-6\u5468\u51FA\u7968\uFF0C\u5F85\u6B63\u5F0F\u5F00\u7968\u540E\u5C06\u5728\u7B2C\u4E00\u65F6\u95F4\u4E3A\u60A8\u914D\u9001\uFF0C\n                        \u8BF7\u8010\u5FC3\u7B49\u5F85\u3002\u7EB8\u8D28\u7968\u8D2D\u7968\u540E\u53EF\u5728\u8BA2\u5355\u8BE6\u60C5\u9875\u67E5\u770B\u7269\u6D41\u4FE1\u606F\n                    </div>\t\t\n                </div> \n            </div>\n\n            <div class=\"city\">\n                <label for=\"\">\u57CE\u5E02</label>\n                <div class=\"cityitem active\">\u5B81\u6CE2\u7AD9</div>\n            </div>\n            <div class=\"notice-time\">\n                <img src=\"//img.alicdn.com/tfs/TB1gKnkSMTqK1RjSZPhXXXfOFXa-28-28.png\" class=\"notice-time-icon\">\n                \u573A\u6B21\u65F6\u95F4\u5747\u4E3A\u6F14\u51FA\u5F53\u5730\u65F6\u95F4\n            </div>\n\n            <div class=\"perform__order__select perform__order__select__performs\">\n                <div class=\"select_left\">\u573A\u6B21</div> \n                <div class=\"select_right\">\n                    <div class=\"select_right_list\">\n                        <span class=\"presell\">\u9884\u552E</span>\n                        <span class=\"time\">2019-11-16 \u5468\u516D 19:30</span>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"perform__order__select\">\n                <div class=\"select_left\">\u7968\u6863</div> \n                <div class=\"select_right\">\n                    <ul>\n                        <li class=\"active\">380\u5143(\u770B\u53F0)</li>\n                        <li>580\u5143(\u770B\u53F0)</li>\n                        <li>780\u5143(\u770B\u53F0)</li>\n                        <li>1080\u5143(\u5185\u573A)</li>\n                        <li>1280\u5143(\u5185\u573A)</li>\n                        <li>1580\u5143(\u5185\u573A)</li>\n                    </ul>\n                </div>\n            </div>\n\n            <div class=\"perform_order_price\">\n                <div class=\"num_left\">\u6570\u91CF</div>\n                <div class=\"num_right\">\n                    <div class=\"num_right_info\">\n                        <div class=\"num_cont\">\n                            <input type=\"button\" value=\"-\" class=\"reduce\">\n                            <div class=\"num_number\">\n                                <input type=\"text\" class=\"num_cont_num\">\n                            </div>\n                            <input type=\"button\" value=\"+\" class=\"plus\">\n                        </div>\n                    </div>\n                    <span>\u6BCF\u7B14\u8BA2\u5355\u9650\u8D2D6\u5F20</span>\n                </div>\n\n            </div>\n            <div class=\"perform_order_infoo\">\n                <p>\u6309\u4ED8\u6B3E\u987A\u5E8F\u914D\u7968\uFF0C\u4F18\u5148\u8FDE\u5EA7\u914D\u7968</p>\n            </div>\n            <div class=\"perform_order_price\">\n                <div class=\"num_left\">\u5408\u8BA1</div>\n                <div class=\"num_right\">\n                    <span class=\"prices\">\uFFE5380.00</span>\n                    <span>\u767B\u5F55\u540E\u67E5\u770B\u662F\u5426\u6709\u4F18\u60E0</span>\n                </div>\n\n            </div>\n            <div class=\"yudbtn\">\n                <div class=\"yuding\" onclick=\"window.open('car.html','_self')\"\">\u6DFB\u52A0\u5230\u8D2D\u7269\u8F66</div>\n            </div>\n\n\n        </div>\n    </div>";
                        $(".cont-data").html(str3);
                    }
                }
                for (var i = 0; i < this.res[1].childArr.length; i++) {
                    if (this.res[1].childArr[i].goodsId == k) {
                        str3 += "<div class=\"cont\">\n        <div class=\"poster\">\n            <img src=\"" + this.res[1].childArr[i].img + "\" alt=\"\">\n            <span></span>\n        </div>\n        <div class=\"poster_a\">\n            <img src=\"" + this.res[1].childArr[i].img + "\" alt=\"\">\n        </div>\n        <div class=\"order\">\n            <div class=\"title\">" + this.res[1].childArr[i].title + "</div>\n            <div class=\"time\">\u65F6\u95F4\uFF1A" + this.res[1].childArr[i].showtime + "</div>\n            <div class=\"addr\">\u573A\u9986\uFF1A" + this.res[1].childArr[i].venue + " </div>\n            <div class=\"perform-notice\">\n                <div class=\"perform-notice-prefix\">\n                    <div class=\"speaker\"></div>\n                    <span >\u9884\u552E</span>\n                </div> \n                <div class=\"perform-notice-content hastitle\">\n                    <div >\u672C\u5546\u54C1\u4E3A\u9884\u552E\u5546\u54C1\uFF0C\u6B63\u5F0F\u5F00\u7968\u540E\u5C06\u5728\u7B2C\u4E00\u65F6\u95F4\u4E3A\u60A8\u914D\u9001</div>\n                    <div class=\"perform-notice-content-detail\">\u9884\u552E\u671F\u95F4\uFF0C\n                        \u7531\u4E8E\u4E3B\u529E\u672A\u6B63\u5F0F\u5F00\u7968\uFF0C\u4E0B\u5355\u540E\u65E0\u6CD5\u7ACB\u5373\u914D\u9001\u7968\u54C1\u3002\n                        \u4E00\u822C\u6F14\u51FA\u524D2-6\u5468\u51FA\u7968\uFF0C\u5F85\u6B63\u5F0F\u5F00\u7968\u540E\u5C06\u5728\u7B2C\u4E00\u65F6\u95F4\u4E3A\u60A8\u914D\u9001\uFF0C\n                        \u8BF7\u8010\u5FC3\u7B49\u5F85\u3002\u7EB8\u8D28\u7968\u8D2D\u7968\u540E\u53EF\u5728\u8BA2\u5355\u8BE6\u60C5\u9875\u67E5\u770B\u7269\u6D41\u4FE1\u606F\n                    </div>\t\t\n                </div> \n            </div>\n\n            <div class=\"city\">\n                <label for=\"\">\u57CE\u5E02</label>\n                <div class=\"cityitem active\">\u5B81\u6CE2\u7AD9</div>\n            </div>\n            <div class=\"notice-time\">\n                <img src=\"//img.alicdn.com/tfs/TB1gKnkSMTqK1RjSZPhXXXfOFXa-28-28.png\" class=\"notice-time-icon\">\n                \u573A\u6B21\u65F6\u95F4\u5747\u4E3A\u6F14\u51FA\u5F53\u5730\u65F6\u95F4\n            </div>\n\n            <div class=\"perform__order__select perform__order__select__performs\">\n                <div class=\"select_left\">\u573A\u6B21</div> \n                <div class=\"select_right\">\n                    <div class=\"select_right_list\">\n                        <span class=\"presell\">\u9884\u552E</span>\n                        <span class=\"time\">2019-11-16 \u5468\u516D 19:30</span>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"perform__order__select\">\n                <div class=\"select_left\">\u7968\u6863</div> \n                <div class=\"select_right\">\n                    <ul>\n                        <li class=\"active\">380\u5143(\u770B\u53F0)</li>\n                        <li>580\u5143(\u770B\u53F0)</li>\n                        <li>780\u5143(\u770B\u53F0)</li>\n                        <li>1080\u5143(\u5185\u573A)</li>\n                        <li>1280\u5143(\u5185\u573A)</li>\n                        <li>1580\u5143(\u5185\u573A)</li>\n                    </ul>\n                </div>\n            </div>\n\n            <div class=\"perform_order_price\">\n                <div class=\"num_left\">\u6570\u91CF</div>\n                <div class=\"num_right\">\n                    <div class=\"num_right_info\">\n                        <div class=\"num_cont\">\n                            <input type=\"button\" value=\"-\" class=\"reduce\">\n                            <div class=\"num_number\">\n                                <input type=\"text\" class=\"num_cont_num\">\n                            </div>\n                            <input type=\"button\" value=\"+\" class=\"plus\">\n                        </div>\n                    </div>\n                    <span>\u6BCF\u7B14\u8BA2\u5355\u9650\u8D2D6\u5F20</span>\n                </div>\n\n            </div>\n            <div class=\"perform_order_infoo\">\n                <p>\u6309\u4ED8\u6B3E\u987A\u5E8F\u914D\u7968\uFF0C\u4F18\u5148\u8FDE\u5EA7\u914D\u7968</p>\n            </div>\n            <div class=\"perform_order_price\">\n                <div class=\"num_left\">\u5408\u8BA1</div>\n                <div class=\"num_right\">\n                    <span class=\"prices\">\uFFE5380.00</span>\n                    <span>\u767B\u5F55\u540E\u67E5\u770B\u662F\u5426\u6709\u4F18\u60E0</span>\n                </div>\n\n            </div>\n            <div class=\"yudbtn\">\n                <div class=\"yuding\" onclick=\"window.open('car.html','_self')\"\">\u6DFB\u52A0\u5230\u8D2D\u7269\u8F66</div>\n            </div>\n\n\n        </div>\n    </div>";
                        $(".cont-data").html(str3);
                    }
                }
                for (var i = 0; i < this.res[2].childArr.length; i++) {
                    if (this.res[2].childArr[i].goodsId == k) {
                        str3 += "<div class=\"cont\">\n        <div class=\"poster\">\n            <img src=\"" + this.res[2].childArr[i].img + "\" alt=\"\">\n            <span></span>\n        </div>\n        <div class=\"poster_a\">\n            <img src=\"" + this.res[2].childArr[i].img + "\" alt=\"\">\n        </div>\n        <div class=\"order\">\n            <div class=\"title\">" + this.res[2].childArr[i].title + "</div>\n            <div class=\"time\">\u65F6\u95F4\uFF1A" + this.res[2].childArr[i].showtime + "</div>\n            <div class=\"addr\">\u573A\u9986\uFF1A" + this.res[2].childArr[i].venue + " </div>\n            <div class=\"perform-notice\">\n                <div class=\"perform-notice-prefix\">\n                    <div class=\"speaker\"></div>\n                    <span >\u9884\u552E</span>\n                </div> \n                <div class=\"perform-notice-content hastitle\">\n                    <div >\u672C\u5546\u54C1\u4E3A\u9884\u552E\u5546\u54C1\uFF0C\u6B63\u5F0F\u5F00\u7968\u540E\u5C06\u5728\u7B2C\u4E00\u65F6\u95F4\u4E3A\u60A8\u914D\u9001</div>\n                    <div class=\"perform-notice-content-detail\">\u9884\u552E\u671F\u95F4\uFF0C\n                        \u7531\u4E8E\u4E3B\u529E\u672A\u6B63\u5F0F\u5F00\u7968\uFF0C\u4E0B\u5355\u540E\u65E0\u6CD5\u7ACB\u5373\u914D\u9001\u7968\u54C1\u3002\n                        \u4E00\u822C\u6F14\u51FA\u524D2-6\u5468\u51FA\u7968\uFF0C\u5F85\u6B63\u5F0F\u5F00\u7968\u540E\u5C06\u5728\u7B2C\u4E00\u65F6\u95F4\u4E3A\u60A8\u914D\u9001\uFF0C\n                        \u8BF7\u8010\u5FC3\u7B49\u5F85\u3002\u7EB8\u8D28\u7968\u8D2D\u7968\u540E\u53EF\u5728\u8BA2\u5355\u8BE6\u60C5\u9875\u67E5\u770B\u7269\u6D41\u4FE1\u606F\n                    </div>\t\t\n                </div> \n            </div>\n\n            <div class=\"city\">\n                <label for=\"\">\u57CE\u5E02</label>\n                <div class=\"cityitem active\">\u5B81\u6CE2\u7AD9</div>\n            </div>\n            <div class=\"notice-time\">\n                <img src=\"//img.alicdn.com/tfs/TB1gKnkSMTqK1RjSZPhXXXfOFXa-28-28.png\" class=\"notice-time-icon\">\n                \u573A\u6B21\u65F6\u95F4\u5747\u4E3A\u6F14\u51FA\u5F53\u5730\u65F6\u95F4\n            </div>\n\n            <div class=\"perform__order__select perform__order__select__performs\">\n                <div class=\"select_left\">\u573A\u6B21</div> \n                <div class=\"select_right\">\n                    <div class=\"select_right_list\">\n                        <span class=\"presell\">\u9884\u552E</span>\n                        <span class=\"time\">2019-11-16 \u5468\u516D 19:30</span>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"perform__order__select\">\n                <div class=\"select_left\">\u7968\u6863</div> \n                <div class=\"select_right\">\n                    <ul>\n                        <li class=\"active\">380\u5143(\u770B\u53F0)</li>\n                        <li>580\u5143(\u770B\u53F0)</li>\n                        <li>780\u5143(\u770B\u53F0)</li>\n                        <li>1080\u5143(\u5185\u573A)</li>\n                        <li>1280\u5143(\u5185\u573A)</li>\n                        <li>1580\u5143(\u5185\u573A)</li>\n                    </ul>\n                </div>\n            </div>\n\n            <div class=\"perform_order_price\">\n                <div class=\"num_left\">\u6570\u91CF</div>\n                <div class=\"num_right\">\n                    <div class=\"num_right_info\">\n                        <div class=\"num_cont\">\n                            <input type=\"button\" value=\"-\" class=\"reduce\">\n                            <div class=\"num_number\">\n                                <input type=\"text\" class=\"num_cont_num\">\n                            </div>\n                            <input type=\"button\" value=\"+\" class=\"plus\">\n                        </div>\n                    </div>\n                    <span>\u6BCF\u7B14\u8BA2\u5355\u9650\u8D2D6\u5F20</span>\n                </div>\n\n            </div>\n            <div class=\"perform_order_infoo\">\n                <p>\u6309\u4ED8\u6B3E\u987A\u5E8F\u914D\u7968\uFF0C\u4F18\u5148\u8FDE\u5EA7\u914D\u7968</p>\n            </div>\n            <div class=\"perform_order_price\">\n                <div class=\"num_left\">\u5408\u8BA1</div>\n                <div class=\"num_right\">\n                    <span class=\"prices\">\uFFE5380.00</span>\n                    <span>\u767B\u5F55\u540E\u67E5\u770B\u662F\u5426\u6709\u4F18\u60E0</span>\n                </div>\n\n            </div>\n            <div class=\"yudbtn\">\n                <div class=\"yuding\" onclick=\"window.open('car.html','_self')\"\">\u6DFB\u52A0\u5230\u8D2D\u7269\u8F66</div>\n            </div>\n\n\n        </div>\n    </div>";
                        $(".cont-data").html(str3);
                    }
                }
                for (var i = 0; i < this.res[3].childArr.length; i++) {
                    if (this.res[3].childArr[i].goodsId == k) {
                        str3 += "<div class=\"cont\">\n        <div class=\"poster\">\n            <img src=\"" + this.res[3].childArr[i].img + "\" alt=\"\">\n            <span></span>\n        </div>\n        <div class=\"poster_a\">\n            <img src=\"" + this.res[3].childArr[i].img + "\" alt=\"\">\n        </div>\n        <div class=\"order\">\n            <div class=\"title\">" + this.res[3].childArr[i].title + "</div>\n            <div class=\"time\">\u65F6\u95F4\uFF1A" + this.res[3].childArr[i].showtime + "</div>\n            <div class=\"addr\">\u573A\u9986\uFF1A" + this.res[3].childArr[i].venue + " </div>\n            <div class=\"perform-notice\">\n                <div class=\"perform-notice-prefix\">\n                    <div class=\"speaker\"></div>\n                    <span >\u9884\u552E</span>\n                </div> \n                <div class=\"perform-notice-content hastitle\">\n                    <div >\u672C\u5546\u54C1\u4E3A\u9884\u552E\u5546\u54C1\uFF0C\u6B63\u5F0F\u5F00\u7968\u540E\u5C06\u5728\u7B2C\u4E00\u65F6\u95F4\u4E3A\u60A8\u914D\u9001</div>\n                    <div class=\"perform-notice-content-detail\">\u9884\u552E\u671F\u95F4\uFF0C\n                        \u7531\u4E8E\u4E3B\u529E\u672A\u6B63\u5F0F\u5F00\u7968\uFF0C\u4E0B\u5355\u540E\u65E0\u6CD5\u7ACB\u5373\u914D\u9001\u7968\u54C1\u3002\n                        \u4E00\u822C\u6F14\u51FA\u524D2-6\u5468\u51FA\u7968\uFF0C\u5F85\u6B63\u5F0F\u5F00\u7968\u540E\u5C06\u5728\u7B2C\u4E00\u65F6\u95F4\u4E3A\u60A8\u914D\u9001\uFF0C\n                        \u8BF7\u8010\u5FC3\u7B49\u5F85\u3002\u7EB8\u8D28\u7968\u8D2D\u7968\u540E\u53EF\u5728\u8BA2\u5355\u8BE6\u60C5\u9875\u67E5\u770B\u7269\u6D41\u4FE1\u606F\n                    </div>\t\t\n                </div> \n            </div>\n\n            <div class=\"city\">\n                <label for=\"\">\u57CE\u5E02</label>\n                <div class=\"cityitem active\">\u5B81\u6CE2\u7AD9</div>\n            </div>\n            <div class=\"notice-time\">\n                <img src=\"//img.alicdn.com/tfs/TB1gKnkSMTqK1RjSZPhXXXfOFXa-28-28.png\" class=\"notice-time-icon\">\n                \u573A\u6B21\u65F6\u95F4\u5747\u4E3A\u6F14\u51FA\u5F53\u5730\u65F6\u95F4\n            </div>\n\n            <div class=\"perform__order__select perform__order__select__performs\">\n                <div class=\"select_left\">\u573A\u6B21</div> \n                <div class=\"select_right\">\n                    <div class=\"select_right_list\">\n                        <span class=\"presell\">\u9884\u552E</span>\n                        <span class=\"time\">2019-11-16 \u5468\u516D 19:30</span>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"perform__order__select\">\n                <div class=\"select_left\">\u7968\u6863</div> \n                <div class=\"select_right\">\n                    <ul>\n                        <li class=\"active\">380\u5143(\u770B\u53F0)</li>\n                        <li>580\u5143(\u770B\u53F0)</li>\n                        <li>780\u5143(\u770B\u53F0)</li>\n                        <li>1080\u5143(\u5185\u573A)</li>\n                        <li>1280\u5143(\u5185\u573A)</li>\n                        <li>1580\u5143(\u5185\u573A)</li>\n                    </ul>\n                </div>\n            </div>\n\n            <div class=\"perform_order_price\">\n                <div class=\"num_left\">\u6570\u91CF</div>\n                <div class=\"num_right\">\n                    <div class=\"num_right_info\">\n                        <div class=\"num_cont\">\n                            <input type=\"button\" value=\"-\" class=\"reduce\">\n                            <div class=\"num_number\">\n                                <input type=\"text\" class=\"num_cont_num\">\n                            </div>\n                            <input type=\"button\" value=\"+\" class=\"plus\">\n                        </div>\n                    </div>\n                    <span>\u6BCF\u7B14\u8BA2\u5355\u9650\u8D2D6\u5F20</span>\n                </div>\n\n            </div>\n            <div class=\"perform_order_infoo\">\n                <p>\u6309\u4ED8\u6B3E\u987A\u5E8F\u914D\u7968\uFF0C\u4F18\u5148\u8FDE\u5EA7\u914D\u7968</p>\n            </div>\n            <div class=\"perform_order_price\">\n                <div class=\"num_left\">\u5408\u8BA1</div>\n                <div class=\"num_right\">\n                    <span class=\"prices\">\uFFE5380.00</span>\n                    <span>\u767B\u5F55\u540E\u67E5\u770B\u662F\u5426\u6709\u4F18\u60E0</span>\n                </div>\n\n            </div>\n            <div class=\"yudbtn\">\n                <div class=\"yuding\" onclick=\"window.open('car.html','_self')\"\">\u6DFB\u52A0\u5230\u8D2D\u7269\u8F66</div>\n            </div>\n\n\n        </div>\n    </div>";
                        $(".cont-data").html(str3);
                    }
                }

                this.$poster = $(".poster");
                this.$span = $(".poster span");
                this.$poster1 = $(".poster_a");
                this.$img = $(".poster_a img");
                this.$ticket = $(".select_right ul li");
                this.$numleft = $(".reduce");
                this.$numcont = $(".num_cont_num");
                this.$numright = $(".plus");
                this.$prices = $(".prices");

                this.$tit = $(".order .title");
                this.$tj = $(".yuding");
                this.init(); //票档模块
                this.magnifier(); //放大镜效果
                this.num(); //加购数据
                this.nav(); //详情操作
                this.money();
                this.car();
            }

            // 票档模块

        }, {
            key: "init",
            value: function init() {
                var that = this;
                this.$ticket.on("click", function () {
                    $(this).addClass("active").siblings().removeClass("active");
                    //获取不同座位的价格
                    window.a = parseFloat($(".select_right .active").html());
                    that.money();
                });
            }

            // 加购数量函数

        }, {
            key: "num",
            value: function num() {
                var that = this;
                this.$numcont.attr("value", 1);
                var n = parseInt(this.$numcont.val()); //数量
                this.$numleft.on("click", function () {
                    n--;
                    if (n <= 0) {
                        n = 1;
                        that.$numcont.attr("value", n);
                    } else {
                        that.$numcont.attr("value", n);
                    }
                    window.b = parseInt($('.num_cont_num').val());
                    that.money();
                });
                this.$numright.on("click", function () {
                    n++;
                    if (n >= 6) {
                        n = 6;
                        that.$numcont.attr("value", n);
                    } else {
                        that.$numcont.attr("value", n);
                    }
                    //获取不同的数量值
                    window.b = parseInt($('.num_cont_num').val());
                    that.money();
                });
            }
        }, {
            key: "money",
            value: function money() {
                this.$prices.html((window.a * window.b).toFixed(2));
                this.car();
            }
            // 放大镜效果

        }, {
            key: "magnifier",
            value: function magnifier() {
                var _this = this;

                // 鼠标移动，显示隐藏span
                this.$poster.on("mouseover", function () {
                    _this.$span.show();
                    _this.$poster1.show();
                    _this.$span.width(_this.$poster1.width() / _this.$img.width() * _this.$poster.width());
                    _this.$span.height(_this.$poster1.height() / _this.$img.height() * _this.$poster.height());
                });
                this.$poster.on("mouseout", function () {
                    _this.$span.hide();
                    _this.$poster1.hide();
                });
                $(document).on("mousemove", function () {
                    _this.move();
                });
            }
        }, {
            key: "move",
            value: function move() {
                var l = event.pageX - this.$poster[0].offsetLeft - this.$span.width() / 2;
                var t = event.pageY - this.$poster[0].offsetTop - this.$span.height() / 2;
                // 边界限定
                if (l < 0) l = 0;
                if (t < 0) t = 0;
                if (l > this.$poster.width() - this.$span.width()) {
                    l = this.$poster.width() - this.$span.width();
                }
                if (t > this.$poster.height() - this.$span.height()) {
                    t = this.$poster.height() - this.$span.height();
                }
                this.$span.css("left", l + 'px');
                this.$span.css("top", t + 'px');
                // 计算比例
                var x = l / (this.$poster.width() - this.$span.width());
                var y = t / (this.$poster.height() - this.$span.height());
                // 放大镜图片的位移
                this.$img.css("left", x * (this.$poster1.width() - this.$img.width()) + 'px');
                this.$img.css("top", y * (this.$poster1.height() - this.$img.height()) + 'px');
            }
        }, {
            key: "car",
            value: function car() {
                var _this2 = this;

                this.arr = window.localStorage.goodsArr ? JSON.parse(window.localStorage.goodsArr) : [];
                // console.log(window.a)
                var cardata = {

                    img: this.$img.attr('src'),
                    tit: this.$tit.html(),
                    uprice: window.a,
                    num: window.b,
                    money: this.$prices.text()
                };

                this.arr.push(cardata);
                console.log(this.arr);
                this.$tj.on("click", function () {

                    localStorage.setItem('goodsArr', JSON.stringify(_this2.arr));
                    console.log(_this2.arr);
                });
            }

            // 详情

        }, {
            key: "nav",
            value: function nav() {
                this.$nav.on("click", function () {
                    $(this).addClass("active").siblings().removeClass("active");
                });
            }
        }]);

        return Details;
    }();

    new Details();
})(jQuery);