function showOlympicFlag() {
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");

	ctx.beginPath();
	ctx.strokeStyle = "grey";
	ctx.lineWidth = 4;
	ctx.rect(180, 143, 430, 200);
	ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 4;
ctx.arc(300, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 4;
ctx.arc(390, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 4;
ctx.arc(480, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle ="yellow";
ctx.lineWidth = 4;
ctx.arc(345, 260, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 4;
ctx.arc(435, 257,40, 0, 2 * Math.PI);
ctx.stroke();

 }