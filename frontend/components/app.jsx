import React from 'react'
import { Route, Switch } from 'react-router';
import Greetingcontainer from './greeting/Greeting_container';
import LoginFormContainer from './sessionForm/Login_container'
import SignupFormContainer from './sessionForm/Signup_container';
import { AuthRoute } from '../util/route_util';
// 'hello'
const App = ()=>(
    <div>
        <Switch>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <Route path='/' component={Greetingcontainer} />  
        </Switch>
    </div>
)

export default App;