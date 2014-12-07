var canvas = document.createElement("canvas")

canvas.width = 500;
canvas.height = 500;

document.body.style.margin = "0";
document.body.style.padding = "0";
canvas.style.position = "absolute";
canvas.style.width = "100%";
canvas.style.height = "100%";
canvas.style.overflow = "hidden";

document.body.appendChild(canvas);

var ctx = canvas.getContext("2d");
var size = 10;
var expansion = 0.005;

requestAnimationFrame(function onFrame(delta) {
  var newsize = size + delta * expansion;
  if (newsize > canvas.width || newsize < 0) {
    expansion *= -1;
  } else {
    size = newsize;
  }

  ctx.fillStyle = "blue";
  ctx.fillRect (0, 0, 500, 500)
  ctx.fillStyle = "red";
  ctx.fillRect(500/2 - size/2, 500/2 - size/2, size, size);

  requestAnimationFrame(onFrame);
})
