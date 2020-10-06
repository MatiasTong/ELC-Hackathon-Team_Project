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

import "../components/Gallery.scss"

function Resources(props) {
    const [filterResources, setFilterResources] = useState(resources);
    const [inputValue, setInputValue] = useState("");


    const searchChange = (event) => {
        setFilterResources(resources.filter((item) => item.title.toLowerCase().includes(event.target.value.toLowerCase())));
    }

    return (
        <div
            style={{
                backgroundImage:
                    "linear-gradient(to right,#FFCCCB  0%,#b19cd9  100%)",
            }}
        >
            <Navbar theme="light" />
            <Container>
 
                {/* Spacer div */}
                <div
                    style={{
                        height: "6vh",
                        padding: "0px",
                        backgroundImage: "linear-gradient(to right, #FFCCCB 0%, #b19cd9 100%)",
                        // borderImage: "linear-gradient(135deg, rgb(255, 44, 167) 0%, rgb(230, 173, 201)) 1"}}>
                    }}>
                </div>
            <div className="mb-4">
                <Button variant="success" className="my-1" size="lg"> All(20) </Button>
                {"    "}
            

                <Button variant="info" className="my-1" size="lg"> With insurance </Button>
                {"    "}
             

                <Button variant="info" className="my-1" size="lg"> No insurance </Button>
                {"    "}
           
                <Button variant="info" className="my-1" size="lg"> Events </Button>
            </div>
            <Row className="justify-content-center mb-4">
               <Col sm="auto" md="auto">
                <form class="form-inline" style={{margin:"0 auto"}}>
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={searchChange}></input>
                    <button class="btn btn-outline-primary my-2 my-sm-0 text-center" type="submit"> Search </button>
                </form>
               </Col>
            </Row>
            <div style={{
                padding: "20px",
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#f2f6fa",
                margin: "0.5rem"
            }}>
                <Row className="justify-content-center">
                    {filterResources
                        .map((item) => (
                            <ResourceCard
                                className="col"
                                style={{padding: "0.4rem"}}
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

            <br />
           
            <br />
            {/* Section 4: Gallery */}
            {/* <div className="py-5" >
                <Gallery />
            </div> */}

            <Container style ={{fontFamily: "Montserrat"}}>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">
                                        Prevention Tips
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>


                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <ListGroup variant="flush" style={{fontSize:"1.2rem"}} >
                                        <ListGroup.Item className ="resources-list-item" style={{backgroundColor:"#FFFFF"}}>Maintain a healthy weight.</ListGroup.Item>
                                        <hr className="mt-0 mb-1"/>
                                        <ListGroup.Item style={{backgroundColor:"#FBEdFB"}}>Exercise regularly.</ListGroup.Item>
                                        <hr className="mt-0 mb-1"/>
                                        <ListGroup.Item style={{backgroundColor:"#F7DAF7"}}>Don’t drink alcohol, or limit alcoholic drinks.</ListGroup.Item>
                                        <hr className="mt-0 mb-1" />
                                        <ListGroup.Item style={{backgroundColor:"#F3C8F3"}}>If you are taking, or have been told to take, hormone replacement or birth control pills, ask your doctor about the risks and find out if it is right for you.</ListGroup.Item>
                                        <hr className="mt-0 mb-1"/>
                                        <ListGroup.Item style={{backgroundColor:"#EFB6EF"}}>Breastfeed your children, if possible.</ListGroup.Item>
                                        <hr className="mt-0 mb-1"/>
                                        <ListGroup.Item style={{backgroundColor:"#EBA4EB"}}>If you have a family history of breast cancer or inherited changes in your BRCA1 and BRCA2 genes, talk to your doctor about other ways to lower your risk.</ListGroup.Item>
                                        <hr className="mt-0 mb-1"/>
                                        <ListGroup.Item style={{backgroundColor:"#E691E7"}} ><p style={{ color: "WHITE" }}>Source: Division of Cancer Prevention and Control, Centers for Disease Control and Prevention</p> </ListGroup.Item>
                                    </ListGroup>
                                    {/* #EFB6EF EBA4EB*/}
                                    {/* <Sonnet /> */}
                                </Tab.Pane>
                              </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
            <br />
            <br />
            <Image src="./mammyths.jpg" />


            {/* Section 4: Gallery */}
            <div className="py-5" >
                <Gallery />
            </div>
            {/* <Image src="https://marvel-b1-cdn.bc0a.com/f00000000166771/www.beaconhealthsystem.org/wp-content/uploads/2020/09/Mammo-page-header_2020-09-v1.jpg" fluid /> */}
            <br />
            <Footer></Footer>

        </div>
    );
}

export default Resources