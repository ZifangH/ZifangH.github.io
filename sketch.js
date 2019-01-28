
// function setup() {
//   createCanvas(640, 480);
// }

// function draw() {
//   if (mouseIsPressed) {
//     fill(0);
//   } else {
//     fill(255);
//   }
//   ellipse(mouseX, mouseY, 80, 80);
// }



let a, b, c;

function setup() {
  createCanvas(320, 200);
  stroke(255);
  a = height / 2;
  b = height / 2;
  c = height / 2;
}

function draw() {
  background(51);
  var a = hour();
  var b = minute();
  var c = second();
// text('Current second: \n' + s, 5, 50);
  // let m = map(h 0, 100, 0, width);
  // (m, 50, 10, 10);

  stroke(255);
  line(0, a, width, a);
  // a = a - 0.2;
  // if (a < 0) {
  //   a = height;
  // }

  stroke(193, 66, 66);
  line(0, b, width, b);
  // b = b - 0.01;
  // if (b < 0) {
  //   b = height;
  // }


  stroke(204, 102, 0); 
  line(0, c, width, c);
  // c = c - 0.001;
  // if (c < 0) {
  //   c = height;
  // }
}

