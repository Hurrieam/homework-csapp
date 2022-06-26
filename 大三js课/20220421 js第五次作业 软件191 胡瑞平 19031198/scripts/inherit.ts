const outputElem:HTMLElement = <HTMLElement>document.getElementsByClassName("output")[0];

interface ICallName{
    callName():void;
}

class Fruit implements ICallName{
    name:string;
    constructor(name:string) {
        this.name = name;
    }
    callName(): void {
        outputElem.innerHTML += this.name + "<br>";
    }

}

class Apple extends Fruit{}

class Banana extends Fruit{}

function inheritMain(){
    const apple:Fruit = new Apple("苹果");
    const banana:Fruit = new Banana("香蕉");
    apple.callName();
    banana.callName();
}
inheritMain();

// call apply bind: https://www.runoob.com/w3cnote/js-call-apply-bind.html
// 继承 — 20220421 js第五次作业 软件191 胡瑞平 19031198