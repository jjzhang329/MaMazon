import React from 'react';

const ResultDrop = ({result})=>{

   const list= result.map((product, idx) =>{
        return <li key={idx} className='search-result-list'>{product.name.split(" ").slice(0, 5).join(' ')}</li>
    })
    return(
        <div className='result-list-container'>
            {list}
        </div>
    )
}


export default ResultDrop;