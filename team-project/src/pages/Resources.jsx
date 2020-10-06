import React, { useState } from 'react'
import Image from 'react-bootstrap/Image'
import { Nav, Carousel, Container, Card, Button, Tab, Row, Col, Tabs, CardGroup, Form, ListGroup, Jumbotron } from 'react-bootstrap';
import PropTypes from 'prop-types'
import "../components/Result.scss"
import Hero2 from "../components/Hero2"
import Gallery from "../components/Gallery"
import "../App.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { resources } from "../data/resources"
import ResourceCard from "../components/ResourceCard"
import RecommendPopoverButton from "../components/RecommendPopoverButton"
import "../styles/Resources.css"
import "../components/Gallery.scss"

function Resources(props) {
    const [filterResources, setFilterResources] = useState(resources);
    const [inputValue, setInputValue] = useState("");
    const searchChange = (event) => {
        setFilterResources(resources.filter((item) => item.title.toLowerCase().includes(event.target.value.toLowerCase())));
    }
    const filterShowAll = () => {
        setFilterResources(resources)
    }
    const filterEvent = () => {
        setFilterResources(resources.filter((item) => item.type === "event"))
    }
    const filterHasInsurance = () => {
        setFilterResources(resources.filter((item) => item.forCase.includes("case1") || item.forCase.includes("case2")))
    }
    const filterNoInsurance = () => {
        setFilterResources(resources.filter((item) => item.forCase.includes("case3") || item.forCase.includes("case4")))
    }
    
    return (
        // backgroundImage: "linear-gradient(to right,#FFCCCB  0%,#b19cd9  100%)"backgroundColor: "#f2f6fa" 
        <div style={{
            backgroundImage: "linear-gradient(to bottom, #f2f6fa 0%, #FFCCCB 30%, #b19cd9 100%)"
        }}>
            <Navbar theme="light" />
            <Container>

                {/* Spacer div */}
                <div
                    style={{
                        height: "6vh",
                        padding: "0px",
                        backgroundColor: "transparent",
                        // borderImage: "linear-gradient(135deg, rgb(255, 44, 167) 0%, rgb(230, 173, 201)) 1"}}>
                    }}>
                </div>
                <header className="mb-4" style={{ textAlign: "left", fontFamily: "Montserrat" }}>
                    {/* <Row> */}
                    <h1 style={{ fontWeight: "bold", display:"inline-block", paddingRight:"1.2rem"}}> Mammogram Resources</h1> 
                     <RecommendPopoverButton/>

                    {/* </Row> */}

                    <h2 style={{ color: "rgba(0, 0, 0, 0.5)" }}>Up-to-date resources recommended by health professionals & you!</h2>

                </header>

                <div className="mb-4">
                    <Button variant="success" className="my-1" size="lg" onClick={ filterShowAll }> All(20) </Button>
                    {"    "}
            

                    <Button variant="info" className="my-1" size="lg" onClick={ filterHasInsurance }> With insurance </Button>
                    {"    "}
             

                    <Button variant="info" className="my-1" size="lg" onClick={ filterNoInsurance }> No insurance </Button>
                    {"    "}
           
                    <Button variant="info" className="my-1" size="lg" onClick={ filterEvent }> Events </Button>
                </div>
                <Row className="justify-content-center mb-4">
                    <Col sm="auto" md="auto">
                        <form class="form-inline" style={{ margin: "0 auto" }}>
                            <input
                                class="form-control mr-sm-2 "
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                onChange={searchChange}
                                style={{ boxShadow: "rgba(50, 50, 93, 0.11) 0px 4px 6px, rgba(0, 0, 0, 0.08) 0px 1px 3px", 
                                width: "100%"}}>
                            </input>
                        </form>
                    </Col>
                </Row>
            </Container>
            <Container fluid>

                <div id="searchContainer"
                    style={{
                        position: "relative",
                        padding: "20px",
                        borderRadius: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "rgb(242,246,250, 0.8)",
                        margin: "2vw"
                    }}>
                    <Row className="justify-content-center">
                        {filterResources
                            .map((item) => (
                                <ResourceCard
                                    className="col"
                                    // style={{ padding: "0.4rem" }}
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
            </Container>

            {/* <Container fluid>

                <div id="searchContainer"
                    style={{
                        position: "relative",
                        padding: "20px",
                        borderRadius: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "rgb(242,246,250, 0.8)",
                        margin: "2vw"
                    }}>
                    <Row className="justify-content-center">
                        {resources
                            .map((item) => (
                                <ResourceCard
                                    className="col"
                                    type={item.type}
                                    title={item.title}
                                    organization={item.organization}
                                    url={item.url}
                                    doctorLikes={item.doctorLikes}
                                    likes={item.likes}
                                    tags={item.tags}
                                    phoneNumber={item.phoneNumber}
                                />))}

                    </Row>
                </div>
            </Container> */}


            <div
                style={{
                    // height: "20vh",
                    marginTop:"10vh",
                    paddingTop: "10vh",
                    backgroundColor: "rgb(148,0,211, 0.4)",
                    backgroundImage: "linear-gradient(to bottom, rgb(242,246,250, 0.1) 0%, rgb(242,246,250, 0.4) 100%)"
                    // borderImage: "linear-gradient(135deg, rgb(255, 44, 167) 0%, rgb(230, 173, 201)) 1"}}>
                }}>
           



            <Container fluid style={{ fontFamily: "Montserrat" }}>

                <div
                    style={{
                        // padding: "20px",
                        // borderRadius: "20px",
                        alignItems: "center",
                        justifyContent: "center",
                        // backgroundColor: "rgb(242,246,250, 0.4)",
                        backgroundColor: "rgb(230,230,250, 0.8)",
                        padding: "2vw"
                    }}>

                    <header className="mb-5" style={{ textAlign: "left", fontFamily: "Montserrat", }}>
                        {/* <h1 style={{ fontWeight: "bold" }}> Mammogram Resources</h1> */}
                        <h2 style={{ color: "rgba(0, 0, 0, 0.5)" }}>Before you go...here's our daily digest</h2>

                    </header>

                    <Tab.Container fluid id="left-tabs-example" defaultActiveKey="first" >
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills info" className="flex-column"
                                    style={{ backgroundImage: "linear-gradient(to bottom right, #f2f6fa 0%, #FFCCCB 100%)", opacity: "80%" }}>
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Prevention Tips</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Myths and Facts</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>


                                <Tab.Content>
                                    <Tab.Pane eventKey="first">

                                        <ListGroup variant="flush" style={{ fontSize: "1.2rem" }} >
                                            <ListGroup.Item className="resources-list-item" style={{ backgroundColor: "#FFFFF" }}>Maintain a healthy weight.</ListGroup.Item>
                                            <hr className="mt-0 mb-1" />
                                            <ListGroup.Item className="resources-list-item" style={{ backgroundColor: "#FBEdFB" }}>Exercise regularly.</ListGroup.Item>
                                            <hr className="mt-0 mb-1" />
                                            <ListGroup.Item className="resources-list-item" style={{ backgroundColor: "#F7DAF7" }}>Don’t drink alcohol, or limit alcoholic drinks.</ListGroup.Item>
                                            <hr className="mt-0 mb-1" />
                                            <ListGroup.Item className="resources-list-item" style={{ backgroundColor: "#F3C8F3" }}>If you are taking, or have been told to take, hormone replacement or birth control pills, ask your doctor about the risks and find out if it is right for you.</ListGroup.Item>
                                            <hr className="mt-0 mb-1" />
                                            <ListGroup.Item className="resources-list-item" style={{ backgroundColor: "#EFB6EF" }}>Breastfeed your children, if possible.</ListGroup.Item>
                                            <hr className="mt-0 mb-1" />
                                            <ListGroup.Item className="resources-list-item" style={{ backgroundColor: "#EBA4EB" }}>If you have a family history of breast cancer or inherited changes in your BRCA1 and BRCA2 genes, talk to your doctor about other ways to lower your risk.</ListGroup.Item>
                                            <hr className="mt-0 mb-1" />
                                            <ListGroup.Item className="resources-list-item" style={{ backgroundColor: "#E691E7" }} ><p style={{ color: "WHITE" }}>Source: Division of Cancer Prevention and Control, Centers for Disease Control and Prevention</p> </ListGroup.Item>
                                        </ListGroup>
                                        {/* #EFB6EF EBA4EB*/}
                                        {/* <Sonnet /> */}
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="second">
                                        <ListGroup.Item style={{ border: "none", backgroundColor: "transparent" }}>
                                            <Image id="infographic1" src="./mammyths.jpg" />
                                        </ListGroup.Item>

                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>

                </div>
            </Container>


            {/* Spacer div */}
            <div
                style={{
                    height: "6vh",
                    padding: "0px",
                    backgroundColor: "transparent",
                    // borderImage: "linear-gradient(135deg, rgb(255, 44, 167) 0%, rgb(230, 173, 201)) 1"}}>
                }}>
            </div>




            {/* Section 4: Gallery */}

            <Container fluid style={{ fontFamily: "Montserrat" }}>

                <div
                    style={{
                        // padding: "20px",
                        // borderRadius: "20px",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "rgb(242,246,250, 0.4)",
                        padding: "2vw"
                    }}>

                    <header className="mb-5" style={{ textAlign: "left", fontFamily: "Montserrat", }}>
                        <h2 style={{ color: "rgba(0, 0, 0, 0.5)" }}>Gallery</h2>

                    </header>
                    <div className="py-2" >
                        <Gallery />
                    </div>
                </div>
            </Container>
            {/* <Image src="https://marvel-b1-cdn.bc0a.com/f00000000166771/www.beaconhealthsystem.org/wp-content/uploads/2020/09/Mammo-page-header_2020-09-v1.jpg" fluid /> */}
            <br />



            {/* Spacer div */}
            <div
                style={{
                    height: "6vh",
                    padding: "0px",
                    backgroundColor: "transparent",
                    // borderImage: "linear-gradient(135deg, rgb(255, 44, 167) 0%, rgb(230, 173, 201)) 1"}}>
                }}>
            </div>
            </div>

            <Footer />



        </div>
    );
}

export default Resources