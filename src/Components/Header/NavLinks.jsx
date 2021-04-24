import React from 'react'
import { Translation } from 'react-i18next'
import './Header.css'
import LangDropDown from './LangDropDown'


function NavLinks() {
    return (
        <div className="navlinksmob">
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
                <li>
                    <Translation>
                        {(t, { i18n }) => <a href="#contact">{t('NavLinks.part5')}</a>}
                    </Translation>
                </li>
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

export default NavLinks
