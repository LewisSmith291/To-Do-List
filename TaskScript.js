// For Lightmode Defaults
const DarkModeSelection = document.getElementById("dark-mode-selection");
DarkModeSelection.addEventListener("click", ToggleDarkmode, {once:false});
DarkModeSelection.style.once;

const Header = document.getElementById("header");
const selectedBackground = document.querySelector(".selected-background");
const PageTitle = document.querySelector("h1");

const AddTaskText = document.getElementById("task-text-input");
const NewTaskButton = document.getElementById("add-task-button");

const moonIcon = document.getElementById("moon-icon");
const sunIcon = document.getElementById("sun-icon");

var taskList = [];
var isDarkMode = false;

// Disable transitions on resize
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

// Add new task
function NewTask(){
    event.preventDefault()

    let newTaskName = AddTaskText.value;

    if ( newTaskName == ""){
        return;
    }

    // New row
    const newRow = document.createElement("li");
    newRow.classList.add("list-row","task-uncompleted","light-border","task-transition");
    if (isDarkMode){
        newRow.classList.toggle("dark-border");
        newRow.classList.toggle("light-border");
    }

    // Name text
    const newName = document.createElement("input");
    newName.setAttribute("type","text");
    newName.classList.add("task-text","light-text","task-transition");
    newName.value = newTaskName;
    if (isDarkMode){
        newName.classList.toggle("text-darkmode");
        newName.classList.toggle("text-lightmode");
    }

    // Checkbox
    const newCheck = document.createElement("input");
    newCheck.type="checkbox";
    newCheck.classList.add("completed-box");
    newCheck.setAttribute("onclick","Checkbox(this)");

    // Remove Button
    const newRemove = document.createElement("input");
    newRemove.type="button";
    newRemove.classList.add("remove-button")
    newRemove.value="Remove Task";
    newRemove.setAttribute("onclick","RemoveButton(this)");

    newRow.appendChild(newName);
    newRow.appendChild(newCheck);
    newRow.appendChild(newRemove);

    document.body.querySelector("ul").appendChild(newRow);
    taskList.push(newRow);

    AddTaskText.value = "";
}

// When checkbox is toggled
function Checkbox(checkElement){
    if (checkElement.checked){
        checkElement.parentElement.classList.remove("task-uncompleted");
        checkElement.parentElement.classList.add("task-completed");
    }
    else {
        checkElement.parentElement.classList.add("task-uncompleted");
        checkElement.parentElement.classList.remove("task-completed");
    }
}

// Remove task row
function RemoveButton(listElement){

    listElement.parentElement.remove();
    taskList.splice(taskList.indexOf(listElement),1);
}

// Toggle classes for darkmode
function ToggleDarkmode(){
    isDarkMode = !isDarkMode;
    Header.classList.toggle("dark-background");
    Header.classList.toggle("light-background");

    selectedBackground.classList.toggle("dark-selected");
    selectedBackground.classList.toggle("light-selected");

    PageTitle.classList.toggle("text-lightmode");
    PageTitle.classList.toggle("text-darkmode");

    document.body.classList.toggle("light-background");
    document.body.classList.toggle("dark-background");

    DarkModeSelection.classList.toggle("light-background");
    DarkModeSelection.classList.toggle("dark-background");

    moonIcon.classList.toggle("invert-filter");
    sunIcon.classList.toggle("invert-filter");

    AddTaskText.classList.toggle("dark-border");
    AddTaskText.classList.toggle("light-border");
    AddTaskText.classList.toggle("text-lightmode");
    AddTaskText.classList.toggle("text-darkmode");
    AddTaskText.classList.toggle("light-background");
    AddTaskText.classList.toggle("dark-background");

    NewTaskButton.classList.toggle("dark-border");
    NewTaskButton.classList.toggle("light-border");
    NewTaskButton.classList.toggle("light-background");
    NewTaskButton.classList.toggle("dark-background");
    NewTaskButton.classList.toggle("text-lightmode");
    NewTaskButton.classList.toggle("text-darkmode");

    // Toggle for all list items
    taskList.forEach(element => {
        element.children[0].classList.toggle("text-darkmode");
        element.children[0].classList.toggle("text-lightmode");

        element.classList.toggle("dark-border");
        element.classList.toggle("light-border");
    });

}