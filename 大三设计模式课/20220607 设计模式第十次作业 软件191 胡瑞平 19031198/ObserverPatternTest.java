public class ObserverPatternTest {
    public static void main(String[] args) {
        ConcreteSubject XiaoMi = new ConcreteSubject();
        XiaoMi.attach(new ConcreteObserver());

        XiaoMi.pushMsg("小米手机");
        XiaoMi.pushMsg("小米电脑");
        XiaoMi.pushMsg("小米平板");
    }
}
