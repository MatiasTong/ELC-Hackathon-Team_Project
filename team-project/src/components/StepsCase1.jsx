import React, { useState } from "react";
import {
    Card,
    Container,
    Row,
    Col,
    Accordion as Accordion3,
} from "react-bootstrap";
import Accordion from "./Accordion";
// import PropTypes from "prop-types";
// import InfoModal from "./InfoModal";
// import Option from "./Option"

function StepsCase2(props) {
    // const [modalShow, setModalShow] = React.useState(false);

    return (
        <Container className="py-5">
            <div style={{ textAlign: "left", marginBottom: "2rem" }}>
                <h2
                    style={{
                        fontSize: "3.2rem",
                        fontWeight: "bold",
                        opacity: "50%",
                    }}
                >
                    How to Get Started
                </h2>
                <h3
                    style={{
                        fontSize: "2.8rem",
                        fontWeight: "bold",
                        opacity: "80%",
                    }}
                >
                    Step by Step Directions
                </h3>
            </div>
            {/* intro */}
            {/* <Card
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
                </Card> */}

            {/* Step: 1 */}
            <Accordion
                stepTitle="Step 1"
                stepDescription="Call your primary doctor to make an appointment"
            >
                <Row className="justify-content-center">
                    <Card
                        className="col-9 px-0 m-2"
                        style={{ color: "black", width: "50%" }}
                    >
                        <Card.Body style={{ textAlign: "left" }}>
                            <h4>
                                Call your primary doctor directly to make an
                                appointment
                            </h4>
                            <p>
                                - You may find your primary doctor on the card
                                as PCP (Primary Care Physicians) as well as
                                phone number.
                            </p>
                            <p>
                                - If you can't find primary doctor on your card,
                                please try visit their website and login to see
                                who is your primary doctor or simply call the
                                provider to find out.
                            </p>
                            <p>
                                - When you call the doctor you could ask for
                                yearly check up if you didn't do so already and
                                specifically ask to get mammogram
                            </p>
                            <p>
                                - If you already do the yearly checkup please
                                ask if the doctor already did a mammogram if not
                                you can request for one.
                            </p>
                        </Card.Body>
                    </Card>
                    <Card
                        className="col-9 px-0 m-2"
                        style={{ color: "black", width: "50%" }}
                    >
                        <Card.Body style={{ textAlign: "left" }}>
                            <h4>
                                Using third-party app or website to make
                                appointment online
                            </h4>
                            <p>
                                - There are varieties of apps and websites that
                                could help you make appointments easily through
                                their website or app. This is a great way if you
                                don’t like to speak directly to someone to make
                                an appointment.
                            </p>
                            <p>
                                - We recommend you to checkout Zocdoc.{" "}
                                <a
                                    href="https://www.zocdoc.com/"
                                    target="_blank"
                                >
                                    Click Here
                                </a>
                            </p>
                        </Card.Body>
                    </Card>
                    <Card
                        className="col-9 px-0 m-2"
                        style={{ color: "black", width: "50%" }}
                    >
                        <Card.Body style={{ textAlign: "left" }}>
                            <h4>Do not have primary doctor?</h4>
                            <p>
                                - You may have to contact your care provider or
                                insurance to assign a primary doctor for you.
                                That way you know who is in your network.
                            </p>
                            <p>
                                - You may find your phone number on your card.
                            </p>
                            <p>
                                - Things to consider when choose your primary
                                doctor.{" "}
                                <a
                                    href="https://www.bcbs.com/five-tips-choosing-new-primary-care-physician"
                                    target="_blank"
                                >
                                    Click Here
                                </a>
                            </p>
                        </Card.Body>
                    </Card>
                    <Card
                        className="col-9 px-0 m-2"
                        style={{ color: "black", width: "50%" }}
                    >
                        <Card.Body style={{ textAlign: "left" }}>
                            <h4>What to expect and How to prepare</h4>
                            <p>
                                - Most primary doctors will not do mammograms
                                themselves, but you will need their referral for
                                you to make an appointment with radiology. Make
                                sure you get the referral or prescription for
                                your mammogram.
                            </p>
                            <p>
                                - It is good to prepare a few thing before go
                                see you doctor. Here are a few steps.{" "}
                                <a
                                    href="https://www.healthcare.gov/blog/get-ready-doctors-appointment/"
                                    target="_blank"
                                >
                                    Click Here
                                </a>
                            </p>
                        </Card.Body>
                    </Card>
                </Row>
            </Accordion>

            {/* Step: 2 */}
            <Accordion
                stepTitle="Step 2"
                stepDescription="Make appointment with radiologist or clinic"
            >
                <Row className="justify-content-center">
                    <Card
                        className="col-9 px-0 m-2"
                        style={{ color: "black", width: "50%" }}
                    >
                        <Card.Header>Who is my primary doctor?</Card.Header>
                        <Card.Body>
                            <p>ajlkhdfhaksdlfhajksdfhakj</p>
                        </Card.Body>
                    </Card>
                    <Card
                        className="col-9 px-0 m-2"
                        style={{ color: "black", width: "50%" }}
                    >
                        <Card.Header>How can I contact my doctor?</Card.Header>
                        <Card.Body>
                            <p>ajlkhdfhaksdlfhajksdfhakj</p>
                        </Card.Body>
                    </Card>
                    <Card
                        className="col-9 px-0 m-2"
                        style={{ color: "black", width: "50%" }}
                    >
                        <Card.Header>
                            What should I say to my doctor?
                        </Card.Header>
                        <Card.Body>
                            <p>ajlkhdfhaksdlfhajksdfhakj</p>
                        </Card.Body>
                    </Card>
                </Row>
            </Accordion>
            {/* Step: 3 */}
            <Accordion stepTitle="Step 3" stepDescription="Wait for the result">
                <Row className="justify-content-center">
                    <Card
                        className="col-9 px-0 m-2"
                        style={{ color: "black", width: "50%" }}
                    >
                        <Card.Header>Who is my primary doctor?</Card.Header>
                        <Card.Body>
                            <p>ajlkhdfhaksdlfhajksdfhakj</p>
                        </Card.Body>
                    </Card>
                    <Card
                        className="col-9 px-0 m-2"
                        style={{ color: "black", width: "50%" }}
                    >
                        <Card.Header>How can I contact my doctor?</Card.Header>
                        <Card.Body>
                            <p>ajlkhdfhaksdlfhajksdfhakj</p>
                        </Card.Body>
                    </Card>
                    <Card
                        className="col-9 px-0 m-2"
                        style={{ color: "black", width: "50%" }}
                    >
                        <Card.Header>
                            What should I say to my doctor?
                        </Card.Header>
                        <Card.Body>
                            <p>ajlkhdfhaksdlfhajksdfhakj</p>
                        </Card.Body>
                    </Card>
                </Row>
            </Accordion>

            {/* Step 4 */}
            <Accordion stepTitle="Step 4" stepDescription="Wait for the result">
                <Row className="justify-content-center">
                    <Card
                        className="col-9 px-0 m-2"
                        style={{ color: "black", width: "50%" }}
                    >
                        <Card.Header>Who is my primary doctor?</Card.Header>
                        <Card.Body>
                            <p>ajlkhdfhaksdlfhajksdfhakj</p>
                        </Card.Body>
                    </Card>
                    <Card
                        className="col-9 px-0 m-2"
                        style={{ color: "black", width: "50%" }}
                    >
                        <Card.Header>How can I contact my doctor?</Card.Header>
                        <Card.Body>
                            <p>ajlkhdfhaksdlfhajksdfhakj</p>
                        </Card.Body>
                    </Card>
                    <Card
                        className="col-9 px-0 m-2"
                        style={{ color: "black", width: "50%" }}
                    >
                        <Card.Header>
                            What should I say to my doctor?
                        </Card.Header>
                        <Card.Body>
                            <p>ajlkhdfhaksdlfhajksdfhakj</p>
                        </Card.Body>
                    </Card>
                </Row>
            </Accordion>

            {/* Step with modal popup */}
            {/* Modal */}
            {/* <InfoModal
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

                /> */}

            {/* <Accordion3 defaultActiveKey="1">
                    <Card
                        className="my-4 mx-auto"
                        // bg={"Success".toLowerCase()}
                        text={"white"}
                        style={{ width: "80%" }}
                    >
                        <Accordion3.Toggle as={Card.Header}
                            style={{ padding: "0px", backgroundColor: "white", color: "black" }}
                            eventKey="0">
                            <Row>
                            <Col className="py-4" md={2} style={{
                                    color: "white", fontWeight: "bold", fontFamily:"Montserrat",
                                    backgroundImage: "linear-gradient(135deg, rgb(250, 40, 160) 0%, rgb(225, 168, 190) 100%)",
                                    //  backgroundImage: "url(https://images.unsplash.com/photo-1547496832-84e64458210a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80)",
                                    backgroundSize: "cover"}}>
                                    Step 4</Col>
                                <Col className="py-4" style={{ textAlign: "center" }} md={8}>Keep your mammogram result.</Col>
                            </Row>

                        </Accordion3.Toggle>
                        <Accordion3.Collapse eventKey="0">
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
                        </Accordion3.Collapse>
                    </Card>
                </Accordion3> */}
        </Container>
        // </div>
        // </div>
    );
}

StepsCase2.propTypes = {};

export default StepsCase2;
