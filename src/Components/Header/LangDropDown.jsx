import React from 'react'
import { useTranslation } from 'react-i18next';
import './LangDropDown.css'
import { ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap'
import Eng from '../../Assets/BrandLogo/Eng.svg'

function LangDropDown(props) {
    const { t, i18n } = useTranslation();

    function handleClick(lang) {
        i18n.changeLanguage(lang);
    }

    return (
        <>
            <div className="mb-1 language defButton">
                {[DropdownButton].map((DropdownType, idx) => (
                <DropdownType
                    as={ButtonGroup}
                    key={idx}
                    id={`dropdown-button-drop-${idx}`}
                    size="lg"
                    title="Lang"
                    aria-expanded="false"
                >
                    <Dropdown.Item onClick={() => handleClick('en')} eventKey="1">English<img style={{width: '21px', marginRight: '5px', marginBottom: '2px'}} src={Eng} alt="ENG" /></Dropdown.Item>
                    <Dropdown.Item onClick={() => handleClick('ka')} eventKey="2">ქართული</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleClick('he')} eventKey="3">עִבְרִית</Dropdown.Item>
                    <h1>{t('About.title')}</h1>
                </DropdownType>
                ))}
            </div>
        </>
    )
}

export default LangDropDown
