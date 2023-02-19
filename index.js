
var taskInput = document.querySelector("#task");
var descInput = document.querySelector("#desc");
const addtask = document.querySelector("#add");
const table = document.querySelector("#mytable");

addtask.addEventListener("click", function() {
  let name = taskInput.value;
  let desc = descInput.value;
  if(name==""){
    alert("Task field cannot be empty");
  }
  else{
    let template=`
    <tr id ="checkRow">
      <td>${name}</td>
      <td>${desc}</td>
      <td>
      <i class="check fa-sharp fa-solid fa-circle-check" onclick="line(this)"></i>
      </td>
      <td>
      <i class=" trash fa-solid fa-trash " onclick="remove(this)"></i>
      </td>
    </tr>
  `;
  table.innerHTML += template;
    
  taskInput.value = '';
  descInput.value = '';
  }

});

function line(){
  const row = event.target.parentNode.parentNode;
  row.classList.toggle("completed");
}

function remove(){
    const row = event.target.parentNode.parentNode;
    row.remove();
}


