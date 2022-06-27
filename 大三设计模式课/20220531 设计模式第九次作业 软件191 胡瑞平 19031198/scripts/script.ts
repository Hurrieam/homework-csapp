$(document).ready(()=>{
    abstract class Game{
        abstract initialize():void;
        abstract startPlay():void;
        abstract endPlay():void;

        public play():void{
            this.initialize();
            this.startPlay();
            this.endPlay();
        }
    }
    class Football extends Game{
        endPlay(): void {
            $("p").append("足球游戏结束<br>");
        }

        initialize(): void {
            $("p").append("载入足球游戏<br>");
        }

        startPlay(): void {
            $("p").append("足球游戏开始<br>");
        }
    }

    interface Idea{
        tricks():string;
    }
    class BackDoor implements Idea{
        public tricks(): string {
            return "走乔国老的后门";
        }

    }
    class GoBack implements Idea{
        public tricks(): string {
            return "骗刘备回家";
        }

    }
    class Retreat implements Idea{
        public tricks(): string {
            return "让赵夫人撤军";
        }

    }
    class ZhaoYun{
        private goodIdea1:Idea;
        private goodIdea2:Idea;
        private goodIdea3:Idea;

        public act(num:number):string{
            switch (num) {
                case 1:
                    return this.goodIdea1.tricks();
                case 2:
                    return this.goodIdea2.tricks();
                case 3:
                    return this.goodIdea3.tricks();
            }
        }

        public constructor(goodIdea1:Idea, goodIdea2:Idea, goodIdea3:Idea){
            this.goodIdea1 = goodIdea1;
            this.goodIdea2 = goodIdea2;
            this.goodIdea3 = goodIdea3;
        }
    }

    (()=>{
        const fb = new Football();
        fb.play();

        const zy = new ZhaoYun(new BackDoor(), new GoBack(), new Retreat());
        $("p").append(zy.act(1) + "<br>");
        $("p").append(zy.act(2) + "<br>");
        $("p").append(zy.act(3) + "<br>");
    })();
});