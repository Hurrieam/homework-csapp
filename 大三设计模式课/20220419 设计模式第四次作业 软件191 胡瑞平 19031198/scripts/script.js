var outputElem = document.getElementsByClassName("output")[0];
// 华为手机实现类
var HuaweiPhone = /** @class */ (function () {
    function HuaweiPhone() {
    }
    HuaweiPhone.prototype.callUp = function () {
        outputElem.innerHTML += "华为手机打电话<br>";
    };
    HuaweiPhone.prototype.powerOn = function () {
        outputElem.innerHTML += "开启华为手机<br>";
    };
    HuaweiPhone.prototype.sendSms = function () {
        outputElem.innerHTML += "华为手机发短信<br>";
    };
    HuaweiPhone.prototype.shutdown = function () {
        outputElem.innerHTML += "关闭华为手机<br>";
    };
    return HuaweiPhone;
}());
// 华为路由器实现类
var HuaweiRouter = /** @class */ (function () {
    function HuaweiRouter() {
    }
    HuaweiRouter.prototype.openWifi = function () {
        outputElem.innerHTML += "打开华为Wi-Fi<br>";
    };
    HuaweiRouter.prototype.powerOn = function () {
        outputElem.innerHTML += "开启华为路由器<br>";
    };
    HuaweiRouter.prototype.setting = function () {
        outputElem.innerHTML += "设置华为路由器<br>";
    };
    HuaweiRouter.prototype.shutdown = function () {
        outputElem.innerHTML += "关闭华为路由器<br>";
    };
    return HuaweiRouter;
}());
var HuaweiFactory = /** @class */ (function () {
    function HuaweiFactory() {
    }
    HuaweiFactory.prototype.phoneProduct = function () {
        return new HuaweiPhone();
    };
    HuaweiFactory.prototype.routerProduct = function () {
        return new HuaweiRouter();
    };
    return HuaweiFactory;
}());
// 小米手机实现类
var XiaomiPhone = /** @class */ (function () {
    function XiaomiPhone() {
    }
    XiaomiPhone.prototype.callUp = function () {
        outputElem.innerHTML += "小米手机打电话<br>";
    };
    XiaomiPhone.prototype.powerOn = function () {
        outputElem.innerHTML += "开启小米手机<br>";
    };
    XiaomiPhone.prototype.sendSms = function () {
        outputElem.innerHTML += "小米手机发短信<br>";
    };
    XiaomiPhone.prototype.shutdown = function () {
        outputElem.innerHTML += "关闭小米手机<br>";
    };
    return XiaomiPhone;
}());
// 小米路由器实现类
var XiaomiRouter = /** @class */ (function () {
    function XiaomiRouter() {
    }
    XiaomiRouter.prototype.openWifi = function () {
        outputElem.innerHTML += "打开小米Wi-Fi<br>";
    };
    XiaomiRouter.prototype.powerOn = function () {
        outputElem.innerHTML += "开启小米路由器<br>";
    };
    XiaomiRouter.prototype.setting = function () {
        outputElem.innerHTML += "设置小米路由器<br>";
    };
    XiaomiRouter.prototype.shutdown = function () {
        outputElem.innerHTML += "关闭小米路由器<br>";
    };
    return XiaomiRouter;
}());
var XiaomiFactory = /** @class */ (function () {
    function XiaomiFactory() {
    }
    XiaomiFactory.prototype.phoneProduct = function () {
        return new XiaomiPhone();
    };
    XiaomiFactory.prototype.routerProduct = function () {
        return new XiaomiRouter();
    };
    return XiaomiFactory;
}());
function ClientMain() {
    var xiaomiFactory = new XiaomiFactory(); // 创建小米工厂
    var xiaomiPhone = xiaomiFactory.phoneProduct(); // 生产小米手机
    xiaomiPhone.powerOn();
    xiaomiPhone.sendSms();
    var xiaomiRouter = xiaomiFactory.routerProduct(); // 生产小米路由器
    xiaomiRouter.openWifi();
    xiaomiRouter.setting();
    var huaweiFactory = new HuaweiFactory(); // 创建华为工厂
    var huaweiPhone = huaweiFactory.phoneProduct(); // 生产华为手机
    huaweiPhone.powerOn();
    huaweiPhone.sendSms();
    var huaweiRouter = huaweiFactory.routerProduct(); // 生产华为路由器
    huaweiRouter.openWifi();
    huaweiRouter.setting();
}
ClientMain();
// 抽象工厂模式 — 20220419 设计模式第四次作业 软件191 胡瑞平 19031198
//# sourceMappingURL=script.js.map