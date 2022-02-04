import React from "react";

import CheckOutItems from './checkout_items'

class CheckOut extends React.Component{
    constructor(props){
        super(props)
  
    }

    componentDidMount(){
        debugger
        this.props.fetchCartItems()
    }

    render(){
        const {products, cartCount, updateCart} = this.props
        let totalPrice = 0;
        if (!products.length) return (<div>your cart is empty, keep shopping</div>)
        const items = products.map((product,idx)=>{
            let rounded = (product.price * product.quantity).toFixed(2)
            totalPrice += parseInt(rounded)
            
            return <CheckOutItems product={product} key={idx} updateCart={updateCart}/>
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
                            <button className="checkout-button">Proceed to checkout</button>
                        </div>
                    </div>
                </div>
            </div>
      
        )
    }
}

export default CheckOut;