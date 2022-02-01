import React from "react";

const CheckOutItems=({product})=>{
       
        return (
                 
            <div className="checkout-products-row">

                <div className="checkout-product-detail">
                    <div className="checkout-product-image">
                        <img id="checkout-product-image" src={product.photoUrl}/>
                    </div>
                    <div className='checkout-product-name'>{product.name}</div>
                   
                </div>
                <div className="checkout-price">
                    <span className="checkout-product-price">
                        ${product.price}
                        </span>
                </div>
              
            </div>

            
        )
    
    
}

export default CheckOutItems;