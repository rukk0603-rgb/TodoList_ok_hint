'use strict';

{
  let todos = JSON.parse(localStorage.getItem("unt")) || [];
  const todoList = document.getElementById('todoList');

  function createToDoItem(todo) {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const text = document.createElement('span');
    text.textContent = todo.text;
    li.append(checkbox, text);
    li.dataset.id = todo.id;
    checkbox.addEventListener('change', () => {
      todo.done = checkbox.checked;
      localStorage.setItem('unt', JSON.stringify(todos));
      if (checkbox.checked) {
        text.style.textDecoration = 'line-through';
      } else {
        text.style.textDecoration = 'none';
      }
    });
    text.addEventListener('click', () => {
      if (!todo.done === true) {
        return;
      } else {
      if (!confirm('削除しますか？')) {
        return;
      } else {
        deleteToDo(li)
      }
    }
    });
    
    return li;
  }

  function createToDo() {
    const createBTN = document.getElementById('createBTN');
    createBTN.addEventListener('click', () => {
      const todo = {
        id: '',
        text: '',
        done: false,
      }
      const input = document.createElement('input');
      todoList.appendChild(input);
      input.type = 'text';
      input.placeholder = 'やることを入力';
      input.focus();
      input.addEventListener('change', () => {
        todo.id = Date.now()
        todo.text = input.value;
        todos.push(todo);
        localStorage.setItem('unt', JSON.stringify(todos));
        todoList.removeChild(input);
        todoList.appendChild(createToDoItem(todo));
      });
    });
  }

  function renderToDo() {
    todoList.innerHTML = '';
    todos.forEach(todo => {
      todoList.appendChild(createToDoItem(todo));
    });
  }

  function deleteToDo(li) {
        const updateToDos = todos.filter((todo) => {
          return todo.id !== Number(li.dataset.id);
        });
        todos = updateToDos;
        localStorage.setItem('unt', JSON.stringify(todos));
        renderToDo();
      }


  renderToDo();
  createToDo();
}