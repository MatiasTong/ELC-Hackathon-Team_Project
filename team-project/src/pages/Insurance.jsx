
import PropTypes from 'prop-types'
import React, { useContext, useState, useEffect } from 'react';
import { Container, Card, Button, Form, } from 'react-bootstrap';
import { useFormikContext } from "formik"
import "./Questionnaire.css"
// import { Link } from 'react-scroll';
import { Link } from 'react-router-dom';
import "../components/Hero.scss"

function Questionnaire(props) {
    const [isDesktop, setIsDesktop] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const { values, handleChange, setFieldValue } = useFormikContext();
    const message = () => {
        if (values.hasInsurance === false) {
            return ("No problem, we have free resources available for you, check them out!")
        } else {
            return ("Your state plan will cover mammogram.")
        }
    }

    useEffect(() => {
        if (window.innerWidth > 769) {
            setIsDesktop(true);
            setIsMobile(false);
        } else {
            setIsMobile(true);
            setIsDesktop(false);
        }
    }, []);

    return (
        <section id="hero-background" className="jumbotron">
            <Container fluid>

                <Card style={{ width: "100%", height: "80vh" }}>
                    <Card.Body>
                        <Card.Title className="mt-5" style={{ fontSize: "3rem" }}>Do you have insurance?</Card.Title>
                        <Form>
                            <div key="inline-checkbox" className="mb-3">
                                <Form.Check
                                    inline label="Yes"
                                    name="hasInsurance"
                                    onChange={handleChange}
                                    value={values.hasInsurance}
                                    type="checkbox" />
                            </div>
                        </Form>

                        {values.hasInsurance ?
                            <Form>
                                <div key="inline-radio" className="mb-3">
                                    <Form.Check
                                        inline label="State"
                                        type="radio"
                                        name="insuranceType"
                                        onChange={handleChange}
                                        value="state" />

                                    <Form.Check
                                        inline label="Private"
                                        type="radio"
                                        name="insuranceType"
                                        onChange={handleChange}
                                        value="private" />
                                </div>
                            </Form> : ""}




                        <Card.Text>
                            {message()}
                        </Card.Text>
                        {/* <Card.Text>
                            Your state plan will cover mammogram.
                    </Card.Text>
                        <Card.Text>
                            No problem, we have free resources available for you, check them out!
                    </Card.Text> */}
                        <Link to="/questionnaire-age" smooth duration={1000}>
                            <Button variant="primary">Back</Button>
                        </Link>
                        <Link to="/questionnaire-result" smooth duration={1000}>
                            <Button variant="primary">Submit</Button>
                        </Link>
                    </Card.Body>
                </Card>

            </Container>
        </section>
    )
}

Questionnaire.propTypes = {

}

export default Questionnaire



