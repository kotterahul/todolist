let listcontainer=document.getElementById("list-container")
let inputbox=document.getElementById('input-box')

function addTask(){
    if(inputbox.value==='')
    {
        alert('empty,add your task');
    }
    else{
        let task=document.createElement('li');
        task.textContent=inputbox.value;
        listcontainer.appendChild(task);

        let span=document.createElement('span')
        span.textContent='u00d7';
    }
    inputbox.value='';
}