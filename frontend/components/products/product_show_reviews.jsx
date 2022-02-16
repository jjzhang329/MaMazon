import {connect} from "react-redux"
import React from 'react';
import Review from '../reviews/reviews'
import StarRating from '../reviews/starRating';
import { Link } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";

const ProductShowReview=({reviews, productId})=>{
    let averageRating = 0
    let count = 0
    let value5 = 0
    let value4 = 0
    let value3 = 0
    let value2 = 0
    let value1 = 0    
    if(reviews){
       let total = 0;
        let count5 = 0
        let count4 = 0
        let count3 = 0
        let count2 = 0
        let count1 = 0
       count = reviews.length
        reviews.forEach(review=> {
            total += Math.floor(review.rating)

            if (review.rating === 5) {count5 += 1; }        
            else if(review.rating === 4){count4 += 1;}                  
            else if (review.rating === 3){ count3 += 1; }                    
            else if (review.rating === 2) { count2 += 1; }       
            else if (review.rating === 1) { count1 += 1; }
             
        })
 
        averageRating = Math.floor(total / count)
        value5 = Math.floor((count5 / count)*100)
        value4 = Math.floor((count4 / count)*100)
        value3 = Math.floor((count3 / count)*100)
        value2 = Math.floor((count2 / count)*100)
        value1 = Math.floor((count1 / count)*100)
    }
    // const updateRatingBars=(bar, value)=>{
    // bar.querySelector(".bar__fill").style.width = `${value}%`
    // bar.querySelector("bar__text").textContent = `${value}%`
    // }

    return(
       
        <div className='reviews-container'>
            <div className='reviews-left'>
                <div className='reviews-left-inner'>
                    <div className='reviews-title'>
                        <h2>Customer reviews</h2>
                    </div>
                    <div className='reviews-rating'>
                        <div className="average-rating-container">
        
                            <div className="rating-stars">
                                {[...Array(5)].map((start, idx)=>{
                                    const ratingValue = idx + 1
                                    return (
                                        <label key={idx}>
                                            <MdOutlineStar className="stars" size={25}
                                                color={ratingValue <= averageRating ? "#fea41d" : "rgb(234,237,237)"}/>
                                        </label>
                                    )
                                })}
                            </div>
                            <div className="average-rating">
                                <span>{averageRating} out of 5</span> 
                            </div>
                        </div>
                        <div className="rating-count">
                            <span>{count} global ratings</span>
                        </div>
                        <div className='rating-bars-container'>
                            <div className="rating-bars">
                                <div className="bar-rows">
                                    <span>5 star</span>
                                    <div className="bar">
                                        <div className="bar__fill" style={{width: `${value5}%`}}></div>
                                    </div>
                                    <span className="bar__text">{value5}%</span>
                                </div>
                                <div className="bar-rows">
                                    <span>4 star</span>
                                    <div className="bar">
                                        <div className="bar__fill" style={{ width: `${value4}%` }}></div>
                                    </div>
                                    <span className="bar__text">{value4}%</span>
                                </div>
                                <div className="bar-rows">
                                    <span>3 star</span>
                                    <div className="bar">
                                        <div className="bar__fill" style={{ width: `${value3}%` }}></div>
                                    </div>
                                    <span className="bar__text">{value3}%</span>
                                </div>
                                <div className="bar-rows">
                                    <span>2 star</span>
                                    <div className="bar">
                                        <div className="bar__fill" style={{ width: `${value2}%` }}></div>
                                    </div>
                                    <span className="bar__text">{value2}%</span>
                                </div>
                                <div className="bar-rows">
                                    <span>1 star</span>
                                    <div className="bar">
                                        <div className="bar__fill" style={{ width: `${value1}%` }}></div>
                                    </div>
                                    <span className="bar__text">{value1}%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='reviews-update'>
                        <h3>Review this product</h3>
                        <div className="review-update-text"><span>Share your thoughts with other customers</span></div>
                        <div className='review-submit'>
                            <Link to={`/products/${productId}/reviews/new`}>
                                <button className='review-button'>Write a customer review</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {reviews ? <div className='reviews-right'>
                    {reviews.reverse().map((review, idx) => <Review review={review} key={idx} />)}
                </div> :
                <div className='reviews-right'><h2 style={{fontSize: "20px"}}>No reviews for this prodcut</h2></div>
            }

            <div className='reviews-empty'>
                "fjgoijeriojgoijsdg jdkljg;ositjhiojsgklfjskl;jgioerjioglkjkljdfkljgijshiotjsljrkldnsgjkdfgoigjskdjg;kljsirjhjyhioejojhlk"

            </div>

        </div>
    
    )
}

export default ProductShowReview