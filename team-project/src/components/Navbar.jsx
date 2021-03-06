import React from 'react'
import PropTypes from 'prop-types'
import { Navbar as Navbar2, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

function Navbar({ theme = "dark" }) {
    return (
        <Navbar2 variant={theme} style={{ color: "black" }}>
            <Link to="/">
                <Navbar2.Brand className="my-auto mb-1" style={{ fontSize: "1.5rem" }}>

                    {/* <img
                    alt=""
                    src="./EZCheckLogo.png"
                    // width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '} */}
                    <img src="./heartLogo.png" width="75" height="75" />
                    EZCheck
                </Navbar2.Brand>
            </Link>
            <Nav className="mr-auto " style={{ fontSize: "1.3rem", whiteSpace: "nowrap" }}>
                <Nav.Link as={Link} to="/" className="my-auto ">
                    Home
                </Nav.Link>
                <Nav.Link as={Link} to="/AboutUs" className="my-auto ">
                    About Us
                </Nav.Link>
                <Nav.Link as={Link} to="/resources" className="my-auto ">
                    Resources
                </Nav.Link>
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

