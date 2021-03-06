import { FcCheckmark}from 'react-icons/fc'
import { ImPointRight}from'react-icons/im'
import React from 'react'
import Footer from '../footer'
const Payment=()=>{
    return(
      <div>
        <div className="payment-box">
            <div className="payment-confirm">
               <div className='checkmark'>
                 <FcCheckmark size={40}  />
                    <p>Thank you, your order has been placed</p>
                </div>
                
                <div className='personal-message'>
                    <span>
                        I have a lot more to offer, feel free to checkout my info
                        <span className='right-icon'>
                            <ImPointRight size={18}/>
                        </span> 
                            <a href="https://www.linkedin.com/in/jing-jing-zhang-888a05a5/" target="_blank">Linkedin</a> 
                            <a href="https://github.com/jjzhang329?tab=repositories" target="_blank">Github</a>
                    </span>
                </div>
            </div>
                
                
        </div>
            <footer>
                <Footer />
            </footer>
        </div>
        
       
          
    )
}

export default Payment;