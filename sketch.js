
var tileCount = 20;
var r;
var g;
var b;
var cube = 30;

function setup() {
	frameRate(2)
  createCanvas(windowWidth, windowHeight);
noLoop();

}

function draw() {
  background(220);
  noStroke();
  r = 255;
  g = 100;
  b = 100;
  
  

  for (var j = 0; j<tileCount; j++) {
	
	for (var i = 0; i< tileCount; i++) {


	
	x = j * cube;
	y = i * cube;

	c = color(random(r), random(g), random (b));

		fill(255,134,234);


	ellipse(x,y,10,10);
	
	fill(c);
	
	rect(x, y, cube, cube);

	

}
}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}