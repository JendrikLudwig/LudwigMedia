import React from "react";
import ReactDOM from "react-dom";
import "./footer.css"

import twitterIco from "../../img/twitter.svg";
import instaIco from "../../img/instagram.svg";
import tubeIco from "../../img/youtube.svg";


function Footer(){
  return(
    <div className="footer">
      <div className="footerNav">
        <a>Contact</a>
        <a>Imprint</a>
      </div>
      <div className="footerSocial">
        <img src={twitterIco}/>
        <img src={instaIco}/>
        <img src={tubeIco}/>
      </div>
    </div>
  )
}


export default Footer;
