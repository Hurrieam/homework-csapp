package BridgePattern.io.github.hurrieam;

abstract class Shape{
    protected Color color;

    public Shape(Color color){
        this.color = color;
    }

    abstract void draw();
}

interface Color{
    void coloring();
}

class Circle extends Shape{

    public Circle(Color color) {
        super(color);
    }

    @Override
    void draw() {
        this.color.coloring();
        System.out.println("圆形");
    }
}

class Rectangle extends Shape{

    public Rectangle(Color color) {
        super(color);
    }

    @Override
    void draw() {
        this.color.coloring();
        System.out.println("矩形");
    }
}

class Triangle extends Shape{

    public Triangle(Color color) {
        super(color);
    }

    @Override
    void draw() {
        this.color.coloring();
        System.out.println("三角形");
    }
}

class Red implements Color{

    @Override
    public void coloring() {
        System.out.println("红色=>");
    }
}

class Yellow implements Color{

    @Override
    public void coloring() {
        System.out.println("黄色=>");
    }
}

class Blue implements Color{

    @Override
    public void coloring() {
        System.out.println("蓝色=>");
    }
}

public class BridgePattern {
    public static void main(String[] args) {

        // 红色圆
        Shape redCircle = new Circle(new Red());
        redCircle.draw();
        System.out.println();

        // 黄色矩形
        Shape yellowRectangle = new Rectangle(new Yellow());
        yellowRectangle.draw();
        System.out.println();

        // 蓝色三角形
        Shape blueTriangle = new Triangle(new Blue());
        blueTriangle.draw();
    }
}

/* 20220520 设计模式第七次作业 软件191 胡瑞平 19031198 */