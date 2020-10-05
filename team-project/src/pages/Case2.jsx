import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from "react-bootstrap"
import Hero2 from "../components/Hero2"
import Media from 'react-bootstrap/Media'
import StepsCase2 from "../components/StepsCase2"
import ResourceCard from "../components/ResourceCard"
import Navbar from "../components/Navbar"
import Gallery from "../components/Gallery"

function Case2(props) {
    return (
        <div style={{ backgroundImage: "linear-gradient(to right,#FFCCCB  0%,#b19cd9  100%)" }}>

            {/* Section 1: Header and navbar */}
            <header
                style={{
                    background: "linear-gradient(0deg, rgba(44, 31, 61, 0.35), rgba(22, 11, 11, 0.349)), url('https://images.unsplash.com/photo-1535469420027-517674dad7a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    minHeight: "100vh"
                }}>
                <Navbar />
                <Hero2 />
            </header>

            {/* Spacer div */}
            <div
                style={{
                    height: "6vh",
                    padding: "0px",
                    backgroundImage: "linear-gradient(to right, #FFCCCB 0%, #b19cd9 100%)",
                    // borderImage: "linear-gradient(135deg, rgb(255, 44, 167) 0%, rgb(230, 173, 201)) 1"}}>
                }}>
            </div>

            {/* Section 2: Steps or Options */}
            <div
                style={{
                    //  background: "linear-gradient(0deg, rgba(241, 241, 241,0.2), rgba(241, 241, 241,0.2)), url(https://images.unsplash.com/photo-1552035509-b247fe8e5078?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)",
                    borderRadius: "10px",
                    margin: "2.8rem",
                    backgroundColor: "#f2f6fa",
                    border: "none"
                }}>
                <StepsCase2 />
            </div>
            
            {/* Spacer Div */}
            <div
                style={{
                    height: "4vh",
                    padding: "0px",
                    backgroundImage: "linear-gradient(to right, #FFCCCB 0%, #b19cd9 100%)",
                    // borderImage: "linear-gradient(135deg, rgb(255, 44, 167) 0%, rgb(230, 173, 201)) 1"}}>
                }}>
            </div>


            {/* Section 3: Resources */}
            <div style={{
                padding: "20px",
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#f2f6fa",
                margin: "2.8rem"
            }}>
                <Row className="justify-content-center">
                    <ResourceCard className="col mx-2" />
                    <ResourceCard className="col mx-2" />
                    <ResourceCard className="col mx-2" />
                </Row>
            </div>


            {/* Spacer Div */}
            <div
                style={{
                    height: "4vh",
                    padding: "0px",
                    backgroundImage: "linear-gradient(to right, #FFCCCB 0%, #b19cd9 100%)",
                    // borderImage: "linear-gradient(135deg, rgb(255, 44, 167) 0%, rgb(230, 173, 201)) 1"}}>
                }}>
            </div>


            {/* Section 4: Gallery */}
            <div className="py-5" >
                <Gallery />
            </div>


             {/* Spacer Div */}
             <div
                style={{
                    height: "4vh",
                    padding: "0px",
                    backgroundImage: "linear-gradient(to right, #FFCCCB 0%, #b19cd9 100%)",
                    // borderImage: "linear-gradient(135deg, rgb(255, 44, 167) 0%, rgb(230, 173, 201)) 1"}}>
                }}>
            </div>









            {/* 
            <ul className="list-unstyled">
                <Media as="li" className="mx-5 my-5">
                    <img
                        width={250}
                        height={150}
                        className="mx-3"
                        src="https://www.cdc.gov/cancer/breast/basic_info/images/woman-doctor-250.jpg"
                        alt="Generic placeholder"
                    />
                    <Media.Body style={{ textAlign: "left" }} className="mx-5" >
                        <a href="https://www.cdc.gov/cancer/breast/basic_info/symptoms.htm" ><h5>What Are the Symptoms of Breast Cancer?</h5></a>
                        <p>
                            Different people have different symptoms of breast cancer. Some people
                            do not have symptoms at all. See a list of possible symptoms.
                        </p>
                    </Media.Body>
                </Media>
                <Media as="li" className="mx-5 my-5">
                    <img
                        width={250}
                        height={150}
                        className="mx-3 "
                        src="https://www.cdc.gov/cancer/breast/basic_info/images/3generations-250.jpg"
                        alt="Generic placeholder"
                    />
                    <Media.Body style={{ textAlign: "left" }} className="mx-5" >
                        <a href="https://www.cdc.gov/cancer/breast/basic_info/risk_factors.htm"><h5>What Are the Risk Factors for Breast Cancer?</h5></a>
                        <p>
                            Studies have shown that your risk for breast cancer is due to a combination of
                            factors. The main factors that influence your risk include being a woman and getting older.
                        </p>
                    </Media.Body>
                </Media>
                <Media as="li" className="mx-5 my-5">
                    <img
                        width={250}
                        height={150}
                        className="mx-3 "
                        src="https://www.cdc.gov/cancer/breast/basic_info/images/jogging-250.jpg"
                        alt="Generic placeholder"
                    />
                    <Media.Body style={{ textAlign: "left" }} className="mx-5" >
                        <a href="https://www.cdc.gov/cancer/breast/basic_info/prevention.htm"><h5>What Can I Do to Reduce My Risk of Breast Cancer?</h5></a>
                        <p>
                            Many factors over the course of a lifetime can influence your breast cancer risk.
                            You can’t change some factors, such as getting older or your family history, but
                            you can help lower your risk of breast cancer by taking care of your health.
                        </p>
                    </Media.Body>
                </Media>
                <Media as="li" className="mx-5 my-5">
                    <img
                        width={250}
                        height={150}
                        className="mx-3 "
                        src="https://www.cdc.gov/cancer/breast/basic_info/images/mammogram-250.jpg"
                        alt="Generic placeholder"
                    />
                    <Media.Body style={{ textAlign: "left" }} className="mx-5" >
                        <a href="https://www.cdc.gov/cancer/breast/basic_info/screening.htm"><h5>What Is Breast Cancer Screening?</h5></a>
                        <p>
                            Breast cancer screening means checking a woman’s breasts for cancer before there are
                            signs or symptoms of the disease. All women need to be informed by their health care
                            provider about the best screening options for them.
                        </p>
                    </Media.Body>
                </Media>
                <Media className="mx-5 my-5">
                    <Media.Body style={{ textAlign: "left" }} className="mx-5" >
                        <h2>Should women under age 40 get mammograms?</h2>
                        <h5>
                            In general, screening mammograms are not recommended for women under 40 years old. However,
                            for women with genetic mutations, screening can begin at 25, and in women with a family
                            history of breast cancer, screening is often initiated 10 years earlier than the first
                            affected relative in the family. Breast MRI is often recommended to high risk women in
                            addition to mammography.
                        </h5>
                    </Media.Body>
                </Media>

                <a href="http://www.zocdoc.com"><h1>Find doctors in your network</h1> </a>

            </ul> */}

        </div>
    )
}

Case2.propTypes = {

}

export default Case2



