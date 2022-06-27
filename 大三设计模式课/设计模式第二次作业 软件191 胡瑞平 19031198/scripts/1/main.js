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
var Operation = /** @class */ (function () {
    function Operation() {
        this.numberA = 0;
        this.numberB = 0;
    }
    Operation.prototype.getNumberA = function () {
        return this.numberA;
    };
    Operation.prototype.setNumberA = function (num) {
        this.numberA = num;
    };
    Operation.prototype.getNumberB = function () {
        return this.numberB;
    };
    Operation.prototype.setNumberB = function (num) {
        this.numberB = num;
    };
    Operation.prototype.getResult = function () {
        return 0;
    };
    return Operation;
}());
var Add = /** @class */ (function (_super) {
    __extends(Add, _super);
    function Add() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Add.prototype.getResult = function () {
        return this.numberA + this.numberB;
    };
    return Add;
}(Operation));
var Sub = /** @class */ (function (_super) {
    __extends(Sub, _super);
    function Sub() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sub.prototype.getResult = function () {
        return this.numberA - this.numberB;
    };
    return Sub;
}(Operation));
var Mul = /** @class */ (function (_super) {
    __extends(Mul, _super);
    function Mul() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mul.prototype.getResult = function () {
        return this.numberA * this.numberB;
    };
    return Mul;
}(Operation));
var Div = /** @class */ (function (_super) {
    __extends(Div, _super);
    function Div() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Div.prototype.getResult = function () {
        if (this.numberB == 0) {
            throw new Error("DividedByZeroError");
        }
        return this.numberA / this.numberB;
    };
    return Div;
}(Operation));
var OperationFactory = /** @class */ (function () {
    function OperationFactory() {
    }
    OperationFactory.createOperation = function (operator) {
        var oper = new Add();
        switch (operator) {
            case "+":
                oper = new Add();
                break;
            case "-":
                oper = new Sub();
                break;
            case "*":
                oper = new Mul();
                break;
            case "/":
                oper = new Div();
                break;
            default:
                break;
        }
        return oper;
    };
    return OperationFactory;
}());
var numberAElem = document.getElementsByClassName("number")[0];
var numberBElem = document.getElementsByClassName("number")[1];
var operatorElem = document.getElementsByClassName("operator")[0];
var resultElem = document.getElementsByClassName("result")[0];
numberAElem.addEventListener("input", getResult);
numberBElem.addEventListener("input", getResult);
operatorElem.addEventListener("change", getResult);
function getResult() {
    var oper = OperationFactory.createOperation(operatorElem.value);
    oper.numberA = parseInt(numberAElem.value);
    oper.numberB = parseInt(numberBElem.value);
    if (oper.numberB == 0 && operatorElem.value == "/") {
        resultElem.innerHTML = "不能除以零！";
    }
    else {
        resultElem.innerHTML = oper.getResult().toString();
    }
}
// 简单工厂设计模式 — 设计模式第二次作业 软件191 胡瑞平 19031198
