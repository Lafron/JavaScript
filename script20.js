document.body.innerHTML += "<hr/>";

//2)================================================================

let tasks = [
    {
        id: '1138465078061',
        completed: false,
        text: 'Посмотреть новый урок по JavaScript',
    },
    {
        id: '1138465078062',
        completed: true,
        text: 'Выполнить тест после урока',
    },
    {
        id: '1138465078063',
        completed: false,
        text: 'Выполнить ДЗ после урока',
    },
];

let lightThemes = true;

const addTaskList = taskArr =>{

    const tasksList = document.createElement("div");
    tasksList.classList.add("tasks-list");

    taskArr.forEach(task => {

        const taskItem = document.createElement("div");
        taskItem.setAttribute("data-task-id", task.id);
        taskItem.classList.add("task-item");

        const mainContainer = document.createElement("div");
        mainContainer.classList.add("task-item__main-container");

        const content = document.createElement("div");
        content.classList.add("task-item__main-content");

        const checkboxForm = document.createElement("form");
        checkboxForm.classList.add("checkbox-form");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = task.id;
        checkbox.classList.add("checkbox-form__checkbox");
        checkbox.checked = task.completed;

        const labelFor = document.createElement("label");
        labelFor.htmlFor = task.id;

        const itemText = document.createElement("span");
        itemText.classList.add("task-item__text");
        itemText.textContent = task.text;

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("task-item__delete-button", "default-button", "delete-button");
        deleteButton.dataset.deleteTaskId = task.id;
        //deleteButton.setAttribute("data-delete-task-id", "task-1");
        deleteButton.textContent = "Удалить";
        

        checkboxForm.append(checkbox);
        checkboxForm.append(labelFor);

        content.append(checkboxForm);
        content.append(itemText);

        mainContainer.append(content);
        mainContainer.append(deleteButton);

        taskItem.append(mainContainer);

        tasksList.append(taskItem);

    });
    
    document.body.append(tasksList);    
    addEventDel();
    lightThemes = changeColor(!lightThemes);
};

addTaskList(tasks);


//3)========================================================================

createForm = document.querySelector("form[class^='create'");
const input = createForm.querySelector("input[name='taskName']");

createForm.addEventListener("submit", event => {
    event.preventDefault();
    
    if(validate(input.value)){
        
        const task = {
            id: Date.now(),
            completed: false,
            text: input.value,
        };

        tasks.push(task);

        const divs = document.querySelector("div.tasks-list");
        
        divs.remove();
    
        addTaskList(tasks);
    }

});

//4)========================================================================

const checkValue = text => {
    let result = false;

    tasks.forEach(task => {
        if(task.text == text){
            result = true;
        }
    });
    return result;
};

const addErr = (text, remove) =>{
    const errSpan = document.createElement("span");
    errSpan.className = "error-message-block";
    errSpan.textContent = text;

    const span = createForm.querySelector("span.error-message-block");

    if(span){
        span.remove();
    }

    if(!remove){
        createForm.append(errSpan);
    }
};

const validate = function(text){
    let result = true;

    if(text == ""){
        addErr("Название задачи не должно быть пустым.", false);
     
        result = false;
    }
    else if(checkValue(text)){
        addErr("Задача с таким названием уже существует.", false);

        result = false;
    }
    else{
        addErr("", true);
    }
    return result;
};

//5)==================================================================

const createEl = (node, nodeClassArr, text) => {
    const element = document.createElement(node);
    element.classList.add(...nodeClassArr);
    
    if(element.tagName.toLowerCase() === 'input'){
        element.value = text;
    }
    else{
        element.textContent = text;
    }
    return element;
}; 

const modalOverlay = createEl("div", ["modal-overlay", "modal-overlay_hidden"], "");

const deleteModal = createEl("div", ["delete-modal"], "");

const modalQuestion = createEl("h3", ["delete-modal__question"], "Вы действительно хотите удалить эту задачу?");

const modalButtons = createEl("div", ["delete-modal__buttons"], "");

const deleteButton = createEl("button", ["delete-modal__button", "delete-modal__cancel-button"], "Отмена");
deleteButton.addEventListener("click", () => {
    modalOverlay.classList.add("modal-overlay_hidden");
});

const confirmButton = (createEl("button", ["delete-modal__button", "delete-modal__confirm-button"], "Удалить"));

modalButtons.append(deleteButton, confirmButton);
deleteModal.append(modalQuestion, modalButtons);
modalOverlay.append(deleteModal);

document.body.append(modalOverlay);

const deleteTask = divId => {
    confirmButton.addEventListener("click", () => {
        const remDiv = document.querySelector(".tasks-list");
        
        if(remDiv){
            remDiv.remove();
        
            modalOverlay.classList.add("modal-overlay_hidden");

            tasks = tasks.filter(task => task.id != divId);
            addTaskList(tasks);
        }
    });
};

function addEventDel() {
    const btnArr = document.querySelectorAll("div.tasks-list>div button");
    
    btnArr.forEach(btn => {
        btn.addEventListener("click", () => {
            modalOverlay.classList.remove("modal-overlay_hidden");
            deleteTask(btn.dataset.deleteTaskId);
        });
    });
}

//6)==================================================================

function changeColor(themes){
    
    const divArr = document.querySelectorAll("div.task-item");
    const btns = document.querySelectorAll("button");

    if(themes){
        document.body.style.background ="#24292E";
        
        divArr.forEach(div => {
            div.style.color = "#ffffff";
        });

        btns.forEach(btn => {
            btn.style.border = "1px solid #ffffff";
        });
        themes = false;
    }
    else{
        document.body.style.background ="initial";

        divArr.forEach(div => {
            div.style.color = "initial";
        });

        btns.forEach(btn => {
            btn.style.border = "";
        });
        themes = true;
    }
    return themes;   
}

const tabButton = createEl("a",["main-navigation__button-item"], "Tab");
tabButton.dataset.buttonId = 4;
tabButton.href = "";

tabButton.addEventListener("click", e => {
    e.preventDefault();

    lightThemes = changeColor(lightThemes);
});

const mainNavigation = document.querySelector(".main-navigation");

mainNavigation.append(tabButton);

