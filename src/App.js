import React from 'react';
import ReactDOM from "react-dom";
import Welle from "./Welle.svg";
import "./App.css";




class App extends React.Component {
  constructor() {
    super()

  }
  render(){
    return(
      <div>
        <div className="main">
          <div className="nav">
          </div>

          <div className="header">
            <h1>Coming Soon</h1>
            <h2>Sorry to disappoint you, but this site is still under construction..</h2>
          </div>

          <div className="footer">
          </div>

        </div>

        <div className="background">
          <img src={Welle}/>
        </div>
      </div>
    );
  }
}

export default App;
