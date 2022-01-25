import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({currentUser, logout})=>{
    const display = currentUser ? (
    <div >
        <span className="greeting">Hello, {currentUser.name}</span>
        <button className="nav signout"onClick={logout}>Log Out</button>
    </div>) : (
        <div>
            <span className="greeting"> Hello, Guest</span>
            <div className="nav line2">
                <Link to="/signup" className="nav signup">Sign Up</Link> 
                   &nbsp;or&nbsp;
                <Link to="/login" className="nav signin">Sign In</Link>
            </div>
        </div>
    )
 
    return (
        
    <div className="greeting-container">
        {display}
    </div>
    )
}
export default Greeting;