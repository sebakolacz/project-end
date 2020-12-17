import React from 'react';
import logo from "../Assets/logo.svg";
import { Link } from 'react-scroll';

const Navigation = () => {

    return (
        <header className="navigation">
          <div className="navigation__logo">
            <div className="navigation__image"><img src={logo} /></div>
            <div className="navigation__name"><h1>Kasprowy</h1></div>
          </div>
          <nav className="navigation__menu">
            <div className="navigation__list">
              <ul className="navigation__ul">
                <li>HOME</li>
                <Link to="information__container" smooth={true} duration={900}><li>ABOUT</li></Link>
                <Link to="service" smooth={true} duration={900}><li>SERVICES</li></Link>
                <Link to="contact" smooth={true} duration={900}><li>CONTACT</li></Link>
              </ul>
            </div>
          </nav>
        </header>
     );
    }

export default Navigation;