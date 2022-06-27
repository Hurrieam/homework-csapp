import java.util.ArrayList;
import java.util.List;

public class StoryComposite implements StoryComponent {

    private List<StoryComponent> componentList = new ArrayList<>();

    int cnt = 1;

    @Override
    public void tellStory() {
        for (StoryComponent s : componentList) {
            s.tellStory();
            if (s.getClass().getName().contains("MonkLeaf")) {
                if(cnt++ == 3){
                    break;
                }
                tellStory();
            }
        }
    }

    public void add(StoryComponent component) {
        componentList.add(component);
    }

    public void remove(StoryComponent component) {
        componentList.remove(component);
    }

    public List<StoryComponent> getChild() {
        return componentList;
    }
}
