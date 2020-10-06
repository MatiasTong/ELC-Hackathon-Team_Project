import React from 'react'
import Image from 'react-bootstrap/Image'
import { Nav, Carousel, Container, Card, Button, Tab, Row, Col, Tabs, CardGroup, Form, ListGroup, Jumbotron } from 'react-bootstrap';
import PropTypes from 'prop-types'
import "../components/Result.scss"
import Hero2 from "../components/Hero2"
import Gallery from "../components/Gallery"
import "../App.css"
import Navbar from "../components/Navbar"

import Footer from "../components/Footer"

import { resources } from "../data/resources"
import ResourceCard from "../components/ResourceCard"

import "../components/Gallery.scss"

function Resources(props) {
    return (
        <div style={{ backgroundImage: "linear-gradient(to right,#FFCCCB  0%,#b19cd9  100%)" }}>
            <Navbar theme="light" />

            {/* Spacer div */}
            <div
                style={{
                    height: "6vh",
                    padding: "0px",
                    backgroundImage: "linear-gradient(to right, #FFCCCB 0%, #b19cd9 100%)",
                    // borderImage: "linear-gradient(135deg, rgb(255, 44, 167) 0%, rgb(230, 173, 201)) 1"}}>
                }}>
            </div>

            <div className="mb-2">
                <Button variant="success" size="lg"> All(20) </Button>
                <Button variant="info" size="lg"> With insurance </Button>
                <Button variant="info" size="lg"> No insurance </Button>
                <Button variant="info" size="lg"> Events </Button>
            </div>
            <Row className="justify-content-center">
                <form class="form-inline col mx-auto">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit"> Search </button>
                </form>
            </Row>


            <div style={{
                padding: "20px",
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#f2f6fa",
                margin: "2.8rem"
            }}>
                <Row className="justify-content-center">
                    {resources
                        .map((item) => (
                            <ResourceCard
                                className="col mx-2"
                                type={item.type}
                                title={item.title}
                                organization={item.organization}
                                url={item.url}
                                doctorLikes={item.doctorLikes}
                                likes={item.likes}
                                tags={item.tags}
                                phoneNumber={item.phoneNumber}
                            />

                        ))}

                </Row>
            </div>


            <br />
            <Image src="./mammyths.jpg" />
            <br />
            {/* Section 4: Gallery */}
            <div className="py-5" >
                <Gallery />
            </div>

            
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
                </Tab.Container> */}
            </Container> 


               
                {/* Section 4: Gallery */}
                <div className="py-5" >
                    <Gallery />
                </div>
                {/* <Image src="https://marvel-b1-cdn.bc0a.com/f00000000166771/www.beaconhealthsystem.org/wp-content/uploads/2020/09/Mammo-page-header_2020-09-v1.jpg" fluid /> */}

        </div>
    )
}

export default Resources