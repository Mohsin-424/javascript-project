// Javascript programming fot TODO list project
// to add form  REFERENCE
const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
//to  add a list item
const generateTemplate = (todo) => {
  const html = `
<li class="list-group-item d-flex  jutify-content-between align-items-center ">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i> 
    </li>`;
    
  list.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
  // tp prevent overloading we use prevent
  e.preventDefault();
  // to remove extra spaces we need a "trim"
  const todo = addForm.add.value.trim();
  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});

console.log(todo);
//   generateTemplate(todo);


