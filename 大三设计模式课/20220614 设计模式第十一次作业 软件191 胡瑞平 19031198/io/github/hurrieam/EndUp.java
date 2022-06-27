package io.github.hurrieam;

public class EndUp implements Responsibility {
    @Override
    public void process(Request request, ResponsibilityChain chain) {
        System.out.println("结束");
        chain.process(request);
    }
}
