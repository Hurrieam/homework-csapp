package io.github.hurrieam;

public class ChainOfResponsibilityPatternTest {
    public static void main(String[] args) {
        ResponsibilityChain chain = new ResponsibilityChain();
        chain.register(new OpenRefrigerator());
        chain.register(new PutElephantIn());
        chain.register(new CloseRefrigerator());
        chain.register(new EndUp());
        chain.process(new Request() {
        });
    }
}
