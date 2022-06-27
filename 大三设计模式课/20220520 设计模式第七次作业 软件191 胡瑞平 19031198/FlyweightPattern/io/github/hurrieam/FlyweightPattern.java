package FlyweightPattern.io.github.hurrieam;

import java.util.HashMap;

interface Shape{
    void draw();
}

class Circle implements Shape{

    private final String color;
    private int x, y, radius;

    public void setX(int x) {
        this.x = x;
    }

    public void setY(int y) {
        this.y = y;
    }

    public void setRadius(int radius) {
        this.radius = radius;
    }

    public Circle(String color){
        this.color = color;
    }

    @Override
    public void draw() {
        System.out.printf("Circle: Draw() [Color: %s, x: %d, y: %d, radius: %d]\n",color , x, y, radius);
    }
}

class ShapeFactory{
    public static final HashMap<String, Shape> circleMap = new HashMap<>();

    public static Shape getCircle(String color){
        Circle circle = (Circle)circleMap.get(color);

        if(circle == null){
            circle = new Circle(color);
            circleMap.put(color, circle);
            System.out.printf("Creating circle of color: %s\n", color);
        }

        return circle;
    }
}

public class FlyweightPattern {
    public static final String[] colors = new String[]{"Red", "Green", "Blue", "White", "Black"};

    public static void main(String[] args) {
        for(int i = 0; i < 20; i++){
            Circle circle = (Circle) ShapeFactory.getCircle(getRandomColor());
            circle.setX(getRandomX());
            circle.setY(getRandomY());
            circle.setRadius(100);
            circle.draw();
        }
    }

    private static int getRandomY() {
        return (int)(Math.random()*100);
    }

    private static int getRandomX() {
        return (int)(Math.random()*100);
    }

    private static String getRandomColor() {
        return colors[(int) (Math.random() * colors.length)];
    }
}

/* 20220520 设计模式第七次作业 软件191 胡瑞平 19031198 */