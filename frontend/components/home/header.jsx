import React from 'react';
import GreetingContainer from '../greeting/Greeting_container';
import { Link, NavLink } from 'react-router-dom';
import SearchBar from './searchBar';
const Header = (props) => {
  
  
  return (
    
    <div className='header'>
      <Link to='/'>
        <img className="logo" src={window.homelogoURL}/>
      </Link>
  
        <SearchBar/>
        
        
        <div className='header-nav'>
            <GreetingContainer/>
            <NavLink to='/checkout'>
              <div className='container cart'>
                <div className='cartcount-container'>
                  <span className='cartcount'>{props.cartCount ?  props.cartCount : 0}</span>
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
