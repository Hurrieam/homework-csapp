"use strict";
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
var outputElem = document.getElementsByClassName("output")[0];
// 篮球运动员
var Player = /** @class */ (function () {
    function Player(name) {
        this.name = name;
    }
    return Player;
}());
// 前锋
var Forward = /** @class */ (function (_super) {
    __extends(Forward, _super);
    function Forward() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Forward.prototype.attack = function () {
        outputElem.innerHTML += "前锋" + this.name + "进攻<br>";
    };
    Forward.prototype.defense = function () {
        outputElem.innerHTML += "前锋" + this.name + "防守<br>";
    };
    return Forward;
}(Player));
// 中锋
var Center = /** @class */ (function (_super) {
    __extends(Center, _super);
    function Center() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Center.prototype.attack = function () {
        outputElem.innerHTML += "中锋" + this.name + "进攻<br>";
    };
    Center.prototype.defense = function () {
        outputElem.innerHTML += "中锋" + this.name + "防守<br>";
    };
    return Center;
}(Player));
// 后卫
var Guards = /** @class */ (function (_super) {
    __extends(Guards, _super);
    function Guards() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Guards.prototype.attack = function () {
        outputElem.innerHTML += "后卫" + this.name + "进攻<br>";
    };
    Guards.prototype.defense = function () {
        outputElem.innerHTML += "后卫" + this.name + "防守<br>";
    };
    return Guards;
}(Player));
// 外籍中锋
var ForeignCenter = /** @class */ (function () {
    function ForeignCenter(name) {
        this.name = name;
    }
    ForeignCenter.prototype.进攻 = function () {
        outputElem.innerHTML += "外籍中锋" + this.name + "进攻<br>";
    };
    ForeignCenter.prototype.防守 = function () {
        outputElem.innerHTML += "外籍中锋" + this.name + "进攻<br>";
    };
    return ForeignCenter;
}());
// 翻译者
var Translator = /** @class */ (function (_super) {
    __extends(Translator, _super);
    function Translator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fc = new ForeignCenter("ForeignCenter");
        return _this;
    }
    Translator.prototype.attack = function () {
        this.fc.进攻();
    };
    Translator.prototype.defense = function () {
        this.fc.防守();
    };
    return Translator;
}(Player));
// 适配器模式
function programmeMain() {
    var b = new Forward("巴蒂尔");
    b.attack();
    var m = new Guards("麦克格雷迪");
    m.attack();
    // var ym: Player = new Center("姚明");
    var ym = new Translator("姚明");
    ym.attack();
    ym.defense();
}
programmeMain();
// 20220414 设计模式第三次作业 软件191 胡瑞平 19031198
