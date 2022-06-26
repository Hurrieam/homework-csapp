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
function call(v) {
    return v.get_msg();
}
var vehicle = /** @class */ (function () {
    function vehicle(msg) {
        this.msg = msg;
    }
    vehicle.prototype.get_msg = function () {
        return this.msg;
    };
    return vehicle;
}());
var motor = /** @class */ (function (_super) {
    __extends(motor, _super);
    function motor(msg) {
        return _super.call(this, msg) || this;
    }
    return motor;
}(vehicle));
var car = /** @class */ (function (_super) {
    __extends(car, _super);
    function car(msg) {
        return _super.call(this, msg) || this;
    }
    return car;
}(vehicle));
var m = new motor("摩托");
var c = new car("汽车");
console.log(call(m));
console.log(call(c));
