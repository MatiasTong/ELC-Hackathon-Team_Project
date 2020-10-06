import React from 'react'
import PropTypes from 'prop-types'
import {Popover, OverlayTrigger, Button} from "react-bootstrap"

function PopoverButton(props) {
    const popover = (
        <Popover id="popover-basic">
          <Popover.Title as="h3">Recommending A Resource</Popover.Title>
          <Popover.Content>
            Want to share a helpful resource? We can post it after it has been verified.
            <hr/>
            <span><b>Are you a health professional? </b></span>Create an account and share your recommended resources.
          </Popover.Content>
        </Popover>
      );

    return (
    <OverlayTrigger trigger="click" placement="left" overlay={popover}>
    <Button variant="outline-info" size="lg" style={{display:"inline-block", position:"absolute", top:"8px", right:"8px", borderRadius:"20px"}}>Recommend A Resource</Button>
    </OverlayTrigger>
    )
}

PopoverButton.propTypes = {

}

export default PopoverButton

 