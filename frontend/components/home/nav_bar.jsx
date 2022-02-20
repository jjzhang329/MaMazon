import React from 'react';
import { Link, NavLink } from 'react-router-dom';


class NavBar extends React.Component{
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
 
  
  handleClick(value){

     return(e)=>{   
      this.props.updateFilter('department', value) 
    }
  }

  render(){
   
    return (
      
      <div className='home-nav-bar-container'>
          <div className='nav-bar'>
          <NavLink to='/products'className="nav-bar-category" onClick={this.handleClick("")} replace>All Products</NavLink>
          <NavLink to='/products' onClick={this.handleClick('baby')} className="nav-bar-category" replace>Baby</NavLink>
          <NavLink to='/products' onClick={this.handleClick('beauty')} className="nav-bar-category" replace>Beauty & Personal Care</NavLink>
          <NavLink to='/products' className="nav-bar-category" onClick={this.handleClick('fashion')} replace>Fashion</NavLink>
          <NavLink to='/products' onClick={this.handleClick('fitness')} className="nav-bar-category" replace>Fitness</NavLink>
          <NavLink to='/products' onClick={this.handleClick('homedecor')} className="nav-bar-category" replace>Home Decor</NavLink>
          <NavLink to='/products' onClick={this.handleClick('kitchen')} className="nav-bar-category" replace>Kitchen</NavLink>
          <NavLink to='/products' onClick={this.handleClick('maternity')} className="nav-bar-category" replace>Maternity</NavLink>
          <NavLink to='/products' onClick={this.handleClick('smarthome')} className="nav-bar-category" replace>Smart Home</NavLink>
          <NavLink to='/products' onClick={this.handleClick('gift')} className="nav-bar-category" replace>Gift Idea</NavLink>    
          </div>
      </div>
    )
  }
}

export default NavBar;
