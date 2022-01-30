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
        return (
            <div>
                <HeaderContainer />
                <NavBarContainer />
                {product.name}
                {product.description}
                
                ${product.price}
                <button onClick={this.handleClick}>Add to Cart</button>
                <img src={product.photoUrl} />
    
            </div>
        );
    }
  
};

export default ProductShow;
