import React from 'react'
import './Contact.css'
import ContactLeft from './ContactLeft'
import ContactRight from './ContactRight'

function Contact() {
    return (
        <div id="contact" className="contact">
            <ContactLeft />
            <ContactRight />
        </div>
    )
}

export default Contact
