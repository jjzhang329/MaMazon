import React from 'react'
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchProduct } from "../../actions/products_actions";
import { addReview } from "../../actions/review_actions";
import { editReview } from "../../actions/review_actions";
import ReviewForm from './review_form'

const EditReviewForm = (props)=>{
    const { action, formType, username, product, review, fetchProduct} = props
   
    const[editReview, setEditReview] = useState(review)
    useEffect(()=>{
        if (product[props.match.params.id]) {
           
            product[props.match.params.id].reviews.forEach(doc => {
                if (doc.user.id === review.user_id) {
                    setEditReview({id: doc.id, body: doc.body, headline: doc.headline, rating: doc.rating })
                }
               
            })
          

        }
        
    },[product])
    let currentReview= Object.assign(review, editReview)
    return(  
              
       <div>
           <ReviewForm
                action={action}
                review={currentReview}
                product={product}
                formType={formType}
                username={username}
                fetchProduct={fetchProduct}
            />
       </div>
    )

}


const mapState = (state, ownProps) => {
    
    return {
        review: {
            user_id: state.session.id,
            product_id: parseInt(ownProps.match.params.id),
            body: "",
            rating: 0,
            headline: ""
        },
        product: state.entities.products,
        formType: "Update Review",
        username: state.entities.users[state.session.id].name
    }      
        
}

const mapDispatch = (dispatch) => ({
    action: review => dispatch(editReview(review)),
    fetchProduct: productId =>dispatch(fetchProduct(productId))
})

export default connect(mapState, mapDispatch)(EditReviewForm)