import React from 'react'
import Image from 'react-bootstrap/Image'
import { Navbar, Nav, Carousel, Container, Card, Button, Tab, Row, Col, Tabs, CardGroup, Form, ListGroup, Jumbotron } from 'react-bootstrap';
import PropTypes from 'prop-types'
import "../components/Result.scss"
import Hero2 from "../components/Hero2"
import CaseFourSteps from "../components/CaseFourSteps"
import Gallery from "../components/Gallery"
import "../App.css"
import "../components/Gallery.scss"
import ResourceCard from "../components/ResourceCard"



{/* <p>Visit the CDC website to contact your state program

</p>
<p>Input your state.</p>
<p>The phone number to call will appear.</p>
<p>Call for more information on where to get screened, easy!</p> */}

function Case4(props) {
    return (
        <div>
            <Navbar variant="dark" className="Navbar fixed-top" >
                <Navbar.Brand style={{ fontSize: "1.5rem" }} href="#home">
                    <Image src="./logo.png" fluid />

                </Navbar.Brand>
                <Nav className="mr-auto" style={{ fontSize: "1.3rem" }}>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Prevention</Nav.Link>
                </Nav>
            </Navbar>
            <Hero2 />
            <br />

        <Container>
            <div style={{
                margin: "10px",
                border: "10px solid",
                padding: "0px",
                borderRadius: "20px",
                // borderImage: "linear-gradient(135deg, rgb(255, 44, 167) 0%, rgb(230, 173, 201)) 1"}}>
                borderImage: "linear-gradient(to right, #FFCCCB, #b19cd9) 1"
            }}>
                <CaseFourSteps />
            </div>

            </Container>

            <Container>
                <br />
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Prevention Tips</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">First Mammogram Video</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">

                                    <ListGroup variant="flush">
                                        <ListGroup.Item>Maintain a healthy weight.</ListGroup.Item>
                                        <ListGroup.Item>Exercise regularly.</ListGroup.Item>
                                        <ListGroup.Item>Don’t drink alcohol, or limit alcoholic drinks.</ListGroup.Item>
                                        <ListGroup.Item>If you are taking, or have been told to take, hormone replacement or birth control pills, ask your doctor about the risks and find out if it is right for you.</ListGroup.Item>
                                        <ListGroup.Item>Breastfeed your children, if possible.</ListGroup.Item>
                                        <ListGroup.Item>If you have a family history of breast cancer or inherited changes in your BRCA1 and BRCA2 genes, talk to your doctor about other ways to lower your risk.</ListGroup.Item>
                                        <p style={{ color: "gray" }}>Source: Division of Cancer Prevention and Control, Centers for Disease Control and Prevention</p>

                                    </ListGroup>

                                    {/* <Sonnet /> */}
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/MGsWSQGmFnY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    {/* <Sonnet /> */}
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>

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

