let taskInput = document.getElementById('taskInput')
let taskAdd = document.getElementById('taskAdd')
let listUL = document.getElementById('listUL')

let taskList = []

taskAdd.addEventListener('click', function () {
    addTaskOnList()
})

function reloadTaskList() {
    let taskListMap = taskList.map(function (task) {
        return `
        <div class="task">
            <p class="taskItem">${task}</p>
            <button class="deleteBtn" value="${taskList.indexOf(task)}" onclick="deleteTask(this.value)">
            <img class="iconDelete" src="/Icons/deleteIcon.svg">
            </button>
            
        </div>
        `
    })
    taskListMap = taskListMap.join("")
    listUL.innerHTML = taskListMap

    console.log(taskList)
}

function addTaskOnList() {
    if (taskInput.value === "") {
        window.alert('Insira')
    } else {
        taskList.push(taskInput.value)

        taskInput.value = ""
        taskInput.focus()


        let taskIndex = 0
        taskIndex++
        reloadTaskList()
    }
}

function deleteTask(index) {
    delete taskList[index]
    reloadTaskList()
}