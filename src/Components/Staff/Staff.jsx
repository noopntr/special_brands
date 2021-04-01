import { Card, Carousel } from 'react-bootstrap'
import React from 'react'
import staffBg from '../../Assets/Imgs/Staff/staffBg.png'
import staffOne from '../../Assets/Imgs/Staff/1.png'
import staffTwo from '../../Assets/Imgs/Staff/2.png'
import staffThree from '../../Assets/Imgs/Staff/3.png'

function Staff(props) {
    return (
        <div id="staff" className="staff">
            <div className="title">
                <h1>{props.title}</h1>
            </div>
            <img src={staffBg} alt="grape" />
            <Carousel className="staff-carousel">
                <Carousel.Item>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={staffOne} />
                        <Card.Body>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>      
                    
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={staffTwo} />
                        <Card.Body>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>         

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={staffThree} />
                        <Card.Body>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>         
                </Carousel.Item>
                <Carousel.Item>

                </Carousel.Item>
                <Carousel.Item>

                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Staff
