import React from 'react';
import BrandLogoNav from '../../Assets/BrandLogo/BrandLogo.svg'
import Eng from '../../Assets/BrandLogo/Eng.svg'
import { RiArrowDownSFill } from 'react-icons/ri'

const Header = () => {
    return (
        <header>
            <nav className="navBar">
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
                            <a href="/">About Us</a>
                        </li>
                        <li>
                            <a href="/">Products</a>
                        </li>
                        <li>
                            <a href="/">Staff</a>
                        </li>
                        <li className="search-icon">
                            <a href="/">Contact</a>
                        </li>
                        
                    </ul>

                    {/* Languages */}
                    <ul className="right-nav">
                        <li>
                            <img style={{width: '21px', marginRight: '5px', marginBottom: '2px'}} src={Eng} alt="ENG" />
                            <a href="/">ENG</a>
                            <RiArrowDownSFill style={{paddingBottom:'4px', width: '20px'}} />
                        </li>
                    </ul>
            </nav>
        </header>
    );
}

export default Header;
