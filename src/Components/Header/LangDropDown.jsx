import React from 'react'
import './LangDropDown.css'
import { ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap'
import Eng from '../../Assets/BrandLogo/Eng.svg'

function LangDropDown() {

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
                    <Dropdown.Item eventKey="1">English<img style={{width: '21px', marginRight: '5px', marginBottom: '2px'}} src={Eng} alt="ENG" /></Dropdown.Item>
                    <Dropdown.Item eventKey="2">ქართული</Dropdown.Item>
                    <Dropdown.Item eventKey="3">עִבְרִית</Dropdown.Item>
                </DropdownType>
                ))}
            </div>
        </>
    )
}

export default LangDropDown
