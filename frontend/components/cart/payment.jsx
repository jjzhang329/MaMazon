import { FcCheckmark}from 'react-icons/fc'
import { ImPointRight}from'react-icons/im'
import React from 'react'
import Footer from '../footer'
const Payment=()=>{
    return(
      
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
                        <a href=''>Linkedin</a> 
                        <a href=''>Github</a>
                    </span>
                </div>
            </div>
                <footer>
                    <Footer />
                </footer>

        </div>
        
        
          
    )
}

export default Payment;