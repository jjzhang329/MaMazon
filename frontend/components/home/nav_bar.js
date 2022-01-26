import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar=()=>{
  return (
    <div className='home-nav-bar-container'>
        <div className='nav-bar'>
              <NavLink to='' className="nav-bar-category">Baby</NavLink>
              <NavLink to='' className="nav-bar-category">Beauty & Personal Care</NavLink>
              <NavLink to='' className="nav-bar-category">Fashion</NavLink>
              <NavLink to='' className="nav-bar-category">Fitness</NavLink>
              <NavLink to='' className="nav-bar-category">Home Decor</NavLink>
              <NavLink to='' className="nav-bar-category">Kitchen</NavLink>
              <NavLink to='' className="nav-bar-category">Smart Home</NavLink>
              <NavLink to='' className="nav-bar-category">Gift Idea</NavLink>    
        </div>
    </div>);
}

export default NavBar;
