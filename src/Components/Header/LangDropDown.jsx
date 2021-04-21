import React, { useState } from 'react'
import './LangDropDown.css'

import i18n from 'i18next';
import cookies from 'js-cookie'
import { Dropdown } from 'react-bootstrap';



const languages = [
    {
        code: 'en',
        name: 'English',
        country_code: 'gb'
    },
    {
        code: 'ka',
        name: 'ქართული',
        country_code: 'ge'
    },
    {
        code: 'he',
        name: 'עִברִית',
        country_code: 'il'
    },
]

function LangDropDown(props) {

    const currentLangCode = cookies.get('i18next') || 'en';
    let currentLanguage = languages.find(l => l.code === currentLangCode)

    const [lang, setLang] = useState(currentLanguage);


    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                <span className={`flag-icon flag-icon-${lang.country_code} mx-2`}></span>
                {lang.name}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {languages.map(({ code, name, country_code }) =>
                    <Dropdown.Item key={country_code} onClick={() => { 
                        i18n.changeLanguage(code) 
                        setLang(languages.find(l => l.code === code))
                    }}>
                        <span className={`flag-icon flag-icon-${country_code} mx-2`}></span>
                        {name}
                    </Dropdown.Item>
                )}
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default LangDropDown
