import React from 'react';

class ProductShow extends React.Component{
    constructor(props){
        super(props)
        this.state = {count: 0}
    }

    componentDidMount(){
        this.props.fetchProduct(this.props.match.params.id)
    }

    handleClick(e){
        e.preventDefault()
        return ()=>{this.setState({[count]: this.state.count+1})}
    }
    
    render(){
        const {product} = this.props
        return (
            <div>
                {product.name}
                {product.description}
                
                ${product.price}
                <div className='cartcount'>
                {this.state.count}
                </div>
                <button onClick={this.handleClick} value={product.id}>Add to Cart</button>
                <img src={product.photoUrl} />
    
            </div>
        );
    }
  
};

export default ProductShow;
