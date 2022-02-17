import React, { useState } from "react";
import { RiArrowDropDownFill } from 'react-icons/ri'
const SearchDrop = ({ filter,toggle, changeFilter, setToggle})=>{
    const [active, setActive] = useState(false)
    const [department, setDepartment] = useState('All')
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
    
    // console.log(department)
    return(
        <div className='dropdown'>
            <div className="dropdown-wrapper" onClick={()=>{
                setActive(true)
                setToggle(true)
                }}>
                <div className="all">{
                   department 
                }
                </div>
                <div className="search-arrow-icon">
                    <RiArrowDropDownFill className='dropdownicon' />
                </div>
                
            </div>

                {active && toggle &&
                    <div className="dropdown-options" >

                       { options.map((option, idx)=>{
                            return <div key={idx} className="dropdown-item"
                            onClick={()=>{
                                setActive(!active)
                                
                               setDepartment(option)
                          
                              option = (option === 'All Department' ? '' : option)
                             
                              changeFilter("department",option.toLocaleLowerCase())
                            }}>{option}</div>
                        })}
                    </div>
                }

        </div>
    )
}

export default SearchDrop