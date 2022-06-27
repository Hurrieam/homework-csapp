const outputElem:HTMLElement = <HTMLElement>document.getElementsByClassName("output")[0];

class Person{
    public name:string;

    public constructor(name:string) {
        this.name = name;
    }

    public show():void{
        outputElem.innerHTML += "装扮的"+this.name+"<br>";
    }
}

class Finery extends Person{
    protected component:Person;

    public decorate(component:Person):void{
        this.component = component;
    }

    public override show():void{
        if(this.component != null){
            this.component.show();
        }
    }
}

class TShirts extends Finery{
    public override show():void{
        outputElem.innerHTML += "大T恤<br>";
        super.show();
    }
}

class BigTrousers extends Finery{
    public override show():void{
        outputElem.innerHTML += "垮裤<br>";
        super.show();
    }
}

class Sneakers extends Finery{
    public override show():void{
        outputElem.innerHTML += "破球鞋<br>";
        super.show();
    }
}

class Suit extends Finery{
    public override show():void{
        outputElem.innerHTML += "西装<br>";
        super.show();
    }
}

class Tie extends Finery{
    public override show():void{
        outputElem.innerHTML += "领带<br>";
        super.show();
    }
}

class LeatherShoes extends Finery{
    public override show():void{
        outputElem.innerHTML += "皮鞋<br>";
        super.show();
    }
}

function main(){
    const xc:Person = new Person("小菜");

    outputElem.innerHTML += "第一种装扮<br>";

    const pqx:Sneakers = new Sneakers("破球鞋");
    const kk:BigTrousers = new BigTrousers("垮裤");
    const dtx:TShirts = new TShirts("大T恤");

    pqx.decorate(xc);
    kk.decorate(pqx);
    dtx.decorate(kk);
    dtx.show();

    outputElem.innerHTML += "第二种装扮<br>";

    const px:LeatherShoes = new LeatherShoes("皮鞋");
    const ld:Tie = new Tie("领带");
    const xz:Suit = new Suit("西装");

    px.decorate(xc);
    ld.decorate(px);
    xz.decorate(ld);
    xz.show();

    outputElem.innerHTML += "第三种装扮<br>";
    const pqx2:Sneakers = new Sneakers("破球鞋");
    const px2:LeatherShoes = new LeatherShoes("皮鞋");
    const kk2:BigTrousers = new BigTrousers("垮裤");
    const ld2:Tie = new Tie("领带");

    pqx2.decorate(xc);
    px2.decorate(pqx);
    kk2.decorate(px2);
    ld2.decorate(kk2);

    ld2.show();
}
main();

// 20220429 设计模式第五次作业 软件191 胡瑞平 19031198