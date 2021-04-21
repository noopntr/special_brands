import React, {useState} from 'react'
import './LangDropDown.css'

import i18n from 'i18next';
import cookies from 'js-cookie'



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
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <span className={`flag-icon flag-icon-${lang.country_code} mx-2`}></span>
                {lang.name}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {languages.map(({ code, name, country_code }) =>
                    <li key={country_code}>

                        <button className="dropdown-item" onClick={() => {
                            i18n.changeLanguage(code)
                            setLang(languages.find(l => l.code === code));
                        }}>
                            <span className={`flag-icon flag-icon-${country_code} mx-2`}></span>
                            {name}
                        </button>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default LangDropDown
