import Image from 'react-bootstrap/Image'
import { Nav, Carousel, Container, Card, Accordion, Button, Tab, Row, Col, Tabs, CardGroup, Form, ListGroup, Jumbotron } from 'react-bootstrap';
import PropTypes from 'prop-types'
import Hero3 from "../components/Hero3"
import Media from 'react-bootstrap/Media'
import Case3Steps from "../components/Case3Steps"
import Gallery from "../components/Gallery"
import Linkify from 'react-linkify';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ResourceCard from "../components/ResourceCard"
import { resources } from "../data/resources"
import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import "../styles/Case.css"
// import { Link } from 'react-router-dom';

import "../components/Hero2.scss"

function Case3(props) {
    const [isDesktop, setIsDesktop] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

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
        <div style={{ backgroundImage: "linear-gradient(to right,#FFCCCB  0%,#b19cd9  100%)" }}>

            {/* Section 1: Header and navbar */}
            <header
                style={{
                    background: "linear-gradient(0deg, rgba(44, 31, 61, 0.35), rgba(22, 11, 11, 0.349)), url('https://images.unsplash.com/photo-1598885159329-9377168ac375?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    minHeight: "100vh"
                }}>
                <Navbar />

                {/* Hero Image */}
                <section id="hero2" className="jumbotron" style={{ backgroundColor: "transparent" }}>
                    <Container>
                        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={200} distance="30px">
                            <div className="row">
                                <h1 className="hero2-title col-sm-12">
                                    {"Breast Cancer in Young Women "}{' '}
                                    <br />
                                </h1>
                            </div>
                        </Fade>
                        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={800} distance="30px">
                            <div className="row">
                                <h2 className="col-sm-12 hero2-text">
                                    {"With treatment, the chances of survival for young women diagnosed with early breast cancer are good."}
                                </h2>

                            </div>
                        </Fade>
                        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1100} distance="30px">
                            <p className="hero-cta row justify-content-center mt-5">
                                <span className="cta-btn cta-btn--hero">
                                    <Link activeClass="active" to="section1" spy={true} smooth={true} duration={1000}>
                                        {'Learn more'}
                                    </Link>
                                </span>
                            </p>
                        </Fade>
                    </Container>
                </section>
                {/* End of Hero Image */}

            </header>
       
            {/* Spacer div */}
            <div id="section1" className="case-spacer-div mt-4" 
            ></div>

            {/* Section 2: Steps or Options */}
            <section className="case-section-container">
                <div style={{ textAlign: "left" }}>
                    <h2 className="case-section-heading">
                        How to Get Started
                    </h2>
                    <h3 className="case-section-subheading">
                        Step by Step Directions
                </h3>
                </div>
                <Case3Steps />
            </section>

            {/* Spacer Div */}
            <div className="case-spacer-div">
            </div>

            {/* Section 3: Resources */}
            <section className="case-section-container">
                <h3 className="case-section-subheading">
                    Related Resources
                </h3>
                 
                <div className="case-resource-group">
                
                <Row className="justify-content-center">
              
                    {resources
                        .filter((item) => item.isOver40 === false && item.isInsured === false)
                        .map((item) => (
                            <ResourceCard
                                className="col mx-2"
                                type={item.type}
                                title={item.title}
                                organization={item.organization}
                                url={item.url}
                                doctorLikes={item.doctorLikes}
                                likes={item.likes}
                                tags={item.tags}
                                phoneNumber={item.phoneNumber}
                            />

                        ))}

                </Row>
            </div>
            </section>

             {/* Spacer Div */}
            <div className="case-spacer-div">
            </div>


            {/* <Container>
                <br />
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Prevention Tips</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">First Mammogram Video</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">

                                    <ListGroup variant="flush">
                                        <ListGroup.Item>Maintain a healthy weight.</ListGroup.Item>
                                        <ListGroup.Item>Exercise regularly.</ListGroup.Item>
                                        <ListGroup.Item>Don’t drink alcohol, or limit alcoholic drinks.</ListGroup.Item>
                                        <ListGroup.Item>If you are taking, or have been told to take, hormone replacement or birth control pills, ask your doctor about the risks and find out if it is right for you.</ListGroup.Item>
                                        <ListGroup.Item>Breastfeed your children, if possible.</ListGroup.Item>
                                        <ListGroup.Item>If you have a family history of breast cancer or inherited changes in your BRCA1 and BRCA2 genes, talk to your doctor about other ways to lower your risk.</ListGroup.Item>
                                        <ListGroup.Item><p style={{ color: "gray" }}>Source: Division of Cancer Prevention and Control, Centers for Disease Control and Prevention</p> </ListGroup.Item>

                                    </ListGroup>

                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <ListGroup.Item><iframe width="560" height="315" src="https://www.youtube.com/embed/MGsWSQGmFnY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </ListGroup.Item> 
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>

            </Container> */}



            {/* Section 4: Gallery */}
               {/* Section 4: Gallery */}
               <section className="case-section-container">

<h3 className="case-section-subheading">
    Preparing for the day
</h3>
            <div className="py-5" >
                <Gallery />
            </div>
            </section>

            <br />
            <Image src="https://marvel-b1-cdn.bc0a.com/f00000000166771/www.beaconhealthsystem.org/wp-content/uploads/2020/09/Mammo-page-header_2020-09-v1.jpg" fluid />
            <br />
            <br />
            <Footer></Footer>

        </div>
    )
}
Case3.propTypes = {

}

export default Case3



