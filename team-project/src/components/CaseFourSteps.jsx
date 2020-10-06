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
import "../App.css"

function CaseFourSteps(props) {
    const [modalShow, setModalShow] = React.useState(false);

    return (

        <Container className="py-5">
            <div style={{ textAlign: "left", marginBottom: "2rem" }}>
                <h2 style={{ fontSize: "3.2rem", fontWeight: "bold", opacity: "50%" }}>How to Get Started</h2>
                <h3 style={{ fontSize: "2.8rem", fontWeight: "bold", opacity: "80%" }}>Step by Step Directions</h3>
            </div>


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
                            Low-income? You may be eligible to apply to your local state Medicaid/Medicare program.
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

            {/* Option: 4 */}
            <Accordion
                stepTitle="Option 4"
                stepDescription="Reach out to your local clinic.">

                <Row className="justify-content-center">


                    <Card className="col-9 px-0 m-2" style={{ color: "black", width: "50%" }}>
                        <Card.Header>
                            Find and book your appointment through the Planned Parenthood Portal.
                        </Card.Header>
                        <Card.Body>
                            <Linkify>
                                Visit: {' '}
                                <a href='https://www.plannedparenthood.org/health-center'>
                                    Planned Parenthood site
  </a>. You will be able to receive care through a sliding pay scale.
</Linkify>
                        </Card.Body>
                    </Card>
                </Row>
            </Accordion>
            {/* Notes*/}
            <Accordion
                stepTitle=" &#x2605; &#x2605; &#x2605;"
                stepDescription="Friendly Reminders" >
                <Row className="justify-content-center">
                    <Card className="col-9 px-0 m-2" style={{ color: "black", width: "50%" }}>
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

                    <Card
                        className="col-9 px-0 m-2"
                        style={{ color: "black", width: "50%" }}
                    >
                        <Card.Body style={{ textAlign: "left" }}>
                            <h4>Understanding your results</h4>
                            <p>
                                - A doctor called a radiologist will categorize
                                your mammogram results using a numbered system.
                                You should talk to your doctor about your
                                mammogram's category and what you need to do
                                next.
                            </p>
                            <p>
                                - For more in-depth about how to read your
                                result{" "}
                                <a
                                    href="https://www.cancer.org/cancer/breast-cancer/screening-tests-and-early-detection/mammograms/understanding-your-mammogram-report.html"
                                    target="_blank"
                                >
                                    click here
                                </a>
                            </p>
                        </Card.Body>
                    </Card>
                    <Card
                        className="col-9 px-0 m-2"
                        style={{ color: "black", width: "50%" }}
                    >
                        <Card.Body style={{ textAlign: "left" }}>
                            <h4>
                                Keep your result & set alert for next year
                                checkup
                            </h4>
                            <p>
                                - It is important to keep your result for next
                                time you go checkup again.
                            </p>
                            <p>
                                - It may prevent you from having to do some
                                repetitive or unnecessary tests.
                            </p>
                            <p>
                                - It helps radiologists spot cancer easier and
                                more accurately.
                            </p>
                            <p>
                                - Sign up with us and let us help you keep your record{" "}
                                <a
                                    href="#"
                                    target="_blank"
                                >
                                    Sign up here
                                </a>
                            </p>
                        </Card.Body>
                    </Card>
                </Row>
            </Accordion>


        </Container >

    );
}

CaseFourSteps.propTypes = {};

export default CaseFourSteps;