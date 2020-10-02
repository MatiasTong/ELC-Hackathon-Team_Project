import React from "react";
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
} from "react-bootstrap";
import Hero from "../components/Hero";

function Case1(props) {
    return (
        <div>
            <Container className="mt-5">
                {/* Congrat message */}
                <Card
                    className="my-4 mx-auto"
                    bg={"Success".toLowerCase()}
                    text={"white"}
                    style={{ width: "80%" }}
                >
                    <Card.Header>
                        <b>Congratulations!!</b> We have found a way for you to
                        get screening with no cost.
                    </Card.Header>
                    <Card.Body>
                        You are{" "}
                        <strong>
                            <u>Eligible</u>
                        </strong>{" "}
                        to get Breast cancer screening with no extra cost
                        through state insurance like medicaid and medicare.
                    </Card.Body>
                </Card>

                {/* info card */}
                <Card
                    className="my-4 mx-auto"
                    bg={"Info".toLowerCase()}
                    text={"white"}
                    style={{ width: "80%" }}
                >
                    <Card.Header>
                        Do you know state insurance like medicaid and medicare
                        cover your mammogram breast cancer screening with no
                        extra cost?
                    </Card.Header>
                    <Card.Body>
                        <p>
                            The Affordable Care Act requires most health
                            insurance plans , especially medicaid and medicare
                            to pay for screening mammograms with no
                            out-of-pocket expenses for women ages 40 and older.
                        </p>
                        <p>
                            Since, you are 40 or older and have state insurance
                            like medicaid and medicare. You can get checked with
                            no extra cost.
                        </p>
                    </Card.Body>
                </Card>

                {/* intro to next step */}
                <Card
                    className="my-4 mx-auto"
                    border="info"
                    style={{ width: "80%" }}
                >
                    <Card.Header>Next Step</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <p>
                                Step 1: Call your primary doctor to make an
                                appointment.
                            </p>
                            <p>
                                Step 2: Make appointment with radiology lab/
                                clinic.
                            </p>
                            <p>Step 3: Wait for the result.</p>
                            <p>Step 4: Keep the report of your mammogram</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Link to="/case1v2step1" smooth duration={1000}>
                    <Button
                        className="my-2 mx-auto"
                        variant="success"
                        style={{ width: "80%" }}
                    >
                        Next
                    </Button>
                </Link>
            </Container>
        </div>
    );
}

Case1.propTypes = {};

export default Case1;
