import React from 'react'
import brandLogo from '../../Assets/BrandLogo/BrandLogo.svg'
import { IoIosMail } from 'react-icons/io'
import { CgPhone } from 'react-icons/cg'
import { TiLocation } from 'react-icons/ti'
import { AiFillFacebook, AiOutlineInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'

import {useTranslation} from 'react-i18next'


function ContactLeft() {

    const {t} = useTranslation()


    return (
        <div className="contact-left-side left">
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
                            <p>{t('Contact.address_title')}</p>
                            <p>{t('Contact.address')}</p>
                        </div>
                    </div>

                    <div className="contact-branding-icons second">
                        <div className="icon">
                            <IoIosMail />
                        </div>
                        
                        <div className="naming">
                            <p>{t('Contact.email_title')}</p>
                            <p>{t('Contact.email')}</p>
                        </div>
                    </div>

                    <div className="contact-branding-icons third">
                        <div className="icon">
                            <CgPhone />
                        </div>
                        <div className="naming">
                            <p>{t('Contact.phone_title')}</p>
                            <p>{t('Contact.phone')}</p>
                        </div>
                    </div>
                    <div className="contact-socials">
                        <ul>
                            <li>
                                <a href='https://Facebook.com' rel="noreferrer" target="_blank"><AiFillFacebook /></a>
                            </li>
                            <li>
                                <a href='https://Instagram.com' rel="noreferrer" target="_blank"><AiOutlineInstagram /></a>
                            </li>
                            <li>
                                <a href='https://Youtube.com' rel="noreferrer" target="_blank"><AiFillYoutube /></a>
                            </li>
                            <li>
                                <a href='https://Twitter.com' rel="noreferrer" target="_blank"><AiOutlineTwitter /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactLeft
