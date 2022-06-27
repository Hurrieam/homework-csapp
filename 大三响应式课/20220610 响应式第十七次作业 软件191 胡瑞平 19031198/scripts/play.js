$(document).ready(function () {
    var keys = document.getElementsByClassName("key");
    var sounds = document.getElementsByClassName("sound");
    var _loop_1 = function (idx) {
        keys[idx].addEventListener("click", function () {
            sounds[idx].load();
            sounds[idx].play();
        });
    };
    for (var idx = 0; idx < keys.length; idx++) {
        _loop_1(idx);
    }
});
// 20220610 响应式第十七次作业 软件191 胡瑞平 19031198
//# sourceMappingURL=play.js.map