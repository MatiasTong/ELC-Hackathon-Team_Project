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
                {/* <StyledCardHeader >
                 30 days ago <span style={{color:"white", fontWeight:"bold"}}><BsCheckBox/></span>
                </StyledCardHeader> */}
                <StyledCardBody>
                    <Row>
                        <Col xs={2} sm={2} className="mx-2">
                        {/* transform: "rotate(-45deg)", */}
                            <div style={{
                                justifyContent:"center",
                                alignItems:"center",
                                // marginRight: "2rem",
                                backgroundColor: "white",  display: "inline-flex", width: "5rem", height: "5rem",
                                 borderRadius: "10px", border: "1px solid lightgray",
                                boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
                                // position: "absolute", top:"-30px", left:"20px"
                            }}>
                                <FcLink style={{ fontSize: "3rem", padding: "0px", margin: "auto" }} />
                            </div>
                        </Col>

                        <Col md={9} sm={8} xs={8} className="my-auto">
                            <h5 style={{fontSize: "18px", fontWeight:"bold"}}>Breast Cancer and Mammogram Information</h5>
                            <p style={{marginBottom:"2px", color: "rgba(0, 0, 0, 0.8)"}}>By American Cancer Society </p>
                            <p style={{fontSize:"0.8rem", marginTop:"0px"}}>Last checked 2 days ago</p>
                            <div style={{display:"grid", gridTemplateColumns: "repeat(4, 1fr)"}}>


                            </div>
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

