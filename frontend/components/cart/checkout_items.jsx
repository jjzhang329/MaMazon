import React from "react";
import Dropdown from "../dropdown/dropdown";
import { useState } from "react";



const CheckOutItems = ({ product, updateCart })=>{
    const [selected, setSelected] = useState(0);
   //selected quantity
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
                            <span>{product.name}</span>
                        </div>
                        <div className="in-stock">In stock</div>
                        <div className="free-return"><span className="color">FREE Returns <span style={{color:"black"}}>&</span> FREE Delivery</span></div>
                        <div className="message">Shipped from: <span className="color">Mamazon</span></div> 
                        <span className="text-bold">Department: <span className="text-small">{product.department}</span></span> 
                        <div className="check-out-dropdown">
                            <Dropdown select={selected} setSelected={setSelected} product={product} updateCart={updateCart} />
                        </div>                                   
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