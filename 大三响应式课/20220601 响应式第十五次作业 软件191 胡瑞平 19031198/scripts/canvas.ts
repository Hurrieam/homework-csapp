$(document).ready(()=>{
    const canvas:HTMLCanvasElement = document.querySelector<HTMLCanvasElement>("canvas");
    const context = canvas.getContext('2d');

    $("canvas").mousedown((event)=>{
        $("canvas").mousemove((event)=>{
            context.beginPath();
            context.arc(event.clientX/2-8, event.clientY/3-8, 1, 0, 2 * Math.PI);
            context.stroke();
        });
    });

    $("canvas").mouseup((event)=>{
        $(canvas).unbind("mousemove");
    });
});