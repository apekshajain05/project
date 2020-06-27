class db{
    constructor(){
        this.taskCount=null;
    }
    updateTask(){
        var task="ToDoList/taskName"+this.taskCount;
        database.ref(task).set({
            taskName:form.name
        });
    }
    static updateTaskInfo(){
        var taskInfo=database.ref("ToDoList");
        taskInfo.on("value",function(data){
            allTasks=data.val();
        })
    }
}