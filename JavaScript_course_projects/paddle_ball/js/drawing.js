/**
 * Created by mbp on 7/21/18.
 */
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
const ballRadius = 10;
const paddleHeight = 20;
const paddleWidth = 80;
let paddleX = (canvas.width - paddleWidth) / 2;
let rightPressed = false;
let leftPressed = false;
let ballColor = "rgba(0, 149, 221, 1)";
let x_pos = canvas.width / 2;
let y_pos = canvas.height - 30;
let draw_x = 5;
let draw_y = -2;
var playGame;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(event) {
    console.log(event);
    if (event.keyCode === 39) {
        rightPressed = true;
    } else if (event.keyCode === 37) {
       leftPressed = true;
    }
}

function keyUpHandler(event) {
    console.log(event);
    if (event.keyCode === 39) {
        rightPressed = false;
    } else if (event.keyCode === 37) {
       leftPressed = false;
    }
}

function changeColors() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    ballColor = `rgba(${red}, ${green}, ${blue}, 1)`;
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x_pos, y_pos, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = ballColor;
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPaddle();
    drawBall();

    // side walls bounce
    if (x_pos + draw_x > (canvas.width - ballRadius) || x_pos + draw_x < ballRadius) {
        draw_x = -draw_x;
        changeColors();
    }
    // Ceiling bounce
    if (y_pos + draw_y < ballRadius) {
        draw_y = -draw_y;
        changeColors();
    // Touch floor Game Over
    } else if (y_pos + draw_y > (canvas.height - ballRadius+5)) {
        clearInterval(playGame);
        alert("Game Over");
        document.location.reload();
    // Hit the paddle
    } else if (y_pos + draw_y > (canvas.height - paddleHeight-3) && x_pos > paddleX && x_pos < paddleX + paddleWidth) {
        draw_y = -draw_y;
        setInterval(draw, 100); // Moves ball faster with each paddle hit
    }

    // Move Paddles and keep them on screen
    if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 3;
    } else if (leftPressed && paddleX > 0) {
        paddleX -= 3;
    }

    x_pos += draw_x;
    y_pos += draw_y;
}



playGame = setInterval(draw, 20);
