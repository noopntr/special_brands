import React from 'react'

function ContactRight() {
    return (
        <div className="contact-form right">
            <div className="title">
                <h1>Contact Us</h1>
            </div>
            <div className="contact-inputs">
                <form>
                    <div className="flex-row">
                        <input type="text" id="name" name="name" placeholder="Name Surname" />
                        <input type="email" id="email" name="email" placeholder="Email" />
                    </div>
                    <div className="flex-col">
                        <input type="text" id="subject" name="subject" placeholder="Subject" />
                        <textarea type="text" id="message" name="message" placeholder="Message" />
                        <button type="submit">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactRight
