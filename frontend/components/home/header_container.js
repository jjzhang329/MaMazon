import {connect} from 'react-redux';
import Header from './header';

const mapState = (state)=>{
    const currentUser = state.entities.users[state.session.id]
   return {
       cartCount: currentUser ? currentUser.cart.length : 0}
}

export default connect(mapState, null)(Header)