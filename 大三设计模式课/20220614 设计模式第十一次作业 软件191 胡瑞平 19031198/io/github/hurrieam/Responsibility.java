package io.github.hurrieam;

public interface Responsibility {
    void process(Request request, ResponsibilityChain chain);
}
