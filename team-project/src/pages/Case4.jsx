import React from 'react'
import Image from 'react-bootstrap/Image'
import { Navbar, Nav, Carousel, Container, Card, Button, CardGroup, Form, Jumbotron } from 'react-bootstrap';
import PropTypes from 'prop-types'
import "../components/Result.scss"
import Hero2 from "../components/Hero2"
import Gallery from "../components/Gallery"
import "../App.css"
import "../components/Gallery.scss"

function Case4(props) {
    return (
        <div>
            <Navbar variant="dark" className="Navbar fixed-top" >
                <Navbar.Brand style={{ fontSize: "1.5rem" }} href="#home">Overcomer</Navbar.Brand>
                <Nav className="mr-auto" style={{ fontSize: "1.3rem" }}>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Prevention</Nav.Link>
                </Nav>
            </Navbar>
            <Hero2 />
            <Container>
                <br />

            </Container>
            <br />
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
            <br />        
            <Gallery />
            <br />
            <Image src="https://marvel-b1-cdn.bc0a.com/f00000000166771/www.beaconhealthsystem.org/wp-content/uploads/2020/09/Mammo-page-header_2020-09-v1.jpg" fluid />

        </div>
    )
}

Case4.propTypes = {

}

export default Case4

