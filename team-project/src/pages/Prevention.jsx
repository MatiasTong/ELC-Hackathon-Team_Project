import React from 'react'
import Image from 'react-bootstrap/Image'
import { Navbar, Nav, Carousel, Container, Card, Button, CardGroup, Form, Jumbotron } from 'react-bootstrap';
import PropTypes from 'prop-types'
import "../components/Result.scss"
import Hero2 from "../components/Hero2"
import Gallery from "../components/Gallery"
import "../App.css"
import "../components/Gallery.scss"


function Prevention(props) {
    return (
        <div>
            <Navbar variant="dark" className="Navbar fixed-top" >
                <Navbar.Brand style={{ fontSize: "1.5rem" }} href="#home">
                <Image src="./logo.png" fluid />

                </Navbar.Brand>
                <Nav className="mr-auto" style={{ fontSize: "1.3rem" }}>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Prevention</Nav.Link>
                </Nav>
            </Navbar>
            <Hero2 />
            <Container>
                <br />

            </Container>
            
            <br />
            <Gallery />
            <br />
            <Image src="https://marvel-b1-cdn.bc0a.com/f00000000166771/www.beaconhealthsystem.org/wp-content/uploads/2020/09/Mammo-page-header_2020-09-v1.jpg" fluid />
            <br />
            <br />
        </div>
    )
}

Prevention.propTypes = {

}

export default Prevention

