import React from 'react';
import { Link } from 'react-router-dom';


const ProductIndexItem = ({product}) => {
  return (
     
    <div className='products-card'>
      <div className='product-image-container'>
        <Link to={`/products/${product.id}`}>
          <img className="product-image" src={product.photoUrl} />
        </Link>
      </div>
      <div className='product-title'> 
        <span id='product-name'>{product.name}</span>
      </div>
      <div className='product-rating'>
        stars here
      </div>
      <div className='product-price'> 
        <span className="price-symbol">$</span>
        <span className='price-whole'>{Math.trunc(product.price)}</span>
        <span className='price-decimal'>{(product.price - Math.trunc(product.price)).toFixed(2)*100}</span>
      </div>
      <div className='product-shipping'>
        <span id="shipping-1">Get is as soon as Tomorrow</span>
        <span id="shipping-2">FREE Shipping by Mamazon</span>
      </div>
        
    </div>
    );
};

export default ProductIndexItem;