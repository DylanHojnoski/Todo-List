
function CreateToDo(title, description, dueDate, protity) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.protity = protity;
    
    this.getTitle = () => {return title};
}

function getToDoInfo() {
    
}

export default CreateToDo;