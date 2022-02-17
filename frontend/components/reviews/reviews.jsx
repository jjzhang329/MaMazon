import React from 'react'
import {MdOutlineStar} from 'react-icons/md';


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
            <div className='reviews-rating-stars'>
                <div className="rating-stars">
                    {[...Array(5)].map((start, idx) => {
                        const ratingValue = idx + 1
                        return (
                            <label key={idx}>
                                <MdOutlineStar className="stars" size={15}
                                    color={ratingValue <= review.rating ? "#fea41d" : "rgb(234,237,237)"} />
                            </label>
                        )
                    })}
                </div>
                <span className='review-headline'>{review.headline}</span>
            </div>
            <span className='review-date'>Reviewed in the United States on {date}</span>
            <div className='reviews-detail'>{review.body}</div>
            
        </div>
    )
}
export default Reviews;