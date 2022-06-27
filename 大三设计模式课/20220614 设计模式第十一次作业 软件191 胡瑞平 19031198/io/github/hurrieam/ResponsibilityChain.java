package io.github.hurrieam;

import java.util.ArrayList;
import java.util.List;

public class ResponsibilityChain {

    private final List<Responsibility> responsibilityList = new ArrayList<>();

    private Integer index = 0;

    public void process(Request request) {
        if (this.index < responsibilityList.size()) {
            this.responsibilityList.get(index++).process(request, this);
        }
    }

    /**
     * 加入链中
     */
    public void register(Responsibility responsibility) {
        this.responsibilityList.add(responsibility);
    }
}
