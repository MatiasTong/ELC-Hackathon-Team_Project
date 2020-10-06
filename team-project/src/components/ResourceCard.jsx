import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { StyledHelpfulButton, StyledCardBody } from "../styles/ResourceCard"
import LikeButton from "./LikeButton"
import DoctorButton from "./DoctorButton"
import { CgWebsite } from "react-icons/cg"
import { FaLink } from "react-icons/fa"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { BiLike } from "react-icons/bi"
import { FaPhoneAlt } from "react-icons/fa"
import { BsFillCameraVideoFill } from "react-icons/bs"
import { Row, Col, Button, Badge } from "react-bootstrap"
import { RiCalendarEventFill, RiStethoscopeFill, RiStethoscopeLine, RiEyeCloseFill } from "react-icons/ri"

// [{
//     type: "event, video, website, phone" 
//     title: "Getting A Mammogram When You Don't Have Insurance",
//    isOver40: Boolean,
//  isInsured:Boolean,
//     organization: "The American Cancer Society or Youtube",
//     url: "www.americancancersociety.com",
//     doctorLikes: 3,
//     regularLikes: 5,
//     tags: ["Recommended", "Under50"] up to three
// }, ...]


function ResourceCard({ type, likes, doctorLikes, tags, title, organization, url, phoneNumber }, ...props) {
    const [isLiked, setIsLiked] = useState(true);
    // const [likes, setLikes] = useState(0)
    // const [iconBackground, setIconBackground] = useState("#4B8FFD")

    // Change the color of the icon background
    let iconBackground = () => {
        if (type === "website") {
            return "#4B8FFD"
        } else if (type === "phone") {
            return "#62C15A"
        } else if (type === "event") {
            return "#FFA907"
        } else if (type === "video") {
            return "#FC698B"
        } else {
            return "#4B8FFD"
        }
    }

    let icon = () => {
        if (type === "website") {
            return <CgWebsite style={{ color: "white", opacity: "50%", fontSize: "3.2rem", padding: "0px", margin: "auto" }} />
        } else if (type === "phone") {
            return <FaPhoneAlt style={{ color: "white", opacity: "50%", fontSize: "3.2rem", padding: "0px", margin: "auto" }} />
        } else if (type === "event") {
            return <RiCalendarEventFill style={{ color: "white", opacity: "50%", fontSize: "3.2rem", padding: "0px", margin: "auto" }} />
        } else if (type === "video") {
            return <BsFillCameraVideoFill style={{ color: "white", opacity: "50%", fontSize: "3.2rem", padding: "0px", margin: "auto" }} />
        } else {
            return "none"
        }

    }


    let infoTag = () => {
        if (type === "website") {
            return (
                <div style={{
                    position: "absolute", right: "0px", top: "0px", fontSize: "14px", color: "white",
                    fontWeight: "bold", padding: "5px 10px", backgroundColor: "#4B8FFD"
                }}> Web </div>
            )
        } else if (type === "phone") {
            return (
                <div style={{
                    position: "absolute", right: "0px", top: "0px", fontSize: "14px", color: "white",
                    fontWeight: "bold", padding: "5px 10px", backgroundColor: "#62C15A"
                }}> Phone </div>
            )
        } else if (type === "event") {
            return (
                <div style={{
                    position: "absolute", right: "0px", top: "0px", fontSize: "14px", color: "white",
                    fontWeight: "bold", padding: "5px 10px", backgroundColor: "#FFA907"
                }}> Event </div>
            )
        } else if (type === "video") {
            return (
                <div style={{
                    position: "absolute", right: "0px", top: "0px", fontSize: "14px", color: "white",
                    fontWeight: "bold", padding: "5px 10px", backgroundColor: "#FC698B"
                }}> Video </div>
            )
        } else {
            return "none"
        }

    }



    return (

        <div>
            <a href={url} style={{ textDecoration: "none" }} target="_blank">
                <StyledCardBody className="container" >
                    {infoTag()}

                    <Row style={{ marginBottom: "0.5rem", display: "grid", fontSize: "14px", gridTemplateColumns: "repeat(4, 1fr)", justifyItems: "center" }}>
                        {/* Add list of tags to top of card */}
                        {tags ? tags.map(tag => (
                            <div style={{ color: "#908A8A", padding: "5px 10px" }}>
                                #{tag}
                            </div>
                        )) :
                            <div style={{ color: "white", padding: "5px 10px" }}>
                                NoTag
                        </div>
                        }
                    </Row>
                    <Row style={{ paddingBottom: "20px", position: "relative" }}>
                        <Col xs={3}>
                            <div style={{
                                justifyContent: "center",
                                alignItems: "center",
                                opacity: "90%",
                                backgroundColor: iconBackground(), display: "inline-flex", width: "5rem", height: "5rem",
                                // borderRadius: "10px", border: "1px solid lightgray",
                                boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
                            }}>
                                {/* The icon and background color changes based on resource type */}
                                {icon()}
                            </div>
                        </Col>

                        <Col xs={9} className="my-auto pl-1" style={{ position: "relative" }}>

                            {/* if it is a phone resource this places the number on the top line */}
                            {type === "phone" ?
                                <div>
                                    <h5 style={{
                                        marginBottom: "0px", fontSize: "20px", fontWeight: "bold",
                                        paddingBottom: "0.4rem"
                                    }}>
                                        {phoneNumber}
                                    </h5>
                                    <p style={{ marginBottom: "0px", fontWeight:"bold", lineHeight : "1rem", opacity: "60%"}}>
                                        {title}
                                    </p>
                                </div>
                                :
                                <h5 style={{ marginBottom: "0px", fontSize: "18px", fontWeight: "bold" }}>
                                    {title}
                                </h5>
                            }


                            <p style={{ marginBottom: "2px", color: "rgba(0, 0, 0, 0.8)", fontWeight: "bold", opacity: "38%" }}>
                                {organization}
                            </p>
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
                    <div style={{
                        width: "72%", position: "absolute", bottom: "10px", right: "10px", display: "grid",
                        gridTemplateColumns: "repeat(5, 1fr)"
                    }}>

                        <div style={{ color: "gray", fontWeight: "bold" }}>
                            < RiStethoscopeFill style={{ fontSize: "22px", padding: "0px" }} />{` ${doctorLikes}`}
                            {/* < RiStethoscopeLine style={{color: "gray", fontSize: "22px", padding: "0px" }}/>  3 */}
                        </div>
                        <div style={{ color: "gray", fontWeight: "bold" }}>
                            < BiLike style={{ fontSize: "22px", padding: "0px" }} /> {` ${likes}`}
                            {/* < AiOutlineHeart style={{color: "red", fontSize: "22px", padding: "0px" }}/>  3 */}
                        </div>
                        <div></div>
                        <div></div>

                        <div>
                            <Button variant="outline-info" size="sm">Helpful</Button>
                        </div>

                    </div>

                </StyledCardBody>
            </a>
        </div>
    )
}

ResourceCard.propTypes = {

}

export default ResourceCard

