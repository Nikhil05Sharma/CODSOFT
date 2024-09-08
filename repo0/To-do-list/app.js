let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add(){
    if(inputs.value == ""){
        alert("Please Enter a TASK");
    }else{
        let newTask = document.createElement("ul");
        newTask.innerHTML=`${inputs.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newTask);
        inputs.value="";
        newTask.querySelector("i").addEventListener("click",remove);
        function remove(){
            newTask.remove()
        }
    }
}