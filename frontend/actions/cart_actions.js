import * as CartItemsUtil from "../util/cart_items_util"

export const ADD_TO_CART = 'ADD_TO_CART';
export const RECEIVE_ITEMS = "RECEIVE_ITEMS"
export const UPDATE_CART = 'UPDATE_CART'
export const receiveItems = (items) => ({
    type: RECEIVE_ITEMS,
    items
});
export const addNewItem = (newItem) => ({
    type: ADD_TO_CART,
    newItem
});
export const changeQuantity = (quantity) => ({
    type: UPDATE_CART,
    quantity
});


export const fetchCartItems = () => dispatch =>(
    CartItemsUtil.fetchItems().then((items)=> dispatch(receiveItems(items)))
)
export const addItem = (cartItemObject) => dispatch => (
    CartItemsUtil.createCart(cartItemObject).then((newItem) => dispatch(addNewItem(newItem)))
)
export const updateCart = (cartItemObject) => dispatch => (
    CartItemsUtil.updateCart(cartItemObject).then((quantity) => dispatch(changeQuantity(quantity)))
)

