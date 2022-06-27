$("document").ready(()=>{
    const video:HTMLVideoElement = <HTMLVideoElement>document.getElementsByClassName("video")[0];
    $(".play-pause").click(()=>{
        if(video.paused){
            video.play();
        }else{
            video.pause();
        }
    });
    $(".go-back").click(()=>{
        video.currentTime -= 5;
    });
    $(".go-forward").click(()=>{
        video.currentTime += 5;
    });
    $(".volume-down").click(()=>{
        video.volume -= 0.1;
    });
    $(".volume-up").click(()=>{
        video.volume += 0.1;
    });
    $(".mute").click(()=>{
        video.muted = !video.muted;
    });
});

// 20220608 响应式第十六次作业 软件191 胡瑞平 19031198