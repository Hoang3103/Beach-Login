const ball = document.getElementById('Ball');
let posX = window.innerWidth / 2; 
let posY = window.innerHeight / 2; 
let speedX = 2.3; 
let speedY = 3; 

const ballRadius = parseInt(getComputedStyle(ball).getPropertyValue('width')) / 2;


function moveBall() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    posX += speedX;
    posY += speedY;
    if (posX - ballRadius <= 0 || posX + ballRadius >= windowWidth) {
        speedX = -speedX; 
    }
    if (posY - ballRadius <= 0 || posY + ballRadius >= windowHeight) {
        speedY = -speedY;
    }
    ball.style.left = posX - ballRadius + 'px';
    ball.style.top = posY - ballRadius + 'px';
    requestAnimationFrame(moveBall);
}
moveBall();
