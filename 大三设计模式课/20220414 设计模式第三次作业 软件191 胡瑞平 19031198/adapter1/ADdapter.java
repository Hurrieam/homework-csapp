package adapter1;

//类适配器，通过继承待适配类完成工作。
public class ADdapter  extends ThreeOutlet implements TwoOutlet {

	//通过适配器，采用类适配器的方式将三孔插座适配为二孔。
    private String ew = "多一根地线";	// 私有内置地线
    //实现两线的信号输入接口。
	public void power(String positive, String negative) {
		//实现两线信号与link方法的适配 。使用三孔插座的实际方法。
		this.link(positive, negative, ew);		
	}

	public void shutDown() {
		System.out.println("电源适配器关闭，停止工作");
		
	}

}
