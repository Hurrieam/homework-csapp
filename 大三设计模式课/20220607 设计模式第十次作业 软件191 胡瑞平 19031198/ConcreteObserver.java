public class ConcreteObserver implements Observer {
    @Override
    public void update(Object obj) {
        System.out.println("收到了新产品消息："+obj);
    }
}
