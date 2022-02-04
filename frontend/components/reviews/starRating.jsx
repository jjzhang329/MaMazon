import React from 'react'
import { MdOutlineStar} from 'react-icons/md';
import { useState } from 'react';
const StarRating = ({updateStars, presetRating, size})=>{
    
    presetRating ? presetRating : null
    
    const [rating, setRating] = useState(presetRating)
    const [hover, setHover] = useState(null)
    const updateRating = (ratingValue) => {
        setRating(ratingValue);
        updateStars(ratingValue);
    }

    return (
        <div className='rating-stars'>
            {[...Array(5)].map((star, idx) => {    
                const ratingValue = idx + 1; 
                return (
                    <label key={idx}>
                        <input type='radio' name='rating' value={ratingValue}
                            onClick={() => updateRating(ratingValue)}
                            />
                        <MdOutlineStar className='stars' 
                            size={size ? size : 40}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                            color={ratingValue <= (hover || rating) ? "#fea41d" : "rgb(234,237,237)"} />
                    </label>
                )
            
            })}    
        </div>
    )
}
export default StarRating;