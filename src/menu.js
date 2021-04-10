import {Project} from "./project.js";
import { CreateToDo } from "./todo.js";

function menu() {
    let projects = [];
    let isAddProjectFormActive = false;
    let isAddToDoActive = false;
    let activeProject;

    function getActiveProject() {return activeProject};
    let content = document.querySelector("#content");
    let  header = document.createElement("header");

    let title = document.createElement("h1");
    title.textContent = "To Do List";

    let addProject = document.createElement("button");
    addProject.textContent = "Add Project";
    addProject.addEventListener("click", () => {
        addProjectForm();
        isAddProjectActive = true;
    });

    let projectContainer = document.createElement("div");
    projectContainer.setAttribute("class", ".projectContainer");

    let description = document.createElement("h2");
        description.textContent = "Projects:";

    projectContainer.append(description);

    let addToDo = document.createElement("button");
    addToDo.textContent = "Add To Do";
    addToDo.addEventListener("click", () => {
        addToDoForm();
        isAddToDoActive = true;
    });


    function addProjectForm() {
        if(!isAddProjectFormActive) {
            let container = document.createElement("div");
            container.setAttribute("class", "form");
        
            let deleteButton = document.createElement("button");
            deleteButton.addEventListener("click", () => {
                container.remove();
                isAddProjectActive = false;
            });
            deleteButton.textContent = "X";
            deleteButton.setAttribute("class", "delete");
        
            let name = document.createElement("input")
            name.setAttribute("type", "text");
            name.setAttribute("placeholder", "Name");
        
            let submit = document.createElement("button");
            submit.textContent = "add";
            submit.addEventListener("click", () => {
                if(name.value != "")
                {
                    console.log(name.value);
                    projects.push(new Project(name.value)); 
                    showProjects();
                    container.remove();
                    console.log(projects);
                    isAddProjectActive = false;
                }
            })
        
            container.append(name);
            container.append(submit);
            container.append(deleteButton);
            header.append(container);
        }
    }

    function showProjects() {
        if(projects.length == 0) {
            projects.push(new Project("Tasks"));
        }
        
        let project = document.createElement("button");
        project.addEventListener("click", () => {
            projects[projects.length-1].showToDos();
            activeProject = projects.findIndex(project);
        });
        project.textContent = projects[projects.length-1].getName();
        projectContainer.append(project);
        projectContainer.append(project);

    }

    function addToDoForm() {
        if(!isAddToDoActive) {
            let container = document.createElement("div");
            container.setAttribute("class", "form");
        
            let deleteButton = document.createElement("button");
            deleteButton.addEventListener("click", () => {
                container.remove();
                isAddToDoActive = false;
            });
            deleteButton.textContent = "X";
            deleteButton.setAttribute("class", "delete");
        
            let project = document.createElement("select")
            project.textContent = "Project";
            for(let i = 0; i < projects.length; i++) {
                let option = document.createElement("option");
                option.textContent = projects[i].getName();
                option.setAttribute("value", i);
                project.append(option);
            }

            let title = document.createElement("input")
            title.setAttribute("type", "text");
            title.setAttribute("placeholder", "Title");

            let description = document.createElement("input")
            description.setAttribute("type", "text");
            description.setAttribute("placeholder", "Description");

            let dueDate = document.createElement("input")
            dueDate.setAttribute("type", "date");
            let dueDateLabel = document.createElement("label");
            dueDateLabel.textContent = "Due Date";
            

            let priority = document.createElement("input")
            priority.setAttribute("type", "checkbox");
            priority.setAttribute("class", "radioButton");
            let urgentLabel = document.createElement("label");
            urgentLabel.textContent = "Urgent";
        
            let submit = document.createElement("button");
            submit.textContent = "add";
            submit.addEventListener("click", () => {
                if(title.value != "" && description.value != "")
                {
                    let todo = new CreateToDo(title.value, description.value, dueDate.value, priority.value);
                    projects[project.value].addToDo(todo);
                   
                    container.remove();
                    isAddToDoActive = false;
                }
            })
        
            container.append(project);
            container.append(title);
            container.append(description);
            container.append(dueDateLabel);
            container.append(dueDate);
            container.append(urgentLabel);
            container.append(priority);
            container.append(submit);
            container.append(deleteButton);
            header.append(container);
        }
    }

    header.append(title);
    header.append(addProject);
    header.append(addToDo);
    header.append(projectContainer);
    content.append(header);

    return {addProject, showProjects, getActiveProject};
}


export {menu};