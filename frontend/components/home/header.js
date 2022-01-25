import React from 'react';
import GreetingContainer from '../greeting/Greeting_container';
import{ GoSearch} from "react-icons/go"
import {MdOutlineAddShoppingCart} from 'react-icons/md'
const Header = () => {
  return (
    <div className='header'>
        <img className="logo" src={window.homelogoURL}/>
        <div className='searchbar'>
            <input className='searchinput' type="text"/>   
              <GoSearch className='searchicon' />     
        </div>
        
        <div className='header-nav'>
            <GreetingContainer/>
            <MdOutlineAddShoppingCart className='carticon'/>
        </div>
    </div>
  )
};

export default Header;
