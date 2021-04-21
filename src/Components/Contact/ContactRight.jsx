import React from 'react'
import { useTranslation } from 'react-i18next'

function ContactRight() {

    const {t} = useTranslation()

    return (
        <div className="contact-form right">
            <div className="title">
                <h1>{t('Contact.title')}</h1>
            </div>
            <div className="contact-inputs">
                <form>
                    <div className="flex-row">
                        <input type="text" id="name" name="name" placeholder={t('Contact.name_placeholder')} />
                        <input type="email" id="email" name="email" placeholder={t('Contact.email_placeholder')} />
                    </div>
                    <div className="flex-col">
                        <input type="text" id="subject" name="subject" placeholder={t('Contact.subject_placeholder')} />
                        <textarea type="text" id="message" name="message" placeholder={t('Contact.message_placeholder')} />
                        <button type="submit">{t('Contact.send_message')}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactRight
