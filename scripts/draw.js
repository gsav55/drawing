const canvas = document.getElementById("canvas");
if (canvas.getContext){
const ctx = canvas.getContext("2d");
	ctx.fillStyle = "rgb(200 0 0)";
	ctx.fillRect(10,10,50,50);

	ctx.fillStyle = "rgb(0 0 200 / 50%";
	ctx.fillRect(25,25,50,50);
}

const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello World!"