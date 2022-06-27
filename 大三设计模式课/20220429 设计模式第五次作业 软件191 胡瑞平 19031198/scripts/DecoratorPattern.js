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
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.show = function () {
        outputElem.innerHTML += "装扮的" + this.name + "<br>";
    };
    return Person;
}());
var Finery = /** @class */ (function (_super) {
    __extends(Finery, _super);
    function Finery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Finery.prototype.decorate = function (component) {
        this.component = component;
    };
    Finery.prototype.show = function () {
        if (this.component != null) {
            this.component.show();
        }
    };
    return Finery;
}(Person));
var TShirts = /** @class */ (function (_super) {
    __extends(TShirts, _super);
    function TShirts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TShirts.prototype.show = function () {
        outputElem.innerHTML += "大T恤<br>";
        _super.prototype.show.call(this);
    };
    return TShirts;
}(Finery));
var BigTrousers = /** @class */ (function (_super) {
    __extends(BigTrousers, _super);
    function BigTrousers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BigTrousers.prototype.show = function () {
        outputElem.innerHTML += "垮裤<br>";
        _super.prototype.show.call(this);
    };
    return BigTrousers;
}(Finery));
var Sneakers = /** @class */ (function (_super) {
    __extends(Sneakers, _super);
    function Sneakers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sneakers.prototype.show = function () {
        outputElem.innerHTML += "破球鞋<br>";
        _super.prototype.show.call(this);
    };
    return Sneakers;
}(Finery));
var Suit = /** @class */ (function (_super) {
    __extends(Suit, _super);
    function Suit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Suit.prototype.show = function () {
        outputElem.innerHTML += "西装<br>";
        _super.prototype.show.call(this);
    };
    return Suit;
}(Finery));
var Tie = /** @class */ (function (_super) {
    __extends(Tie, _super);
    function Tie() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tie.prototype.show = function () {
        outputElem.innerHTML += "领带<br>";
        _super.prototype.show.call(this);
    };
    return Tie;
}(Finery));
var LeatherShoes = /** @class */ (function (_super) {
    __extends(LeatherShoes, _super);
    function LeatherShoes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LeatherShoes.prototype.show = function () {
        outputElem.innerHTML += "皮鞋<br>";
        _super.prototype.show.call(this);
    };
    return LeatherShoes;
}(Finery));
function main() {
    var xc = new Person("小菜");
    outputElem.innerHTML += "第一种装扮<br>";
    var pqx = new Sneakers("破球鞋");
    var kk = new BigTrousers("垮裤");
    var dtx = new TShirts("大T恤");
    pqx.decorate(xc);
    kk.decorate(pqx);
    dtx.decorate(kk);
    dtx.show();
    outputElem.innerHTML += "第二种装扮<br>";
    var px = new LeatherShoes("皮鞋");
    var ld = new Tie("领带");
    var xz = new Suit("西装");
    px.decorate(xc);
    ld.decorate(px);
    xz.decorate(ld);
    xz.show();
    outputElem.innerHTML += "第三种装扮<br>";
    var pqx2 = new Sneakers("破球鞋");
    var px2 = new LeatherShoes("皮鞋");
    var kk2 = new BigTrousers("垮裤");
    var ld2 = new Tie("领带");
    pqx2.decorate(xc);
    px2.decorate(pqx);
    kk2.decorate(px2);
    ld2.decorate(kk2);
    ld2.show();
}
main();
// 20220429 设计模式第五次作业 软件191 胡瑞平 19031198
//# sourceMappingURL=DecoratorPattern.js.map