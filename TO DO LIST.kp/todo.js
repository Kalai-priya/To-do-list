const inputbox = document.getElementById("input-box");
const listelements = document.getElementById("list elements");

function addTask(){
    if(inputbox.value == ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listelements.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = '';
    saveData();
}
listelements.addEventListener("click",function(e)
    {
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);
function saveData(){
    localStorage.setItem("data",listelements.innerHTML);
}
function showData(){
    listelements.innerHTML = localStorage.getItem("data");
}
showData();