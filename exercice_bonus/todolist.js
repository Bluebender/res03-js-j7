class TodoList {
    #task1;

    constructor(task1)
    {
        this.#task1 = task1;
    }

    get task1 (){
        return this.#task1;
    }

    set task1 (task1){
        this.#task1 = task1;
    }

    addNewTask(){
        // this.#task1 = noteToAdd;
        
        
        
    }
}

export { TodoList };