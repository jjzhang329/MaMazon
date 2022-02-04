import React from 'react';
import ReactDOM from 'react-dom'
import configureStore from './store/store';
import Root from './components/root'
import * as reviewActions from './actions/review_actions'

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
    window.addReview = reviewActions.addReview
    window.editReview = reviewActions.editReview
    window.deleteReview = reviewActions.deleteReview
    ReactDOM.render(<Root store={store} />, root)
})

