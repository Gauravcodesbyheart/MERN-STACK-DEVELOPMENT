let todo=[]; 

let req=prompt("Please enter your request");

while(true){
    if (req=="quit"){
        console.log("quitting app");
        break;
    }
    if (req=="list"){
        console.log("-------------");
        for (i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("-------------");
    }
    else if (req=="add"){
        let task=prompt("Please enter the task you want to add");
        todo.push(task);
        console.log("Task added");
    }
    else if (req=="delete"){
        let idx = prompt("Please enter the task index which you want to delete");
        todo.splice(idx,1);
        // splice is used in the case where the slicing is done in the same array not in the separate copy array.
        console.log("task deleted");
    }
    else{
        console.log("Oops! Wrong request");
    }
req=prompt("Please enter your request");  
}