import { TodoList } from './todolist.js';


window.addEventListener("DOMContentLoaded", function(){

let button_addTask = document.getElementById("button_addTask");
let task = TodoList("");

    button_addTask.addEventListener("click", function(event){
    let noteToAdd = prompt("Quelle note souhaitez vous rajouter ?");
    console.log(noteToAdd);    
    task.setTask1(noteToAdd);
    task.addNewTask();
    });



});

