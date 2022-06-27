var outputElem: HTMLElement = <HTMLElement>document.getElementsByClassName("output")[0];

// 篮球运动员
abstract class Player {
    protected name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public abstract attack(): void;
    public abstract defense(): void;
}

// 前锋
class Forward extends Player {
    public override attack(): void {
        outputElem.innerHTML += "前锋" + this.name + "进攻<br>";
    }
    public override defense(): void {
        outputElem.innerHTML += "前锋" + this.name + "防守<br>";
    }
}

// 中锋
class Center extends Player {
    public override attack(): void {
        outputElem.innerHTML += "中锋" + this.name + "进攻<br>";
    }
    public override defense(): void {
        outputElem.innerHTML += "中锋" + this.name + "防守<br>";
    }
}

// 后卫
class Guards extends Player {
    public override attack(): void {
        outputElem.innerHTML += "后卫" + this.name + "进攻<br>";
    }
    public override defense(): void {
        outputElem.innerHTML += "后卫" + this.name + "防守<br>";
    }
}

// 外籍中锋
class ForeignCenter {
    private name: string;
    public constructor(name: string) {
        this.name = name;
    }

    public 进攻(): void {
        outputElem.innerHTML += "外籍中锋" + this.name + "进攻<br>";
    }

    public 防守(): void {
        outputElem.innerHTML += "外籍中锋" + this.name + "进攻<br>";
    }
}

// 翻译者
class Translator extends Player {
    private fc: ForeignCenter = new ForeignCenter("ForeignCenter");
    public attack(): void {
        this.fc.进攻();
    }
    public defense(): void {
        this.fc.防守();
    }

}

// 适配器模式
function programmeMain() {
    var b: Player = new Forward("巴蒂尔");
    b.attack();

    var m: Player = new Guards("麦克格雷迪");
    m.attack();

    // var ym: Player = new Center("姚明");
    var ym: Player = new Translator("姚明");
    ym.attack();
    ym.defense();
}
programmeMain();

// 20220414 设计模式第三次作业 软件191 胡瑞平 19031198