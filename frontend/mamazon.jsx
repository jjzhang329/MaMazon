import React from 'react';
import ReactDOM from 'react-dom'
import configureStore from './store/store';
import Root from './components/root'
import * as SessionApi from './util/session_api_util'

document.addEventListener("DOMContentLoaded", ()=>{
    const root = document.getElementById('root')
    let store
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
 
    window.store = store 
    window.signup = SessionApi.signup
    window.login = SessionApi.login
    window.logout = SessionApi.logout
    
    ReactDOM.render(<Root store={store} />, root)
})

