document.addEventListener("DOMContentLoaded", () => {
   const form = document.querySelector("form");
   form.addEventListener("submit", (e) => {
      e.preventDefault();
      handleToDo(e.target.new_task_description.value);
      form.reset();
   });
});

const handleToDo = (todo) => {
   let li = document.createElement("li");
   li.textContent = todo;
   let btn = document.createElement("button");
   btn.textContent = "Delete";
   document.querySelector("#tasks").appendChild(li);
   li.appendChild(btn);
   btn.addEventListener("click", handleDelete);
};

const handleDelete = (e) => {
   e.target.parentNode.remove();
};
