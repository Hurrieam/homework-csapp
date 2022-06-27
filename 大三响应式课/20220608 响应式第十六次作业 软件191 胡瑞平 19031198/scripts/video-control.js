$("document").ready(function () {
    var video = document.getElementsByClassName("video")[0];
    $(".play-pause").click(function () {
        if (video.paused) {
            video.play();
        }
        else {
            video.pause();
        }
    });
    $(".go-back").click(function () {
        video.currentTime -= 5;
    });
    $(".go-forward").click(function () {
        video.currentTime += 5;
    });
    $(".volume-down").click(function () {
        video.volume -= 0.1;
    });
    $(".volume-up").click(function () {
        video.volume += 0.1;
    });
    $(".mute").click(function () {
        video.muted = !video.muted;
    });
});
// 20220608 响应式第十六次作业 软件191 胡瑞平 19031198
//# sourceMappingURL=video-control.js.map