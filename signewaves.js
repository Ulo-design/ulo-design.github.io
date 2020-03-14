
var angleInc = 0.200;

function setup() {
createCanvas(windowWidth,windowHeight);
noStroke();


}

function draw() {
  background(222);
  
  angleInc+= 0.000001;

  var scale = 500;
  var offset = 400.0;
  var angle = 100;
  
  var bruitC = 0.020;
  var posC = noise(millis() * bruitC) * 20;

   var bruitX = 0.020;
  var posX = noise(millis() * bruitX) * 2;

  for (var x = 0; x<= width; x+= 8) {
	
	var y = offset + (sin(angle) * scale);
		

		noFill();	
		ellipse(x,y,posC,posC);
		noFill();
		stroke(20);
		angle += angleInc;


	var y = offset + (tan(angle) * scale);
		fill (0);	
		rect(x, y, 5, 5);
		angle += angleInc;
	 }

}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}