import React, { useState } from 'react';
import './Header.css'
import BrandLogoNav from '../../Assets/BrandLogo/BrandLogo.svg'
import LangDropDown from './LangDropDown'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrFormClose } from 'react-icons/gr'
import { Translation } from 'react-i18next';

const Header = (props) => {
    const [open, setOpen] = useState(false);

    const hamburgerIcon = <GiHamburgerMenu className="hamburger" onClick={()=> setOpen(!open)} />
    const closeIcon = <GrFormClose className="hamburger" onClick={()=> setOpen(!open)} />
    const Navbar = () => {
        return (
            <div className="navlinksmob">
                <ul className="nav-links">
                    <div className="lists" onClick={()=> setOpen(!open)}>
                        <li>
                            <Translation>
                                {(t, { i18n }) => <a href="/#home">{t('NavLinks.part1')}</a>}
                            </Translation>
                        </li>
                        <li>
                            <Translation>
                                {(t, { i18n }) => <a href="/#about" oo>{t('NavLinks.part2')}</a>}
                            </Translation>
                        </li>
                        <li>
                            <Translation>
                                {(t, { i18n }) => <a href="/#products">{t('NavLinks.part3')}</a>}
                            </Translation>
                        </li>
                        <li>
                            <Translation>
                                {(t, { i18n }) => <a href="/#staff">{t('NavLinks.part4')}</a>}
                            </Translation>
                        </li>
                        <li>
                            <Translation>
                                {(t, { i18n }) => <a href="/#contact">{t('NavLinks.part5')}</a>}
                            </Translation>
                        </li>
                    </div>
                    <div className="right-nav mobile">
                        <LangDropDown />
                    </div>
                </ul>
                <div className="right-nav desktop">
                    <LangDropDown />
                </div>
            </div>
        )
    }

    return (
        <header id="navbar" className="mobile">
            <nav id="navbar" className="navBar mobile-nav scrollBar">
                {/* Logo */}
                <div className="BrandLogo" style={{zIndex: '2'}}>
                    <a href="/#home">
                        <img src={BrandLogoNav} alt="Logo"></img>
                    </a>
                </div>
                    { open ? closeIcon : hamburgerIcon }

                    { open && <Navbar /> }

            </nav>
        </header>
    );
}

export default Header;