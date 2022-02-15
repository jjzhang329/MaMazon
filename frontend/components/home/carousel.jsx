import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const splashImages = [
    "https://mamazon-seeds.s3.us-west-1.amazonaws.com/splash/amazon_filretv.jpg",
    "https://mamazon-seeds.s3.us-west-1.amazonaws.com/splash/splashnew1.jpg",
    "https://mamazon-seeds.s3.us-west-1.amazonaws.com/splash/splashnew2.jpg"

]

const Slider=()=>{
    const [currentIdx, setCurrentIdx] = useState(0)
     useEffect(()=>{
        //  setInterval((e) => {
        //      const newIdx = Math.floor((currentIdx + 1) % splashImages.length)
        //      setCurrentIdx(newIdx)
        //  }, 10000)
         
    })

    
    let path
    if (currentIdx === 0){path = 'products/83'}
    if(currentIdx === 1){path = 'products/48'}
    if (currentIdx === 2) { path = 'products/48' }

    const handleNextClick = ()=>{ 
        const newIdx = Math.floor((currentIdx+1)%splashImages.length)
        setCurrentIdx(newIdx)
    }
    const handlePreviousClick = (e) => {
        e.preventDefault()
        let newIdx = Math.floor((currentIdx-1)%splashImages.length)
        if(newIdx < 0) newIdx = splashImages.length - 1
        setCurrentIdx(newIdx) 
    }
   
    return(
        
        <div className="carousel-inner">
            <Link to={`/${path}`}>
                <img id="carousel" src={splashImages[currentIdx]} alt=""/>
            </Link>
         
            <div className='carousel-button left' onClick={(e)=>{handlePreviousClick(e)}}>
        
                <img src={window.leftURL}></img>
                    
            </div>
            <div className='carousel-button right' onClick={(e)=>{handleNextClick(e)}}>
                <img src={window.rightURL}></img>
            </div>
          
       
        </div>
    )
}

export default Slider;