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
var ThreeOutlet = /** @class */ (function () {
    function ThreeOutlet() {
    }
    ThreeOutlet.prototype.link = function (positive, negative, earthWire) {
        outputElem.innerHTML += "多一根地线 保证安全用电" + positive + negative + earthWire + "<br>";
    };
    return ThreeOutlet;
}());
var Fanner = /** @class */ (function () {
    function Fanner(outlet) {
        this.outlet = outlet;
    }
    Fanner.prototype.run = function () {
        this.outlet.powerOn("+", "-");
        outputElem.innerHTML += "获得动力 风扇运转<br>";
        this.outlet.shutDown();
        outputElem.innerHTML += "停止运转<br>";
    };
    return Fanner;
}());
var Adapter = /** @class */ (function (_super) {
    __extends(Adapter, _super);
    function Adapter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ew = "多一根地线";
        return _this;
    }
    Adapter.prototype.powerOn = function (positive, negative) {
        this.link(positive, negative, this.ew);
    };
    Adapter.prototype.shutDown = function () {
        outputElem.innerHTML += "停止运转<br>";
    };
    return Adapter;
}(ThreeOutlet));
var Adapter2 = /** @class */ (function () {
    function Adapter2(outlet) {
        this.ew = "多一根地线";
        this.threeOutlet = outlet;
    }
    Adapter2.prototype.powerOn = function (positive, negative) {
        this.threeOutlet.link(positive, negative, this.ew);
    };
    Adapter2.prototype.shutDown = function () {
        outputElem.innerHTML += "停止运转<br>";
    };
    return Adapter2;
}());
function adapterMain() {
    var adapter = new Adapter();
    var fanner = new Fanner(adapter);
    fanner.run();
}
adapterMain();
// 20220414 设计模式第三次作业 软件191 胡瑞平 19031198
