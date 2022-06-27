interface Operations {
    numberA: number;
    numberB: number;

    getNumberA(): number;
    setNumberA(num: number): void;

    getNumberB(): number;
    setNumberB(num: number): void;

    getResult(): number;
}

abstract class Operation implements Operations {
    numberA: number = 0;
    numberB: number = 0;

    getNumberA(): number {
        return this.numberA;
    }
    setNumberA(num: number): void {
        this.numberA = num;
    }

    getNumberB(): number {
        return this.numberB;
    }
    setNumberB(num: number): void {
        this.numberB = num;
    }

    getResult(): number {
        return 0;
    }
}

class Add extends Operation {
    override getResult(): number {
        return this.numberA + this.numberB;
    }
}

class Sub extends Operation {
    override getResult(): number {
        return this.numberA - this.numberB;
    }
}

class Mul extends Operation {
    override getResult(): number {
        return this.numberA * this.numberB;
    }
}

class Div extends Operation {
    override getResult(): number {
        if (this.numberB == 0) {
            throw new Error("DividedByZeroError");
        }
        return this.numberA / this.numberB;
    }
}

class OperationFactory {
    static createOperation(operator: string): Operation {
        var oper: Operation = new Add();

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
    }
}

var numberAElem: HTMLInputElement = <HTMLInputElement>document.getElementsByClassName("number")[0];
var numberBElem: HTMLInputElement = <HTMLInputElement>document.getElementsByClassName("number")[1];
var operatorElem: HTMLSelectElement = <HTMLSelectElement>document.getElementsByClassName("operator")[0];
var resultElem: HTMLElement = <HTMLElement>document.getElementsByClassName("result")[0];

numberAElem.addEventListener("input", getResult);
numberBElem.addEventListener("input", getResult);
operatorElem.addEventListener("change", getResult);

function getResult() {
    var oper: Operation = OperationFactory.createOperation(operatorElem.value);
    oper.numberA = parseInt(numberAElem.value);
    oper.numberB = parseInt(numberBElem.value);

    if (oper.numberB == 0 && operatorElem.value == "/") {
        resultElem.innerHTML = "不能除以零！";
    } else {
        resultElem.innerHTML = oper.getResult().toString();
    }
}

// 简单工厂设计模式 — 设计模式第二次作业 软件191 胡瑞平 19031198