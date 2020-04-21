import React from "react";
import ReactDOM from "react-dom";
import "./nav.css";
import desktopLogo from "../../img/LogoFull.svg";
import mobileLogo from "../../img/LogoMobile.svg"


function Nav(){
  return(
    <div className="nav">
      <div className="navLogo">
        <img src={desktopLogo} className="desktopLogo"/>
        <img src={mobileLogo} className="mobileLogo"/>
      </div>
      <div className="navLinks">
        <a>START</a>
        <a>PORTFOLIO</a>
        <a>SERVICES</a>
      </div>
    </div>
  )
}


export default Nav;
