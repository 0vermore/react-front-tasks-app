import * as actions from './actionTypes'

export function loadTasks(tasks) {
    return { type: actions.LOAD_TASKS, tasks: tasks }
}

export function addTask(id, title, description, priority, due_date, completed) {
    return {
        type: actions.ADD_TASK, id: id, title: title,
        description: description, priority: priority,
        due_date: due_date, completed: completed
    }
}

export function toggleTask(index, title, description, priority, due_date, completed) {
    return { type: actions.TOGGLE_TASK, index: index, title: title,
        description: description, priority: priority,
        due_date: due_date, completed: completed}
}

export function deleteTask(index) {
    return { type: actions.DELETE_TASK, index: index }
}

//--------------------------------------------

export function authenticated() {
    return { type: actions.AUTHENTICATED }
}

export function unauthenticated(error) {
    return { type: actions.UnAUTHENTICATED, error: error }
}