import React from 'react'
import PropTypes from 'prop-types'
import {Navbar as Navbar2, Nav} from "react-bootstrap"

function Navbar(props) {
    return (
        <Navbar2 variant="dark"  fixed="top" style={{color:"black"}}>
                <Navbar2.Brand style={{ fontSize: "1.5rem" }} href="/">Overcomer</Navbar2.Brand>
                <Nav className="mr-auto" style={{ fontSize: "1.3rem" }}>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Resources</Nav.Link>
                    <Nav.Link href="/AboutUs">About Us</Nav.Link>
                </Nav>
            </Navbar2>
    )
}

Navbar.propTypes = {

}

// .Navbar{
//     /* navbar opacity */
//     background: rgba(255, 205, 205, 0);
//     z-index: 2;
//     position:fixed;
//   }

export default Navbar

