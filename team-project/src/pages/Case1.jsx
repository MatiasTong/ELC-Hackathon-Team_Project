import PropTypes from "prop-types";
import { Row, Col, Image } from "react-bootstrap";
import Hero2 from "../components/Hero2";
import Media from "react-bootstrap/Media";
import StepsCase1 from "../components/StepsCase1";
import ResourceCard from "../components/ResourceCard";
import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";

import { resources } from "../data/resources"
import Footer from "../components/Footer";
import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
// import { Link } from 'react-router-dom';
import "../components/Hero2.scss"


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
        <div
            style={{
                backgroundImage:
                    "linear-gradient(to right,#FFCCCB  0%,#b19cd9  100%)",
            }}
        >
            {/* Section 1: Header and navbar */}
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
                                    <b>Congratulations!!</b> We have found a way for you to get screening with no cost.
                                </h1>
                            </div>
                        </Fade>
                        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={800} distance="30px">
                            <div className="row">
                                <h2 className="col-sm-12 hero2-text">
                                    The Affordable Care Act requires most health
                                    insurance plans to pay for screening mammograms with no
                                    out-of-pocket expenses for women ages 40 and older.<br />
                                    Since, you are 40 or older and have insurance. You can get checked with
                                    no extra cost.
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
            <div id="section1"
                style={{
                    height: "6vh",
                    padding: "0px",
                    backgroundImage:
                        "linear-gradient(to right, #FFCCCB 0%, #b19cd9 100%)",
                    // borderImage: "linear-gradient(135deg, rgb(255, 44, 167) 0%, rgb(230, 173, 201)) 1"}}>
                }}
            ></div>

            {/* Section 2: Steps or Options */}
            <div
                style={{
                    //  background: "linear-gradient(0deg, rgba(241, 241, 241,0.2), rgba(241, 241, 241,0.2)), url(https://images.unsplash.com/photo-1552035509-b247fe8e5078?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)",
                    borderRadius: "10px",
                    margin: "2.8rem",
                    backgroundColor: "#f2f6fa",
                    border: "none",
                }}
            >
                <StepsCase1 />
            </div>

            {/* Spacer Div */}
            <div
                style={{
                    height: "4vh",
                    padding: "0px",
                    backgroundImage:
                        "linear-gradient(to right, #FFCCCB 0%, #b19cd9 100%)",
                    // borderImage: "linear-gradient(135deg, rgb(255, 44, 167) 0%, rgb(230, 173, 201)) 1"}}>
                }}
            ></div>

            {/* Section 3: Resources */}


            <Container className="py-5" style={{ margin: "2.8rem", }}>

                <div style={{
                    borderRadius: "20px",
                    textAlign: "left",
                    marginBottom: "2rem",
                    backgroundColor: "#f2f6fa",
                    padding: "20px",
                }}>

                    <h3
                        style={{
                            fontSize: "2.8rem",
                            fontWeight: "bold",
                            opacity: "80%",
                        }}
                    >
                        Related Resources
                </h3>

                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            margin: "2.8rem",
                        }}
                    >
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





                </div>
            </Container>



            {/* Spacer Div */}
            <div
                style={{
                    height: "4vh",
                    padding: "0px",
                    backgroundImage:
                        "linear-gradient(to right, #FFCCCB 0%, #b19cd9 100%)",
                    // borderImage: "linear-gradient(135deg, rgb(255, 44, 167) 0%, rgb(230, 173, 201)) 1"}}>
                }}
            ></div>

            {/* Section 4: Gallery */}
            <div className="py-5">
                <Gallery />
            </div>

            {/* Spacer Div */}
            <div
                style={{
                    height: "4vh",
                    padding: "0px",
                    backgroundImage:
                        "linear-gradient(to right, #FFCCCB 0%, #b19cd9 100%)",
                    // borderImage: "linear-gradient(135deg, rgb(255, 44, 167) 0%, rgb(230, 173, 201)) 1"}}>
                }}
            ></div>
            <Image src="https://marvel-b1-cdn.bc0a.com/f00000000166771/www.beaconhealthsystem.org/wp-content/uploads/2020/09/Mammo-page-header_2020-09-v1.jpg" fluid />

            <br />
            <Footer />

        </div>
    );
}

Case1.propTypes = {};

export default Case1;
