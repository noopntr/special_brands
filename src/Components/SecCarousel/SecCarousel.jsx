import React from 'react'
import { Carousel, Card } from 'react-bootstrap'

function SecCarousel() {
    return (
        <div id="sec-carousel" className="sec-carousel">
            <Carousel>
                <Carousel.Item className="sec-carousel-carousel">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                    </Card>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default SecCarousel
