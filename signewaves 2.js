
var angleInc = 0.0250;

function setup() {
createCanvas(windowWidth,windowHeight);
noStroke();

}

function draw() {
  background(222);
  
  angleInc+= 0.0001;

  var scale = 500;
  var offset = 10.0;
  var angle = 10;
  

  for (var x = 0; x<= width; x+= 8) {
	
	var y = offset + (sin(angle) * scale);

		fill (0);
		ellipse(x, y, 50, 4);
		angle += angleInc;
	 }

}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}