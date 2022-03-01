
import React from 'react'
const Footer = ()=>{
    return(
        <div className='footer-container'>
            <div className='back-to-top' onClick={()=>window.scrollTo(0,0)}>
                <span>Back to top</span>
            </div>
            <div className='links-container'>
                <div className="footer-logo">
                    <img src={homelogoURL}/>
                </div>
                <div className='links-row'>
                    <a href="https://www.linkedin.com/in/jing-jing-zhang-888a05a5/" target="_blank" >
                        <img src="https://mamazon-seeds.s3.us-west-1.amazonaws.com/linkedinlogo.png"/>
                    </a> 
                    <a href="https://github.com/jjzhang329?tab=repositories" target="_blank">
                        <img id="github" src="https://mamazon-seeds.s3.us-west-1.amazonaws.com/github.png"/>
                    </a>
                    <a href="https://angel.co/u/jing-jing-zhang" target="_blank">
                        <img src="https://mamazon-seeds.s3.us-west-1.amazonaws.com/angellist-logo-256x256.png"></img>
                    </a>
                </div>
            </div>
            <div className='footer-message'>
                <div id="created">Mamazon.com is an Amazon.com clone project created by Jing Jing Zhang in Jan, 2022. </div> 
            </div>
        </div>
    )
}

export default Footer