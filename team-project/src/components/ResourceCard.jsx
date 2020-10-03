import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { StyledCard, StyledCardHeader, StyledCardFooter, StyledCardBody } from "../styles/ResourceCard"
import LikeButton from "./LikeButton"
import DoctorButton from "./DoctorButton"
import { FcLink } from "react-icons/fc"
import { FaLink } from "react-icons/fa"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import {BsCheckBox} from "react-icons/bs"
import { Row, Col, Button, Badge } from "react-bootstrap"

function ResourceCard({ title, link }, ...props) {
    const [isLiked, setIsLiked] = useState(true);
    const [likes, setLikes] = useState(0)

    return (
        <div>
            <StyledCard {...props} >
                <StyledCardHeader >
                 30 days ago <span style={{color:"white", fontWeight:"bold"}}><BsCheckBox/></span>
                </StyledCardHeader>
                <StyledCardBody>
                    <Row>
                        <Col xs={2}>
                        {/* transform: "rotate(-45deg)", */}
                            <div style={{
                                marginLeft: "5px",
                                backgroundColor: "white",  transform: "rotate(-45deg)", display: "inline-flex", width: "50px", height: "50px", borderRadius: "50%", border: "1px solid lightgray",
                                boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
                                // position: "absolute", top:"-30px", left:"20px"
                            }}>
                                <FcLink style={{ fontSize: "2rem", padding: "0px", margin: "auto" }} />
                            </div>
                        </Col>

                        <Col md={9} sm={9} className="my-auto">
                            <h5>Breast Cancer and Mammogram Information</h5>
                            <p>By American Cancer Society </p>
                        </Col>


                    </Row>

                </StyledCardBody>
                <StyledCardFooter>
                <div></div>
                <div></div>
                <DoctorButton/>
               
                <LikeButton />
                
                   
                
                 

                </StyledCardFooter>
            </StyledCard>

        </div>
    )
}

ResourceCard.propTypes = {

}

export default ResourceCard

