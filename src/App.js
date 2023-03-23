import './App.css';
import './Header' ;
import './Nav' ;
import './Main' ;
import './Footer' ;

function App() {
  return(
    <>
     <div className='headerPart'>
     <header>Header</header>
     </div>
     <div className='navPart'>
     <nav>
      Nav Bar
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
    <div className='mainPart'>
    <main>Main</main>
    </div>
    <div className='footerPart'>
    <footer>
     <ul>
       <h3>Doormat Navigation</h3>
       <li><a href="/home">Home</a></li>
       <li><a href="/about">About</a></li>
       <li><a href="/menu">Menu</a></li>
       <li><a href="/reservations">Reservations</a></li>
       <li><a href="/order_online">Order Online</a></li>
       <li><a href="/login">Login</a></li>
       <br></br>
       <h3>Contact Us!</h3>
       <br></br>
       <div>example@gmail.com
         <br></br>
           000-000-0000
           <br></br>
           Address
       </div>
       <br></br>
       <h3>Social Media Links</h3>
       <div>
         <a href="linkedin">LinkedIn</a>
         <br></br>
         <a href="twitter">Twitter</a>
         <br></br>
         <a href="youtube">YouTube</a>
         <br></br>
       </div>
     </ul>
    </footer>
    </div>
    </>
  );
}

export default App;

