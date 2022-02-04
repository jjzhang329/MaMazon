import React from "react";
import { Link } from "react-router-dom";

import CheckOutItems from './checkout_items'

class CheckOut extends React.Component{
    constructor(props){
        super(props)
        this.handleCheckout = this.handleCheckout.bind(this)
    }

    componentDidMount(){
    
        this.props.fetchCartItems()
    }

    handleCheckout(){
        
        this.props.products.map(product=>{
           const clear = { product_id: product.id, quantity: 0 }         
            this.props.updateCart(clear)
        })
    }
    render(){
        const {products, cartCount, updateCart} = this.props
        let totalPrice = 0;
        if (!products.length) return (<div>your cart is empty, keep shopping</div>)
        const items = products.map((product,idx)=>{
            
            let rounded = (product.price * product.quantity).toFixed(2)
            totalPrice += parseInt(rounded)
            
            return (product.quantity && <CheckOutItems product={product} key={idx} updateCart={updateCart}/>)
        })
        return(

            <div className="checkout-body">
                <div className="checkout-container">
                    <div className="checkout-left">
                        <div className="checkout-title"><h1>Shopping Cart</h1></div>
                        <a className="checkout-deselect-options" href="">Deselect all Items</a>
                        <div className="divider-row"><span>Price</span></div>
                        {items}
                    </div>
                    <div className="checkout-right">
                        <div className="checkout-right-inner">
                            <div className="subtotal-info">
                                <span className="title">Subtotal {`(${cartCount} Items)`}:</span>
                                <span className="totalprice"> ${totalPrice.toLocaleString('en-US', { maximumFractionDigits: 2 })}</span>
                            </div>
                            <Link to='/payment'>
                                <button onClick={this.handleCheckout} className="checkout-button">Proceed to checkout</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
      
        )
    }
}

export default CheckOut;