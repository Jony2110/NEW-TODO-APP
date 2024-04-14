const form = document.querySelector('#todoForm');
const input = document.querySelector('#todoInput');
const list = document.querySelector('#todoList');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const text = input.value.trim();
  if (text !== '') {
    addTodoItem(text);
    input.value = '';
  }
});

function addTodoItem(text) {
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${text}</span>
    <div>
      <button class="edit">edit</button>
      <button class="delete">delet</button>
      <button class="complete">complete</button>
    </div>
  `;
  list.appendChild(li);
}

list.addEventListener('click', function(e) {
  const target = e.target;
  if (target.classList.contains('delete')) {
    target.closest('li').remove();
  } else if (target.classList.contains('edit')) {
    const li = target.closest('li');
    const span = li.querySelector('span');
    const newText = prompt('Edit task:', span.textContent);
    if (newText !== null) {
      span.textContent = newText.trim();
    }
  } else if (target.classList.contains('complete')) {
    const li = target.closest('li');
    li.classList.toggle('completed');
  }
});