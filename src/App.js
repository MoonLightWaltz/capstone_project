import './App.css';
import './Header' ;
import './Nav' ;
import './Main' ;
import './Footer' ;
import {Link} from "react-router-dom";
import React from "react";

function App() {
  return(
    <>
     <div className='headerPart'>
     <header>
     <img src="littlelemon2.png" alt="Lemon Logo" width="300" height="200"></img><a href="#">Little Lemon Resturant</a>
     </header>
     </div>
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

    <div className='main-1'>
      <div className="mainContainer-1">
        <div className="mainRow-1">
          <div className="main-col-1">
            <main>
              <h1>Little Lemon Resturant</h1>
              <p>odjsniosnocnsdoncjosdncjosdncjonsdjoncojsdncjosdnjocnsdjoncj</p>
              <p>odjsniosnocnsdoncjosdncjosdncjonsdjoncojsdncjosdnjocnsdjoncj</p>
              <p>odjsniosnocnsdoncjosdncjosdncjonsdjoncojsdncjosdnjocnsdjoncj</p>
              <p>odjsniosnocnsdoncjosdncjosdncjonsdjoncojsdnc</p>
              <img src="restauranfood.png" width="425" height="600"></img>
              <br></br>
              <button>Free Coupon Code!</button>
            </main>
          </div>
        </div>
      </div>
    </div>

    <div className='main-2'>
      <div className="mainContainer-2">
      <h1>This Weeks Specials!</h1>
      <button>Order Delivery!</button>
        <div className="main-2-box-1">
          <p><h3>Spaghetti $10.99</h3>
            enkowenfwefeknf
            kiwenmdjowenfweofn
            dkwnedfoewnfowe
            ewonfowenfonwefwen
            wldnwednjewnf
          </p>
          <img src="spaghetti.png" className="Pasta" width="295" height="215"></img>
          </div>
          <div className="main-2-box-2">
            <p><h3>Greek Salad $12.99</h3>
              ejdnoiwendwdweo
              ewoknkowenkowef
              ekpwmdkwemfdewn
              ewkpmdwkpemd
            </p>
            <img src="greek salad.png" className="salad" width="295" height="215"></img>
            </div>
            <div className="main-2-box-3">
              <p><h3>Lemon Cake Desert $7.99</h3>
                smckosandcipsm
                pksamckpsmncs
                ojsdnfonfefk
                pasmdioefniewfn
              </p>
              <img src="lemon dessert.png" className="cake" width="295" height="215"></img>
            </div>
      </div>
    </div>

    <div className='main-3'>
    <h1><a href="#">Testimonials</a></h1>
      <div className="mainContainer-3">
        <div className="main-3-box-1">
          <img src="Jeremey.png" className="Jeremey" width="248" height="238"></img>
          <p>The food is some of
            the best I've ever had,
            I'd highly recommend!

            5/5 stars

            - Jeremey
          </p>
        </div>
        <div className="main-3-box-2">
          <img src="Vanessa.png" className="Vanessa" width="248" height="238"></img>
          <p>Plenty of vegan friendly
            options, which is always
            a plus when I'm on the 
            way to work!

            5/5 stars

            - Vanessa
          </p>
        </div>
        <div className="main-3-box-3">
        <img src="Mark.png" className="Vanessa" width="248" height="238"></img>
        <p>Nice place, I'd go again

          4/5 stars

          - Mark
        </p>
        </div>
        <div className="main-3-box-4">
        <img src="Lily.png" className="Vanessa" width="248" height="238"></img>
        <p>The waiters were super
          friendly to me and my kids.
          That's what I look for the
          most when I'm trying new 
          places.

          5/5 stars

          - Lily
        </p>
        </div>
      </div>
    </div>

    <div className='main-4'>
      <div className="mainContainer-4">
        <div className="mainRow-4">
          <div className="main-col-4">
            <main>
            <h1>Little Lemon Resturant</h1>
            <h2>Chicago</h2>
              <p>cojsdncjosdnjocnsdjoncjnsaiodncoasncojansncjoancojanconaosnj</p>
              <p>odjsniosnocnsdoncjosdncjosdncjonsdjoncojsdncjosdnjocnsdjoncj</p>
              <p>odjsniosnocnsdoncjosdncjosdncjonsdjoncojsdncjosdnjocnsdjoncj</p>
              <p>odjsniosnocnsdoncjosdncjosdncjonsdjoncojsdnc</p>
              <img src="restaurant.png" className="kitchen" width="200" height="300"></img>
              <img src="marioandadrian.png" className="thedude" width="200" height="300"></img>
            </main>
          </div>
        </div>
      </div>
    </div>
   
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
}

export default App;

