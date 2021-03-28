import { Carousel } from 'react-bootstrap'
import React from 'react'
import styles from './FirstCarousel.module.css'
import SlideOne from '../../Assets/Imgs/CarouselImgs/1.png'
import SlideTwo from '../../Assets/Imgs/CarouselImgs/2.jpg'
import SlideThree from '../../Assets/Imgs/CarouselImgs/3.jpg'

function FirstCarousel() {
    return (
        <div>
        <Carousel style={{zIndex: '1'}}>
            <Carousel.Item className={styles.carouselPics}>
                <div className={styles.filterOnPic}>
                    <img
                    className="d-block w-100"
                    src={SlideOne}
                    alt="Second slide"
                    />
                </div>
                <Carousel.Caption className={styles.carouselContent}>
                    <h1>Support Your <br/> <b>Immune Health</b></h1>
                    <button className={styles.carouselButton}>DISCOVER SPARKLING JUICE</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={styles.carouselPics}>
                <div className={styles.filterOnPic}>
                    <img
                    className="d-block w-100"
                    src={SlideTwo}
                    alt="Second slide"
                    />
                </div>

                <Carousel.Caption className={styles.carouselContent}>
                    <h1>Support Your <br/> <b>Immune Health</b></h1>
                    <button className={styles.carouselButton}>DISCOVER SPARKLING JUICE</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className={styles.carouselPics}>
                <div className={styles.filterOnPic}>
                    <img
                    className="d-block w-100"
                    src={SlideThree}
                    alt="Second slide"
                    />
                </div>
                <Carousel.Caption className={styles.carouselContent}>
                    <h1>Support Your <br/> <b>Immune Health</b></h1>
                    <button className={styles.carouselButton}>DISCOVER SPARKLING JUICE</button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    )
}

export default FirstCarousel