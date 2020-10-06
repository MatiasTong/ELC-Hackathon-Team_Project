import React, { useState } from "react";
import {
    Card,
    Container,
    Row,
    Col,
    Accordion as Accordion3,
} from "react-bootstrap";
import Accordion from "./Accordion";
// import PropTypes from "prop-types";
// import InfoModal from "./InfoModal";
// import Option from "./Option"

function StepsCase2(props) {
    // const [modalShow, setModalShow] = React.useState(false);

    return (
        <Container className="py-5">
            <div style={{ textAlign: "left", marginBottom: "2rem" }}>
                <h2
                    style={{
                        fontSize: "3.2rem",
                        fontWeight: "bold",
                        opacity: "50%",
                    }}
                >
                    How to Get Started
                </h2>
                <h3
                    style={{
                        fontSize: "2.8rem",
                        fontWeight: "bold",
                        opacity: "80%",
                    }}
                >
                    Step by Step Directions
                </h3>
            </div>

            {/* Step: 1 */}
            <Accordion
                stepTitle="Step 1"
                stepDescription="Call your primary doctor to make an appointment"
            >
                <Row className="justify-content-center">
                    <Card
                        className="col-9 px-0 m-2"
                        style={{ color: "black", width: "50%" }}
                    >
                        <Card.Body style={{ textAlign: "left" }}>
                            <h4>
                                Call your primary doctor directly to make an
                                appointment
                            </h4>
                            <p>
                                - You may find your primary doctor on the card
                                as PCP (Primary Care Physicians) as well as
                                phone number.
                            </p>
                            <p>
                                - If you can't find primary doctor on your card,
                                please try visit their website and login to see
                                who is your primary doctor or simply call the
                                provider to find out.
                            </p>
                            <p>
                                - When you call the doctor you could ask for
                                yearly check up if you didn't do so already and
                                specifically ask to get mammogram
                            </p>
                            <p>
                                - If you already do the yearly checkup please
                                ask if the doctor already did a mammogram if not
                                you can request for one.
                            </p>
                        </Card.Body>
                    </Card>
                    <Card
                        className="col-9 px-0 m-2"
                        style={{ color: "black", width: "50%" }}
                    >
                        <Card.Body style={{ textAlign: "left" }}>
                            <h4>
                                Using third-party app or website to make
                                appointment online
                            </h4>
                            <p>
                                - There are varieties of apps and websites that
                                could help you make appointments easily through
                                their website or app. This is a great way if you
                                don’t like to speak directly to someone to make
                                an appointment.
                            </p>
                            <p>
                                - We recommend you to checkout Zocdoc.{" "}
                                <a
                                    href="https://www.zocdoc.com/"
                                    target="_blank"
                                >
                                    Click Here
                                </a>
                            </p>
                        </Card.Body>
                    </Card>
                    <Card
                        className="col-9 px-0 m-2"
                        style={{ color: "black", width: "50%" }}
                    >
                        <Card.Body style={{ textAlign: "left" }}>
                            <h4>Do not have primary doctor?</h4>
                            <p>
                                - You may have to contact your care provider or
                                insurance to assign a primary doctor for you.
                                That way you know which doctor is in network.
                            </p>
                            <p>
                                - You may find your phone number on your card.
                            </p>
                            <p>
                                - Things to consider when choose your primary
                                doctor.{" "}
                                <a
                                    href="https://www.bcbs.com/five-tips-choosing-new-primary-care-physician"
                                    target="_blank"
                                >
                                    Click Here
                                </a>
                            </p>
                        </Card.Body>
                    </Card>
                    <Card
                        className="col-9 px-0 m-2"
                        style={{ color: "black", width: "50%" }}
                    >
                        <Card.Body style={{ textAlign: "left" }}>
                            <h4>What to expect and How to prepare</h4>
                            <p>
                                - Most primary doctors will not do mammograms
                                themselves, but you will need their referral for
                                you to make an appointment with radiology. Make
                                sure you get the referral or prescription for
                                your mammogram.
                            </p>
                            <p>
                                - It is good to prepare a few thing before go
                                see you doctor. Here are a few steps.{" "}
                                <a
                                    href="https://www.healthcare.gov/blog/get-ready-doctors-appointment/"
                                    target="_blank"
                                >
                                    Click Here
                                </a>
                            </p>
                        </Card.Body>
                    </Card>
                </Row>
            </Accordion>

            {/* Step: 2 */}
            <Accordion
                stepTitle="Step 2"
                stepDescription="Make appointment with radiology lab/ clinic"
            >
                <Row className="justify-content-center">
                    <Card
                        className="col-9 px-0 m-2"
                        style={{ color: "black", width: "50%" }}
                    >
                        <Card.Body style={{ textAlign: "left" }}>
                            <h4>Find radiology in your area</h4>
                            <p>
                                - If your primary doctor doesn't provide you a
                                radiologist or the radiologist provided is not
                                covered in your network. You will have to start
                                with finding the radiologist you want to go to.
                            </p>
                            <p>
                                - You can easily find a radiologist near you by
                                using a third-party app like Zocdoc or quick
                                google search.
                            </p>
                            <p>
                                - You can also call your insurance or care
                                provider to give you list of radiologist within
                                your network.
                            </p>
                            <p>
                                - When you find a radiologist make sure that it
                                is cover in your network (insurance).
                            </p>
                        </Card.Body>
                    </Card>
                    <Card
                        className="col-9 px-0 m-2"
                        style={{ color: "black", width: "50%" }}
                    >
                        <Card.Body style={{ textAlign: "left" }}>
                            <h4>
                                Make appointment using third-party app/ website.
                            </h4>
                            <p>
                                - There are varieties of apps and websites that
                                could help you make appointments easily through
                                their website or app. This is a great way if you
                                don’t like to speak directly to someone to make
                                an appointment.
                            </p>
                            <p>
                                - We recommend you to checkout Zocdoc.{" "}
                                <a
                                    href="https://www.zocdoc.com/"
                                    target="_blank"
                                >
                                    Click Here
                                </a>
                            </p>
                            <p>
                                - Make sure you make an appointment for a
                                mammogram for breast cancer screening.
                            </p>
                        </Card.Body>
                    </Card>
                    <Card
                        className="col-9 px-0 m-2"
                        style={{ color: "black", width: "50%" }}
                    >
                        <Card.Body style={{ textAlign: "left" }}>
                            <h4>
                                Making appointment by calling the radiologist
                                directly
                            </h4>
                            <p>
                                - It is important to ask to make sure that the
                                radiologist you choose still accepts your
                                insurance.
                            </p>
                            <p>
                                - It is also a good idea to mention your primary
                                doctor if he/she refers to make an appointment
                                with them.
                            </p>
                            <p>
                                - Make sure you make an appointment for a
                                mammogram for breast cancer screening.
                            </p>
                        </Card.Body>
                    </Card>
                    <Card
                        className="col-9 px-0 m-2"
                        style={{ color: "black", width: "50%" }}
                    >
                        <Card.Body style={{ textAlign: "left" }}>
                            <h4>What to expect and How to prepare</h4>
                            <p>
                                - There is a great resource on tips for getting
                                Mammogram.{" "}
                                <a
                                    href="https://www.cancer.org/cancer/breast-cancer/screening-tests-and-early-detection/mammograms/mammograms-what-to-know-before-you-go.html"
                                    target="_blank"
                                >
                                    Click Here
                                </a>
                            </p>
                            <p>
                                - It is good to prepare a few thing before go
                                see you doctor. Here are a few steps.{" "}
                                <a
                                    href="https://www.healthcare.gov/blog/get-ready-doctors-appointment/"
                                    target="_blank"
                                >
                                    Click Here
                                </a>
                            </p>
                        </Card.Body>
                    </Card>
                </Row>
            </Accordion>
            {/* Step: 3 */}
            <Accordion stepTitle="Step 3" stepDescription="Wait for the result">
                <Row className="justify-content-center">
                    <Card
                        className="col-9 px-0 m-2"
                        style={{ color: "black", width: "50%" }}
                    >
                        <Card.Body style={{ textAlign: "left" }}>
                            <h4>Getting call back after a Mammogram?</h4>
                            <p>
                                - It is common to getting a called back after a
                                screening. I doesn't mean you have breast
                                cancer. Only 1 of 10 women called back for more
                                tests are found to have cancer.
                            </p>
                            <p>
                                - The pictures weren’t clear or didn't show some
                                of your breast tissue and need to be retaken.
                            </p>
                            <p>
                                - You may have dense breast tissue, which can
                                make it hard to see some parts of your breasts.
                            </p>
                            <p>
                                - The radiologist may sees calcifications or a
                                mass (which could be a cyst or solid mass).
                            </p>
                        </Card.Body>
                    </Card>

                    <Card
                        className="col-9 px-0 m-2"
                        style={{ color: "black", width: "50%" }}
                    >
                        <Card.Body style={{ textAlign: "left" }}>
                            <h4>Some other test you may encounter</h4>
                            <p>
                                - <strong>Breast Ultrasound</strong>:Breast
                                ultrasound uses sound waves to make a computer
                                picture of the inside of the breast. It can show
                                certain breast changes, like fluid-filled cysts,
                                that are harder to identify on mammograms.{" "}
                                <a
                                    href="https://www.cancer.org/cancer/breast-cancer/screening-tests-and-early-detection/breast-ultrasound.html"
                                    target="_blank"
                                >
                                    More Info
                                </a>
                            </p>
                            <p>
                                - <strong>Breast MRI</strong>:Breast MRI
                                (magnetic resonance imaging) uses radio waves
                                and strong magnets to make detailed pictures of
                                the inside of the breast.
                                <a
                                    href="https://www.cancer.org/cancer/breast-cancer/screening-tests-and-early-detection/breast-mri-scans.html"
                                    target="_blank"
                                >
                                    More Info
                                </a>
                            </p>
                            <p>
                                - <strong>Breast Biopsy</strong>: When other
                                tests show that you might have breast cancer,
                                you will probably need to have a biopsy. Needing
                                a breast biopsy doesn’t necessarily mean you
                                have cancer. Most biopsy results are not cancer,
                                but a biopsy is the only way to find out for
                                sure.
                                <a
                                    href="https://www.cancer.org/cancer/breast-cancer/screening-tests-and-early-detection/breast-biopsy.html"
                                    target="_blank"
                                >
                                    More Info
                                </a>
                            </p>
                        </Card.Body>
                    </Card>

                    <Card
                        className="col-9 px-0 m-2"
                        style={{ color: "black", width: "50%" }}
                    >
                        <Card.Body style={{ textAlign: "left" }}>
                            <h4>How can I stay claim while waiting?</h4>
                            <p>
                                Waiting for appointments and the results of
                                tests can be frightening. Many women have strong
                                emotions, such as disbelief, anxiety, fear,
                                anger, or sadness during this time. Here are
                                some things to remember
                            </p>
                            <p>- It’s normal to have these feelings.</p>
                            <p>
                                - Most breast changes are not cancer and are not
                                life-threatening.
                            </p>
                            <p>
                                - Talking with a loved one or a counselor about
                                your feelings may help.
                            </p>
                            <p>
                                - Talking with other women who have been through
                                a breast biopsy may help.
                            </p>
                            <p>
                                - The American Cancer Society is available at
                                1-800-227-2345 around the clock to answer your
                                questions and provide support.
                            </p>
                            <p>
                                Source:{" "}
                                <a
                                    href="https://www.cancer.org/cancer/breast-cancer/screening-tests-and-early-detection/mammograms/getting-called-back-after-a-mammogram.html"
                                    target="_blank"
                                >
                                    Click Here
                                </a>
                            </p>
                        </Card.Body>
                    </Card>
                </Row>
            </Accordion>

            {/* Step 4 */}
            <Accordion stepTitle="Step 4" stepDescription="Keep your result">
                <Row className="justify-content-center">
                    <Card
                        className="col-9 px-0 m-2"
                        style={{ color: "black", width: "50%" }}
                    >
                        <Card.Body style={{ textAlign: "left" }}>
                            <h4>Understanding your results</h4>
                            <p>
                                - A doctor called a radiologist will categorize
                                your mammogram results using a numbered system.
                                You should talk to your doctor about your
                                mammogram's category and what you need to do
                                next.
                            </p>
                            <p>
                                - For more in-depth about how to read your
                                result{" "}
                                <a
                                    href="https://www.cancer.org/cancer/breast-cancer/screening-tests-and-early-detection/mammograms/understanding-your-mammogram-report.html"
                                    target="_blank"
                                >
                                    click here
                                </a>
                            </p>
                        </Card.Body>
                    </Card>

                    <Card
                        className="col-9 px-0 m-2"
                        style={{ color: "black", width: "50%" }}
                    >
                        <Card.Body style={{ textAlign: "left" }}>
                            <h4>Getting call back after a Mammogram?</h4>
                            <p>
                                - It is common to getting a called back after a
                                screening. I doesn't mean you have breast
                                cancer. Only 1 of 10 women called back for more
                                tests are found to have cancer.
                            </p>
                        </Card.Body>
                    </Card>

                    <Card
                        className="col-9 px-0 m-2"
                        style={{ color: "black", width: "50%" }}
                    >
                        <Card.Body style={{ textAlign: "left" }}>
                            <h4>Understand limitations of mammograms</h4>
                            <p>
                                - Mammograms are the best breast cancer
                                screening tests we have at this time. But
                                mammograms have their limits. For example, they
                                aren’t 100% accurate in showing if a woman has
                                breast cancer
                            </p>
                            <p>
                                - A false-negative mammogram looks normal even
                                though breast cancer is present. Overall,
                                screening mammograms do not find about 1 in 5
                                breast cancers.
                            </p>
                            <p>
                                A false-positive mammogram looks abnormal even
                                though no cancer is actually present. Abnormal
                                mammograms often require extra testing
                                (diagnostic mammograms, ultrasound, and
                                sometimes MRI or even a breast biopsy) to find
                                out if the change is cancer.
                            </p>
                            <p>
                                understand more in-depth please visit{" "}
                                <a
                                    href="https://www.cancer.org/cancer/breast-cancer/screening-tests-and-early-detection/mammograms/understanding-your-mammogram-report.html"
                                    target="_blank"
                                >
                                    here
                                </a>
                            </p>
                        </Card.Body>
                    </Card>

                    <Card
                        className="col-9 px-0 m-2"
                        style={{ color: "black", width: "50%" }}
                    >
                        <Card.Body style={{ textAlign: "left" }}>
                            <h4>
                                Keep your result & set alert for next year
                                checkup
                            </h4>
                            <p>
                                - It is important to keep your result for next
                                time you go checkup again.
                            </p>
                            <p>
                                - It may prevent you from having to do some
                                repetitive or unnecessary tests.
                            </p>
                            <p>
                                - It helps radiologists spot cancer easier and
                                more accurately.
                            </p>
                            <p>
                                - Sign up with us and let us help you keep your record{" "}
                                <a
                                    href="#"
                                    target="_blank"
                                >
                                    Sign up here
                                </a>
                            </p>
                        </Card.Body>
                    </Card>
                </Row>
            </Accordion>
        </Container>
    );
}

StepsCase2.propTypes = {};

export default StepsCase2;
