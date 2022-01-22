import Greeting from './Greeting'
import { connect } from "react-redux";

const mapState = ({ entities, session }) => ({
    currentUser: entities.users[session.id]
})

const mapDispatch = (dispatch) => ({
    logout: () => dispatch(logout())
})

export default connect(mapState, mapDispatch)(Greeting)