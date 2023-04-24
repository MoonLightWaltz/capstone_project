import './App.css';
import Header from "./Header"
import Nav from "./Nav" ;
import Main from "./Main" ;
import Footer from "./Footer" ;
import {Link} from "react-router-dom";
import React from "react";

function App() {
  return(
    <>
    <Header></Header>
    <Nav></Nav>
    <Main></Main>
    <Footer></Footer>

   </>
  );
}

export default App;

