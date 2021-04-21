import React from 'react'
import { useTranslation } from 'react-i18next';
import './LangDropDown.css'
import { ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap'
import Eng from '../../Assets/BrandLogo/Eng.svg'


const languages = [
    {
        code: 'en',
        name: 'English',
        country_code: 'gb'
    },
    {
        code: 'ka',
        name: 'ქართული',
        country_code: 'ka'
    }
]

function LangDropDown(props) {
    const { i18n } = useTranslation();

    function handleClick(lang) {
        i18n.changeLanguage(lang);
    }

    return (
        <>
            <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Lang
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        {languages.map(({ code, name, country_code }) =>
                            <li><a className="dropdown-item" key={country_code}>{name}</a></li>
                        )}
                    </ul>
                </div>
        </>
    )
}

export default LangDropDown
