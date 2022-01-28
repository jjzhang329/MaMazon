import React from 'react';

class ProductShow extends React.Component{

    componentDidMount(){
        this.props.fetchProduct(this.props.match.params.id)
    }

    render(){
        const {product} = this.props
        return (
            <div>
                {product.name}
                {product.description}
                ${product.price}
            
                <img src={product.photoUrl} />
    
            </div>
        );
    }
  
};

export default ProductShow;
