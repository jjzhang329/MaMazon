import React from 'react';
import GreetingContainer from '../greeting/Greeting_container';
import{ GoSearch} from "react-icons/go"
import { RiArrowDropDownFill} from 'react-icons/ri'
import { Link, NavLink } from 'react-router-dom';
const Header = (props) => {
  

  return (
    
    <div className='header'>
      <Link to='/'>
        <img className="logo" src={window.homelogoURL}/>
      </Link>
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
            <NavLink to='/checkout'>
              <div className='container cart'>
                <div className='cartcount-container'>
                  <span className='cartcount'>{props.cartCount}</span>
                  <img src={cartURL} className='carticon'/>
                </div>
                <div className='cartname'>Cart</div>  
              </div>
            </NavLink>
        </div>
    </div>
  )
};

export default Header;
