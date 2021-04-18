import { Card, Carousel } from 'react-bootstrap'
import React from 'react'
import './OurJuice.css'

function OurJuice(props) {

    

    return (
        <div id="products" className="our-juice background-blue">
            <div className="title">
                <h1>{props.title}</h1>
            </div>
            <div className="juice-content desktop">
                <Carousel interval={null} style={{zIndex: '1'}}>
                    <Carousel.Item>
                        <div className="carouselFlex">
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
                    <div className="carouselFlex">
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

            {/* for responsive */}

            <div className="juice-content mobile">
                <Carousel interval={null} style={{zIndex: '1'}}>
                    <Carousel.Item>
                        <div className="carouselFlex">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src='asd' className="purple" />
                                <Card.Body>
                                    <Card.Title>Juice Name</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carouselFlex">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src='asd' className="purple" />
                                <Card.Body>
                                    <Card.Title>Juice Name</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carouselFlex">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src='asd' className="purple" />
                                <Card.Body>
                                    <Card.Title>Juice Name</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carouselFlex">
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
