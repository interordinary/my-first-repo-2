function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  fill('blue');
  noStroke();
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      circle(i*50,j*50, 40)}}
    
let angle = frameCount * 0.001; 
rotate(angle);
noStroke();

  textSize(225);
  textAlign(CENTER);
  text('⭐', 200,260);

  textSize(225);
  textAlign(CENTER);
  text('😃', 200,160);
  }
  
  


