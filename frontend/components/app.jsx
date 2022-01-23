import React from 'react'
import { Route } from 'react-router';
import Greetingcontainer from './greeting/Greeting_container';
import LoginFormContainer from './sessionForm/Login_container'
import SignupFormContainer from './sessionForm/Signup_container';
import { AuthRoute } from '../util/route_util';
const App = ()=>(
    <div>
        <header>MaMazon
        <Greetingcontainer /> 
        </header>   
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
    </div>
)

export default App;