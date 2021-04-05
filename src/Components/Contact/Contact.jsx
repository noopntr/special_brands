import React from 'react'
import brandLogo from '../../Assets/BrandLogo/BrandLogo.svg'
import { IoIosMail } from 'react-icons/io'
import { CgPhone } from 'react-icons/cg'
import { TiLocation } from 'react-icons/ti'
import { AiFillFacebook, AiOutlineInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'

function Contact() {
    return (
        <div id="contact" className="contact">
            {/* left side branding */}
            <div className="contact-left-side">
                <div className="contact-branding">
                    <div className="contact-info">
                        <div className="brandingLogo">
                            <img src={brandLogo} alt="background" />
                        </div>
                        <div className="contact-branding-icons first">
                            <div className="icon">
                                <TiLocation />
                            </div>
                            <div className="naming">
                                <p>Address</p>
                                <p>location, london</p>
                            </div>
                        </div>

                        <div className="contact-branding-icons second">
                            <div className="icon">
                                <IoIosMail />
                            </div>
                            
                            <div className="naming">
                                <p>Email</p>
                                <p>contact@domain.com</p>
                            </div>
                        </div>

                        <div className="contact-branding-icons third">
                            <div className="icon">
                                <CgPhone />
                            </div>
                            <div className="naming">
                                <p>Phone</p>
                                <p>+000 123 456 789</p>
                            </div>
                        </div>
                        <div className="contact-socials">
                            <ul>
                                <li>
                                    <AiFillFacebook />
                                </li>
                                <li>
                                    <AiOutlineInstagram />
                                </li>
                                <li>
                                    <AiFillYoutube />
                                </li>
                                <li>
                                    <AiOutlineTwitter />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* right side forms */}
            <div className="contact-form">
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
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
