let clear = document.getElementById("clear-canvas");
clear.addEventListener("click", () => {
    ctx.fillStyle = pencilBoxVars.backgroundColor;
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.fillRect(0,0, canvas.width, canvas.height);
})
