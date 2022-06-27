var beamElems = document.getElementsByClassName("beam");
// 检查字符是否是数字
function isNumber(chr) {
    return chr >= "0" && chr <= "9";
}
// 获取元素旋转角度
function getElemRotate(beamElem) {
    var rotateStr = beamElem.style.transform;
    var degree = "";
    for (var idx = 0; idx < rotateStr.length; idx++) {
        if (isNumber(rotateStr[idx])) {
            degree += rotateStr[idx];
        }
    }
    return parseInt(degree);
}
var _loop_1 = function (idx) {
    var degree = getElemRotate(beamElems[idx]);
    setInterval(function () {
        beamElems[idx].style.transform = "rotate(" + degree.toString() + "deg)";
        degree++;
    });
};
for (var idx = 0; idx < beamElems.length; idx++) {
    _loop_1(idx);
}
// 20220429 响应式第十次作业 软件191 胡瑞平 19031198
//# sourceMappingURL=rotate.js.map