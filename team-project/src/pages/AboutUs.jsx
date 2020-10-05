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
    Carousel, Row, Col, Image
} from "react-bootstrap";
import Hero from "../components/Hero";
import "./AboutUs.css";



function AboutUs(props) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="about-us">
            <Container>
                {/* About Us */}
                <Row>
                    <h2 className="featurette-heading">About Us</h2>

                    <p className="lead">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eveniet quo, quasi accusantium maxime magni impedit nemo
                        quam asperiores dolor quos voluptates vero, commodi est
                        sequi similique ea labore reprehenderit incidunt.Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Eveniet quo, quasi accusantium maxime magni impedit nemo
                        quam asperiores dolor quos voluptates vero, commodi est
                        sequi similique ea labore reprehenderit incidunt.Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Eveniet quo, quasi accusantium maxime magni impedit nemo
                        quam asperiores dolor quos voluptates vero, commodi est
                        sequi similique ea labore reprehenderit incidunt.Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Eveniet quo, quasi accusantium maxime magni impedit nemo
                        quam asperiores dolor quos voluptates vero, commodi est
                        sequi similique ea labore reprehenderit incidunt.Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </Row>
                {/* Member Profile */}
                <hr class="featurette-divider"></hr>
                <Row className="featurette">
                    <Col md={7}>
                        <h2 className="featurette-heading">Matias Tong</h2>
                        <span className="text-muted">Software Developer</span>
                        <p className="lead">
                            My research experience using software to analyze
                            large amounts of data and tackle environmental
                            challenges helped me decide that coding is what I
                            love to do. I am passionate about topics at the
                            intersection between innovative tech and nature.
                            Recently, I enrolled in the Laguardia CC Techhire
                            program and earned my certification as a full stack
                            web developer. Now I'm open to the next job
                            opportunity! Check out my website:
                            www.matiastong.com
                        </p>
                        <span className="text-muted mr-3">Contact:</span>
                        <Card.Link href="https://linkedin.com/in/matiastong">
                            LinkedIn
                        </Card.Link>
                        <Card.Link href="https://github.com/MatiasTong">
                            GitHub
                        </Card.Link>
                        <Card.Link href="https://matiastong.com">
                            Website
                        </Card.Link>
                        <Card.Link href="mailto: tongm1@bxscience.edu">
                            tongm1@bxscience.edu
                        </Card.Link>
                    </Col>
                    <Col md={5}>
                        <Image
                            className="featurette-image img-fluid mx-auto"
                            src="../profileholder.jpg"
                        />
                    </Col>
                </Row>

                <hr class="featurette-divider"></hr>
                <Row className="featurette">
                    <Col md={7} className="order-md-2">
                        <h2 className="featurette-heading">Shirley Sosa</h2>
                        <span className="text-muted">Software Developer</span>
                        <p className="lead">
                            Creative coding bootcamp graduate with experience in
                            developing full-stack web apps. Drawn to web
                            development through a love of problem-solving,
                            innovating, and creative solutions. Fluent in
                            English and Spanish. Seeking new opportunities to
                            leverage web development skills!
                        </p>
                        <span className="text-muted mr-3">Contact:</span>
                        <Card.Link href="https://www.linkedin.com/in/shirleylaymesosa/">
                            LinkedIn
                        </Card.Link>
                        <Card.Link href="https://github.com/shirlz201">
                            GitHub
                        </Card.Link>
                        <Card.Link href="https://shirley.codes">
                            Website
                        </Card.Link>
                        <Card.Link href="mailto: slaymesosa@gmail.com">
                            slaymesosa@gmail.com
                        </Card.Link>
                    </Col>
                    <Col md={5} className="order-md-1">
                        <Image
                            className="featurette-image img-fluid mx-auto"
                            src="../profileholder.jpg"
                        />
                    </Col>
                </Row>

                <hr class="featurette-divider"></hr>
                <Row className="featurette">
                    <Col md={7}>
                        <h2 className="featurette-heading">Tom Rachtawarn</h2>
                        <span className="text-muted">Software Developer</span>
                        <p className="lead">
                            An aspiring developer who has passion for building
                            and solving programming projects Who has 2 years of
                            4+ years of professional working experience in
                            business operation and management. Recent graduate
                            of a java full-stack bootcamp with experience
                            developing web applications. With a bachelor degree
                            in Business Administration, Major in Information
                            System Management. Looking for an opportunity to
                            join the developer team and contribute to amazing
                            projects.
                        </p>
                        <span className="text-muted mr-3">Contact:</span>
                        <Card.Link href="https://www.linkedin.com/in/tom-rachtawarn/">
                            LinkedIn
                        </Card.Link>
                        <Card.Link href="https://github.com/tomrach11">
                            GitHub
                        </Card.Link>
                        <Card.Link href="http://tomrach11.github.io/">
                            Website
                        </Card.Link>
                        <Card.Link href="mailto: tomrach11@gmail.com">
                            tomrach11@gmail.com
                        </Card.Link>
                    </Col>
                    <Col md={5}>
                        <Image
                            className="featurette-image img-fluid mx-auto"
                            src="../profileholder.jpg"
                        />
                    </Col>
                </Row>

                <hr class="featurette-divider"></hr>
                <Row className="featurette">
                    <Col md={7} className="order-md-2">
                        <h2 className="featurette-heading">Alan Carrasco</h2>
                        <span className="text-muted">Software Developer</span>
                        <p className="lead">
                            I have a passion for Technology and Aviation. I have
                            been in the Airline industry since 2015 and I love
                            every aspect of it. I am also enrolled in Laguardia
                            CC Techhire Open Code program. Upon completion of
                            the program I will have earned a Full Stack
                            Developer certificate.
                        </p>
                        <span className="text-muted mr-3">Contact:</span>
                        <Card.Link href="https://www.linkedin.com/in/alancs90/">
                            LinkedIn
                        </Card.Link>
                        <Card.Link href="https://github.com/tomrach11">
                            GitHub
                        </Card.Link>
                        <Card.Link href="mailto: alancs90@gmail.com">
                            alancs90@gmail.com
                        </Card.Link>
                    </Col>
                    <Col md={5} className="order-md-1">
                        <Image
                            className="featurette-image img-fluid mx-auto"
                            src="../profileholder.jpg"
                        />
                    </Col>
                </Row>

                <hr class="featurette-divider"></hr>
                <Row className="featurette">
                    <Col md={7}>
                        <h2 className="featurette-heading">
                            Jodi Pierre-Louis
                        </h2>
                        <span className="text-muted">Software Developer</span>
                        <p className="lead">
                            I have recently graduated from the TechHire a
                            full-stack Java web development based program in
                            partnership with Software Guild. I am currently
                            looking for work as a Junior Software Engineer or as
                            a Web Developer. I am focused on constantly
                            improving my skills and willing to learn other
                            stacks. Currently, I am well versed in full-stack
                            Java web development using Spring and MySQL. I am
                            willing to relocate or work remotely if required. I
                            look forward to connecting with you!
                        </p>
                        <span className="text-muted mr-3">Contact:</span>
                        <Card.Link href="https://www.linkedin.com/in/jodi-pierre-louis/">
                            LinkedIn
                        </Card.Link>
                        <Card.Link href="https://github.com/Jopie2016">
                            GitHub
                        </Card.Link>
                        <Card.Link href="mailto: jpl212011@gmail.com">
                            jpl212011@gmail.com
                        </Card.Link>
                    </Col>
                    <Col md={5}>
                        <Image
                            className="featurette-image img-fluid mx-auto"
                            src="../profileholder.jpg"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

AboutUs.propTypes = {};

export default AboutUs;
