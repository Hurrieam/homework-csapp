var outputElem = document.getElementsByClassName("output")[0];
var Cpu = /** @class */ (function () {
    function Cpu() {
    }
    Cpu.prototype.start = function () {
        outputElem.innerHTML += "启动CPU<br>";
    };
    return Cpu;
}());
var Memory = /** @class */ (function () {
    function Memory() {
    }
    Memory.prototype.start = function () {
        outputElem.innerHTML += "加载内存<br>";
    };
    return Memory;
}());
var ComputerScreen = /** @class */ (function () {
    function ComputerScreen() {
    }
    ComputerScreen.prototype.start = function () {
        outputElem.innerHTML += "点亮屏幕<br>";
    };
    return ComputerScreen;
}());
var Computer = /** @class */ (function () {
    function Computer() {
        this.cpu = new Cpu();
        this.memory = new Memory();
        this.screen = new ComputerScreen();
    }
    Computer.prototype.start = function () {
        this.cpu.start();
        this.memory.start();
        this.screen.start();
    };
    return Computer;
}());
function main() {
    var computer = new Computer();
    computer.start();
}
main();
// 20220511 设计模式第六次作业 软件191 胡瑞平 19031198
//# sourceMappingURL=script.js.map