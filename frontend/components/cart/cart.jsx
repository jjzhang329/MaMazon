import React from "react";

class Cart extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            user_id: this.props.user,
            product_id: "",
            quantity:""
        }
    }
}

export default Cart;