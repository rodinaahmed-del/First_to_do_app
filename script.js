function newtask(){
    let task = document.getElementById("task");
    if(task.value.length < 1){
        alert("Please Enter Task")
    }
    else{
        let newrow = document.createElement("tr");
        let cell1 = document.createElement("th");
        let cell2 = document.createElement("td");
        let cell3 = document.createElement("td");
        let cell4 = document.createElement("td")
        let subcell1 = document.createElement("button")
        let subcell2 = document.createElement("button")
        cell4.appendChild(subcell1)
        cell4.appendChild(subcell2)
        cell1.textContent = "*";
        cell2.textContent = task.value;
        cell3.textContent = "In Progress";
        subcell1.textContent = "DELETE"
        subcell2.textContent = "FINISHED"
        subcell1.style.cssText = `
            background-color: white;
            outline: none;
            border: 1.5px solid rgb(182, 182, 182);
            border-radius: 5px;
            padding: 5px 8px;
            font-size: 14px;
            color: rgb(139, 139, 139);
            margin-right: 5px;
            margin-bottom: 5px;
        `
        subcell2.style.cssText = `
            background-color: white;
            outline: none;
            border: 1.5px solid rgb(182, 182, 182);
            border-radius: 5px;
            padding: 5px 8px;
            font-size: 14px;
            color: rgb(139, 139, 139);
        `
        subcell1.onclick = function(){
            newrow.remove()
        }
        subcell2.onclick = function(){
            cell1.textContent = "✔"
        }
        newrow.appendChild(cell1);
        newrow.appendChild(cell2);
        newrow.appendChild(cell3);
        newrow.appendChild(cell4);
        document.getElementById("bodyid").appendChild(newrow);
        if(document.getElementsByTagName("tbody").length == 1){
            task.value = "";
        };
    }
};
let deleteall = document.getElementById("btn2")
deleteall.onclick = function deleteall(){
    (document.getElementById("bodyid")).remove()
    location.reload()
}



















