import * as ReviewUtil from '../util/reviews_util'
export const CREATE_REVIEW = "CREATE_REVIEW"
export const UPDATE_REVIEW = "UPDATE_REVIEW"
export const DELETE_REVIEW = "DELETE_REVIE"

const createReview = (payload)=>({
    type: CREATE_REVIEW,
    payload
})
const updateReview = (payload) => ({
    type: UPDATE_REVIEW,
    payload
})
const destroyReview = (payload) => ({
    type: DELETE_REVIEW,
    payload
})

export const addReview = (review)=>dispatch=>{
    return ReviewUtil.createReview(review).then(payload => dispatch(createReview(payload)))
}
export const editReview = (review) => dispatch => {
    return ReviewUtil.updateReview(review).then(payload => dispatch(updateReview(payload)))
}
export const deleteReview = (reviewId) => dispatch => {
    return ReviewUtil.deleteReview(reviewId).then(payload => dispatch(destroyReview(payload)))
}