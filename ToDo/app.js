const ip_bx=document.getElementById("input-tasks");
const list1=document.getElementById("listoftasks");
function taskadder(){
    if(ip_bx.value ===''){
        alert("Write A Task First In Order To Add In To-Do");
    }
    else{
        let l1=document.createElement("li");
        l1.innerHTML=ip_bx.value;
        list1.appendChild(l1);
        let spn=document.createElement("span");
        spn.innerHTML="\u00d7";
        l1.appendChild(spn);
    }
    ip_bx.value="";
    saveData();
}
list1.addEventListener("click",function(eventt){
    if(eventt.target.tagName==="LI"){
        eventt.target.classList.toggle("checked");

    }
    else if(eventt.target.tagName ==="SPAN"){
        eventt.target.parentElement.remove();
    }
},false);

function saveData(){
    localStorage.setItem("data",list1.innerHTML);
}

function showTasks(){
    list1.innerHTML=localStorage.getItem("data");
}
showTasks();