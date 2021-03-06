import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import {
    Navbar,
    Form,
    Nav,
    FormControl,
    Button,
    Card,
    Container,
    Accordion,
    Row,
    Col
} from "react-bootstrap";
import Hero from "../components/Hero";
import InfoModal from "../components/InfoModal";
import Option from "../components/Option"

function Case1Page2(props) {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div>
            <Container className="mt-5">
                {/* intro */}
                <Card
                    className="my-4 mx-auto"
                    border="info"
                    style={{ width: "80%" }}
                >
                    <Card.Header>Helps and Guidelines</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Here are a few steps to guide you to get your doctor
                            appointment.
                        </Card.Text>
                    </Card.Body>
                </Card>

                {/* Modal */}
                <InfoModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    title="Who is my primary care doctor"
                    message={
                        <div>
                            <p>Who is my primary doctor?</p>
                            <p>How can I contact my doctor?</p>
                            <p>What should I say to my doctor?</p>
                            <p>Hello! I'm the body</p>
                        </div>
                    }

                />

                {/* Step: 1 */}
                <Accordion defaultActiveKey="1">
                    <Card
                        className="my-4 mx-auto"
                        // bg={"Success".toLowerCase()}
                        text={"white"}
                        style={{ width: "80%" }}
                    >
                        <Accordion.Toggle as={Card.Header}
                            style={{ padding: "0px", backgroundColor: "white", color: "black" }}
                            eventKey="0">
                            <Row>
                                <Col className="py-2" md={2} style={{ color:"white",fontWeight:"bold", backgroundColor: "palevioletred" }}>Step 1</Col>
                                <Col className="py-2" md={8} style={{textAlign:"center"}} >Call your primary doctor to make an appointment.</Col>
                            </Row>

                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body style ={{backgroundColor: "rgb(255, 227, 215)"}}>
                            <Row className="justify-content-center"> 

                           
                            <Card className="col-9 px-0 m-2" style={{color:"black", width:"50%"}}>
                                <Card.Header setModalShow={setModalShow}>
                                    Who is my primary doctor?
                                </Card.Header>
                                <Card.Body>
                                    <p>ajlkhdfhaksdlfhajksdfhakj</p>
                                </Card.Body>
    
                                </Card>
                                <Card className="col-9 px-0 m-2" style={{color:"black", width:"50%"}}>
                                <Card.Header setModalShow={setModalShow}>
                                    How can I contact my doctor?
                                </Card.Header>
                                <Card.Body>
                                    <p>ajlkhdfhaksdlfhajksdfhakj</p>
                                </Card.Body>
    
                                </Card>
                                <Card className="col-9 px-0 m-2" style={{color:"black", width:"50%"}}>
                                <Card.Header setModalShow={setModalShow}>
                                    What should I say to my doctor?
                                </Card.Header>
                                <Card.Body>
                                    <p>ajlkhdfhaksdlfhajksdfhakj</p>
                                </Card.Body>
    
                                </Card>
                                </Row>
                                
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>

                {/* Step: 2 */}
                <Accordion defaultActiveKey="1">
                    <Card
                        className="my-4 mx-auto"
                        // bg={"Success".toLowerCase()}
                        text={"white"}
                        style={{ width: "80%" }}
                    >
                        <Accordion.Toggle as={Card.Header}
                            style={{ padding: "0px", backgroundColor: "white", color: "black" }}
                            eventKey="0">
                            <Row>
                                <Col className="py-2" md={2} style={{ color:"white",
                                fontWeight:"bold", backgroundColor: "palevioletred" }}>Step 2</Col>
                                <Col className="py-2" style={{textAlign:"center"}}  md={8}>Make appointment with radiologist or clinic.</Col>
                            </Row>

                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body style ={{backgroundColor: "rgb(255, 227, 215)"}}>
                                <Card>
                                <Card.Header setModalShow={setModalShow}>
                                    Who is my primary doctor?
                                </Card.Header>
                                <Card.Body>
                                    <p>ajlkhdfhaksdlfhajksdfhakj</p>
                                </Card.Body>
    
                                </Card>
                                
                                <Option setModalShow={setModalShow}>
                                    How Can I contact my doctor?
                                </Option>
                                <Option setModalShow={setModalShow}>
                                    What should I say to my doctor?
                                </Option>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>

                {/* Step: 3 */}
                <Accordion defaultActiveKey="1">
                    <Card
                        className="my-4 mx-auto"
                        // bg={"Success".toLowerCase()}
                        text={"white"}
                        style={{ width: "80%" }}
                    >
                        <Accordion.Toggle as={Card.Header}
                            style={{ padding: "0px", backgroundColor: "white", color: "black" }}
                            eventKey="0">
                            <Row>
                                <Col className="py-2" md={2} style={{ color:"white",
                                fontWeight:"bold", backgroundColor: "palevioletred" }}>Step 3</Col>
                                <Col className="py-2" style={{textAlign:"center"}}  md={8}>Wait for the result.</Col>
                            </Row>

                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body style ={{backgroundColor: "rgb(255, 227, 215)"}}>
                                <Option setModalShow={setModalShow}>
                                    Who is my primary doctor?
                                </Option>
                                <Option setModalShow={setModalShow}>
                                    How Can I contact my doctor?
                                </Option>
                                <Option setModalShow={setModalShow}>
                                    What should I say to my doctor?
                                </Option>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>

                {/* Step: 4 */}
                <Accordion defaultActiveKey="1">
                    <Card
                        className="my-4 mx-auto"
                        // bg={"Success".toLowerCase()}
                        text={"white"}
                        style={{ width: "80%" }}
                    >
                        <Accordion.Toggle as={Card.Header}
                            style={{ padding: "0px", backgroundColor: "white", color: "black" }}
                            eventKey="0">
                            <Row>
                                <Col className="py-2" md={2} style={{ color:"white",
                                fontWeight:"bold", backgroundColor: "palevioletred" }}>Step 4</Col>
                                <Col className="py-2" style={{textAlign:"center"}}  md={8}>Keep your mammogram result.</Col>
                            </Row>

                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body style ={{backgroundColor: "rgb(255, 227, 215)"}}>
                                <Option setModalShow={setModalShow}>
                                    Who is my primary doctor?
                                </Option>
                                <Option setModalShow={setModalShow}>
                                    How Can I contact my doctor?
                                </Option>
                                <Option setModalShow={setModalShow}>
                                    What should I say to my doctor?
                                </Option>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Container>
        </div>
    );
}

Case1Page2.propTypes = {};

export default Case1Page2;
