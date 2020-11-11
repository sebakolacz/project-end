import React from 'react';
import logo from "../Assets/logo.svg";

const Navigation = () => {
  
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.navigation');
  
  const handleClick = () => {
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('navigation--active');
  }
  


    return (
        <div className="navigation">
          <div className="navigation__logo">
            <div className="navigation__image"><img src={logo} /></div>
            <div className="navigation__name"><h1>Kasprowy</h1></div>
          </div>
          <div className="navigation__menu">
            <ul>
              <li><a href="#"></a>HOME</li>
              <li><a href="#"></a>ABOUT</li>
              <li><a href="#"></a>SERVICES</li>
              <li><a href="#"></a>CONTACT</li>
            </ul>
          </div>
          <button className="navigation__hamburger" onClick={handleClick}>
            <span className="navigation__hamburger-box">
              <span className="navigation__hamburger-inner"></span>
            </span>
          </button>
        </div>
     );
    }

export default Navigation;