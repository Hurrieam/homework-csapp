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
var Model = /** @class */ (function () {
    function Model() {
    }
    Model.prototype.show = function () {
        console.log("模特展示");
    };
    return Model;
}());
// 装饰类的基类
var Finery = /** @class */ (function (_super) {
    __extends(Finery, _super);
    function Finery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // 初始化模特在构造函数，或者专门的方法中初始化模特
    // 打扮
    Finery.prototype.makeup = function (show) {
        this.model = show;
    };
    // 包装留给Finery子类Short进行
    Finery.prototype.show = function () {
        this.model.show();
    };
    return Finery;
}(Model));
// 短裤
var Shorts = /** @class */ (function (_super) {
    __extends(Shorts, _super);
    function Shorts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // 先展示自己 再展示父类
    Shorts.prototype.show = function () {
        console.log("短裤");
        _super.prototype.show.call(this);
    };
    return Shorts;
}(Finery));
// 长裤
var Pants = /** @class */ (function (_super) {
    __extends(Pants, _super);
    function Pants() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // 先展示自己 再展示父类
    Pants.prototype.show = function () {
        console.log("长裤");
        _super.prototype.show.call(this);
    };
    return Pants;
}(Finery));
// 眼睛
var Sunglasses = /** @class */ (function (_super) {
    __extends(Sunglasses, _super);
    function Sunglasses() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // 先展示自己 再展示父类
    Sunglasses.prototype.show = function () {
        console.log("太阳眼镜");
        _super.prototype.show.call(this);
    };
    return Sunglasses;
}(Finery));
function main() {
    var model = new Model();
    var short1 = new Shorts();
    var pants = new Pants();
    var sunglasses = new Sunglasses();
    short1.makeup(model);
    pants.makeup(short1);
    sunglasses.makeup(pants);
    sunglasses.show();
}
main();
