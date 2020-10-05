import React from 'react'
import Image from 'react-bootstrap/Image'
import { Nav, Carousel, Container, Card, Button, Tab, Row, Col, Tabs, CardGroup, Form, ListGroup, Jumbotron } from 'react-bootstrap';
import PropTypes from 'prop-types'
import "../components/Result.scss"
import Hero2 from "../components/Hero2"
import Gallery from "../components/Gallery"
import "../App.css"
import Navbar from "../components/Navbar"

import "../components/Gallery.scss"


function Prevention(props) {
    return (
        <div style={{ backgroundImage: "linear-gradient(to right,#FFCCCB  0%,#b19cd9  100%)" }}>

            {/* Section 1: Header and navbar */}
            <header
                style={{
                    background: "linear-gradient(0deg, rgba(44, 31, 61, 0.35), rgba(22, 11, 11, 0.349)), url('https://images.unsplash.com/photo-1535469420027-517674dad7a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    minHeight: "100vh"
                }}>
                <Navbar />
                <Hero2 />
            </header>

            {/* Spacer div */}
            <div
                style={{
                    height: "6vh",
                    padding: "0px",
                    backgroundImage: "linear-gradient(to right, #FFCCCB 0%, #b19cd9 100%)",
                    // borderImage: "linear-gradient(135deg, rgb(255, 44, 167) 0%, rgb(230, 173, 201)) 1"}}>
                }}>
            </div>

            <>
                <div className="mb-2">
                    <Button variant="success" size="lg">
                        All(20)
    </Button>{' '}
                    <Button variant="info" size="lg">
                        With insurance
    </Button> {' '}
                    <Button variant="info" size="lg">
                        No insurance
    </Button> {' '}
                    <Button variant="info" size="lg">
                        Events
    </Button> {' '}

                </div>

            </>

            <br />

            <Container>

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
                                        <ListGroup.Item><p style={{ color: "gray" }}>Source: Division of Cancer Prevention and Control, Centers for Disease Control and Prevention</p> </ListGroup.Item>

                                    </ListGroup>

                                    {/* <Sonnet /> */}
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                <ListGroup.Item><iframe width="560" height="315" src="https://www.youtube.com/embed/MGsWSQGmFnY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                  </ListGroup.Item>  {/* <Sonnet /> */}
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>

            <br />
            {/* Section 4: Gallery */}
            <div className="py-5" >
                <Gallery />
            </div>
            <Image src="https://marvel-b1-cdn.bc0a.com/f00000000166771/www.beaconhealthsystem.org/wp-content/uploads/2020/09/Mammo-page-header_2020-09-v1.jpg" fluid />
            <br />
            <br />
        </div>
    )
}

Prevention.propTypes = {

}

export default Prevention

