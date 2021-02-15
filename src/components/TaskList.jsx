import React, { Component } from 'react'
import TaskItem from './TaskItem'

class TaskList extends Component {

    render() {
        const tasks = this.props.tasks;
        return (
            <div className="listWrapper">
                <ul className="taskList">
                    {tasks.map((task) => {
                        return (
                            <TaskItem task={task} key={task.id} id={task.id}
                                updateTask={this.props.updateTask}
                                deleteTask={this.props.deleteTask} />
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default TaskList;