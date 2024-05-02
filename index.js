let taskInput = document.getElementById('taskInput')
let taskAdd = document.getElementById('taskAdd')
let listUL = document.getElementById('listUL')
let taskNotesContainer = document.getElementById('taskNotesContainer')

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
        
            <button class="taskNoteBtn" value="${taskList.indexOf(task)}" onclick="openNote(this.value)">
                <img class="iconNotes" src="Icons/iconNotes.svg">
            </button>

            <button class="deleteBtn" value="${taskList.indexOf(task)}" onclick="deleteTask(this.value)">
                <img class="iconDelete" src="Icons/deleteIcon.svg">
            </button>
            <!-- Notes -->
            <div class="mainTaskContainer" id="taskId${taskList.indexOf(task)}" >
 
            <div class="titleTaskSect">
                <input class="noteTitleTask" value="${task.title}" spellcheck="false" id="taskTitle${taskList.indexOf(task)}">
                <!--<p class="noteTitleTask">${task.title}</p>-->
                <button class="noteCloseBtn" value="${taskList.indexOf(task)}" onclick="closeNotesTask(this.value)">
                    <img class="iconCloseTask" src="Icons/iconClose.svg" alt="CloseNote">
                </button>
            </div>
            <textarea name="noteTextTask" id="task${taskList.indexOf(task)}" class="noteTextTask" rows="10" spellcheck="false" placeholder="Add Your Note">${task.text}</textarea>

            </div>
            
        </div>
        `
    })
    taskListMap = taskListMap.join("")
    listUL.innerHTML = taskListMap
    console.table(taskList)
}

function addTaskOnList() {
    if (taskInput.value === "") {
        window.alert('Insira')
    } else {

        taskList.push({ id: indexTaskObj, })
        taskList[indexTaskObj].title = taskInput.value
        taskList[indexTaskObj].text = ""

        taskInput.value = ""
        taskInput.focus()


        let taskIndex = 0
        taskIndex++
        indexTaskObj++
        reloadTaskList()

    }
}

function deleteTask(index) {
    delete taskList[index]
    reloadTaskList()

}



// NOTES SECTION

function openNote(index) {
    let id = `taskId${index}`
    let currentNoteBlock = document.querySelector(`div#${id}`)
    currentNoteBlock.classList.add("active")
}

function closeNotesTask(index) {
    let currentNote = document.getElementById(`task${index}`).value;
    taskList[index].text = currentNote

    let id = `taskId${index}`
    let currentNoteBlock = document.querySelector(`div#${id}`)
    currentNoteBlock.classList.remove("active")

    let currentNoteTitle = document.getElementById(`taskTitle${index}`).value
    taskList[index].title = currentNoteTitle

    reloadTaskList()
    console.table(taskList)

}
