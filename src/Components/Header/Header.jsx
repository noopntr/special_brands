import React from 'react';
import './Header.css'
import BrandLogoNav from '../../Assets/BrandLogo/BrandLogo.svg'
import LangDropDown from './LangDropDown';
import { Translation } from 'react-i18next';

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
                            <Translation>
                                {(t, { i18n }) => <a href="/">{t('NavLinks.part1')}</a>}
                            </Translation>
                        </li>
                        <li>
                            <Translation>
                                {(t, { i18n }) => <a href="#about">{t('NavLinks.part2')}</a>}
                            </Translation>
                        </li>
                        <li>
                            <Translation>
                                {(t, { i18n }) => <a href="#products">{t('NavLinks.part3')}</a>}
                            </Translation>
                        </li>
                        <li>
                            <Translation>
                                {(t, { i18n }) => <a href="#staff">{t('NavLinks.part4')}</a>}
                            </Translation>
                        </li>
                        <li className="search-icon">
                            <Translation>
                                {(t, { i18n }) => <a href="#contact">{t('NavLinks.part5')}</a>}
                            </Translation>
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
