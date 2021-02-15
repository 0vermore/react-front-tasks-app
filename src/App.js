import React, { Component } from 'react'
import './App.css'
import TasksContainer from './containers/TasksContainer'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import 'bootstrap/js/dist/alert'

class App extends Component {
    loginAlert() {
        return(
            <div className="alert alert-warning fade show" role="alert">
                Please, log in to use the app.{' '}
                <Link to="/login">Login</Link>
            </div>
        );    
    }

    successMessage() {
        return (
            <div className="alert alert-success alert-dismissible fade show" role="alert">
                Welcome to the app!{' '}
                <Link to="/logout">logout</Link>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        );         
    }    

    render() {
        if (this.props.auth.authenticated === false) {
            return <this.loginAlert />;
        }

        return (
            <div>
                <this.successMessage />
                <TasksContainer />
            </div>
        );        
    }
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth
	}
}

export default connect(mapStateToProps)(App)