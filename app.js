let listcontainer = document.getElementById("list-container");
let inputbox = document.getElementById('input-box');

function addTask() {
    if (inputbox.value === '') {
        alert('Empty, add your task');
    } else {
        let task = document.createElement('li');
        task.textContent = inputbox.value;

        let deletebutton = document.createElement('button');
        deletebutton.textContent = 'delete';
        deletebutton.onclick = function() {
            listcontainer.removeChild(task);
        };

        
        task.appendChild(deletebutton);
        listcontainer.appendChild(task);

        inputbox.value = '';
    }
}
