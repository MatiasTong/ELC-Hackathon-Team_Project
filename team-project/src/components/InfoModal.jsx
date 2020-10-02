import React, { useState } from "react";

//bootstrap
import {Modal, Button} from "react-bootstrap";


function InfoModal({ handleChange, values, ...props }) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Who is my primary doctor?
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>- You can find you primary doctor on your insurance card.</p>
                <p>- Call your provider (see number on your card).</p>
                <p>- login to provider website.</p>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default InfoModal;
