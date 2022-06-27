const beamElems:HTMLCollectionOf<HTMLElement> = <HTMLCollectionOf<HTMLElement>>document.getElementsByClassName("beam");

// 检查字符是否是数字
function isNumber(chr: string):boolean {
    return chr >= "0" && chr <= "9";
}

// 获取元素旋转角度
function getElemRotate(beamElem: HTMLElement):number {
    const rotateStr:string = beamElem.style.transform;
    let degree:string = "";
    for(let idx = 0; idx < rotateStr.length; idx++){
        if(isNumber(rotateStr[idx])) {
            degree += rotateStr[idx];
        }
    }
    return parseInt(degree);
}

for(let idx = 0; idx < beamElems.length; idx++){

    let degree = getElemRotate(beamElems[idx]);

    setInterval(function (){
        beamElems[idx].style.transform = "rotate(" + degree.toString() + "deg)";
        degree++;
    });
}

// 20220429 响应式第十次作业 软件191 胡瑞平 19031198