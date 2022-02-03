import React from 'react'
import StarRating from './starRating';


const Reviews = ({review})=>{
    return(
        <div className='reviews-row'>
            <div className='reviews-user'>
                {review.user.name}
            </div>
            <div className='reviews-rating'>
                <StarRating review = {review.rating}/>
            </div>
            <span className='review-date'>Reviewed in the United States on {review.created_at}</span>
            <div className='reviews-detail'>{review.body}</div>
        </div>
    )
}
export default Reviews;