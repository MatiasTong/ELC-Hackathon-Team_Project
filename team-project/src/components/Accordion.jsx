import React from 'react'
import PropTypes from 'prop-types'
import {
    Card,
    Container,
    Accordion as Accordion2,
    Row,
    Col
} from "react-bootstrap";

function Accordion({stepTitle, stepDescription, children}, ...props) {
    return (

        <Accordion2 defaultActiveKey="1">
            <Card
                className="my-4 mx-auto"
                // bg={"Success".toLowerCase()}
                text={"white"}
                style={{
                    width: "80%", border: "none",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
                }}
                {...props} >
                <Accordion2.Toggle as={Card.Header}
                    // style={{ backgroundColor: "white", color: "black"}}
                    eventKey="0">
                    <Row style={{
                        fontFamily: "Montserrat, sans-serif", fontSize: "1.5rem"
                    }}>
                        <Col className="py-4 my-2 mx-2" md={2} style={{
                            marginLeft: "20px",
                            color: "white", fontWeight: "bold",
                            backgroundImage: "linear-gradient(135deg, rgb(255, 44, 167) 0%, rgb(230, 173, 201) 100%)",
                            // background: "linear-gradient(0deg, rgba(255, 0, 150, 0.3), rgba(255, 0, 150, 0.3)), url(https://images.unsplash.com/photo-1559759708-d6e99b50f0e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)",
                            //  backgroundImage: "url(https://images.unsplash.com/photo-1559759708-d6e99b50f0e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)",
                            backgroundSize: "cover"
                        }}>
                            {stepTitle}</Col>
                    <Col className="py-4 my-auto" md={9} style={{ color: "black", textAlign: "center" }} >{stepDescription}</Col>
                    </Row>

                </Accordion2.Toggle>
                <Accordion2.Collapse eventKey="0">
                    <Card.Body style={{ backgroundColor: "rgb(255, 227, 215, 0.2)" }}>
                        {children}

                    </Card.Body>
                </Accordion2.Collapse>
            </Card>
        </Accordion2>
    )
}

Accordion.propTypes = {

}

export default Accordion

