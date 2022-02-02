import React from 'react'
import { Route, Switch } from 'react-router';
import LoginFormContainer from './sessionForm/Login_container'
import SignupFormContainer from './sessionForm/Signup_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Home from './home/home';
import SearchContainer from "./products/search_container"
import ProductShowContainer from './products/product_show_container'
import CheckoutContainer from './cart/checkout_container'
import HeaderContainer from './home/header_container';
import NavBarContainer from './home/nav_bar_container';
import Modal from './modal/modal'


const App = ()=>(
    <div>
        <Modal/>
        <header>
            <HeaderContainer />
            <NavBarContainer />
        </header>
        <Switch>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <ProtectedRoute path='/checkout' component={CheckoutContainer}/>
        <Route path='/products/:id' component={ProductShowContainer} />
        <Route path='/products' component={SearchContainer}/>
        <Route path='/' component={Home} />  
        </Switch>
        
    </div>
)

export default App;