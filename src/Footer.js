import './App.css';
import React from "react";

function Footer () {
    return(
<>
<footer className="footer">
<div className="footerContainer">
  <div className="row">
    <div className="footer-col">
      <h4>Doormat Navigation</h4>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Booking</a></li>
        <li><a href="#">Order Online</a></li>
        <li><a href="#">Login</a></li>
      </ul>
    </div>
    <div className="footer-col">
      <h4>Contact Us</h4>
      <ul>
        <li><a href="#">example@gmail.com</a></li>
        <li><a href="#">000 000-0000</a></li>
        <li><a href="#">Address</a></li>
      </ul>
    </div>
    <div className="footer-col">
      <h4>Social Media Links</h4>
      <ul>
        <li><a href="#">LinkedIn</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">YouTube</a></li>
      </ul>
      <div className="footer-col">
        <ul>
        <li><img src="littlelemon2.png" alt="Lemon Logo" width="300" height="200"></img></li>
        </ul>
        </div>
    </div>
  </div>
</div>
</footer>
</>
    );
};

export default Footer;