import React, { Component } from 'react'
import { Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Alert } from 'react-bootstrap'

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            password_confirmation: ""
        }
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 5 
        && this.state.password_confirmation.length > 5 && this.state.password === this.state.password_confirmation;
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
                    <FormGroup controlId="password_confirmation" bssize="large">
                        <FormLabel>Repeat your password</FormLabel>
                        <FormControl
                            value={this.state.password_confirmation}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </FormGroup>
                    <Button block bssize="large" disabled={!this.validateForm()} type="submit">
                        Sign up
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

export default connect(mapStateToProps)(SignupForm)