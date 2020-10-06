import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import Hero2 from "../components/Hero2";
import Media from "react-bootstrap/Media";
import StepsCase1 from "../components/StepsCase1";
import ResourceCard from "../components/ResourceCard";
import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";

import {resources} from "../data/resources"
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
                        "linear-gradient(0deg, rgba(44, 31, 61, 0.35), rgba(22, 11, 11, 0.349)), url('https://images.unsplash.com/photo-1535469420027-517674dad7a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')",
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
                                    {"Breast Cancer in Young Women"}{' '}
                                    <br />
                                </h1>
                            </div>
                        </Fade>
                        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={800} distance="30px">
                            <div className="row">
                                <h2 className="col-sm-12 hero2-text">
                                    {"Women who are under 40 years old may feel they are not at risk for breast cancer, but 5% of all cases happen in this group. Diagnosis can be more difficult due to breast tissue density. Also treatment can affect fertility."}
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
            <div
                style={{
                    padding: "20px",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#f2f6fa",
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

            <Footer/>
            
        </div>
    );
}

Case1.propTypes = {};

export default Case1;
