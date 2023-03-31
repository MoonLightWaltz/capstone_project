import './App.css';
import './Header' ;
import './Nav' ;
import './Main' ;
import './Footer' ;

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
        <li><a href="/reservations">Reservations</a></li>
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
              <p>odjsniosnocnsdoncjosdncjosdncjonsdjoncojsdncjosdnjocnsdjoncj</p>
              <img src="restauranfood.png" width="350" height="500"></img>
              <br></br>
              <button>Free Coupon Code!</button>
            </main>
          </div>
        </div>
      </div>
    </div>

    <div className='main-2'>
      <div className="mainContainer-2">
        <div className="mainRow-2">
          <div className="main-col-2">
            <main>Main</main>
          </div>
        </div>
      </div>
    </div>

    <div className='main-3'>
      <div className="mainContainer-3">
        <div className="mainRow-3">
          <div className="main-col-3">
            <main>Main</main>
          </div>
        </div>
      </div>
    </div>

    <div className='main-4'>
      <div className="mainContainer-4">
        <div className="mainRow-4">
          <div className="main-col-4">
            <main>Main</main>
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
              <li><a href="#">Reservation</a></li>
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

