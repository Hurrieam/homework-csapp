var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
$(document).ready(function () {
    var Game = /** @class */ (function () {
        function Game() {
        }
        Game.prototype.play = function () {
            this.initialize();
            this.startPlay();
            this.endPlay();
        };
        return Game;
    }());
    var Football = /** @class */ (function (_super) {
        __extends(Football, _super);
        function Football() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Football.prototype.endPlay = function () {
            $("p").append("足球游戏结束<br>");
        };
        Football.prototype.initialize = function () {
            $("p").append("载入足球游戏<br>");
        };
        Football.prototype.startPlay = function () {
            $("p").append("足球游戏开始<br>");
        };
        return Football;
    }(Game));
    var BackDoor = /** @class */ (function () {
        function BackDoor() {
        }
        BackDoor.prototype.tricks = function () {
            return "走乔国老的后门";
        };
        return BackDoor;
    }());
    var GoBack = /** @class */ (function () {
        function GoBack() {
        }
        GoBack.prototype.tricks = function () {
            return "骗刘备回家";
        };
        return GoBack;
    }());
    var Retreat = /** @class */ (function () {
        function Retreat() {
        }
        Retreat.prototype.tricks = function () {
            return "让赵夫人撤军";
        };
        return Retreat;
    }());
    var ZhaoYun = /** @class */ (function () {
        function ZhaoYun(goodIdea1, goodIdea2, goodIdea3) {
            this.goodIdea1 = goodIdea1;
            this.goodIdea2 = goodIdea2;
            this.goodIdea3 = goodIdea3;
        }
        ZhaoYun.prototype.act = function (num) {
            switch (num) {
                case 1:
                    return this.goodIdea1.tricks();
                case 2:
                    return this.goodIdea2.tricks();
                case 3:
                    return this.goodIdea3.tricks();
            }
        };
        return ZhaoYun;
    }());
    (function () {
        var fb = new Football();
        fb.play();
        var zy = new ZhaoYun(new BackDoor(), new GoBack(), new Retreat());
        $("p").append(zy.act(1) + "<br>");
        $("p").append(zy.act(2) + "<br>");
        $("p").append(zy.act(3) + "<br>");
    })();
});
//# sourceMappingURL=script.js.map