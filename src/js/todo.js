// import '../css/todo.css';
// Створити ToDo List
//     Має бути поле ввода нового завдання
//     має бути список створених завдань
//     Завдання можна позначити як виконане
//     завдання можна видалити
// Алгоритм
//    1 Зверстати форму для ввода нового завдання (інпут)
//    2 Зверстати список завдань (текстове значення, кнопка видалення, кнопка виконання)
//    3 Повішати подію нажаття на ентер в полі вводу завдання
//    4 Записати нове завдання в локал сторідж по кліку на ентер в полі вводу
//    5 оновити список завдань в HTML
//    6 по кліку на кнопку виконано, закреслити завдання
//    7 по кліку на кнопку видалити, видалити завдання

const taskInputRef = document.querySelector('#newTask');
const listRef = document.querySelector('.todo-list');
const clearBtnRef = document.querySelector('#clearList');


taskInputRef.addEventListener('keydown', e => {
    if(e.key !== 'Enter') return 

    let data = JSON.parse(localStorage.getItem('todoList'));

    if (!data) {
        data = []
    }

    data.push({
        value: e.target.value,
        state: 'pending'
    });

    const jsonData = JSON.stringify(data);

    localStorage.setItem('todoList', jsonData);
    e.target.value = '';
   
    updateTodoList ()

});
clearBtnRef.addEventListener('click', e => {
    localStorage.setItem('todoList', '[]');
    updateTodoList()

}) 
listRef.addEventListener('click', e => {
  if(e.target.className === 'deleteTask') {
    deleteTask(e.target.dataset.taskid) 
  }

  if(e.target.className === 'confirmTask') {
    completeTask(e.target.dataset.taskid)
  }

}) 
const updateTodoList = () => {
    const todoList = JSON.parse(localStorage.getItem('todoList'));
    listRef.innerHTML = '';

    todoList.forEach(({value, state}, index) => {
        listRef.insertAdjacentHTML('beforeend',`
        <li class="task-item">
        <span class"${state}>${value}</span>
        <input type="button" class="confirmTask" data-taskID=${index} value="ready">
        <input type="button" class="deleteTask" data-taskId=${index} value="delete">
        </li>`
        )
   

    })
  }

const deleteTask = (id) => {
   
   const data = JSON.parse(localStorage.getItem('todoList'));
   data.splice(id, 1);
   localStorage.setItem('todoList',JSON.stringify(data))

   updateTodoList()

}
const completeTask = (id) => {
    const data = JSON.parse(localStorage.getItem('todoList'));

    data[id] = {
        ...data[id],
        state: 'done'
    }

    localStorage.setItem('todoList',JSON.stringify(data))
    updateTodoList()

}
updateTodoList ()