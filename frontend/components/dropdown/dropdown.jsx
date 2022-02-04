import React, { useState } from "react";
const Dropdown= ({select, setSelected, product, updateCart})=>{
    const [isActive, setIsActive] = useState(false);
    const options = ["0 (Delete)","1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    
    document.addEventListener("click", (e)=>{
        
        if (e.target.className !== "dropdown-btn")
        {setIsActive(false)}
        
    })
    console.log(select)
    return (
        
        <div className ="quantity-dropdown">
            <div className="dropdown-btn" onClick={(e)=>(
                setIsActive(!isActive))}>
                Qty: {select}
            </div>
            
            {isActive && (
                <div className="dropdown-options">
                    {options.map(option=> (
                        <div onClick={() => {
                         
                            setSelected(option)
                            updateCart({product_id: product.id, quantity: select})
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