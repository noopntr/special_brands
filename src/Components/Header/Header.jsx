import React, { useState } from 'react';
import './Header.css'
import BrandLogoNav from '../../Assets/BrandLogo/BrandLogo.svg'
import NavLinks from './NavLinks';
import MobileHeader from './MobileHeader'

const Header = ({ title, toggle }) => {

    const [navbar, setNavbar ] = useState(false)

    const changeBackground = () => {  
        if(window.scrollY >= 200){
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <header>
            <MobileHeader />
            <nav id="navbar" className={navbar ? "navBar desktop navbar scrollBar" : "navBar desktop navbar"}>
                {/* Logo */}
                <div className="BrandLogo" style={{zIndex: '2'}}>
                    <a href="/">
                        <img src={BrandLogoNav} alt="Logo"></img>
                    </a>
                </div>
                <NavLinks />
            </nav>
        </header>
    );
}

export default Header;
