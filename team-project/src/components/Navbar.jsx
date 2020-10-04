import React from 'react'
import PropTypes from 'prop-types'
import {Navbar as Navbar2, Nav} from "react-bootstrap"

function Navbar(props) {
    return (
        <Navbar2 variant="dark" fixed="top" className="">
                <Navbar2.Brand style={{ fontSize: "1.5rem" }} href="/">Overcomer</Navbar2.Brand>
                <Nav className="mr-auto" style={{ fontSize: "1.3rem" }}>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Prevention</Nav.Link>
                </Nav>
            </Navbar2>
    )
}

Navbar.propTypes = {

}

export default Navbar

