import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


class SiteNavbar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand><Link to="/">Task Management</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Navbar.Brand><Link to="/about">About</Link></Navbar.Brand>
                        {this.props.auth.authenticated === false &&
                            <Navbar.Brand><Link to="/signup">Signup</Link></Navbar.Brand>
                        }
                        {this.props.auth.authenticated === false &&
                            <Navbar.Brand><Link to="/login">Login</Link></Navbar.Brand>
                        }
                        {this.props.auth.authenticated === true &&
                            <Navbar.Brand><Link to="/logout">Logout</Link></Navbar.Brand>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps)(SiteNavbar)