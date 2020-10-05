import React from 'react'
import PropTypes from 'prop-types'
import {Form, Nav, FormControl, Button} from "react-bootstrap"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"

function Home(props) {
    return (
        <div>
            <Navbar/>
            {/* <Navbar variant="dark" className = "Navbar fixed-top" >
                <Navbar.Brand style = {{fontSize: "1.5rem"}} href="#home">Overcomer</Navbar.Brand>
                <Nav className="mr-auto" style = {{fontSize: "1.3rem"}}>
                    <Nav.Link href="#home">About Us</Nav.Link>
                    <Nav.Link href="#resources">Resources</Nav.Link>
               
                </Nav>
                {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                </Form> */}
                
            {/* </Navbar>  */}
            <Hero/>
        </div>
    )
}

Home.propTypes = {

}

export default Home

