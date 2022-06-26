const calendarElem:HTMLElement = <HTMLElement>document.getElementsByClassName("output")[1];

function calendarMain(){

    setInterval(function () {
        const now:Date = new Date();

        const year:number = now.getFullYear();
        const month:number = now.getMonth()+1;
        const day:number = now.getDate();

        const weekday:string[] = ["日","一","二","三","四","五","六"];
        const weekdayStr:string = "星期"+weekday[now.getDay()];

        let hour:number = now.getHours();
        let hourStr:string;
        if(hour > 12){
            hourStr = "下午"+(hour-12).toString();
        }else{
            hourStr = "上午"+hour.toString();
        }

        const minute:number = now.getMinutes();
        const second:number = now.getSeconds();
        const millisecond:number = now.getMilliseconds();

        let instant:string;
        if(millisecond < 10) {
            instant = year.toString()+"年"+month.toString()+"月"+day.toString()+"日"+weekdayStr+
                hourStr+"时"+minute.toString()+"分"+second.toString()+"秒00"+millisecond.toString()+"毫秒";
        } else if(millisecond < 100){
            instant = year.toString()+"年"+month.toString()+"月"+day.toString()+"日"+weekdayStr+
                hourStr+"时"+minute.toString()+"分"+second.toString()+"秒0"+millisecond.toString()+"毫秒";
        }else if(millisecond < 1000){
            instant = year.toString()+"年"+month.toString()+"月"+day.toString()+"日"+weekdayStr+
                hourStr+"时"+minute.toString()+"分"+second.toString()+"秒"+millisecond.toString()+"毫秒";
        }

        calendarElem.innerHTML = instant + "<br>";
    });

}
calendarMain();

// date: https://www.runoob.com/js/js-obj-date.html
// setInterval: https://www.w3school.com.cn/jsref/met_win_setinterval.asp
// 万年历 — 20220421 js第五次作业 软件191 胡瑞平 19031198