import {CreateToDo, createToDoCard} from "./todo.js";

function Project(name) {
    this.name = name;
    let todos = [];

    function getName() {
        return name;
    }

    function addToDo(todo) {
        todos.push(todo);
    }

    function showToDos() {
        if(document.querySelector(".toDoContainer") != null) {
            document.querySelector(".toDoContainer").remove();
        }
        let toDoContainer = document.createElement("div");
        toDoContainer.setAttribute("class", "toDoContainer");
        document.querySelector("#content").append(toDoContainer);

        for(let i = 0; i < todos.length; i++) {
            createToDoCard(todos[i]);
        }
    }

    function removeToDo(index) {
        todos.splice(index, 1);
    }

    return {addToDo, showToDos, getName, removeToDo};
}

export {Project};