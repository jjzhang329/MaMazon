import React from 'react'
import { Route, Switch } from 'react-router';
import LoginFormContainer from './sessionForm/Login_container'
import SignupFormContainer from './sessionForm/Signup_container';
import { AuthRoute } from '../util/route_util';
import Header from './home/header';
// 'hello'
const App = ()=>(
    <div>
        <Switch>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <Route path='/' component={Header} />  
        </Switch>
    </div>
)

export default App;