import React from 'react';
import './Header.css'
import BrandLogoNav from '../../Assets/BrandLogo/BrandLogo.svg'
import NavLinks from './NavLinks';
import MobileHeader from './MobileHeader'

const Header = () => {
    return (
        <header>
            <MobileHeader />
            <nav id="navbar" className="navBar desktop scrollBar">
                {/* Logo */}
                <div className="BrandLogo" style={{zIndex: '2'}}>
                    <a href="/#home">
                        <img src={BrandLogoNav} alt="Logo"></img>
                    </a>
                </div>
                <NavLinks />
            </nav>
        </header>
    );
}

export default Header;
