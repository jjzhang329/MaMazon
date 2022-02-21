import React from 'react';
import { NavLink } from 'react-router-dom';

const ResultDrop = ({ result, setInput,setResultActive})=>{

   const list= result.map((product, idx) =>{
       const name = product.name.split(" ").slice(0, 5).join(' ')
        return <NavLink to={`/products/${product.id}`}key={idx} 
        className='search-result-list'
        onClick={()=>{
            setResultActive(false)
            setInput("")
        }}>{name}</NavLink>
    })
    return(
        <div className='result-list-container'>
            {list}
        </div>
    )
}


export default ResultDrop;