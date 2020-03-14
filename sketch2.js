
function setup() {
  createCanvas(windowWidth, windowHeight);


}

function draw() {
  background(0,0,0,2);
	var tamango = random(30);
	ellipse(mouseX, mouseY, tamango, tamango);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}