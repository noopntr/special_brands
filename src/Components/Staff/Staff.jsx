import { Card, Carousel } from 'react-bootstrap'
import React from 'react'
import './Staff.css'
import staffBg from '../../Assets/Imgs/Staff/staffBg.png'
import staffOne from '../../Assets/Imgs/Staff/1.png'
import staffTwo from '../../Assets/Imgs/Staff/2.png'
import staffThree from '../../Assets/Imgs/Staff/3.png'
import { Translation } from 'react-i18next'

function Staff(props) {
    return (
        <div id="staff" className="staff">
            <div className="title">
                <Translation>
                    {(t, { i18n }) => <h1>{t('Staff.title')}</h1>}
                </Translation>
            </div>
            <img src={staffBg} alt="grape" />
            <div className="desktop">
                <Carousel className="staff-carousel">
                    <Carousel.Item>
                        <div className="carouselFlex">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={staffOne} />
                                <Card.Body>
                                    <Card.Text>
                                        <span className="card-text-h1">{props.firstName}</span>
                                        {props.firstPosition}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={staffTwo} />
                                <Card.Body>
                                    <Card.Text>
                                        <span className="card-text-h1">{props.secondName}</span>
                                        {props.secondPosition}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={staffThree} />
                                <Card.Body>
                                    <Card.Text>
                                        <span className="card-text-h1">{props.thirdName}</span>
                                        {props.thirdPosition}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                    <div className="carouselFlex">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={staffOne} />
                                <Card.Body>
                                    <Card.Text>
                                        <span className="card-text-h1">{props.firstName}</span>
                                        {props.firstPosition}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={staffTwo} />
                                <Card.Body>
                                    <Card.Text>
                                        <span className="card-text-h1">{props.secondName}</span>
                                        {props.secondPosition}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={staffThree} />
                                <Card.Body>
                                    <Card.Text>
                                        <span className="card-text-h1">{props.thirdName}</span>
                                        {props.thirdPosition}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>

            {/* Responsive */}

            <div className="mobile">
                {/* for responsive */}

            <div className="juice-content mobile">
                <Carousel interval={null} style={{zIndex: '1'}}>
                    <Carousel.Item>
                        <div className="carouselFlex">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={staffThree} />
                                <Card.Body>
                                    <Card.Text>
                                        <span className="card-text-h1">{props.thirdName}</span>
                                        {props.thirdPosition}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carouselFlex">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={staffThree} />
                                <Card.Body>
                                    <Card.Text>
                                        <span className="card-text-h1">{props.thirdName}</span>
                                        {props.thirdPosition}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carouselFlex">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={staffThree} />
                                <Card.Body>
                                    <Card.Text>
                                        <span className="card-text-h1">{props.thirdName}</span>
                                        {props.thirdPosition}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carouselFlex">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={staffThree} />
                                <Card.Body>
                                    <Card.Text>
                                        <span className="card-text-h1">{props.thirdName}</span>
                                        {props.thirdPosition}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
            </div>
        </div>
    )
}

export default Staff
