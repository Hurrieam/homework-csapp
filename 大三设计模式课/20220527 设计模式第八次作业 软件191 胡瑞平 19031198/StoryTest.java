public class StoryTest {

    public static void main(String[] args) {
        //故事
        StoryComposite story = new StoryComposite();
        //叶子：山、庙、道士
        StoryComponent mountain = new MountainLeaf();
        StoryComponent temple = new TempleLeaf();
        StoryComponent monk = new MonkLeaf();

        //添加子构建对象
        story.add(mountain);
        story.add(temple);
        story.add(monk);
        //开始讲故事
        story.tellStory();
    }
}
