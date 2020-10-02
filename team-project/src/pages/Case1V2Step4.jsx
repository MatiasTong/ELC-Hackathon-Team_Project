import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import {
    Navbar,
    Form,
    Nav,
    FormControl,
    Button,
    Card,
    Container,
} from "react-bootstrap";
import Hero from "../components/Hero";
import InfoModal from "../components/InfoModal";

function Case1V2Step4(props) {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div>
            <Container className="mt-5">
                {/* Congrat message */}
                <Card
                    className="my-4 mx-auto"
                    bg={"Success".toLowerCase()}
                    text={"white"}
                    style={{ width: "80%" }}
                >
                    <Card.Header>
                        Step 4: Keep the report of your mammogram
                    </Card.Header>
                    <Card.Body>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Corporis nisi quis aspernatur nesciunt facilis,
                        eaque aliquid obcaecati ipsa est iste id laboriosam
                        excepturi, earum natus corrupti vel fugit tenetur error.
                    </Card.Body>
                </Card>
                {/* Modal */}
                <InfoModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
                {/* Options */}
                <Button
                    className="my-2 mx-auto"
                    variant="primary"
                    style={{ width: "80%", height: "5em" }}
                    onClick={() => setModalShow(true)}
                >
                    Save your screening result
                </Button>
                <Button
                    className="my-2 mx-auto"
                    variant="primary"
                    style={{ width: "80%", height: "5em" }}
                    onClick={() => setModalShow(true)}
                >
                    Set Alert for next year
                </Button>

                 {/* Next Button */}
                <Link to="/" smooth duration={1000}>
                    <Button
                        className="my-2 mx-auto"
                        variant="success"
                        style={{ width: "80%" }}
                    >
                        Next
                    </Button>
                </Link>
            </Container>
        </div>
    );
}

Case1V2Step4.propTypes = {};

export default Case1V2Step4;
