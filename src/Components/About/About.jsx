import React from 'react'
import './About.css'
// import {BsFillInfoCircleFill} from 'react-icons/bs'
// import playBtn from '../../Assets/Imgs/About/playBtn.png'
import staffBg from '../../Assets/Imgs/Staff/staffBg.png'


function About(props) {

    return (
        <div id="about" className="about">
            <img src={staffBg} alt="grape" />
            {/* <div className="title"><h1>{t(About.title)}</h1></div> */}
            <div className="About-content">
                <div className="txt-content">
                    <p>
                        {/* <b>Special brands’</b> company the biggest juice producer in Georgia.  
                        The Company is a worldwide solid way of life mark that moves and improves stimulating 
                        living through naturally mixed entire products of the soil smoothies, bowls, juices, 
                        cold-squeezed shots, lifts, tidbits, and supper substitutions. Fruit juice is 100% pure 
                        juice made from the flesh of fresh fruit or from whole fruit, depending on the type used. 
                        It is not permitted to add sugars, sweeteners, preservatives, flavorings or colorings to 
                        fruit juice. <br /><br />  <b>Special brands’</b> To  produce as much more juices and sell them on the international 
                        market. It   has   in excess around the world.
                        Our each way and choice prompts the target of one clean earth. 
                        From our assurance to be completely compostable to the lively, 
                        natural organic product we decide for our clients – All Juice, 
                        No Cups! isn’t only an aphorism however a critical reality for us. 
                        Our one of a kind idea of getting a charge out of juice specifically 
                        from its common state is intended to be both energizing for the 
                        shopper and healthy for the earth. */}
                        {('AboutContent.part1')}
                    </p>
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
