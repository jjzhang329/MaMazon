import React from 'react';
import ReactDOM from 'react-dom'
import configureStore from './store/store';
import Root from './components/root'
import * as actions from './actions/products_actions'
import * as cartActions from './actions/cart_actions'

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
    window.fetchProduct = actions.fetchProduct
    window.fetchCart = cartActions.fetchCartItems
    window.addCart = cartActions.addItem
    window.updateCart = cartActions.updateCart
    ReactDOM.render(<Root store={store} />, root)
})

