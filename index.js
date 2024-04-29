let taskInput = document.getElementById('taskInput')
let taskAdd = document.getElementById('taskAdd')

let taskList = []

taskAdd.addEventListener('click', function () {
    taskList.push(taskInput.value)
    console.table(taskList)
})
