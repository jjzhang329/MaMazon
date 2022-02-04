import React, { useEffect } from 'react'
import { useState } from 'react'
const splashImages = [
    "https://mamazon-seeds.s3.us-west-1.amazonaws.com/splash/amazon_filretv.jpg",
    "https://mamazon-seeds.s3.us-west-1.amazonaws.com/splash/splashnew1.jpg",
    "https://mamazon-seeds.s3.us-west-1.amazonaws.com/splash/splashnew2.jpg"

]

const Slider=()=>{
     const [currentIdx, setCurrentIdx] = useState(0)
    //  useEffect(()=>{
    //     startSlider()
    //  })

    //  const startSlider=()=>{
    //      setInterval(()=>{
    //         handleNextClick()
    //      }, 10000)
    //  }
    let path
    if (currentIdx === 1){path = 'products/'}
    const handleNextClick = ()=>{
   
        const newIdx = Math.floor((currentIdx+1)%splashImages.length)
        {setCurrentIdx(newIdx)}
    }

    return(
        <div className="carousel-inner">
            <img className="carousel" src={splashImages[0]} alt="" />
            
            <div className="center-icon-div">
                {/* <button className='previous-button' onClick={handleNextClick}>Previous</button>
                <button >Right</button> */}
            </div>
       
        </div>
    )
}

export default Slider;