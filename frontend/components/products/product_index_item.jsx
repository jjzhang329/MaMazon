import React from 'react';


const ProductIndexItem = ({product}) => {
  return (
     
    <div>
        {product.name}
        {product.description}
        ${product.price}
        <img src={product.photoUrl}/>
    </div>
    );
};

export default ProductIndexItem;