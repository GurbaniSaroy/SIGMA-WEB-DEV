let todo = [];

let req = prompt("Please enter your request");

while (true) {
    if (req == "quit") {
        console.log("Quiting app");
        break;
    }

    if (req == "list") {
        console.log("----------------")
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("----------------")
    }
    else if (req == "add") {
        let task = prompt("Please enter the task that you want to add");
        todo.push(task);
        console.log("Task added");
    }
    else if (req == "delete") {
        let idx = prompt("Please enter the task index");
        todo.splice(idx, 1);//splice will delete 1 idx value from the list
        console.log("Task deleted!")
    }
    else {
        console.log("Please enter a valid request");
    }
    req = prompt("Please enter your request");
}