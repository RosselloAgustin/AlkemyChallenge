import React from 'react';
import { NavLink } from 'react-router-dom';

import logoAlkemy from '../../assets/image/alkemyImg.png';
import logoReact from '../../assets/image/reactLogo.png';

import './NavBar.css';

const NavBar = () => {

    return (
        <header className="header">
        <div className="header__title">
            <h1>
            CHALLENGE FRONTEND
            </h1>
        </div>

        <div className="header__block">
            <div className="block">
            <div className="block__container">
                <div className="block__logoReact">
                <img src={logoReact} alt="Logo de React"/>
                </div>
                <p className="block__title">React</p>
                <div className="block__logoReact">
                <img src={logoReact} alt="Logo de React"/>
                </div>
            </div>
            </div>
        </div>
        
        <nav className="header__navBar">
            <div className="navBar-list">
                <ul>
                    <NavLink to="/"><li>Home</li></NavLink>
                    <NavLink to="/search"><li>Search</li></NavLink>
                    <NavLink to="/search"><li>Search</li></NavLink>
                    <NavLink to="/search"><li>Search</li></NavLink>
                </ul>
            </div>
        </nav>
        
        <div className="header__logoAlkemy">
            <img src={logoAlkemy} alt="Logo de Alkemy"/>
        </div>
        </header>

    

    );
}

export default NavBar;