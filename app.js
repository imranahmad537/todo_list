
    function addTask() {
        var taskInput = document.getElementById("taskInput");
        var taskText = taskInput.value.trim();

        if (taskText !== "") {
            var taskList = document.getElementById("tasks");
            var newTask = document.createElement("li");
            newTask.textContent = taskText;

            // Add Edit Button
            var editButton = document.createElement("button");
            editButton.textContent = "Edit";
            editButton.onclick = function() {
                var newText = prompt("Edit task:", taskText);
                if (newText !== null && newText.trim() !== "") {
                    newTask.textContent = newText.trim();
                }
            };
            newTask.appendChild(editButton);

            // Add Delete Button
            var deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.onclick = function() {
                taskList.removeChild(newTask);
            };
            newTask.appendChild(deleteButton);

            taskList.appendChild(newTask);
            taskInput.value = "";
        } else {
            alert("Please enter a task!");
        }
    }
