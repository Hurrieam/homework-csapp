$("document").ready(function () {
    var video = document.getElementsByClassName("video")[0];
    $("button").click(function () {
        if (video.paused) {
            video.play();
        }
        else {
            video.pause();
        }
    });
});
// 20220608 响应式第十六次作业 软件191 胡瑞平 19031198
//# sourceMappingURL=video.js.map