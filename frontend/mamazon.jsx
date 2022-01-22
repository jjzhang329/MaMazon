import React from 'react';
import ReactDOM from 'react-dom'
import configureStore from './store/store';
import Root from './components/root'
import * as SessionApi from './util/session_api_util'

document.addEventListener("DOMContentLoaded", ()=>{
    const root = document.getElementById('root')
    const store = configureStore()
    
 
    window.store = store 
    window.signUp = SessionApi.signUp
    window.login = SessionApi.logIn
    window.logout = SessionApi.logout
    
    ReactDOM.render(<Root store={store} />, root)
})

