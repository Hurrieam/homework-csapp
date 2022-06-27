public interface Subject {

    /** 添加一个新的观察者 */
    void attach(Observer observer);

    /** 移除一个已经登记过的观察者 */
    void detach(Observer observer);

    /** 通知所有已经登记过的观察者 */
    void notifyObservers();
}

