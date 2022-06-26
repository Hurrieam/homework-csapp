class LinkedListNode<T> {
    val: T;
    next: LinkedListNode<T>;

    constructor(val: T, next: LinkedListNode<T>) {
        this.val = val;
        this.next = next;
    }
}

let a: LinkedListNode<number> = new LinkedListNode<number>(2, null);
let b: LinkedListNode<number> = new LinkedListNode<number>(3, null);
let c: LinkedListNode<number> = new LinkedListNode<number>(4, null);

a.next = b;
b.next = c;

let d = a;

while (d != null) {
    console.log(d.val);
    d = d.next;
}

console.log(a.val);