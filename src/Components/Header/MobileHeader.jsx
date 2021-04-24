import React, { useState } from 'react';
import './Header.css'
import BrandLogoNav from '../../Assets/BrandLogo/BrandLogo.svg'
import NavLinks from './NavLinks';
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrFormClose } from 'react-icons/gr'

const Header = () => {
    const [open, setOpen] = useState(false);

    const hamburgerIcon = <GiHamburgerMenu className="hamburger" onClick={()=> setOpen(!open)} />
    const closeIcon = <GrFormClose className="hamburger" onClick={()=> setOpen(!open)} />

    return (
        <header id="navbar" className="mobile">
            <nav id="navbar" className="navBar mobile-nav scrollBar">
                {/* Logo */}
                <div className="BrandLogo" style={{zIndex: '2'}}>
                    <a href="/">
                        <img src={BrandLogoNav} alt="Logo"></img>
                    </a>
                </div>
                    { open ? closeIcon : hamburgerIcon }

                    { open && <NavLinks onClick={()=> setOpen(!open)} className="mobb" />}

            </nav>
        </header>
    );
}

export default Header;
