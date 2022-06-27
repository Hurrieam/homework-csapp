package io.github.hurrieam;

public class CloseRefrigerator implements Responsibility {
    @Override
    public void process(Request request, ResponsibilityChain chain) {
        System.out.println("关冰箱门");
        chain.process(request);
    }
}
