import React from 'react'
import PropTypes from 'prop-types'
import { Navbar, Form, Nav, FormControl, Button } from "react-bootstrap"
import Hero2 from "../components/Hero2"
import Media from 'react-bootstrap/Media'

function Case2(props) {
    return (
        <div>
            <Navbar variant="dark" className="Navbar fixed-top" >
                <Navbar.Brand style={{ fontSize: "1.5rem" }} href="#home">Overcomer</Navbar.Brand>
                <Nav className="mr-auto" style={{ fontSize: "1.3rem" }}>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Prevention</Nav.Link>
                </Nav>
            </Navbar>
            <Hero2 />

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

            </ul>

        </div>
    )
}

Case2.propTypes = {

}

export default Case2



