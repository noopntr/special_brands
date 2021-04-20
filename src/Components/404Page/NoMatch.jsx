import React from 'react'
import './NoMatch.css'
import Header from '../Header/Header'
import Footer from '../Footer/footer'
import grape from '../../Assets/Imgs/404/404.png'
import ErrorTxt from './ErrorTxt'

function NoMatch() {
    return (
        <div id="noMatch" className="noMatch">
            <div className="noMatch-bg">
                <img src={grape} alt="background" />
            </div>
            <Header />
            <ErrorTxt />
            <Footer />
        </div>
    )
}

export default NoMatch
