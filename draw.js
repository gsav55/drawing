const canvas = document.getElementById("canvas");
if (canvas.getContext){
const ctx = canvas.getContext("2d");
	ctx.fillStyle = "rgb(200 0 0)";
	ctx.fillRect(10,10,10,10);

	ctx.fillStyle = "rgb(0 0 200 / 50%";
	ctx.fillRect(60,60,10,10);
}