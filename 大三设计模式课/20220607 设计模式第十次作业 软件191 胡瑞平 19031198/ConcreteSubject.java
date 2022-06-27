import java.util.ArrayList;
import java.util.List;

public class ConcreteSubject implements Subject {

    private List<Observer> list = new ArrayList<>();
    private String msg;

    @Override
    public void attach(Observer observer) {
        list.add(observer);
    }

    @Override
    public void detach(Observer observer) {
        list.remove(observer);
    }

    @Override
    public void notifyObservers() {
        for (Observer o : list) {
            o.update(msg);
        }
    }

    public void pushMsg(String msg){
        this.msg = msg;
        System.out.println("发个新产品：" + msg);
        notifyObservers();
    }
}
