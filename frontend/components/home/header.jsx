import React from 'react';
import GreetingContainer from '../greeting/Greeting_container';
import{ GoSearch} from "react-icons/go"
import { RiArrowDropDownFill} from 'react-icons/ri'
import { Redirect } from 'react-router';
const Header = () => {
  return (
    <div className='header'>
        <img className="logo" src={window.homelogoURL}/>
        <div className='searchbar'>
            <div className='dropdown'>
              <div className='all'>All</div>

              <RiArrowDropDownFill className='dropdownicon'/>
            </div>
            <input className='searchinput' type="text"/>   
            <GoSearch className='searchicon' />     
        </div>
        
        <div className='header-nav'>
            <GreetingContainer/>
            <img src={cartURL} className='carticon'/>
            <div className='cartname'>Cart</div>
            
        </div>
    </div>
  )
};

export default Header;
