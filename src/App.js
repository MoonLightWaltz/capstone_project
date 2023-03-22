import logo from './logo.svg';
import './App.css';
import './Header' ;
import './Nav' ;
import './Main' ;
import './Footer' ;

function App() {
  return (
    <>
     <Header></Header>
     <Nav>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservations">Reservations</a></li>
        <li><a href="/order_online">Order Online</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
     </Nav>
     <Main></Main>
     <Footer>
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
            000-000-0000
            Address
        </div>
        <br></br>
        <h3>Social Media Links</h3>
        <div>
          <a href="linkedin">LinkedIn</a>
          <a href="twitter">Twitter</a>
          <a href="youtube">YouTube</a>
        </div>
      </ul>
     </Footer>
    </>
  );
}

export default App;
