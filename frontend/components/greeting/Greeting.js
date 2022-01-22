import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({currentUser, logout})=>{
    const display = currentUser ? (
    <div className="greeting">
        <p>Hello, {currentUser.name}</p>
        <button onClick={logout}>Log Out</button>
    </div>) : (
        <div className="greeting">
            <p> Hello, Guest</p>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login" >Sign In</Link>
    </div>)
 
    return (
        
    <div>
        {display}
    </div>
    )
}
export default Greeting;