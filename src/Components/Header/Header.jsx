import React from 'react';
import './Header.css'
import BrandLogoNav from '../../Assets/BrandLogo/BrandLogo.svg'
import LangDropDown from './LangDropDown';

const Header = () => {
    return (
        <header>
            <nav id="navbar" className="navBar">
                {/* Logo */}
                <div className="BrandLogo" style={{zIndex: '2'}}>
                    <a href="/">
                        <img src={BrandLogoNav} alt="Logo"></img>
                    </a>
                </div>

                {/* NavMenu */}
                    <ul className="nav-links">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="#about">About Us</a>
                        </li>
                        <li>
                            <a href="#products">Products</a>
                        </li>
                        <li>
                            <a href="#staff">Staff</a>
                        </li>
                        <li className="search-icon">
                            <a href="#contact">Contact</a>
                        </li>
                        
                    </ul>

                    {/* Languages */}
                    <ul className="right-nav">
                        <li>
                            <LangDropDown />
                        </li>
                    </ul>
            </nav>
        </header>
    );
}

export default Header;
