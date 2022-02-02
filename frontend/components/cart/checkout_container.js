import { connect } from "react-redux";
import CheckOut from "./checkout";
import {fetchCartItems} from '../../actions/cart_actions'

const mapState = (state)=>{
   const currentUserId = state.session.id
    return{
        cartItems: state.entities.users[currentUserId].cart,
        products: Object.values(state.entities.products),
        cartCount: state.entities.users[currentUserId].cartCount
    }
}
const mapDispatchToProps = (dispatch) => ({
    fetchCartItems: () => dispatch(fetchCartItems()),
    updateCart: (item) => dispatch(updateCart(item))
});

export default connect(mapState, mapDispatchToProps)(CheckOut)