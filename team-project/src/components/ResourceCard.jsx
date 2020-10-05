import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { StyledCard, StyledCardHeader, StyledCardFooter, StyledCardBody } from "../styles/ResourceCard"
import LikeButton from "./LikeButton"
import DoctorButton from "./DoctorButton"
import { FcLink } from "react-icons/fc"
import { FaLink } from "react-icons/fa"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { BsCheckBox } from "react-icons/bs"
import { Row, Col, Button, Badge } from "react-bootstrap"
import { RiStethoscopeFill, RiStethoscopeLine } from "react-icons/ri"

function ResourceCard({ title, link }, ...props) {
    const [isLiked, setIsLiked] = useState(true);
    const [likes, setLikes] = useState(0)

    return (
        <div>
            {/* <StyledCard className="container" {...props} > */}
            {/* <StyledCardHeader >
                 30 days ago <span style={{color:"white", fontWeight:"bold"}}><BsCheckBox/></span>
                </StyledCardHeader> */}
            <StyledCardBody className="container" >
                <div style={{
                    position: "absolute",
                    right: "0px", top: "0px",
                    fontSize: "14px", color: "white", fontWeight: "bold",
                    padding: "5px 10px", backgroundColor: "#4B8FFD"
                }}>
                    Web
                        </div>
                <Row style={{ marginBottom: "1rem", display: "grid", fontSize: "14px", gridTemplateColumns: "repeat(4, 1fr)", justifyItems: "center" }}>
                    <div style={{ color: "#908A8A", padding: "5px 10px" }}>
                        #Recommended
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>

                </Row>
                <Row style={{paddingBottom:"20px"}}>
                    <Col xs={3}>
                        {/* transform: "rotate(-45deg)", */}
                        <div style={{
                            justifyContent: "center",
                            alignItems: "center",
                            // marginRight: "2rem",
                            backgroundColor: "white", display: "inline-flex", width: "5rem", height: "5rem",
                            borderRadius: "10px", border: "1px solid lightgray",
                            boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
                            // position: "absolute", top:"-30px", left:"20px"
                        }}>
                            <FcLink style={{ fontSize: "3rem", padding: "0px", margin: "auto" }} />
                        </div>
                    </Col>

                    <Col xs={9} className="my-auto pl-0">
                        <h5 style={{ marginBottom: "0px", fontSize: "18px", fontWeight: "bold" }}>Breast Cancer and Mammogram Information</h5>
                        <p style={{ marginBottom: "2px", color: "rgba(0, 0, 0, 0.8)", fontWeight: "bold", opacity: "38%" }}>The American Cancer Society </p>
                        {/* <p style={{ fontSize: "0.8rem", marginTop: "0px" }}>Last checked 2 days ago</p> */}
                        <br/>
                        <div style={{ width:"100%", position: "absolute", bottom: "0px", display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>

                                <div>
                                    < RiStethoscopeFill style={{ color: "gray", fontSize: "22px", padding: "0px" }} />  3
                       {/* < RiStethoscopeLine style={{color: "gray", fontSize: "22px", padding: "0px" }}/>  3 */}
                                </div>
                                <div>
                                    < AiFillHeart style={{ color: "red", fontSize: "22px", padding: "0px" }} />  3
                       {/* < AiOutlineHeart style={{color: "red", fontSize: "22px", padding: "0px" }}/>  3 */}
                                </div>
    
                        </div>

                    </Col>


                </Row>
                {/* <Row style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", justifyItems: "center" }}>
                    <div>
                        < RiStethoscopeFill style={{ color: "gray", fontSize: "22px", padding: "0px" }} />  3
                       {/* < RiStethoscopeLine style={{color: "gray", fontSize: "22px", padding: "0px" }}/>  3 */}
                    {/* </div> */}
                    {/* <div> */}
                        {/* < AiFillHeart style={{ color: "red", fontSize: "22px", padding: "0px" }} />  3 */}
                       {/* < AiOutlineHeart style={{color: "red", fontSize: "22px", padding: "0px" }}/>  3 */}
                    {/* </div> */}
                {/* </Row>   */}

            </StyledCardBody>
            {/* <StyledCardFooter>
                <div></div>
                <div></div>


                <DoctorButton/>
               
                <LikeButton />
                
                   
                
                 

                </StyledCardFooter> */}
            {/* </StyledCard> */}

        </div>
    )
}

ResourceCard.propTypes = {

}

export default ResourceCard

