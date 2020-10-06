import React from 'react'
import PropTypes from 'prop-types'
import {Form, Nav, FormControl, Button} from "react-bootstrap"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

function Home(props) {


    return (
        <div style = {{ background: "url('https://images.unsplash.com/photo-1598884143267-586d90a32141?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: "100vh"}}>
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
            {/* <Footer/> */}
            

        </div>
    )
}

Home.propTypes = {

}

export default Home

