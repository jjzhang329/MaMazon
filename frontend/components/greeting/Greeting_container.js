import Greeting from './Greeting'
import { connect } from "react-redux";
import { logout } from '../../actions/session_actions';

const mapState = ({ entities, session }) => ({
    currentUser: entities.users[session.id]
})

const mapDispatch = (dispatch) => ({
    logout: () => dispatch(logout())
})

export default connect(mapState, mapDispatch)(Greeting)