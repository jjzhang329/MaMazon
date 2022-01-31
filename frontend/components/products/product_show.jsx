import React from 'react';
import HeaderContainer from '../home/header_container';
import NavBarContainer from '../home/nav_bar_container';

class ProductShow extends React.Component{
    constructor(props){
        super(props)
        this.state = {count: ""}
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
        this.props.fetchProduct(this.props.match.params.id)
    }

    handleClick(e){
        e.preventDefault()
        //  this.setState({count: this.state.count+=1})
        const product_id = this.props.product.id
        const alreadyInCart = this.props.cart
        debugger
        if(alreadyInCart.includes(product_id)){
            // this.props.updateCart({product_id: product_id, quantity: 1})
           console.log('same product')
            this.props.updateCart({ product_id: product_id, quantity: 1 })
        }else{
            this.props.addToCart({product_id: product_id, quantity: 1})
        }
    }
    
    render(){
        const {product} = this.props
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
            <div>
                <HeaderContainer />
                <NavBarContainer />
                <div className='product-show-container'>
                    <div className='product-show-main'>
                        <div className='product-show-left'>
                            <img className="product-show-image" src={product.photoUrl} />
                        </div>
                        <div className='product-show-center'>
                            <div className='product-show-name'>{product.name}</div>
                            <div className='product-show-rating'>starts here</div>
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

                                            
                                            <select id="quantity" name="quantity" className='quantity-dropdown' >
                                                <option id="dropdown-name" value="">Qty: 1</option>
                                                <option value={1}>1</option>
                                                <option value={2}>2</option>
                                                <option value={3}>3</option>
                                                <option value={4}>4</option>
                                                <option value={5}>5</option>
                                            </select>
                                        
                                    </div>
                                </div>
                                <div className='addtocart'>
                                    <button id="addtocart" onClick={this.handleClick}>Add to Cart</button>
                                    <button id="buynow" onClick={this.handleClick}>Buy Now</button>
                                </div>
                                
                            </div>
                        </div>
                        
                      
                        
                    </div>
                    <div className='product-show-reviews'>
                        reviews goes     
                    </div>
                </div>
            </div>
        );
    }
  
};

export default ProductShow;
