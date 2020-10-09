import { Row, Image, Container } from "react-bootstrap";
import StepsCase1 from "../components/StepsCase1";
import ResourceCard from "../components/ResourceCard";
import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";
import { resources } from "../data/resources"
import Footer from "../components/Footer";
import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import "../components/Hero2.scss"
import "../styles/Case.css"


function Case1(props) {
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
        <div class="case"
            style={{
                backgroundImage:
                    "linear-gradient(to right,#FFCCCB  0%,#b19cd9  100%)",
            }}
        >
            {/* Section 1: Navbar and Hero header */}
            <header
                style={{
                    background:
                        "linear-gradient(0deg, rgba(44, 31, 61, 0.35), rgba(22, 11, 11, 0.349)), url('https://i.ytimg.com/vi/41QrZ42ewcY/maxresdefault.jpg')",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    minHeight: "100vh",
                }}>
                <Navbar />

                {/* Hero Image */}
                <section id="hero2" className="jumbotron" style={{ backgroundColor: "transparent" }}>
                    <Container>
                        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={200} distance="30px">
                            <div className="row">
                                <h1 className="hero2-title col-sm-12">
                                    <b>Congrats!!</b> We have found a way for you to get screening with no cost.
                                </h1>
                            </div>
                        </Fade>
                        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={800} distance="30px">
                            <div className="row">
                                <h2 className="col-sm-12 hero2-text">
                                    The Affordable Care Act requires most health
                                    insurance plans to pay for screening mammograms with no
                                    out-of-pocket expenses for women ages 40 and older.<br />
                                    You may be able to get checked with no extra cost.
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
                <StepsCase1 />
            </section>


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
                            .filter((item) => item.forCase.includes("case1"))
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


            <div className="case-spacer-div">
            </div>

            {/* Section 4: Gallery */}
            <section className="case-section-container">

                <h3 className="case-section-subheading">
                    Preparing for the day
                </h3>
                <div className="py-4">
                    <Gallery />
                </div>
            </section>

            {/* Spacer Div */}
            <div className="case-spacer-div"
            ></div>

            <Image src="https://marvel-b1-cdn.bc0a.com/f00000000166771/www.beaconhealthsystem.org/wp-content/uploads/2020/09/Mammo-page-header_2020-09-v1.jpg" fluid />

            <br />
            <Footer />

        </div>
    );
}

export default Case1;
