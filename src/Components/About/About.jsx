import React from 'react'
import './About.css'
// import {BsFillInfoCircleFill} from 'react-icons/bs'
// import playBtn from '../../Assets/Imgs/About/playBtn.png'
import staffBg from '../../Assets/Imgs/Staff/staffBg.png'
import { TranslatedAboutTitle } from './TranslatedAboutTitle'
import { TranslatedAboutContent } from './TranslatedAboutContent'


function About(props) {

    return (
        <div id="about" className="about">
            <img src={staffBg} alt="grape" />
            <TranslatedAboutTitle />
            <div className="About-content">
                <div className="txt-content">
                    <TranslatedAboutContent />
                    {/* <button className="defButton">
                        <BsFillInfoCircleFill /><a href="/">About Us</a>
                    </button> */}
                </div> 
                <div className="aboutBg">
                    {/* <img className="playBtn" src={playBtn} alt="play" /> */}
                </div>
            </div>
        </div>
    )
}

export default About
