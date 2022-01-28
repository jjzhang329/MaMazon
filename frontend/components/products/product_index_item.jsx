import React from 'react';
import { Link } from 'react-router-dom';


const ProductIndexItem = ({product}) => {
  return (
     
    <div>
        {product.name}
        {product.description}
        ${product.price}
        <Link to={`/products/${product.id}`}>
          <img src={product.photoUrl}/>
        </Link>
    </div>
    );
};

export default ProductIndexItem;