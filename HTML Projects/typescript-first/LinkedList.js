var LinkedListNode = /** @class */ (function () {
    function LinkedListNode(val, next) {
        this.val = val;
        this.next = next;
    }
    return LinkedListNode;
}());
var a = new LinkedListNode(2, null);
var b = new LinkedListNode(3, null);
var c = new LinkedListNode(4, null);
a.next = b;
b.next = c;
var d = a;
while (d != null) {
    console.log(d.val);
    d = d.next;
}
console.log(a.val);
