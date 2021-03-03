import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { loadTasks, addTask, updateTask, deleteTask } from '../actions/actionCreators'
import TaskList from '../components/TaskList'
import ModalContainerCreate from './ModalContainerCreate'
import Loader from '../components/Loader'

class TasksContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true
		};
	}

	getAuthToken() {
		var config = {
			baseURL: 'https://tasks-rails-back-api.herokuapp.com',
			// baseURL: 'http://localhost:4000',
			headers: { 'Authorization': localStorage.getItem('token') }
		}
		return config;
	}

	getTasks() {
		var config = this.getAuthToken();

		axios.get('/api/tasks', config)
			.then(response => {
				console.log(response.data)
				this.props.dispatch(loadTasks(response.data));
				this.setState({ loading: false });
			})
			.catch(error => console.log(error.message))
	}

	createTask = ({ title, description, priority, due_date, completed }) => {

		console.log('CreateTaskValues');
		console.log(title, description, priority, due_date, completed);
		var config = this.getAuthToken();
		axios.post('/api/tasks', {
			task: {
				title: title, description: description,
				priority: priority, due_date: due_date, completed: completed
			}
		}, config)
			.then(response => {
				console.log('response addtask');
				console.log(title, description, priority, due_date, completed);
				this.props.dispatch(addTask(response.data.id, response.data.title,
					response.data.description, response.data.priority,
					response.data.due_date, response.data.completed))
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
				console.log(params.id, params.title, params.description, params.priority, params.due_date, params.completed);
				this.props.dispatch(updateTask(params.id, params.title, params.description,
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
		const completedTasks = []
		const uncompletedTasks = []

		for (let i = 0; i < this.props.tasks.length; i++) {
			const task = this.props.tasks[i];
			if (task.completed) completedTasks.push(task)
			else uncompletedTasks.push(task)
		}
		console.log('@Tasks');
		console.log({ completedTasks, uncompletedTasks });

		return (
			<div className="container">
				<div className="header">
					<h1>Task List</h1>
				</div>
				<ModalContainerCreate triggerText={'Create new task'} onSubmit={this.createTask} />
				{ this.state.loading ? <Loader /> : (
					<div className="listWrapper">
						<TaskList tasks={uncompletedTasks}
							updateTask={this.updateTask}
							deleteTask={this.deleteTask} />
						<hr />
						<TaskList tasks={completedTasks}
							updateTask={this.updateTask}
							deleteTask={this.deleteTask} />
					</div>
				)
				}
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