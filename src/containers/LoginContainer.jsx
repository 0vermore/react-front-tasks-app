import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import LoginForm from '../components/LoginForm'
import { authenticated, unauthenticated } from '../actions/actionCreators'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory();

axios.defaults.baseURL = 'https://tasks-rails-back-api.herokuapp.com';
// axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.timeout = 10000;
axios.defaults.headers = { 'Access-Control-Allow-Origin': '*' }

class LoginContainer extends Component {

    handleSubmit = (params) => {
        let data = {
            email: params.email,
            password: params.password
        }
        console.log('Login data:')
        console.log({ data })
        axios.post('/api/signin', data)
            .then(response => {
                this.props.dispatch(authenticated());
                console.log('Response.data.token:')
                console.log(response.data.token)
                localStorage.setItem('token', response.data.token);
                history.push('/')
                history.go(0)
            })
            .catch(error => {
                console.log(error.message);
                this.props.dispatch(unauthenticated('Login failed'));
            })
    }

    render() {
        return (
            <LoginForm handleSubmit={this.handleSubmit} />
        );
    }
}

export default connect()(LoginContainer)