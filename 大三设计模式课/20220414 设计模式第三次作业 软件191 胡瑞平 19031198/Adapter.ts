var outputElem: HTMLElement = <HTMLElement>document.getElementsByClassName("output")[0];

interface TwoOutlet {
    powerOn(positive: string, negative: string): void; // 启动
    shutDown(): void; // 关闭
}

class ThreeOutlet {
    link(positive: string, negative: string, earthWire: string): void {
        outputElem.innerHTML += "多一根地线 保证安全用电" + positive + negative + earthWire + "<br>";
    }
}

class Fanner {
    private outlet: TwoOutlet;
    public constructor(outlet: TwoOutlet) {
        this.outlet = outlet;
    }

    public run(): void {
        this.outlet.powerOn("+", "-");
        outputElem.innerHTML += "获得动力 风扇运转<br>";
        this.outlet.shutDown();
        outputElem.innerHTML += "停止运转<br>";
    }
}

class Adapter extends ThreeOutlet implements TwoOutlet {
    private ew: string = "多一根地线";

    powerOn(positive: string, negative: string): void {
        this.link(positive, negative, this.ew);
    }
    shutDown(): void {
        outputElem.innerHTML += "停止运转<br>";
    }
}

class Adapter2 implements TwoOutlet {
    private threeOutlet: ThreeOutlet;
    private ew: string = "多一根地线";

    public constructor(outlet: ThreeOutlet) {
        this.threeOutlet = outlet;
    }
    powerOn(positive: string, negative: string): void {
        this.threeOutlet.link(positive, negative, this.ew);
    }
    shutDown(): void {
        outputElem.innerHTML += "停止运转<br>";
    }
}

function adapterMain(): void {
    var adapter: TwoOutlet = new Adapter();
    var fanner: Fanner = new Fanner(adapter);
    fanner.run();
}
adapterMain();

// 20220414 设计模式第三次作业 软件191 胡瑞平 19031198