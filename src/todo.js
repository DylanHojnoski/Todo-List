
function CreateToDo(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    
    this.getTitle = () => {return title};
    this.getDescription = () => {return description};
    this.getDueDate = () => {return dueDate};
    this.getPriority = () => {return priority};

   /* function createToDoCard() {
        let content = document.querySelector("#content");
    
        let card = document.createElement("div");
    
        let titleText = document.createElement("h3");
        titleText.textContent = title;
    
        let descriptionText = document.createElement("p");
        descriptionText.textContent = description;
    
        let dueDateText = document.createElement("p");
        dueDateText.textContent = dueDate ;
    
        let priorityText = document.createElement("div");
        priorityText.textContent = priority;
    
        card.append(titleText);
        card.append(descriptionText);
        card.append(dueDateText);
        card.append(priorityText);
        content.append(card);
    }

    return createToDoCard(); */
}

function createToDoCard(item) {
    let content = document.querySelector("#content");

    let card = document.createElement("div");
    card.setAttribute("class", "todo");

    let title = document.createElement("h3");
    title.textContent = item.getTitle();
    title.setAttribute("class", "todo-title");

    let description = document.createElement("p");
    description.textContent = item.getDescription();
    description.setAttribute("class", "todo-description");

    let dueDate = document.createElement("div");
    dueDate.textContent = item.getDueDate();
    dueDate.setAttribute("class", "todo-dueDate");

    let priority = document.createElement("div");
    priority.textContent = item.getPriority();
    priority.setAttribute("class", "todo-priority");

    card.append(title);
    card.append(description);
    card.append(dueDate);
    card.append(priority);
    content.append(card);
} 

export {CreateToDo, createToDoCard};
