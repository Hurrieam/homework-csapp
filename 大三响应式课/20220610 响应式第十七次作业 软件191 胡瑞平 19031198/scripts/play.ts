$(document).ready(()=>{
    const keys:HTMLCollectionOf<HTMLDivElement> = <HTMLCollectionOf<HTMLDivElement>>document.getElementsByClassName("key");
    const sounds:HTMLCollectionOf<HTMLAudioElement> = <HTMLCollectionOf<HTMLAudioElement>>document.getElementsByClassName("sound");
    for(let idx = 0; idx < keys.length; idx++){
        keys[idx].addEventListener("click", ()=>{
            sounds[idx].load();
            sounds[idx].play();
        });
    }
});


// 20220610 响应式第十七次作业 软件191 胡瑞平 19031198