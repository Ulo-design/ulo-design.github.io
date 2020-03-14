
var inc = 0.02;
var density = 8;
var znoise = 0.00001;
//var b;
//var cube = 30;

function setup() {

createCanvas(400,400);
noStroke();
//noLoop();

}

function draw() {
	var xnoise = 0.0;
	var ynoise = 0.0;

for (var y = 0; y <height; y += density) {

     for (var x = 0; x <width; x += density) {

     var n = noise (xnoise, ynoise, znoise) * 255;

	fill(n)

	rect(x,y,density,density); 

	xnoise += inc;

	}
	
	xnoise = 0;
	ynoise += inc;
	znoise += inc;
	
	}
	
}

function windowsResized() {
	resizeCanvas(windowwidth,windowheight)
 
}