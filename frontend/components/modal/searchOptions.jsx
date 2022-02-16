import React from 'react'

const SearchOptions = ({ filter, updateFilter})=>{
    const options = [
        'All Departments', 
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

    const option = options.map((option, idx) => {
        return <option key={idx}>{option}</option>
    })

    return(
       
        <div>{option}</div>
   
    )
}

export default SearchOptions