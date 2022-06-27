$(document).ready(function () {
    var canvas = document.querySelector("canvas");
    var context = canvas.getContext('2d');
    $("canvas").mousedown(function (event) {
        $("canvas").mousemove(function (event) {
            context.beginPath();
            context.arc(event.clientX / 2 - 8, event.clientY / 3 - 8, 1, 0, 2 * Math.PI);
            context.stroke();
        });
    });
    $("canvas").mouseup(function (event) {
        $(canvas).unbind("mousemove");
    });
});
//# sourceMappingURL=canvas.js.map