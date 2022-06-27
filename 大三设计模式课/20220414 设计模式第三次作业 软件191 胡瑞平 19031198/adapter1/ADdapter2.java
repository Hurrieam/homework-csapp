package adapter1;

//对象适配器 ，通过组合待适配类的对象完成适配工作。
public class ADdapter2 implements TwoOutlet {

	
	ThreeOutlet treeOutlet;
	
	void setThreeOutlet(ThreeOutlet outlet){
		this.treeOutlet = outlet;
	}
	
	//通过适配器，采用类适配器的方式将三孔插座适配为二孔。
    private String ew = "多一根地线";	// 私有内置地线
    //实现两线的信号输入接口。
	public void power(String positive, String negative) {
		//实现两线信号与link方法的适配 。使用三孔插座的实际方法。
		this.treeOutlet.link(positive, negative, ew);		
	}

	public void shutDown() {
		System.out.println("电源适配器关闭，停止工作");	
	}

}
