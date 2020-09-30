
import PropTypes from 'prop-types'
import React, { useContext, useState, useEffect } from 'react';
import { Container, Card, Button, Form, } from 'react-bootstrap';
import "./Questionnaire.css"
// import { Link } from 'react-scroll';
import { Link } from 'react-router-dom';
import "../components/Hero.scss"
import "../App.css"
import { useFormikContext } from "formik"


function Questionnaire(props) {
    const [isDesktop, setIsDesktop] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const { values, handleChange, setFieldValue } = useFormikContext();
    const message = () => {
        if (values.age >= 40) {
            return ("According to the ACA, women over 40 should get an annual mammogram")
        } else {
            return ("If you have a family history of breast cancer, it is also recommended that you get mammogram")
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
                        <Card.Title className="mt-5" style={{ fontSize: "3rem" }}>What's your age?</Card.Title>
                        <Form>

                            <Form.Group controlId="form" className="mx-auto mt-4" style={{ width: "40%" }}>
                                {/* <Form.Label>Password</Form.Label> */}
                                <Form.Control
                                    type="text"
                                    name="age"
                                    value={values.age}
                                    onChange={handleChange} />
                            </Form.Group>
                        </Form>


                        <Card.Text>
                            {message()}

                        </Card.Text>


                        <Link to="/questionnaire-insurance" smooth duration={1000}>
                            <Button variant="primary">Next</Button>
                        </Link>
                    </Card.Body>

{/* 
                    <Card.Footer>
                        According to the ACA, women over 40 should get an annual mammogram
                    </Card.Footer> */}

                </Card>

            </Container>
        </section>
    )
}

Questionnaire.propTypes = {

}

export default Questionnaire



