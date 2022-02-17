import React, { useState } from "react";
import { RiArrowDropDownFill } from 'react-icons/ri'
const SearchDrop = ({ filter, updateFilter})=>{
    const [active, setActive] = useState(false)

    const options = [
        "All Department", 
        'Baby', 
        'Beauty',
        'Fashion',
        'Fitness',
        'HomeDecor',
        'Kitchen',
        'Maternity',
        'SmartHome',
        'Gift'
    ]
    
    
    return(
        <div className='dropdown'>
            <div className="dropdown-wrapper" onClick={()=>{setActive(true)}}>
                <div className="all">{
                    filter.department === '' ? 'All' : filter.department
                }</div>

                <RiArrowDropDownFill className='dropdownicon' />
            </div>

                {active && 
                    <div className="dropdown-options" >

                       { options.map((option, idx)=>{
                            return <div key={idx} className="dropdown-item"
                            onClick={()=>{
                                setActive(!active)
                                updateFilter({'department': option.toLowerCase()})
                            }}>{option}</div>
                        })}
                    </div>
                }

        </div>
    )
}

export default SearchDrop