import React from "react";
import Dropdown from "../dropdown/dropdown";
import { useState } from "react";


const CheckOutItems = ({ product, updateCart })=>{
    const [selected, setSelected] = useState(product.quantity);
     console.log(selected) //selected quantity
    return (

        <div className="checkout-products-row">
            <div className="checkout-product-detail">                       
                    <div className="wrapper">
                        <div className="item-checkbox">
                            <label>
                                <input id="checkbox" type='checkbox' />
                            </label>
                        </div>
                        <div className="checkout-product-image">
                            <img className="checkout-image" src={product.photoUrl}/>
                        </div>
                    </div>
                    <div className="checkout-product-info">
                        <div className='checkout-product-name'>
                            {product.name}
                        </div>
                        <span className="message">Shipped from: <span className="color">Mamazon</span></span>
                        <span>Department: </span><span>{product.department}</span>                                
                        <Dropdown select={selected} setSelected={setSelected} product={product} updateCart={updateCart}/>
                    </div>                    
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