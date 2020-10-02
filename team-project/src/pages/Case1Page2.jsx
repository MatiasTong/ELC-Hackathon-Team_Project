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
} from "react-bootstrap";
import Hero from "../components/Hero";
import InfoModal from "../components/InfoModal";

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
                />

                {/* Step: 1 */}
                <Accordion defaultActiveKey="1">
                    <Card
                        className="my-4 mx-auto"
                        bg={"Success".toLowerCase()}
                        text={"white"}
                        style={{ width: "80%" }}
                    >
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            Step 1: Call your primary doctor to make an
                            appointment.
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Button
                                    variant="success"
                                    style={{ width: "80%" }}
                                    onClick={() => setModalShow(true)}
                                >
                                    Who is my primary doctor?
                                </Button>
                                <Button
                                    variant="success"
                                    style={{ width: "80%" }}
                                    onClick={() => setModalShow(true)}
                                >
                                    How can I contact my doctor?
                                </Button>
                                <Button
                                    variant="success"
                                    style={{ width: "80%" }}
                                    onClick={() => setModalShow(true)}
                                >
                                    What should I say to my doctor?
                                </Button>
                                <Button
                                    variant="success"
                                    style={{ width: "80%" }}
                                    onClick={() => setModalShow(true)}
                                >
                                    Hello! I'm the body
                                </Button>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>

                {/* Step: 2 */}
                <Accordion defaultActiveKey="1">
                    <Card
                        className="my-4 mx-auto"
                        bg={"Success".toLowerCase()}
                        text={"white"}
                        style={{ width: "80%" }}
                    >
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            Step 2: Make appointment with radiology lab/ clinic.
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <p>Who is my primary doctor?</p>
                                <p>How can I contact my doctor?</p>
                                <p>What should I say to my doctor?</p>
                                <p>Hello! I'm the body</p>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>

                {/* Step: 3 */}
                <Accordion defaultActiveKey="1">
                    <Card
                        className="my-4 mx-auto"
                        bg={"Success".toLowerCase()}
                        text={"white"}
                        style={{ width: "80%" }}
                    >
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            Step 3: Wait for the result.
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <p>Who is my primary doctor?</p>
                                <p>How can I contact my doctor?</p>
                                <p>What should I say to my doctor?</p>
                                <p>Hello! I'm the body</p>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>

                {/* Step: 4 */}
                <Accordion defaultActiveKey="1">
                    <Card
                        className="my-4 mx-auto"
                        bg={"Success".toLowerCase()}
                        text={"white"}
                        style={{ width: "80%" }}
                    >
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            Step 4: Keep the report of your mammogram
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <p>Who is my primary doctor?</p>
                                <p>How can I contact my doctor?</p>
                                <p>What should I say to my doctor?</p>
                                <p>Hello! I'm the body</p>
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
