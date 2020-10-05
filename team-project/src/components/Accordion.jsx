import React from 'react'
import PropTypes from 'prop-types'
import {
    Card,
    Row,
    Col,
    Accordion as Accordion2
} from "react-bootstrap";
import { StyledWrapper } from "../styles/Accordion"

function Accordion({ stepTitle, stepDescription, children, id, 
    stepColor="linear-gradient(135deg, rgb(255, 44, 167) 0%, rgb(230, 173, 201) 100%)"}, ...props) {
    return (

        <Accordion2 defaultActiveKey="1" className={id}>

            <StyledWrapper>
            <Card
                className="my-4 mx-auto"
                id="toggle"
                style={{
                    width: "100%", border: "none", backgroundColor: "rgb(255,255,255)",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
                }}
                {...props} >
                    <Accordion2.Toggle as={Card.Header}
                        style={{ backgroundColor: "white" }}
                        eventKey="0"

                    >
                        <Row style={{
                            fontFamily: "Montserrat, sans-serif", fontSize: "1.5rem",
                            alignItems: "center"
                        }}>
                            <Col className="my-1 mx-2 py-4 px-2 h-100" md={2} style={{
                                marginLeft: "20px",
                                alignItems: "center",
                                justifyContent: "center",
                                display: "flex",
                                color: "white",
                                whiteSpace: "nowrap",
                                fontWeight: "bold",
                                backgroundImage: stepColor,
                                backgroundSize: "cover",
                                fontSize: "1.8rem"
                            }}
                            >
                                <span > {stepTitle}</span>
                            </Col>
                            <Col className="py-4 my-auto"
                                md={9}
                                style={{ color: "black", textAlign: "left", fontSize: "1.5rem" }}>
                                {stepDescription}
                            </Col>
                        </Row>

                    </Accordion2.Toggle>
                <Accordion2.Collapse eventKey="0">
                    <Card.Body style={{ backgroundColor: "rgb(255, 227, 215, 0.2)" }}>
                        {children}

                    </Card.Body>
                </Accordion2.Collapse>
            </Card>
                </StyledWrapper>
        </Accordion2>
    )
}

Accordion.propTypes = {

}

export default Accordion

