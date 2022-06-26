const buttons:HTMLCollectionOf<HTMLElement> = <HTMLCollectionOf<HTMLElement>>document.getElementsByClassName("button");
const minute:HTMLInputElement = (<HTMLCollectionOf<HTMLInputElement>>document.getElementsByClassName("minute"))[0];
const second:HTMLInputElement = (<HTMLCollectionOf<HTMLInputElement>>document.getElementsByClassName("second"))[0];

buttons[0].addEventListener("click",function (){
    minute.value += "1";
    calc();
});

buttons[1].addEventListener("click",function (){
    minute.value += "2";
    calc();
});

buttons[2].addEventListener("click",function (){
    minute.value += "3";
    calc();
});

buttons[3].addEventListener("click",function (){
    minute.value += "4";
    calc();
});

buttons[4].addEventListener("click",function (){
    minute.value += "5";
    calc();
});

buttons[5].addEventListener("click",function (){
    minute.value += "6";
    calc();
});

buttons[6].addEventListener("click",function (){
    minute.value += "7";
    calc();
});

buttons[7].addEventListener("click",function (){
    minute.value += "8";
    calc();
});

buttons[8].addEventListener("click",function (){
    minute.value += "9";
    calc();
});

buttons[9].addEventListener("click",function (){
    minute.value = minute.value.substring(0, minute.value.length-1);
    calc();
});

buttons[10].addEventListener("click",function (){
    minute.value += "0";
    calc();
});

buttons[11].addEventListener("click",function (){
    minute.value = "";
    second.value = "0";
    calc();
});

function calc(){
    if(isNaN(parseFloat(minute.value)*60)){
        second.value = "0";
    }else{
        second.value = (parseFloat(minute.value)*60).toString();
    }
}