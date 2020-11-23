import React from 'react';
import logo from "../Assets/logo.svg";

const Navigation = () => {
  
const [opened, setOpened] = React.useState(false);

    return (
        <header className="navigation">
          <div className="navigation__logo">
            <div className="navigation__image"><img src={logo} /></div>
            <div className="navigation__name"><h1>Kasprowy</h1></div>
          </div>
          <nav className={`navigation__menu ${(opened) ? "navigation--active" : ""}`}>
            <div className="navigation__list">
              <ul className="navigation__ul">
                <li><a href="#"></a>HOME</li>
                <li><a href="#"></a>ABOUT</li>
                <li><a href="#"></a>SERVICES</li>
                <li><a href="#"></a>CONTACT</li>
              </ul>
            </div>
          </nav>
          <button onClick={() => setOpened(opened => !opened)} className={`navigation--active ${(opened) ? "hamburger--active" : ""}`}>
            <span className="navigation__hamburger-box">
              <span className="navigation__hamburger-inner"></span>
            </span>
          </button>
        </header>
     );
    }

export default Navigation;