package io.github.hurrieam;

public class PutElephantIn implements Responsibility {
    @Override
    public void process(Request request, ResponsibilityChain chain) {
        System.out.println("将大象放入");
        chain.process(request);
    }
}
