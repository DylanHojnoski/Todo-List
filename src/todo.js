import {menu, getActiveProject} from "./menu.js";
import {Project} from "./project.js";

function CreateToDo(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    
    this.getTitle = () => {return title};
    this.getDescription = () => {return description};
    this.getDueDate = () => {return dueDate};
    this.getPriority = () => {return priority};
}

function createToDoCard(item) {
    let toDoContainer = document.querySelector(".toDoContainer");
        
    let card = document.createElement("div");
    card.setAttribute("class", "todo");

    let deleteButton = document.createElement("button");
    deleteButton.addEventListener("click", () => {
        let project = getActiveProject();
        console.log(project);
        project.findToDO(title);
        card.remove();
    });
    deleteButton.textContent = "X";
    deleteButton.setAttribute("class", "delete");

    let title = document.createElement("h3");
    title.textContent = item.getTitle();
    title.setAttribute("class", "todo-title");

    let description = document.createElement("p");
    description.textContent = item.getDescription();
    description.setAttribute("class", "todo-description");

    let dueDate = document.createElement("div");
    dueDate.textContent = "Due date " + item.getDueDate();
    dueDate.setAttribute("class", "todo-dueDate");

    let priority = document.createElement("div");
    priority.textContent = item.getPriority();
    priority.setAttribute("class", "todo-priority");

    card.append(deleteButton);
    card.append(title);
    card.append(description);
    card.append(dueDate);
    card.append(priority);
    toDoContainer.append(card);
} 


export {CreateToDo, createToDoCard};
