import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Linkify from 'react-linkify';
import {
    Card,
    Container,
    Row,
    Col,
    Accordion as Accordion3
} from "react-bootstrap";
import Accordion from "./Accordion"
import InfoModal from "./InfoModal";
import Option from "./Option"


import React from 'react'
import PropTypes from 'prop-types'

function Case3Steps(props) {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <Container className="py-5">
        <div style={{ textAlign: "left", marginBottom: "2rem" }}>
            <h2 style={{ fontSize: "3.2rem", fontWeight: "bold", opacity: "50%" }}>How to Get Started</h2>
            <h3 style={{ fontSize: "2.8rem", fontWeight: "bold", opacity: "80%" }}>Step by Step Directions</h3>
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



        {/* Option: 1 */}
        <Accordion
            stepTitle="Option 1"
            stepDescription="Find a screening program near you." >
            <Row className="justify-content-center">
                <Card className="col-9 px-0 m-2" style={{ color: "black", width: "50%" }}>
                    <Card.Body style={{ textAlign: "left" }}>
                        <h4>Reach out to your state program.</h4>
                        <Linkify>
                            Visit the {' '}
                            <a href='https://www.cdc.gov/cancer/nbccedp/screenings.htm?s_cid=dcpc_bcbtn_003'>
                                CDC website
</a>.
</Linkify>

                    </Card.Body>
                </Card>
                <Card className="col-9 px-0 m-2" style={{ color: "black", width: "50%" }}>
                    <Card.Body style={{ textAlign: "left" }}>
                        <h4> Input your state.</h4>
                        <p>Note: There are territory & American Indian/Alaska Native Organization programs available.</p>
                    </Card.Body>
                </Card>
                <Card className="col-9 px-0 m-2" style={{ color: "black", width: "50%" }}>
                    <Card.Body style={{ textAlign: "left" }}>
                        <h4>Call the phone number given.</h4>
                        <p>Representatives are there to assist and check to see if you qualify for free or low-cost screenings, easy!</p>
                    </Card.Body>

                </Card>
            </Row>
        </Accordion>

        {/* Option: 2 */}
        <Accordion
            stepTitle="Option 2"
            stepDescription="Apply for Medicaid/Medicare.">

            <Row className="justify-content-center">


                <Card className="col-9 px-0 m-2" style={{ color: "black", width: "50%" }}>
                    <Card.Header>
                        Low-income? You may be eligible to apply to your local state Medicaid program.
                    </Card.Header>
                    <Card.Body>
                        <Linkify>
                            Visit the {' '}
                            <a href='https://www.healthcare.gov/lower-costs/'>
                                HealthCare.gov website
</a>.
</Linkify>                        </Card.Body>

                </Card>
                <Card className="col-9 px-0 m-2" style={{ color: "black", width: "50%" }}>
                    <Card.Header>
                        Visit our resources page.
                    </Card.Header>
                    <Card.Body>
                        <p>Be sure to bookmark the page to stay up to date with the latest information. </p>
                    </Card.Body>

                </Card>

            </Row>
        </Accordion>
        {/* Option: 3 */}
        <Accordion
            stepTitle="Option 3"
            stepDescription="Attend free events.">

            <Row className="justify-content-center">


                <Card className="col-9 px-0 m-2" style={{ color: "black", width: "50%" }}>
                    <Card.Header>
                        Browse online for any upcoming events near you.
                    </Card.Header>
                    <Card.Body>
                        <Linkify>
                            Visit: {' '}
                            <a href='https://www.google.com/search?ei=QmJ7X8a6OeehytMPjI6LkAM&q=free+mammogram+screening+events+near+me&oq=free+mammogram+screening+events+near+me&gs_lcp=CgZwc3ktYWIQAzIFCAAQzQIyBQgAEM0CMgUIABDNAjoECAAQRzoCCAA6BAgAEA1QyEJY3ktgk01oAHACeACAAVSIAY4EkgEBN5gBAKABAaoBB2d3cy13aXrIAQjAAQE&sclient=psy-ab&ved=0ahUKEwjG4-eAh57sAhXnkHIEHQzHAjIQ4dUDCA0&uact=5'>
                                View Events
</a>.
</Linkify>
                    </Card.Body>

                </Card>
                <Card className="col-9 px-0 m-2" style={{ color: "black", width: "50%" }}>
                    <Card.Header>
                        Reach out to the community.
                    </Card.Header>
                    <Card.Body>
                        <p>Some doctor offices, churches or health departments host free screenings events from time to time.</p>
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

Case3Steps.propTypes = {

}

export default Case3Steps

