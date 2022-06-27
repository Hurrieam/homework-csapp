const outputElem:HTMLElement = <HTMLElement>document.getElementsByClassName("output")[0];

interface IStart{
    start():void;
}

class Cpu implements IStart{
    start(): void {
        outputElem.innerHTML += "启动CPU<br>";
    }
}

class Memory implements IStart{
    start(): void {
        outputElem.innerHTML += "加载内存<br>";
    }
}

class ComputerScreen implements IStart{
    start(): void {
        outputElem.innerHTML += "点亮屏幕<br>";
    }
}

class Computer implements IStart{
    cpu:Cpu = new Cpu();
    memory:Memory = new Memory();
    screen:ComputerScreen = new ComputerScreen();

    start(): void {
        this.cpu.start();
        this.memory.start();
        this.screen.start();
    }
}

function main(){
    const computer:Computer = new Computer();
    computer.start();
}
main();

// 20220511 设计模式第六次作业 软件191 胡瑞平 19031198