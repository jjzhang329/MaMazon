import React from 'react'
import {MdOutlineStar} from 'react-icons/md';
import { NavLink } from 'react-router-dom';


const Reviews = ({review, currentUser, productId, deleteReview})=>{
    let date = review.created_at
    date = date.slice(0, 10)
    
    const editable = ()=>{
        if(currentUser){
            if(currentUser.id === review.user.id){
                return true
            }
            
        }
        return false
    }

    const handleDelete =()=>{
      
        deleteReview(review.id)
      
    }
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
            {editable() && <div className='reviews-edit'>
                <NavLink to={`/products/${productId}/reviews/edit`}>
                    <button className='edit'>Edit Review</button>
                </NavLink>
                    <button className='delete' onClick={handleDelete}>Delete Review</button>
                </div>
            }
            
        </div>
    )
}
export default Reviews;