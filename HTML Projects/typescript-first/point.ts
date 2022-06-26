interface IPoint {
    x: number;
    y: number;
    z: number;
}

class Point2d implements IPoint {
    x: number;
    y: number;
    z: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.z = 0;
    }
}

class Point3d implements IPoint {
    x: number;
    y: number;
    z: number;
    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

function distance(pnt_1: IPoint, pnt_2: IPoint): number {
    return Math.sqrt(Math.pow(pnt_2.x - pnt_1.x, 2) + Math.pow(pnt_2.y - pnt_1.y, 2) + Math.pow(pnt_2.z - pnt_1.z, 2));
}

let p_1: Point2d = new Point2d(0, 0);
let p_2: Point3d = new Point3d(1, 1, 1);
console.log(distance(p_1, p_2));