package io.github.hurrieam;

public class OpenRefrigerator implements Responsibility {
    @Override
    public void process(Request request, ResponsibilityChain chain) {
        System.out.println("打开冰箱门");
        chain.process(request);
    }
}
