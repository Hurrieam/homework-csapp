const outputElem:HTMLElement = <HTMLElement>document.getElementsByClassName("output")[0];

// 手机产品
interface IPhoneProduct{
    powerOn():void; // 开机
    shutdown():void; // 关机
    callUp():void; // 打电话
    sendSms():void; // 发邮件
}

// 路由器产品
interface IRouterProduct {
    powerOn():void; // 开机
    shutdown():void; // 关机
    openWifi():void; // 打开Wi-Fi
    setting():void; // 设置
}

// 华为手机实现类
class HuaweiPhone implements IPhoneProduct{
    callUp(): void {
        outputElem.innerHTML += "华为手机打电话<br>";
    }

    powerOn(): void {
        outputElem.innerHTML += "开启华为手机<br>";
    }

    sendSms(): void {
        outputElem.innerHTML += "华为手机发短信<br>";
    }

    shutdown(): void {
        outputElem.innerHTML += "关闭华为手机<br>";
    }

}

// 华为路由器实现类
class HuaweiRouter implements IRouterProduct{
    openWifi(): void {
        outputElem.innerHTML += "打开华为Wi-Fi<br>";
    }

    powerOn(): void {
        outputElem.innerHTML += "开启华为路由器<br>";
    }

    setting(): void {
        outputElem.innerHTML += "设置华为路由器<br>";
    }

    shutdown(): void {
        outputElem.innerHTML += "关闭华为路由器<br>";
    }

}

// 产品工厂接口
interface IProductFactory{
    phoneProduct():IPhoneProduct; // 生产手机
    routerProduct():IRouterProduct; // 生产路由器
}

class HuaweiFactory implements IProductFactory{
    phoneProduct(): IPhoneProduct {
        return new HuaweiPhone();
    }

    routerProduct(): IRouterProduct {
        return new HuaweiRouter();
    }

}

// 小米手机实现类
class XiaomiPhone implements IPhoneProduct {
    callUp(): void {
        outputElem.innerHTML += "小米手机打电话<br>";
    }

    powerOn(): void {
        outputElem.innerHTML += "开启小米手机<br>";
    }

    sendSms(): void {
        outputElem.innerHTML += "小米手机发短信<br>";
    }

    shutdown(): void {
        outputElem.innerHTML += "关闭小米手机<br>";
    }
}

// 小米路由器实现类
class XiaomiRouter implements IRouterProduct {
    openWifi(): void {
        outputElem.innerHTML += "打开小米Wi-Fi<br>";
    }

    powerOn(): void {
        outputElem.innerHTML += "开启小米路由器<br>";
    }

    setting(): void {
        outputElem.innerHTML += "设置小米路由器<br>";
    }

    shutdown(): void {
        outputElem.innerHTML += "关闭小米路由器<br>";
    }
}

class XiaomiFactory implements IProductFactory{
    phoneProduct(): IPhoneProduct {
        return new XiaomiPhone();
    }

    routerProduct(): IRouterProduct {
        return new XiaomiRouter();
    }

}

function ClientMain():void{
    const xiaomiFactory:IProductFactory = new XiaomiFactory(); // 创建小米工厂
    const xiaomiPhone:IPhoneProduct = xiaomiFactory.phoneProduct(); // 生产小米手机
    xiaomiPhone.powerOn();
    xiaomiPhone.sendSms();
    const xiaomiRouter:IRouterProduct = xiaomiFactory.routerProduct(); // 生产小米路由器
    xiaomiRouter.openWifi();
    xiaomiRouter.setting();

    const huaweiFactory:IProductFactory = new HuaweiFactory(); // 创建华为工厂
    const huaweiPhone:IPhoneProduct = huaweiFactory.phoneProduct(); // 生产华为手机
    huaweiPhone.powerOn();
    huaweiPhone.sendSms();
    const huaweiRouter:IRouterProduct = huaweiFactory.routerProduct(); // 生产华为路由器
    huaweiRouter.openWifi();
    huaweiRouter.setting();
}
ClientMain();

// 抽象工厂模式 — 20220419 设计模式第四次作业 软件191 胡瑞平 19031198