var fp;
var database;
var tp;

function setup() {


  createCanvas(800,400);
  database=firebase.database();
  fp=new firstpage ();

}

function draw() {
  background(255,255,255); 
  fp.display();
 
}