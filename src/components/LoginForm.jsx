import React, { Component } from 'react'
import { Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Alert } from 'react-bootstrap'

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }
    
    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 5;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.handleSubmit({email: this.state.email, password: this.state.password})
    }

    render() {
        return (
            <div className="Login">                
                <form onSubmit={this.handleSubmit}>
                    {this.props.auth.error !== undefined && 
                        <FormGroup bsSize="large">
                            <Alert bsStyle="danger">
                                <strong>{this.props.auth.error}</strong>
                            </Alert>                        
                        </FormGroup>
                    }
                    <FormGroup controlId="email" bssize="large">
                        <FormLabel>Email</FormLabel>
                        <FormControl
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bssize="large">
                        <FormLabel>Password</FormLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </FormGroup>
                    <Button block bssize="large" disabled={!this.validateForm()} type="submit">
                        Login
                    </Button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth
	}
}

export default connect(mapStateToProps)(LoginForm)