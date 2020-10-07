var taskcounter = 0;
window.addEventListener("load", function () {
    document.querySelector(".hinzufügen").addEventListener("click", AddTaskText);
    document.querySelector(".number").addEventListener("click", AddTaskText);
});

function AddTaskText() {
    var newtask = document.querySelector(".neu").value;
    addTaskToList(newtask); 
    var element = document.querySelector(".Rahmen");
    var numberofChildren = element.children.length;
    taskcounter = numberofChildren;
    document.querySelector(".nummer").innerHTML = numberofChildren + " Aufgaben gesamt";
}

function addTaskToList(newTaskValue) {
    var addElement = document.createElement("div");
    addElement.setAttribute("class", "Template");
    addElement.setAttribute("id", "TaskId" + taskcounter);
    var myHtmlTemplate = "";
    myHtmlTemplate += "<button onclick=\"CheckedButton(this)\" class=\"far fa-circle checkbox\" id=\"circle" + taskcounter + "\"></button>";
    myHtmlTemplate += "<input class=\"firsttask\" id=\"firsttask" + taskcounter + "\" value=\"" + newTaskValue + "\" ></input>";
    myHtmlTemplate += "<button onclick=\"DeleteTaskText(this)\" class=\"far fa-trash-alt trash\" id=\"delete" + taskcounter + "\"></button>";
    addElement.innerHTML = myHtmlTemplate;
    document.querySelector(".Rahmen").appendChild(addElement);
}

function DeleteTaskText(ClickedTrash) {
    ClickedTrash.parentElement.remove();
    taskcounter--;
    var element = document.querySelector(".Rahmen");
    var numberofChildren = element.children.length;
    document.querySelector(".nummer").innerHTML = numberofChildren + " Aufgaben gesamt";
}

function CheckedButton(ClickedButton) {
    if (ClickedButton.classList.contains("fa-circle")) {
        ClickedButton.classList.remove("fa-circle");
        ClickedButton.classList.add("fa-check-circle");
    }
    else {
        ClickedButton.classList.remove("fa-check-circle");
        ClickedButton.classList.add("fa-circle");
    }
}
