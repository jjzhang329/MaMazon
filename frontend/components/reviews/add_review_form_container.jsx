import { connect } from "react-redux";
import { fetchProduct } from "../../actions/products_actions";
import { addReview } from "../../actions/review_actions";
import ReviewForm from './review_form'

const mapState = (state, ownProps) => ({
    
            review: {
                user_id: state.session.id,
                product_id: parseInt(ownProps.match.params.id),
                body: "",
                rating: 0,
                headline: ""
                },
            product: state.entities.products,
            formType: "Create Review",
            username: state.entities.users[state.session.id].name,
            errors: state.errors.review
        
})

const mapDispatch = (dispatch) => ({
    action: review => dispatch(addReview(review)),
    fetchProduct: productId =>dispatch(fetchProduct(productId))
})
export default connect(mapState, mapDispatch)(ReviewForm)