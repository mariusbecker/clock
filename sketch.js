function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	angleMode(DEGREES);
}

function draw() {

	var s = second();
	var m = minute();
	var h = hour();

	var sek = map(s, 0, 60, 0, 360)
	var min = map(m, 0, 60, 0, 360)
	var hr = map(h, 0, 24, 0, 720)



	var a = map(s, 0, 60, 150, 230)
	var b = map(m, 0, 60, 150, 230)
	var c = map(h, 0, 24, 150, 230)
	var d = map(s, 0, 60, 50, 130)
	var e = map(m, 0, 60, 50, 130)
	var f = map(h, 0, 24, 50, 130)




noStroke();


		translate(width/2,height/2)
  	background(a,b,c);

  	fill(d,e,f);
		ellipse(0,0,200,200);

	push();

		rotate(hr)
		fill(c,c,255);
		rect(-4,-60, 8,60);

	pop();
	push();

		rotate(min)
		fill(b,255,b);
		rect(-3,-90, 6,90);

	pop();
	push();

		rotate(sek);
		fill(255,a,a);
		rect(-2,-90, 4,90);

	pop();

		fill(a,b,c);
		ellipse(0,0,10,10);


}
