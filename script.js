let city; 
let bomb;
let fall = 0
let drop =0
let down = 0
function preload (){
bomb=loadImage('bomb.png')
city = loadImage('city.png')
explosion = loadImage('explosion.png')
}

function setup(){
createCanvas(windowWidth,windowHeight);

}

function draw(){
background(255)
image(city,width/2,height/2)
fill(0)
textAlign(CENTER, CENTER)
text("Danny",width/1.1, 480)
imageMode(CENTER)


image(bomb,width/2,fall)
fall+=3
image(bomb,width/3,drop)
drop +=2
image(bomb,width/1.5,down)
down += 4

if (fall > height) {
fall = 0;
}
if (drop > height) {
drop = 0 
} 
if (down > height) {
down = 0
 }
}

function destroyBomb1(){
if (width/2-20 <mouseX && mouseX <width/2+20 && fall-100 <mouseY
&& mouseY<fall+100){
  
fall = 0;
}
}

function mousePressed() {
destroyBomb1()
destroyBomb2()
destroyBomb3()
}

function destroyBomb2(){
if (width/3-20 <mouseX && mouseX <width/3+20 && drop-100 <mouseY
&& mouseY<drop+100){
drop = 0;
}
}

function destroyBomb3(){
  
if (width/1.5-20 <mouseX && mouseX <width/1.5+20 && down-100 <mouseY && mouseY<down+100){
down = 0;
}
}
