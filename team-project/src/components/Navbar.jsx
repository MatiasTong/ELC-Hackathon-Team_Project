import React from 'react'
import PropTypes from 'prop-types'
import { Navbar as Navbar2, Nav } from "react-bootstrap"
import {Link} from "react-router-dom"

function Navbar({ theme = "dark" }) {
    return (
        <Navbar2 variant={theme} style={{ color: "black" }}>
           <Link to = "/">
            <Navbar2.Brand lassName="my-auto " style={{ fontSize: "1.5rem" }}>

                {/* <img
                    alt=""
                    src="./EZCheckLogo.png"
                    // width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '} */}
                    EZCheck
                </Navbar2.Brand>
           </Link>
            <Nav className="mr-auto " style={{ fontSize: "1.3rem", whiteSpace: "nowrap" }}>
                <Nav.Link className="my-auto " href="/">Home</Nav.Link>
                <Nav.Link className="my-auto " href="/resources">Resources</Nav.Link>
                <Nav.Link className="my-auto " href="/AboutUs">About Us</Nav.Link>
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

