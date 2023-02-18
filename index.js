var taskInput = document.querySelector("#task");
var descInput = document.querySelector("#desc");
const addtask = document.querySelector("#add");
const table = document.querySelector("#mytable");

addtask.addEventListener("click", function() {
  let name = taskInput.value;
  let desc = descInput.value;
  let template=`
    <tr >
      <td>
        <div class="form-check" id="checkbox" >
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        </div>
      </td>
      <td>${name}</td>
      <td>${desc}</td>
      <td>
        <button class="delete btn btn-danger" onclick="remove(this)">Delete</button>
      </td>
    </tr>
  `;
  table.innerHTML += template;
});






function remove(button){
    const row = event.target.parentNode.parentNode;
    row.remove();
}


