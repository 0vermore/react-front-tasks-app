import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import SignupForm from '../components/SignupForm'
import { authenticated, unauthenticated } from '../actions/actionCreators'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory();

axios.defaults.timeout = 10000;
axios.defaults.headers = { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' }

class SignupContainer extends Component {
    handleSubmit = (params) => {
        let data = {}

        const props = new URLSearchParams({
            email: params.email,
            password: params.password,
            password_confirmation: params.password_confirmation
        }).toString();

        const url = "http://localhost:4000/api/signup?" + props;

        axios.post(url, data)
            .then(response => {
                if (response.status == '201') {
                    history.push('/')
                    history.go(0)
                    console.log('Account created successufuly!')
                }
                else{
                    console.log('Response is not ok(');
                }
            })
            .catch(error => {
                console.log(error.message);
                this.props.dispatch(unauthenticated('Signup failed'));
            })
    }

    render() {
        return (
            <SignupForm handleSubmit={this.handleSubmit} />
        );
    }
}

export default connect()(SignupContainer)