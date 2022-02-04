import React from 'react'
import StarRating from './starRating';


const Reviews = ({review})=>{
    let date = Date.parse(review.createdAt)
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    date = new Intl.DateTimeFormat('en-US', options).format(date)
    date = date.split(",").slice(1)
    return(
        <div className='reviews-row'>
            <div className='reviews-user'>
                <div className='review-form-useravatar'>
                    <img src={window.avatarURL}></img>
                </div>
                <div className="review-username">{review.user.name}</div>
            </div>
            <div className='reviews-rating'>
                <StarRating presetRating={review.rating} size={18}/>
            </div>
            <span className='review-date'>Reviewed in the United States on {date}</span>
            <div className='reviews-detail'>{review.body}</div>
        </div>
    )
}
export default Reviews;