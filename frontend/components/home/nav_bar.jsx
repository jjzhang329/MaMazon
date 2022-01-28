import React from 'react';
import { Link, NavLink } from 'react-router-dom';


class NavBar extends React.Component{
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  
  handleClick(value){

     return()=>{
      this.props.updateFilter('department', value)
      //  this.props.fetchAllProducts(this.props.filter)
       
    }
  }




  render(){
   
    return (
      
      <div className='home-nav-bar-container'>
          <div className='nav-bar'>
                <NavLink to='/products'className="nav-bar-category" onClick={this.handleClick("")} replace>All Products</NavLink>
                <NavLink to='/products' onClick={this.handleClick('baby')} className="nav-bar-category" replace>Baby</NavLink>
                <NavLink to='/products' onClick={this.handleClick('beauty')} className="nav-bar-category" replace>Beauty & Personal Care</NavLink>
                <NavLink to='' className="nav-bar-category">Fashion</NavLink>
                <NavLink to='' className="nav-bar-category">Fitness</NavLink>
                <NavLink to='' className="nav-bar-category">Home Decor</NavLink>
                <NavLink to='' className="nav-bar-category">Kitchen</NavLink>
                <NavLink to='' className="nav-bar-category">Smart Home</NavLink>
                <NavLink to='' className="nav-bar-category">Gift Idea</NavLink>    
          </div>
      </div>
    )
  }
}

export default NavBar;
