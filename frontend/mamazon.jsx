import React from 'react';
import ReactDOM from 'react-dom'
import configureStore from './store/store';
import Root from './components/root'
import * as reviewActions from './actions/review_actions'

document.addEventListener("DOMContentLoaded", ()=>{
    const root = document.getElementById('root')
    let store
    let filter = localStorage.getItem('filter') 
    // 
    if(!filter){
        localStorage.setItem('filter', JSON.stringify({ 'department': '' }))
    }

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
 
    
 
    ReactDOM.render(<Root store={store} />, root)
})

