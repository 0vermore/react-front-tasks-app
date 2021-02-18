import React, { Component } from 'react'
import ModalContainer from '../containers/ModalContainer'

class TaskItem extends Component {
    updateTask = (e, id, title, description, priority, due_date) => {
        this.props.updateTask({ id: id, title: title, 
            description: description, priority: priority, 
            due_date: due_date, completed: e.target.checked })
            console.log('changes in checkbox')
    }

    deleteTask = (id) => {
        this.props.deleteTask(id)
    }

    render() {
        const task = this.props.task;
        console.log('TaskItem:')
        console.log(task.id, task.title, task.completed)
        return (
            <li className="task" key={task.id} id={task.id}>
                <input className="taskCheckbox" type="checkbox"
                    checked={task.completed} onChange={(e) => this.updateTask(e, task.id, task.title, task.description,
                    task.priority, task.due_date)} />
                <ModalContainer className="taskLabel" task={task} triggerText={task.title} onSubmit={this.props.updateTask}/>
                <span className="deleteTaskBtn" onClick={(e) => this.deleteTask(task.id)}>
                    x
                </span>
            </li>
        );
    }
}

export default TaskItem;