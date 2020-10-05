import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from "react-bootstrap"
import Hero2 from "../components/Hero2"
import Media from 'react-bootstrap/Media'
import Steps from "../components/Steps"
import ResourceCard from "../components/ResourceCard"
import Navbar from "../components/Navbar"
import Gallery from "../components/Gallery"
import Footer from "../components/Footer"

function Case2(props) {
    return (
        <div>
            <Navbar />
            <Hero2 />
            <div style={{
                height: "50vh",
                padding: "0px",
                backgroundImage: "linear-gradient(to right, #FFCCCB 0%, #b19cd9 100%)",
                // borderImage: "linear-gradient(135deg, rgb(255, 44, 167) 0%, rgb(230, 173, 201)) 1"}}>
            }}>
            </div>

            <div style={{
                // backgroundImage: "url(https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)",
                // backgroundSize: "cover"
            }}>

                <div style={{
                    margin: "10px",
                    border: "10px solid",
                    padding: "0px",
                    // borderImage: "linear-gradient(135deg, rgb(255, 44, 167) 0%, rgb(230, 173, 201)) 1"}}>
                    borderImage: "linear-gradient(to right, #FFCCCB, #b19cd9) 1"
                }}>
                    <Steps />
                </div>

            </div>
            <di>
                
            </di>
            <section style={{ backgroundImage: "linear-gradient(to right, #b19cd9 0%, #FFCCCB 100%)" }}>
                
                <div style={{
                    padding: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor:"#f2f6fa",
                    margin:"10px"
                }}>
                    <Row className="justify-content-center">
                        <ResourceCard className="col mx-2" />
                        <ResourceCard className="col mx-2" />
                        <ResourceCard className="col mx-2" />
                    </Row>
                </div>
                <div className="py-5">

                    <Gallery />
                </div>

            </section>








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
        <Footer></Footer>
        </div>
    )
}

Case2.propTypes = {

}

export default Case2



