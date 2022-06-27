package adapter1;

//客户遵循的使用规范是满足而孔输出的插座。抽象成接口如下。
public interface TwoOutlet {
    /** 启动 */
    void power(String positive, String negative);

    /** 关闭 */
    void shutDown();
}
