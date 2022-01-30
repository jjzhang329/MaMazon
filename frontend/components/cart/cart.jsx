import React from "react";

class Cart extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            product_id: "",
            quantity:""
        }
    }

    render(){

        return(
            <div className="cartcount">
                {/* {this.props.cart.length} */}
            </div>
        )
    }
}

export default Cart;