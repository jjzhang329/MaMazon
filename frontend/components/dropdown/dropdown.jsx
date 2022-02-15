import React, { useState } from "react";
import { MdKeyboardArrowDown} from 'react-icons/md'
const Dropdown= ({select, setSelected, product, updateCart})=>{
    const [isActive, setIsActive] = useState(false);
    const options = ["0 (Delete)","1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    
    document.addEventListener("click", (e)=>{
        
        if (e.target.className !== "dropdown-btn")
        {setIsActive(false)}
        
    })
   
    return (
        
        <div className ="quantity-dropdown">
            <div className="dropdown-btn" onClick={(e)=>(
                setIsActive(!isActive))}>
                Qty: {product.quantity}
                <div className="dropdown-icon"><MdKeyboardArrowDown/></div>
            </div>
            
            {isActive && (
                <div className="dropdown-options">
                    {options.map(option=> (
                        <div onClick={() => {
                            
                            
                            setSelected(option)
                            updateCart({ product_id: product.id, quantity: "0 (Delete)" ? "0" : option})
                            setIsActive(false)

                            }} 
                        className="dropdown-item" key={option}>
                            {option}
                            
                        </div>
                    ))}
                    
                </div>)
            }
        </div>
    )
}

export default Dropdown;