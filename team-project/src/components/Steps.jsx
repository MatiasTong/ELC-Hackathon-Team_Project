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
import Hero from "./Hero";
import InfoModal from "./InfoModal";
import Option from "./Option"

function Case1Page2(props) {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div style={{ 
         background: "linear-gradient(0deg, rgba(241, 241, 241,0.2), rgba(241, 241, 241,0.2)), url(https://images.unsplash.com/photo-1552035509-b247fe8e5078?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)",
         backgroundSize: "cover"}}>
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
                        style={{ width: "80%", border:"none" }}
                    >
                        <Accordion.Toggle as={Card.Header}
                            style={{ padding: "0px", backgroundColor: "white", color: "black" }}
                            eventKey="0">
                            <Row> {/*backgroundColor: "palevioletred" */}
                                <Col className="py-2" md={2} style={{
                                    color: "white", fontWeight: "bold",
                                    backgroundImage: "linear-gradient(135deg, rgb(255, 44, 167) 0%, rgb(230, 173, 201) 100%)",
                                    // background: "linear-gradient(0deg, rgba(255, 0, 150, 0.3), rgba(255, 0, 150, 0.3)), url(https://images.unsplash.com/photo-1559759708-d6e99b50f0e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)",
                                    //  backgroundImage: "url(https://images.unsplash.com/photo-1559759708-d6e99b50f0e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)",
                                    backgroundSize: "cover"}}>
                                    Step 1</Col>
                                <Col className="py-2" md={8} style={{ textAlign: "center" }} >Call your primary doctor to make an appointment.</Col>
                            </Row>

                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body style={{ backgroundColor: "rgb(255, 227, 215)" }}>
                                <Row className="justify-content-center">


                                    <Card className="col-9 px-0 m-2" style={{ color: "black", width: "50%" }}>
                                        <Card.Header setModalShow={setModalShow}>
                                            Who is my primary doctor?
                                </Card.Header>
                                        <Card.Body>
                                            <p>ajlkhdfhaksdlfhajksdfhakj</p>
                                        </Card.Body>

                                    </Card>
                                    <Card className="col-9 px-0 m-2" style={{ color: "black", width: "50%" }}>
                                        <Card.Header setModalShow={setModalShow}>
                                            How can I contact my doctor?
                                </Card.Header>
                                        <Card.Body>
                                            <p>ajlkhdfhaksdlfhajksdfhakj</p>
                                        </Card.Body>

                                    </Card>
                                    <Card className="col-9 px-0 m-2" style={{ color: "black", width: "50%" }}>
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
                            <Col className="py-2" md={2} style={{
                                    color: "white", fontWeight: "bold",
                                    backgroundImage: "linear-gradient(135deg, rgb(250, 40, 160) 0%, rgb(225, 168, 190) 100%)",
                                    //  backgroundImage: "url(https://images.unsplash.com/photo-1547496832-84e64458210a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80)",
                                    backgroundSize: "cover"}}>
                                    Step 2</Col>
                                <Col className="py-2" style={{ textAlign: "center" }} md={8}>Make appointment with radiologist or clinic.</Col>
                            </Row>

                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body style={{ backgroundColor: "rgb(255, 227, 215)" }}>
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
                            <Col className="py-2" md={2} style={{
                                    color: "white", fontWeight: "bold",
                                    backgroundImage: "linear-gradient(135deg, rgb(250, 40, 160) 0%, rgb(225, 168, 190) 100%)",
                                    //  backgroundImage: "url(https://images.unsplash.com/photo-1547496832-84e64458210a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80)",
                                    backgroundSize: "cover"}}>
                                    Step 3</Col>
                                <Col className="py-2" style={{ textAlign: "center" }} md={8}>Wait for the result.</Col>
                            </Row>

                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body style={{ backgroundColor: "rgb(255, 227, 215)" }}>
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
                            <Col className="py-2" md={2} style={{
                                    color: "white", fontWeight: "bold",
                                    backgroundImage: "linear-gradient(135deg, rgb(250, 40, 160) 0%, rgb(225, 168, 190) 100%)",
                                    //  backgroundImage: "url(https://images.unsplash.com/photo-1547496832-84e64458210a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80)",
                                    backgroundSize: "cover"}}>
                                    Step 4</Col>
                                <Col className="py-2" style={{ textAlign: "center" }} md={8}>Keep your mammogram result.</Col>
                            </Row>

                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body style={{ backgroundColor: "rgb(255, 227, 215)" }}>
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
