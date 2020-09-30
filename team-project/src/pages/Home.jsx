import React from 'react'
import PropTypes from 'prop-types'
import {Navbar, Form, Nav, FormControl, Button} from "react-bootstrap"
import Hero from "../components/Hero"

function Home(props) {
    return (
        <div>
            <Navbar variant="dark" className = "Navbar fixed-top" >
                <Navbar.Brand style = {{fontSize: "1.5rem"}} href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto" style = {{fontSize: "1.3rem"}}>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                </Form> */}
            </Navbar>
            <Hero/>
        </div>
    )
}

Home.propTypes = {

}

export default Home

