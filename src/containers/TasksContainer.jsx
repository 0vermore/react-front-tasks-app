import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { loadTasks, addTask, toggleTask, deleteTask } from '../actions/actionCreators'
import TaskList from '../components/TaskList'
import ModalContainerCreate from './ModalContainerCreate'

class TasksContainer extends Component {

	getAuthToken() {
		var config = {
			baseURL: 'http://localhost:4000',
			headers: { 'Authorization': 'Bearer' + localStorage.getItem('jwt') }
		}
		return config;
	}

	getTasks() {
		var config = this.getAuthToken();

		axios.get('/api/tasks', config)
			.then(response => {
				this.props.dispatch(loadTasks(response.data));
			})
			.catch(error => console.log(error.message))
	}

	createTask = ({ title, description, priority, due_date, completed, user_id }) => {

		console.log('CreateTaskValues');
		console.log(title, description, priority, due_date, completed, user_id);
		var config = this.getAuthToken();
		axios.post('/api/tasks', {
			task: {
				title: title, description: description,
				priority: priority, due_date: due_date, completed: completed, user_id: user_id
			}
		}, config)
			.then(response => {
				console.log('response addtask');
				console.log(title, description, priority, due_date, completed, user_id);
				this.props.dispatch(addTask(response.data.id, response.data.title,
					response.data.description, response.data.priority,
					response.data.due_date, response.data.completed, response.data.user_id))
			})
			.catch(error => console.log(error))

	}

	updateTask = (params) => {
		var config = this.getAuthToken();
		console.log('UpdateTaskParams')
		console.log(params)

		axios.put(`/api/tasks/${params.id}`, {
			task: {
				title: params.title, description: params.description,
				priority: params.priority, due_date: params.due_date, completed: params.completed
			}
		}, config)
			.then(response => {
				console.log('response updatetask');
				console.log(params.title, params.description, params.priority, params.due_date, params.completed);
				this.props.dispatch(toggleTask(params.id, params.title, params.description,
					params.priority, params.due_date, params.completed))
			})
			.catch(error => console.log(error))
	}

	deleteTask = (id) => {
		var config = this.getAuthToken();

		axios.delete(`/api/tasks/${id}`, config)
			.then(response => {
				this.props.dispatch(deleteTask(id))
			})
			.catch(error => console.log(error))
	}

	componentDidMount() {
		this.getTasks();
	}


	render() {
		return (
			<div className="container">
				<div className="header">
					<h1>Task List</h1>
				</div>
				<ModalContainerCreate triggerText={'Create new task'} onSubmit={this.createTask} />
				<TaskList tasks={this.props.tasks}
					updateTask={this.updateTask}
					deleteTask={this.deleteTask} />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		tasks: state.tasks
	}
}

export default connect(mapStateToProps)(TasksContainer)