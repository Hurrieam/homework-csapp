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
var Fruit = /** @class */ (function () {
    function Fruit(name) {
        this.name = name;
    }
    Fruit.prototype.callName = function () {
        outputElem.innerHTML += this.name + "<br>";
    };
    return Fruit;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Apple;
}(Fruit));
var Banana = /** @class */ (function (_super) {
    __extends(Banana, _super);
    function Banana() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Banana;
}(Fruit));
function inheritMain() {
    var apple = new Apple("苹果");
    var banana = new Banana("香蕉");
    apple.callName();
    banana.callName();
}
inheritMain();
// call apply bind: https://www.runoob.com/w3cnote/js-call-apply-bind.html
// 继承 — 20220421 js第五次作业 软件191 胡瑞平 19031198
//# sourceMappingURL=inherit.js.map