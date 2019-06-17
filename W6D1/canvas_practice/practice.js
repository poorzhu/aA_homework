document.addEventListener("DOMContentLoaded", function(){
    const canvas = document.getElementById('mycanvas');
    const ctx = canvas.getContext('2d');

    // rectangle

    // canvas.width = 500;
    // canvas.height = 500;
    // ctx.fillStyle = 'red';
    // ctx.fillRect(0, 0, 500, 500);

    // circle

    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.lineWidth = 5;
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.stroke();
    
});
