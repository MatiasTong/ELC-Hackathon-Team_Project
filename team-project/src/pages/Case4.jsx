import React from 'react'
import Image from 'react-bootstrap/Image'
import { Carousel, Container, Card, Button, CardGroup, Form, Jumbotron } from 'react-bootstrap';
import PropTypes from 'prop-types'
import "../components/Result.scss"
import Gallery from "../components/Gallery"
import "../App.css"
import "../components/Gallery.scss"

function Case4(props) {
    return (
        <div>
            <Container>
                <Card>
                    <Card.Header>Resources:</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>
                                {' '}
        When women take care of their health, they become their best friend.{' '}
                            </p>
                            <footer className="blockquote-footer">
                                Maya Angelou
                                                    </footer>
                        </blockquote>
                    </Card.Body>
                </Card>

                <Image src="https://marvel-b1-cdn.bc0a.com/f00000000166771/www.beaconhealthsystem.org/wp-content/uploads/2020/09/Mammo-page-header_2020-09-v1.jpg" fluid />

            </Container>
            <Container>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRo8uls2XVayW1l6xx7RDWueZ8TRptoMygiOQ&usqp=CAU" />
                        <Card.Body>
                            <Card.Title>You may qualify for free or low cost screenings!</Card.Title>
                            <Card.Text>
                            </Card.Text>
                        </Card.Body>

                        <div className="mb-2">
                            <Button href="https://www.cdc.gov/cancer/nbccedp/screenings.htm" variant="primary" size="lg">
                                Find Out More
                                  </Button>
                        </div>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxZVWN6Dwksf2tcudx9NZU6TZrFw7ZtCGAsQ&usqp=CAU" />
                        <Card.Body>
                            <Card.Title>Low-income? You may qualify for medicaid for health insurance. </Card.Title>
                            <Card.Text>
                            </Card.Text>
                        </Card.Body>
                        <div className="mb-2">
                            <Button href="https://www.healthcare.gov/lower-costs/" variant="primary" size="lg">
                                Find Out More
                                  </Button>
                        </div>

                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIEEBtF_UoU4j8WnCJtG_5KZ-3-9BcKGnL3g&usqp=CAU" />
                        <Card.Body>
                            <Card.Title>Breast Cancer Screening Events</Card.Title>

                        </Card.Body>
                        <div className="mb-2">
                            <Button href="https://www.google.com/search?bih=754&biw=1536&hl=en&ei=VHl2X8PEFsKoytMPzZmFOA&q=free+mammogram+events+near+me&oq=free+mammogram+events+near+me&gs_lcp=CgZwc3ktYWIQAzIFCAAQzQIyBQgAEM0CMgUIABDNAjoECAAQRzoECAAQDVC7LljyNGD4NWgAcAJ4AIABZogBugSSAQM2LjGYAQCgAQGqAQdnd3Mtd2l6yAEIwAEB&sclient=psy-ab&ved=0ahUKEwjDvt6m2JTsAhVClHIEHc1MAQcQ4dUDCA0&uact=5" variant="primary" size="lg">
                                Find Out More
                        </Button>
                        </div>
                    </Card>
                </CardGroup>
            </Container>
            {/* <Image src="https://www.verywellhealth.com/thmb/QHP2aDBiLsk9UEfvdlU6T78eVM8=/1333x1000/smart/filters:no_upscale()/430283_color-5bb3d89946e0fb00261df155.png" fluid />
            <Image src="https://www.beaumont.org/images/default-source/cancer/screening-diagnostic.jpg?sfvrsn=844a6e2_0" fluid /> */}

            <Gallery />

        </div>
    )
}

Case4.propTypes = {

}

export default Case4

