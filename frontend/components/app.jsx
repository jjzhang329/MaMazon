import React from 'react'
import { Route, Switch } from 'react-router';
import LoginFormContainer from './sessionForm/Login_container'
import SignupFormContainer from './sessionForm/Signup_container';
import { AuthRoute } from '../util/route_util';
import Home from './home/home';
import SearchContainer from "./products/search_container"

const App = ()=>(
    <div>
        
        <Switch>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        {/* <Route exact path='/products/baby' component={SearchContainer} />

        <Route exact path='/products/beauty' component={SearchContainer} /> */}
        <Route path='/products' component={SearchContainer}/>
        <Route path='/' component={Home} />  
        </Switch>
        
    </div>
)

export default App;