import * as ReviewUtil from '../util/reviews_util'
export const CREATE_REVIEW = "CREATE_REVIEW"
export const UPDATE_REVIEW = "UPDATE_REVIEW"
export const DELETE_REVIEW = "DELETE_REVIE"

const createReview = (review)=>({
    type: CREATE_REVIEW,
    review 
})
const updateReview = (review) => ({
    type: UPDATE_REVIEW,
    review
})
const destroyReview = (reviewId) => ({
    type: DELETE_REVIEW,
    reviewId
})

export const addReview = (review)=>dispatch=>{
    return ReviewUtil.createReview(review).then(payload => dispatch(createReview(payload)))
}
export const editReview = (review) => dispatch => {
    return ReviewUtil.createReview(review).then(payload => dispatch(updateReview(payload)))
}
export const deleteReview = (reviewId) => dispatch => {
    return ReviewUtil.createReview(reviewId).then(payload => dispatch(destroyReview(payload)))
}