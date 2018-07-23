/**
 * Created by mbp on 7/21/18.
 */
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
const ballRadius = 10;
let ballColor = "rgba(0, 149, 221, 1)";
let x_pos = canvas.width / 2;
let y_pos = canvas.height - 30;
let draw_x = 5;
let draw_y = -2;

function changeColors() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    ballColor = `rgba(${red}, ${green}, ${blue}, 1)`;
}

function drawBall() {
    "use strict";

    ctx.beginPath();
    ctx.arc(x_pos, y_pos, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = ballColor;
    ctx.fill();
    ctx.closePath();
}

function draw() {
    "use strict";

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();

    // side walls bounce
    if (x_pos + draw_x > (canvas.width - ballRadius) || x_pos + draw_x < ballRadius) {
        draw_x = -draw_x;
        changeColors();
    }
    // floor and ceiling bounce
    if (y_pos + draw_y > (canvas.height - ballRadius) || y_pos + draw_y < ballRadius) {
        draw_y = -draw_y;
        changeColors();
    }
    x_pos += draw_x;
    y_pos += draw_y;
}

setInterval(draw, 10);
