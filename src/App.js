import React from 'react';
import ReactDOM from "react-dom";
import Welle from "./img/Welle.svg";
import "./App.css";

//Componenten Importieren
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";




class App extends React.Component {
  constructor() {
    super()

  }
  render(){
    return(
      <div>
        <div className="main">
          <Nav/>
          <div className="header">
            <h1>Coming Soon</h1>
            <h2>Sorry to disappoint you, but this site is still under construction..</h2>
          </div>
          <Footer/>
        </div>
        <div className="background">
          <img src={Welle}/>
        </div>
      </div>
    );
  }
}

export default App;
