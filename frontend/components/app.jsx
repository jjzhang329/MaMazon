import React from 'react'
import { Route, Switch } from 'react-router';
import LoginFormContainer from './sessionForm/Login_container'
import SignupFormContainer from './sessionForm/Signup_container';
import { AuthRoute } from '../util/route_util';
import Home from './home/home';

const App = ()=>(
    <div>
        <Switch>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <Route path='/' component={Home} />  
        </Switch>
    </div>
)

export default App;