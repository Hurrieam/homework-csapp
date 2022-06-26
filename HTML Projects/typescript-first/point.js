var Point2d = /** @class */ (function () {
    function Point2d(x, y) {
        this.x = x;
        this.y = y;
        this.z = 0;
    }
    return Point2d;
}());
var Point3d = /** @class */ (function () {
    function Point3d(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    return Point3d;
}());
function distance(pnt_1, pnt_2) {
    return Math.sqrt(Math.pow(pnt_2.x - pnt_1.x, 2) + Math.pow(pnt_2.y - pnt_1.y, 2) + Math.pow(pnt_2.z - pnt_1.z, 2));
}
var p_1 = new Point2d(0, 0);
var p_2 = new Point3d(1, 1, 1);
console.log(distance(p_1, p_2));
