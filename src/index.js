import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './components/About';
import Login from './containers/LoginContainer';
import Logout from './containers/LogoutContainer';
import NotFound from './components/NotFound';
import { Provider } from 'react-redux';
import configureStore from './store';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SiteNavbar from './components/SiteNavbar.jsx';
import { authenticated, unauthenticated } from './actions/actionCreators.jsx';
import reportWebVitals from './reportWebVitals';

const store = configureStore()

const jwt = localStorage.getItem('jwt')
if (jwt) {
    store.dispatch(authenticated())
}
else {
    store.dispatch(unauthenticated())
}

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter> 
            <div>
                <SiteNavbar/>
                <Switch>
                    <Route exact path='/' component={App}/>
                    <Route path="/about" component={About}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/logout" component={Logout}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </BrowserRouter>    
    </Provider>,
    document.getElementById('root')
)

reportWebVitals()
