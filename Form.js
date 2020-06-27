class Form{
    constructor(){
        this.input=createInput("Enter A Task");
        this.button=createButton("Add Task");
        this.delete=createButton("DELETE");

    }
    display(){
        var title=createElement("h1");
        title.html("TO DO LIST");
        title.position(500,50);
        this.input.position(500,150);
        this.button.position(700,150);
        
        this.button.mousePressed(()=>{
         var name=this.input.value();
       // text(name,530,250);
        this.delete.position(580,250);
        db1=new db();
        db1.updateTask();
        db.updateTaskInfo();
        if(allTasks!==undefined){
            var displayposY=250;
            for(var t in allTasks){
                displayposY+=50;
                textSize(20);
                text(allTasks[t].taskName,500,displayposY);
            }
        }
        })


    }
}