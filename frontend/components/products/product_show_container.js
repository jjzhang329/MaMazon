import { connect } from 'react-redux';
import ProductShow from './product_show';
import {fetchProduct} from "../../actions/products_actions"
import {addItem} from '../../actions/cart_actions'

const mapStateToProps = (state, {match}) => ({
    product: state.entities.products[match.params.id],
    cart: state.entities.users[state.session.id].cart
});

const mapDispatchToProps = (dispatch)=>({
    fetchProduct: (id)=>dispatch(fetchProduct(id)),
    addToCart: (newItem)=>dispatch(addItem(newItem))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);
