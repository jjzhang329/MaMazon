import React from "react";
import CheckOutItems from './checkout_items'

class CheckOut extends React.Component{
    constructor(props){
        super(props)
  
    }

    componentDidMount(){
        this.props.fetchCartItems()
    }

    render(){
        const {products} = this.props
        if (!products.length) return (<div>your cart is empty, keep shopping</div>)
        const items = products.map((product,idx)=>{
            return <CheckOutItems product={product} key={idx}/>
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
                        <div className="subtotal-info">
                            <span className="title">Subtotal(#number items):</span>
                            <span className="totalprice">Total Price</span>
                        </div>
                        <button className="checkout-button">Proceed to checkout</button>
                    </div>
                </div>
            </div>
      
        )
    }
}

export default CheckOut;