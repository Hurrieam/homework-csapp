package adapter1;
/** 三孔插座 
     *  现有插座是3孔的。电风扇没法使用。
     *  通过link方法提供电流。link方法比power方法多了一个地线。但都是提供电力的方法，功能本质一样。
     * */
public class ThreeOutlet {
    
    public void link(String positive, String negative, String earthWire) {
        System.out.println(
        		"多一根地线，保证安全用电："
        		+ positive
        		+ negative
        		+ earthWire);        				
    }
    
    
}
