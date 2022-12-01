function _defineProperty(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},o=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),o.forEach((function(e){_defineProperty(t,e,a[e])}))}return t}var taskInputRef=document.querySelector("#newTask"),listRef=document.querySelector(".todo-list"),clearBtnRef=document.querySelector("#clearList");taskInputRef.addEventListener("keydown",(function(t){if("Enter"===t.key){var e=JSON.parse(localStorage.getItem("todoList"));e||(e=[]),e.push({value:t.target.value,state:"pending"});var a=JSON.stringify(e);localStorage.setItem("todoList",a),t.target.value="",updateTodoList()}})),clearBtnRef.addEventListener("click",(function(t){localStorage.setItem("todoList","[]"),updateTodoList()})),listRef.addEventListener("click",(function(t){"deleteTask"===t.target.className&&deleteTask(t.target.dataset.taskid),"confirmTask"===t.target.className&&completeTask(t.target.dataset.taskid)}));var updateTodoList=function(){var t=JSON.parse(localStorage.getItem("todoList"));listRef.innerHTML="",t.forEach((function(t,e){var a=t.value,o=t.state;listRef.insertAdjacentHTML("beforeend",'\n        <li class="task-item">\n        <span class"'.concat(o,">").concat(a,'</span>\n        <input type="button" class="confirmTask" data-taskID=').concat(e,' value="ready">\n        <input type="button" class="deleteTask" data-taskId=').concat(e,' value="delete">\n        </li>'))}))},deleteTask=function(t){var e=JSON.parse(localStorage.getItem("todoList"));e.splice(t,1),localStorage.setItem("todoList",JSON.stringify(e)),updateTodoList()},completeTask=function(t){var e=JSON.parse(localStorage.getItem("todoList"));e[t]=_objectSpread({},e[t],{state:"done"}),localStorage.setItem("todoList",JSON.stringify(e)),updateTodoList()};updateTodoList();
//# sourceMappingURL=todo_list.e2523460.js.map