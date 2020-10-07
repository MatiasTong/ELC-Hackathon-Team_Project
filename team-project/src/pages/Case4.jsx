
import Image from 'react-bootstrap/Image'
import { Container, Card, Button, Tab, Row, Col, ListGroup, Jumbotron } from 'react-bootstrap';
import CaseFourSteps from "../components/CaseFourSteps"
import Gallery from "../components/Gallery"
import Navbar from "../components/Navbar"
import ResourceCard from "../components/ResourceCard"
import { resources } from "../data/resources"
import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import Footer from "../components/Footer"
import { Link } from 'react-scroll';
import "../styles/Case.css"
// import { Link } from 'react-router-dom';

import "../components/Hero2.scss"

function Case4(props) {
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
                    background: "linear-gradient(0deg, rgba(44, 31, 61, 0.35), rgba(22, 11, 11, 0.349)), url('https://images.unsplash.com/photo-1507653050-4053dc17dfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')",
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
                                    {"Breast Cancer in Older Women"}{' '}
                                    <br />
                                </h1>
                            </div>
                        </Fade>
                        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={800} distance="30px">
                            <div className="row">
                                <h2 className="col-sm-12 hero2-text">
                                    {"Breast cancer is the second leading cause of cancer death in women (only lung cancer kills more women each year). The chance that a woman will die from breast cancer is about 1 in 38 (about 2.6%)."}
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
            {/* Spacer Div */}
            <div id="section1" className="case-spacer-div mt-4">
            </div>

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
                <CaseFourSteps />
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
                            .filter((item) => item.isOver40 === true && item.isInsured === false)
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



export default Case4

