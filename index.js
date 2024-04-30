let taskInput = document.getElementById('taskInput')
let taskAdd = document.getElementById('taskAdd')
let listUL = document.getElementById('listUL')
let indexTaskObj = 0

let taskList = []

taskAdd.addEventListener('click', function () {
    addTaskOnList()
})

function reloadTaskList() {
    let taskListMap = taskList.map(function (task) {
        return `
        <div class="task">

            <p class="taskItem">${task.title}</p>
        
            <button class="taskNoteBtn" value="${taskList.indexOf(task)}" onclick="openNotesTask(this.value)">
                <img class="iconNotes" src="/Icons/iconNotes.svg">
            </button>

            <button class="deleteBtn" value="${taskList.indexOf(task)}" onclick="deleteTask(this.value)">
                <img class="iconDelete" src="/Icons/deleteIcon.svg">
            </button>
            <!-- Notes -->
            <div class="mainTaskContainer">
 
            <div class="titleTaskSect">
                <p class="noteTitleTask">${task.title}</p>
                <button class="noteCloseBtn" value="${taskList.indexOf(task)}" onclick="closeNotesTask(this.value)">
                    <img class="iconCloseTask" src="/Icons/iconClose.svg" alt="CloseNote">
                </button>
            </div>
            </div>
            
        </div>
        `
    })
    taskListMap = taskListMap.join("")
    listUL.innerHTML = taskListMap

    console.log(taskList)

}

/*function addTaskOnList() {
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
}*/

function addTaskOnList() {
    if (taskInput.value === "") {
        window.alert('Insira')
    } else {

        taskList.push({ id: indexTaskObj, })
        taskList[indexTaskObj].title = taskInput.value

        taskInput.value = ""
        taskInput.focus()


        let taskIndex = 0
        taskIndex++
        indexTaskObj++
        reloadTaskList()
        console.table(taskList)
    }
}

function deleteTask(index) {
    delete taskList[index]
    reloadTaskList()

}

// NOTES SECTION

