import { Card, Carousel } from 'react-bootstrap'
import React from 'react'
import styles from './OurJuice.module.css'

function OurJuice(props) {
    return (
        <div className="our-juice">
            <div className="title">
                <h1>{props.title}</h1>
            </div>
            <div className="juice-content">
            <Carousel interval={null} style={{zIndex: '1'}}>
                <Carousel.Item>
                    <div className={styles.carouselFlex}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src='asd' className="purple" />
                            <Card.Body>
                                <Card.Title>Juice Name</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src='asd' className="purple" />
                            <Card.Body>
                                <Card.Title>Juice Name</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src='asd' className="purple" />
                            <Card.Body>
                                <Card.Title>Juice Name</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src='asd' className="purple" />
                            <Card.Body>
                                <Card.Title>Juice Name</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className={styles.carouselFlex}>
                    <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src='asd' className="purple" />
                            <Card.Body>
                                <Card.Title>Juice Name</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src='asd' className="purple" />
                            <Card.Body>
                                <Card.Title>Juice Name</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src='asd' className="purple" />
                            <Card.Body>
                                <Card.Title>Juice Name</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src='asd' className="purple" />
                            <Card.Body>
                                <Card.Title>Juice Name</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                </Carousel.Item>
            </Carousel>
            </div>
        </div>
    )
}

export default OurJuice
