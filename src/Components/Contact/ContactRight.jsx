import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import emailjs from 'emailjs-com'
import { Modal, Button } from 'react-bootstrap';

function ContactRight() {
    const {t} = useTranslation()
    
    const [ isValid, setIsValid ] = useState(false);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let success =   <useTranslation>
                        {t('Contact.message_sent')}
                    </useTranslation>;
    let error= "Loading...";

    function sendEmail(e) {
    e.preventDefault();
        
    
    emailjs.sendForm('service_3c9s50c', 'template_gip5que', e.target, 'user_DmbAN19hktem5zuMTXWTj')
        .then((result) => {
        console.log(result.text);
        setIsValid(true)
        return isValid ? success : null
        }, (error) => {
        console.log(error.text);
        setIsValid(false)
        return isValid ? error : null
        });
        e.target.reset()
    }

    

    return (
        <div className="contact-form right">
            <Modal 
            className={isValid ? "msg appear" : "msg"} 
            show={show} 
            onHide={handleClose} 
            keyboard={true} 
            animation={true}
            centered={true}
            >
                <Modal.Header closeButton />
                <Modal.Body>{isValid ? success : error}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                    {t('Contact.modal_close')}
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className="title">
                <h1>{t('Contact.title')}</h1>
            </div>
            <div className="contact-inputs">
                <form onSubmit={sendEmail}>
                    <div className="flex-row">
                        <input type="text" id="name" name="from_name" placeholder={t('Contact.name_placeholder')} />
                        <input type="email" id="email" name="from_email" placeholder={t('Contact.email_placeholder')} />
                    </div>
                    <div className="flex-col">
                        <input type="text" id="subject" name="subject" placeholder={t('Contact.subject_placeholder')} />
                        <textarea type="text" id="message" name="message" placeholder={t('Contact.message_placeholder')} />
                        <button onClick={handleShow} type="submit">{t('Contact.send_message')}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactRight
