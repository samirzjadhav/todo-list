const push = document.querySelector("#push");
const input = document.querySelector("#newtask input");
const task = document.querySelector("#task");

push.onclick = () => {
  if (input.value.length === 0) {
    alert("Pleasecurrent_tasks inter a value");
  } else {
    task.innerHTML += `
  <div id="task">
    <div id="task-box">
      <p>${input.value}</p>
      <button class="delete">
        <i class="far fa-trash-alt"></i>
      </button>
    </div>
  </div>
  
    `;
  }

  let del = document.querySelectorAll(".delete");
  for (let i = 0; i < del.length; i++) {
    del[i].onclick = function () {
      this.parentNode.remove();
    };
  }
};
