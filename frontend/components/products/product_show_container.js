import { connect } from 'react-redux';
import ProductShow from './product_show';
import {fetchProduct} from "../../actions/products_actions"
import {addItem, updateCart} from '../../actions/cart_actions'
import {openModal} from '../../actions/modal_actions'

const mapStateToProps = (state, {match}) => {
    const currentUser = state.entities.users[state.session.id]
    const product = state.entities.products[match.params.id]
    return {
        product: product,
        cart: currentUser ? currentUser.cart : [],
    }     
};

const mapDispatchToProps = (dispatch)=>({
    fetchProduct: (id)=>dispatch(fetchProduct(id)),
    addToCart: (newItem)=>dispatch(addItem(newItem)),
    updateCart: (item)=>dispatch(updateCart(item)),
    openModal: (modal)=>dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);
