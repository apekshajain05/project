var form;
var allTasks;
var db1;
function setup() {
  createCanvas(800,400);
  database=firebase.database(); 
  form=new Form();
  form.display();
  

}

function draw() {
  background(255,255,255);  
 
}
