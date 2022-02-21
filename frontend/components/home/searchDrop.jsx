import React, { useState } from "react";
import { RiArrowDropDownFill } from 'react-icons/ri'
const SearchDrop = ({ setDepartment, filter,toggle, changeFilter, setToggle})=>{
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
    

    const capitalize=(word)=>{
        return word.slice(0, 1).toUpperCase() + word.slice(1)
    }
    return(
        <div className='dropdown'>
            <div className="dropdown-wrapper" onClick={()=>{
                setActive(true)
                setToggle(true)
                }}>
                <div className="all">{
                   filter.department === '' ? 'All' : capitalize(filter.department)
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
                                option = (option === 'All Department' ? '' : option)
                               setDepartment(option)
                          
                              changeFilter("department",option.toLocaleLowerCase())
                            }}>{option}</div>
                        })}
                    </div>
                }

        </div>
    )
}

export default SearchDrop