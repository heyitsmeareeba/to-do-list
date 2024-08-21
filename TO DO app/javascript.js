function toggleInput() {
    var taskInput = document.getElementById("task-input");
    var taskListContainer = document.getElementById("task-list-container");
    
    taskInput.style.display = "block";
    document.getElementById("add").style.display = "none";
}

function addTask() {
    var input = document.getElementById("todo-input");
    var inputValue = input.value.trim();
    
    if (inputValue === "") {
        alert("Please enter a task!");
        return;
    }
   var checkBtn = document.createElement("input");
    checkBtn.type = "checkbox";
    checkBtn.className = "check-btn";
    checkBtn.onclick = function() {
        if (checkBtn.checked) {
            listItem.style.textDecoration = "line-through";
        } else {
            listItem.style.textDecoration = "none";
        }
    };
    var listItem = document.createElement("li");
    var textNode = document.createTextNode(inputValue);
      listItem.appendChild(checkBtn);
    listItem.appendChild(textNode);

    var delBtn = document.createElement("span");
    delBtn.innerHTML = "&#10006;";
    delBtn.className = "del-btn";
    delBtn.onclick = function() {
        listItem.remove();
    };

 

  
    listItem.appendChild(delBtn);

    document.getElementById("todo-list").appendChild(listItem);

    input.value = "";
    document.getElementById("task-list-container").style.display = "block";
}
