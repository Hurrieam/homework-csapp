var calendarElem = document.getElementsByClassName("output")[1];
function calendarMain() {
    setInterval(function () {
        var now = new Date();
        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        var day = now.getDate();
        var weekday = ["日", "一", "二", "三", "四", "五", "六"];
        var weekdayStr = "星期" + weekday[now.getDay()];
        var hour = now.getHours();
        var hourStr;
        if (hour > 12) {
            hourStr = "下午" + (hour - 12).toString();
        }
        else {
            hourStr = "上午" + hour.toString();
        }
        var minute = now.getMinutes();
        var second = now.getSeconds();
        var millisecond = now.getMilliseconds();
        var instant;
        if (millisecond < 10) {
            instant = year.toString() + "年" + month.toString() + "月" + day.toString() + "日" + weekdayStr +
                hourStr + "时" + minute.toString() + "分" + second.toString() + "秒00" + millisecond.toString() + "毫秒";
        }
        else if (millisecond < 100) {
            instant = year.toString() + "年" + month.toString() + "月" + day.toString() + "日" + weekdayStr +
                hourStr + "时" + minute.toString() + "分" + second.toString() + "秒0" + millisecond.toString() + "毫秒";
        }
        else if (millisecond < 1000) {
            instant = year.toString() + "年" + month.toString() + "月" + day.toString() + "日" + weekdayStr +
                hourStr + "时" + minute.toString() + "分" + second.toString() + "秒" + millisecond.toString() + "毫秒";
        }
        calendarElem.innerHTML = instant + "<br>";
    });
}
calendarMain();
// date: https://www.runoob.com/js/js-obj-date.html
// setInterval: https://www.w3school.com.cn/jsref/met_win_setinterval.asp
// 万年历 — 20220421 js第五次作业 软件191 胡瑞平 19031198
//# sourceMappingURL=calendar.js.map