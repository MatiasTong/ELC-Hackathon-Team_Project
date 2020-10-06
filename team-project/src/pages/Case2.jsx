import PropTypes from 'prop-types'
import { Row, Image, Col } from "react-bootstrap"
import Hero2 from "../components/Hero2"
import Media from 'react-bootstrap/Media'
import StepsCase2 from "../components/StepsCase2"
import ResourceCard from "../components/ResourceCard"
import Navbar from "../components/Navbar"
import Gallery from "../components/Gallery"
import Footer from "../components/Footer"
import { resources } from "../data/resources"
import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
// import { Link } from 'react-router-dom';
import "../components/Hero2.scss"


function Case2(props) {
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
                }}
            >
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
            <div
              id="section1"
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
                <StepsCase2 />
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
                        .filter((item) => item.forCase.includes("case2")).map((item) => (
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
                }}>
            </div>

            {/* 
            <ul className="list-unstyled">
                <Media as="li" className="mx-5 my-5">
                    <img
                        width={250}
                        height={150}
                        className="mx-3"
                        src="https://www.cdc.gov/cancer/breast/basic_info/images/woman-doctor-250.jpg"
                        alt="Generic placeholder"
                    />
                    <Media.Body style={{ textAlign: "left" }} className="mx-5" >
                        <a href="https://www.cdc.gov/cancer/breast/basic_info/symptoms.htm" ><h5>What Are the Symptoms of Breast Cancer?</h5></a>
                        <p>
                            Different people have different symptoms of breast cancer. Some people
                            do not have symptoms at all. See a list of possible symptoms.
                        </p>
                    </Media.Body>
                </Media>
                <Media as="li" className="mx-5 my-5">
                    <img
                        width={250}
                        height={150}
                        className="mx-3 "
                        src="https://www.cdc.gov/cancer/breast/basic_info/images/3generations-250.jpg"
                        alt="Generic placeholder"
                    />
                    <Media.Body style={{ textAlign: "left" }} className="mx-5" >
                        <a href="https://www.cdc.gov/cancer/breast/basic_info/risk_factors.htm"><h5>What Are the Risk Factors for Breast Cancer?</h5></a>
                        <p>
                            Studies have shown that your risk for breast cancer is due to a combination of
                            factors. The main factors that influence your risk include being a woman and getting older.
                        </p>
                    </Media.Body>
                </Media>
                <Media as="li" className="mx-5 my-5">
                    <img
                        width={250}
                        height={150}
                        className="mx-3 "
                        src="https://www.cdc.gov/cancer/breast/basic_info/images/jogging-250.jpg"
                        alt="Generic placeholder"
                    />
                    <Media.Body style={{ textAlign: "left" }} className="mx-5" >
                        <a href="https://www.cdc.gov/cancer/breast/basic_info/prevention.htm"><h5>What Can I Do to Reduce My Risk of Breast Cancer?</h5></a>
                        <p>
                            Many factors over the course of a lifetime can influence your breast cancer risk.
                            You can’t change some factors, such as getting older or your family history, but
                            you can help lower your risk of breast cancer by taking care of your health.
                        </p>
                    </Media.Body>
                </Media>
                <Media as="li" className="mx-5 my-5">
                    <img
                        width={250}
                        height={150}
                        className="mx-3 "
                        src="https://www.cdc.gov/cancer/breast/basic_info/images/mammogram-250.jpg"
                        alt="Generic placeholder"
                    />
                    <Media.Body style={{ textAlign: "left" }} className="mx-5" >
                        <a href="https://www.cdc.gov/cancer/breast/basic_info/screening.htm"><h5>What Is Breast Cancer Screening?</h5></a>
                        <p>
                            Breast cancer screening means checking a woman’s breasts for cancer before there are
                            signs or symptoms of the disease. All women need to be informed by their health care
                            provider about the best screening options for them.
                        </p>
                    </Media.Body>
                </Media>
                <Media className="mx-5 my-5">
                    <Media.Body style={{ textAlign: "left" }} className="mx-5" >
                        <h2>Should women under age 40 get mammograms?</h2>
                        <h5>
                            In general, screening mammograms are not recommended for women under 40 years old. However,
                            for women with genetic mutations, screening can begin at 25, and in women with a family
                            history of breast cancer, screening is often initiated 10 years earlier than the first
                            affected relative in the family. Breast MRI is often recommended to high risk women in
                            addition to mammography.
                        </h5>
                    </Media.Body>
                </Media>

                <a href="http://www.zocdoc.com"><h1>Find doctors in your network</h1> </a>

            </ul> */}
            <Footer></Footer>
            <Image src="https://marvel-b1-cdn.bc0a.com/f00000000166771/www.beaconhealthsystem.org/wp-content/uploads/2020/09/Mammo-page-header_2020-09-v1.jpg" fluid />
            <br />
        </div>
    );
}

Case2.propTypes = {

}

export default Case2



