import React from "react";
import ReactDOM from "react-dom";
import "./nav.css";
import desktopLogo from "../../img/LogoFull.svg";
import mobileLogo from "../../img/LogoMobile.svg";
import hamburgerIco from "../../img/MenuIcon.svg";


class Nav extends React.Component{
  constructor(){
    super()
    this.state = {
      open: false
    }
  };

  render(){
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
          <img src={hamburgerIco} className="hamIcon"/>
        </div>
      </div>
    )
  }
};

export default Nav;
