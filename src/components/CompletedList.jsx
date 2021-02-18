import React, { Component } from 'react'
import TaskItem from './TaskItem'

class CompletedList extends Component {

    render() {
        const tasks = this.props.completed;
        console.log('Completed:')
        console.log(tasks)
        return (
            <ul className="taskList">
                {tasks.map((task) => {
                    return (
                        <TaskItem task={task} key={task.id} id={task.id}
                            updateTask={this.props.updateTask}
                            deleteTask={this.props.deleteTask} />
                    )
                })}
            </ul>
        );
    }
}

export default CompletedList;