function call(v: vehicle): string {
    return v.get_msg();
}

abstract class vehicle {
    private msg: string;
    constructor(msg: string) {
        this.msg = msg;
    }
    get_msg() {
        return this.msg;
    }
}

class motor extends vehicle {
    constructor(msg: string) {
        super(msg);
    }
}

class car extends vehicle {
    constructor(msg: string) {
        super(msg);
    }
}

let m: vehicle = new motor("摩托");
let c: vehicle = new car("汽车");

console.log(call(m));
console.log(call(c));