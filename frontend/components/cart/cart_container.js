import { connect } from "react-redux";
import Cart from "./cart";

const mapState = (state)=>({
   userId: state.entities.users.id
  
})

export default connect(mapState, null)(Cart)