import React from "react";
import { SocialIcon } from 'react-social-icons';
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon, MDBBtn, } from "mdbreact";
import {Link} from "react-router-dom"


const FooterPage = () => {
    return (
        <MDBFooter style={{ backgroundColor: '#ffe6e6', opacity:"90%" }} className="font-small pt-4 mt-4"  >
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="6">
                    <img src="./EZCheckLogo.png" />
                        <h5 className="title"></h5>
                        <p>
                            “Knowing it exists is not enough. Get informed. Pass it on.”
                        </p>
                    </MDBCol>
                    <MDBCol col-sm-4>
                        <ul>
                            <h5 className="title">Links</h5>

                            <li className="list-unstyled">
                                <Link to="/AboutUs">About Us</Link>
                            </li>
                            <li className="list-unstyled">
                                <Link to="/AboutUs">Contact Us</Link>
                            </li>
                            <li className="list-unstyled">
                                <Link to="/AboutUs">Help</Link>
                            </li>
                            {/* <li className="list-unstyled">
                                <a href="#!">Link 4</a>
                            </li> */}
                        </ul>
                    </MDBCol>
                    <MDBCol col-sm-4>
                        <ul>
                            <h5 className="title">Folow us on:</h5>

                            <li className="list-unstyled">
                                <SocialIcon url="#!" network="facebook" /> <SocialIcon url="#!" network="instagram" /> <SocialIcon url="#!" network="twitter" />
                            </li>
                            {/* <li className="list-unstyled">
                                <SocialIcon url="http://jaketrent.com" network="pinterest" /> <SocialIcon url="http://jaketrent.com" network="youtube" />
                            </li> */}
                            {/* <li className="list-unstyled">
                                <SocialIcon url="http://jaketrent.com" network="twitter" />
                            </li> */}
                            {/* <li className="list-unstyled">
                                <a href="#!">Link 4</a>
                            </li> */}
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div style={{backgroundColor: "#FFCCCB" }} className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href="#!"> ezcheck.com </a>
                </MDBContainer>
            </div>
        </MDBFooter>

    );
}

export default FooterPage;