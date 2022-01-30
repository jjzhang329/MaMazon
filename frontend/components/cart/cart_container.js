import { connect } from "react-redux";
import Cart from "./cart";

const mapState = (state)=>({
    cart: state.entities.users[state.session.id].cart
  
})


export default connect(mapState, null)(Cart)