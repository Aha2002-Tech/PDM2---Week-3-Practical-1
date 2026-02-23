function setup(){

createCanvas(500,600);

}
function draw() {
background(255);

fill(255);
stroke(10);
let pmx = pmouseX - 50;
  let pmy = pmouseY - 100;
  let mx = mouseX - 100;
  let my = mouseY - 100;
  line(pmx, pmy, mx, my);
  

  
  






}