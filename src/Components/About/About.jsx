import React from 'react'
import {BsFillInfoCircleFill} from 'react-icons/bs'
import playBtn from '../../Assets/Imgs/About/playBtn.png'

function About() {
    return (
        <div id="about" className="about">
            <div className="txt-content">
                <h1>GET TO KNOW OUR JUICE</h1>
                <p>Boise Juice Company specializes in 
                    crafting raw, cold-pressed and 
                    100% organic juice enriched with 
                    the highest density of nutrients & flavor. 
                    We believe in supporting local and 
                    regional farms in Idaho, Oregon, and 
                    Washington that grow only 100% organic, 
                    non-GMO produce.
                </p>
                <button className="defButton">
                    <BsFillInfoCircleFill /><a href="/">About Us</a>
                </button>
                
            </div>
            <div className="aboutBg">
                <img className="playBtn" src={playBtn} alt="play" />
            </div>
            
        </div>
    )
}

export default About
