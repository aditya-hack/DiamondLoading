const canvas = document.createElement('canvas');
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

const width = canvas.width = 200;
const height = canvas.height = 200;

const diamondSize = 50;
const diamondPadding = 10;
const diamondColor = '#3498db';

function draw() {
    ctx.clearRect(0, 0, width, height);
    
    for(let i = 0; i < width / diamondSize; i++) {
        for(let j = 0; j < height / diamondSize; j++) {
            drawDiamond(i * (diamondSize + diamondPadding), j * (diamondSize + diamondPadding));
        }
    }
}

function drawDiamond(x, y) {
    ctx.fillStyle = diamondColor;
    ctx.beginPath();
    ctx.moveTo(x + diamondSize / 2, y);
    ctx.lineTo(x + diamondSize, y + diamondSize / 2);
    ctx.lineTo(x + diamondSize / 2, y + diamondSize);
    ctx.lineTo(x, y + diamondSize / 2);
    ctx.closePath();
    ctx.fill();
}

function animate() {
    draw();
    requestAnimationFrame(animate);
}

animate();
