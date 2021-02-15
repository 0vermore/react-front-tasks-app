import { Component } from 'react'
import { connect } from 'react-redux'
import { unauthenticated } from '../actions/actionCreators'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

class LogoutContainer extends Component {
    componentWillMount() {
        this.props.dispatch(unauthenticated());
        localStorage.removeItem('jwt');
        history.push('/')
        history.go(0)
    }

    render() {
        return null;
    }
}

export default connect()(LogoutContainer)