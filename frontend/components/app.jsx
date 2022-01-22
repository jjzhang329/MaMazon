import React from 'react'
import { Route } from 'react-router';
import Greetingcontainer from './greeting/Greeting_container';
import LoginFormContainer from './sessionForm/Login_container'
import SignupFormContainer from './sessionForm/Signup_container';
const App = ()=>(
    <div>
        <header>MaMazon
        <Greetingcontainer /> 
        </header>   
        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />
    </div>
)

export default App;