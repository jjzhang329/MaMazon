import React, { useState } from "react";
import { MdKeyboardArrowDown} from 'react-icons/md'
const Dropdown= ({select, setSelected, product, updateCart})=>{
    const [isActive, setIsActive] = useState(false);
    const options = ["0 (Delete)","1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    

            document.addEventListener("click", (e) => {
                console.log(e.target.className.baseVal)
                if (e.target.className !== "dropdown-btn" && e.target.className.baseVal !== "icon") { setIsActive(false) }

            })


        
    return (
        
        <div className="quantity-dropdown" 
        onClick={(e) => (
            
            setIsActive(!isActive))}
        >
            <div className="dropdown-btn" >
                Qty: {select ? select : product.quantity}
                <div className="dropdown-icon" ><MdKeyboardArrowDown className="icon"/></div>
            </div>
            
            {isActive && (
                <div className="dropdown-options">
                   
                    
                    {options.map(option=> (
                        <div onClick={() => {
                            // setIsActive(false)
                            setSelected(option)
                            
                            if(option < product.quantity) option = -(product.quantity - parseInt(option))
                            option = (option === "0 (Delete)") ? "0" : option
                            if(parseInt(option) < 0) option = 0
                            updateCart({ product_id: product.id, quantity: option})
                            

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