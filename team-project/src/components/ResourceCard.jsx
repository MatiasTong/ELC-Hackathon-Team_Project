import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { StyledCard, StyledCardHeader, StyledCardFooter, StyledCardBody } from "../styles/ResourceCard"
import LikeButton from "./LikeButton"
import DoctorButton from "./DoctorButton"
import { CgWebsite } from "react-icons/cg"
import { FaLink } from "react-icons/fa"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { BiLike } from "react-icons/bi"
import { Row, Col, Button, Badge } from "react-bootstrap"
import { RiStethoscopeFill, RiStethoscopeLine } from "react-icons/ri"

// [{
//     type: "event, video, website, phone" 
//     title: "Getting A Mammogram When You Don't Have Insurance",
//     organization: "The American Cancer Society or Youtube",
//     url: "www.americancancersociety.com",
//     doctorLikes: 3,
//     regularLikes: 5,
//     tags: ["Recommended", "Under50"] up to three
// }, ...]


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
                <Row style={{ marginBottom: "0.5rem", display: "grid", fontSize: "14px", gridTemplateColumns: "repeat(4, 1fr)", justifyItems: "center" }}>
                    <div style={{ color: "#908A8A", padding: "5px 10px" }}>
                        #Recommended
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>

                </Row>
                <Row style={{ paddingBottom: "20px", position: "relative" }}>
                    <Col xs={3}>
                        {/* transform: "rotate(-45deg)", */}
                        <div style={{
                            justifyContent: "center",
                            alignItems: "center",
                            opacity: "90%",
                            // marginRight: "2rem",
                            backgroundColor: "#4B8FFD", display: "inline-flex", width: "5rem", height: "5rem",
                            // borderRadius: "10px", border: "1px solid lightgray",
                            boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
                            // position: "absolute", top:"-30px", left:"20px"
                        }}>
                            <CgWebsite style={{ color: "white", opacity: "50%", fontSize: "3.2rem", padding: "0px", margin: "auto" }} />
                        </div>
                    </Col>

                    <Col xs={9} className="my-auto pl-1" style={{ position: "relative" }}>
                        <h5 style={{ marginBottom: "0px", fontSize: "18px", fontWeight: "bold" }}>Getting A Mammogram When You Don't Have Insurance</h5>
                        <p style={{ marginBottom: "2px", color: "rgba(0, 0, 0, 0.8)", fontWeight: "bold", opacity: "38%" }}>The American Cancer Society </p>

                        {/* <p style={{ fontSize: "0.8rem", marginTop: "0px" }}>Last checked 2 days ago</p> */}
                        <br />
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
                <div style={{ width: "72%", position: "absolute", bottom: "10px", right: "10px", display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>

                    <div style={{ color: "gray", fontWeight: "bold" }}>
                        < RiStethoscopeFill style={{ fontSize: "22px", padding: "0px" }} />  3
                       {/* < RiStethoscopeLine style={{color: "gray", fontSize: "22px", padding: "0px" }}/>  3 */}
                    </div>
                    <div style={{ color: "gray", fontWeight: "bold" }}>
                        < BiLike style={{ fontSize: "22px", padding: "0px" }} />  3
                       {/* < AiOutlineHeart style={{color: "red", fontSize: "22px", padding: "0px" }}/>  3 */}
                    </div>
                    <div></div>
                    <div></div>

                    <div>
                        <Button variant="primary" size="sm" >Helpful</Button>
                    </div>

                </div>

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

