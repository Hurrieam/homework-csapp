package adapter1;

//电风扇设计时采用的是二孔插座。
public class Fanner {
	//客户要用的二孔插座
    private TwoOutlet outlet;

    public void run() {
        //启动电源
    	outlet.power("+", "-");
        //
    	System.out.println("获得动力");
        System.out.println("风扇运转");
        //关闭电源
        //
        outlet.shutDown();
        System.out.println("关闭电力，风扇停止运转");
    }

   
    public void setOutlet(TwoOutlet outlet) {
        this.outlet = outlet;
    }
    
    //测试一下使用适配器的方式。
    public static void main(String[] args) {
        Fanner fanner = new Fanner();
        //风扇在初始化而空插座时，实际使用的是类适配器的对象。
        //有了电风扇，需要给电风扇供电，才能运行。
        TwoOutlet addapter = new ADdapter();
        fanner.setOutlet(addapter);
        //启动电风扇     
        fanner.run();
    }
}
