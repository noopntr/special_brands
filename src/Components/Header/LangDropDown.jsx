import React from 'react'
import './LangDropDown.css'

import i18n from 'i18next';



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

    return (
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Lang
                    </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    {languages.map(({ code, name, country_code }) =>
                        <li key={country_code}>
                            <button className="dropdown-item" onClick={ () => i18n.changeLanguage(code)}>{name}</button>
                        </li>
                    )}
                </ul>
            </div>
    )
}

export default LangDropDown
