import React from 'react';
import { MdOutlineStar  } from 'react-icons/md';
import { deleteReview } from '../../util/reviews_util';
import ProductShowReview from './product_show_reviews'

class ProductShow extends React.Component{
    constructor(props){
        super(props)
        this.state = {quantity: 1}
        this.handleClick = this.handleClick.bind(this)

    }

    componentDidMount(){
        this.props.fetchProduct(this.props.match.params.id)
    }


    handleSelect(){    
        return(e)=> {
            e.preventDefault()
            this.setState({quantity: e.currentTarget.value})
        }

    }

    
    handleClick(e){
        e.preventDefault()
        if(!this.props.currentUser){    
           this.props.history.push('/login')
        }else{    
            const product_id = this.props.product.id
            const alreadyInCart = this.props.cart
            if (alreadyInCart.includes(product_id)) {
                this.props.updateCart({product_id: product_id, quantity: this.state.quantity})        
            } else {
                this.props.addToCart({product_id: product_id, quantity: this.state.quantity})   
            }
            this.props.openModal('addtocart')
        }  
    }
    
    render(){
        
        const {product, currentUser, deleteReview} = this.props
        if(!product) return null;
        //delivery eta date format
        let slow = new Date()
        let fast = new Date()
        let today = new Date()
        fast.setDate(fast.getDate()+2)
        slow.setDate(slow.getDate()+5)
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
        slow = new Intl.DateTimeFormat('en-US', options).format(slow)
        fast = new Intl.DateTimeFormat('en-US', options).format(fast)
        let slowdeliver = slow.slice(0, -6)
        let fastdeliver = fast.slice(0,-6)
        let orderWithIn = `${23- today.getHours()} hrs and ${59 - today.getMinutes()} mins.`
    
        return (
           
                <div className='product-show-container'>
                    <div className='product-show-main'>
                        <div className='product-show-left'>
                            <div className='product-show-image-div'>
                                <img className="product-show-image" src={product.photoUrl} />
                            </div>
                        </div>
                        <div className='product-show-center'>
                            <div className='product-show-name'>{product.name}</div>
                        <div className='product-show-rating'>
                            <div className="rating-stars">
                                {[...Array(5)].map((start, idx) => {
                                    const ratingValue = idx + 1
                                
                                    let total = 0
                                    let averageRating = 0
                                    let count = 0
                                    if(product.reviews){
                                        
                                            product.reviews.forEach(review => {
                                                total += Math.floor(review.rating)
                                            })
                                  
                                        count = product.reviews.length
                                    }
                                    
                                    
                                    averageRating = Math.floor(total / count)
                                   
                                     
                                    return (
                                        <label key={idx}>
                                            <MdOutlineStar className="stars" size={15}
                                                color={ratingValue <= averageRating ? "#fea41d" : "rgb(234,237,237)"} />
                                                
                                        </label>
                                    )
                                })}
                            </div>
                        </div>
                            <div className='product-show-price-row'> 
                                <span>Price</span> 
                                <span className="product-show-price">${product.price}</span>
                            </div>
                            
                            <div className='product-description-container'>
                                <h1>About this item</h1>
                                <ul className='product-description-list'>
                                {product.description}
                                </ul>
                            </div>
                            
                        </div>
                        <div className='product-show-right'>
                            <div className='product-addtocart'>
                                <div className="product-show-price">${product.price}</div>
                                <h5>& Free Returns</h5>
                                <div className='product-slow-deliver'>
                                    <span id='free-deliver'>FREE delivery</span> 
                                    <span id='date'>{slowdeliver}</span>
                                </div>
                                <div className='product-fast-deliver'>
                                    <span id='fast-deliver'>Or fastest delivery</span>
                                    
                                    <span id='date'>{fastdeliver}</span>
                                    . Order within <span id='orderwithin'>{orderWithIn}</span>
                                    <div id="in-stock">In Stock</div>
                                    <div className='product-quantity'> 

                                            
                                            <select onChange ={this.handleSelect()} id="quantity" name="quantity" className='quantity-dropdown'>   
                                                <option value={1}>Qty: 1</option>
                                                <option value={2}>Qty: 2</option>
                                                <option value={3}>Qty: 3</option>
                                                <option value={4}>Qty: 4</option>
                                                <option value={5}>Qty: 5</option>
                                                <option value={6}>Qty: 6</option>
                                            </select>
                                        
                                    </div>
                                </div>
                                <div className='addtocart'>
                                   
                                    <button id="addtocart" onClick={this.handleClick}>Add to Cart</button>
                                   
                                    <button id="buynow" onClick={()=>{
                                        if(!this.props.currentUser){
                                            this.props.history.push('/login')
                                        }else{
                                            this.props.fetchProduct(this.props.match.params.id)
                                            this.props.openModal('buynow')
                                            
                                        }
                                        
                                        }}>Buy Now</button>
                                 
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                    {/* reviews section */}
                        <ProductShowReview deleteReview={deleteReview} currentUser={currentUser} reviews={product.reviews} productId={product.id}/>
                </div>
            
        );
    }
  
};

export default ProductShow;
