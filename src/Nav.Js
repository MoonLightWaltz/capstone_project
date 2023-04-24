import React from "react"
import'./App.css';
import {Link} from "react-router-dom";

function Nav() {
    return(


<div className='navPart'>
<nav>
 <img src="hamburger-menu-512.png" alt="hamburger menu icon"></img>
 <ul>
   <li><a href="/home">Home</a></li>
   <li><a href="/about">About</a></li>
   <li><a href="/menu">Menu</a></li>
   <li><Link to="/booking">Booking</Link></li>
   <li><a href="/order_online">Order Online</a></li>
   <li><a href="/login">Login</a></li>
 </ul>
</nav>
</div>
    )
};

export default Nav;