import { connect } from "react-redux";
import { fetchProduct } from "../../actions/products_actions";
import { addReview } from "../../actions/review_actions";
import ReviewForm from './review_form'

// const getProductId = (url)=>{
//     return parseInt(url.split("/")[2])
// }

const mapState = (state, ownProps) => ({
    
            review: {
                user_id: state.session.id,
                product_id: parseInt(ownProps.match.params.id),
                body: "",
                rating:"",
                },
            product: state.entities.products,
            formType: "Create Review",
            username: state.entities.users[state.session.id].name
        
})

const mapDispatch = (dispatch) => ({
    action: review => dispatch(addReview(review)),
    fetchProduct: productId =>dispatch(fetchProduct(productId))
})
export default connect(mapState, mapDispatch)(ReviewForm)