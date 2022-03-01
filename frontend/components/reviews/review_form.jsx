import React from 'react'
import StarRating from './starRating'
import { IoMdAdd}  from 'react-icons/io'
import { withRouter } from 'react-router-dom'
class ReviewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {review: this.props.review, product: this.props.product, username: this.props.username}
        this.handleRating = this.handleRating.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        this.props.fetchProduct(this.state.review.product_id)
    }
    componentDidUpdate(oldState){
        if(Object.keys(oldState.product).length !== Object.keys(this.props.product).length){  
            this.setState({product: this.props.product})
            this.setState({ username: this.props.username})
            this.setState({review: this.props.review})
        }
    }
   
    handleSubmit(e){
        
        e.preventDefault()
        this.props.action(this.state.review)
        this.props.history.replace(`/products/${this.props.review.product_id}`)
        this.props.fetchProduct(this.state.review.product_id)
    }
    handleUpdate(key) {
        
        return (e) => {
            e.preventDefault()
            let review = { ...this.state.review }
            review[key] = e.target.value
                this.setState({review})
        }
    }

    handleRating(value){
        let review = { ...this.state.review}
        
        review.rating += value
        // review.rating = Math.floor(review.rating  4) 
        this.setState({ review })
    }


    render() {
        const{formType} = this.props
        const id = this.state.review.product_id
        const product = this.state.product[id]
        console.log(this.props)
       if(!product)return null
        return (
            <div className='review-form-container'>
                <div className='review-form-banner'>
                    <div className='review-form-userprofile'>
                       
                        <div className='review-form-useravatar'>
                            <img src={window.avatarURL}></img>
                        </div>
                        <div className='review-form-username'>
                            <span>{this.state.username}</span>
                        </div>
                        
                    </div>
                    
                </div>
                <div className='form-body'>
                    <form onSubmit={this.handleSubmit}>
                        <div className='review-form-row1'>
                            <h2>{formType}</h2>
                            <div className='review-form-productImg'>
                                <img src={product.photoUrl}/>
                            </div>
                            <div className='review-form-productName'>
                                {product.name}
                            </div>
                        </div>
                        <div className='overall-rating'>
                            <h3>Overall Rating</h3>
                            <StarRating updateStars={this.handleRating} presetRating={this.props.review.rating}/>
                        </div>
                      
                        <div className='form-row-subtitle'>
                            <label><h3>Add a headline</h3></label>
                            <div className="headline-input">
                                <input value={this.state.review.headline} onChange={this.handleUpdate("headline")}type="text"
                                    placeholder={this.props.review.headline === "" ? "What's most important to know?" : this.props.review.headline}/>
                            </div>
                        </div>
                        {/* <div className='form-row-subtitle'>
                            <label><h3>Add a photo or video</h3></label>
                            <span>Shoppers find images and videos more helpful than text alone</span>
                            <div className='photo-submit-box'>
                                <button className='upload-button'>
                                    <IoMdAdd size={30} color={"#aab7b8"}/>
                                </button>
                            </div>
                        </div> */}
                        <div className="form-row-subtitle">
                            <label><h3>Add a written review</h3></label>
                            
                                <textarea className='written-box' value={this.state.review.body}
                                    onChange={this.handleUpdate('body')}
                                    placeholder={this.props.review.body === "" ? 
                                    'What did you like or dislike? What did you use this product for?' : this.props.review.body}>
                                </textarea>
                            
                        </div>
                        <div className='submit-form-button'>
                            
                            {/* <Link to={`/products/${id}`}> */}
                                <button id='review-submit'>Submit</button>
                            {/* </Link> */}
                            
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

export default withRouter(ReviewForm)