"use strict";
var Canvas;
(function (Canvas) {
    window.addEventListener("load", hndDraw);
    function hndDraw() {
        let canvas = document.querySelector("canvas");
        let crc2 = canvas.getContext("2d");
        crc2.fillStyle = "#5b39abff";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.beginPath();
        crc2.arc(100, 100, 20, 0, 1.5 * Math.PI);
        let path = new Path2D();
        path.arc(90, 70, 66, 0, 2 * Math.PI);
        crc2.stroke(path);
        crc2.closePath();
        crc2.stroke();
        crc2.beginPath();
        crc2.ellipse(100, 40, 34, 9, 1, 0, 2 * Math.PI, true);
        crc2.moveTo(210, 10);
        crc2.lineTo(20, 299);
        crc2.closePath();
        crc2.stroke();
    }
})(Canvas || (Canvas = {}));
